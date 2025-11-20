import React from 'react';

function SignupPage() {
    return (
        <div className="max-w-md mx-auto mt-12 p-6 border border-gray-200 rounded-lg font-sans">
            <h2 className="mb-4 text-2xl font-semibold">Sign Up</h2>
            <form onSubmit={(e) => { e.preventDefault(); /* handle submit */ }}>
                <div className="mb-3">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">Name</label>
                    <input id="name" name="name" type="text" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300" />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email</label>
                    <input id="email" name="email" type="email" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300" />
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">Password</label>
                    <input id="password" name="password" type="password" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300" />
                </div>

                <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300">Sign Up</button>
            </form>
        </div>
    );
}

export default SignupPage;