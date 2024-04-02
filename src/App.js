import React from 'react';
import './App.css';
import Entry from './page/entry/Entry.page';
import { DefaultLayout } from './layout/DefaultLayout';
import { Dashboard } from './page/dashboard/Dashboard.page';
// import {Button} from 'react-bootstrap'
function App() {
  return (
    <div className="App">
      {/* <Button>Test button</Button> */}
      {/* <Entry/> */}
      <DefaultLayout>
        <Dashboard/>
      </DefaultLayout>
    </div>
  );
}

export default App;
