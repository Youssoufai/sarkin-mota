'use client'

import AboutHero from "../components/AboutHero";
import Box from "../components/Box";
import Client from "../components/Client";
import Desc from "../components/Desc";
import Mission from "../components/Mission";
import Process from "../components/Process";

const Page = () => {
    return (
        <>
            <section className="h-[60vh] md:h-[75vh] bg-hero flex justify-center bg-center bg-no-repeat bg-cover text-white p-5 md:p-11"> {/* Adjusted height and padding for responsiveness */}
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl mt-10">About Us</h1> {/* Responsive font size */}
                </div>
            </section>
            <Desc />
            <Mission />
            <Box />
            <Client />
            <Process />
        </>
    )
}
export default Page;

