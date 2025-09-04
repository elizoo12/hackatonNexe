

export const insertTutor = (data) => {
    return apiTutor.post(`/tutors`, data);
}
export const getTutor = (id) => {
    return apiTutor.get(`/tutors/${id}`);
}
export const updateTutor = (id, data) => {
    return apiTutor.put(`/tutors/${id}`, data);
}
export const deleteTutor = (id) => {
    return apiTutor.delete(`/tutors/${id}`);
}
export const getTutorKid = (id) => {
    return apiTutor.get(`/tutors/${id}/kid`);
}