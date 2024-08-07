import React, { useState, useEffect } from 'react';

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(window.innerWidth >= 768 ? 3 : 1);


    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setItemsToShow(1);
            } else {
                setItemsToShow(1);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Automatically change the slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex < images.length - itemsToShow ? prevIndex + 1 : 0
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : images.length - itemsToShow
        );
    };



    return (

        <>
            <style>
                {`
            .container {
                    background-size: ${isHovered ? '120%' : 'cover'},
                    transition: 'background-size 0.8s ease-in-out',
                    }
            
            `}
            </style>
            <div className="relative w-full max-w-5xl mx-auto">
                <div className="overflow-hidden">
                    <div
                        className="whitespace-nowrap transition-transform duration-500"
                        style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
                    >
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className="inline-block"
                                style={{ minWidth: `${100 / itemsToShow}%` }}
                            >
                                {/* <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto object-cover"
              /> */}
                                <div
                                    className=" container relative w-full h-96 bg-cover bg-center transition-transform duration-800 ease-in-out"
                                    style={{
                                        backgroundImage: `url(${image.image})`,
                                        backgroundSize: isHovered ? '120%' : 'cover',
                                    }}
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                >
                                    <div className="absolute bottom-2 flex items-center justify-center w-[100%] ">
                                        <div className="bg-white bg-opacity-20 hover:bg-opacity-50 backdrop-blur-md transition duration-500 ease-in-out  p-4 rounded-lg w-full text-center text-shadow-sm ">
                                            <h1 className="text-xl font-bold">{image.heading}</h1>
                                            <p className="mt-2">{image.body}</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
                <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded-full"
                >
                    ❮
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded-full"
                >
                    ❯
                </button>
            </div>
        </>
    );
};

export default Carousel;









//import React, { useState, useEffect } from 'react';

// const Carousel = ({ images }) => {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     // Determine the number of items to show based on screen size
//     const itemsToShow = window.innerWidth >= 768 ? 3 : 1; // Adjust breakpoint as needed
//     const totalSlides = Math.max(images.length - itemsToShow, 0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             nextSlide();
//         }, 3000); // 3000ms = 3 seconds

//         return () => clearInterval(interval); // Cleanup interval on component unmount
//     }, [currentIndex]);

//     const nextSlide = () => {
//         setCurrentIndex((prevIndex) =>
//             prevIndex < totalSlides ? prevIndex + 1 : 0
//         );
//     };

//     const prevSlide = () => {
//         setCurrentIndex((prevIndex) =>
//             prevIndex > 0 ? prevIndex - 1 : totalSlides
//         );
//     };

//     return (
//         <div className="relative w-full max-w-5xl mx-auto">
//             <div className="overflow-hidden">
//                 <div
//                     className="flex transition-transform duration-500"
//                     style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
//                 >
//                     {images.map((image, index) => (
//                         <div
//                             key={index}
//                             className="flex-shrink-0 w-full md:w-1/3 p-2 box-border"
//                             style={{ minWidth: `${100 / itemsToShow}%` }}
//                         >
//                             <div>
//                                 <img
//                                     src={image}
//                                     alt={`Slide ${index + 1}`}
//                                     className="w-full h-auto object-cover"
//                                 />
//                             </div>

//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <button
//                 onClick={prevSlide}
//                 className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded-full"
//             >
//                 ❮
//             </button>
//             <button
//                 onClick={nextSlide}
//                 className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded-full"
//             >
//                 ❯
//             </button>
//         </div>
//     );
// };

// export default Carousel;






