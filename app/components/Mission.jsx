'use client'
import React from 'react'

const Mission = () => {
    return (
        <>

            <section className='h-screen bg-gray-50 p-11 flex items-center'>
                <div className='flex-1'>
                    <img src="Customer-service.jpg" className='rounded w-[484px] h-[290px]' alt="customer" />
                </div>
                <div className='flex-1'>
                    <h1 className='text-4xl'>Our Customer <span className="text-red">Service</span></h1>
                    <p><span className="text-red font-bold">Capital Cars</span> entered the brand new vehicle retail market for only one reason: “Satisfactory Customer Service. At <span className="font-bold text-red">Capital Cars</span>, we boldly assert ourselves as a customer-centered automobile company. All our vehicles are fully certified with no encumbrance, and we stand passionately behind our acclamation. When you think of great vehicles at very competitive prices, think <span className="font-bold text-red">Capital Cars</span>.</p>
                </div>
            </section>

        </>
    )
}

export default Mission