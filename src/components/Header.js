import React from "react";
import '../styles/Header.css'

function Header({page, setPage}) {

    return (
    <div>
        <header className="header">
        <h1>Bora Lee</h1>
        <ul>
            <li> 
                <a href="#Aboutme"
                    onClick={() => setPage('Aboutme')}>
                    About Me
                </a> 
            </li>

            <li> 
                <a href="#Work"
                    onClick={() => setPage('Work')}> 
                    Work
                </a> 
            </li>
            
            <li> 
                <a href="#Contactme"
                    onClick={() => setPage('Contactme')}>
                    Contact Me
                </a> 
            </li>
            <li> 
                <a href="#Resume"
                    onClick={() => setPage('Resume')}>
                    Resume
                </a>
            </li>
        </ul>
        <img></img>
        <div className="subtitle">
            <p>I'm from South Korea and worked in Yeouido, the herb of financial industry in Korea.
            Now, I'm taking a journey to coding! </p>   
        </div>
        </header>
    </div>
    )
}

export default Header;