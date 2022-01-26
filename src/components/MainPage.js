import React from 'react';
import { useState, useEffect } from 'react';
import AboutMe from './AboutMe';
import Contactme from './Contactme';
import Header from './Header';
import Resume from './Resume';
import Work from './Work';
import Footer from './Footer';
import Container from './Container';


const MainPage = () => {
    const [page, setPage] = useState();

    return (
            <AboutMe />

        

    );
}


export default MainPage;