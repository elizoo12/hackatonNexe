import {apiTutor} from "./apiService";
export const insertTutor = (data) => {
    apiTutor.post(`/`, data);
}
export const getTutor = (id) => {
    return apiTutor.get(`/${id}`);
}
export const updateTutor = (id, data) => {
    return apiTutor.put(`/${id}`, data);
}
export const deleteTutor = (id) => {
    return apiTutor.delete(`/${id}`);
}
export const getTutorKid = (id) => {
    return apiTutor.get(`/${id}/kid`);
}