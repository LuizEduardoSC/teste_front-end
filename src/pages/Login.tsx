import axios from 'axios';
import { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post(
                'https://acesso.cgtecnologia.com.br/realms/pethub/protocol/openid-connect/token',
                new URLSearchParams({
                    grant_type: 'password',
                    client_id: 'pethub-api',
                    username: username,
                    password: password,
                    client_secret: 'ORghXmmumTN11vqZP1a6tQcbp0V86Cfe',
                })
            );
            localStorage.setItem('token', response.data.access_token);


        } catch (error) {
            console.error('Login failed', error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                />
                <button onClick={handleLogin} className="w-full bg-blue-500 text-white p-2 rounded">
                    Login
                </button>
            </div>
        </div>
    );
};

export default Login;