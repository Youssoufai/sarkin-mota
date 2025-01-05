'use client'
import React from 'react'
import { FaEnvelope, FaLocationArrow, FaPhone } from 'react-icons/fa'
const ContactSection = () => {
    return (
        <>
            <section className='h-full p-5 md:p-11 space-y-12'> {/* Adjusted padding for responsiveness */}
                <div>
                    <h1 className="text-4xl md:text-5xl text-red text-center">Contact Us</h1> {/* Responsive font size */}
                </div>
                <section className='flex flex-col md:flex-row items-center justify-between gap-8'> {/* Adjusted layout for responsiveness */}
                    <div className='bg-gray-100 p-8 md:p-16 space-y-4 flex-1'> {/* Made width responsive */}
                        <FaLocationArrow className='bg-red text-7xl p-4 rounded-lg' />
                        <h1 className='font-bold text-2xl md:text-3xl'>Address</h1> {/* Responsive font size */}
                        <h3>123 STREET ABUJA. NIGERIA</h3>
                    </div>
                    <div className='bg-gray-100 p-8 md:p-16 space-y-4 flex-1'> {/* Made width responsive */}
                        <FaEnvelope className='bg-red text-7xl p-4 rounded-lg' />
                        <h1 className='font-bold text-2xl md:text-3xl'>Mail Us</h1> {/* Responsive font size */}
                        <h3>info@capitalcars.com</h3>
                    </div>
                    <div className='bg-gray-100 p-8 md:p-16 space-y-4 flex-1'> {/* Made width responsive */}
                        <FaPhone className='bg-red text-7xl p-4 rounded-lg' />
                        <h1 className='font-bold text-2xl md:text-3xl'>Telephone</h1> {/* Responsive font size */}
                        <h3>+23484934989</h3>
                    </div>
                </section>
            </section>
        </>
    )
}
export default ContactSection