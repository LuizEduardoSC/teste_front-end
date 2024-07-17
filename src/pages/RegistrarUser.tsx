// src/pages/RegisterUser.tsx
import React, { useState } from 'react';
import axios from 'axios';

const RegistrarUser: React.FC = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');

    const handleRegister = () => {
        axios.post('/api/register', { nome, email })
            .then(response => {
                console.log('User registered', response.data);
            });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-4">Registrar Usuario</h2>
                <input
                    type="text"
                    placeholder="Nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                />
                <button onClick={handleRegister} className="w-full bg-blue-500 text-white p-2 rounded">
                    Registrar
                </button>
            </div>
        </div>
    );
};

export default RegistrarUser;
