import { Home } from "lucide-react";
import logoegdd from "../assets/logoegdd.png";
import perfil from "../assets/perfil.png";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-sm px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img src={logoegdd} alt="EGDD Logo" className="" />
        <h1 className="text-lg font-bold flex gap leading-none">
          <span style={{ color: "#D04245" }}>E</span>
          <span style={{ color: "#EAAE31" }}>G</span>
          <span style={{ color: "#EAAE31" }}>D</span>
          <span style={{ color: "#0082B9" }}>D</span>
          <span style={{ color: "#0082B9" }}>.</span>
          <span style={{ color: "#0082B9" }}>A</span>
          <span style={{ color: "#0082B9" }}>I</span>
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <button onClick={() => navigate("/")} className="text-sm font-medium text-gray-700 hover:text-blue-600 flex items-center gap-1">
          <Home className="w-4 h-4" />
          Início
        </button>
        <img
          src={perfil}
          alt="Avatar"
          className="h-8 w-8 rounded-full border border-gray-300"
        />
      </div>
    </header>
  );
}
