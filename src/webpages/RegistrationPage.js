import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from '../component/Header';

const RegistrationPage = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const onSignUpClick = () => {
         let userData = {name, email, password}
         localStorage.setItem('user_data', JSON.stringify(userData))
         navigate('/add')
         console.log(name, email, password, userData)
    }

    useEffect(()=>{
        if(localStorage.getItem('user_data')){
             navigate('/add')
        }
    },[])

    return (
        <>
            <Header/>
            <div className="col-sm-6 offset-sm-3">
            <h1>User Sign Up</h1>
            <input 
                 onChange={(name) => setName(name.target.value)} 
                 placeholder="name"
                 type="text" 
                 value={name} 
                 className="form-control"
            >
            </input>
            <br />

            <input 
                 onChange={(email) => setEmail(email.target.value)}
                 placeholder="email"
                 type="text" 
                 value={email} 
                 className="form-control"
            >
            </input>
            <br />

            <input 
                 onChange={(password) => setPassword(password.target.value)} 
                 placeholder="password"
                 type="password" 
                 value={password} 
                 className="form-control"
            >
            </input>
            <br />

            <button 
                 onClick={onSignUpClick} 
                 className="btn btn-primary"
            >
                 Sign Up
            </button>
            </div>
        </>
    )
}

export default RegistrationPage;