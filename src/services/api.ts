// src/services/api.ts
import axios from 'axios';
import keycloak from './auth';

const api = axios.create({
    baseURL: 'https://pethub-hml.cgtecnologia.com.br/api',
});

api.interceptors.request.use(config => {
    const token = keycloak.token;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;
