import { useState } from "react";
import Sidebar from "../components/Sidebar";
import ValidationIA from "../components/ValidationIA";
import { useNavigate } from "react-router-dom";

export default function MecanicaPage() {
  const [etapa, setEtapa] = useState(1);
  const [fases, setFases] = useState([
    { conteudo: "", habilidade: "", missao: "" },
  ]);
  const totalEtapas = 4;
  const navigate = useNavigate();
  const [mostrarOutroProgresso, setMostrarOutroProgresso] = useState(false);
  const [mostrarOutroVitoria, setMostrarOutroVitoria] = useState(false);

  const handleNext = () => {
    if (etapa < totalEtapas) {
      setEtapa(etapa + 1);
    } else {
      navigate("/gameplay");
    }
  };

  const handlePrev = () => {
    if (etapa > 1) setEtapa(etapa - 1);
  };

  const adicionarFase = () => {
    setFases([...fases, { conteudo: "", habilidade: "", missao: "" }]);
  };

  return (
    <div className="w-full min-h-screen bg-[#e9f5ff] flex items-center justify-center py-4 px-4">
      <div className="w-[1800px] bg-white rounded-xl shadow-md flex overflow-hidden">
        <Sidebar />

        <main className="flex-1 p-6 overflow-auto">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4">Mecânica de Jogo</h2>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
              <div
                className="bg-green-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(etapa / totalEtapas) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="space-y-6">
            {etapa === 1 && (
              <>
                <label className="font-medium">Mecânica de Aprendizagem</label>
                <textarea
                  placeholder="Descreva as regras do jogo..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 min-h-[100px]"
                />

                <label className="font-medium">Objetivos da mecânica</label>
                <textarea
                  placeholder="Quais são os objetivos que as mecânicas devem atingir?"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 min-h-[100px]"
                />
              </>
            )}

            {etapa === 2 && (
              <>
                <label className="font-medium">Desafios do Jogo</label>
                <textarea
                  placeholder="Descreva os desafios que o jogador enfrentará..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 min-h-[100px]"
                />

                <label className="font-medium">Como o jogador evolui?</label>
                <textarea
                  placeholder="Explique como funciona a progressão no jogo..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 min-h-[100px]"
                />
              </>
            )}

            {etapa === 3 && (
              <>
                <div>
                  <label className="font-medium">
                    Mecânicas que desbloqueiam progresso
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <label>
                      <input type="checkbox" /> Quebra-cabeça
                    </label>
                    <label>
                      <input type="checkbox" /> Batalha contra chefes
                    </label>
                    <label>
                      <input type="checkbox" /> Colecionar itens-chave
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        checked={mostrarOutroProgresso}
                        onChange={() =>
                          setMostrarOutroProgresso(!mostrarOutroProgresso)
                        }
                      />{" "}
                      Outros
                    </label>
                  </div>
                  {mostrarOutroProgresso && (
                    <input
                      type="text"
                      placeholder="Descreva outra mecânica..."
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
                    />
                  )}
                </div>

                <div>
                  <label className="block font-medium">
                    Condições de Vitória
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <label>
                      <input type="checkbox" /> Colecionar itens-chave
                    </label>
                    <label>
                      <input type="checkbox" /> Derrotar todos os inimigos
                    </label>
                    <label>
                      <input type="checkbox" /> Colecionar objetos
                    </label>
                    <label>
                      <input type="checkbox" /> Chegar ao final da jornada
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        checked={mostrarOutroVitoria}
                        onChange={() =>
                          setMostrarOutroVitoria(!mostrarOutroVitoria)
                        }
                      />{" "}
                      Outro
                    </label>
                  </div>
                  {mostrarOutroVitoria && (
                    <input
                      type="text"
                      placeholder="Descreva outra condição de vitória..."
                      className="w-full border border-gray-300 rounded-lg px-4 py-2"
                    />
                  )}
                </div>
              </>
            )}

            {etapa === 4 && (
              <>
                <h3 className="text-lg font-semibold">
                  Distribuição da Aprendizagem por Fase
                </h3>
                {fases.map((_, index) => (
                  <div
                    key={index}
                    className="grid md:grid-cols-3 gap-4 border p-4 rounded-md bg-gray-50 mb-2"
                  >
                    <input
                      type="text"
                      placeholder={`Fase ${index + 1}`}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2"
                    />
                    <input
                      type="text"
                      placeholder="Conteúdo educativo"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2"
                    />
                    <input
                      type="text"
                      placeholder="Habilidade a ser desenvolvida"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2"
                    />
                    <input
                      type="text"
                      placeholder="Missão / Dinâmica de jogo"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 col-span-3"
                    />
                  </div>
                ))}
                <button
                  onClick={adicionarFase}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Adicionar nova fase
                </button>
              </>
            )}

            <div className="flex justify-between mt-6">
              <button
                type="button"
                onClick={handlePrev}
                disabled={etapa === 1}
                className="bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-100 disabled:opacity-50"
              >
                Voltar
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg"
              >
                {etapa === totalEtapas ? "Avançar" : "Próximo"}
              </button>
            </div>
          </div>
        </main>
        <ValidationIA />
      </div>
    </div>
  );
}
