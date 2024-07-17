// src/pages/AnimalList.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AnimalList: React.FC = () => {
    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        axios.get('/api/animals')
            .then(response => {
                setAnimals(response.data);
            });
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded shadow-md w-full max-w-lg">
                <h2 className="text-2xl font-bold mb-4">Lista de Animais</h2>
                <ul>
                    {animals.map((animal: any) => (
                        <li key={animal.id} className="border-b border-gray-300 py-2">
                            {animal.nome} - {animal.especies}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AnimalList;
