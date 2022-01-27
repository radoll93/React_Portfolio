import React from "react";
import '../styles/Work.css'

function Work() {
    return (
    <section className="work">
        <nav id="work"><h2>Work</h2></nav> 
        <div className="workbox">
            <p>This is my projects from GA Tech BootCamp!</p>
            <button id="workboxbtn"> <a href="https://github.com/schristinelagrange/lifePlanner/"> 
            <img src={require("../styles/images/LifePlanner.PNG")} /> 
                <section className="details">
                    <h4> Project1_LifePlanner </h4>
                    <p >Deployed Page: https://schristinelagrange.github.io/lifePlanner/ </p>
                </section></a>
            </button>


            <button id="workboxbtn"> <a href="https://github.com/sadiyan/golf-score/"> 
                <img src={require("../styles/images/GolfScore.PNG") } />
                <section className="details">
                    <h4> Project2_GolfScore </h4>
                    <p >Deployed Page: https://evening-thicket-48303.herokuapp.com/ </p>
                </section></a>
            </button>
            <button id="workboxbtn"> <a href="https://github.com/radoll93/Homework14_TechBlog"> 
        <img src={require("../styles/images/TechBlog.PNG")} />
                <section className="details">
                <h4>Homework_TechBlog</h4>
                <p >Deployed Page: https://limitless-ocean-39625.herokuapp.com/ </p>
            </section> </a>
            </button>  
        </div>
    </section>
);
}

export default Work;
