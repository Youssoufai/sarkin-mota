'use client'
import React from 'react'
import Service from '../components/Service'
import Client from '../components/Client'
import Review from '../components/Review'

const Page = () => {
  return (
    <>
      <section className="h-[75vh] bg-hero flex justify-center bg-center bg-no-repeat bg-cover text-white p-11">
        <div className="text-center">
          <h1 className="text-6xl mt-8">Our Services</h1>
        </div>
      </section>
      <Service />
      <Review />
      <Client />
    </>
  )
}

export default Page