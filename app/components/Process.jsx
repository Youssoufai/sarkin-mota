'use client'
const Process = () => {
    return (
        <>
            <section className="h-full p-5 md:p-11"> {/* Adjusted padding for responsiveness */}
                <div className="space-y-3">
                    <h1 className="text-center text-3xl md:text-4xl">Take the Wheel of Luxury <span className="text-red">Today</span></h1> {/* Responsive font size */}
                    <h2 className="text-2xl md:text-3xl font-bold text-center">Your Path to Luxury Awaits – Follow These Simple Steps!</h2> {/* Responsive font size */}
                </div>
                <section className="flex flex-col md:flex-row gap-8 items-center h-full p-5 md:p-11"> {/* Adjusted layout for responsiveness */}
                    <div className="bg-gray-700 w-full md:w-[330px] h-[210px] p-6 text-left rounded"> {/* Made width responsive */}
                        <h1 className="text-xl md:text-2xl text-red font-bold">Explore Our Exclusive Inventory</h1> {/* Responsive font size */}
                        <p className="text-white">Discover a curated selection of luxury vehicles tailored to your taste.</p>
                    </div>
                    <div className="bg-gray-700 w-full md:w-[330px] h-[210px] p-6 text-left rounded"> {/* Made width responsive */}
                        <h1 className="text-xl md:text-2xl text-red font-bold">Select Your Dream Car</h1> {/* Responsive font size */}
                        <p className="text-white">Choose the perfect car that fits your lifestyle and preferences.</p>
                    </div>
                    <div className="bg-gray-700 w-full md:w-[330px] h-[210px] p-6 text-left rounded"> {/* Made width responsive */}
                        <h1 className="text-xl md:text-2xl text-red font-bold">Schedule Your Test Drive</h1> {/* Responsive font size */}
                        <p className="text-white">Experience the thrill of driving your chosen vehicle firsthand.</p>
                    </div>
                    <div className="bg-gray-700 w-full md:w-[330px] h-[210px] p-6 text-left rounded"> {/* Made width responsive */}
                        <h1 className="text-xl md:text-2xl text-red font-bold">Enjoy the Ride</h1> {/* Responsive font size */}
                        <p className="text-white">Revel in the luxury and performance of your new car!</p>
                    </div>
                </section>
            </section>
        </>
    )
}
export default Process