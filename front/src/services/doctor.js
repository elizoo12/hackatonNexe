import {apiDoctor} from "./apiService";

export const insertDoctor = async (data) => {
    return apiDoctor.post(`/`, data);
}

export const getDoctor = async (id) =>{
    return apiDoctor.get(`/${id}`);
}

export const updateDoctor = async (id, data) => {
    return apiDoctor.put(`/${id}`, data);
}

export const deleteDoctor = async(id) => {
    return apiDoctor.delete(`/${id}`);
}
export const getDoctorKids =async (id) => {
    return apiDoctor.get(`/${id}/kids`);
}