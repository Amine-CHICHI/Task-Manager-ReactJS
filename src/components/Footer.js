import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <h3>Copyright &copy; 2021</h3>
            <Link to={'/about'}>About</Link>
        </footer>
    );
};

export default Footer;