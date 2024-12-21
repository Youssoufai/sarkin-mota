'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Main Navbar */}
            <nav className="p-5 md:p-6 flex items-center justify-between bg-white shadow-md fixed w-full z-50">
                {/* Logo */}
                <div>
                    <h1 className="text-2xl md:text-3xl text-black font-serif">Capital Cars</h1>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex justify-between space-x-6">
                    <li className="cursor-pointer hover:text-gray-600 transition duration-200">Home</li>
                    <li className="cursor-pointer hover:text-gray-600 transition duration-200">About</li>
                    <li className="cursor-pointer hover:text-gray-600 transition duration-200">Inventory</li>
                    <li className="cursor-pointer hover:text-gray-600 transition duration-200">Blog</li>
                </ul>

                {/* Hamburger Menu Button */}
                <div className="md:hidden">
                    <button
                        className="text-black focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? '✖️' : '☰'}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute top-16 left-0 w-full bg-white p-5 shadow-lg z-40"
                >
                    <ul className="flex flex-col space-y-4 text-center">
                        <li className="cursor-pointer hover:text-gray-600 transition duration-200">Home</li>
                        <li className="cursor-pointer hover:text-gray-600 transition duration-200">About</li>
                        <li className="cursor-pointer hover:text-gray-600 transition duration-200">Inventory</li>
                        <li className="cursor-pointer hover:text-gray-600 transition duration-200">Blog</li>
                    </ul>
                </motion.div>
            )}
        </>
    );
};

export default Navbar;
