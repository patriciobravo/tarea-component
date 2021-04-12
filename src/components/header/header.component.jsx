import React from 'react';
import { Link} from 'react-router-dom';

import Logo from '../../assets/fortnite.png';
//import { ReactComponent as Logo } from '../../assets/crown.svg';

import 'bootstrap/dist/css/bootstrap.min.css';
import  { Navbar, Nav} from 'react-bootstrap';

const Header = () => (
    <Navbar bg="light" expand="lg">
        <Link className='logo-container' to='/'>          
            <img src={Logo} height={60} width={100} alt='Fortnite' />
        </Link>
        
       
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            
            <Link className="mt-2 ml-2" to='/'>Home</Link>
          
           
         
            </Nav>
          
        </Navbar.Collapse>
    </Navbar>


)

export default Header;
