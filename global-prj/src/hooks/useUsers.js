import { useState, useEffect } from 'react';
import { getUsers, deleteUser } from '../api/reqresApi';

export const useUsers = () => {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchUsers = async (page) => {
        setLoading(true);
        setError('');
        try {
            const data = await getUsers(page);
            setUsers(data.data);
            setCurrentPage(data.page);
            setTotalPages(data.total_pages);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteUser(id);
            setUsers(users.filter(user => user.id !== id));
        } catch (err) {
            setError(err.message);
        }
    };

    useEffect(() => {
        fetchUsers(currentPage);
    }, [currentPage]);

    return { users, currentPage, totalPages, loading, error, fetchUsers, handleDelete, setCurrentPage };
};