import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout, checkAuth } from '../api/auth';

const styles = `
  .dashboard-container {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }

  .dashboard-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    padding-bottom: 20px;
    border-bottom: 1px solid #e0e0e0;
  }

  .welcome-section {
    margin-bottom: 20px;
  }

  .welcome-section h1 {
    color: #333;
    font-size: 24px;
    margin-bottom: 10px;
  }

  .welcome-section p {
    color: #666;
    font-size: 16px;
  }

  .logout-btn {
    background: linear-gradient(135deg, #ff5f6d 0%, #ffc371 100%);
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .logout-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .dashboard-content {
    background-color: white;
    border-radius: 12px;
    padding: 30px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  }

  .dashboard-content h2 {
    color: #444;
    font-size: 20px;
    margin-bottom: 20px;
  }

  .placeholder-text {
    color: #777;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    .dashboard-header {
      flex-direction: column;
      align-items: flex-start;
    }

    .logout-btn {
      margin-top: 15px;
    }
  }
`;

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const result = await checkAuth();
        if (result.authenticated) {
          setUser(result.user);
        } else {
          navigate('/login');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  if (isLoading) {
    return (
      <div className="dashboard-container">
        <p>Loading user data...</p>
      </div>
    );
  }

  return (
    <>
      <style>{styles}</style>
      <div className="dashboard-container">
        <div className="dashboard-header">
          <div className="welcome-section">
            <h1>Dashboard</h1>
            <p>Welcome back, {user?.name || 'User'}!</p>
          </div>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>

        <div className="dashboard-content">
          <h2>User Management Dashboard</h2>
          <p className="placeholder-text">
            This is a placeholder dashboard for the user management system.
            In a complete application, you would see analytics, user lists,
            and management tools here. You're currently logged in as {user?.email}.
          </p>
        </div>
      </div>
    </>
  );
}