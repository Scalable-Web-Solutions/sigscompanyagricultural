export default function AboutPage() {
    return (
        <main>
            <section className="bg-[#1a1a1a] text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-sm uppercase tracking-wider text-gray-400 mb-3">Company</p>
                    <h1 className="text-4xl font-bold mb-4">About Sigs Company</h1>
                    <p className="text-lg text-gray-300 max-w-3xl">
                        Serving commercial agricultural operations in the Salinas Valley since 1998.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-lg max-w-none">
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Founded in California's premier agricultural region, Sigs Company has been a trusted supplier to commercial growers and industrial operations for over 25 years. We understand the demands of large-scale farming and the importance of reliable product availability.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Our mission is straightforward: provide professional-grade agricultural supplies with expert technical support and dependable delivery. From organic seed varieties to precision irrigation systems, we source products from industry-leading manufacturers and maintain substantial inventory to meet your operational needs.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            We serve commercial growers, agricultural cooperatives, and industrial operations throughout the Salinas Valley and Central California coast. Our team brings decades of combined experience in agronomy, horticulture, and agricultural supply chain management.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-200">
                        <div>
                            <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">Mission</h3>
                            <p className="text-gray-600 leading-relaxed">Support sustainable commercial agriculture with quality products and expert technical service.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">Vision</h3>
                            <p className="text-gray-600 leading-relaxed">Be the most reliable agricultural supplier in California's Central Coast region.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">Values</h3>
                            <p className="text-gray-600 leading-relaxed">Integrity, product quality, technical expertise, and customer success.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold mb-8 text-center text-[#1a1a1a]">Authorized Distributor</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="bg-white border border-gray-200 p-6 text-center">
                            <p className="font-semibold text-gray-700">Territorial Seed Company</p>
                        </div>
                        <div className="bg-white border border-gray-200 p-6 text-center">
                            <p className="font-semibold text-gray-700">Johnny's Selected Seeds</p>
                        </div>
                        <div className="bg-white border border-gray-200 p-6 text-center">
                            <p className="font-semibold text-gray-700">AgroThrive Organics</p>
                        </div>
                        <div className="bg-white border border-gray-200 p-6 text-center">
                            <p className="font-semibold text-gray-700">High Mowing Seeds</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
