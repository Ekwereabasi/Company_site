import React from 'react'
import NavBar from '../components/Reuseable/NavBar'
import Footer from '../components/Reuseable/Footer'


const Work = () => {

  // #0c307a #0a2d93 #0098da
  return (
    <>
  
      <section className='navWrapper bg-[#0c307a] '>
        <NavBar />
      </section>

      <link rel="stylesheet" href="Work.css" />
      <h1>Our Work</h1>
      <div className=" mr-20 ml-20 mt-20 projects">
       
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
  

      <section className=' '>
        <Footer />
      </section>

    </>
  )
}

export default Work