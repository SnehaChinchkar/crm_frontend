import React from 'react';
import './App.css';
import Entry from './page/entry/Entry.page';
import { DefaultLayout } from './layout/DefaultLayout';
import { Dashboard } from './page/dashboard/Dashboard.page';
import { AddnewTicket } from './page/newTicket/AddnewTicket.page';
import { TicketList } from './page/tikcetList/ticketList.page';
// import {Button} from 'react-bootstrap'
function App() {
  return (
    <div className="App">
      {/* <Button>Test button</Button> */}
      {/* <Entry/> */}
      <DefaultLayout>
        {/* <Dashboard/> */}
        {/* <AddnewTicket/> */}
        <TicketList/>
      </DefaultLayout>
    </div>
  );
}

export default App;
