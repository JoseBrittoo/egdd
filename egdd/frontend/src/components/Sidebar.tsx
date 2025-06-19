import {
  BookOpenCheck,
  User,
  FileText,
  Gamepad2,
  MonitorPlay,
  Goal,
  ClipboardCheck,
  Palette,
  LayoutDashboard,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const steps = [
  { label: "Contexto Educacional", path: "/contexto-educacional", icon: <BookOpenCheck size={18} /> },
  { label: "Persona", path: "/persona", icon: <User size={18} /> },
  { label: "Narrativa", path: "/narrativa", icon: <FileText size={18} /> },
  { label: "Mecânica de jogo", path: "/mecanica", icon: <Gamepad2 size={18} /> },
  { label: "Gameplay", path: "/gameplay", icon: <MonitorPlay size={18} /> },
  { label: "Meta de jogo", path: "/meta", icon: <Goal size={18} /> },
  { label: "Avaliação de Aprendizagem", path: "/avaliacao", icon: <ClipboardCheck size={18} /> },
  { label: "Estética e Arte", path: "/estetica", icon: <Palette size={18} /> },
  { label: "Interface", path: "/interface", icon: <LayoutDashboard size={18} /> },
];

export default function Sidebar() {
  const { pathname } = useLocation();

  return (
    <aside className="w-full md:w-72 bg-white border-r border-gray-200 min-h-screen">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-lg font-bold">Passos do EGDD</h2>
      </div>
      <nav className="flex flex-col">
        {steps.map((step, index) => {
          const isActive = pathname === step.path;
          return (
            <Link
              key={index}
              to={step.path}
              className={`text-left px-6 py-4 border-b border-gray-100 text-sm font-medium flex items-center gap-3 transition-all ${
                isActive ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-blue-100"
              }`}
            >
              <div className="shrink-0">{step.icon}</div>
              {step.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
