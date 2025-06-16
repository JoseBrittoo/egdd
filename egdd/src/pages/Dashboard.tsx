import { useEffect } from "react";
import {
  Plus,
  Eye,
  Pencil,
  FileDown,
  BookOpen,
  MessageSquare,
  User,
  ChevronRight,
  Gamepad2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const userNames = ["Maria", "João", "Ana", "Pedro", "Carla"];
    const randomName = userNames[Math.floor(Math.random() * userNames.length)];
    const userNameEl = document.getElementById("userName");
    if (userNameEl) userNameEl.textContent = randomName;
  }, []);

  return (
    <div className="p-6 bg-[#e9f5ff] min-h-screen">
      <section className="bg-white rounded-xl shadow-md p-6 mb-8 flex flex-col md:flex-row justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Bem-vindo(a) de volta,{" "}
            <span id="userName" className="text-purple-600">
              Fulano!
            </span>
          </h1>
          <p className="text-gray-600 flex items-center gap-2">
            <Gamepad2 className="w-6 h-6 text-green-400" />
            Seus projetos de Jogo Educacional
          </p>
        </div>
        <button onClick={() => navigate("/contexto-educacional")} className="mt-4 md:mt-0 bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Começar novo Projeto
        </button>
      </section>

      {/* Lista de EGDDs */}
      <section className="bg-white rounded-xl shadow-md p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Lista de EGDDs Salvos
        </h2>

        {/* Cabeçalho da tabela */}
        <div className="hidden md:grid grid-cols-6 gap-4 p-4 bg-blue-50 rounded-lg text-sm font-semibold text-gray-800">
          <div className="text-center">Nº</div>
          <div>Nome do Projeto</div>
          <div>Objetivo Principal</div>
          <div>Versão</div>
          <div>Última Modificação</div>
          <div className="text-center">Ações</div>
        </div>

        <div className="space-y-2 mt-2">
          {[
            {
              nome: "BitLand Adventure",
              objetivo: "Aprender sobre bits",
              versao: "V1",
              data: "25/02/2025 21:32",
            },
            {
              nome: "Aventura da Gramática",
              objetivo: "Identificar classes de palavras",
              versao: "V1",
              data: "25/02/2025 21:32",
            },
            {
              nome: "Química Explosiva",
              objetivo: "Identificar reações químicas",
              versao: "V3",
              data: "25/02/2025 21:32",
            },
          ].map((proj, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-lg px-4 py-3 md:grid md:grid-cols-6 gap-4 flex flex-col md:flex-row text-sm items-center"
            >
              <div className="text-center font-medium">{index + 1}</div>
              <div className="text-blue-700 underline cursor-pointer">
                {proj.nome}
              </div>
              <div>{proj.objetivo}</div>
              <div>{proj.versao}</div>
              <div>{proj.data}</div>
              <div className="flex gap-2 justify-center flex-wrap mt-2 md:mt-0">
                <button className="flex items-center gap-1 bg-green-100 hover:bg-green-200 text-green-700 px-3 py-1 rounded-md">
                  <Eye className="w-4 h-4" /> Ver
                </button>
                <button className="flex items-center gap-1 bg-blue-100 hover:bg-blue-200 text-blue-700 px-3 py-1 rounded-md">
                  <Pencil className="w-4 h-4" /> Editar
                </button>
                <button className="flex items-center gap-1 bg-purple-100 hover:bg-purple-200 text-purple-700 px-3 py-1 rounded-md">
                  <FileDown className="w-4 h-4" /> PDF
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recursos Extras */}
      <section className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-6">
          Recursos Extras
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-blue-50 p-5 rounded-lg border border-blue-200 hover:shadow-md transition-all">
            <h3 className="font-medium text-blue-700 flex items-center gap-2 mb-2">
              <BookOpen className="w-5 h-5" /> Guias Exemplos
            </h3>
            <p className="text-gray-600 text-sm">
              Acesse modelos e tutoriais para criar jogos educacionais.
            </p>
            <button className="mt-4 text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1">
              Explorar recursos <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-purple-50 p-5 rounded-lg border border-purple-200 hover:shadow-md transition-all">
            <h3 className="font-medium text-purple-700 flex items-center gap-2 mb-2">
              <MessageSquare className="w-5 h-5" /> Suporte & Feedback
            </h3>
            <p className="text-gray-600 text-sm">
              Precisa de ajuda? Entre em contato para obter suporte.
            </p>
            <button className="mt-4 text-purple-600 hover:text-purple-800 text-sm font-medium flex items-center gap-1">
              Obter ajuda <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-green-50 p-5 rounded-lg border border-green-200 hover:shadow-md transition-all">
            <h3 className="font-medium text-green-700 flex items-center gap-2 mb-2">
              <User className="w-5 h-5" /> Perfil e Preferências
            </h3>
            <p className="text-gray-600 text-sm">
              Gerencie suas informações pessoais e configure suas preferências
            </p>
            <button className="mt-4 text-green-600 hover:text-green-800 text-sm font-medium flex items-center gap-1">
              Editar Perfil <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
