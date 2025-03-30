import { useNavigate } from 'react-router-dom';
import { removeToken } from '../utils/storage';

export const useAuth = () => {
    const navigate = useNavigate();

    const logout = () => {
        removeToken();
        navigate('/login');
    };

    return { logout };
};