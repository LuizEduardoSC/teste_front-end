import axios from 'axios';
import { useState } from 'react';

const RegisterUser = () => {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');

    const handleRegister = async () => {
        try {
            const token = localStorage.getItem('token');
            await axios.post(
                'https://pethub-hml.cgtecnologia.com.br/api/v1/usuario',
                {
                    nome: nome,
                    cpf: cpf,
                    dataNascimento: dataNascimento,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            // Redirecionar para a página de cadastro de animal
        } catch (error) {
            console.error('Falha no registro', error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="p-8 bg-white rounded shadow-md">
                <h2 className="text-2xl mb-4">Cadastro de Usuário</h2>
                <input
                    type="text"
                    placeholder="Nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="mb-4 p-2 border border-gray-300 rounded"
                />
                <input
                    type="text"
                    placeholder="CPF"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    className="mb-4 p-2 border border-gray-300 rounded"
                />
                <input
                    type="date"
                    placeholder="Data de Nascimento"
                    value={dataNascimento}
                    onChange={(e) => setDataNascimento(e.target.value)}
                    className="mb-4 p-2 border border-gray-300 rounded"
                />
                <button onClick={handleRegister} className="w-full p-2 bg-blue-500 text-white rounded">
                    Cadastrar
                </button>
            </div>
        </div>
    );
};

export default RegisterUser;
