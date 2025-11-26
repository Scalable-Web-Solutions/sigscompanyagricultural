export default function ContactPage() {
    return (
        <main>
            <section className="bg-gradient-to-br from-[#1a1a1a] via-[#2d4a26] to-[#1a1a1a] text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1 text-xs uppercase tracking-wider mb-4">
                            Get in Touch
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            Get in touch with our sales team for product inquiries, quotes, or technical support. We're here to help your operation succeed.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div>
                            <h2 className="text-2xl font-bold mb-8 text-[#1a1a1a]">Contact Information</h2>
                            <div className="space-y-6">
                                <div className="bg-gray-50 border-l-4 border-[#4a7c3e] p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-[#4a7c3e] text-white p-3 rounded">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1 text-[#1a1a1a]">Address</h3>
                                            <p className="text-gray-700">123 Agricultural Way<br />Salinas, CA 93901</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gray-50 border-l-4 border-[#4a7c3e] p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-[#4a7c3e] text-white p-3 rounded">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1 text-[#1a1a1a]">Phone</h3>
                                            <p className="text-gray-700 font-medium">(555) 123-4567</p>
                                            <p className="text-sm text-gray-600 mt-1">Mon-Fri: 7AM-5PM</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gray-50 border-l-4 border-[#4a7c3e] p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-[#4a7c3e] text-white p-3 rounded">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1 text-[#1a1a1a]">Email</h3>
                                            <p className="text-gray-700">info@sigscompany.com</p>
                                            <p className="text-sm text-gray-600 mt-1">24-hour response time</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gray-50 border-l-4 border-[#4a7c3e] p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-[#4a7c3e] text-white p-3 rounded">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1 text-[#1a1a1a]">Business Hours</h3>
                                            <p className="text-gray-700 text-sm">
                                                Monday - Friday: 7:00 AM - 5:00 PM<br />
                                                Saturday: 8:00 AM - 2:00 PM<br />
                                                Sunday: Closed
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white border border-gray-200 p-8">
                            <h2 className="text-2xl font-bold mb-6 text-[#1a1a1a]">Send a Message</h2>
                            <form className="space-y-6">
                                <div>
                                    <label className="block text-sm font-semibold mb-2">Name *</label>
                                    <input type="text" required className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4a7c3e] focus:border-transparent" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold mb-2">Email *</label>
                                    <input type="email" required className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4a7c3e] focus:border-transparent" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold mb-2">Phone</label>
                                    <input type="tel" className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4a7c3e] focus:border-transparent" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold mb-2">Subject *</label>
                                    <input type="text" required className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4a7c3e] focus:border-transparent" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold mb-2">Message *</label>
                                    <textarea required rows={6} className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4a7c3e] focus:border-transparent"></textarea>
                                </div>
                                <button type="submit" className="w-full bg-[#4a7c3e] text-white py-4 font-medium hover:bg-[#3d6633] transition-colors">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="bg-gray-100 py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gray-300 h-96 flex items-center justify-center border border-gray-400">
                        <p className="text-gray-600">Map Integration Placeholder</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
