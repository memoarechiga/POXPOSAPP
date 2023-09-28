import axios from 'axios';

const storeApi = axios.create({
    baseURL: 'http://localhost:8000/pox/api/store/'
});

export const getAllStores = () => storeApi.get("/");
export const getStore = (id_store) => storeApi.get(`/${id_store}/`);
export const newStore = (store) => storeApi.post("/", store);
export const deleteStore = (id_store) => storeApi.delete(`/${id_store}`);
export const updateStore = (id_store, store) => storeApi.put(`/${id_store}/`, store);