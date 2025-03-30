import { Link, useLocation } from 'react-router-dom';
import { FiHome, FiUsers, FiLogOut, FiUser, FiSettings } from 'react-icons/fi';

const Navbar = () => {
  const location = useLocation();
  
  // Replace with your actual authentication logic
  const isAuthenticated = localStorage.getItem('token') !== null;

  return (
    <nav style={{
      background: 'linear-gradient(135deg, #3a86ff 0%, #3f37c9 100%)',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      height: '70px',
      display: 'flex',
      justifyContent: 'center',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000
    }}>
      <div style={{
        width: '100%',
        maxWidth: '1200px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px'
      }}>
        <Link to="/" style={{
          display: 'flex',
          alignItems: 'center',
          textDecoration: 'none'
        }}>
          <span style={{
            color: 'white',
            fontSize: '1.5rem',
            fontWeight: 700,
            marginLeft: '10px'
          }}>EmployWise</span>
        </Link>

        <div style={{ display: 'flex', gap: '20px' }}>
          <Link 
            to="/dashboard" 
            style={{
              display: 'flex',
              alignItems: 'center',
              color: location.pathname === '/dashboard' ? 'white' : 'rgba(255, 255, 255, 0.8)',
              textDecoration: 'none',
              padding: '8px 15px',
              borderRadius: '6px',
              background: location.pathname === '/dashboard' ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
              transition: 'all 0.3s ease'
            }}
          >
            <FiHome style={{ marginRight: '8px', fontSize: '1.1rem' }} />
            <span>Dashboard</span>
          </Link>
          
          <Link 
            to="/users" 
            style={{
              display: 'flex',
              alignItems: 'center',
              color: location.pathname === '/users' ? 'white' : 'rgba(255, 255, 255, 0.8)',
              textDecoration: 'none',
              padding: '8px 15px',
              borderRadius: '6px',
              background: location.pathname === '/users' ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
              transition: 'all 0.3s ease'
            }}
          >
            <FiUsers style={{ marginRight: '8px', fontSize: '1.1rem' }} />
            <span>Users</span>
          </Link>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          {isAuthenticated ? (
            <>
              <button 
                onClick={() => {
                  localStorage.removeItem('token');
                  window.location.reload();
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  border: 'none',
                  padding: '8px 15px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                <FiLogOut style={{ marginRight: '8px', fontSize: '1.1rem' }} />
                <span>Logout</span>
              </button>
            </>
          ) : (
            <Link 
              to="/login" 
              style={{
                background: 'white',
                color: '#3a86ff',
                padding: '8px 20px',
                borderRadius: '6px',
                textDecoration: 'none',
                fontWeight: 500,
                transition: 'all 0.3s ease'
              }}
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;