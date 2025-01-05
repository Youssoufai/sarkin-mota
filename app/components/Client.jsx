'use client';
import React from 'react'

const Client = () => {
    return (
        <>
            <section className='h-screen bg-client text-white flex flex-col md:flex-row justify-around items-center p-5'> {/* Added padding and changed to flex-col for smaller screens */}
                <div className='space-y-2 text-center'> {/* Centered text for better alignment */}
                    <h1 className='text-5xl md:text-6xl'>500+</h1> {/* Responsive font size */}
                    <p className='text-2xl md:text-3xl'>Happy Clients</p> {/* Responsive font size */}
                </div>
                <div className='space-y-2 text-center'> {/* Centered text for better alignment */}
                    <h1 className='text-5xl md:text-6xl'>200+</h1> {/* Responsive font size */}
                    <p className='text-2xl md:text-3xl'>Number of Cars</p> {/* Responsive font size */}
                </div>
                <div className='space-y-2 text-center'> {/* Centered text for better alignment */}
                    <h1 className='text-5xl md:text-6xl'>5+</h1> {/* Responsive font size */}
                    <p className='text-2xl md:text-3xl'>Car Centers</p> {/* Responsive font size */}
                </div>
            </section>
        </>
    )
}
export default Client