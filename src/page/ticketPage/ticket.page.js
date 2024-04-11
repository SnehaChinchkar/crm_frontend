import React, { useEffect, useState } from 'react';
import {Container,Row,Col,Button} from 'react-bootstrap';
import { PageBreadcrumb } from '../../components/pageBreadcrumb/PageBreadcrumb.comp';
import tickets from '../../assets/data/dummy-tickets.json';
import { MessageHistory } from '../../components/messageHistory/messageHistory.comp';
import { UpdateTicket } from '../../components/updateTicket/updateTicket.comp';
import {useParams} from 'react-router-dom';
// const oneTicket=tickets[0];
export const Ticket= () => {
  const tId=1;
  const [messageDetail,SetMessageDetail]=useState('');
  const [oneTicket,setOneTicket]=useState('');

  useEffect(()=>{
for(let i = 0;i<tickets.length;i++){
  if(tickets[i].id==tId){
    setOneTicket(tickets[i]);
    continue;
  }
}

  },[messageDetail],tId)
  const handleOnChange =e=>{
    SetMessageDetail(e.target.value);
  }
  const handleOnSubmit=e =>{
    alert('Form Submitted');
  }
  return (
    <Container>
        <Row>
            <Col>
                <PageBreadcrumb pagename={'Individual Ticket'}/>
            </Col>
        </Row>
        <Row>
            <Col className='font-weight-bold text-secondary'>
            
            <div className='Subject'>Subject:{oneTicket.Subject}</div>
            <div className='Date'>Date:{oneTicket.OpenedDate}</div>
            <div className='Status'>Status:{oneTicket.Status}</div>
            </Col>
            <Col>
            <Button variant='outline-info'>Close Ticket</Button>
            </Col>
        </Row>
        <Row className='mt-4'>
          <Col>
            {oneTicket.history ? <MessageHistory msg={oneTicket.history}  /> : <div>No message history available</div>}
          </Col>
      </Row>
      <Row >
          <Col>
            <UpdateTicket msg={messageDetail} handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit}/>
          </Col>
      </Row>

    </Container>
  )
}
