import React from 'react';
import {useState} from "react";

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)


    const onSubmit = (e)=>{
        e.preventDefault();
        if(!text){
            alert("Please add a Task")
            return
        }
        onAdd({text, day, reminder})
        setText('')
        setDay('')
        setReminder(false)
    }
    return (
        <form className={'add-form'} onSubmit={onSubmit}>
            <div className={'form-control'}>
                <label>Task</label>
                <input type="text" value={text} placeholder={'Add Task'} onChange={(e => {setText(e.target.value)})}/>
            </div>
            <div className={'form-control'}>
                <label>Day</label>
                <input type="text" value={day} placeholder={'Add Day'} onChange={(e => {setDay(e.target.value)})}/>
            </div>
            <div className={'form-control form-control-check'}>
                <label>Set Reminder</label>
                <input type="checkbox" checked={reminder} onChange={(e => {setReminder(e.currentTarget.checked)})}/>
            </div>
            <input type="submit" value={'Save Task'} className={'btn btn-block'}/>

        </form>
    );
};

export default AddTask;