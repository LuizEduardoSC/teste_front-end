import axios from 'axios';
import { useState } from 'react';

const RegisterAnimal = () => {
    const [nome, setNome] = useState('');
    const [nomeCientifico, setNomeCientifico] = useState('');
    const [nomeEspecie, setNomeEspecie] = useState('');
    const [cor, setCor] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [tamanhoPorte, setTamanhoPorte] = useState('');
    const [peso, setPeso] = useState('');
    const [temperamento, setTemperamento] = useState('');
    const [raca, setRaca] = useState('');

    const handleRegister = async () => {
        try {
            const token = localStorage.getItem('token');
            await axios.post(
                'https://pethub-hml.cgtecnologia.com.br/api/v1/animal',
                {
                    nome: nome,
                    nomeCientifico: nomeCientifico,
                    nomeEspecie: nomeEspecie,
                    cor: cor,
                    dataNascimento: dataNascimento,
                    tamanhoPorte: tamanhoPorte,
                    peso: parseFloat(peso),
                    temperamento: temperamento,
                    raca: raca,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            // Redirecionar ou exibir mensagem de sucesso
        } catch (error) {
            console.error('Registration failed', error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="p-8 bg-white rounded shadow-md">
                <h2 className="text-2xl mb-4">Cadastro de Animal</h2>
                <input
                    type="text"
                    placeholder="Nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="mb-4 p-2 border border-gray-300 rounded"
                />
                <input
                    type="text"
                    placeholder="Nome Científico"
                    value={nomeCientifico}
                    onChange={(e) => setNomeCientifico(e.target.value)}
                    className="mb-4 p-2 border border-gray-300 rounded"
                />
                <input
                    type="text"
                    placeholder="Nome da Espécie"
                    value={nomeEspecie}
                    onChange={(e) => setNomeEspecie(e.target.value)}
                    className="mb-4 p-2 border border-gray-300 rounded"
                />
                <input
                    type="text"
                    placeholder="Cor"
                    value={cor}
                    onChange={(e) => setCor(e.target.value)}
                    className="mb-4 p-2 border border-gray-300 rounded"
                />
                <input
                    type="date"
                    placeholder="Data de Nascimento"
                    value={dataNascimento}
                    onChange={(e) => setDataNascimento(e.target.value)}
                    className="mb-4 p-2 border border-gray-300 rounded"
                />
                <input
                    type="text"
                    placeholder="Tamanho/Porte"
                    value={tamanhoPorte}
                    onChange={(e) => setTamanhoPorte(e.target.value)}
                    className="mb-4 p-2 border border-gray-300 rounded"
                />
                <input
                    type="number"
                    placeholder="Peso"
                    value={peso}
                    onChange={(e) => setPeso(e.target.value)}
                    className="mb-4 p-2 border border-gray-300 rounded"
                />
                <input
                    type="text"
                    placeholder="Temperamento"
                    value={temperamento}
                    onChange={(e) => setTemperamento(e.target.value)}
                    className="mb-4 p-2 border border-gray-300 rounded"
                />
                <input
                    type="text"
                    placeholder="Raça"
                    value={raca}
                    onChange={(e) => setRaca(e.target.value)}
                    className="mb-4 p-2 border border-gray-300 rounded"
                />
                <button onClick={handleRegister} className="w-full p-2 bg-blue-500 text-white rounded">
                    Cadastrar
                </button>
            </div>
        </div>
    );
};

export default RegisterAnimal;
