import React from 'react'
import Table from 'react-bootstrap/Table';
import {Link} from 'react-router-dom';
export const TicketTable = ({tickets}) => {
  return (
    <div>

{
  tickets?(<Table bordered hover variant="light">
      <thead>
        <tr>
          <th>#</th>
          <th>Ticket_id</th>
          <th>Train_id</th>
          <th>User_id</th>
          <th>Departure_station_id</th>
          <th>Arrival_station_id</th>
          <th>Departure_date</th>
          <th>Num_tickets</th>
          <th>Total_fare</th>

        </tr>
      </thead>
      <tbody>
        {tickets.length ? tickets.map((row) =>
            (

                <tr key={row.id}>
                    <td>{row.id}</td>
                    <Link to={'/Ticket/${row.id}'}>
                    <td>{row.Ticket_id}</td>
                    </Link>
                    <td>{row.Train_id} </td>
                    <td>{row.User_id}</td>

                    <td>{row.Departure_station_id}</td>
                    <td>{row.Arrival_station_id}</td>
                    <td>{row.Departure_date}</td>
                    <td>{row.Num_tickets}</td>
                    <td>{row.Total_fare}</td>
                </tr> 

            )):(<tr><td colSpan={4} className='text-center'>No Tickets to show</td></tr>)}
        
       
        {/* <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr> */}
      </tbody>
    </Table>
  
):(<Table bordered hover variant="light"><thead>
        <tr>
          <th>#</th>
          <th>Ticket_id</th>
          <th>Train_id</th>
          <th>User_id</th>
          <th>Departure_station_id</th>
          <th>Arrival_station_id</th>
          <th>Departure_date</th>
          <th>Num_tickets</th>
          <th>Total_fare</th> </tr></thead><tbody>
          <tr><td colSpan={4} className='text-center'>No Tickets to show</td></tr>
          </tbody></Table>)}

    </div>
  );
};
