import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ListAnimals = () => {
    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        const fetchAnimals = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('https://pethub-hml.cgtecnologia.com.br/api/v1/animal', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setAnimals(response.data);
            } catch (error) {
                console.error('Error fetching animals', error);
            }
        };
        fetchAnimals();
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="p-8 bg-white rounded shadow-md w-full max-w-3xl">
                <h2 className="text-2xl mb-4">Lista de Animais</h2>
                <ul>
                    {animals.map((animal) => (
                        <li key={animal.id} className="mb-4 p-4 border border-gray-300 rounded">
                            <Link to={`/animal/${animal.id}`} className="text-blue-500">
                                {animal.nome}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ListAnimals;
