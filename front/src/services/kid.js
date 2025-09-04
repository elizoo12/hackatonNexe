import {apiKid} from "./apiService";

export const insertKid = (data) => {
    return apiKid.post(`/`, data);
}
export const getKid = (id) => {
    return apiKid.get(`/${id}`);
}
export const updateKid = (id, data) => {
    return apiKid.put(`/${id}`, data);
}
export const deleteKid = (id) => {
    return apiKid.delete(`/${id}`);
}


export const getKidButtons = (id) => {
    return apiKid.get(`/${id}/buttons`);
}

export const getKidDoctor = (id) => {
    return apiKid.get(`/${id}/doctor`);
}
export const getKidTutor = (id) => {
    return apiKid.get(`/${id}/tutor`);
}