const Navbar = () => {
    return (
        <>
            <nav className="p-7 flex items-center justify-between bg-white">
                <div>
                    <h1 className="text-3xl text-black font-serif">Capital Cars</h1>
                </div>
                <ul className="flex justify-between space-x-11">
                    <li>Home</li>
                    <li>Inventory</li>
                    <li>Blog</li>
                </ul>
                <div>
                    <button className="px-8 py-2 rounded-xl bg-blue-500 text-white">Contact</button>
                </div>
            </nav>
        </>
    )
}

export default Navbar