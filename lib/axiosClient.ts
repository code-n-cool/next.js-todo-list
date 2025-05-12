import axios from 'axios';

const axiosClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_API_URL || "http://127.0.0.1:4000/api/",
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000,
});

export default axiosClient;
