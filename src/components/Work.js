import React from "react";

function Work() {
    return (
    <div className="work">
    <div className="header"><h2>Work</h2></div> 
    <div className="workbox">
        <button itemID="workboxbtn"> <a href="https://github.com/schristinelagrange/lifePlanner/"> <img src="./assets/images/LifePlanner.PNG" > </img>
            <section className="details">
                <h4> Project1_LifePlanner </h4>
                <p style="word-break: break-word; text-align: left; padding: 2px;">Deployed Page: https://schristinelagrange.github.io/lifePlanner/ </p>
            </section></a>
        </button>


        <button id="workboxbtn"> <a href="https://github.com/sadiyan/golf-score/"> <img src="./assets/images/GolfScore.PNG" > </img>
            <section className="details">
                <h4> Project2_GolfScore </h4>
                <p style="word-break: break-word; text-align: left; padding: 2px;">Deployed Page: https://evening-thicket-48303.herokuapp.com/ </p>
            </section></a>
        </button>
        <button id="workboxbtn"> <a href="https://github.com/radoll93/Homework14_TechBlog"> <img src="./assets/images/TechBlog.PNG" > </img>
            <section className="details">
            <h4>Homework_TechBlog</h4>
            <p style="word-break: break-word; text-align: left; padding: 2px;">Deployed Page: https://limitless-ocean-39625.herokuapp.com/ </p>
        </section> </a>
        </button>  
    </div>
    </div>
);
}

export default Work;
