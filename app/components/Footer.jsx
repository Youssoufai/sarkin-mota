import { FaAngleRight, FaEnvelope, FaEnvelopeOpen, FaInstagram, FaLinkedin, FaLocationArrow, FaPhone, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <section className="h-full p-20 bg-black text-white flex  items-center space-x-12">
                <section className="flex-1 space-y-10">
                    <h1 className="text-5xl">About Us</h1>
                    <p>Cars are not just our business, they are our
                        very soul; they are the life-blood that cruises
                        through our veins and the drumbeats that make our heart sing.</p>

                    <input type="text" className="py-2 px-8" placeholder="Enter you email" />
                </section>
                <section className="flex-1 space-y-10">
                    <h1 className="text-5xl">Quick Links</h1>
                    <ul className="space-y-4">
                        <li className="flex space-x-4 items-center"> <FaAngleRight /> Home</li>
                        <li className="flex space-x-4 items-center"> <FaAngleRight /> About</li>
                        <li className="flex space-x-4 items-center"> <FaAngleRight /> Inventory</li>
                        <li className="flex space-x-4 items-center"> <FaAngleRight /> Sevices</li>
                        <li className="flex space-x-4 items-center"> <FaAngleRight /> Contact</li>
                    </ul>
                </section>
                <section className="flex-1 space-y-10">
                    <h1 className="text-5xl">Buisness Hours</h1>

                    <div className="space-y-5">
                        <div>
                            <h3>MON - FRIDAY:</h3>
                            <p>09.00 am to 07.00 pm</p>
                        </div>
                        <div>
                            <h3>SATURDAY:</h3>
                            <p>19.00 am to 05.00 pm</p>
                        </div>
                        <div>
                            <h3>VACATION:</h3>
                            <p>All Sunday is our vacation</p>
                        </div>
                    </div>

                </section>
                <section className="flex-1 space-y-10">
                    <h1 className="text-5xl">Contact Info</h1>
                    <ul className="space-y-4">
                        <li className="flex"> <FaLocationArrow className="mx-4" /> 123 STREET, Abuja, Nigeria.</li>
                        <li className="flex"> <FaEnvelope className="mx-4" /> Info@capitalcars.com</li>
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