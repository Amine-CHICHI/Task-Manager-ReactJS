import React from 'react';
import {FaTimes} from "react-icons/fa";

const Task = ({task, onDelete, onToggle}) => {
    return (
        <div className={`task ${task.reminder?'reminder':''}`} onDoubleClick={() => {
            onToggle(task.id);
        }}>
            <h3>{task.text} <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => {
                onDelete(task.id)
            }}/></h3>
            <p>{task.day}</p>
            <span style={{backgroundColor: 'blue', color:'white' ,padding:5}}>{task.id}</span>
        </div>
    );
};

export default Task;