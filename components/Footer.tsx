import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-[#1a1a1a] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div>
                        <h3 className="text-lg font-bold mb-4">SIGS COMPANY</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">Professional agricultural and industrial supplies for commercial operations.</p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Products</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/products/seeds" className="text-gray-400 hover:text-white">Seeds</Link></li>
                            <li><Link href="/products/fertilizers" className="text-gray-400 hover:text-white">Fertilizers</Link></li>
                            <li><Link href="/products/irrigation-supplies" className="text-gray-400 hover:text-white">Irrigation</Link></li>
                            <li><Link href="/products/biologicals" className="text-gray-400 hover:text-white">Biologicals</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Company</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
                            <li><Link href="/services" className="text-gray-400 hover:text-white">Services</Link></li>
                            <li><Link href="/resources" className="text-gray-400 hover:text-white">Resources</Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>Salinas Valley, CA</li>
                            <li>(555) 123-4567</li>
                            <li>info@sigscompany.com</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Sigs Company. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
