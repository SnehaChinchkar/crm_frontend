import React from 'react';
import { Header } from './partials/Header.comp';
import { Footer } from './partials/Footer.comp';
export const DefaultLayout = ({children}) => {
  return (
    <div className='default-layout'>
        <header className='header'>
          <Header/>
        </header>
        <div className='main'>
          {children}
        </div>
        <footer  className='footer'>
          <Footer/>
        </footer>
    </div>
  )
}
// children from app js whatever written in app js will be transfered to 