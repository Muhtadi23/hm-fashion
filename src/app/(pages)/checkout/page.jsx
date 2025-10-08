"use client"

import { useState } from "react"

export default function CheckoutPage() {
    const [shippingMethod, setShippingMethod] = useState("standard")
    const [paymentMethod, setPaymentMethod] = useState("cod")
    const [billingAddress, setBillingAddress] = useState("same")
    const [emailNews, setEmailNews] = useState(false)
    const [textNews, setTextNews] = useState(false)
    const [saveInfo, setSaveInfo] = useState(false)
    const [discountCode, setDiscountCode] = useState("")

    const productPrice = 1150.0
    const shippingCost = shippingMethod === "nextday" ? 100.0 : shippingMethod === "immediate" ? 200.0 : 0
    const subtotal = productPrice
    const total = subtotal + shippingCost

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex flex-col-reverse lg:flex-row gap-8">
                    {/* Left Column - Forms */}
                    <div className="space-y-6">
                        {/* Delivery */}
                        <div className="p-6 border border-gray-200 dark:border-gray-800 dark:bg-gray-950">
                            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Delivery</h2>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-gray-800 dark:text-gray-200">
                                        Country/Region
                                    </label>
                                    <select className="w-full bg-white dark:bg-gray-800 dark:text-gray-100 px-4 py-3 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-gray-300 ">
                                        <option>Bangladesh</option>
                                    </select>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="First name"
                                        className="px-4 py-3 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-gray-300 "
                                    />
                                    <input
                                        type="text"
                                        placeholder="Last name"
                                        className="px-4 py-3 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-gray-300 "
                                    />
                                </div>

                                <input
                                    type="text"
                                    placeholder="Address"
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-gray-300 "
                                />

                                <input
                                    type="text"
                                    placeholder="Apartment, suite, etc. (optional)"
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-gray-300 "
                                />

                                <div className="grid grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="City"
                                        className="px-4 py-3 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-gray-300 "
                                    />
                                    <input
                                        type="text"
                                        placeholder="Postal code (optional)"
                                        className="px-4 py-3 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-gray-300 "
                                    />
                                </div>

                                <div className="relative">
                                    <input
                                        type="tel"
                                        placeholder="Phone"
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-gray-300 "
                                    />
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    </div>
                                </div>

                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={saveInfo}
                                        onChange={(e) => setSaveInfo(e.target.checked)}
                                        className="w-4 h-4  border-gray-300 dark:border-gray-600 dark:bg-gray-700"
                                    />
                                    <span className="text-sm text-gray-700 dark:text-gray-300">
                                        Save this information for next time
                                    </span>
                                </label>

                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={textNews}
                                        onChange={(e) => setTextNews(e.target.checked)}
                                        className="w-4 h-4  border-gray-300 dark:border-gray-600 dark:bg-gray-700"
                                    />
                                    <span className="text-sm text-gray-700 dark:text-gray-300">
                                        Text me with news and offers
                                    </span>
                                </label>
                            </div>
                        </div>

                        {/* Shipping Method */}
                        <div className="p-6 border border-gray-200 dark:border-gray-800 dark:bg-gray-950 -lg">
                            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Shipping method</h2>

                            <div className="space-y-3">
                                {[
                                    {
                                        id: "standard",
                                        label: "Standard delivery (1-3 days inside Dhaka, 3-5 outside Dhaka)",
                                        price: "৳80",
                                    },
                                    {
                                        id: "nextday",
                                        label: "Next Day Delivery (inside Dhaka only, if ordered before 5:00pm)",
                                        price: "৳100.00",
                                    },
                                    {
                                        id: "immediate",
                                        label:
                                            "Immediate delivery inside Dhaka (fastest possible using UBER -10am–5pm, prepayment required)",
                                        price: "৳200.00",
                                    },
                                ].map((method) => (
                                    <label
                                        key={method.id}
                                        className={`flex items-center justify-between p-4 border  cursor-pointer transition-colors 
                    ${shippingMethod === method.id
                                                ? "border-black dark:border-gray-400 bg-gray-50 dark:bg-gray-800"
                                                : "border-gray-400 dark:border-gray-700 hover:border-gray-500"
                                            }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <input
                                                type="radio"
                                                name="shipping"
                                                value={method.id}
                                                checked={shippingMethod === method.id}
                                                onChange={(e) => setShippingMethod(e.target.value)}
                                                className="w-5 h-5"
                                            />
                                            <span className="text-sm text-gray-800 dark:text-gray-200">{method.label}</span>
                                        </div>
                                        <span className="font-semibold text-gray-900 dark:text-gray-100">{method.price}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Payment */}
                        <div className="p-6 border border-gray-200 dark:border-gray-800 dark:bg-gray-950 -lg">
                            <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Payment</h2>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                All transactions are secure and encrypted.
                            </p>

                            <div className="space-y-3">
                                {[
                                    { id: "sslcommerz", label: "SSLCOMMERZ" },
                                    { id: "cod", label: "Cash on Delivery (COD)" },
                                    { id: "bkash", label: "Bkash" },
                                ].map((method) => (
                                    <label
                                        key={method.id}
                                        className={`flex items-center justify-between p-4 border  cursor-pointer transition-colors
                                            ${paymentMethod === method.id
                                                ? "border-black dark:border-gray-400 bg-gray-50 dark:bg-gray-800"
                                                : "border-gray-400 dark:border-gray-700 hover:border-gray-500"
                                            }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <input
                                                type="radio"
                                                name="payment"
                                                value={method.id}
                                                checked={paymentMethod === method.id}
                                                onChange={(e) => setPaymentMethod(e.target.value)}
                                                className="w-5 h-5"
                                            />
                                            <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                                                {method.label}
                                            </span>
                                        </div>
                                    </label>
                                ))}

                                {paymentMethod === "cod" && (
                                    <div className="p-4 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 ">
                                        <p className="text-sm text-gray-700 dark:text-gray-300">
                                            APPLICABLE ONLY FOR BANGLADESH. You can pay in cash to our courier when you
                                            receive the goods at your doorstep.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Billing Address */}
                        <div className="p-6 border border-gray-200 dark:border-gray-800 dark:bg-gray-950 -lg">
                            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Billing address</h2>

                            <div className="space-y-3">
                                <label className="flex items-center p-4 border border-gray-400 dark:border-gray-700  cursor-pointer">
                                    <input
                                        type="radio"
                                        name="billing"
                                        value="same"
                                        checked={billingAddress === "same"}
                                        onChange={(e) => setBillingAddress(e.target.value)}
                                        className="w-5 h-5 mr-3"
                                    />
                                    <span className="text-sm text-gray-800 dark:text-gray-200">
                                        Same as shipping address
                                    </span>
                                </label>

                                <label className="flex items-center p-4 border border-gray-400 dark:border-gray-700  cursor-pointer hover:border-gray-500">
                                    <input
                                        type="radio"
                                        name="billing"
                                        value="different"
                                        checked={billingAddress === "different"}
                                        onChange={(e) => setBillingAddress(e.target.value)}
                                        className="w-5 h-5 mr-3"
                                    />
                                    <span className="text-sm text-gray-800 dark:text-gray-200">
                                        Use a different billing address
                                    </span>
                                </label>
                            </div>
                        </div>

                        {/* Review Order Button */}
                        <button className="w-full py-4 font-semibold text-lg hover:bg-gray-800 transition-colors dark:bg-gray-100  dark:hover:bg-gray-400 cursor-pointer">
                            Review order
                        </button>
                    </div>

                    {/* Right Column - Order Summary */}
                    <div className="lg:sticky lg:top-8 h-fit">
                        <div className="bg-white dark:bg-gray-950 p-6 -lg border border-gray-200 dark:border-gray-800">
                            {/* Product */}
                            <div className="flex gap-4 mb-6">
                                <div className="relative">
                                    <img
                                        src="/white-waffle-henley-shirt.jpg"
                                        alt="Product"
                                        className="w-20 h-20 object-cover border border-gray-200 dark:border-gray-700 "
                                    />
                                    <div className="absolute -top-2 -right-2 bg-gray-700 text-white -full w-6 h-6 flex items-center justify-center text-xs font-semibold">
                                        1
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-medium text-sm mb-1 text-gray-900 dark:text-gray-100">
                                        Waffle Henley - Katua - For Men - White
                                    </h3>
                                    <p className="text-xs text-gray-600 dark:text-gray-400">
                                        XL / White / Regular Fit
                                    </p>
                                </div>
                                <div className="font-semibold text-gray-900 dark:text-gray-100">৳1,150.00</div>
                            </div>

                            {/* Discount Code */}
                            <div className="flex gap-2 mb-6">
                                <input
                                    type="text"
                                    placeholder="Discount code or gift card"
                                    value={discountCode}
                                    onChange={(e) => setDiscountCode(e.target.value)}
                                    className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-gray-300 "
                                />

                            </div>

                            {/* Summary */}
                            <div className="space-y-3 border-t border-gray-200 dark:border-gray-800 pt-4">
                                <div className="flex justify-between text-sm text-gray-800 dark:text-gray-200">
                                    <span>Subtotal</span>
                                    <span className="font-medium">৳{subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-sm items-center text-gray-800 dark:text-gray-200">
                                    <div className="flex items-center gap-1">
                                        <span>Shipping</span>
                                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="font-medium">
                                        {shippingCost === 0 ? "FREE" : `৳${shippingCost.toFixed(2)}`}
                                    </span>
                                </div>
                            </div>

                            {/* Total */}
                            <div className="flex justify-between items-center border-t border-gray-200 dark:border-gray-800 pt-4 mt-4">
                                <span className="text-lg font-bold text-gray-900 dark:text-gray-100">Total</span>
                                <div className="text-right">
                                    <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">BDT</div>
                                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                                        ৳{total.toFixed(2)}
                                    </div>
                                </div>
                            </div>
                            <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                                Including ৳0.00 in taxes
                            </p>

                        </div>
                        {/* <button className="w-full mt-4 bg-black text-white py-4 font-semibold text-lg hover:bg-gray-800 transition-colors dark:bg-gray-100 dark:text-black dark:hover:bg-gray-200 ">
                            Review order
                        </button> */}
                    </div>

                </div>
            </div>
        </div>
    )
}
