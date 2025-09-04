

export const insertDoctor = (data) => {
    return apiDoctor.post(`/`, data);
}

export const getDoctor = (id) =>{
    return apiDoctor.get(`/${id}`);
}

export const updateDoctor = (id, data) => {
    return apiDoctor.put(`/${id}`, data);
}

export const deleteDoctor = (id) => {
    return apiDoctor.delete(`/${id}`);
}
export const getDoctorKids = (id) => {
    return apiDoctor.get(`/${id}/kids`);
}