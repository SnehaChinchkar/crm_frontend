import React from 'react'
import { Route,useNavigate,Outlet} from 'react-router-dom';

export const PrivateRoute= ({children,...rest}) => {
    const isAuth=true;
    const navigate= useNavigate();
  return (
    <Route render={()=>
    isAuth? <Outlet/>: navigate('/Entry')

    }
    />
  )
}

