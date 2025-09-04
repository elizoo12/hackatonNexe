import api from "./apiService";

export const insertDoctor = (data) => {
    return api.post(`/`, data);
}

export const getDoctor = (id) =>{
    return api.get(`/${id}`);
}

export const updateDoctor = (id, data) => {
    return api.put(`/${id}`, data);
}

export const deleteDoctor = (id) => {
    return api.delete(`/${id}`);
}
export const getDoctorKids = (id) => {
    return api.get(`/${id}/kids`);
}