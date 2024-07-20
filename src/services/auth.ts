import axios from 'axios';

export const login = async (username: string, password: string) => {
    const response = await axios.post(
        'https://acesso.cgtecnologia.com.br/realms/pethub/protocol/openid-connect/token',
        new URLSearchParams({
            grant_type: 'password',
            client_id: 'pethub-api',
            username: username,
            password: password,
            client_secret: 'ORghXmmumTN11vqZP1a6tQcbp0V86Cfe',
        }),
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        }
    );
    localStorage.setItem('token', response.data.access_token);
    return response.data.access_token;
};