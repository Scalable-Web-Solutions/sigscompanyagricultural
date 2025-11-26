export default function ResourcesPage() {
    const resources = [
        { title: 'Organic Farming Best Practices Guide', category: 'Technical Guide', date: 'November 2025' },
        { title: 'Irrigation System Maintenance Manual', category: 'Technical Guide', date: 'October 2025' },
        { title: 'Seasonal Planting Calendar - Central Coast', category: 'Reference', date: 'September 2025' },
        { title: 'Fertilizer Application Rate Calculator', category: 'Tool', date: 'August 2025' },
        { title: 'OMRI Product Certification Guide', category: 'Reference', date: 'July 2025' },
        { title: 'Soil Health Management Practices', category: 'Technical Guide', date: 'June 2025' },
    ];

    return (
        <main>
            <section className="bg-[#1a1a1a] text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-sm uppercase tracking-wider text-gray-400 mb-3">Resources</p>
                    <h1 className="text-4xl font-bold mb-4">Technical Resources</h1>
                    <p className="text-lg text-gray-300 max-w-3xl">
                        Product guides, technical documentation, and educational resources for commercial growers.
                    </p>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            <h2 className="text-2xl font-bold mb-8 text-[#1a1a1a]">Available Resources</h2>
                            <div className="space-y-4">
                                {resources.map((resource) => (
                                    <div key={resource.title} className="border border-gray-200 p-6 hover:border-gray-400 transition-colors">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 font-medium mb-2 uppercase tracking-wider">
                                                    {resource.category}
                                                </span>
                                                <h3 className="text-lg font-semibold mb-2 text-[#1a1a1a]">{resource.title}</h3>
                                                <p className="text-sm text-gray-600">{resource.date}</p>
                                            </div>
                                            <button className="text-[#4a7c3e] font-medium text-sm hover:underline">Download PDF</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <aside>
                            <div className="border border-gray-200 p-6 mb-6">
                                <h3 className="text-lg font-bold mb-4 text-[#1a1a1a]">Product Catalogs</h3>
                                <ul className="space-y-3">
                                    <li><a href="#" className="text-[#4a7c3e] hover:underline text-sm">2025 Seed Catalog</a></li>
                                    <li><a href="#" className="text-[#4a7c3e] hover:underline text-sm">Fertilizer Product Guide</a></li>
                                    <li><a href="#" className="text-[#4a7c3e] hover:underline text-sm">Irrigation Systems Catalog</a></li>
                                    <li><a href="#" className="text-[#4a7c3e] hover:underline text-sm">Complete Product Catalog</a></li>
                                </ul>
                            </div>

                            <div className="bg-[#4a7c3e] text-white p-6">
                                <h3 className="text-lg font-bold mb-3">Newsletter</h3>
                                <p className="mb-4 text-sm text-gray-100">Receive seasonal updates, new product announcements, and technical resources.</p>
                                <input type="email" placeholder="Email address" className="w-full px-4 py-2 mb-3 text-gray-900" />
                                <button className="w-full bg-white text-[#4a7c3e] py-2 font-medium hover:bg-gray-100 transition-colors">
                                    Subscribe
                                </button>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </main>
    );
}
