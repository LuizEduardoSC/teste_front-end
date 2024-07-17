import api from './api';

interface Animal {
    id?: number;
    nome: string;
    nomeCientifico: string;
    nomeEspecie: string;
    cor: string;
    codigoChip: string;
    codigoTatuagem: string;
    dataNascimento: number;
    tamanhoPorte: string;
    peso: number;
    temperamento: string;
    raca: string;
    foto: string;
}

export const getAnimals = async (): Promise<Animal[]> => {
    const response = await api.get('/animais');
    return response.data;
};

export const getAnimalById = async (id: number): Promise<Animal> => {
    const response = await api.get(`/animais/${id}`);
    return response.data;
};

export const createAnimal = async (animal: Animal): Promise<Animal> => {
    const response = await api.post('/animais', animal);
    return response.data;
};

export const updateAnimal = async (id: number, animal: Animal): Promise<Animal> => {
    const response = await api.put(`/animais/${id}`, animal);
    return response.data;
};

export const deleteAnimal = async (id: number): Promise<void> => {
    await api.delete(`/animais/${id}`);
};
