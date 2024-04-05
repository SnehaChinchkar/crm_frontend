import React, { createFactory } from 'react';
import {  Button, Col, Container, Row } from 'react-bootstrap';
import { TicketTable } from '../../components/ticket-table/TicketTable.comp';
import tickets from '../../assets/data/dummy-tickets.json';
import { PageBreadcrumb } from '../../components/pageBreadcrumb/PageBreadcrumb.comp';

export const Dashboard = () => {
  return (
    <div>
        <Container>
            <Row>
                <Col>
                    <PageBreadcrumb pagename="Dashboard"/>
                </Col>
            </Row>
            <Row>
                <Col className='text-center mt-5 mb-2'>
                    <Button variant='info' style={{fontSize:'2rem',padding:"10px 30px"}}>Add New Ticket</Button>
                </Col>
            </Row>
            <Row>
                <Col className='text-center  mb-2'>
                    <div>Total Ticket:5</div>
                    <div>Pending Ticket:5</div>
                </Col>
            </Row>
            <Row>
                <Col className='mb-2'>
                    Recently added tickets
                </Col>
            </Row>
            <hr/>
            <Row>
                <Col className='recent-ticket'>
                    <TicketTable tickets={tickets}/>
                </Col>
            </Row>
        </Container>
    </div>

  )
}
