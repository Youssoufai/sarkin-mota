'use client'
import React from 'react'
import { FaTrophy } from 'react-icons/fa'

const Curve = () => {
    return (
        <>
            <section className='h-full text-black p-11'>
                <div className="space-y-5 px-52 text-center">
                    <h1 className='text-4xl text-center font-semibold'>Capital Car Features</h1>
                    <p className="text-lg leading-relaxed">Discover the perfect vehicle for your journey with us! We specialize in delivering top-notch automobiles tailored to your needs—whether it's a rugged truck, a sleek sedan, or a reliable SUV. With cutting-edge features and an extensive collection of new and pre-owned vehicles, we make finding your dream car seamless.</p>
                </div>
                <section className='flex items-center space-x-8'>
                    <div className='space-y-4'>
                        <div className='flex space-x-3 hover:bg-gray-100 transition duration-300 p-4 rounded-lg'>
                            <div className='bg-[#EA001E] p-6 rounded-full shadow-lg'>
                                <FaTrophy className='text-8xl ' />
                            </div>
                            <div>
                                <h1 className="text-2xl text-[#EA001E] font-bold">First Class Services</h1>
                                <p>
                                    Experience excellence every step of the way! Our Automobile Dealership is committed to providing first-class services that redefine your car-buying journey.
                                </p>
                            </div>
                        </div>
                        <div className='flex space-x-3 hover:bg-gray-100 transition duration-300 p-4 rounded-lg'>
                            <div className='bg-[#EA001E] p-6 rounded-full shadow-lg'>
                                <FaTrophy className='text-8xl ' />
                            </div>
                            <div>
                                <h1 className="text-2xl text-[#EA001E] font-bold">24/7 road assistance</h1>
                                <p>
                                    Experience excellence every step of the way! Our Automobile Dealership is committed to providing first-class services that redefine your car-buying journey.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='self-center'>
                        <img src="features-img.png" alt="features" className="rounded-lg" />
                    </div>
                    <section className='text-left'>
                        <div className='space-y-4'>
                            <div className='flex space-x-3 hover:bg-gray-100 transition duration-300 p-4 rounded-lg'>
                                <div>
                                    <h1 className="text-2xl text-[#EA001E] font-bold">Quality at Minimum</h1>
                                    <p>
                                        Experience excellence every step of the way! Our Automobile Dealership is committed to providing first-class services that redefine your car-buying journey.
                                    </p>
                                </div>
                                <div className='bg-[#EA001E] p-6 rounded-full shadow-lg'>
                                    <FaTrophy className='text-8xl ' />
                                </div>
                            </div>
                            <div className='flex space-x-3 hover:bg-gray-100 transition duration-300 p-4 rounded-lg'>
                                <div>
                                    <h1 className="text-2xl text-[#EA001E] font-bold">Free Pick-Up & Drop-Off</h1>
                                    <p>
                                        Experience excellence every step of the way! Our Automobile Dealership is committed to providing first-class services that redefine your car-buying journey.
                                    </p>
                                </div>
                                <div className='bg-[#EA001E] p-6 rounded-full shadow-lg'>
                                    <FaTrophy className='text-8xl ' />
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </section>
        </>
    )
}

export default Curve