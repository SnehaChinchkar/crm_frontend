import React from 'react';
import './App.css';
import Entry from './page/entry/Entry.page';
import { DefaultLayout } from './layout/DefaultLayout';
import { Dashboard } from './page/dashboard/Dashboard.page';
import { AddnewTicket } from './page/newTicket/AddnewTicket.page';
import { TicketList } from './page/tikcetList/ticketList.page';
import { Ticket } from './page/ticketPage/ticket.page';
import { BrowserRouter ,Routes, Route} from 'react-router-dom';
import {Home } from './page/Home/Home.page';
import { TrainSearch } from './page/train_search/trainSearch.page';
import { TrainList } from './page/train_search/trainListSearch';
// import {Button} from 'react-bootstrap'
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
      {/* <Route index element ={<Entry/>}/> */}
      <Route index element={<DefaultLayout><Home/></DefaultLayout>}/>
      <Route path="/Login"  element={<Entry/>}/>
      
      
      <Route path="/Dashboard" element={<DefaultLayout><Dashboard/></DefaultLayout>}/>
      <Route path='/Add-new-ticket' element={<DefaultLayout><AddnewTicket/></DefaultLayout>}/>
      <Route path='/Tickets' element={<DefaultLayout><TicketList/></DefaultLayout>}/>
      {/* <Route path='/Search-train' element={<DefaultLayout><TrainSearch /></DefaultLayout>}/> */}
      <Route path='/Search-train' element={<DefaultLayout><TrainList/></DefaultLayout>}/>
      {/* <Route path='/Ticket/:tId' element={<DefaultLayout><Ticket/></DefaultLayout>}/> */}
      
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
