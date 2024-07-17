import React, { useState } from 'react';
import keycloak from '../services/auth';

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        keycloak.init({ onLoad: 'login-required' }).then(authenticated => {
            if (authenticated) {
                console.log('Authenticated');
            } else {
                keycloak.login();
            }
        });
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