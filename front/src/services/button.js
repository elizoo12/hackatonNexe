import api from "./apiService";

export const insertButton = (data) => {
    return api.post(`/`, data);
}
export const getButton = (id) => {
    return api.get(`/${id}`);
}
export const updateButton = (id, data) => {
    return api.put(`/${id}`, data);
}
export const deleteButton = (id) => {
    return api.delete(`/${id}`);
}
