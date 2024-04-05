import React from "react";


import "./entry.style.css";
import Jumbotron from "../../components/login/jumbotron";

import { LoginForm } from "../../components/login/login.comp";
// import { LoginForm } from "../../components/login.comp";
import { useState } from 'react';
function Entry() {
    
    return (
      <div className="entry-page bg-info">
        <Jumbotron className='form-box' ></Jumbotron>
      </div>
    );
  }
  export default Entry;
  /*
  <div class="bs-example"><div class="react-live-preview"><div class="jumbotron"><h1>Hello, world!</h1><p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p><p><button type="button" class="btn btn-primary">Learn more</button></p></div></div></div>
  */