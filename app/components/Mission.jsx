'use client'
import React from 'react'

const Mission = () => {
    return (
        <>
            <section className='h-screen bg-gray-50 p-5 md:p-11 flex flex-col md:flex-row items-center'> {/* Adjusted padding and flex direction for responsiveness */}
                <div className='flex-1 p-5 m-4'>
                    <img src="service.jpg" className='rounded w-full md:w-[484px] h-auto md:h-[290px]' alt="customer" /> {/* Responsive image size */}
                </div>
                <div className='flex-1 space-y-4 p-5 m-4'> {/* Added space between elements */}
                    <h1 className='text-3xl md:text-4xl'>Our Customer <span className="text-red">Service</span></h1> {/* Responsive font size */}
                    <p className='text-sm md:text-base'> {/* Responsive text size */}
                        <span className="text-red font-bold">Capital Cars</span> entered the brand new vehicle retail market for only one reason: “Satisfactory Customer Service. At <span className="font-bold text-red">Capital Cars</span>, we boldly assert ourselves as a customer-centered automobile company. All our vehicles are fully certified with no encumbrance, and we stand passionately behind our acclamation. When you think of great vehicles at very competitive prices, think <span className="font-bold text-red">Capital Cars</span>.
                    </p>
                </div>
            </section>
        </>
    )
}
export default Mission