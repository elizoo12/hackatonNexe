import api from "./apiService";

export const insertKid = (data) => {
    return api.post(`/`, data);
}
export const getKid = (id) => {
    return api.get(`/${id}`);
}
export const updateKid = (id, data) => {
    return api.put(`/${id}`, data);
}
export const deleteKid = (id) => {
    return api.delete(`/${id}`);
}


export const getKidButtons = (id) => {
    return api.get(`/${id}/buttons`);
}

export const getKidDoctor = (id) => {
    return api.get(`/${id}/doctor`);
}
export const getKidTutor = (id) => {
    return api.get(`/${id}/tutor`);
}