import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-[#1a1a1a] text-white overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop"
          alt="Agricultural field"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#2d4a26]/70 to-[#1a1a1a]/85"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 md:py-40">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm uppercase tracking-wider text-gray-300 mb-3 sm:mb-4">Agricultural & Industrial Supplies</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Professional-Grade Products for Commercial Growers
            </h1>
            <p className="text-base sm:text-lg mb-6 sm:mb-8 text-gray-200 leading-relaxed">
              Serving the Salinas Valley with premium seeds, fertilizers, irrigation systems, and agricultural supplies since 1998.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="/products/seeds" className="inline-block bg-[#4a7c3e] text-white px-6 sm:px-8 py-3 font-medium hover:bg-[#3d6633] transition-colors text-center text-sm sm:text-base">
                View Catalog
              </Link>
              <Link href="/quote" className="inline-block border border-white text-white px-6 sm:px-8 py-3 font-medium hover:bg-white hover:text-[#1a1a1a] transition-colors text-center text-sm sm:text-base">
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-b border-gray-200 bg-white border-t-2 border-t-[#4a7c3e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            <div className="text-center sm:text-left animate-fade-in">
              <div className="text-2xl sm:text-3xl font-bold text-[#2d3319] mb-1">25+ Years</div>
              <div className="text-xs sm:text-sm text-gray-600 uppercase tracking-wide">Industry Experience</div>
            </div>
            <div className="text-center sm:text-left animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-2xl sm:text-3xl font-bold text-[#2d3319] mb-1">5,000+</div>
              <div className="text-xs sm:text-sm text-gray-600 uppercase tracking-wide">Products in Stock</div>
            </div>
            <div className="text-center sm:text-left animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-2xl sm:text-3xl font-bold text-[#2d3319] mb-1">Same-Day</div>
              <div className="text-xs sm:text-sm text-gray-600 uppercase tracking-wide">Local Delivery</div>
            </div>
            <div className="text-center sm:text-left animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-2xl sm:text-3xl font-bold text-[#2d3319] mb-1">OMRI Listed</div>
              <div className="text-xs sm:text-sm text-gray-600 uppercase tracking-wide">Organic Products</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners - Moved Higher */}
      <section className="py-8 sm:py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs sm:text-sm uppercase tracking-wider text-gray-500 mb-6 text-center">Authorized Distributor For</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            <div className="text-center text-sm sm:text-base text-gray-700 font-semibold opacity-70 hover:opacity-100 transition-opacity">Territorial Seed Company</div>
            <div className="text-center text-sm sm:text-base text-gray-700 font-semibold opacity-70 hover:opacity-100 transition-opacity">Johnny's Selected Seeds</div>
            <div className="text-center text-sm sm:text-base text-gray-700 font-semibold opacity-70 hover:opacity-100 transition-opacity">AgroThrive Organics</div>
            <div className="text-center text-sm sm:text-base text-gray-700 font-semibold opacity-70 hover:opacity-100 transition-opacity">High Mowing Seeds</div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-t-2 border-t-[#4a7c3e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2d3319] mb-2 sm:mb-3">Product Categories</h2>
            <p className="text-sm sm:text-base text-gray-600">Browse our comprehensive selection of agricultural and industrial supplies</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <Link href="/products/seeds" className="group border border-gray-200 p-4 sm:p-6 hover:border-[#4a7c3e] hover:shadow-md transition-all bg-white animate-fade-in">
              <h3 className="text-base sm:text-lg font-semibold mb-2 text-[#2d3319] group-hover:text-[#4a7c3e]">Seeds</h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">Organic and conventional varieties from trusted suppliers</p>
              <span className="text-xs sm:text-sm text-[#4a7c3e] font-medium">View Products →</span>
            </Link>
            <Link href="/products/fertilizers" className="group border border-gray-200 p-4 sm:p-6 hover:border-[#4a7c3e] transition-all bg-white">
              <h3 className="text-base sm:text-lg font-semibold mb-2 text-[#2d3319] group-hover:text-[#4a7c3e]">Fertilizers</h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">Complete nutrient solutions for optimal crop performance</p>
              <span className="text-xs sm:text-sm text-[#4a7c3e] font-medium">View Products →</span>
            </Link>
            <Link href="/products/irrigation-supplies" className="group border border-gray-200 p-4 sm:p-6 hover:border-[#4a7c3e] transition-all bg-white">
              <h3 className="text-base sm:text-lg font-semibold mb-2 text-[#2d3319] group-hover:text-[#4a7c3e]">Irrigation Supplies</h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">Drip tape, fittings, filters, and complete systems</p>
              <span className="text-xs sm:text-sm text-[#4a7c3e] font-medium">View Products →</span>
            </Link>
            <Link href="/products/biologicals" className="group border border-gray-200 p-4 sm:p-6 hover:border-[#4a7c3e] transition-all bg-white">
              <h3 className="text-base sm:text-lg font-semibold mb-2 text-[#2d3319] group-hover:text-[#4a7c3e]">Biologicals</h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">Natural pest control and soil health products</p>
              <span className="text-xs sm:text-sm text-[#4a7c3e] font-medium">View Products →</span>
            </Link>
            <Link href="/products/tools-equipment" className="group border border-gray-200 p-4 sm:p-6 hover:border-[#4a7c3e] transition-all bg-white">
              <h3 className="text-base sm:text-lg font-semibold mb-2 text-[#2d3319] group-hover:text-[#4a7c3e]">Tools & Equipment</h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">Professional-grade hand tools and field equipment</p>
              <span className="text-xs sm:text-sm text-[#4a7c3e] font-medium">View Products →</span>
            </Link>
            <Link href="/products/harvest-supplies" className="group border border-gray-200 p-4 sm:p-6 hover:border-[#4a7c3e] transition-all bg-white">
              <h3 className="text-base sm:text-lg font-semibold mb-2 text-[#2d3319] group-hover:text-[#4a7c3e]">Harvest Supplies</h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">Bins, containers, and packaging materials</p>
              <span className="text-xs sm:text-sm text-[#4a7c3e] font-medium">View Products →</span>
            </Link>
            <Link href="/products/portable-power" className="group border border-gray-200 p-4 sm:p-6 hover:border-[#4a7c3e] transition-all bg-white">
              <h3 className="text-base sm:text-lg font-semibold mb-2 text-[#2d3319] group-hover:text-[#4a7c3e]">Portable Power</h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">Generators and power solutions for field operations</p>
              <span className="text-xs sm:text-sm text-[#4a7c3e] font-medium">View Products →</span>
            </Link>
            <Link href="/products/soil-sensors" className="group border border-gray-200 p-4 sm:p-6 hover:border-[#4a7c3e] transition-all bg-white">
              <h3 className="text-base sm:text-lg font-semibold mb-2 text-[#2d3319] group-hover:text-[#4a7c3e]">Soil Sensors</h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">Precision monitoring and data analytics equipment</p>
              <span className="text-xs sm:text-sm text-[#4a7c3e] font-medium">View Products →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 border-t-2 border-t-[#4a7c3e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2d3319] mb-2 sm:mb-3">Why Work With Us</h2>
            <p className="text-sm sm:text-base text-gray-600">Comprehensive support for commercial agricultural operations</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 border border-gray-200 border-t-4 border-t-[#4a7c3e] hover:shadow-md transition-shadow animate-fade-in">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-[#2d3319]">Same-Day Delivery</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Free local delivery throughout the Salinas Valley. Orders placed before noon ship same day.</p>
            </div>
            <div className="bg-white p-6 sm:p-8 border border-gray-200 border-t-4 border-t-[#4a7c3e] hover:shadow-md transition-shadow animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-[#2d3319]">Custom Sourcing</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Access to specialized products through our network of agricultural suppliers and manufacturers.</p>
            </div>
            <div className="bg-white p-6 sm:p-8 border border-gray-200 border-t-4 border-t-[#4a7c3e] hover:shadow-md transition-shadow animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-[#2d3319]">Technical Support</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Expert guidance on product selection, application rates, and agronomic best practices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#2d4a26] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Get Started Today</h2>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 text-gray-200">Request a quote or speak with our sales team about your specific requirements.</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="/quote" className="inline-block bg-white text-[#2d4a26] px-6 sm:px-8 py-3 font-medium hover:bg-gray-100 transition-colors text-sm sm:text-base">
              Request Quote
            </Link>
            <Link href="/contact" className="inline-block border border-white text-white px-6 sm:px-8 py-3 font-medium hover:bg-white hover:text-[#2d4a26] transition-colors text-sm sm:text-base">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
