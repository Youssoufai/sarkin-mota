'use client'
import React from 'react'
import ContactHero from '../components/ContactHero'
import ContactSection from '../components/ContactSection'
import ContactForm from '../components/ContactForm'

const page = () => {
    return (
        <>
            <section className='h-screen bg-hero bg-center bg-cover p-11'>
                <h1 className='text-white text-5xl text-center pt-12'>Contact Us</h1>
            </section>
            <ContactSection />
            <ContactForm />
        </>
    )
}

export default page