import { useNavigate } from "react-router-dom";
import lp1 from "../assets/landingpage/lp1.svg";
import lp2 from "../assets/landingpage/lp2.svg";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <main className="bg-white text-gray-800">
      <section className="bg-gradient-to-r from-sky-500 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Educational Game Design Document
            </h1>
            <p className="text-lg mb-8 text-blue-100">
              Uma ferramenta inteligente que guia você na construção completa do
              seu jogo educacional, desde o conceito até a implementação.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate("/login")}
                className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg"
              >
                Começar
              </button>
              <button className="bg-white text-blue-700 hover:bg-gray-100 font-medium py-3 px-6 rounded-lg">
                Ver exemplo de EGDD
              </button>
            </div>
          </div>
          <div className="md:w-1/3 md:ml-auto">
            <img src={lp1} alt="Ilustração EGDD" className="w-full h-auto" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">O que é um EGDD?</h2>
          <p className="text-lg text-gray-600">
            O Educational Game Design Document (EGDD) é um documento estruturado
            que serve como guia completo para a criação de jogos educacionais.
            Ele abrange todos os aspectos essenciais, desde o contexto
            pedagógico, objetivos de aprendizagem, mecânicas de jogo, narrativa,
            até a jogabilidade e avaliação.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#E0F2FE]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              O que precisamos para criar o EGDD?
            </h2>
            <p className="text-lg text-gray-600">
              Elementos fundamentais que conectam a pedagogia com o design de
              jogos.
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:items-start gap-10">
            <div className="md:w-1/4">
              <img src={lp2} alt="Ilustração EGDD" className="w-full h-auto" />
            </div>

            <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Contexto Educacional",
                  color: "border-t-4 border-sky-500",
                  description:
                    "Defina os objetivos de aprendizagem, público-alvo e conteúdo pedagógico que seu jogo abordará.",
                },
                {
                  title: "Personagem e História",
                  color: "border-t-4 border-green-500",
                  description:
                    "Crie personagens envolventes e uma narrativa que conecte o jogador ao conteúdo educacional.",
                },
                {
                  title: "Mecânicas de Aprendizagem",
                  color: "border-t-4 border-purple-500",
                  description:
                    "Desenvolva mecânicas de jogo que reforcem o aprendizado e mantenham o engajamento.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all ${feature.color}`}
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Como o EGDD Funciona?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Nosso processo é simples e intuitivo, guiando você em cada etapa da
            criação do seu documento de design.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Responda perguntas simples",
                description:
                  "Nossa plataforma guia você através de perguntas estratégicas sobre seu jogo educacional, sem necessidade de conhecimento técnico avançado.",
              },
              {
                title: "Veja seu EGDD se formar automaticamente",
                description:
                  "Nossa IA processa suas respostas e gera um documento estruturado, completo e profissional, seguindo as melhores práticas de design de jogos educacionais.",
              },
              {
                title: "Baixe ou edite como quiser",
                description:
                  "Exporte seu EGDD em diferentes formatos, compartilhe com sua equipe ou personalize conforme sua necessidade.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who is EGDD for Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Para quem é o EGDD?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Nossa plataforma foi desenvolvida para atender diversos perfis de
            usuários interessados em jogos educacionais.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                number: 1,
                title: "Estudantes de licenciatura em Computação",
                description:
                  "Ideal para estudantes que desejam criar jogos educacionais como parte de seus projetos acadêmicos, com estrutura metodológica sólida.",
              },
              {
                number: 2,
                title: "Professores e educadores",
                description:
                  "Perfeito para educadores que desejam transformar conteúdo pedagógico em experiências gamificadas, mesmo sem conhecimento técnico.",
              },
              {
                number: 3,
                title: "Desenvolvedores e game designers",
                description:
                  "Auxilia profissionais no desenvolvimento de jogos e projetos educacionais, garantindo alinhamento pedagógico e diversão.",
              },
            ].map((aud, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 border-l-4 hover:shadow-lg border-blue-400 text-left"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                    {aud.number}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{aud.title}</h3>
                    <p className="text-gray-600 text-sm">{aud.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <button
              onClick={() => navigate("/login")}
              className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-8 rounded-lg"
            >
              Começar
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Endereço</h3>
            <p className="text-gray-300">
              Escola Superior de Tecnologia – EST/UEA
              <br /> Av. Darcy Vargas, 1200
              <br /> Manaus, AM - Brasil
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
            {/* <p className="text-gray-300">[Links fake aqui]</p> */}
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Idioma</h3>
            <p className="text-gray-300">Português (Brasil)</p>
            <p className="text-gray-400 mt-4">
              &copy; 2025 EGDD.AI. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
