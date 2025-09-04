

export const insertButton = (data) => {
    return apiButton.post(`/`, data);
}
export const getButton = (id) => {
    return apiButton.get(`/${id}`);
}
export const updateButton = (id, data) => {
    return apiButton.put(`/${id}`, data);
}
export const deleteButton = (id) => {
    return apiButton.delete(`/${id}`);
}
