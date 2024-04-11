import React, { useState } from 'react';
import './ticketform.comp.css';
import { propTypes } from 'react-bootstrap/esm/Image';

const TicketForm = ({ handleAddTicket }) => {
  const [Ticket_id, setTicket_id] = useState('');
  const [Train_id, setTrain_id] = useState('');
  const [User_id, setUser_id] = useState('');

  const [Departure_station_id, setDeparture_station_id] = useState('');
  const [Arrival_station_id, setArrival_station_id] = useState('');
  const [Departure_date, setDeparture_date] = useState('');
  const [Num_tickets, setNum_tickets] = useState('');
  const [Total_fare, setTotal_fare] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if Ticket_id, Train_id, and User_id are not empty
     if (Ticket_id.trim() !== '' && Train_id.trim() !== '' && User_id.trim() !== '') {
      const newTicket = {
        Ticket_id,
        Train_id,
        User_id,
        Departure_station_id ,
        Arrival_station_id ,
        Departure_date ,
        Num_tickets ,
        Total_fare
      };
      handleAddTicket(newTicket);
      console.log(newTicket);
      // Reset form fields
      setTicket_id('');
      setTrain_id('');
      setUser_id('');
      
      setDeparture_station_id('');
      setArrival_station_id('');
      setDeparture_date('');
      setNum_tickets('');
      setTotal_fare('');

    } else {
      alert('Please fill out all fields.');
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="Ticket_id">Ticket_id/Train ID:</label>
        <input
          type="text"
          className="form-control"
          id="Ticket_id"
          value={Ticket_id}
          onChange={(e) => setTicket_id(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="Train_id">Train_id Found At:(Replace data type by departure date)</label>
        <input
          type="text"
          className="form-control"
          id="Train_id"
          value={Train_id}
          onChange={(e) => setTrain_id(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="User_id" >User_id:</label>
        <textarea
          className="form-control"
          id="User_id"
          value={User_id}
          onChange={(e) => setUser_id(e.target.value)}
          required
        ></textarea>
      </div>
      
      <div className="form-group">
        <label htmlFor="Departure_station_id">Departure station id:</label>
        <input
          type="text"
          className="form-control"
          id="Departure_station_id"
          value={Departure_station_id}
          onChange={(e) => setDeparture_station_id(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="Arrival_station_id">Arrival station id:</label>
        <input
          type="text"
          className="form-control"
          id="Arrival_station_id"
          value={Arrival_station_id}
          onChange={(e) => setArrival_station_id(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="Departure_date">Departure date:</label>
        <input
          type="text"
          className="form-control"
          id="Departure_date"
          value={Departure_date}
          onChange={(e) => setDeparture_date(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="Num_tickets">Num tickets:</label>
        <input
          type="text"
          className="form-control"
          id="Num_tickets"
          value={Num_tickets}
          onChange={(e) => setNum_tickets(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="Total_fare">Total fare:</label>
        <input
          type="text"
          className="form-control"
          id="Total_fare"
          value={Total_fare}
          onChange={(e) => setTotal_fare(e.target.value)}
          required
        />
      </div>

      <button type="submit"  className="btn btn-primary"style={{ marginTop: '20px' }}> Add New Ticket</button>
      
    </form>
  );
};

export default TicketForm;