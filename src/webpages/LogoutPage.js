import React from 'react';
import Header from '../component/Header';
import {useNavigate} from 'react-router-dom'

const UpdateProductPage = () => {

    let navigate = useNavigate()
    const onLogoutClick = () => {
         localStorage.clear()
         navigate('/register')
         
    }

    return (
        <>
           <Header/>
            <div>
               <button 
                    onClick={onLogoutClick}
                    className="btn btn-primary"
                >
                    Logout
               </button>
            </div>
        </>
    )
}

export default UpdateProductPage;