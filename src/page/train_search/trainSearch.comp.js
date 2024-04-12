import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const TrainSearchComp = ({handleOnChange,str,handleOnChange2,str2}) => {
    const [Departure_station_id, setDeparture_station_id] = useState('');
    const [Arrival_station_id, setArrival_station_id] = useState('');
    const [Departure_day, setDeparture_day] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Handle form submission logic here
        console.log("Departure Station:", str);
        console.log("Arrival Station:", str2);
        console.log("Departure Day:", Departure_day);

    };

    return (
       

            
            <div style={{ marginTop: '100px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }} >Search Train</h2>
            
            <Form onSubmit={handleSubmit} method='post'>
            
                <Row className="form-group">
                    <Col className="col-sm-3 offset-sm-2">
                        <label htmlFor="Departure_station_id" style={{ marginBottom: '0' }}>Departure Station:</label>
                    </Col>
                    <Col sm="6">
                        {/* <input
                            type="text"
                            id="departureStation"
                            placeholder="Enter Departure Station"
                            name='Departure_station_id'
                            value={Departure_station_id}
                            onChange={(e) => setDeparture_station_id(e.target.value)}
                            required
                            style={{ marginTop: '0' }}
                        /> */}
                        <Form.Control 
                            onChange={handleOnChange} 
                            value={str}
                            type="text"
                            id="departureStation"
                            placeholder="Enter Departure Station"
                            name='Departure_station_id'
                            // value={Departure_station_id}
                            // onChange={(e) => setDeparture_station_id(e.target.value)}
                            required
                            style={{ marginTop: '0' }}
                            
                          />
                    </Col>
                </Row>
                <Row className="form-group">
                    <Col className="col-sm-3 offset-sm-2">
                        <label htmlFor="Arrival_station_id" style={{ marginBottom: '0' }}>Arrival Station:</label>
                    </Col>
                    <Col sm="6">
                        <Form.Control 
                            onChange={handleOnChange2} 
                            value={str2}
                            type="text"
                            id="arrivalStation"
                            placeholder="Arrival station id"
                            name='Arrival_station_id'
                            // value={Arrival_station_id}
                            // onChange={(e) => setArrival_station_id(e.target.value)}
                            
                            required
                            style={{ marginTop: '0' }}
                        />
                    </Col>
                </Row>
                <Row className="form-group">
                    <Col className="col-sm-3 offset-sm-2">
                        <label htmlFor="Departure_day" style={{ marginBottom: '0' }}>Departure Day:</label>
                    </Col>
                    <Col sm="6">
                        <Form.Control 
                            type="text"
                            id="departureDay"
                            placeholder="Departure day"
                            name='Departure_day'
                            value={Departure_day}
                            onChange={(e) => setDeparture_day(e.target.value)}
                            required
                            style={{ marginTop: '0' }}
                        />
                    </Col>
                </Row>
                <button type="submit" className="btn btn-primary btn-block" style={{ marginTop: '20px' }}>Search Trains</button>
            </Form>

        </div>

        
    );
};

export default TrainSearchComp;
