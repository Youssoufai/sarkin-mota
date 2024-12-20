const Navbar = () => {
    return (
        <>
            <nav className="p-11 flex items-center justify-between bg-white">
                <div>
                    <h1 className="text-3xl text-black font-serif">Capital Cars</h1>
                </div>
                <ul className="flex justify-between space-x-6">
                    <li>Home</li>
                    <li>About</li>
                    <li>Inventory</li>
                    <li>Blog</li>
                </ul>

            </nav>
        </>
    )
}

export default Navbar