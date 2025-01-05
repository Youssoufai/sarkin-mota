'use client'
import React from 'react'
import { FaEnvelope, FaLocationArrow, FaPhone } from 'react-icons/fa'
const ContactSection = () => {
    return (
        <>

            <section className='h-screen p-11 space-y-12'>
                <div>
                    <h1 className="text-5xl text-red text-center">Contact Us</h1>
                </div>
                <section className='flex items-center justify-between'>
                    <div className='bg-gray-100 p-16 space-y-4'>
                        <FaLocationArrow className='bg-red text-7xl p-4 rounded-lg' />
                        <h1 className='font-bold text-3xl'>Address</h1>
                        <h3>123 STREET ABUJA. NIGERIA</h3>
                    </div>
                    <div className='bg-gray-100 p-16 space-y-4'>
                        <FaEnvelope className='bg-red text-7xl p-4 rounded-lg' />
                        <h1 className='font-bold text-3xl'>Mail Us</h1>
                        <h3>info@capitalcars.com</h3>
                    </div>
                    <div className='bg-gray-100 p-16 space-y-4'>
                        <FaPhone className='bg-red text-7xl p-4 rounded-lg' />
                        <h1 className='font-bold text-3xl'>Telephone</h1>
                        <h3>+23484934989</h3>
                    </div>
                </section>
            </section>

        </>
    )
}

export default ContactSection