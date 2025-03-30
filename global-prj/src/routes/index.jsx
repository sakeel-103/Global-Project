import { createBrowserRouter } from 'react-router-dom';
import ProtectedRoute from '../components/common/ProtectedRoute';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import EditUser from '../pages/EditUser';
import NotFound from '../pages/NotFound';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/dashboard',
        element: (
            <ProtectedRoute>
                <Dashboard />
            </ProtectedRoute>
        ),
    },
    {
        path: '/edit-user/:id',
        element: (
            <ProtectedRoute>
                <EditUser />
            </ProtectedRoute>
        ),
    },
    {
        path: '*',
        element: <NotFound />,
    },
]);