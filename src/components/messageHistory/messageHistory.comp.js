import React from 'react';
import PropTypes from 'prop-types';
import {Container,Row,Col,Button} from 'react-bootstrap';
import './messageHistory.comp.css'
export const MessageHistory = ({ msg }) => {
  return (
    <div className='message-history mt-3' >
      {msg.map((row, index) => (
        <div className='send font-weight-bold text-secondary' key={index}>
          <Row className='row-border'>
          <Col className='col-border'>
          <div className='sender'>{row.messageby}</div>
          <div className='date'>{row.date}</div>
          </Col>
          <Col className='col-border'><div className='message' syle={{'text-align':'right'}}>{row.message}</div></Col>
          </Row>
          
        </div>
      ))}
    </div>
  );
};

MessageHistory.propTypes={
  msg:PropTypes.array.isRequired
}
