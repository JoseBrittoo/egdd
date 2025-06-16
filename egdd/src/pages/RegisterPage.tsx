import { Mail, Lock } from "lucide-react";
import egddLogo from "../assets/logoegdd.png";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#D9F0FF] px-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md border border-blue-300">
        <div className="flex flex-col items-center mb-6">
          <img src={egddLogo} alt="EGDD Logo" className="h-16 mb-2" />
          <h2 className="text-lg font-semibold">Bem-vindo ao EGDD!</h2>
          <p className="text-sm text-gray-600">Cadastro de Usuário</p>
        </div>

        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Nome"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
            <input
              type="text"
              placeholder="Sobrenome"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-500" size={18} />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <input
              type="date"
              placeholder="Data de nascimento"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
            <input
              type="text"
              placeholder="Telefone"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-500" size={18} />
              <input
                type="password"
                placeholder="Senha"
                className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2"
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-500" size={18} />
              <input
                type="password"
                placeholder="Confirmar senha"
                className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2"
              />
            </div>
          </div>

          <button
            type="submit"
            onClick={() => navigate("/login")}
            className="w-full bg-[#115A92] hover:bg-[#0e4e7d] text-white py-2 rounded-lg font-medium"
          >
            Cadastrar
          </button>
        </form>

        <div className="text-center mt-4 text-sm">
          Já possui cadastro?{" "}
          <a href="/login" className="font-semibold hover:underline">
            Login
          </a>
        </div>
      </div>
    </div>
  );
}
