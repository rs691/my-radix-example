import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from '../css/Other.module.css';

const BackButton = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const isHomePage = location.pathname === '/';
    const [isHovered, setIsHovered] = useState(false);

    const handleBack = () => {
        if (isHomePage) {
            navigate('/');
        } else {
            navigate(-1);
        }
    };

    return (
        <div className={styles.backButton}>

<button 
    onClick={handleBack}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    className={`${styles.backButton} ${isHovered ? styles.hovered : ''}`}
>
<svg 
                    width="30" 
                    height="30" 
                    viewBox="0 0 64 64" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path 
                        d="M56.81,53.25H18.3a2,2,0,0,1-1.73-1L5.46,33a2,2,0,0,1,0-2L16.57,11.75a2,2,0,0,1,1.73-1H37.71a2,2,0,0,1,0,4H19.46L9.5,32l10,17.25H54.81V14.75H51.5a2,2,0,0,1,0-4h5.31a2,2,0,0,1,2,2v38.5A2,2,0,0,1,56.81,53.25Z"
                        fill="#0074ff"
                    />
                    <path 
                        d="M46,40.79a2,2,0,0,1-1.41-.59L31,26.63a2,2,0,0,1,2.83-2.83L47.41,37.38A2,2,0,0,1,46,40.79Z"
                        fill="#ffb300"
                    />
                    <path 
                        d="M32.42,40.79A2,2,0,0,1,31,37.38L44.59,23.8a2,2,0,0,1,2.82,2.83L33.84,40.2A2,2,0,0,1,32.42,40.79Z"
                        fill="#ffb300"
                    />
                </svg>
      </button>


          


        </div>
    );
};

export default BackButton;