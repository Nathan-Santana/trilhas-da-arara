import Image from 'next/image';
import React from 'react';

const Locais = () => {
  return (
    <main className="bg-gray-100 min-h-screen p-8">
      {/* Header */}
      <header className="flex justify-between items-center bg-white p-4 shadow-md">
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
          <span className="font-bold text-xl">Trilhas da Arara</span>
        </div>
        <nav className="flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-blue-500">Pesquisar tudo</a>
          <a href="#" className="text-gray-700 hover:text-blue-500">Hotéis</a>
          <a href="#" className="text-gray-700 hover:text-blue-500">O que fazer</a>
          <a href="#" className="text-gray-700 hover:text-blue-500">Restaurantes</a>
          <a href="#" className="text-gray-700 hover:text-blue-500">Agenda</a>
        </nav>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg">Entrar</button>
      </header>

      {/* Content */}
      <div className="flex mt-6 space-x-8">
        {/* Left Sidebar */}
        <aside className="w-1/4 bg-white p-4 rounded-lg shadow-md">
          {/* Availability */}
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-4">Disponibilidade</h2>
            <label className="block text-sm">De:</label>
            <input type="date" className="w-full border p-2 rounded mb-4" />
            <label className="block text-sm">Até:</label>
            <input type="date" className="w-full border p-2 rounded mb-4" />
            <button className="w-full bg-orange-500 text-white p-2 rounded-lg">Veja a disponibilidade</button>
          </div>

          {/* Pontos Turísticos */}
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-4">Pontos Turísticos</h2>
            {['Cachoeiras', 'Trilhas', 'Cultural', 'Dunas', 'Lojas'].map(item => (
              <div key={item} className="flex items-center space-x-2 mb-2">
                <input type="checkbox" id={item.toLowerCase()} className="form-checkbox" />
                <label htmlFor={item.toLowerCase()}>{item}</label>
              </div>
            ))}
          </div>

          {/* Hospedagem */}
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-4">Hospedagem</h2>
            {['Camping', 'Pousada', 'Casa Compartilhada', 'Hoteis'].map(item => (
              <div key={item} className="flex items-center space-x-2 mb-2">
                <input type="checkbox" id={item.toLowerCase()} className="form-checkbox" />
                <label htmlFor={item.toLowerCase()}>{item}</label>
              </div>
            ))}
          </div>

          {/* Restaurantes */}
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-4">Restaurantes</h2>
            {['Pizza', 'Hamburguer', 'Sorvete e Açaí', 'Comida Regional', 'Vegano'].map(item => (
              <div key={item} className="flex items-center space-x-2 mb-2">
                <input type="checkbox" id={item.toLowerCase()} className="form-checkbox" />
                <label htmlFor={item.toLowerCase()}>{item}</label>
              </div>
            ))}
          </div>
        </aside>

        {/* Main content */}
        <div className="w-3/4 space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Coisas para Fazer em Taquaruçu</h1>
              <p className="text-gray-600">49 Atividades encontradas</p>
            </div>
            <div>
              <label className="text-sm text-gray-600">Sort by:</label>
              <select className="border p-2 rounded ml-2">
                <option value="popularity">Popularidade</option>
                <option value="price">Preço</option>
              </select>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-2 gap-6">
            {[1, 2, 3, 4, 5].map(index => (
              <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="relative">
                  <Image
                    
                    alt="Cachoeira Cristal"
                    width={500}
                    height={300}
                    className="object-cover w-full"
                  />
                  <div className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 text-sm rounded">Atividade Aquática</div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold">Cachoeira Cristal</h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <span>⭐⭐⭐⭐⭐</span>
                    <span>(584 reviews)</span>
                  </div>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                    <span>🕛 2 Horas</span>
                    <span>🚗 Transporte</span>
                    <span>👨‍👩‍👧‍👦 Plano Familiar</span>
                  </div>
                  <div className="mt-4">
                    <span className="text-lg font-bold text-orange-500">$35.00</span>
                    <span className="text-gray-600"> por pessoa</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="bg-orange-500 text-white px-6 py-2 rounded-lg w-full">Carregar Mais</button>
        </div>
      </div>
    </main>
  );
};

export default Locais;
