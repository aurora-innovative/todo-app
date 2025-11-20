import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bg-white border-b">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-3">
                        <span className="text-2xl font-semibold text-gray-800">LOGO</span>
                    </div>

                    <div className="hidden md:flex md:items-center md:space-x-6">
                        <Link to={"/"} className="text-gray-700 hover:text-blue-600">Home</Link>
                        <a href="#" className="text-gray-700 hover:text-blue-600">About</a>
                        <Link to={"/signup"} className="bg-blue-600 text-white px-3 py-1 rounded-md">Signup</Link>
                        <Link to={"/login"} className="bg-blue-600 text-white px-3 py-1 rounded-md">Login</Link>
                    </div>

                    <div className="md:hidden">
                        <input id="nav-toggle" type="checkbox" className="peer hidden" />
                        <label htmlFor="nav-toggle" className="p-2 rounded-md inline-flex items-center justify-center text-gray-700 hover:bg-gray-100">
                            {/* hamburger / close icons toggle via peer */}
                            <svg className="w-6 h-6 block peer-checked:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg className="w-6 h-6 hidden peer-checked:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </label>
                    </div>
                </div>

                <div className="peer-checked:block hidden md:hidden">
                    <div className="pt-2 pb-4 space-y-1">
                        <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100">Home</a>
                        <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100">About</a>
                        <a href="#" className="block px-3 py-2 text-white bg-blue-600 rounded-md text-center mx-3">Signup</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;