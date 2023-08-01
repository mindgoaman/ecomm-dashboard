import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import HeaderComponent from '../component/HeaderComponent';

const LoginPage = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    useEffect(()=>{
        if(localStorage.getItem('user_data')){
             navigate('/add')
        }
    },[])

    const onPressLogin = () =>{
        const userData = {
             email: email,
             password: password
        }
        localStorage.setItem('user_data',JSON.stringify(userData))
        navigate('/add')
        console.log("login6655",email, password)
    }

     return(
        <>
            <HeaderComponent/>
            <div className="col-sm-6 offset-sm-3">
            <h1>Login User</h1>
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
                 onClick={onPressLogin} 
                 className="btn btn-primary"
            >
                 Login
            </button>
            </div>
        </>
     )
}

export default LoginPage;