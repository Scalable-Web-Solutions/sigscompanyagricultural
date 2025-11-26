export default function QuotePage() {
    return (
        <main>
            <section className="bg-gradient-to-br from-[#1a1a1a] via-[#2d4a26] to-[#1a1a1a] text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1 text-xs uppercase tracking-wider mb-4">
                            B2B Quote Request
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Request a Quote</h1>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            Complete the form below and our sales team will respond within 24 hours with pricing and availability. For urgent requests, call us at (555) 123-4567.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Form */}
                        <div className="lg:col-span-2">
                            <form className="bg-white border border-gray-200 p-8 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold mb-2">First Name *</label>
                            <input type="text" required className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4a7c3e] focus:border-transparent" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-2">Last Name *</label>
                            <input type="text" required className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4a7c3e] focus:border-transparent" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold mb-2">Company Name</label>
                        <input type="text" className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4a7c3e] focus:border-transparent" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold mb-2">Email *</label>
                            <input type="email" required className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4a7c3e] focus:border-transparent" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-2">Phone *</label>
                            <input type="tel" required className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4a7c3e] focus:border-transparent" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold mb-2">Product Category</label>
                        <select className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4a7c3e] focus:border-transparent">
                            <option>Select a category</option>
                            <option>Seeds</option>
                            <option>Fertilizers</option>
                            <option>Irrigation Supplies</option>
                            <option>Biologicals</option>
                            <option>Tools & Equipment</option>
                            <option>Harvest Supplies</option>
                            <option>Portable Power</option>
                            <option>Soil Sensors</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold mb-2">Product Details & Quantities *</label>
                        <textarea required rows={6} className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4a7c3e] focus:border-transparent"
                            placeholder="Please describe the products you need and estimated quantities..."></textarea>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold mb-2">Delivery Location</label>
                        <input type="text" className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4a7c3e] focus:border-transparent"
                            placeholder="City, State or ZIP" />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold mb-2">Additional Notes</label>
                        <textarea rows={4} className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4a7c3e] focus:border-transparent"
                            placeholder="Any special requirements or questions..."></textarea>
                    </div>

                                <button type="submit" className="w-full bg-[#4a7c3e] text-white py-4 font-medium hover:bg-[#3d6633] transition-colors text-lg">
                                    Submit Quote Request
                                </button>

                                <p className="text-sm text-gray-600 text-center">
                                    By submitting this form, you agree to our privacy policy. We will only use your information to respond to your quote request.
                                </p>
                            </form>
                        </div>

                        {/* Sidebar */}
                        <aside className="space-y-6">
                            <div className="bg-white border border-gray-200 p-6">
                                <h3 className="font-semibold mb-4 text-[#1a1a1a]">Why Request a Quote?</h3>
                                <ul className="space-y-3 text-sm text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <svg className="w-5 h-5 text-[#4a7c3e] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Volume discounts on bulk orders</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="w-5 h-5 text-[#4a7c3e] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Custom product sourcing</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="w-5 h-5 text-[#4a7c3e] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Flexible payment terms</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="w-5 h-5 text-[#4a7c3e] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Delivery scheduling options</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-[#4a7c3e] text-white p-6">
                                <h3 className="font-semibold mb-3">Need Help?</h3>
                                <p className="text-sm text-gray-100 mb-4">Our sales team is available to assist with your quote request.</p>
                                <div className="space-y-2 text-sm">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        <span>(555) 123-4567</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        <span>sales@sigscompany.com</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white border border-gray-200 p-6">
                                <h3 className="font-semibold mb-3 text-[#1a1a1a]">Response Time</h3>
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="bg-green-100 text-green-700 px-3 py-1 text-sm font-medium">
                                        24 Hours
                                    </div>
                                    <span className="text-sm text-gray-600">Average Response</span>
                                </div>
                                <p className="text-sm text-gray-600">
                                    Most quote requests are processed within one business day. Urgent requests receive priority handling.
                                </p>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </main>
    );
}
