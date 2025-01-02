const Footer = () => {
    return (
        <>
            <section className="h-screen bg-black text-white flex flex-col items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold">Stay Connected</h2>
                    <p className="mt-2">Follow us on our social media channels</p>
                </div>
                <div className="flex space-x-4 mt-4">
                    <li href="#" className="text-blue-500">Facebook</li>
                    <li href="#" className="text-blue-400">Twitter</li>
                    <li href="#" className="text-pink-500">Instagram</li>
                </div>
                <div className="mt-6">
                    <p className="text-sm">© 2023 Capital Cars. All rights reserved.</p>
                </div>
            </section>
        </>
    )
}
export default Footer;