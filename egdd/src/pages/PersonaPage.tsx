import { Info } from "lucide-react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import ValidationIA from "../components/ValidationIA";

export default function PersonaPage() {
  return (
    <div className="w-full min-h-screen bg-[#e9f5ff] flex items-center justify-center py-4 px-4">
      <div className="w-[1800px] bg-white rounded-xl shadow-md flex overflow-hidden">
        <Sidebar />

        <main className="flex-1 p-4 overflow-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-6">Persona</h2>

              <form className="space-y-4">
                <div>
                  <label className="font-medium flex items-center gap-1">
                    Nome
                    <div title="Nome do jogador">
                      <Info className="w-4 h-4 text-blue-500 cursor-pointer" />
                    </div>
                  </label>
                  <input
                    type="text"
                    placeholder="Nome do jogador"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  />
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <label className="font-medium">Idade</label>
                    <input
                      type="text"
                      placeholder="DD/MM/AAAA"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="font-medium">Disciplina Favorita</label>
                    <input
                      type="text"
                      placeholder="Matéria favorita do jogador"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-medium">Jogos favoritos</label>
                  <input
                    type="text"
                    placeholder="Destaque os jogos favoritos do jogador"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  />
                </div>

                <div>
                  <label className="font-medium flex items-center gap-1">
                    O que faz no cotidiano? seus principais desafios?
                    <div title="Descreva sobre o cotidiano do jogador">
                      <Info className="w-4 h-4 text-blue-500 cursor-pointer" />
                    </div>
                  </label>
                  <textarea
                    placeholder="Descreva sobre o cotidiano do jogador"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 min-h-[100px]"
                  ></textarea>
                </div>

                <div>
                  <label className="font-medium">Rotina de estudos</label>
                  <input
                    type="text"
                    placeholder="Descreva sobre a rotina do jogador"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  />
                </div>

                <div className="flex justify-between mt-6">
                  <Link
                    to="/contexto-educacional"
                    className="bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-100"
                  >
                    Voltar
                  </Link>
                  <button
                    type="submit"
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
