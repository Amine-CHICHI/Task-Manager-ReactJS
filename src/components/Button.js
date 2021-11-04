import React from 'react';
import PropTypes from "prop-types";

function Button({color, text, onClick}) {
    const btnStyle = {
        backgroundColor: color
    }

    return (
        <button onClick={onClick} className='btn' style={btnStyle}>{text}</button>
    );
}

Button.defaultProps = {
    color: 'green',
    text: 'Add'
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func.isRequired,
}

export default Button;