import { FaCar, FaDollarSign } from 'react-icons/fa';
const Features = () => {
    return (
        <>
            <section className="h-screen bg-gray-200 text-black p-8">
                <h1 className="text-4xl text-center">What We Do.</h1>
                <section className="w-full p-8 flex items-center">
                    <div className='space-y-3 flex'>
                        <FaCar className='text-6xl text-gray-800' />
                        <div>
                            <h1 className="text-xl">Wide Range of Vehicle Options</h1>
                            <p>We offer a variety of new and pre-owned vehicles, including different makes, models, and price ranges to cater to diverse customer needs.</p>
                        </div>
                    </div>
                    <div className='space-y-3 flex'>
                        <FaCar className='text-6xl text-gray-800' />
                        <div>
                            <h1 className="text-xl">Wide Range of Vehicle Options</h1>
                            <p>We offer a variety of new and pre-owned vehicles, including different makes, models, and price ranges to cater to diverse customer needs.</p>
                        </div>
                    </div>
                    <div className='space-y-3 flex'>
                        <FaCar className='text-6xl text-gray-800' />
                        <div>
                            <h1 className="text-xl">Wide Range of Vehicle Options</h1>
                            <p>We offer a variety of new and pre-owned vehicles, including different makes, models, and price ranges to cater to diverse customer needs.</p>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Features