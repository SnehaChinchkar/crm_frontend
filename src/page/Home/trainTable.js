import React from 'react'
import Table from 'react-bootstrap/Table';

export const TrainTable = ({trains}) => {
  return (
    <div>

{
  trains?(<Table bordered hover variant="light">
      <thead>
        <tr>
          <th>Train ID</th>
          <th>Train name</th>
          <th>Departure Station ID</th>
          <th>Arrival Station ID</th>
          <th>Departure time</th>
          <th>Arrival time</th>
          <th>Total seats</th>
          <th>Available seats</th>
          <th>Departure day</th>
          <th>Fair</th>
        </tr>
      </thead>
      <tbody>
        {trains.length ? trains.map((row) =>
            (

                <tr key={row.Train_id}>
                    <td>{row.Train_id}</td>
                    <td>{row.Train_name}</td>
                    <td>{row.Departure_station_id} </td>
                    <td>{row.Arrival_station_id}</td>
                    <td>{row.Departure_time}</td>
                    <td>{row.Arrival_time}</td>
                    <td>{row.Total_seats}</td>
                    <td>{row.Available_seats}</td>
                    <td>{row.Departure_day}</td>
                    <td>{row.Fare}</td>
                </tr> 

            )):(<tr><td colSpan={4} className='text-center'>No trains to show</td></tr>)}
        
       
        {/* <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr> */}
      </tbody>
    </Table>
  
):(<Table bordered hover variant="light"><thead>
        <tr>
          
        <th>Train ID</th>
          <th>Train name</th>
          <th>Departure Station ID</th>
          <th>Arrival Station ID</th>
          <th>Departure time</th>
          <th>Arrival time</th>
          <th>Total seats</th>
          <th>Available seats</th>
          <th>Departure day</th>
          <th>Fair</th>
          
          </tr></thead><tbody>
          <tr><td colSpan={4} className='text-center'>No trains to show</td></tr>
          </tbody></Table>)}

    </div>
  );
};
