import React, { useState } from 'react';
import './trainform.comp.css';


const TrainForm = ({ handleAddTrain }) => {
  const [Train_id, setTrain_id] = useState('');
  const [Train_name, setTrain_name] = useState('');
  const [Departure_station_id, setDeparture_station_id] = useState('');

  const [Arrival_station_id, setArrival_station_id] = useState('');
  const [Departure_time, setDeparture_time] = useState('');
  const [Arrival_time, setArrival_time] = useState('');
  const [Total_seats, setTotal_seats] = useState('');
  const [Available_seats, setAvailable_seats] = useState('');
  const [Departure_day, setDeparture_day] = useState('');
  const [Fare, setFare] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if Train_id, Train_name, and Departure_station_id are not empty
     if (Train_id.trim() !== '' && Train_name.trim() !== '' && Departure_station_id.trim() !== '') {
      const newTrain = {
        Train_id,
        Train_name,
        Departure_station_id,

        Arrival_station_id,
        Departure_time,
        Arrival_time,
        Total_seats,
        Available_seats ,
        Departure_day ,
        Fare,
      };
      handleAddTrain(newTrain);
      console.log(newTrain);
      // Reset form fields
      setTrain_id('');
      setTrain_name('');
      setDeparture_station_id('');

      setArrival_station_id;
      setDeparture_time;
      setArrival_time;
      setTotal_seats;
      setAvailable_seats;
      setDeparture_day;
      setFare;
    } else {
      alert('Please fill out all fields.');
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="Train_id">Train_id/Train ID:</label>
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
        <label htmlFor="Train_name">Train_name Found At:(Replace data type by departure date)</label>
        <input
          type="text"
          className="form-control"
          id="Train_name"
          value={Train_name}
          onChange={(e) => setTrain_name(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="Departure_station_id" >Departure_station_id:</label>
        <textarea
          className="form-control"
          id="Departure_station_id"
          // rows="3"
          value={Departure_station_id}
          onChange={(e) => setDeparture_station_id(e.target.value)}
          required
        ></textarea>
      </div>
      
      <div className="form-group">
        <label htmlFor="Arrival_station_id" >:</label>
        <textarea
          className="form-control"
          id="Arrival_station_id"
          // rows="3"
          value={Arrival_station_id}
          onChange={(e) => setArrival_station_id(e.target.value)}
          required
        ></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="Departure_time" >:</label>
        <textarea
          className="form-control"
          id="Departure_time"
          // rows="3"
          value={Departure_time}
          onChange={(e) => setDeparture_time(e.target.value)}
          required
        ></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="Arrival_time" >:</label>
        <textarea
          className="form-control"
          id="Arrival_time"
          // rows="3"
          value={Arrival_time}
          onChange={(e) => setArrival_time(e.target.value)}
          required
        ></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="Total_seats" >:</label>
        <textarea
          className="form-control"
          id="Total_seats"
          // rows="3"
          value={Total_seats}
          onChange={(e) => setTotal_seats(e.target.value)}
          required
        ></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="Available_seats" >:</label>
        <textarea
          className="form-control"
          id="Available_seats"
          // rows="3"
          value={Available_seats}
          onChange={(e) => setAvailable_seats(e.target.value)}
          required
        ></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="Departure_day" >:</label>
        <textarea
          className="form-control"
          id="Departure_day"
          // rows="3"
          value={Departure_day}
          onChange={(e) => setDeparture_day(e.target.value)}
          required
        ></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="Fare" >:</label>
        <textarea
          className="form-control"
          id="Fare"
          // rows="3"
          value={Fare}
          onChange={(e) => setFare(e.target.value)}
          required
        ></textarea>
      </div>

      <button type="submit"  className="btn btn-primary"style={{ marginTop: '20px' }}> Add New Train</button>
      
    </form>
  );
};



export default TrainForm;

