import api from "./apiService";

export const insertKid = (data) => {
    return api.post(`/kids`, data);
}
export const getKid = (id) => {
    return api.get(`/kids/${id}`);
}
export const updateKid = (id, data) => {
    return api.put(`/kids/${id}`, data);
}
export const deleteKid = (id) => {
    return api.delete(`/kids/${id}`);
}


export const getKidButtons = (id) => {
    return api.get(`/kids/${id}/buttons`);
}

export const getKidDoctor = (id) => {
    return api.get(`/kids/${id}/doctor`);
}
export const getKidTutor = (id) => {
    return api.get(`/kids/${id}/tutor`);
}