// app/components/Deals.jsx
import { FaTachometerAlt, FaGasPump, FaCar } from 'react-icons/fa'; // Importing speedometer, fuel gauge, and car gear icons

const Deals = () => {

    return (
        <>
            <section className="bg-white text-black h-full p-5 md:p-11"> {/* Adjusted padding for smaller screens */}
                <div>
                    <h1 className="text-3xl md:text-4xl">Our Deals</h1> {/* Responsive font size */}
                </div>
                <section className="p-4 md:p-8 flex items-center gap-4"> {/* Removed md:flex-row for better stacking on small screens */}
                    <div className="flex flex-col md:flex-col gap-3 bg-gray-400 text-white p-4 md:p-8 rounded-lg w-[550px] h-full"> {/* Adjusted padding and width */}
                        <img src="lexus.jpg" className="h-[200px] md:h-[400px] rounded-lg w-full md:w-full" alt="" /> {/* Responsive image size */}
                        <div className='space-y-2 flex flex-col justify-between'>

                            <h1 className="text-xl md:text-2xl font-bold">LEXUS GX460 2022</h1> {/* Responsive font size */}
                            <h1 className="text-sm md:text-base">2022 locally used LEXUS GX460 for sale</h1> {/* Responsive font size */}
                            <div className="flex gap-3 items-center">
                                <FaTachometerAlt className="text-2xl" /> <span>KM</span>
                            </div>
                            <div className="flex gap-3 items-center">
                                <FaGasPump className="text-2xl" /> <span>Petrol</span>
                            </div>
                            <div className="flex gap-3 items-center">
                                <FaCar className="text-2xl" /> <span>Automatic</span>
                            </div>
                        </div>
                        <div className='flex flex-col space-y-8'>
                            <button className='text-black text-xl bg-white rounded-full px-11 py-2'>View our Inventory</button>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-col gap-3 bg-gray-400 text-white p-4 md:p-8 rounded-lg w-[550px] h-full"> {/* Adjusted padding and width */}
                        <img src="gle.jpg" className="h-[200px] md:h-[400px] rounded-lg w-full md:w-full" alt="" /> {/* Responsive image size */}
                        <div className='space-y-2 flex flex-col justify-between'>

                            <h1 className="text-xl md:text-2xl font-bold">MERCEDEDS BENZ GLE450 2022</h1> {/* Responsive font size */}
                            <h1 className="text-sm md:text-base">2022 foreign used GLE450 2022 for sale</h1> {/* Responsive font size */}
                            <div className="flex gap-3 items-center">
                                <FaTachometerAlt className="text-2xl" /> <span>KM</span>
                            </div>
                            <div className="flex gap-3 items-center">
                                <FaGasPump className="text-2xl" /> <span>Petrol</span>
                            </div>
                            <div className="flex gap-3 items-center">
                                <FaCar className="text-2xl" /> <span>Automatic</span>
                            </div>
                        </div>
                        <div className='flex flex-col space-y-8'>
                            <button className='text-black text-xl bg-white rounded-full px-11 py-2'>View our Inventory</button>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-col gap-3 bg-gray-400 text-white p-4 md:p-8 rounded-lg w-[550px] h-full"> {/* Adjusted padding and width */}
                        <img src="range-rover.jpg" className="h-[200px] md:h-[400px] rounded-lg w-full md:w-full" alt="" /> {/* Responsive image size */}
                        <div className='space-y-2 flex flex-col justify-between'>

                            <h1 className="text-xl md:text-2xl font-bold">LEXUS GX460 2022</h1> {/* Responsive font size */}
                            <h1 className="text-sm md:text-base">2022 locally used LEXUS GX460 for sale</h1> {/* Responsive font size */}
                            <div className="flex gap-3 items-center">
                                <FaTachometerAlt className="text-2xl" /> <span>KM</span>
                            </div>
                            <div className="flex gap-3 items-center">
                                <FaGasPump className="text-2xl" /> <span>Petrol</span>
                            </div>
                            <div className="flex gap-3 items-center">
                                <FaCar className="text-2xl" /> <span>Automatic</span>
                            </div>
                        </div>
                        <div className='flex flex-col space-y-8'>
                            <button className='text-black text-xl bg-white rounded-full px-11 py-2'>View our Inventory</button>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Deals;