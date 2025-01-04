import { FaLocationArrow } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <section className="h-full p-11 bg-black text-white flex flex-col items-center justify-center">
                <section>
                    <h1 className="text-5xl">About Us</h1>
                    <p>Cars are not just our business, they are our
                        very soul; they are the life-blood that cruises
                        through our veins and the drumbeats that make our heart sing.
                        At Pivot Motors, we deliver everything related to brand new vehicles, which
                        includes: selling, servicing, accessorizing, expert consulting, and lots more. So, when next you’re searching for the best car dealers in Lagos and Nigeria at
                        large, consider stopping by at Pivot Motors show room for a touch of luxury.</p>

                    <input type="text" placeholder="Enter you email" />
                </section>
                <section>
                    <h1 className="text-5xl">Quick Links</h1>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Inventory</li>
                        <li>Sevices</li>
                        <li>Contact</li>
                    </ul>
                </section>
                <section>
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
                <section>
                    <h1 className="text-5xl">Contact Info</h1>
                    <ul>
                        <li> <FaLocationArrow /> 123 STREET, Abuja, Nigeria.</li>
                        <li>Info@capitalcars.com</li>
                        <li>+024355237</li>
                        <li>+934847739</li>
                    </ul>
                </section>
            </section>
        </>
    )
}
export default Footer;