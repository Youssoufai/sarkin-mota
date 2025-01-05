'use client'
import React from 'react'
import { FaCashRegister, FaDollarSign, FaExchangeAlt, FaMoneyBill, FaPercent, FaShoppingCart, FaTag } from 'react-icons/fa'

const Service = () => {
    return (
        <>

            <section className='h-full p-11 space-y-12'>
                <div>
                    <h1 className='text-5xl text-center'>Our Services</h1>
                </div>
                <section className='flex justify-between items-center text-center h-full gap-12'>
                    <div className='flex flex-col justify-center items-center flex-1 space-y-4 bg-gray-200 rounded-lg p-6'>
                        <FaTag className='text-6xl' />
                        <h1 className='text-3xl text-red font-bold'>Special Rates</h1>
                        <p>At <span className="font-bold text-red">Capital Cars</span>, we specialize in selling a diverse range of vehicles to meet your needs. Whether you're looking for a reliable sedan, a spacious SUV, or a powerful truck, we have the perfect car for you. Our dedicated team is committed to providing exceptional service and helping you find the right vehicle at the best price.</p>
                    </div>
                    <div className='flex flex-col justify-center items-center flex-1 space-y-4 bg-gray-200 rounded-lg p-6'>
                        <FaExchangeAlt className='text-6xl' />
                        <h1 className='text-3xl text-red font-bold'>Trade Up to Your Dream Car</h1>
                        <p>Are you ready for an upgrade? With our hassle-free swap program, <span className="text-red font-bold">Capital Cars</span> got you covered. You can trade in your current vehicle and drive away in the luxury car of your dreams! Our team will evaluate your vehicle's worth and offer you a competitive trade-in value, making it easier than ever to transition into a new ride.</p>
                    </div>
                    <div className='flex flex-col justify-center items-center flex-1 space-y-4 bg-gray-200 rounded-sm p-6'>
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