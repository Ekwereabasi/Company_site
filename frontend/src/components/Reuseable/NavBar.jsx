import React, { useState, useEffect } from 'react'
import Logo from '../../assets/Numjin-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';


const NavBar = () => {

    // #0c307a #0a2d93 #0098da

    const [isOpen, setIsOpen] = useState(false)
    const [isResponsive, setIsResponsive] = useState(false)

    const handleResize = () => {
        if (window.innerWidth <= 768) { // Adjust the width for 'md'
            setIsResponsive(true);
        } else {
            setIsResponsive(false);
            setIsOpen(false)
        }
        console.log("isOpen status: ", isOpen)
        console.log("isResp status: ", isResponsive)
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize(); // Check the screen width on mount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (isOpen === true && isResponsive === true) {
        setIsResponsive(false);
    }

    if (isOpen === false && isResponsive === false) {
        setIsResponsive(true);
    }

    const toggleOpen = () => {
        console.log("Isopen state", isOpen)
        setIsOpen(!isOpen)



    }


    return (
        <>
            <section className='h-fit'>
                <nav className='  bg-[#d6dde9] bg-opacity-50 backdrop-filter backdrop-blur-xl shadow-md fixed transition duration-500 ease-in-out w-full border z-50 '>

                    <div className="max-w-7xl  mx-auto py-4  ">

                        <div className={` items-center md:flex ${isResponsive ? "flex" : "hidden"} justify-between px-4`}>
                            {/* Logo Image */}
                            <div className=' flex  items-center'>
                                <a href="/" aria-label="Homepage" >
                                    <img src={Logo} alt="Numjim Company Logo" className='h-[30px]' />
                                </a>
                            </div>

                            {/* Nav bar items */}
                            <section className=" flex justify-center items-center gap-3 flex-nowrap md:flex-row-reverse">
                                <Link to="/bookacall">
                                    <button className='text-white rounded-3xl border py-2 px-9 outline-none hover:bg-transparent bg-[#0a2d93] transition ease-in-out duration-700 hover:border-white border-transparent box-border '>Book a call</button></Link>

                                <div className='block'>
                                    <div className="md:hidden">

                                        <button onClick={toggleOpen}>
                                            {!isOpen ? (
                                                <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
                                            ) : (
                                                <FontAwesomeIcon icon={faTimes} className="w-6 h-6" />
                                            )}
                                        </button>
                                    </div>

                                    <div className=''>
                                        <div className="ml-10 hidden md:flex text-[#090613] items-baseline space-x-4 md:flex-row">

                                            <Link to="/" className=" hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                                            <Link to="/work" className=" hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Work</Link>
                                            <Link to="/services" className=" hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Services</Link>
                                            <Link to="/pricing" className=" hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Pricing</Link>
                                            <Link to="/about" className=" hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">About Us</Link>
                                            <Link to="/careers" className=" hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Careers</Link>
                                            <Link to="/tech" className=" hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Tech</Link>
                                            <Link to="/blog" className=" hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Blog</Link>
                                            <Link to="/podcast" className=" hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Podcast</Link>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>

                        {isOpen && (
                            // executes when isOpen is true

                            <div className='w-full md:hidden transition-all duration-500 ease-in-out'>
                                <div className=" flex-col flex  items-baseline  md:flex-row  w-full  transition duration-500 ease-in-out ">
                                    <div className='flex justify-between w-full  ' >
                                        <Link to="/" className="text-[#090613] hover:text-white   text-3xl py-4   font-medium  border-b-1 w-full text-left pl-6 ">Home</Link>

                                        <div className="md:hidden pr-4">
                                            <button onClick={toggleOpen} className="transition-transform duration-300 ease-in-out">
                                                {!isOpen ? (
                                                    <FontAwesomeIcon icon={faBars} className="w-6 h-6 transform " />
                                                ) : (
                                                    <FontAwesomeIcon icon={faTimes} className="w-6 h-6 transform rotate-180" />
                                                )}
                                            </button>
                                        </div>

                                    </div>

                                    <Link to="/work" className="text-[#090613] hover:text-white   text-3xl py-4   font-medium  border-b-1 w-full text-left pl-6 ">Work</Link>

                                    <Link to="/services" className="text-[#090613] hover:text-white   text-3xl py-4   font-medium  border-b-1 w-full text-left pl-6 ">Services</Link>
                                    <Link to="/princing" className="text-[#090613] hover:text-white   text-3xl py-4   font-medium  border-b-1 w-full text-left pl-6 ">Pricing</Link>
                                    <Link to="/about" className="text-[#090613] hover:text-white   text-3xl py-4   font-medium  border-b-1 w-full text-left pl-6 ">About Us</Link>
                                    <Link to="/careers" className="text-[#090613] hover:text-white   text-3xl py-4   font-medium  border-b-1 w-full text-left pl-6 ">Careers</Link>
                                    <Link to="/tech" className="text-[#090613] hover:text-white   text-3xl py-4   font-medium  border-b-1 w-full text-left pl-6 ">Tech</Link>
                                    <Link to="/blog" className="text-[#090613] hover:text-white   text-3xl py-4   font-medium  border-b-1 w-full text-left pl-6 ">Blog</Link>

                                    <Link to="/podcast" className="text-[#090613] hover:text-white   text-3xl py-4   font-medium  border-b-1 w-full text-left pl-6 ">Podcast</Link>
                                </div>
                            </div>
                        )}

                    </div>
                </nav>
            </section>
        </>
    )
}

export default NavBar