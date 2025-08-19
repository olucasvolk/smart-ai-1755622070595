export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 text-center">
        <div className="text-6xl mb-6">🚀</div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Projeto Criado!
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Seu projeto foi criado com sucesso. Personalize como quiser!
        </p>
        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <h2 className="font-semibold text-blue-800 mb-2">Prompt Original:</h2>
          <p className="text-blue-700">Dashboard de vendas com gráficos</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
            Começar a Editar
          </button>
          <button className="bg-gray-100 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors">
            Ver Documentação
          </button>
        </div>
      </div>
    </div>
  );
}