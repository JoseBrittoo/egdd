import os
import requests
from pathlib import Path
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from sqlalchemy import Column, Integer, String, Text
from database import SessionLocal, engine, Base, User, Message as DBMessage, init_db

load_dotenv(dotenv_path=Path(__file__).parent / ".env")

init_db()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Login
class LoginRequest(BaseModel):
    email: str
    password: str

@app.post("/login")
async def login(request: LoginRequest):
    db = SessionLocal()
    user = db.query(User).filter_by(email=request.email).first()
    db.close()
    if user and user.check_password(request.password):
        return {"success": True, "message": "Login bem-sucedido"}
    raise HTTPException(status_code=401, detail="Credenciais inválidas")


# Chat com OpenRouter
API_URL = "https://openrouter.ai/api/v1/chat/completions"

class Message(BaseModel):
    role: str
    content: str

class ChatRequest(BaseModel):
    messages: list[Message]

@app.post("/chat")
async def chat(req: ChatRequest):
    try:
        db = SessionLocal()
        user = db.query(User).filter_by(email="admin@egdd.com").first()

        api_key = os.getenv("OPENROUTER_API_KEY")
        headers = {
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json",
            "HTTP-Referer": "http://localhost:3000",
            "X-Title": "EGDD-Chat"
        }

        response = requests.post(
            API_URL,
            headers=headers,
            json={
                "model": "meta-llama/llama-3-8b-instruct",
                "messages": [message.dict() for message in req.messages],
                "temperature": 0.7,
                "max_tokens": 500
            }
        )

        if response.status_code != 200:
            print("HEADERS:", headers)
            print("API_KEY:", api_key)
            return {"reply": f"Erro da OpenRouter: {response.status_code} - {response.text}"}

        data = response.json()
        reply_text = data["choices"][0]["message"]["content"]

        for msg in req.messages:
            db.add(DBMessage(user_id=user.id, role=msg.role, content=msg.content))

        db.add(DBMessage(user_id=user.id, role="assistant", content=reply_text))
        db.commit()

        return {"reply": reply_text}

    except Exception as e:
        return {"reply": f"Erro inesperado no servidor: {str(e)}"}
    finally:
        db.close()


# Contexto Educacional
class ContextoEducacional(Base):
    __tablename__ = "contexto_educacional"

    id = Column(Integer, primary_key=True, index=True)
    tema = Column(String)
    conteudo = Column(String)
    publico_alvo = Column(String)
    problema_aprendizagem = Column(Text)
    objetivo = Column(String)
    curriculo = Column(String)

Base.metadata.create_all(bind=engine)

class ContextoRequest(BaseModel):
    tema: str
    conteudo: str
    publico_alvo: str
    problema_aprendizagem: str
    objetivo: str
    curriculo: str

@app.post("/contexto")
async def salvar_contexto(dados: ContextoRequest):
    db = SessionLocal()
    try:
        contexto = ContextoEducacional(**dados.dict())
        db.add(contexto)
        db.commit()
        return {"success": True, "message": "Contexto salvo com sucesso"}
    except Exception as e:
        return {"success": False, "message": f"Erro: {str(e)}"}
    finally:
        db.close()

@app.get("/contexto")
async def obter_contexto():
    db = SessionLocal()
    try:
        contexto = db.query(ContextoEducacional).order_by(ContextoEducacional.id.desc()).first()
        if contexto:
            return {
                "tema": contexto.tema,
                "conteudo": contexto.conteudo,
                "publico_alvo": contexto.publico_alvo,
                "problema_aprendizagem": contexto.problema_aprendizagem,
                "objetivo": contexto.objetivo,
                "curriculo": contexto.curriculo,
            }
        else:
            return {}
    except Exception as e:
        return {"erro": str(e)}
    finally:
        db.close()

# Persona
class Persona(Base):
    __tablename__ = "persona"

    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String)
    idade = Column(String)
    disciplina_favorita = Column(String)
    jogos_favoritos = Column(String)
    cotidiano = Column(Text)
    rotina_estudos = Column(String)

Base.metadata.create_all(bind=engine)

class PersonaRequest(BaseModel):
    nome: str
    idade: str
    disciplina_favorita: str
    jogos_favoritos: str
    cotidiano: str
    rotina_estudos: str

@app.post("/persona")
async def salvar_persona(dados: PersonaRequest):
    db = SessionLocal()
    try:
        persona = Persona(**dados.dict())
        db.add(persona)
        db.commit()
        return {"success": True, "message": "Persona salva com sucesso"}
    except Exception as e:
        return {"success": False, "message": f"Erro: {str(e)}"}
    finally:
        db.close()

@app.get("/persona")
async def obter_persona():
    db = SessionLocal()
    try:
        persona = db.query(Persona).order_by(Persona.id.desc()).first()
        if persona:
            return {
                "nome": persona.nome,
                "idade": persona.idade,
                "disciplina_favorita": persona.disciplina_favorita,
                "jogos_favoritos": persona.jogos_favoritos,
                "cotidiano": persona.cotidiano,
                "rotina_estudos": persona.rotina_estudos,
            }
        else:
            return {}
    except Exception as e:
        return {"erro": str(e)}
    finally:
        db.close()
