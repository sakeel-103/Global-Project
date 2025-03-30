import { Link } from 'react-router-dom';

const notFoundStyles = `
  .not-found-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
    text-align: center;
  }

  .not-found-content {
    max-width: 500px;
    padding: 3rem;
    background: white;
    border-radius: 16px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  }

  .not-found-title {
    font-size: 3rem;
    font-weight: 800;
    color: #1e293b;
    margin-bottom: 1rem;
    line-height: 1;
  }

  .not-found-title span {
    display: block;
    font-size: 6rem;
    color: #64748b;
    opacity: 0.2;
    margin-bottom: 0.5rem;
  }

  .not-found-message {
    font-size: 1.25rem;
    color: #64748b;
    margin-bottom: 2rem;
  }

  .not-found-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 1.5rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border-radius: 8px;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(102, 126, 234, 0.1);
  }

  .not-found-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 7px 14px rgba(102, 126, 234, 0.2);
  }

  .not-found-button:active {
    transform: translateY(0);
  }

  /* Animation */
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  .not-found-illustration {
    width: 200px;
    height: 200px;
    margin-bottom: 2rem;
    animation: float 3s ease-in-out infinite;
  }

  /* Responsive adjustments */
  @media (max-width: 640px) {
    .not-found-content {
      padding: 2rem;
    }

    .not-found-title {
      font-size: 2rem;
    }

    .not-found-title span {
      font-size: 4rem;
    }

    .not-found-message {
      font-size: 1rem;
    }

    .not-found-illustration {
      width: 150px;
      height: 150px;
    }
  }
`;

export default function NotFound() {
    return (
        <>
            <style>{notFoundStyles}</style>
            <div className="not-found-container">
                <div className="not-found-content">
                    <svg className="not-found-illustration" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#93c5fd" d="M40,100c0-33.1,26.9-60,60-60s60,26.9,60,60s-26.9,60-60,60S40,133.1,40,100z M100,30c-38.7,0-70,31.3-70,70s31.3,70,70,70s70-31.3,70-70S138.7,30,100,30z" />
                        <path fill="#64748b" d="M100,50c27.6,0,50,22.4,50,50s-22.4,50-50,50S50,127.6,50,100S72.4,50,100,50z M100,40c-33.1,0-60,26.9-60,60s26.9,60,60,60s60-26.9,60-60S133.1,40,100,40z" />
                        <circle fill="#1e293b" cx="75" cy="85" r="5" />
                        <circle fill="#1e293b" cx="125" cy="85" r="5" />
                        <path fill="none" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" d="M70,120c0,0,10,15,30,15s30-15,30-15" />
                    </svg>
                    <h1 className="not-found-title">
                        <span>404</span>
                        Page Not Found
                    </h1>
                    <p className="not-found-message">
                        Oops! The page you're looking for doesn't exist or has been moved.
                    </p>
                    <Link
                        to="/dashboard"
                        className="not-found-button"
                    >
                        Return to Dashboard
                    </Link>
                </div>
            </div>
        </>
    );
}