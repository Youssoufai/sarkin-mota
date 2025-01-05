'use client'
import React from 'react'
import ContactHero from '../components/ContactHero'
import ContactSection from '../components/ContactSection'
import ContactForm from '../components/ContactForm'

const Page = () => { // Changed 'page' to 'Page' to follow React component naming conventions
    return (
        <>
            <section className='h-screen bg-hero bg-center bg-cover p-5 md:p-11'> {/* Adjusted padding for responsiveness */}
                <h1 className='text-white text-4xl md:text-5xl text-center pt-12'>Contact Us</h1> {/* Responsive font size */}
            </section>
            <ContactSection />
            <ContactForm />
        </>
    )
}
export default Page;