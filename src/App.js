import React from 'react';
import './App.css';
import Entry from './page/entry/Entry.page';
import { DefaultLayout } from './layout/DefaultLayout';
import { Dashboard } from './page/dashboard/Dashboard.page';
import { AddnewTicket } from './page/newTicket/AddnewTicket.page';
import { TicketList } from './page/tikcetList/ticketList.page';
import { Ticket } from './page/ticketPage/ticket.page';
import { BrowserRouter ,Routes, Route} from 'react-router-dom';
// import {Button} from 'react-bootstrap'
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
      <Route index element ={<Entry/>}/>
      <Route path="/Entry"  element={<Entry/>}/>
      
      </Routes>
      
      <Routes>
      <Route path="/Dashboard" element={<DefaultLayout><Dashboard/></DefaultLayout>}/>
      <Route path='/Add-ticket' element={<DefaultLayout><AddnewTicket/></DefaultLayout>}/>
      <Route path='/Tickets' element={<DefaultLayout><TicketList/></DefaultLayout>}/>
      <Route path='Ticket/:tid' element={<DefaultLayout><Ticket/></DefaultLayout>}/>
     
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
