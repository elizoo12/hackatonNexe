import api from "./apiService";

export const insertDoctor = (data) => {
    return api.post(`/doctors`, data);
}

export const getDoctor = (id) =>{
    return api.get(`/doctors/${id}`);
}

export const updateDoctor = (id, data) => {
    return api.put(`/doctors/${id}`, data);
}

export const deleteDoctor = (id) => {
    return api.delete(`/doctors/${id}`);
}
export const getDoctorKids = (id) => {
    return api.get(`/doctors/${id}/kids`);
}