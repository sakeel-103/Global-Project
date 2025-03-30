import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Signup from './pages/Signup';
import NotFound from './pages/NotFound';
import { checkAuth } from './api/auth';
import { useState, useEffect } from 'react';

// Protected route component
const ProtectedRoute = ({ children }) => {
  const [authState, setAuthState] = useState({
    isLoading: true,
    isAuthenticated: false
  });

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const result = await checkAuth();
        setAuthState({
          isLoading: false,
          isAuthenticated: result.authenticated
        });
      } catch (error) {
        console.error('Auth verification error:', error);
        setAuthState({
          isLoading: false,
          isAuthenticated: false
        });
      }
    };

    verifyAuth();
  }, []);

  if (authState.isLoading) {
    return <div>Loading...</div>;
  }

  return authState.isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        {/* <Route path="/" element={<Navigate to="/login" />} /> */}
        <Route path="/" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;