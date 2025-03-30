import axios from 'axios';

const BASE_URL = 'https://reqres.in/';

export const getUsers = async (page) => {
    try {
        const response = await axios.get(`${BASE_URL}api/users?page=${page}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.error || 'Failed to fetch users');
    }
};

export const updateUser = async (id, userData) => {
    try {
        const response = await axios.put(`${BASE_URL}api/users/${id}`, userData);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.error || 'Failed to update user');
    }
};

export const deleteUser = async (id) => {
    try {
        await axios.delete(`${BASE_URL}api/users/${id}`);
        return true;
    } catch (error) {
        throw new Error(error.response?.data?.error || 'Failed to delete user');
    }
};