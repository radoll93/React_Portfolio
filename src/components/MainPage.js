import React from 'react';
import { useState, useEffect } from 'react';
import AboutMe from './AboutMe';
import Contactme from './Contactme';
import Header from './Header';
import Resume from './Resume';
import Work from './Work';
import Footer from './Footer';
import Container from './Container';
import '../styles/MainPage.css'
import ContactMe from './Contactme';


const MainPage = () => {

    const [page, setPage] = useState('Header');

    // const {className} = page.props
    // console.log(className)

    
  const renderPage = () => {
    if (page === '') {
      return <Header />;
    }
    if (page === 'Aboutme') {
      return <AboutMe />;
    }
    if (page === 'Work') {
        return <Work />;
      }
    if (page === 'Contactme') {
      return <Contactme />;
    }
    if (page === 'Resume') {
        return <Resume />;
      }
  };

    return (
         
    <div>
        <Header page={page} setPage={setPage} />
        {renderPage()}
        <Footer />
    </div>

    );
}


export default MainPage;