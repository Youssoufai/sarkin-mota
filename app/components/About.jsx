const About = () => {
    return (
        <>
            <section className="h-screen p-11 space-y-7">
                <div className="space-y-4">
                    <h1 className="text-4xl">We deal with a wide range of brands</h1>
                    <p>Experience the Freedom of Choice with Our Extensive Range of Premium Cars, Tailored to Suit Every Style and Need!</p>
                </div>
                <section className="flex">
                    <div>
                        <img src="toyota.jpeg" className="h-[100px] w-[100px]" alt="toyota" />
                    </div>
                    <div>
                        <img src="bm.webp" alt="bmw" />
                    </div>
                </section>
            </section>
        </>
    )
}

export default About;