// app/components/Deals.jsx
import { FaTachometerAlt, FaGasPump, FaCar } from 'react-icons/fa'; // Importing speedometer, fuel gauge, and car gear icons

const Deals = () => {
    return (
        <>
            <section className="bg-white text-black h-full p-5 md:p-11">
                <div>
                    <h1 className="text-3xl md:text-4xl">Our Deals</h1>
                </div>
                <section className="p-4 md:p-8 flex flex-col md:flex-row items-center gap-4"> {/* Changed to md:flex-row for better layout on larger screens */}
                    <div className="flex flex-col gap-3 bg-gray-400 text-white p-4 md:p-8 rounded-lg w-full md:w-[550px] h-full"> {/* Adjusted width to be full on small screens */}
                        <img src="range-rover-car.jpg" className="h-full md:h-[350px] rounded-lg w-full" alt="Range Rover" /> {/* Responsive image size */}
                        <div className='space-y-2 flex flex-col justify-between'>
                            <h1 className="text-xl md:text-2xl font-bold">Range Rover P530</h1>
                            <h1 className="text-sm md:text-base">2023 Foreign used Range Rover P530 for sale</h1>
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
                            <button className='text-red text-xl bg-white rounded-full px-11 py-2'>View our Inventory</button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 bg-gray-400 text-white p-4 md:p-8 rounded-lg w-full md:w-[550px] h-full"> {/* Adjusted width to be full on small screens */}
                        <img src="lexus-car.jpg" className="h-full md:h-[350px] rounded-lg w-full" alt="Mercedes Benz GLE450" /> {/* Responsive image size */}
                        <div className='space-y-2 flex flex-col justify-between'>
                            <h1 className="text-xl md:text-2xl font-bold">Lexus IS250 2014</h1>
                            <h1 className="text-sm md:text-base">2014 Foreign used Lexus IS250 for sale</h1>
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
                            <button className='text-red text-xl bg-white rounded-full px-11 py-2'>View our Inventory</button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 bg-gray-400 text-white p-4 md:p-8 rounded-lg w-full md:w-[550px] h-full"> {/* Adjusted width to be full on small screens */}
                        <img src="cadillac-car.jpg" className="h-full md:h-[350px] rounded-lg w-full" alt="Range Rover" /> {/* Responsive image size */}
                        <div className='space-y-2 flex flex-col justify-between'>
                            <h1 className="text-xl md:text-2xl font-bold">Cadillac Escalade 2021</h1>
                            <h1 className="text-sm md:text-base">2021 Foreign used Presidential Cadillac Escalade 600 for sale</h1>
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
                            <button className='text-red text-xl bg-white rounded-full px-11 py-2'>View our Inventory</button>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}
export default Deals;