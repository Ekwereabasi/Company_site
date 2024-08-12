import React from 'react';
import NavBar from '../components/Reuseable/NavBar'
import Footer from '../components/Reuseable/Footer'



const Work = () => {
    return (
    <div className="work-page">
      <NavBar className = "navbar-no-mt" />
        <link rel="stylesheet" href="Work.css" />
      <h1>Our Work</h1>
      <div className="projects">
        <div className="project">
          <img src={"/images/pics1.avif"} alt="Project 1" />
          <h2>Project 1</h2>
          <p>Short description of Project 1</p>
        </div>
        <div className="project">
          <img src={"/images/pics1.avif"} alt="Project 2" />
          <h2>Project 2</h2>
          <p>Short description of Project 2</p>
        </div>
        <div className="project">
          <img src={"/images/pics1.avif"} alt="Project 3" />
          <h2>Project 3</h2>
          <p>Short description of Project 3</p>
        </div>
        <div className="project">
          <img src={"/images/pics1.avif"} alt="Project 3" />
          <h2>Project 3</h2>
          <p>Short description of Project 3</p>
        </div>
        <div className="project">
          <img src={"/images/pics1.avif"} alt="Project 3" />
          <h2>Project 3</h2>
          <p>Short description of Project 3</p>
        </div>
        <div className="project">
          <img src={"/images/pics1.avif"} alt="Project 3" />
          <h2>Project 3</h2>
          <p>Short description of Project 3</p>
        </div>
      </div>
      <section>
      <Footer className="footer-mt" />
      </section>
    </div>
    );
};

export default Work;
