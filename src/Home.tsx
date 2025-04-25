// src/Home.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSearch = (style: string) => {
    if (username.trim()) {
      navigate(`/${style}?username=${username}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4 ">Busque um Perfil do GitHub</h1>
      <input
        type="text"
        className="p-2 border border-gray-300 rounded mb-4"
        placeholder="Digite o nome do usuário"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <div>
        <button
          onClick={() => handleSearch('tailwind')}
          className="mr-2 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Buscar com Tailwind
        </button>
        <button
          onClick={() => handleSearch('styled')}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Buscar com Styled-Components
        </button>
      </div>
    </div>
  );
};

export default Home;
