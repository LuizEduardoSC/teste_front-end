// src/pages/RegisterUser.tsx
import React, { useState } from 'react';
import axios from 'axios';

const RegisterUser: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleRegister = () => {
        axios.post('/api/register', { name, email })
            .then(response => {
                console.log('User registered', response.data);
            });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-4">Register User</h2>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                    Register
                </button>
            </div>
        </div>
    );
};

export default RegisterUser;
