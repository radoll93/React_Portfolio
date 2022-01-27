import React from "react";
import '../styles/AboutMe.css'

function AboutMe() {
  return (
    <section className="aboutme">
        <nav id="aboutme"><h2>About Me</h2></nav>
            <p>Let me introduce myself!</p>
        <ol>
          <li>(2012-2017) Bachelor from business administration major.</li>
          <li>(2017-2021) Worked at the investment management company in global fund accounting division, dealing with various financial assets such as securities, futures, bonds and fx forward. </li>
          <li>(2021-) Start Coding BootCamp in GA tech</li>
          <li><em>(2023-) Move into finTech industry!</em> </li>
      
        
          <span> WHY Coding?</span> 
          I am a growing seeker. I love to learn new skills continually.
        </ol>  
        <img src={require("../styles/images/profilephoto.jpg")} className="profile" alt="profile photo"></img>
    
    </section>  

);
}

export default AboutMe;
