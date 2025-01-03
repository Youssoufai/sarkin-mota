import { FaCalendar, FaThList } from 'react-icons/fa';
import '../globals.css'
const Box = () => {
    return (
        <>
            <section
                className="h-screen p-8 md:p-11 gap-8 text-white bg-gray-200 flex flex-col md:flex-row items-center justify-around"
            >
                <div
                    className="h-[300px] md:h-[430px] w-full md:w-[496px] rounded-md flex flex-col justify-end space-y-4 p-8 text-white bg-gray-800"
                >
                    <div>
                        <FaCalendar className='text-4xl text-[#EA001E]' />
                    </div>
                    <h1 className="text-2xl md:text-4xl">Book Test <span className="text-[#EA001E]">Drive</span></h1>

                    <div className='space-y-4'>
                        <p className="text-sm md:text-base">Get behind the wheel of your dream car before making it yours! Our hassle-free test drive booking system allows you to choose your preferred vehicle, schedule a time, and experience the ride firsthand. Whether it's a sedan, SUV, or truck, feel the comfort, performance, and style in real-time.</p>
                        <button className='rounded px-12 py-3 bg-[#EA001E]'>Schedule a test drive</button>
                    </div>
                </div>
                <div
                    className="h-[300px] md:h-[430px] w-full md:w-[496px] rounded-md flex flex-col justify-end space-y-4 p-8 bg-gray-800 text-white"
                >

                    <div>
                        <FaThList className='text-4xl text-[#EA001E]' />
                    </div>

                    <h1 className="text-2xl md:text-4xl">Explore our Premium <span className="text-[#EA001E]">Inventory</span></h1>

                    <div className=' space-y-4'>
                        <p className="text-sm md:text-base">Explore a curated selection of premium automobiles designed to match your lifestyle. From the latest models to reliable pre-owned vehicles, our inventory is tailored to suit every taste and budget. Use our advanced filtering options to browse by type, model, year, and more—finding your perfect ride has never been easier!</p>
                        <button className='rounded px-12 py-3 bg-[#EA001E]'>View our Inventory</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Box;

