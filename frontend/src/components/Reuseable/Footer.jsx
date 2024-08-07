import React from 'react'
import Logo from '../../assets/Numjin-logo.png'
import location from '../../assets/uyo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    // #0c307a #0a2d93 #0098da
    return (
        <>


            <section className='bg-[#0098da] flex justify-between md:px-14 px-5 pt-24 pb-5 md:flex-row flex-col gap-12'>
                <div>

                    <img src={Logo} alt="Numjim Company Logo" className='h-[43px]' />

                    <h3 className='text-white sm:text-5xl text-3xl my-12 font-extrabold md:text-6xl '>Let's talk about <br /> your project </h3>

                    <button className='text-white rounded-3xl border  py-2 px-9 outline-none hover:bg-[#0a2d93] transition ease-in-out duration-700 hover:border-transparent  '>Schedule a call</button>



                </div>
                <div className='text-white flex flex-col md:flex-row md:gap-6 mb-5 md:items-center'>
                    <div className=''>
                        <img src={location} alt="image of Numjim building, Uyo" className='h-40' />
                        <h4 className='font-bold text-lg mb-3'> UYO</h4>
                    </div>
                    <div>
                        <h4>Address: </h4>
                        <h4>Phone:  <span className='text-[#0c307a] cursor-pointer'> +234 8788490999</span> </h4>
                    </div>

                </div>
            </section>




            <section className='bg-[#2b3a69] md:px-14 px-5 py-20'>
                <div className='  md:flex '>

                    <div className='mr-12 mb-12'>
                        <img src={Logo} alt="Numjim Company Logo" className='h-[43px] ' />
                    </div>

                    <div className='text-white grid md:justify-between  w-full grid-cols-2 md:grid-cols-4 gap-y-20' >
                        <div className='flex flex-col gap-4 '>
                            <h3 className='font-bold text-2xl'>Global</h3>
                            <p>Work</p>
                            <p>About Us</p>
                            <p>Blog</p>
                            <p>Newsletter</p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h3 className='font-bold text-2xl'>Technology</h3>
                            <p>Work</p>
                            <p>About Us</p>
                            <p>Blog</p>
                            <p>Newsletter</p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h3 className='font-bold text-2xl'>Services</h3>
                            <p>Work</p>
                            <p>About Us</p>
                            <p>Blog</p>
                            <p>Newsletter</p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h3 className='font-bold text-2xl'>Build</h3>
                            <p>Work</p>
                            <p>About Us</p>
                            <p>Blog</p>
                            <p>Newsletter</p>
                        </div>
                    </div>

                </div>

                <div className=' flex md:flex-row md:justify-between flex-col pt-10 mt-16 border-t border-t-[#816892] items-center gap-5'>

                    <div className=' text-white md:block hidden' >
                        © Numjim 2024
                    </div>


                    <div>
                        <div className='text-white'>
                            <a href="#" className='hover:text-[#816892]' >Privacy policy</a>

                            <a href="#" className=' border-r border-l px-2 mx-2 hover:text-[#816892] ' >Security</a>

                            <a href="#" className='hover:text-[#816892]' >Terms of Service</a>
                        </div>
                    </div>


                    <div className='flex items-center '>

                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">

                            <FontAwesomeIcon
                                icon={faFacebook}
                                className=" rounded-[50%] w-8 h-8 hover:text-[#6060bb] transition-colors duration-300 hover:scale-110 "
                                style={{ color: 'white' }}
                            />
                        </a>
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            className=" mx-2   rounded-[50%] w-8 h-8 hover:text-[#6060bb] transition-colors duration-300 hover:scale-110 cursor-pointer "
                            style={{ backgroundColor: '#2b3a69', color: 'white' }}

                        />
                        <FontAwesomeIcon
                            icon={faYoutube}
                            className=" rounded-[50%] w-10 h-10 hover:text-[#6060bb] transition-colors duration-300 hover:scale-110 cursor-pointer "
                            style={{ backgroundColor: '#2b3a69', color: 'white' }}
                        />
                    </div>
                </div>
            </section>




        </>
    )
}

export default Footer