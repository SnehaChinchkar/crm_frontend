import React from 'react'
import {Container,Row, Col, Form, Button} from 'react-bootstrap'
import "../login/login.comp.css";
import PropTypes from 'prop-types';
import { propTypes } from 'react-bootstrap/esm/Image';
export const ResetPassword = ({handleChange,mail,pass,handleOnResetSubmit,formSwitcher}) => {

  return (
    <Container className='logform'>
        <Row>
            <Col>
                <h1 className='ttext-center' style={{color:'black'}}>Reset Password</h1>
                <hr/>
                <Form  onSubmit={handleOnResetSubmit}>
                    <Form.Group>
                        <Form.Label className='label'>Enter Email Address</Form.Label>
                        <Form.Control type="email" name="email" value={mail} onChange={handleChange} placeholder="Enter Email Address" required />
                    </Form.Group>

                    
                    <Button type="submit" className='login-button'>Reset Password</Button>
                </Form>
                <hr/>
            </Col>
        </Row>
        <Row>
            <Col>
                <a href='#' onClick={()=>formSwitcher('login')}>Login Now</a>
            </Col>
        </Row>
    </Container>
  );
}
ResetPassword.propTypes={
    handleChange:PropTypes.func.isRequired,
    handleOnResetSubmit:PropTypes.func.isRequired,
    formSwitcher:propTypes.func,
    mail:PropTypes.string.isRequired
    // pass:PropTypes.string.isRequired
}