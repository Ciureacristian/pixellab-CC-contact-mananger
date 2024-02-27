import axios from "axios";

const baseUrL = import.meta.env.VITE_SERVER_URI;

export const client = axios.create({
    baseURL: baseUrL
});