import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../../api/auth';
import Alert from '../common/Alert';

// Enhanced responsive CSS styles (unchanged)
const styles = `
  .login-container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding: 20px;
  }

  .login-card {
    width: 100%;
    max-width: 600px;
    background: white;
    border-radius: 16px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .login-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }

  .login-header {
    background: linear-gradient(135deg,rgb(128, 234, 102) 0%,rgb(100, 162, 75) 100%);
    color: white;
    padding: 25px 20px;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .login-header::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%);
    transform: rotate(30deg);
  }

  .login-header h1 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 8px;
    position: relative;
  }

  .login-header p {
    font-size: 14px;
    opacity: 0.9;
    position: relative;
  }

  .login-form {
    padding: 25px 20px;
  }

  .form-group {
    margin-bottom: 20px;
    position: relative;
  }

  .form-group label {
    display: block;
    font-size: 14px;
    color: #555;
    margin-bottom: 8px;
    font-weight: 500;
  }

  .input-wrapper {
    position: relative;
    width: 100%;
  }

  .input-wrapper .icon {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: rgb(102, 234, 122);
    font-size: 16px;
    z-index: 2;
  }

  .form-control {
    width: 100%;
    padding: 14px 20px 14px 45px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 14px;
    transition: all 0.3s ease;
    background-color: #fff;
    position: relative;
    z-index: 1;
    box-sizing: border-box;
    height: 48px;
  }

  .form-control:focus {
    outline: none;
    border-color: rgb(137, 234, 102);
    box-shadow: 0 0 0 2px rgba(102, 234, 122, 0.2);
  }

  .btn {
    width: 100%;
    padding: 14px;
    background: linear-gradient(135deg,rgb(102, 234, 104) 0%,rgb(81, 162, 75) 100%);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg,rgb(94, 162, 75) 0%,rgb(102, 234, 106) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .btn:hover::before {
    opacity: 1;
  }

  .btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
  }

  .btn:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  .btn-content {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .spinner {
    animation: spin 1s linear infinite;
    width: 18px;
    height: 18px;
  }
    .auth-footer {
    margin-top: 20px;
    text-align: center;
    font-size: 14px;
    color: #666;
  }

  .auth-footer a {
    color: rgb(102, 234, 122);
    font-weight: 600;
    text-decoration: none;
  }

  .auth-footer a:hover {
    text-decoration: underline;
  }
    

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  .demo-credentials {
    background-color: #f8f9fa;
    border-top: 1px solid #eee;
    padding: 15px;
    text-align: center;
    font-size: 13px;
    color: #666;
    border-radius: 0 0 16px 16px;
  }

  .demo-credentials p {
    margin-bottom: 12px;
    font-weight: 500;
  }

  .credentials-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .credential-item {
    background: white;
    padding: 10px;
    border-radius: 6px;
    box-shadow: 0 3px 10px rgba(0,0,0,0.05);
    transition: transform 0.2s ease;
    text-align: left;
    word-break: break-all;
  }

  .credential-item:hover {
    transform: translateY(-3px);
  }

  .credential-label {
    font-weight: 600;
    color:rgb(120, 234, 102);
    margin-right: 5px;
  }

  .icon-svg {
    width: 18px;
    height: 18px;
  }

  /* Desktop styles */
  @media (min-width: 768px) {
    .login-header {
      padding: 30px;
    }

    .login-header h1 {
      font-size: 28px;
    }

    .login-header p {
      font-size: 15px;
    }

    .login-form {
      padding: 30px;
    }

    .form-group {
      margin-bottom: 25px;
    }

    .form-group label {
      font-size: 14px;
      margin-bottom: 10px;
    }

    .input-wrapper .icon {
      left: 15px;
      font-size: 18px;
    }

    .form-control {
      padding: 14px 14px 14px 50px;
      font-size: 15px;
      border-radius: 10px;
    }

    .btn {
      padding: 15px;
      font-size: 16px;
      border-radius: 10px;
    }

    .demo-credentials {
      padding: 20px;
      font-size: 14px;
    }

    .credentials-grid {
      grid-template-columns: 1fr 1fr;
    }

    .credential-item {
      padding: 12px;
      border-radius: 8px;
      text-align: center;
    }

    .icon-svg {
      width: 20px;
      height: 20px;
    }
  }

  /* Small mobile devices */
  @media (max-width: 360px) {
    .login-container {
      padding: 10px;
    }

    .login-header {
      padding: 20px 15px;
    }

    .login-header h1 {
      font-size: 22px;
    }

    .login-form {
      padding: 20px 15px;
    }

    .form-control {
      padding: 10px 10px 10px 38px;
    }

    .btn {
      padding: 12px;
    }
  }
`;

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: 'eve.holt@reqres.in',
    password: 'cityslicka'
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await login(formData.email, formData.password);

      if (response.success) {
        localStorage.setItem('authToken', response.token);
        localStorage.setItem('userEmail', formData.email);
        navigate('/dashboard');
      } else {
        setError(response.message || 'Invalid credentials');
      }
    } catch (err) {
      setError('An error occurred during login. Please try again.');
      console.error('Login error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <style>{styles}</style>
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <h1>Welcome Back</h1>
            <p>Sign in to manage your users</p>
          </div>

          <div className="login-form">
            {error && <Alert message={error} type="error" />}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <div className="input-wrapper">
                  <span className="icon">
                    <svg className="icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Password</label>
                <div className="input-wrapper">
                  <span className="icon">
                    <svg className="icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </span>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <button type="submit" className="btn" disabled={isLoading}>
                <span className="btn-content">
                  {isLoading ? (
                    <>
                      <svg className="spinner" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Signing in...
                    </>
                  ) : 'Sign In'}
                </span>
              </button>
            </form>

            <div className="auth-footer">
              Don't have an account? <Link to="/signup">Register here</Link>
            </div>

            <div className="demo-credentials">
              <p>Demo credentials</p>
              <div className="credentials-grid">
                <div className="credential-item">
                  <span className="credential-label">Email:</span>
                  eve.holt@reqres.in
                </div>
                <div className="credential-item">
                  <span className="credential-label">Password:</span>
                  cityslicka
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}