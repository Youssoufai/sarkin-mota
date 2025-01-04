'use client'

import AboutHero from "../components/AboutHero";
import Client from "../components/Client";
import Desc from "../components/Desc";
import Mission from "../components/Mission";
import Process from "../components/Process";

const Page = () => {
    return (
        <>
            <section className="h-[75vh] bg-hero flex justify-center items-center bg-center bg-no-repeat bg-cover text-white p-11">
                <div className="text-center">
                    <h1 className="text-6xl">About Us</h1>
                </div>

            </section>
            <Desc />
            <Mission />
            <Client />
            <Process />
        </>
    )
}

export default Page;

