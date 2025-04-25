import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="text-center my-4">
            <small>&copy; <span>{currentYear}</span> SubSmart</small>
        </footer>
    )
};

export default Footer;