'use client';
import React from 'react'

const Client = () => {
    return (
        <>
            <section className='h-screen bg-client text-white flex justify-around items-center'>
                <div className='space-y-5'>
                    <h1 className='text-6xl'>500+</h1>
                    <p className='text-3xl'>Happy Clients</p>
                </div>
                <div className='space-y-5'>
                    <h1 className='text-6xl'>200+</h1>
                    <p className='text-3xl'>Number of Cars</p>
                </div>
                <div className='space-y-5'>
                    <h1 className='text-6xl'>5+</h1>
                    <p className='text-3xl'>Car Centers</p>
                </div>
            </section>
        </>
    )
}

export default Client