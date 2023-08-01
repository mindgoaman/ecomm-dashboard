import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

const ProtectedComponent = (props) => {
    const RecievedComponent = props?.PassedComponent
    const navigate = useNavigate();

    useEffect(()=>{
        if(!localStorage.getItem('user_data')){
            navigate('/register')
        }
    },[])

    return (
        <div>
            <RecievedComponent />
        </div>
    )
}

export default ProtectedComponent;