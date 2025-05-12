import axios from 'axios';

const axiosClient = axios.create({
    baseURL: process.env.BACKEND_API_URL || "https://express-zod-zustand-faker.onrender.com/api/",
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000,
});

export default axiosClient;
