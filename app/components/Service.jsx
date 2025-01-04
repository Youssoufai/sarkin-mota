'use client'
import React from 'react'
import { FaCashRegister, FaDollarSign, FaExchangeAlt, FaMoneyBill, FaPercent, FaShoppingCart, FaTag } from 'react-icons/fa'

const Service = () => {
    return (
        <>

            <section className='h-full p-11 space-y-7'>
                <div>
                    <h1 className='text-5xl text-center'>Our Services</h1>
                </div>
                <section className='flex justify-between items-center text-center h-full gap-12'>
                    <div className='flex flex-col justify-center items-center flex-1 space-y-4'>
                        <FaTag className='text-6xl' />
                        <h1 className='text-3xl text-red font-bold'>Special Rates</h1>
                        <p>Are you ready for an upgrade? With our hassle-free swap program, you can trade in your current vehicle and drive away in the luxury car of your dreams! Our team will evaluate your vehicle's worth and offer you a competitive trade-in value, making it easier than ever to transition into a new ride.</p>
                    </div>
                    <div className='flex flex-col justify-center items-center flex-1 space-y-4'>
                        <FaExchangeAlt className='text-6xl' />
                        <h1 className='text-3xl text-red font-bold'>Trade Up to Your Dream Car</h1>
                        <p>Are you ready for an upgrade? With our hassle-free swap program, you can trade in your current vehicle and drive away in the luxury car of your dreams! Our team will evaluate your vehicle's worth and offer you a competitive trade-in value, making it easier than ever to transition into a new ride.</p>
                    </div>
                    <div className='flex flex-col justify-center items-center flex-1 space-y-4'>
                        <FaShoppingCart className='text-6xl' />
                        <h1 className='text-3xl text-red font-bold'>Turn Your Car Into Cash</h1>
                        <p>Looking to sell your car? We make it simple and rewarding! Our dealership offers a seamless selling process that puts cash in your pocket quickly. Whether your car is in pristine condition or needs a little TLC, we’re interested!</p>
                    </div>
                </section>
            </section>

        </>
    )
}

export default Service