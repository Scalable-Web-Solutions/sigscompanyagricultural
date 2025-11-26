import Link from 'next/link';
import Image from 'next/image';

export default function SeedsPage() {
    const products = [
        { name: 'Organic Lettuce Seeds - Salinas', brand: 'Territorial Seed', price: '$45.00', unit: 'per lb', omri: true, stock: 'In Stock', image: 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=400&h=400&fit=crop' },
        { name: 'Broccoli Seeds - Premium Green', brand: 'Johnny\'s Selected', price: '$38.50', unit: 'per lb', omri: false, stock: 'In Stock', image: 'https://images.unsplash.com/photo-1628773822503-930a7eaecf80?w=400&h=400&fit=crop' },
        { name: 'Carrot Seeds - Organic Nantes', brand: 'High Mowing', price: '$52.00', unit: 'per lb', omri: true, stock: 'Low Stock', image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&h=400&fit=crop' },
        { name: 'Spinach Seeds - Bloomsdale', brand: 'Territorial Seed', price: '$28.00', unit: 'per lb', omri: false, stock: 'In Stock', image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=400&fit=crop' },
        { name: 'Tomato Seeds - Early Girl', brand: 'Johnny\'s Selected', price: '$65.00', unit: 'per lb', omri: true, stock: 'In Stock', image: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=400&h=400&fit=crop' },
        { name: 'Kale Seeds - Lacinato', brand: 'High Mowing', price: '$42.00', unit: 'per lb', omri: true, stock: 'In Stock', image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=400&h=400&fit=crop' },
    ];

    return (
        <main>
            <section className="relative bg-[#1a1a1a] text-white py-20 overflow-hidden border-t-4 border-[#4a7c3e]">
                <Image
                    src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2070&auto=format&fit=crop"
                    alt="Seeds"
                    fill
                    className="object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/90 to-transparent"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                        <Link href="/" className="hover:text-white">Home</Link>
                        <span>/</span>
                        <Link href="/products/seeds" className="hover:text-white">Products</Link>
                        <span>/</span>
                        <span className="text-white">Seeds</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Seeds</h1>
                    <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">
                        Premium organic and conventional seed varieties for commercial growers. Sourced from industry-leading suppliers including Territorial Seed, Johnny's Selected Seeds, and High Mowing Organic Seeds.
                    </p>
                    <div className="flex gap-4 mt-6">
                        <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2">
                            <div className="text-2xl font-bold">150+</div>
                            <div className="text-xs text-gray-400 uppercase tracking-wider">Varieties</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2">
                            <div className="text-2xl font-bold">OMRI</div>
                            <div className="text-xs text-gray-400 uppercase tracking-wider">Certified</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2">
                            <div className="text-2xl font-bold">24hr</div>
                            <div className="text-xs text-gray-400 uppercase tracking-wider">Shipping</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Filters */}
                        <aside className="lg:w-64 flex-shrink-0">
                            <div className="bg-white border border-gray-200 p-6 sticky top-20">
                                <h3 className="font-semibold mb-6 text-sm uppercase tracking-wider">Filters</h3>
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-sm font-semibold mb-3">Type</h4>
                                        <label className="flex items-center gap-2 mb-2 cursor-pointer hover:text-[#4a7c3e]">
                                            <input type="checkbox" className="rounded border-gray-300" />
                                            <span className="text-sm">Organic</span>
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer hover:text-[#4a7c3e]">
                                            <input type="checkbox" className="rounded border-gray-300" />
                                            <span className="text-sm">Conventional</span>
                                        </label>
                                    </div>
                                    <div className="border-t border-gray-200 pt-6">
                                        <h4 className="text-sm font-semibold mb-3">Certification</h4>
                                        <label className="flex items-center gap-2 cursor-pointer hover:text-[#4a7c3e]">
                                            <input type="checkbox" className="rounded border-gray-300" />
                                            <span className="text-sm">OMRI Listed</span>
                                        </label>
                                    </div>
                                    <div className="border-t border-gray-200 pt-6">
                                        <h4 className="text-sm font-semibold mb-3">Availability</h4>
                                        <label className="flex items-center gap-2 cursor-pointer hover:text-[#4a7c3e]">
                                            <input type="checkbox" className="rounded border-gray-300" />
                                            <span className="text-sm">In Stock Only</span>
                                        </label>
                                    </div>
                                    <div className="border-t border-gray-200 pt-6">
                                        <button className="text-sm text-[#4a7c3e] hover:underline">Clear All Filters</button>
                                    </div>
                                </div>
                            </div>
                        </aside>

                        {/* Products Grid */}
                        <div className="flex-1">
                            <div className="bg-white border border-gray-200 p-4 mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                <div>
                                    <p className="font-semibold text-[#1a1a1a]">{products.length} products</p>
                                    <p className="text-sm text-gray-600">Showing all available seed varieties</p>
                                </div>
                                <select className="border border-gray-300 px-4 py-2 text-sm bg-white">
                                    <option>Sort by: Featured</option>
                                    <option>Price: Low to High</option>
                                    <option>Price: High to Low</option>
                                    <option>Name: A-Z</option>
                                </select>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {products.map((product) => (
                                    <div key={product.name} className="group bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 border-t-2 border-t-[#4a7c3e]">
                                        <div className="relative h-48 overflow-hidden bg-gray-100">
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                            {product.omri && (
                                                <div className="absolute top-3 right-3 bg-[#4a7c3e] text-white text-xs px-2 py-1 font-medium shadow-lg">
                                                    OMRI
                                                </div>
                                            )}
                                        </div>
                                        <div className="p-5">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-xs text-gray-500 uppercase tracking-wider">{product.brand}</span>
                                                <span className={`text-xs px-2 py-1 font-medium ${product.stock === 'In Stock' ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700'}`}>
                                                    {product.stock}
                                                </span>
                                            </div>
                                            <h3 className="font-semibold mb-3 text-[#1a1a1a] group-hover:text-[#4a7c3e] transition-colors">{product.name}</h3>
                                            <div className="flex items-baseline gap-2 mb-4">
                                                <p className="text-2xl font-bold text-[#1a1a1a]">{product.price}</p>
                                                <span className="text-sm text-gray-600">{product.unit}</span>
                                            </div>
                                            <div className="flex gap-2">
                                                <button className="flex-1 bg-[#4a7c3e] text-white py-2.5 text-sm font-medium hover:bg-[#3d6633] transition-colors">
                                                    Add to Cart
                                                </button>
                                                <Link href="/quote" className="px-4 py-2.5 border border-gray-300 text-gray-700 text-sm font-medium hover:border-[#4a7c3e] hover:text-[#4a7c3e] transition-colors">
                                                    Quote
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Bulk Order CTA */}
                            <div className="mt-12 bg-gradient-to-r from-[#4a7c3e] to-[#3d6633] text-white p-8 border border-[#4a7c3e]">
                                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Need Bulk Quantities?</h3>
                                        <p className="text-gray-100">Contact our sales team for volume pricing on pallet and truckload orders.</p>
                                    </div>
                                    <Link href="/quote" className="bg-white text-[#4a7c3e] px-6 py-3 font-medium hover:bg-gray-100 transition-colors whitespace-nowrap">
                                        Request Bulk Quote
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
