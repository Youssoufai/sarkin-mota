'use client'
import React from 'react'
import { FaTrophy } from 'react-icons/fa'

const Curve = () => {
    return (
        <>
            <section className='h-screen text-black p-11'>
                <div className="space-y-5 px-52 text-center">
                    <h1 className='text-4xl text-center'>Capital Car Features</h1>
                    <p>Discover the perfect vehicle for your journey with us! We specialize in delivering top-notch automobiles tailored to your needs—whether it's a rugged truck, a sleek sedan, or a reliable SUV. With cutting-edge features and an extensive collection of new and pre-owned vehicles, we make finding your dream car seamless.</p>
                </div>
                <section>
                    <div className='flex space-x-3'>
                        <div className=' bg-[#EA001E] p-6 rounded-full'>
                            <FaTrophy className='text-8xl ' />
                        </div>
                        <div>
                            <h1 className="text-xl text-[#EA001E] font-bold">First Class Services</h1>
                            <p>
                                Experience excellence every step of the way! Our Automobile Dealership is committed to providing first-class services that redefine your car-buying journey. From personalized consultations to seamless booking and test-drive scheduling, we cater to your every need with unmatched professionalism.
                            </p>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Curve