import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Header from '../component/Header';

const LoginPage = () => {

    const navigate = useNavigate()
    useEffect(()=>{
        if(localStorage.getItem('user_data')){
             navigate('/add')
        }
    },[])

     return(
        <>
            <Header/>
            <div>
                <h1>
                    Login Page
                </h1>
            </div>
        </>
     )
}

export default LoginPage;