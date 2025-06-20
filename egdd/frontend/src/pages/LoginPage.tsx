import { Mail, Lock } from "lucide-react";
import google from "../assets/google.svg";
import logoegdd from "../assets/logoegdd.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LoginPage() {
  const navigate = useNavigate();

  // Adicione estes estados:
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const res = await fetch("http://localhost:3002/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      navigate("/dashboard");
    } else {
      const data = await res.json();
      setError(data.detail || "Erro no login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#D9F0FF] px-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md border border-blue-300">
        <div className="flex flex-col items-center mb-6">
          <img src={logoegdd} alt="EGDD Logo" className="h-16 mb-2" />
          <h2 className="text-lg font-semibold">Bem-vindo ao EGDD!</h2>
          <p className="text-sm text-gray-600">Entre para acessar sua conta</p>
        </div>

        <form className="space-y-4" onSubmit={handleLogin}>
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-500" size={18} />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2"
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-3 text-gray-500" size={18} />
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2"
            />
          </div>

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-[#115A92] hover:bg-[#0e4e7d] text-white py-2 rounded-lg font-medium"
          >
            Login
          </button>
        </form>

        <div className="text-center mt-4 text-sm">
          Ainda não possui cadastro?{" "}
          <a href="/register" className="font-semibold hover:underline">
            Cadastre-se
          </a>
        </div>

        <div className="flex items-center my-4 text-gray-400">
          <hr className="flex-1" />
          <span className="px-2 text-sm">OU</span>
          <hr className="flex-1" />
        </div>

        <button className="w-full border border-gray-300 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50">
          <img src={google} alt="Google" className="h-5 w-5" />
          Entrar com o Google
        </button>
      </div>
    </div>
  );
}
