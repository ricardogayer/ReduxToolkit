import axios from "axios";

const client = axios.create({baseURL: "https://pokeapi.co/api/v2/"});

export const request = ({ ...options }) => {
    // Uso real ...
    // client.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem("token")}`;

    client.defaults.headers.common.Authorization = `Bearer kakakaka`;
    const onSuccess = response => response;
    const onError = error => {
        // Erro pode ser capturado aqui e logado tb.
        return error;
    };
    return client(options).then(onSuccess, onError);

} 