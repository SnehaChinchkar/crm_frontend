import React, { useEffect, useState } from 'react'
import {Container,Row,Col,Button } from 'react-bootstrap';
import { PageBreadcrumb } from '../../components/pageBreadcrumb/PageBreadcrumb.comp';
import { SearchForm } from '../../components/search-form/searchForm.comp';
import { TicketTable } from '../../components/ticket-table/TicketTable.comp';
import tickets from '../../assets/data/dummy-tickets.json';
import {Link} from 'react-router-dom';
export const TicketList= () => {
    const [str,setStr]=useState('');
    const [dispTicket,setDispTicket]=useState(tickets);

    useEffect(()=>{},[str,dispTicket]);


    const handleOnChange =e=>{
        const {value}=e.target;
        // console.log(value);
        setStr(value);
        searchTicket(value);
        if(value===''){
            setDispTicket(tickets);
        }
    }

    const searchTicket= strr=>{
        if (strr.trim() === '') {
            setDispTicket(dispTicket);
            return;
        } 

        const displayTickets=tickets.filter(row=>row.Departure_date.toLowerCase().includes(strr.toLowerCase()))
        setDispTicket(displayTickets);
       
    }
  return (
    <Container>
        <Row>
            <Col>
                <PageBreadcrumb pagename={"Ticket List"}/>
            </Col>
        </Row>
        <Row className='mt-4'>
            <Col>
            <Link to='/Add-new-ticket'>
                <Button variant='info'>Add New Ticket</Button>
            </Link>
            </Col>
            <Col className='text-right'>
                <SearchForm handleOnChange={handleOnChange} str={str}/>
            </Col>
        </Row>
        <hr/>
        <Row>
            <Col>
                //table (Link to remove from ticket list)
                <TicketTable tickets={dispTicket}/>
            </Col>
        </Row>
    </Container>
  )
}
