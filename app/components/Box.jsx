import '../globals.css'
const Box = () => {
    return (
        <>
            <section
                className="h-screen p-11 text-white bg-gray-200 flex items-center justify-around"
            >
                <div
                    className="h-[400px] w-[496px] rounded-md flex flex-col justify-end space-y-4 p-4" id="gradient"
                >
                    <h1 className="text-4xl">Book a Test Drive</h1>

                    <p>Experience the thrill of driving your dream car.</p>

                </div>
                <div
                    className="h-[400px] w-[496px] rounded-md flex flex-col justify-end space-y-4 p-4" id="gradient2"
                >
                    <h1 className="text-4xl">View our Inventory</h1>

                    <p>Experience the thrill of driving your dream car.</p>

                </div>

            </section>
        </>
    )
}

export default Box;