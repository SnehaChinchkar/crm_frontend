import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import { AddTicketForm } from '../../components/addTicketForm/AddTicketForm.comp'
import { PageBreadcrumb } from '../../components/pageBreadcrumb/PageBreadcrumb.comp';
export const AddnewTicket = () => {
  return (
    <Container>
        <Row>
            <Col>
            <PageBreadcrumb pagename="New Ticket"/>
            </Col>
        </Row>
        <Row>
            <Col>
                <AddTicketForm />
            </Col>
        </Row>
    </Container>
  )
}
