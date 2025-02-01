import { FaAngleRight, FaEnvelope, FaEnvelopeOpen, FaInstagram, FaLinkedin, FaLocationArrow, FaPhone, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <section className="h-full p-5 md:p-20 bg-black text-white flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-12"> {/* Adjusted for responsiveness */}
                <section className="flex-1 space-y-5"> {/* Adjusted spacing for smaller screens */}
                    <h1 className="text-3xl md:text-5xl">About Us</h1> {/* Responsive font size */}
                    <p>Cars are not just our business, they are our very soul; they are the life-blood that cruises through our veins and the drumbeats that make our heart sing.</p>

                    <div className="flex flex-col md:flex-row gap-3"> {/* Stack input and button on small screens */}
                        <input type="text" className="py-3 p-4 text-black rounded-lg px-11" placeholder="Enter your email" />
                        <button className="text-red bg-white rounded-lg py-3 px-6">Submit</button>
                    </div>
                </section>
                <section className="flex-1 space-y-5 w-full"> {/* Adjusted spacing for smaller screens */}
                    <h1 className="text-3xl md:text-5xl">Quick Links</h1> {/* Responsive font size */}
                    <ul className="space-y-4 flex md:block flex-col items-start w-full">
                        <li className="flex space-x-4 items-center"> <FaAngleRight /> Home</li>
                        <li className="flex space-x-4 items-center"> <FaAngleRight /> About</li>
                        <li className="flex space-x-4 items-center"> <FaAngleRight /> Inventory</li>
                        <li className="flex space-x-4 items-center"> <FaAngleRight /> Services</li> {/* Fixed typo "Sevices" */}
                        <li className="flex space-x-4 items-center"> <FaAngleRight /> Contact</li>
                    </ul>
                </section>
                <section className="flex-1 space-y-5 w-full"> {/* Adjusted spacing for smaller screens */}
                    <h1 className="text-3xl md:text-5xl text-left md:text-center">Business Hours</h1> {/* Fixed typo "Buisness" and made responsive */}
                    <div className="space-y-5">
                        <div>
                            <h3>MON - FRIDAY:</h3>
                            <p>09.00 am to 07.00 pm</p>
                        </div>
                        <div>
                            <h3>SATURDAY:</h3>
                            <p>09.00 am to 05.00 pm</p> {/* Fixed typo "19.00 am" to "09.00 am" */}
                        </div>
                        <div>
                            <h3>VACATION:</h3>
                            <p>All Sunday is our vacation</p>
                        </div>
                    </div>
                </section>
                <section className="flex-1 space-y-5 w-full"> {/* Adjusted spacing for smaller screens */}
                    <h1 className="text-3xl md:text-5xl text-left md:text-center">Contact Info</h1> {/* Responsive font size */}
                    <ul className="space-y-4">
                        <li className="flex"> <FaLocationArrow className="mx-4" /> 123 STREET, Abuja, Nigeria.</li>
                        <li className="flex"> <FaEnvelope className="mx-4" /> Info@mangautos.com</li>
                        <li className="flex"> <FaPhone className="mx-4" /> +024355237</li>
                        <li className="flex"> <FaWhatsapp className="mx-4" /> +934847739</li>
                    </ul>
                    <ul className="flex space-x-12 text-4xl">
                        <li>
                            <FaInstagram />
                        </li>
                        <li>
                            <FaTwitter />
                        </li>
                        <li>
                            <FaLinkedin />
                        </li>
                    </ul>
                </section>
            </section>
        </>
    )
}
export default Footer;