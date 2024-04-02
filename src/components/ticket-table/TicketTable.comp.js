import React from 'react'
import Table from 'react-bootstrap/Table';

export const TicketTable = ({tickets}) => {
  return (
    <div>

<Table bordered hover variant="light">
      <thead>
        <tr>
          <th>#</th>
          <th>Subject</th>
          <th>Status</th>
          <th>Opened date</th>
        </tr>
      </thead>
      <tbody>
        {tickets.length ? tickets.map((row) =>
            (

                <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>{row.Subject}</td>
                    <td>{row.Status} </td>
                    <td>{row.OpenedDate}</td>
                </tr> 

            )):(<tr><td colSpan={4} className='text-center'>No Tickets to show</td></tr>)}
        
       
        {/* <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr> */}
      </tbody>
    </Table>
  

    </div>
  )
}
