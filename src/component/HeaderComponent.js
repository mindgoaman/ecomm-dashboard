import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Dropdown, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const HeaderComponent = () => {
    const [userData, setUserData] = useState()
    const navigate = useNavigate();
    useEffect(()=>{
        let userData = localStorage.getItem('user_data')
        setUserData(JSON.parse(userData))
    },[])

    const onPressLogout = () =>{
         localStorage.clear()
         navigate('/register')
    }

    return (
        <div>
            <Navbar bg='dark' variant='dark'>
                <Nav className='mr-auto nav_bar_wrapar'>
                    {
                        localStorage.getItem('user_data')
                            ?
                            <>
                                <Link to='/add'>Add Product</Link>
                                <Link to='/update'>Update Product</Link>
                            </>
                            :
                            <>
                                <Link to='/login'>Login</Link>
                                <Link to='/register'>Register</Link>
                            </>
                    }
                </Nav>
                {userData&&<Nav>
                     <NavDropdown title={userData&&userData.name ||userData.email}>
                        <NavDropdown.Item>Profile</NavDropdown.Item>
                        <NavDropdown.Item onClick={onPressLogout}>Log Out</NavDropdown.Item>
                     </NavDropdown>
                </Nav>}
            </Navbar>
        </div>
    )
}

export default HeaderComponent;


