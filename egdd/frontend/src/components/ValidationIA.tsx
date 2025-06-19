import { useEffect, useRef, useState } from "react";
import { Send } from "lucide-react";

export default function ValidationIA() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Olá! Como posso ajudar?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSend = async () => {
    if (!input.trim()) return;

    const updatedMessages = [...messages, { role: "user", content: input }];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:3002/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      const data = await res.json();

      setMessages([...updatedMessages, { role: "assistant", content: data.reply }]);
    } catch (error) {
      console.error("Erro:", error);
      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content: "Ocorreu um erro ao tentar validar com a IA.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <aside className="w-full lg:w-1/4 border border-[#116898] bg-white p-4 rounded-lg shadow-sm h-[482px] flex flex-col">
      <h3 className="font-semibold text-lg mb-4">Validação de coerência por IA</h3>

      <div className="flex-1 overflow-y-auto space-y-2 mb-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`text-sm p-2 rounded ${
              msg.role === "assistant"
                ? "bg-green-100 text-green-800 border border-green-300"
                : "bg-blue-100 text-blue-800 border border-blue-300 self-end"
            }`}
          >
            {msg.content}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Digite sua dúvida..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          className="flex-1 border border-gray-300 rounded px-2 py-1 text-sm"
        />
        <button
          onClick={handleSend}
          disabled={loading}
          className="bg-[#116898] text-white px-3 py-1 rounded text-sm hover:bg-[#0e5a73] flex items-center justify-center min-w-[40px]"
        >
          {loading ? (
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <Send className="w-4 h-4" />
          )}
        </button>
      </div>
    </aside>
  );
}
