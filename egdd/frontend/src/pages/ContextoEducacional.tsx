import Sidebar from "../components/Sidebar";
import ValidationIA from "../components/ValidationIA";
import { Info } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ContextoEducacionalPage() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-[#e9f5ff] flex items-center justify-center py-4 px-4">
      <div className="w-[1800px] bg-white rounded-xl shadow-md flex overflow-hidden">
        <Sidebar />

        <main className="flex-1 p-4 overflow-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-6">Contexto Educacional</h2>

              <form className="space-y-4">
                <div>
                  <label className="font-medium flex items-center gap-1">
                    Tema
                    <div title="Qual a disciplina que você quer trabalhar?">
                      <Info className="w-4 h-4 text-blue-500 cursor-pointer" />
                    </div>
                  </label>

                  <input
                    type="text"
                    placeholder="Qual a disciplina que você quer trabalhar?"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  />
                </div>

                <div>
                  <label className="font-medium">Conteúdo</label>
                  <input
                    type="text"
                    placeholder="Qual o conteúdo específico que o aprendiz terá que exercitar?"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  />
                </div>

                <div>
                  <label className="font-medium">Público-Alvo</label>
                  <input
                    type="text"
                    placeholder="Defina para quem o jogo é destinado!"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  />
                </div>

                <div className="w-full">
                  <label className="font-medium flex items-center gap-1">
                    Problema de Aprendizagem
                    <div title="Identifique e descreva o problema educacional que o jogo vai resolver">
                      <Info className="w-4 h-4 text-blue-500 cursor-pointer" />
                    </div>
                  </label>

                  <textarea
                    placeholder="Identifique e descreva o problema educacional que o jogo vai resolver"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 min-h-[100px]"
                  ></textarea>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <label className="font-medium">Objetivo do Jogo</label>
                    <input
                      type="text"
                      placeholder="Defina o que o jogador deve ser capaz de fazer após jogar"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="font-medium flex items-center gap-1">
                      Currículo
                     <div title="Relacionar o conteúdo do jogo ao currículo oficial">
                      <Info className="w-4 h-4 text-blue-500 cursor-pointer" />
                    </div>
                    </label>

                    <input
                      type="text"
                      placeholder="Relacionar o conteúdo do jogo ao currículo oficial"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2"
                    />
                  </div>
                </div>

                <div className="flex justify-between mt-6">
                  <button
                    type="button"
                    onClick={() => navigate("/Dashboard")}
                    className="bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-100"
                  >
                    Voltar
                  </button>
                  <button
                    type="submit"
                    onClick={() => navigate("/persona")}
                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg"
                  >
                    Próximo
                  </button>
                </div>
              </form>
            </div>

            <ValidationIA />
          </div>
        </main>
      </div>
    </div>
  );
}
