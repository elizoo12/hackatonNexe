import api from "./apiService";
export const insertTutor = (data) => {
    return api.post(`/tutors`, data);
}
export const getTutor = (id) => {
    return api.get(`/tutors/${id}`);
}
export const updateTutor = (id, data) => {
    return api.put(`/tutors/${id}`, data);
}
export const deleteTutor = (id) => {
    return api.delete(`/tutors/${id}`);
}
export const getTutorKid = (id) => {
    return api.get(`/tutors/${id}/kid`);
}