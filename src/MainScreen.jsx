import React from 'react'
import './MainScreen.css'
import { useNavigate } from 'react-router-dom'

const MainScreen = () => {

    const navigate = useNavigate();

    const questions = [
        {
            id: 1,
            ques: 'Todo List',
            desc: 'Create a simple to-do list application where users can add, edit, and delete tasks.'
        },
        {
            id: 2,
            ques: 'Build a Weather App',
            desc: 'Develop a weather application that fetches weather data from an API and displays it to the user.'
        },
        {
            id: 3,
            ques: 'Create a Pagination Component',
            desc: 'Design a pagination component that handles navigation between pages of data.'
        },
        {
            id: 4,
            ques: 'Implement a Login Form',
            desc: 'Build a login form with validation for email and password fields.'
        },
        {
            id: 5,
            ques: 'Build a Countdown Timer',
            desc: 'Develop a countdown timer component that starts from a specified time and decrements until it reaches zero.'
        },
        {
            id: 6,
            ques: 'Create a Modal Component',
            desc: 'Design a modal component that can be toggled open and closed.'
        },
        {
            id: 7,
            ques: 'Implement Drag and Drop',
            desc: 'Develop a feature that allows users to drag and drop items within a list.'
        },
        {
            id: 8,
            ques: 'Build a Chat Application',
            desc: 'Develop a real-time chat application using WebSockets or a library like Socket.io.'
        },
        {
            id: 9,
            ques: 'Create a Dropdown Component',
            desc: 'Design a dropdown component with options that can be selected by the user.'
        },
        {
            id: 10,
            ques: 'Implement Form Validation',
            desc: 'Develop a form with validation for various fields such as email, password, and phone number.'
        }
    ]
    return (
        <div className="main-container">
            {questions.map((item) => {
                return (
                    <div key={item.id} className="question-card" onClick={()=>navigate(`Question:-${item.id}`)}>
                        <div className="question-id">Question: {item.id}</div>
                        <div className="question-title">{item.ques}</div>
                        <div className="question-desc">{item.desc}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default MainScreen
