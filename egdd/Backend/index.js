import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();
const app = express();
const port = 3002;

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.use(cors());
app.use(express.json());

app.post("/chat", async (req, res) => {
  try {
    const { messages } = req.body;

    const model = genAI.getGenerativeModel({ model: "models/gemini-pro" });

    const result = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [{ text: messages[messages.length - 1].content }],
        },
      ],
    });

    const response = result.response;
    const text = response.text();

    res.json({ reply: text });
  } catch (err) {
    console.error("Erro:", err);
    res.status(500).json({ error: "Erro ao se comunicar com o Gemini" });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
