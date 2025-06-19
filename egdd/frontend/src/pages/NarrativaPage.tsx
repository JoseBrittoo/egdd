import Sidebar from "../components/Sidebar";
import ValidationIA from "../components/ValidationIA";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Personagem = {
  nome: string;
  idade: string;
  movimentacao: string;
  habilidades: string;
  ataque: string;
  perfil: string;
};

type PersonagemCampo = keyof Personagem;

type Inimigo = {
  nome: string;
  idade: string;
  movimentacao: string;
  interferencia: string;
  ataque: string;
  objetivo: string;
};

type InimigoCampo = keyof Inimigo;

export default function NarrativaPage() {
  const [etapa, setEtapa] = useState(1);
  const totalEtapas = 4;
  const [vegetacoes, setVegetacoes] = useState<string[]>([]);
  const [obstaculos, setObstaculos] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleNext = () => {
    if (etapa < totalEtapas) {
      setEtapa(etapa + 1);
    } else {
      navigate("/mecanica");
    }
  };

  const handlePrev = () => {
    if (etapa > 1) setEtapa(etapa - 1);
  };

  const [personagens, setPersonagens] = useState<Personagem[]>([
    {
      nome: "",
      idade: "",
      movimentacao: "",
      habilidades: "",
      ataque: "",
      perfil: "",
    },
  ]);

  const handleAddPersonagem = () => {
    setPersonagens([
      ...personagens,
      {
        nome: "",
        idade: "",
        movimentacao: "",
        habilidades: "",
        ataque: "",
        perfil: "",
      },
    ]);
  };

  const handleRemovePersonagem = (index: number) => {
    const novos = [...personagens];
    novos.splice(index, 1);
    setPersonagens(novos);
  };

  const handlePersonagemChange = (
    index: number,
    campo: PersonagemCampo,
    valor: string
  ) => {
    const novos = [...personagens];
    novos[index][campo] = valor;
    setPersonagens(novos);
  };

  const [inimigos, setInimigos] = useState<Inimigo[]>([
    {
      nome: "",
      idade: "",
      movimentacao: "",
      interferencia: "",
      ataque: "",
      objetivo: "",
    },
  ]);

  const handleAddInimigo = () => {
    setInimigos([
      ...inimigos,
      {
        nome: "",
        idade: "",
        movimentacao: "",
        interferencia: "",
        ataque: "",
        objetivo: "",
      },
    ]);
  };

  const handleRemoveInimigo = (index: number) => {
    const novos = [...inimigos];
    novos.splice(index, 1);
    setInimigos(novos);
  };

  const handleInimigoChange = (
    index: number,
    campo: InimigoCampo,
    valor: string
  ) => {
    const novos = [...inimigos];
    novos[index][campo] = valor;
    setInimigos(novos);
  };

  return (
    <div className="w-full min-h-screen bg-[#e9f5ff] flex items-center justify-center py-4 px-4">
      <div className="w-[1800px] bg-white rounded-xl shadow-md flex overflow-hidden">
        <Sidebar />

        <main className="flex-1 p-6 overflow-auto">
          {/* Barra de progresso centralizada */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
            <div
              className="bg-green-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(etapa / totalEtapas) * 100}%` }}
            ></div>
          </div>

          <h2 className="text-2xl font-bold mb-6">Narrativa</h2>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1 space-y-4">
              {/* Etapa 1 - Definição Inicial */}
              {etapa === 1 && (
                <>
                  <label className="block font-medium">Número de Fases</label>
                  <input
                    type="number"
                    placeholder="Quantas fases seu jogo terá?"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  />
                  <label className="block font-medium">
                    História Geral do Jogo
                  </label>
                  <textarea
                    placeholder="Descreva a história geral do seu jogo..."
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 min-h-[150px]"
                  />
                </>
              )}
              {etapa === 2 && (
                <>
                  <h3 className="font-semibold text-lg mb-2">Personagem</h3>

                  {personagens.map((personagem, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-lg p-4 mb-4 relative"
                    >
                      <div className="absolute top-2 right-2">
                        {personagens.length > 1 && (
                          <button
                            onClick={() => handleRemovePersonagem(index)}
                            className="text-red-600 text-sm hover:underline"
                          >
                            Remover
                          </button>
                        )}
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="font-medium">Nome</label>
                          <input
                            type="text"
                            value={personagem.nome}
                            onChange={(e) =>
                              handlePersonagemChange(
                                index,
                                "nome",
                                e.target.value
                              )
                            }
                            placeholder="Nome do personagem"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2"
                          />
                        </div>
                        <div>
                          <label className="font-medium">Idade</label>
                          <input
                            type="text"
                            value={personagem.idade}
                            onChange={(e) =>
                              handlePersonagemChange(
                                index,
                                "idade",
                                e.target.value
                              )
                            }
                            placeholder="Idade do personagem"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2"
                          />
                        </div>
                        <div>
                          <label className="font-medium">
                            Forma de movimentação
                          </label>
                          <input
                            type="text"
                            value={personagem.movimentacao}
                            onChange={(e) =>
                              handlePersonagemChange(
                                index,
                                "movimentacao",
                                e.target.value
                              )
                            }
                            placeholder="Movimentação do personagem"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2"
                          />
                        </div>
                        <div>
                          <label className="font-medium">Habilidades</label>
                          <input
                            type="text"
                            value={personagem.habilidades}
                            onChange={(e) =>
                              handlePersonagemChange(
                                index,
                                "habilidades",
                                e.target.value
                              )
                            }
                            placeholder="Habilidades do personagem"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2"
                          />
                        </div>
                        <div>
                          <label className="font-medium">Ataque</label>
                          <input
                            type="text"
                            value={personagem.ataque}
                            onChange={(e) =>
                              handlePersonagemChange(
                                index,
                                "ataque",
                                e.target.value
                              )
                            }
                            placeholder="Se possuir"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2"
                          />
                        </div>
                        <div>
                          <label className="font-medium">
                            Características/Perfil
                          </label>
                          <input
                            type="text"
                            value={personagem.perfil}
                            onChange={(e) =>
                              handlePersonagemChange(
                                index,
                                "perfil",
                                e.target.value
                              )
                            }
                            placeholder="Características do personagem"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2"
                          />
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Botão para adicionar novo personagem */}
                  <button
                    onClick={handleAddPersonagem}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm"
                  >
                    + Adicionar personagem
                  </button>
                </>
              )}
              {/* Etapa 3 - Inimigo e Ritmo */}
              {etapa === 3 && (
                <>
                  <h3 className="font-semibold text-lg mb-2">Inimigo</h3>

                  {inimigos.map((inimigo, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-lg p-4 mb-4 relative"
                    >
                      <div className="absolute top-2 right-2">
                        {inimigos.length > 1 && (
                          <button
                            onClick={() => handleRemoveInimigo(index)}
                            className="text-red-600 text-sm hover:underline"
                          >
                            Remover
                          </button>
                        )}
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <input
                          type="text"
                          placeholder="Nome do inimigo"
                          value={inimigo.nome}
                          onChange={(e) =>
                            handleInimigoChange(index, "nome", e.target.value)
                          }
                          className="w-full border border-gray-300 rounded-lg px-4 py-2"
                        />
                        <input
                          type="text"
                          placeholder="Idade do inimigo"
                          value={inimigo.idade}
                          onChange={(e) =>
                            handleInimigoChange(index, "idade", e.target.value)
                          }
                          className="w-full border border-gray-300 rounded-lg px-4 py-2"
                        />
                        <input
                          type="text"
                          placeholder="Movimentação do inimigo"
                          value={inimigo.movimentacao}
                          onChange={(e) =>
                            handleInimigoChange(
                              index,
                              "movimentacao",
                              e.target.value
                            )
                          }
                          className="w-full border border-gray-300 rounded-lg px-4 py-2"
                        />
                        <input
                          type="text"
                          placeholder="Como interfere no jogo?"
                          value={inimigo.interferencia}
                          onChange={(e) =>
                            handleInimigoChange(
                              index,
                              "interferencia",
                              e.target.value
                            )
                          }
                          className="w-full border border-gray-300 rounded-lg px-4 py-2"
                        />
                        <input
                          type="text"
                          placeholder="Ataque (se tiver)"
                          value={inimigo.ataque}
                          onChange={(e) =>
                            handleInimigoChange(index, "ataque", e.target.value)
                          }
                          className="w-full border border-gray-300 rounded-lg px-4 py-2"
                        />
                        <input
                          type="text"
                          placeholder="O que ele busca?"
                          value={inimigo.objetivo}
                          onChange={(e) =>
                            handleInimigoChange(
                              index,
                              "objetivo",
                              e.target.value
                            )
                          }
                          className="w-full border border-gray-300 rounded-lg px-4 py-2"
                        />
                      </div>
                    </div>
                  ))}

                  <button
                    onClick={handleAddInimigo}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm mb-4"
                  >
                    + Adicionar inimigo
                  </button>
                </>
              )}

              {/* Etapa 4 - Mundo do Jogo */}
              {etapa === 4 && (
                <>
                  <h3 className="font-semibold text-lg mb-2">Mundo do Jogo</h3>
                  <label className="block font-medium mb-1">
                    Descrição do cenário
                  </label>
                  <textarea
                    placeholder="Descreva o cenário onde seu jogo acontece. Pense no tipo de vegetação, clima, e obstáculos naturais."
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 min-h-[120px] mb-4"
                  />

                  <div className="mb-6">
                    <h4 className="font-semibold text-base mb-2">
                      Vegetação do Ambiente
                    </h4>
                    {vegetacoes.map((v, index) => (
                      <div key={index} className="flex gap-2 items-center mb-2">
                        <input
                          type="text"
                          value={v}
                          onChange={(e) =>
                            setVegetacoes((prev) =>
                              prev.map((item, i) =>
                                i === index ? e.target.value : item
                              )
                            )
                          }
                          className="flex-1 border border-gray-300 rounded-lg px-3 py-2"
                          placeholder={`Vegetação ${index + 1}`}
                        />
                        <button
                          type="button"
                          onClick={() =>
                            setVegetacoes((prev) =>
                              prev.filter((_, i) => i !== index)
                            )
                          }
                          className="text-red-600 text-sm"
                        >
                          Remover
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => setVegetacoes([...vegetacoes, ""])}
                      className="text-blue-600 text-sm mt-1"
                    >
                      + Adicionar vegetação
                    </button>
                  </div>

                  <div>
                    <h4 className="font-semibold text-base mb-2">Obstáculos</h4>
                    {obstaculos.map((o, index) => (
                      <div key={index} className="flex gap-2 items-center mb-2">
                        <input
                          type="text"
                          value={o}
                          onChange={(e) =>
                            setObstaculos((prev) =>
                              prev.map((item, i) =>
                                i === index ? e.target.value : item
                              )
                            )
                          }
                          className="flex-1 border border-gray-300 rounded-lg px-3 py-2"
                          placeholder={`Obstáculo ${index + 1}`}
                        />
                        <button
                          type="button"
                          onClick={() =>
                            setObstaculos((prev) =>
                              prev.filter((_, i) => i !== index)
                            )
                          }
                          className="text-red-600 text-sm"
                        >
                          Remover
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => setObstaculos([...obstaculos, ""])}
                      className="text-blue-600 text-sm mt-1"
                    >
                      + Adicionar obstáculo
                    </button>
                  </div>
                </>
              )}
              {/* Navegação */}
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
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg disabled:opacity-50"
                >
                  {etapa === totalEtapas ? "Finalizar" : "Próximo"}
                </button>
              </div>
            </div>

            <ValidationIA />
          </div>
        </main>
      </div>
    </div>
  );
}
