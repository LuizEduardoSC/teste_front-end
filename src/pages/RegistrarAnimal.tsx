// src/pages/RegisterAnimal.tsx
import React, { useState } from 'react';
import axios from 'axios';

const RegistrarAnimal: React.FC = () => {
    const [nome, setNome] = useState('');
    const [especies, setEspecies] = useState('');

    const handleRegister = () => {
        axios.post('/api/animals', { nome, especies })
            .then(response => {
                console.log('Animal registered', response.data);
            });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-4">Registrar Animal</h2>
                <input
                    type="text"
                    placeholder="Nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                />
                <input
                    type="text"
                    placeholder="Espécie"
                    value={especies}
                    onChange={(e) => setEspecies(e.target.value)}
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                />
                <button onClick={handleRegister} className="w-full bg-blue-500 text-white p-2 rounded">
                    Registrar
                </button>
            </div>
        </div>
    );
};

export default RegistrarAnimal;
