import { FaEnvelope, FaEnvelopeOpen, FaInstagram, FaLinkedin, FaLocationArrow, FaPhone, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <section className="h-full p-11 bg-black text-white flex  items-center space-x-12">
                <section className="flex-1">
                    <h1 className="text-5xl">About Us</h1>
                    <p>Cars are not just our business, they are our
                        very soul; they are the life-blood that cruises
                        through our veins and the drumbeats that make our heart sing.</p>

                    <input type="text" placeholder="Enter you email" />
                </section>
                <section className="flex-1">
                    <h1 className="text-5xl">Quick Links</h1>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Inventory</li>
                        <li>Sevices</li>
                        <li>Contact</li>
                    </ul>
                </section>
                <section className="flex-1">
                    <h1 className="text-5xl">Buisness Hours</h1>

                    <div>
                        <div>
                            <h3>MON - FRIDAY:</h3>
                            <p>09.00 am to 07.00 pm</p>
                        </div>
                        <div>
                            <h3>SATURDAY:</h3>
                            <p>19.00 am to 05.00 pm</p>
                        </div>
                        <div>
                            <h3>VACATION</h3>
                            <p>All Sunday is our vacation</p>
                        </div>
                    </div>

                </section>
                <section className="flex-1">
                    <h1 className="text-5xl">Contact Info</h1>
                    <ul>
                        <li> <FaLocationArrow /> 123 STREET, Abuja, Nigeria.</li>
                        <li> <FaEnvelope /> Info@capitalcars.com</li>
                        <li> <FaPhone /> +024355237</li>
                        <li> <FaWhatsapp /> +934847739</li>
                    </ul>
                    <ul className="flex">
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