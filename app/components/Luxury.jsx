'use client'
import React from 'react'

const Luxury = () => {
    return (
        <>
            <section className='h-full bg-[#DE8A8A] p-11'>
                <div className='space-y-3'>
                    <h1 className="text-4xl font-bold text-center">Experience the Pinnacle of Luxury</h1>
                    <h2 className="text-xl text-center">Discover Unmatched Elegance and Performance</h2>
                </div>
                <section>
                    <div className='bg-gray-200 p-8 text-black space-y-4'>
                        <div>
                            <img src="lexus.jpg" className='h-[20rem] w-[22rem]' alt="lexus" />
                        </div>
                        <div className='flex space-x-6'>
                            <h1 className='text-2xl'>LEXUS GX460 2022</h1>
                            <button className='text-white px-8 py-2 bg-red rounded'>Test Drive</button>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Luxury