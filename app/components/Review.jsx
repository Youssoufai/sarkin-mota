'use client'
import React from 'react'
import { FaStar } from 'react-icons/fa';

const Review = () => {
    return (
        <>

            <section className='h-screen bg-gray-100 p-11 space-y-12'>
                <div className='space-y-5'>
                    <h1 className='text-center text-4xl'>Our Clients <span className="text-red">Review</span></h1>
                    <p className='text-center'>See How We've Made an Impact: Genuine Feedback from Our Happy Clients</p>
                </div>
                <section className='flex justify-between bg-gray-200'>
                    <div className='w-[545px] h-[270px] border rounded-t-lg'>
                        <div className='bg-[#878585] flex gap-9 p-4 rounded-t-lg'>
                            <img src="testimonial-3.jpg" className='rounded-full' alt="" />
                            <div>
                                <h1 className='text-2xl'>Person Name</h1>
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
                        <p className='p-8'>I had an amazing experience with <span className="text-red font-bold">Capital Cars</span>! The team was professional, attentive, and truly cared about my needs. I would highly recommend them to anyone looking for quality and reliability.</p>
                    </div>
                    <div className='w-[545px] h-[270px] border rounded-t-lg bg-gray-200'>
                        <div className='bg-[#878585] flex gap-9 p-4 rounded-t-lg'>
                            <img src="testimonial-3.jpg" className='rounded-full' alt="" />
                            <div>
                                <h1 className='text-2xl'>Person Name</h1>
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
                        <p className='p-8'>I had a wonderful experience with <span className="text-red font-bold">Capital Cars</span>! The team was attentive, knowledgeable, and truly prioritized my needs. I would definitely recommend them to anyone looking for a trustworthy and high-quality car buying experience.</p>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Review;