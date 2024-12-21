const About = () => {
    return (
        <>
            <section className="h-screen p-14 bg-gray-200 space-y-7">
                <div className="space-y-4">
                    <h1 className="text-4xl">We deal with a wide range of brands</h1>
                    <p>Experience the Freedom of Choice with Our Extensive Range of Premium Cars, Tailored to Suit Every Style and Need!</p>
                </div>
                <section className="flex items-center pt-20 space-x-3">
                    <div>
                        <img src="toyota2.png" className="h-[100px] w-[200px]" alt="toyota" />
                    </div>
                    <div>
                        <img src="mercedes2.png" className="h-[100px] w-[200px]" alt="bmw" />
                    </div>
                    <div>
                        <img src="mitsubishi.png" className="h-[100px] w-[200px]" alt="bmw" />
                    </div>
                    <div>
                        <img src="kia2.png" className="h-[100px] w-[200px]" alt="bmw" />
                    </div>
                    <div>
                        <img src="porsche.png" className="h-[100px] w-[200px]" alt="bmw" />
                    </div>
                    <div>
                        <img src="nissan2.png" className="h-[100px] w-[200px]" alt="bmw" />
                    </div>
                    <div>
                        <img src="cadillac.png" className="h-[100px] w-[200px]" alt="bmw" />
                    </div>
                </section>
            </section>
        </>
    )
}

export default About;