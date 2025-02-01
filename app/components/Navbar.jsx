'use client'
import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Link from 'next/link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { type: "spring", stiffness: 300, damping: 30 },
        },
        exit: { opacity: 0, x: -20, transition: { duration: 0.2 } },
    };
    return (
        <>
            <nav className="bg-black text-white p-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl md:text-5xl font-bold">Manga <span className="text-[#EA001E]">Autos</span></h1>
                    <button
                        className="md:hidden text-2xl"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        ☰
                    </button>
                    <ul className="hidden md:flex items-center gap-8">
                        <li>
                            <Link href="#">Home</Link>
                        </li>
                        <li>
                            <Link href="#">About</Link>
                        </li>
                        <li>
                            <Link href="#">Inventory</Link>
                        </li>
                        <li>
                            <Link href="#">Services</Link>
                        </li>
                        <li>
                            <Link href="#">Contacts</Link>
                        </li>
                    </ul>
                </div>
                <AnimatePresence>
                    {isOpen && (
                        <motion.ul
                            className="md:hidden flex flex-col gap-4 mt-4"
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={menuVariants}
                        >
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="#">About</Link>
                            </li>
                            <li>
                                <Link href="#">Inventory</Link>
                            </li>
                            <li>
                                <Link href="#">Services</Link>
                            </li>
                            <li>
                                <Link href="#">Contacts</Link>
                            </li>
                        </motion.ul>
                    )}
                </AnimatePresence>
            </nav>
        </>
    );
};

export default Navbar;
