import api from "./apiService";

export const insertButton = (data) => {
    return api.post(`/buttons`, data);
}
export const getButton = (id) => {
    return api.get(`/buttons/${id}`);
}
export const updateButton = (id, data) => {
    return api.put(`/buttons/${id}`, data);
}
export const deleteButton = (id) => {
    return api.delete(`/buttons/${id}`);
}
