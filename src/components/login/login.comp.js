import React from 'react'
import {Container,Row, Col, Form, Button} from 'react-bootstrap'
import "./login.comp.css";
import PropTypes from 'prop-types';
import { propTypes } from 'react-bootstrap/esm/Image';
export const LoginForm = ({handleChange,mail,pass,handleOnSubmit,formSwitcher}) => {

  return (
    <Container className='logform' style={{color:'black'}}>
        <Row>
            <Col>
                <h1 className=' text-center' >User Login</h1>
                <hr/>
                <Form  onSubmit={handleOnSubmit}>
                    <Form.Group>
                        <Form.Label className='label'>Enter your credentials</Form.Label>
                        <Form.Control type="email" name="email" value={mail} onChange={handleChange} placeholder="Enter Email Address" required />
                    </Form.Group>

                    <Form.Group>
                        {/* <Form.Label className='label'>Password</Form.Label> */}
                        <Form.Control className='password' type="password" name="password" value={pass} onChange={handleChange} placeholder="Enter Password" required/>
                    </Form.Group>
                    <Button type="submit" className='login-button'>Login</Button>
                </Form>
                <hr/>
            </Col>
        </Row>
        <Row>
            <Col>
                <a href='#' onClick={()=>formSwitcher('reset')}>Forgot Password</a>
            </Col>
        </Row>
    </Container>
  );
}
LoginForm.propTypes={
    handleChange:PropTypes.func.isRequired,
    handleOnSubmit:PropTypes.func.isRequired,
    formSwitcher:propTypes.func,
    mail:PropTypes.string.isRequired,
    pass:PropTypes.string.isRequired
}