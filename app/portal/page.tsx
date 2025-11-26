'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PortalPage() {
    const [activeTab, setActiveTab] = useState('overview');

    // Mock data
    const customerData = {
        businessName: 'Green Valley Farms',
        primaryContact: 'John Martinez',
        email: 'john@greenvalleyfarms.com',
        phone: '(555) 234-5678',
        billingAddress: '456 Farm Road, Salinas, CA 93901',
        shippingAddress: '456 Farm Road, Salinas, CA 93901',
        salesRep: 'Sarah Johnson',
        salesRepEmail: 'sarah@sigscompany.com',
        accountSince: 'March 2020',
    };

    const recentOrders = [
        { id: 'ORD-2024-1234', date: '2024-11-15', status: 'Delivered', total: '$2,450.00', items: 5 },
        { id: 'ORD-2024-1189', date: '2024-11-08', status: 'In Transit', total: '$1,890.50', items: 3 },
        { id: 'ORD-2024-1156', date: '2024-10-28', status: 'Delivered', total: '$3,200.00', items: 8 },
        { id: 'ORD-2024-1098', date: '2024-10-15', status: 'Delivered', total: '$950.00', items: 2 },
    ];

    const frequentItems = [
        { name: 'Organic Lettuce Seeds - Salinas', lastOrdered: '2024-11-15', price: '$45.00', unit: 'per lb' },
        { name: 'Drip Tape 8mil 12in', lastOrdered: '2024-11-08', price: '$125.00', unit: 'per roll' },
        { name: 'AgroThrive Organic Fertilizer', lastOrdered: '2024-10-28', price: '$89.00', unit: 'per 5gal' },
    ];

    return (
        <main className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-bold text-[#1a1a1a]">Customer Portal</h1>
                            <p className="text-sm text-gray-600 mt-1">Welcome back, {customerData.primaryContact}</p>
                        </div>
                        <Link href="/" className="text-sm text-[#4a7c3e] hover:underline">
                            ← Back to Store
                        </Link>
                    </div>
                </div>
            </div>

            {/* Navigation Tabs */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex gap-8 overflow-x-auto">
                        {[
                            { id: 'overview', label: 'Overview' },
                            { id: 'orders', label: 'Order History' },
                            { id: 'reorder', label: 'Quick Reorder' },
                            { id: 'profile', label: 'Profile' },
                            { id: 'support', label: 'Support' },
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                                    activeTab === tab.id
                                        ? 'border-[#4a7c3e] text-[#4a7c3e]'
                                        : 'border-transparent text-gray-600 hover:text-[#4a7c3e]'
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </nav>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {activeTab === 'overview' && (
                    <div className="space-y-6">
                        {/* Quick Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <div className="bg-white border border-gray-200 p-6">
                                <div className="text-sm text-gray-600 mb-1">Total Orders</div>
                                <div className="text-3xl font-bold text-[#1a1a1a]">47</div>
                                <div className="text-xs text-gray-500 mt-1">This year</div>
                            </div>
                            <div className="bg-white border border-gray-200 p-6">
                                <div className="text-sm text-gray-600 mb-1">Total Spent</div>
                                <div className="text-3xl font-bold text-[#1a1a1a]">$28,450</div>
                                <div className="text-xs text-gray-500 mt-1">This year</div>
                            </div>
                            <div className="bg-white border border-gray-200 p-6">
                                <div className="text-sm text-gray-600 mb-1">Active Orders</div>
                                <div className="text-3xl font-bold text-[#4a7c3e]">1</div>
                                <div className="text-xs text-gray-500 mt-1">In transit</div>
                            </div>
                            <div className="bg-white border border-gray-200 p-6">
                                <div className="text-sm text-gray-600 mb-1">Account Status</div>
                                <div className="text-lg font-bold text-green-600">Good Standing</div>
                                <div className="text-xs text-gray-500 mt-1">No outstanding balance</div>
                            </div>
                        </div>

                        {/* Recent Orders */}
                        <div className="bg-white border border-gray-200">
                            <div className="border-b border-gray-200 p-6">
                                <h2 className="text-lg font-bold text-[#1a1a1a]">Recent Orders</h2>
                            </div>
                            <div className="divide-y divide-gray-200">
                                {recentOrders.slice(0, 3).map((order) => (
                                    <div key={order.id} className="p-6 hover:bg-gray-50 transition-colors">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <div className="font-semibold text-[#1a1a1a]">{order.id}</div>
                                                <div className="text-sm text-gray-600 mt-1">{order.date} • {order.items} items</div>
                                            </div>
                                            <div className="text-right">
                                                <div className="font-bold text-[#1a1a1a]">{order.total}</div>
                                                <div className={`text-sm mt-1 ${
                                                    order.status === 'Delivered' ? 'text-green-600' :
                                                    order.status === 'In Transit' ? 'text-blue-600' :
                                                    'text-gray-600'
                                                }`}>
                                                    {order.status}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="p-6 border-t border-gray-200">
                                <button
                                    onClick={() => setActiveTab('orders')}
                                    className="text-sm text-[#4a7c3e] hover:underline font-medium"
                                >
                                    View All Orders →
                                </button>
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <button
                                onClick={() => setActiveTab('reorder')}
                                className="bg-[#4a7c3e] text-white p-6 hover:bg-[#3d6633] transition-colors text-left"
                            >
                                <div className="text-lg font-bold mb-2">Quick Reorder</div>
                                <div className="text-sm text-gray-100">Reorder your frequently purchased items</div>
                            </button>
                            <Link href="/quote" className="bg-white border border-gray-200 p-6 hover:border-[#4a7c3e] transition-colors">
                                <div className="text-lg font-bold mb-2 text-[#1a1a1a]">Request Quote</div>
                                <div className="text-sm text-gray-600">Get pricing for bulk orders</div>
                            </Link>
                            <button
                                onClick={() => setActiveTab('support')}
                                className="bg-white border border-gray-200 p-6 hover:border-[#4a7c3e] transition-colors text-left"
                            >
                                <div className="text-lg font-bold mb-2 text-[#1a1a1a]">Contact Support</div>
                                <div className="text-sm text-gray-600">Get help with your orders</div>
                            </button>
                        </div>
                    </div>
                )}

                {activeTab === 'orders' && (
                    <div className="space-y-6">
                        <div className="bg-white border border-gray-200 p-6">
                            <h2 className="text-xl font-bold text-[#1a1a1a] mb-6">Order History</h2>
                            
                            {/* Filters */}
                            <div className="flex flex-col sm:flex-row gap-4 mb-6">
                                <select className="border border-gray-300 px-4 py-2 text-sm">
                                    <option>All Statuses</option>
                                    <option>Delivered</option>
                                    <option>In Transit</option>
                                    <option>Processing</option>
                                    <option>Pending</option>
                                </select>
                                <select className="border border-gray-300 px-4 py-2 text-sm">
                                    <option>Last 3 Months</option>
                                    <option>Last 6 Months</option>
                                    <option>This Year</option>
                                    <option>All Time</option>
                                </select>
                                <input
                                    type="text"
                                    placeholder="Search orders..."
                                    className="border border-gray-300 px-4 py-2 text-sm flex-1"
                                />
                            </div>

                            {/* Orders Table */}
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-gray-50 border-b border-gray-200">
                                        <tr>
                                            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Order ID</th>
                                            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Date</th>
                                            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Items</th>
                                            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Total</th>
                                            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                                            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {recentOrders.map((order) => (
                                            <tr key={order.id} className="hover:bg-gray-50">
                                                <td className="py-4 px-4 font-medium text-[#1a1a1a]">{order.id}</td>
                                                <td className="py-4 px-4 text-sm text-gray-600">{order.date}</td>
                                                <td className="py-4 px-4 text-sm text-gray-600">{order.items}</td>
                                                <td className="py-4 px-4 font-semibold text-[#1a1a1a]">{order.total}</td>
                                                <td className="py-4 px-4">
                                                    <span className={`inline-block px-2 py-1 text-xs font-medium ${
                                                        order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                                                        order.status === 'In Transit' ? 'bg-blue-100 text-blue-700' :
                                                        'bg-gray-100 text-gray-700'
                                                    }`}>
                                                        {order.status}
                                                    </span>
                                                </td>
                                                <td className="py-4 px-4">
                                                    <button className="text-sm text-[#4a7c3e] hover:underline">View Details</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'reorder' && (
                    <div className="space-y-6">
                        <div className="bg-white border border-gray-200 p-6">
                            <h2 className="text-xl font-bold text-[#1a1a1a] mb-2">Quick Reorder</h2>
                            <p className="text-sm text-gray-600 mb-6">Quickly reorder your frequently purchased items</p>

                            <div className="space-y-4">
                                {frequentItems.map((item, index) => (
                                    <div key={index} className="border border-gray-200 p-4 flex items-center justify-between hover:border-[#4a7c3e] transition-colors">
                                        <div className="flex-1">
                                            <div className="font-semibold text-[#1a1a1a]">{item.name}</div>
                                            <div className="text-sm text-gray-600 mt-1">
                                                Last ordered: {item.lastOrdered} • {item.price} {item.unit}
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <input
                                                type="number"
                                                defaultValue="1"
                                                min="1"
                                                className="w-20 border border-gray-300 px-3 py-2 text-center"
                                            />
                                            <button className="bg-[#4a7c3e] text-white px-6 py-2 font-medium hover:bg-[#3d6633] transition-colors">
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-[#4a7c3e] to-[#3d6633] text-white p-8">
                            <h3 className="text-xl font-bold mb-2">Reorder Previous Order</h3>
                            <p className="text-gray-100 mb-4">Quickly reorder all items from a previous order</p>
                            <button className="bg-white text-[#4a7c3e] px-6 py-3 font-medium hover:bg-gray-100 transition-colors">
                                View Past Orders
                            </button>
                        </div>
                    </div>
                )}

                {activeTab === 'profile' && (
                    <div className="space-y-6">
                        <div className="bg-white border border-gray-200 p-6">
                            <h2 className="text-xl font-bold text-[#1a1a1a] mb-6">Business Profile</h2>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-500 mb-4">Business Information</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <div className="text-sm text-gray-600">Business Name</div>
                                            <div className="font-medium text-[#1a1a1a]">{customerData.businessName}</div>
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-600">Primary Contact</div>
                                            <div className="font-medium text-[#1a1a1a]">{customerData.primaryContact}</div>
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-600">Email</div>
                                            <div className="font-medium text-[#1a1a1a]">{customerData.email}</div>
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-600">Phone</div>
                                            <div className="font-medium text-[#1a1a1a]">{customerData.phone}</div>
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-600">Account Since</div>
                                            <div className="font-medium text-[#1a1a1a]">{customerData.accountSince}</div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-500 mb-4">Addresses</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <div className="text-sm text-gray-600 mb-1">Billing Address</div>
                                            <div className="text-sm text-[#1a1a1a]">{customerData.billingAddress}</div>
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-600 mb-1">Shipping Address</div>
                                            <div className="text-sm text-[#1a1a1a]">{customerData.shippingAddress}</div>
                                        </div>
                                    </div>

                                    <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-500 mb-4 mt-8">Sales Representative</h3>
                                    <div className="space-y-2">
                                        <div className="font-medium text-[#1a1a1a]">{customerData.salesRep}</div>
                                        <div className="text-sm text-gray-600">{customerData.salesRepEmail}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-gray-200">
                                <button className="bg-[#4a7c3e] text-white px-6 py-3 font-medium hover:bg-[#3d6633] transition-colors">
                                    Edit Profile
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'support' && (
                    <div className="space-y-6">
                        <div className="bg-white border border-gray-200 p-6">
                            <h2 className="text-xl font-bold text-[#1a1a1a] mb-6">Contact Support</h2>
                            
                            <form className="space-y-6">
                                <div>
                                    <label className="block text-sm font-semibold mb-2">Subject *</label>
                                    <select className="w-full border border-gray-300 px-4 py-3">
                                        <option>Select a topic</option>
                                        <option>Order Issue</option>
                                        <option>Product Question</option>
                                        <option>Delivery Question</option>
                                        <option>Billing Question</option>
                                        <option>Technical Support</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold mb-2">Order Number (if applicable)</label>
                                    <input type="text" className="w-full border border-gray-300 px-4 py-3" placeholder="ORD-2024-XXXX" />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold mb-2">Message *</label>
                                    <textarea rows={6} className="w-full border border-gray-300 px-4 py-3" placeholder="Describe your issue or question..."></textarea>
                                </div>

                                <button type="submit" className="bg-[#4a7c3e] text-white px-8 py-3 font-medium hover:bg-[#3d6633] transition-colors">
                                    Submit Support Request
                                </button>
                            </form>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white border border-gray-200 p-6">
                                <h3 className="font-semibold mb-4 text-[#1a1a1a]">Contact Your Sales Rep</h3>
                                <div className="space-y-2 text-sm">
                                    <div className="font-medium">{customerData.salesRep}</div>
                                    <div className="text-gray-600">{customerData.salesRepEmail}</div>
                                    <div className="text-gray-600">(555) 123-4567</div>
                                </div>
                            </div>

                            <div className="bg-white border border-gray-200 p-6">
                                <h3 className="font-semibold mb-4 text-[#1a1a1a]">General Support</h3>
                                <div className="space-y-2 text-sm">
                                    <div className="text-gray-600">Phone: (555) 123-4567</div>
                                    <div className="text-gray-600">Email: support@sigscompany.com</div>
                                    <div className="text-gray-600">Hours: Mon-Fri 7AM-5PM</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}
