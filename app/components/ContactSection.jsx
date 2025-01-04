'use client'
import React from 'react'
import { FaLocationArrow } from 'react-icons/fa'
const ContactSection = () => {
    return (
        <>

            <section className='h-screen p-11'>
                <div>
                    <h1 className="text-5xl text-red text-center">Contact Us</h1>
                </div>
                <div className='bg-gray-100'>
                    <FaLocationArrow className='bg-red' />
                    <h1>Address</h1>
                    <h3>123 STREET ABUJA. NIGERIA</h3>
                </div>
                <div></div>
                <div></div>
            </section>

        </>
    )
}

export default ContactSection