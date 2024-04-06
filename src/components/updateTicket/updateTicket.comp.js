import React from 'react'
import {Form,Button} from 'react-bootstrap';
export const UpdateTicket = ({msg,handleOnChange,handleOnSubmit}) => {
    console.log(msg);
  return (
    <Form onSubmit={handleOnSubmit} >
        <Form.Label style={{'float':'left'}} >Reply</Form.Label>
        {/* <Form.Text>Reply here</Form.Text> */}
        <Form.Control as="textarea" value={msg} onChange={handleOnChange} row='5' name="detail"/>
        <Button variant='info' type='submit' className=' mt-2 ' style={{'float':'right'}} >Reply</Button>
    </Form> 
  )
}
/*<Button variant='info' type='submit' className='float-right mt-4'>Reply</Button> */