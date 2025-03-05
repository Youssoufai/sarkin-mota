'use client'
import React from 'react'
import { FaKey, FaRoad, FaTag, FaTrophy } from 'react-icons/fa'

const Curve = () => {
    return (
        <>
            <section className='h-full text-black p-5 md:p-14 space-y-5'>
                <div className="space-y-5 px-5 md:px-52 text-center">
                    <h1 className='text-3xl md:text-4xl font-semibold'>Didi Automobiles <span className="text-[#EA001E]">Features</span></h1>
                    <p className="text-base md:text-lg leading-relaxed">Discover the perfect vehicle for your journey with us! We specialize in delivering top-notch automobiles tailored to your needs—whether it's a rugged truck, a sleek sedan, or a reliable SUV. With cutting-edge features and an extensive collection of new and pre-owned vehicles, we make finding your dream car seamless.</p>
                </div>
                <section className='flex flex-col md:flex-row items-center space-y-5 md:space-y-0 md:space-x-8'>
                    <div className='space-y-4'>
                        <div className='flex space-x-3 hover:bg-gray-100 transition duration-300 p-4 rounded-lg'>
                            <div className='bg-[#EA001E] p-6 rounded-full shadow-lg'>
                                <FaTrophy className='text-6xl md:text-8xl ' />
                            </div>
                            <div>
                                <h1 className="text-xl md:text-2xl text-[#EA001E] font-bold">First Class Services</h1>
                                <p>
                                    Experience excellence every step of the way! Our Automobile Dealership is committed to providing first-class services that redefine your car-buying journey.
                                </p>
                            </div>
                        </div>
                        <div className='flex space-x-3 hover:bg-gray-100 transition duration-300 p-4 rounded-lg'>
                            <div className='bg-[#EA001E] p-6 rounded-full shadow-lg'>
                                <FaRoad className='text-6xl md:text-8xl ' />
                            </div>
                            <div>
                                <h1 className="text-xl md:text-2xl text-[#EA001E] font-bold">24/7 road assistance</h1>
                                <p>
                                    Experience excellence every step of the way! Our Automobile Dealership is committed to providing first-class services that redefine your car-buying journey.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='self-center'>
                        <img src="features-img.png" alt="features" className="rounded-lg w-full md:w-auto" />
                    </div>
                    <section className='text-left'>
                        <div className='space-y-4'>
                            <div className='flex space-x-3 hover:bg-gray-100 transition duration-300 p-4 rounded-lg'>
                                <div>
                                    <h1 className="text-xl md:text-2xl text-[#EA001E] font-bold">Quality at Minimum</h1>
                                    <p>
                                        Experience excellence every step of the way! Our Automobile Dealership is committed to providing first-class services that redefine your car-buying journey.
                                    </p>
                                </div>
                                <div className='bg-[#EA001E] p-6 rounded-full shadow-lg'>
                                    <FaTag className='text-6xl md:text-8xl ' />
                                </div>
                            </div>
                            <div className='flex space-x-3 hover:bg-gray-100 transition duration-300 p-4 rounded-lg'>
                                <div>
                                    <h1 className="text-xl md:text-2xl text-[#EA001E] font-bold">Free Pick-Up & Drop-Off</h1>
                                    <p>
                                        Experience excellence every step of the way! Our Automobile Dealership is committed to providing first-class services that redefine your car-buying journey.
                                    </p>
                                </div>
                                <div className='bg-[#EA001E] p-6 rounded-full shadow-lg'>
                                    <FaKey className='text-6xl md:text-8xl' />
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