import React from "react";
import '../styles/AboutMe.css'

function AboutMe() {
  return (
    <div className="aboutme">
        <div className="header"><h2>About Me</h2></div>
        <ol>
          <li>(2012-2017) Bachelor from business administration major.</li>
          <li>(2017-2021) Worked at the investment management company in global fund accounting division, dealing with various financial assets such as securities, futures, bonds and fx forward. </li>
          <li>(2021-) Start Coding BootCamp in GA tech</li>
          <li><em>(2023-) Move into finTech industry!</em> </li>
      
        
          <span> WHY Coding?</span> 
          I am a growing seeker. I love to learn new skills continually.
        </ol>  
        <img src="../styles/images/profilephoto.jpg" className="profile" alt="profile photo"></img>
    
    </div>  

);
}

export default AboutMe;
