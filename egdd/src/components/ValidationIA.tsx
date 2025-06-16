import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ValidationIA() {
  return (
    <aside className="w-full lg:w-1/4 border border-gray-300 bg-white p-4 rounded-lg shadow-sm h-[320px]">
      <h3 className="font-semibold text-lg mb-4">Validação de coerência por IA</h3>
      <div className="space-y-4">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <strong>O conteúdo não está de acordo com a disciplina informada</strong>
        </div>
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          <strong>
            Você pode adicionar sobre tal coisa em Problema de Aprendizagem
          </strong>
        </div>

        {/* Navegação */}
        <div className="flex justify-center items-center gap-4 mt-4">
          <button className="p-2 rounded-full hover:bg-gray-200 transition">
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <div className="w-2 h-2 rounded-full bg-blue-500" />
          <button className="p-2 rounded-full hover:bg-gray-200 transition">
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </aside>
  );
}
