import React from 'react';
import { Navbar,Nav} from 'react-bootstrap';
import logo from '../../assets/img/logo.png';
import './Header.css';
import '../../App.css';
// import {Link} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap'; 
export const Header = () => {
  return (
    <Navbar collapseOnSelect bg='info' variant='dark' expand='md'>
        <Navbar.Brand>
            <img src={logo} alt='logo' width="50px"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'/>
        <Navbar.Collapse id='basic-navbar-nav'>
            
            <Nav className='ml-auto'>

            {/* <Link to href='/dashboard'>Dashboard</Link>
                <Link to href='/Tickets'>Ticket List</Link>
                <Link to href='' >Logout</Link> */}
                <LinkContainer to='/dashboard'><Nav.Link >Dashboard</Nav.Link></LinkContainer>
                <LinkContainer to='/Tickets'><Nav.Link >Ticket List</Nav.Link></LinkContainer>
                <LinkContainer to='/Entry'><Nav.Link  >Logout</Nav.Link></LinkContainer>
                
                
                
            </Nav>
            {/* </div> */}
        </Navbar.Collapse>
    </Navbar>
  )
}
