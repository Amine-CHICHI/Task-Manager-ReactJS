import React from 'react';
import {Link} from "react-router-dom";

const About = () => {
    return (
        <div>

            <h3>Version 1.0.0</h3>
            <p>Author : Amine CHICHI</p>
            <Link to={'/'}>Go back</Link>
        </div>
    );
};

export default About;