import { useState } from "react";

export default function ValidationIA() {
  const [messages, setMessages] = useState([
    {
      role: "ai",
      content: "Olá! Posso te ajudar a validar a coerência do seu EGDD.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:3002/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [{ role: "user", content: input }] }),
      });

      const data = await res.json();

      const aiResponse = { role: "ai", content: data.reply };
      setMessages([...newMessages, aiResponse]);
    } catch (error) {
      console.error(error);
      setMessages([
        ...newMessages,
        { role: "ai", content: "Ocorreu um erro ao tentar validar com a IA." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <aside className="w-full lg:w-1/4 border border-[#116898] bg-white p-4 rounded-lg shadow-sm h-[482px] flex flex-col">
      <h3 className="font-semibold text-lg mb-4">
        Validação de coerência por IA
      </h3>

      <div className="flex-1 overflow-y-auto space-y-2 mb-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`text-sm p-2 rounded ${
              msg.role === "ai"
                ? "bg-green-100 text-green-800 border border-green-300"
                : "bg-blue-100 text-blue-800 border border-blue-300 self-end"
            }`}
          >
            {msg.content}
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Digite sua dúvida..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border border-gray-300 rounded px-2 py-1 text-sm"
        />
        <button
          onClick={handleSend}
          disabled={loading}
          className="bg-[#116898] text-white px-3 rounded text-sm hover:bg-[#0e5a73]"
        >
          Enviar
        </button>
      </div>
    </aside>
  );
}
