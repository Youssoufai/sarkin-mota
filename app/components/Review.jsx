'use client'
import React from 'react'
import { FaStar } from 'react-icons/fa';

const Review = () => {
    return (
        <>
            <section className='h-full bg-gray-100 p-12 md:p-11 space-y-12'> {/* Adjusted padding for responsiveness */}
                <div className='space-y-5'>
                    <h1 className='text-center text-3xl md:text-4xl'>Our Clients <span className="text-red">Review</span></h1> {/* Responsive font size */}
                    <p className='text-center text-sm md:text-base'>See How We've Made an Impact: Genuine Feedback from Our Happy Clients</p> {/* Responsive font size */}
                </div>
                <section className='flex flex-col md:flex-row justify-between gap-5'> {/* Adjusted layout for responsiveness */}
                    <div className='w-full md:w-[545px] h-[270px] border rounded-t-lg'> {/* Made width responsive */}
                        <div className='bg-[#878585] flex gap-9 p-4 rounded-t-lg'>
                            <img src="testimonial-3.jpg" className='rounded-full w-16 h-16' alt="" /> {/* Added fixed size for the image */}
                            <div>
                                <h1 className='text-xl md:text-2xl'>Person Name</h1> {/* Responsive font size */}
                                <h2 className='text-amber-500'>Profession</h2>
                                <div className="flex">
                                    <FaStar className='text-red' />
                                    <FaStar className='text-red' />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                            </div>
                        </div>
                        <p className='p-4 md:p-8'>I had an amazing experience with <span className="text-red font-bold">Capital Cars</span>! The team was professional, attentive, and truly cared about my needs. I would highly recommend them to anyone looking for quality and reliability.</p>
                    </div>
                    <div className='w-full md:w-[545px] h-[270px] border rounded-t-lg bg-gray-200'> {/* Made width responsive */}
                        <div className='bg-[#878585] flex gap-9 p-4 rounded-t-lg'>
                            <img src="testimonial-3.jpg" className='rounded-full w-16 h-16' alt="" /> {/* Added fixed size for the image */}
                            <div>
                                <h1 className='text-xl md:text-2xl'>Person Name</h1> {/* Responsive font size */}
                                <h2 className='text-amber-500'>Profession</h2>
                                <div className="flex">
                                    <FaStar className='text-red' />
                                    <FaStar className='text-red' />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                            </div>
                        </div>
                        <p className='p-4 md:p-8'>I had a wonderful experience with <span className="text-red font-bold">Capital Cars</span>! The team was attentive, knowledgeable, and truly prioritized my needs. I would definitely recommend them to anyone looking for a trustworthy and high-quality car buying experience.</p>
                    </div>
                </section>
            </section>
        </>
    )
}
export default Review;