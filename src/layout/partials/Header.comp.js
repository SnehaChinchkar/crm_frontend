import React from 'react';
import { Navbar,Nav} from 'react-bootstrap';
import logo from '../../assets/img/logo.png';
import './Header.css';
import '../../App.css';
export const Header = () => {
  return (
    <Navbar collapseOnSelect bg='info' variant='dark' expand='md'>
        <Navbar.Brand>
            <img src={logo} alt='logo' width="50px"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'/>
        <Navbar.Collapse id='basic-navbar-nav'>
            
            <Nav className='ml-auto'>
                <Nav.Link href='/dashboard'>Dashboard</Nav.Link>
                <Nav.Link href='/dashboard'>Ticket</Nav.Link>
                <Nav.Link href='/dashboard' >Logout</Nav.Link>
            </Nav>
            {/* </div> */}
        </Navbar.Collapse>
    </Navbar>
  )
}