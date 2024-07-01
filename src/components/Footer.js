import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import './Footer.css';

function Footer() {

    return (
        <footer>
            <div>
                <a href="mailto:danc@cavanaughcarpentry.com" target="_blank">
                    <EmailIcon style={{ fontSize: '2rem' }}/>
                </a>
            </div>
            <p>© 2024 Cavanaugh Carpentry</p>
        </footer>
    );
}
export default Footer;