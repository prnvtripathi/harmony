import Link from 'next/link';
import React from 'react';
import { Advent_Pro } from 'next/font/google'

const adventPro = Advent_Pro({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const Navbar = () => {
    return (
        <nav className="flex justify-around items-center p-3 mt-6">
            <div className={`p-2 text-2xl font-bold ${adventPro.className}`}>
                <Link className="hover:underline" href="/">
                    Harmony
                </Link>
            </div>
            <div className="">
                <div className="flex justify-between items-center gap-8">
                    <Link className="navbar-item" href="/">
                        Explore
                    </Link>
                    <Link className="navbar-item" href="/">
                        Register
                    </Link>
                    <Link className="navbar-item" href="/">
                        About
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
