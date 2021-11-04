import Header from "./components/Header";
import Tasks from "./components/Tasks";
import React, {useState, useEffect} from "react";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import About from "./components/About";


function App() {
    const [tasks, setTasks] = useState(
        []
    )
    const [showAddTask, setShowAddTask] = useState(false)

    // Delete Task
    const deleteTask = async (id) => {
        await fetch(`http://localhost:5000/tasks/${id}`,
            {
                method: 'DELETE'
            }
        )
        setTasks(tasks.filter(
            (task) => (
                task.id !== id
            )
        ))
    }

    // Toggle Reminder
    const toggleReminder = async (id) => {

        const taskToToggle = await fetchTask(id)
        const updatedTask = {...taskToToggle, reminder: !taskToToggle.reminder}

        const res = await fetch(`http://localhost:5000/tasks/${id}`,
            {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updatedTask)
            }
        )

        const data = await res.json()

        setTasks(tasks.map(task =>
            task.id === id ? {...task, reminder: data.reminder} : task
        ))
    }

    // Add Tasks
    const addTask = async (task) => {
        const res = await fetch('http://localhost:5000/tasks',
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(task)
            })
        const newTask = await res.json()

        setTasks([...tasks, newTask])
    }

    // Toggle AddTask Form
    const toggleShowAdd = () => {
        setShowAddTask(!showAddTask)
    }

    // Fetch Tasks from Server
    const fetchTasks = async () => {
        const res = await fetch('http://localhost:5000/tasks')
        const data = await res.json()
        return data
    }

    // Fetch Task from Server
    const fetchTask = async (id) => {
        const res = await fetch(`http://localhost:5000/tasks/${id}`)
        const data = await res.json()
        return data
    }


    useEffect(() => {
        const getTasks = async () => {
            const tasksFromServer = await fetchTasks()
            setTasks(tasksFromServer)
        }
        getTasks()
    }, [])


    return (
        <Router>
            <div className={'container'}>
                <Header onAdd={toggleShowAdd} addTaskState={showAddTask}></Header>
                <Route path='/' exact render={props => (
                    <>
                        {showAddTask && <AddTask onAdd={addTask}></AddTask>}
                        {
                            tasks.length > 0 ?
                                <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}></Tasks> :
                                <p>No tasks to show</p>
                        }
                    </>
                )}/>
                <Route path='/about' exact component={About}/>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
