import { FaCar, FaDollarSign } from 'react-icons/fa';
const Features = () => {
    return (
        <>
            <section className="h-screen bg-gray-200 text-black p-8">
                <h1 className="text-4xl text-center">What We Do.</h1>
                <section className="w-full p-8">
                    <div>
                        <FaCar className='text-6xl text-gray-800' />
                        <h1 className="text-xl">Wide Range of Vehicle Options</h1>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Features