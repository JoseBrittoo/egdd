import os
import requests
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from database import SessionLocal, User, init_db

init_db()
app = FastAPI()

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


load_dotenv()
OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY")

API_URL = "https://openrouter.ai/api/v1/chat/completions"
HEADERS = {
    "Authorization": f"Bearer {OPENROUTER_API_KEY}",
    "Content-Type": "application/json"
}

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Message(BaseModel):
    role: str
    content: str

class ChatRequest(BaseModel):
    messages: list[Message]

@app.post("/chat")
async def chat(req: ChatRequest):
    try:
        db = SessionLocal()

        # Você pode buscar pelo usuário padrão por enquanto
        user = db.query(User).filter_by(email="admin@egdd.com").first()

        # Chamada ao OpenRouter
        response = requests.post(
            API_URL,
            headers=HEADERS,
            json={
                "model": "meta-llama/llama-3-8b-instruct",
                "messages": [message.dict() for message in req.messages],
                "temperature": 0.7,
                "max_tokens": 500
            }
        )

        if response.status_code != 200:
            return {"reply": f"Erro da OpenRouter: {response.status_code} - {response.text}"}

        data = response.json()
        reply_text = data["choices"][0]["message"]["content"]

        # 🔹 Salva cada mensagem enviada pelo usuário
        for msg in req.messages:
            db.add(Message(user_id=user.id, role=msg.role, content=msg.content))

        # 🔹 Salva resposta da IA
        db.add(Message(user_id=user.id, role="assistant", content=reply_text))
        db.commit()

        return {"reply": reply_text}

    except Exception as e:
        return {"reply": f"Erro inesperado no servidor: {str(e)}"}
    finally:
        db.close()



def init_db():
    Base.metadata.create_all(bind=engine)
init_db() 
