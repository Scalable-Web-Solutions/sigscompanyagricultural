import Link from 'next/link';

export default function ServicesPage() {
    const services = [
        {
            title: 'Same-Day Local Delivery',
            description: 'Free delivery throughout the Salinas Valley for orders placed before noon. Extended delivery available to surrounding regions.',
        },
        {
            title: 'Custom Product Sourcing',
            description: 'Access to specialized agricultural products through our network of manufacturers and distributors. We source what you need.',
        },
        {
            title: 'Technical Consultation',
            description: 'Expert guidance on product selection, application rates, and agronomic best practices from our experienced team.',
        },
        {
            title: 'Flexible Payment Terms',
            description: 'Net payment terms available for qualified commercial accounts. Credit card and ACH payment options accepted.',
        },
        {
            title: 'Volume Discounts',
            description: 'Competitive pricing on bulk orders. Contact our sales team for pallet and truckload quantity pricing.',
        },
        {
            title: 'Product Documentation',
            description: 'Complete access to technical datasheets, MSDS, certifications, and application guides for all products.',
        },
    ];

    return (
        <main>
            <section className="bg-[#1a1a1a] text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-sm uppercase tracking-wider text-gray-400 mb-3">Services</p>
                    <h1 className="text-4xl font-bold mb-4">Services & Solutions</h1>
                    <p className="text-lg text-gray-300 max-w-3xl">
                        Comprehensive support for commercial agricultural operations beyond product supply.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <div key={service.title} className="border border-gray-200 p-8">
                                <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">{service.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4 text-[#1a1a1a]">Ready to Work Together?</h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Contact our team to discuss your specific requirements and learn how we can support your operation.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/quote" className="inline-block bg-[#4a7c3e] text-white px-8 py-3 font-medium hover:bg-[#3d6633] transition-colors">
                            Request Quote
                        </Link>
                        <Link href="/contact" className="inline-block border border-gray-300 text-gray-700 px-8 py-3 font-medium hover:bg-white transition-colors">
                            Contact Sales
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
