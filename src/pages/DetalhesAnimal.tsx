import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const AnimalDetails = () => {
    const { id } = useParams();
    const [animal, setAnimal] = useState(null);

    useEffect(() => {
        const fetchAnimalDetails = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`https://pethub-hml.cgtecnologia.com.br/api/v1/animal/detalhe?id=${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setAnimal(response.data);
            } catch (error) {
                console.error('Erro ao buscar detalhes do animal', error);
            }
        };
        fetchAnimalDetails();
    }, [id]);

    if (!animal) {
        return <div>Loading...</div>;
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="p-8 bg-white rounded shadow-md">
                <h2 className="text-2xl mb-4">Detalhes do Animal</h2>
                <p><strong>Nome:</strong> {animal.nome}</p>
                <p><strong>Nome Científico:</strong> {animal.nomeCientifico}</p>
                <p><strong>Nome da Espécie:</strong> {animal.nomeEspecie}</p>
                <p><strong>Cor:</strong> {animal.cor}</p>
                <p><strong>Data de Nascimento:</strong> {animal.dataNascimento}</p>
                <p><strong>Tamanho/Porte:</strong> {animal.tamanhoPorte}</p>
                <p><strong>Peso:</strong> {animal.peso} kg</p>
                <p><strong>Temperamento:</strong> {animal.temperamento}</p>
                <p><strong>Raça:</strong> {animal.raca}</p>
            </div>
        </div>
    );
};

export default AnimalDetails;
