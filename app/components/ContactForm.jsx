'use client'
import React from 'react'
import { FaFacebook, FaInstagram, FaLink, FaLinkedinIn, FaLocationArrow, FaPhone, FaTwitter } from 'react-icons/fa'

const ContactForm = () => {
    return (
        <>
            <section className='h-full p-5 md:p-12 bg-gray-100 flex flex-col md:flex-row gap-12 justify-between'> {/* Adjusted padding and layout for responsiveness */}
                <section className='p-8 bg-[#1F2E4E] flex flex-col items-center rounded-lg flex-1'> {/* Made width responsive */}
                    <h1 className='text-3xl text-red text-left'>Send Your Message</h1>
                    <form action="#" className='p-4 bg-[#1F2E4E] flex flex-col items-center space-y-8 w-full'> {/* Added width for form */}
                        <div className='flex flex-col md:flex-row gap-4 w-full'> {/* Adjusted layout for responsiveness */}
                            <input type="text" className='p-4 rounded-lg flex-1' placeholder='Your Name' />
                            <input type="text" className='p-4 rounded-lg flex-1' placeholder='Your Email' />
                        </div>
                        <div className='flex flex-col md:flex-row gap-4 w-full'> {/* Adjusted layout for responsiveness */}
                            <input type="text" className='p-4 rounded-lg flex-1' placeholder='Your Phone' />
                            <input type="text" className='p-4 rounded-lg flex-1' placeholder='Your Address' />
                        </div>
                        <input type="text" placeholder='Subject' className='p-4 rounded-lg w-full' />
                        <textarea name="message" id="message" placeholder='Your Message' className='p-4 rounded-lg w-full py-12 text-start'></textarea>
                        <button type="submit" className='py-4 px-8 bg-gray-50 w-full rounded-lg text-red'>Send Message</button>
                    </form>
                </section>
                <section className='space-y-12 flex-1 flex flex-col items-center'> {/* Made width responsive */}
                    <FaFacebook className='text-8xl p-8 rounded-full bg-gray-300 text-red' />
                    <FaTwitter className='text-8xl p-8 rounded-full bg-gray-300 text-red' />
                    <FaInstagram className='text-8xl p-8 rounded-full bg-gray-300 text-red' />
                    <FaLinkedinIn className='text-8xl p-8 rounded-full bg-gray-300 text-red' />
                </section>
                <section className='bg-gray-300 flex flex-col gap-8 p-12 rounded-lg flex-1'> {/* Made width responsive */}
                    <div className='bg-white p-8 rounded-lg space-y-4'> {/* Adjusted padding */}
                        <h1 className='font-bold text-3xl'>Our Branch 01</h1>
                        <h3 className='flex gap-1'><span className="font-bold">Address:</span> <FaLocationArrow className='text-red' /> 123 Street New York. USA</h3>
                        <h3 className='flex gap-1'><span className="font-bold">Telephone:</span> <FaPhone className='text-red' /> +2345894745</h3>
                    </div>
                    <div className='bg-white p-8 rounded-lg space-y-4'> {/* Adjusted padding */}
                        <h1 className='font-bold text-3xl'>Our Branch 02</h1>
                        <h3 className='flex gap-1'><span className="font-bold">Address:</span> <FaLocationArrow className='text-red' /> 456 Avenue New York. USA</h3>
                        <h3 className='flex gap-1'><span className="font-bold">Telephone:</span> <FaPhone className='text-red' /> +2345894746</h3>
                    </div>
                    <div className='bg-white p-8 rounded-lg space-y-4'> {/* Adjusted padding */}
                        <h1 className='font-bold text-3xl'>Our Branch 03</h1>
                        <h3 className='flex gap-1'><span className="font-bold">Address:</span> <FaLocationArrow className='text-red' /> 789 Boulevard New York. USA</h3>
                        <h3 className='flex gap-1'><span className="font-bold">Telephone:</span> <FaPhone className='text-red' /> +2345894747</h3>
                    </div>
                </section>
            </section>
        </>
    )
}
export default ContactForm