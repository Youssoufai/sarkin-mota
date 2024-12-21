import '../globals.css'
const Box = () => {
    return (
        <>
            <section
                className="h-screen p-8 md:p-11 gap-8 text-white bg-gray-200 flex flex-col md:flex-row items-center justify-around"
            >
                <div
                    className="h-[300px] md:h-[400px] w-full md:w-[496px] rounded-md flex flex-col justify-end space-y-4 p-4" id="gradient"
                >
                    <h1 className="text-2xl md:text-4xl">Book a Test Drive</h1>

                    <div className='flex gap-2 items-center'>
                        <p className="text-sm md:text-base">Experience the thrill of driving your dream car.</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="next" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M13.6109 0H5.05533C4.84037 0 4.66643 0.173943 4.66643 0.388901C4.66643 0.603859 4.84037 0.777802 5.05533 0.777802H12.6721L0.113697 13.3362C-0.0382246 13.4881 -0.0382246 13.7342 0.113697 13.8861C0.18964 13.962 0.289171 14 0.388666 14C0.488161 14 0.587656 13.962 0.663635 13.8861L13.222 1.3277V8.94447C13.222 9.15943 13.3959 9.33337 13.6109 9.33337C13.8259 9.33337 13.9998 9.15943 13.9998 8.94447V0.388901C13.9998 0.173943 13.8258 0 13.6109 0Z" fill="currentColor"></path>
                        </svg>
                    </div>
                </div>
                <div
                    className="h-[300px] md:h-[400px] w-full md:w-[496px] rounded-md flex flex-col justify-end space-y-4 p-4" id="gradient2"
                >
                    <h1 className="text-2xl md:text-4xl">View our Inventory</h1>

                    <div className='flex text-white gap-2 items-center'>
                        <p className="text-sm md:text-base">Experience the thrill of driving your dream car.</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="next text-white" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M13.6109 0H5.05533C4.84037 0 4.66643 0.173943 4.66643 0.388901C4.66643 0.603859 4.84037 0.777802 5.05533 0.777802H12.6721L0.113697 13.3362C-0.0382246 13.4881 -0.0382246 13.7342 0.113697 13.8861C0.18964 13.962 0.289171 14 0.388666 14C0.488161 14 0.587656 13.962 0.663635 13.8861L13.222 1.3277V8.94447C13.222 9.15943 13.3959 9.33337 13.6109 9.33337C13.8259 9.33337 13.9998 9.15943 13.9998 8.94447V0.388901C13.9998 0.173943 13.8258 0 13.6109 0Z" fill="currentColor"></path>
                        </svg>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Box;

