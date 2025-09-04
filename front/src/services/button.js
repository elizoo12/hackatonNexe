import {apiButton} from "./apiService";

export const insertButton = async (data) => {
    return apiButton.post(`/`, data);
}
export const getButton = async () => {
    return apiButton.get("/");
}
export const updateButton = async (id, data) => {
    return apiButton.put(`/${id}`, data);
}
export const deleteButton = async (id) => {
    return apiButton.delete(`/${id}`);
}
