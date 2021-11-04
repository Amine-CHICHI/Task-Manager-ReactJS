import React from 'react';
import Button from "./Button";
import PropTypes from "prop-types";

function Header({title, onAdd, addTaskState}) {

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={addTaskState ? '#ff0038' : '#1fb859'} text={addTaskState ? 'Close' : 'Add'}
                    onClick={onAdd}></Button>
        </header>

    );
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header;