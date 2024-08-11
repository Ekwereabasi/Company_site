import React from 'react'
import NavBar from '../components/Reuseable/NavBar'
import Footer from '../components/Reuseable/Footer'
import Carousel from './Carousel/Carousel'
import SchoolPortal from '../assets/school-management-software.jpeg'
import WebDesign from '../assets/web-design.jpg'
import Cctv from '../assets/cctv.jpg'
import Landing from '../assets/Landing-page.jpg'
import Solar from '../assets/solar-installation.jpg'
import Mobile from '../assets/mobile-app-dev.jpg'
import HardwareInstall from '../assets/hardware-installation.jpg'
import Signage from '../assets/Digital-signage.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faGem, faAward } from '@fortawesome/free-solid-svg-icons';





const Home = () => {

  // #0c307a #0a2d93 #0098da


  const images = [
    {
      image: SchoolPortal,
      heading: "School Portals/Websites",
      body: "Enhance Communication and streamline school management "
    },

    {
      image: WebDesign,
      heading: "Web Design",
      body: "Create stunning and responsive websites that engage your audience.",
    },

    {
      image: Cctv,
      heading: "CCTV Installation:",
      body: "Secure your premises with reliable surveillance systems.",
    },

    {
      image: Landing,
      heading: "Landing Pages",
      body: "Design high-converting landing pages for your campaigns.",
    },

    {
      image: Solar,
      heading: "Solar Installation",
      body: "Harness solar energy for a sustainable future.",
    },

    {
      image: Mobile,
      heading: "Mobile App Development",
      body: "Develop intuitive apps that drive user engagement.",
    },

    {
      image: HardwareInstall,
      heading: "Hardware Installation",
      body: "Ensure your tech infrastructure is robust and reliable",
    },

    {
      image: Signage,
      heading: "Digital Signage",
      body: "Develop intuitive apps that drive user engagement.",
    },



  ];

  return (
    <>
      <style>
        {`
          .table-container {
            overflow: visible;
          }
          .position-static {
            position: static !important;
          }
          .kebab-menu {
            cursor: pointer;
            transition: color 0.3s;
          }
          .kebab-menu:hover {
            color: blue;
          }
        `}
      </style>


      <section className='navWrapper bg-[#0c307a] '>
        <NavBar />
      </section>

      <section className=' px-5 md:px-14 h-screen bg-[#2b3a69]  flex flex-col flex-wrap  justify-center '>

        <p className='text-[#c0a8a8]'>WE ARE NUMJIM</p>
        <h2 className=' capitalize text-white text-5xl font-bold py-6 md:leading-[1.5] leading-[1.4] md:text-6xl '>

          Numjin <br className='sm:hidden' /> Tech and Digital<br className='hidden md:block' />  Services! <br className='' />
          Your Home for  <br className='sm:hidden' /> Tech and <br className='' /> Digital Solutions.

        </h2>

        <div>
          <button className='text-white rounded-3xl border  py-2 px-9 outline-none hover:bg-[#0a2d93] transition ease-in-out duration-700 hover:border-transparent  '>Schedule a call</button>
        </div>
      </section>
      <section className='py-20 md:px-14 px-5 ' style={{ backgroundImage: `url("backg.jpg")` }}>
        <h2 className='text-4xl font-bold'>What we do</h2>
        <p className='pt-10 text-lg md:w-3/5 '>
          At Numjin Tech and Digital Services, we bring innovation and technology to your doorstep. Our expert team is dedicated to providing top-notch solutions tailored to your needs.
        </p>
      </section>
      <Carousel images={images} />


      <section className=' px-5 md:px-14 py-36'>
        <h2 className='text-4xl font-bold pb-20'>Why Choose NUMJIM</h2>
        <div style={{ backgroundImage: `url("backg.jpg")` }} className=' itemsWrapper bg-cover bg-center flex justify-center flex-wrap gap-5  '>


          <div className='h-80 border  md:w-80 w-full rounded-xl shadow-xl drop-shadow-md bg-white '>
            <div className='text-left p-10'>
              <FontAwesomeIcon icon={faGem} className="w-16 h-16 pt-5" style={{ color: '#0098da', fontSize: '3rem' }} />
              <h3 className='text-2xl mt-12 font-semibold'>Client-Centric Approach</h3>
              <p className='text-lg pt-2'>Your needs come first </p>
            </div>
          </div>


          <div className='h-80 border  md:w-80 w-full rounded-xl shadow-xl drop-shadow-md bg-white '>
            <div className='text-left p-10'>
            <FontAwesomeIcon icon={faCogs} className="w-16 h-16 pt-5" style={{ color: '#0a2d93', fontSize: '3rem' }} />
              <h3 className='text-2xl mt-12 font-semibold'>Innovative Solutions</h3>
              <p className='text-lg pt-2'>Stay ahead with cutting-edge technology </p>
            </div>
          </div>
          

          <div className='h-80 border  md:w-80 w-full rounded-xl shadow-xl drop-shadow-md bg-white '>
            <div className='text-left p-10'>
              <FontAwesomeIcon icon={faAward} className="w-16 h-16 pt-5" style={{ color: '#0c307a ', fontSize: '3rem' }} />
              <h3 className='text-2xl mt-12 font-semibold'>Experienced Team</h3>
              <p className='text-lg pt-2'>Skilled professionals dedicated to excellence </p>
            </div>
          </div>


          {/* <div className='h-72 border  md:w-80 w-full rounded-xl shadow-xl drop-shadow-md bg-white '></div>
          <div className='h-72 border  md:w-80 w-full rounded-xl shadow-xl drop-shadow-md bg-white '></div> */}
        </div>
      </section>

      {/*  */}
      <section>

      </section>


      <section className=' '>
        <Footer />
      </section>

    </>
  )
}

export default Home