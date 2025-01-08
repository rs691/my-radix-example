


import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from '../css/./Other.module.css';



const BackButton = () => {
    const location = useLocation();
    const navigate = useNavigate();


    // Initialize isHomePage
    const isHomePage = location.pathname === '/';

    const [isHovered, setIsHovered] = useState(false);



    const handleBack = () => {
        if (isHomePage) {
            navigate('/');
        } else {
            navigate(-1);

        }
    }

    return (




           
<div className='{styles.backButton}'>
<button 
              onClick={handleBack}
              className={styles.backButton}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                position: 'fixed',
                top: '30px',
                left: '30px',
                background: 'green',
                border: 'none',
                borderRadius: '50%',
                padding: '10px',
                cursor: 'pointer',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                transform: isHovered ? 'scale(1.1)' : 'scale(1)'
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={isHovered ? "3" : "2"}
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  transition: 'all 0.3s ease'
                }}
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </button>
            </div>

        );
}

export default BackButton;