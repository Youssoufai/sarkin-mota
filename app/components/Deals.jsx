// app/components/Deals.jsx
import { FaTachometerAlt, FaGasPump, FaCar } from 'react-icons/fa'; // Importing speedometer, fuel gauge, and car gear icons

const Deals = () => {
    return (
        <>
            <section className="bg-white text-black h-full p-5 md:p-11"> {/* Adjusted padding for smaller screens */}
                <div>
                    <h1 className="text-3xl md:text-4xl">Our Deals</h1> {/* Responsive font size */}
                </div>
                <section className="p-4 md:p-8 flex flex-col gap-4"> {/* Removed md:flex-row for better stacking on small screens */}
                    <div className="flex flex-col md:flex-row gap-3 bg-gray-200 p-4 md:p-8 rounded-lg w-full"> {/* Adjusted padding and width */}
                        <img src="lexus.jpg" className="h-[200px] md:h-[290px] rounded-lg w-[200px] md:w-[290px]" alt="" /> {/* Responsive image size */}
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
                            <div className='flex items-center justify-between'>
                                <p>₦21,000,000</p>
                                <p className='font-bold'>View Details</p>
                                <svg xmlns="http://www.w3.org/2000/svg" className="next" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M13.6109 0H5.05533C4.84037 0 4.66643 0.173943 4.66643 0.388901C4.66643 0.603859 4.84037 0.777802 5.05533 0.777802H12.6721L0.113697 13.3362C-0.0382246 13.4881 -0.0382246 13.7342 0.113697 13.8861C0.18964 13.962 0.289171 14 0.388666 14C0.488161 14 0.587656 13.962 0.663635 13.8861L13.222 1.3277V8.94447C13.222 9.15943 13.3959 9.33337 13.6109 9.33337C13.8259 9.33337 13.9998 9.15943 13.9998 8.94447V0.388901C13.9998 0.173943 13.8258 0 13.6109 0Z" fill="currentColor"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-3 bg-gray-200 p-4 md:p-8 rounded-lg w-full"> {/* Adjusted padding and width */}
                        <img src="gle.jpg" className="h-[200px] md:h-[290px] rounded-lg w-[200px] md:w-[290px]" alt="" /> {/* Responsive image size */}
                        <div className='space-y-2 flex flex-col justify-between'>
                            <h1 className="text-xl md:text-2xl font-bold">MERCEDES BENZ GLE450 2022</h1> {/* Responsive font size */}
                            <h1 className="text-sm md:text-base">2022 locally used MERCEDES BENZ GLE450 for sale</h1> {/* Responsive font size */}
                            <div className="flex gap-3 items-center">
                                <FaTachometerAlt className="text-2xl" /> <span>KM</span>
                            </div>
                            <div className="flex gap-3 items-center">
                                <FaGasPump className="text-2xl" /> <span>Petrol</span>
                            </div>
                            <div className="flex gap-3 items-center">
                                <FaCar className="text-2xl" /> <span>Automatic</span>
                            </div>
                            <div className='flex items-center justify-between'>
                                <p>₦90,000,000</p>
                                <p className='font-bold'>View Details</p>
                                <svg xmlns="http://www.w3.org/2000/svg" className="next" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M13.6109 0H5.05533C4.84037 0 4.66643 0.173943 4.66643 0.388901C4.66643 0.603859 4.84037 0.777802 5.05533 0.777802H12.6721L0.113697 13.3362C-0.0382246 13.4881 -0.0382246 13.7342 0.113697 13.8861C0.18964 13.962 0.289171 14 0.388666 14C0.488161 14 0.587656 13.962 0.663635 13.8861L13.222 1.3277V8.94447C13.222 9.15943 13.3959 9.33337 13.6109 9.33337C13.8259 9.33337 13.9998 9.15943 13.9998 8.94447V0.388901C13.9998 0.173943 13.8258 0 13.6109 0Z" fill="currentColor"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-3 bg-gray-200 p-4 md:p-8 rounded-lg w-full"> {/* Adjusted padding and width */}
                        <img src="range-rover.jpg" className="h-[200px] md:h-[290px] rounded-lg w-[200px] md:w-[290px]" alt="" /> {/* Responsive image size */}
                        <div className='space-y-2 flex flex-col justify-between'>
                            <h1 className="text-xl md:text-2xl font-bold">RANGE ROVER VELAR P300 2019</h1> {/* Responsive font size */}
                            <h1 className="text-sm md:text-base">2019 locally used Range Rover Velar P300 for sale</h1> {/* Responsive font size */}
                            <div className="flex gap-3 items-center">
                                <FaTachometerAlt className="text-2xl" /> <span>KM</span>
                            </div>
                            <div className="flex gap-3 items-center">
                                <FaGasPump className="text-2xl" /> <span>Petrol</span>
                            </div>
                            <div className="flex gap-3 items-center">
                                <FaCar className="text-2xl" /> <span>Automatic</span>
                            </div>
                            <div className='flex items-center justify-between'>
                                <p>₦85,000,000</p>
                                <p className='font-bold'>View Details</p>
                                <svg xmlns="http://www.w3.org/2000/svg" className="next" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M13.6109 0H5.05533C4.84037 0 4.66643 0.173943 4.66643 0.388901C4.66643 0.603859 4.84037 0.777802 5.05533 0.777802H12.6721L0.113697 13.3362C-0.0382246 13.4881 -0.0382246 13.7342 0.113697 13.8861C0.18964 13.962 0.289171 14 0.388666 14C0.488161 14 0.587656 13.962 0.663635 13.8861L13.222 1.3277V8.94447C13.222 9.15943 13.3959 9.33337 13.6109 9.33337C13.8259 9.33337 13.9998 9.15943 13.9998 8.94447V0.388901C13.9998 0.173943 13.8258 0 13.6109 0Z" fill="currentColor"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Deals;