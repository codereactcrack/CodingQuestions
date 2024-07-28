import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Question1.css'

const Question1 = () => {
    const navigate = useNavigate();
    return (
        <div className="question-container">
            <div className="question">
                <div className="question-title">Implement a Todo List</div>
                <div className="question-desc">Create a simple to-do list application where users can add, edit, and delete tasks.</div>
            </div>
            <div className="solution">
                <button className="solution-button" onClick={() => navigate('/Solution:-1')}>Solution</button>
            </div>
        </div>
    )
}

export default Question1
