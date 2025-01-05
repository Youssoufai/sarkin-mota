'use client'
import React from 'react'

const Desc = () => {
    return (
        <>
            <section className='h-full bg-white p-5 md:p-11 gap-16 flex flex-col md:flex-row items-center justify-between'> {/* Adjusted padding and flex direction for responsiveness */}
                <div className='space-y-4 flex-1'>
                    <h1 className='text-3xl md:text-4xl'>What we <span className="text-red">do</span></h1> {/* Responsive font size */}
                    <p className='text-sm md:text-base'>At our dealership, we believe that every journey should be extraordinary. Our curated selection of luxury vehicles embodies sophistication, performance, and cutting-edge technology. Each car is meticulously chosen to offer not just a mode of transportation, but an experience that elevates your lifestyle. Whether you seek the thrill of a high-performance sports car or the comfort of a premium SUV, we are dedicated to providing you with unparalleled service and a seamless buying experience. Discover the art of luxury driving with us.</p>
                </div>
                <div className='flex-1'>
                    <img src="about-img.jpg" className='rounded w-full md:w-[484px] h-auto md:h-[340px]' alt="About Us" /> {/* Responsive image size */}
                </div>
            </section>
        </>
    )
}

export default Desc