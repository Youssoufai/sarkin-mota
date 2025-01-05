'use client'
import React from 'react'
import Service from '../components/Service'
import Client from '../components/Client'
import Review from '../components/Review'

const Page = () => {
  return (
    <>
      <section className="h-[60vh] md:h-[75vh] bg-hero flex flex-col justify-center bg-center bg-no-repeat bg-cover text-white p-5 md:p-11"> {/* Adjusted height and padding for responsiveness */}
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl mt-8">Our Services</h1> {/* Responsive font size */}
        </div>
      </section>
      <Service />
      <Review />
      <Client />
    </>
  )
}
export default Page