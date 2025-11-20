import React from 'react';

function HomePage() {
    return (
        <>
            <main className="bg-gray-50">
                <section className="max-w-7xl mx-auto px-6 py-16 lg:py-24 flex flex-col lg:flex-row items-center gap-12">
                    <div className="w-full lg:w-1/2">
                        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
                            Discover products you'll love — curated, affordable, delivered fast.
                        </h1>
                        <p className="mt-6 text-gray-600 max-w-xl">
                            Shop top categories and trending picks with exclusive deals every day. Free shipping on orders over $50 and hassle-free returns.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <a href="#" className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700">
                                Shop Now
                            </a>
                            <a href="#" className="inline-flex items-center justify-center px-6 py-3 border border-gray-200 rounded-md text-gray-700 hover:bg-gray-100">
                                Browse Collections
                            </a>
                        </div>

                        <ul className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <li className="flex items-center gap-3">
                                <span className="inline-flex items-center justify-center w-10 h-10 bg-white rounded-md shadow">
                                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18v4H3zM3 10h18v11H3z" />
                                    </svg>
                                </span>
                                <div>
                                    <div className="text-sm font-medium text-gray-900">Wide Selection</div>
                                    <div className="text-xs text-gray-500">Thousands of products</div>
                                </div>
                            </li>

                            <li className="flex items-center gap-3">
                                <span className="inline-flex items-center justify-center w-10 h-10 bg-white rounded-md shadow">
                                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M12 3v18" />
                                    </svg>
                                </span>
                                <div>
                                    <div className="text-sm font-medium text-gray-900">Fast Delivery</div>
                                    <div className="text-xs text-gray-500">2-5 day shipping</div>
                                </div>
                            </li>

                            <li className="flex items-center gap-3">
                                <span className="inline-flex items-center justify-center w-10 h-10 bg-white rounded-md shadow">
                                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.567-3 3.5S10.343 15 12 15s3-1.567 3-3.5S13.657 8 12 8z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v2M12 19v2" />
                                    </svg>
                                </span>
                                <div>
                                    <div className="text-sm font-medium text-gray-900">Secure Payments</div>
                                    <div className="text-xs text-gray-500">Encrypted checkout</div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <div className="relative">
                            <div className="bg-gradient-to-br from-indigo-100 to-pink-50 rounded-2xl p-6 shadow-lg">
                                <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&q=80" alt="Featured product" className="w-full rounded-xl object-cover h-80" />
                            </div>

                            <div className="absolute -bottom-6 left-6 bg-white rounded-xl shadow-lg p-4 w-80 transform -translate-y-1/2">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="text-sm text-gray-500">Featured</div>
                                        <div className="text-lg font-semibold text-gray-900">Everyday Essentials Bundle</div>
                                    </div>
                                    <div className="text-indigo-600 font-bold text-lg">$79</div>
                                </div>
                                <div className="mt-3 text-sm text-gray-600">Limited time offer — top-rated picks for everyday life.</div>
                                <div className="mt-4 flex items-center gap-3">
                                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-md text-sm">Add to cart</button>
                                    <a href="#" className="text-sm text-gray-600 hover:underline">View details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="max-w-7xl mx-auto px-6 py-12">
                    <h2 className="text-2xl font-semibold text-gray-900">Top Categories</h2>
                    <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-6">
                        <div className="bg-white rounded-lg p-4 flex flex-col items-center shadow">
                            <img className="w-20 h-20 object-cover rounded-md" src="https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?w=400&q=80" alt="Electronics" />
                            <div className="mt-3 text-sm font-medium text-gray-800">Electronics</div>
                        </div>
                        <div className="bg-white rounded-lg p-4 flex flex-col items-center shadow">
                            <img className="w-20 h-20 object-cover rounded-md" src="https://images.unsplash.com/photo-1521334884684-d80222895322?w=400&q=80" alt="Home" />
                            <div className="mt-3 text-sm font-medium text-gray-800">Home</div>
                        </div>
                        <div className="bg-white rounded-lg p-4 flex flex-col items-center shadow">
                            <img className="w-20 h-20 object-cover rounded-md" src="https://images.unsplash.com/photo-1503342452485-86f7c6a1a52b?w=400&q=80" alt="Fashion" />
                            <div className="mt-3 text-sm font-medium text-gray-800">Fashion</div>
                        </div>
                        <div className="bg-white rounded-lg p-4 flex flex-col items-center shadow">
                            <img className="w-20 h-20 object-cover rounded-md" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&q=80" alt="Outdoors" />
                            <div className="mt-3 text-sm font-medium text-gray-800">Outdoors</div>
                        </div>
                    </div>
                </section>

                <section className="max-w-7xl mx-auto px-6 py-12">
                    <div className="bg-white rounded-xl shadow p-8">
                        <h3 className="text-xl font-semibold text-gray-900">Why customers choose Ecomly</h3>
                        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="flex flex-col items-start">
                                <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-50 rounded-md text-indigo-600">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h4 className="mt-4 font-medium text-gray-900">Quality guaranteed</h4>
                                <p className="mt-2 text-sm text-gray-600">We vet sellers and only surface top-rated items.</p>
                            </div>

                            <div className="flex flex-col items-start">
                                <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-50 rounded-md text-indigo-600">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h4l3 10 4-18 3 10h4" />
                                    </svg>
                                </div>
                                <h4 className="mt-4 font-medium text-gray-900">Fast fulfillment</h4>
                                <p className="mt-2 text-sm text-gray-600">Multiple warehouses and optimized shipping routes.</p>
                            </div>

                            <div className="flex flex-col items-start">
                                <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-50 rounded-md text-indigo-600">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 1.657-1.567 3-3.5 3S5 12.657 5 11s1.567-3 3.5-3S12 9.343 12 11zM20 12v6" />
                                    </svg>
                                </div>
                                <h4 className="mt-4 font-medium text-gray-900">Hassle-free returns</h4>
                                <p className="mt-2 text-sm text-gray-600">30-day returns and dedicated support.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="max-w-7xl mx-auto px-6 py-12">
                    <div className="bg-gradient-to-r from-indigo-600 to-pink-600 rounded-xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h4 className="text-xl font-bold">Join thousands of happy shoppers</h4>
                            <p className="mt-2 text-indigo-100">Get early access to deals and curated launches. No spam, unsubscribe anytime.</p>
                        </div>
                        <form className="w-full md:w-auto flex gap-2">
                            <input aria-label="Email" type="email" placeholder="Your email" className="px-4 py-2 rounded-md text-gray-800 w-full md:w-72" />
                            <button className="px-5 py-2 bg-white text-indigo-600 rounded-md font-semibold">Subscribe</button>
                        </form>
                    </div>
                </section>
            </main>

            <footer className="bg-white border-t mt-12">
                <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-start justify-between gap-6">
                    <div>
                        <div className="text-lg font-semibold text-gray-800">Ecomly</div>
                        <p className="mt-2 text-sm text-gray-600 max-w-xs">Your one-stop shop for everyday essentials and curated finds.</p>
                    </div>

                    <div className="flex gap-12">
                        <div>
                            <h5 className="text-sm font-medium text-gray-700">Company</h5>
                            <ul className="mt-3 text-sm text-gray-600 space-y-2">
                                <li><a href="#" className="hover:underline">About</a></li>
                                <li><a href="#" className="hover:underline">Careers</a></li>
                                <li><a href="#" className="hover:underline">Blog</a></li>
                            </ul>
                        </div>

                        <div>
                            <h5 className="text-sm font-medium text-gray-700">Support</h5>
                            <ul className="mt-3 text-sm text-gray-600 space-y-2">
                                <li><a href="#" className="hover:underline">Help Center</a></li>
                                <li><a href="#" className="hover:underline">Returns</a></li>
                                <li><a href="#" className="hover:underline">Shipping</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t">
                    <div className="max-w-7xl mx-auto px-6 py-4 text-sm text-gray-500 flex items-center justify-between">
                        <div>© {new Date().getFullYear()} Ecomly. All rights reserved.</div>
                        <div className="flex items-center space-x-4">
                            <a href="#" className="hover:text-gray-700">Privacy</a>
                            <a href="#" className="hover:text-gray-700">Terms</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default HomePage;