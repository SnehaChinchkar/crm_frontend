import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

export const SearchForm = ({handleOnChange,str}) => {
  return (
    <div>
      <Form>
        <Form.Group as={Row} className="align-items-center">
          <Col sm="2">
            <Form.Label className="mb-0">Search: </Form.Label>
          </Col>
          <Col sm='10'>
            <Form.Control name="searchStr" onChange={handleOnChange} value={str} placeholder='Search...' />
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};
