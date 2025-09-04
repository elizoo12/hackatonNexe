import axios from "axios";

export const apiButton = axios.create({
    baseURL: "http://localhost:8082/button",
    headers: {
        "Content-Type": "application/json",
    },
});

export const apiTutor = axios.create({
    baseURL: "http://localhost:8082/tutor",
    headers: {
        "Content-Type": "application/json",
    },
});

export const apiKid = axios.create({
    baseURL: "http://localhost:8082/Kid",
    headers: {
        "Content-Type": "application/json",
    },
});

export const apiDoctor = axios.create({
    baseURL: "http://localhost:8082/doctor",
    headers: {
        "Content-Type": "application/json",
    },
});













