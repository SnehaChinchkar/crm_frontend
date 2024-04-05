import React, { useState } from 'react'
import TicketForm from './ticketform.comp';
export const AddTicketForm = () => {
    const [tickets, setTickets] = useState([]);

  const handleAddTicket = (newTicket) => {
    setTickets([...tickets, newTicket]);
  };
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-header bg-primary text-white">
              <h2 className="text-center">Add New Ticket</h2>
            </div>
            <div className="card-body">
              <TicketForm handleAddTicket={handleAddTicket} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
