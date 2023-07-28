import React, {useEffect} from 'react';
import Header from '../component/Header';

const AddProductPage = () => {

    useEffect(()=>{
         let getUserData = localStorage.getItem('user_data')
         console.log("user data", JSON.parse(getUserData))
    },[])

    return (
        <>  
            <Header/>
            <div>
                <h1>
                    AddProduct Page
                </h1>
            </div>
        </>
    )
}

export default AddProductPage;