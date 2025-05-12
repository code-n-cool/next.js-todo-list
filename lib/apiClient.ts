import axiosClient from '@/lib/axiosClient';
import { User } from '@/types/user';

export const getUsers = async (q = '', page = 1): Promise<{ users: User[]; total: number }> => {
    const response = await axiosClient.get('/users', {
        params: { q, page },
    });
    return response.data;
};

export const getUserById = async (id: number | string): Promise<User> => {
    const response = await axiosClient.get(`/users/${id}`);
    return response.data;
};

export const logSearch = async (term: string): Promise<void> => {
    try {
        await axiosClient.post('/logs', {
            action: 'search',
            query: term,
            timestamp: new Date().toISOString(),
        });
    } catch (error) {
        console.error('Log failed:', error);
    }
};