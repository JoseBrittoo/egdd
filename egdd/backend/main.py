import os
import requests
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv

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


        print("STATUS CODE:", response.status_code)
        print("RESPONSE TEXT:", response.text)

        if response.status_code != 200:
            return {"reply": f"Erro da OpenRouter: {response.status_code} - {response.text}"}

        data = response.json()
        return {"reply": data["choices"][0]["message"]["content"]}

    except Exception as e:
        return {"reply": f"Erro inesperado no servidor: {str(e)}"}
