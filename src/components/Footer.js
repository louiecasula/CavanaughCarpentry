import React, { useRef } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import './Footer.css';

function Footer() {
    const iconRef = useRef(null);

    const handleMouseEnter = () => {
    iconRef.current.style.animationName = 'spin';
    };

    const handleMouseLeave = () => {
    iconRef.current.style.animationName = 'spinBack';
    };

    return (
        <footer>
            <div>
                <a href="mailto:danc@cavanaughcarpentry.com" target="_blank">
                    <EmailIcon style={{ fontSize: '2rem' }} ref={iconRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
                </a>
            </div>
            <p>Copyright © 2024 Cavanaugh Carpentry</p>
        </footer>
    );
}
export default Footer;