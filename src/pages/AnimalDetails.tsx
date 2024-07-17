import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const AnimalDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [animal, setAnimal] = useState<any>(null);

    useEffect(() => {
        axios.get(`/api/animals/${id}`)
            .then(response => {
                setAnimal(response.data);
            });
    }, [id]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded shadow-md w-full max-w-lg">
                {animal && (
                    <>
                        <h2 className="text-2xl font-bold mb-4">{animal.nome}</h2>
                        <p className="text-lg">{animal.especies}</p>
                    </>
                )}
            </div>
        </div>
    );
};

export default AnimalDetails;
