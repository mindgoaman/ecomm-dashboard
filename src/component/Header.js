import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg='dark' variant='dark'>
                <Navbar bg='dark' variant='dark'>
                    <Nav className='mr-auto nav_bar_wrapar'>
                        <Link to='/add'>Add Product</Link>
                        <Link to='/update'>Update Product</Link>
                        <Link to='/login'>Login</Link>
                        <Link to='/register'>Register</Link>
                    </Nav>
                </Navbar>
            </Navbar>
        </div>
    )
}

export default Header;


