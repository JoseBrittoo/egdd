import { Info } from "lucide-react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import ValidationIA from "../components/ValidationIA";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function PersonaPage() {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [disciplina, setDisciplina] = useState("");
  const [jogos, setJogos] = useState("");
  const [cotidiano, setCotidiano] = useState("");
  const [rotina, setRotina] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      nome,
      idade,
      disciplina_favorita: disciplina,
      jogos_favoritos: jogos,
      cotidiano,
      rotina_estudos: rotina,
    };

    const res = await fetch("http://localhost:3002/persona", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    if (data.success) {
      navigate("/narrativa");
    } else {
      alert("Erro ao salvar: " + data.message);
    }
  };

  useEffect(() => {
    const carregarPersona = async () => {
      try {
        const res = await fetch("http://localhost:3002/persona");
        const data = await res.json();
        if (data) {
          setNome(data.nome || "");
          setIdade(data.idade || "");
          setDisciplina(data.disciplina_favorita || "");
          setJogos(data.jogos_favoritos || "");
          setCotidiano(data.cotidiano || "");
          setRotina(data.rotina_estudos || "");
        }
      } catch (err) {
        console.error("Erro ao carregar persona:", err);
      }
    };

    carregarPersona();
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#e9f5ff] flex items-center justify-center py-4 px-4">
      <div className="w-[1800px] bg-white rounded-xl shadow-md flex overflow-hidden">
        <Sidebar />

        <main className="flex-1 p-4 overflow-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-6">Persona</h2>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="font-medium flex items-center gap-1">
                    Nome
                    <div title="Nome do jogador">
                      <Info className="w-4 h-4 text-blue-500 cursor-pointer" />
                    </div>
                  </label>
                  <input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Nome do jogador"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  />
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <label className="font-medium">Idade</label>
                    <input
                      type="text"
                      value={idade}
                      onChange={(e) => setIdade(e.target.value)}
                      placeholder="DD/MM/AAAA"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="font-medium">Disciplina Favorita</label>
                    <input
                      type="text"
                      value={disciplina}
                      onChange={(e) => setDisciplina(e.target.value)}
                      placeholder="Matéria favorita do jogador"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-medium">Jogos favoritos</label>
                  <input
                    type="text"
                    value={jogos}
                    onChange={(e) => setJogos(e.target.value)}
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
                    value={cotidiano}
                    onChange={(e) => setCotidiano(e.target.value)}
                    placeholder="Descreva sobre o cotidiano do jogador"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 min-h-[100px]"
                  ></textarea>
                </div>

                <div>
                  <label className="font-medium">Rotina de estudos</label>
                  <input
                    type="text"
                    value={rotina}
                    onChange={(e) => setRotina(e.target.value)}
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
