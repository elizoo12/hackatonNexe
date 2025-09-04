import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:8082/nexe",
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;











