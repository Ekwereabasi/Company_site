import React from 'react'
import NavBar from '../components/Reuseable/NavBar'
import Footer from '../components/Reuseable/Footer'

const AboutPage = () => {
  return (
    <>
      <section className='navWrapper bg-[#0c307a] '>
        <NavBar className='mb-50' />
      </section>

      <div className="about-page ">
        <link rel="stylesheet" href="index.css" />
       <h1>About Us</h1>
    
      <section className="who-we-are mt-20">
        <h2>About Us</h2>
        <p>Numjin Tech and Digital Services! your trusted partner in technology innovation and digital transformation. We are dedicated to providing top-notch tech solutions that drive success and growth for businesses across various industries. Our comprehensive range of services is designed to meet your unique needs, ensuring your digital infrastructure is robust, efficient, and future-ready.
        </p>
      </section>
      <section className="who-we-are">
        <h2>Who We Are</h2>
        <p>We are a team of dedicated professionals with a passion for technology and innovation.</p>
      </section>
      <section className="our-mission">
        <h2>Our Mission</h2>
        <p>Our mission is to help you succeed by providing top-quality tech services tailored to address your specific challenges and goals.</p>
      </section>
      <section className="our-goals">
        <h2>Our Goals</h2>
        <p>
        To deliver exceptional services that help you stay ahead in today's fast-paced digital word.</p>
      </section>
      <section className="our-vision">
        <h2>Our Vision</h2>
        <p>
        We envision a future where technology seamlessly integrates into every aspect of business and education, driving innovation and enabling success.</p>
      </section>
      <section className="our-values">
        <h2>Our Values</h2>
        <p>Integrity</p>
        <p>Excellence</p>
        <p>Innovation</p>
        <p>Client-Centric Focus</p>           
      </section>

      <section className="our-values">
        <h2>Our Expertise</h2>
        <p>With years of experience and a diverse portfolio, we bring a wealth of knowledge and expertise to every project. Our team of professionals is adept at understanding the unique requirements of different industries and delivering solutions that are both practical and innovative.</p>
      </section>
      </div>
      
      <section className=' '>
        <Footer />
      </section>
    </>
  );
};

export default AboutPage;
