"use client"

import { useState } from "react"

export default function CheckoutPage() {
    const [shippingMethod, setShippingMethod] = useState("standard")
    const [paymentMethod, setPaymentMethod] = useState("cod")
    const [billingAddress, setBillingAddress] = useState("same")
    const [saveInfo, setSaveInfo] = useState(false)
    const [textNews, setTextNews] = useState(false)
    const [discountCode, setDiscountCode] = useState("")

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [address, setAddress] = useState("")
    const [apartment, setApartment] = useState("")
    const [city, setCity] = useState("")
    const [postalCode, setPostalCode] = useState("")
    const [phone, setPhone] = useState("")

    const cartItems = [
        { id: 1, name: "Waffle Henley - Katua - White", size: "XL", color: "White", price: 1150, qty: 1, image: "/white-waffle-henley-shirt.jpg" },
        { id: 2, name: "Premium Oxford Shirt - Sky Blue", size: "L", color: "Sky Blue", price: 1350, qty: 1, image: "/oxford-skyblue.jpg" },
        { id: 3, name: "Classic Polo - Navy", size: "M", color: "Navy", price: 950, qty: 2, image: "/polo-navy.jpg" },
        { id: 4, name: "Cargo Joggers - Olive", size: "32", color: "Olive", price: 1850, qty: 1, image: "/cargo-olive.jpg" },
        { id: 5, name: "Leather Belt - Brown", size: "34", color: "Brown", price: 790, qty: 1, image: "/belt-brown.jpg" }
    ]

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)
    const shippingCost = shippingMethod === "standard" ? 80 : shippingMethod === "nextday" ? 100 : 200
    const total = subtotal + shippingCost
    const itemCount = cartItems.reduce((s, i) => s + i.qty, 0)

    const handleReviewOrder = (e) => {
        e.preventDefault()
        const orderData = { firstName, lastName, phone, address, city, shippingMethod, paymentMethod, cartItems, subtotal, shippingCost, total }
        console.clear()
        console.log("ORDER READY:", orderData)
        alert("Style fixed + data logged! Check console.")
    }

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-black">
            <div className="max-w-[1440px] mx-auto px-4 py-8 lg:py-12">
                <h1 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">Checkout</h1>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* ORDER SUMMARY - TOP ON MOBILE, RIGHT ON DESKTOP */}
                    <div className="order-1 lg:order-2 lg:col-span-1">
                        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 p-6 lg:p-8 sticky top-6">
                            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                                Order Summary ({itemCount} items)
                            </h2>

                            <div className="space-y-5">
                                {cartItems.map((item, index) => (
                                    <div
                                        key={item.id}
                                        className={`flex gap-4 pb-5 ${index !== cartItems.length - 1 ? "border-b border-gray-200 dark:border-gray-800" : ""}`}
                                    >
                                        <div className="relative flex-shrink-0">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-20 h-20 rounded-lg object-cover border border-gray-200 dark:border-gray-700"
                                            />
                                            {item.qty > 1 && (
                                                <div className="absolute -top-2 -right-2 bg-black dark:bg-white text-white dark:text-black text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shadow-md">
                                                    {item.qty}
                                                </div>
                                            )}
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-medium text-gray-900 dark:text-white line-clamp-2">
                                                {item.name}
                                            </h4>
                                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                                {item.size} / {item.color}
                                            </p>
                                            {item.qty > 1 && (
                                                <p className="text-xs text-gray-500 dark:text-gray-300 mt-1">
                                                    × {item.qty}
                                                </p>
                                            )}
                                        </div>
                                        <div className="font-semibold text-right text-gray-900 dark:text-white">
                                            ৳{(item.price * item.qty).toFixed(2)}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t border-gray-200 dark:border-gray-800 mt-6 pt-6 space-y-4">
                                <div className="flex justify-between text-lg">
                                    <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
                                    <span className="font-semibold dark:text-white">৳{subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-lg">
                                    <span className="text-gray-600 dark:text-gray-400">Shipping</span>
                                    <span className="font-semibold dark:text-white">৳{shippingCost}.00</span>
                                </div>
                                <div className="flex justify-between text-3xl font-bold pt-4 border-t border-gray-300 dark:border-gray-700">
                                    <span className="dark:text-white">Total</span>
                                    <span className="text-black dark:text-white">৳{total.toFixed(2)}</span>
                                </div>
                                <p className="text-sm text-gray-500 text-center">Including VAT • Bangladesh Taka (BDT)</p>
                            </div>
                        </div>
                    </div>

                    {/* FORM - BELOW ON MOBILE, LEFT ON DESKTOP */}
                    <div className="order-2 lg:order-1 lg:col-span-2">
                        <form onSubmit={handleReviewOrder} className="space-y-6">
                            {/* Delivery Address */}
                            <section className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 p-6 lg:p-8">
                                <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Delivery Address</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <input required value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name"
                                        className="w-full px-5 py-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-black/10 dark:focus:ring-white/10 focus:border-black dark:focus:border-white transition" />
                                    <input required value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name"
                                        className="w-full px-5 py-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-black/10 dark:focus:ring-white/10 focus:border-black dark:focus:border-white transition" />
                                    <input required value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number"
                                        className="w-full px-5 py-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-black/10 dark:focus:ring-white/10 focus:border-black dark:focus:border-white transition md:col-span-2" />
                                    <input required value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Street Address"
                                        className="w-full px-5 py-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-black/10 dark:focus:ring-white/10 focus:border-black dark:focus:border-white transition md:col-span-2" />
                                    <input value={apartment} onChange={(e) => setApartment(e.target.value)} placeholder="Apartment, Suite, etc. (Optional)"
                                        className="w-full px-5 py-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-black/10 dark:focus:ring-white/10 focus:border-black dark:focus:border-white transition md:col-span-2" />
                                    <input required value={city} onChange={(e) => setCity(e.target.value)} placeholder="City"
                                        className="w-full px-5 py-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-black/10 dark:focus:ring-white/10 focus:border-black dark:focus:border-white transition" />
                                    <input value={postalCode} onChange={(e) => setPostalCode(e.target.value)} placeholder="Postal Code (Optional)"
                                        className="w-full px-5 py-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-black/10 dark:focus:ring-white/10 focus:border-black dark:focus:border-white transition" />
                                </div>

                                <div className="flex items-center gap-3 mt-6">
                                    <input type="checkbox" checked={saveInfo} onChange={(e) => setSaveInfo(e.target.checked)} className="w-5 h-5 rounded border-gray-400" />
                                    <label className="text-gray-700 dark:text-gray-300">Save this information for next time</label>
                                </div>
                                <div className="flex items-center gap-3 mt-3">
                                    <input type="checkbox" checked={textNews} onChange={(e) => setTextNews(e.target.checked)} className="w-5 h-5 rounded border-gray-400" />
                                    <label className="text-gray-700 dark:text-gray-300">Text me with news and offers</label>
                                </div>
                            </section>

                            {/* Shipping Method */}
                            <section className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 p-6 lg:p-8">
                                <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Shipping Method</h2>
                                <div className="space-y-4">
                                    {[
                                        { id: "standard", label: "Standard Delivery (1–5 days)", price: 80 },
                                        { id: "nextday", label: "Next Day Delivery (Dhaka only)", price: 100 },
                                        { id: "immediate", label: "Immediate Delivery (10am–5pm via UBER)", price: 200 }
                                    ].map((m) => (
                                        <label key={m.id} className={`block p-5 rounded-xl border-2 cursor-pointer transition-all ${shippingMethod === m.id ? "border-black dark:border-white bg-gray-50 dark:bg-gray-800" : "border-gray-300 dark:border-gray-700 hover:border-gray-400"}`}>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-4">
                                                    <input type="radio" name="shipping" value={m.id} checked={shippingMethod === m.id} onChange={(e) => setShippingMethod(e.target.value)} className="w-5 h-5" />
                                                    <span className="font-medium text-gray-900 dark:text-white">{m.label}</span>
                                                </div>
                                                <span className="font-bold text-lg">৳{m.price}</span>
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </section>

                            {/* Payment & Billing */}
                            <section className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 p-6 lg:p-8 space-y-8">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Payment Method</h2>
                                    <div className="space-y-4">
                                        {["SSLCOMMERZ", "Cash on Delivery (COD)", "Bkash"].map((label, i) => {
                                            const ids = ["sslcommerz", "cod", "bkash"]
                                            return (
                                                <label key={ids[i]} className={`block p-5 rounded-xl border-2 cursor-pointer transition-all ${paymentMethod === ids[i] ? "border-black dark:border-white bg-gray-50 dark:bg-gray-800" : "border-gray-300 dark:border-gray-700"}`}>
                                                    <div className="flex items-center gap-4">
                                                        <input type="radio" name="payment" value={ids[i]} checked={paymentMethod === ids[i]} onChange={(e) => setPaymentMethod(e.target.value)} className="w-5 h-5" />
                                                        <span className="font-medium text-gray-900 dark:text-white">{label}</span>
                                                    </div>
                                                </label>
                                            )
                                        })}
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Billing Address</h2>
                                    <div className="space-y-4">
                                        {["Same as shipping address", "Use a different billing address"].map((text, i) => (
                                            <label key={i} className={`block p-5 rounded-xl border-2 cursor-pointer transition-all ${billingAddress === (i === 0 ? "same" : "different") ? "border-black dark:border-white bg-gray-50 dark:bg-gray-800" : "border-gray-300 dark:border-gray-700"}`}>
                                                <div className="flex items-center gap-4">
                                                    <input type="radio" name="billing" value={i === 0 ? "same" : "different"} checked={billingAddress === (i === 0 ? "same" : "different")} onChange={(e) => setBillingAddress(e.target.value)} className="w-5 h-5" />
                                                    <span className="font-medium text-gray-900 dark:text-white">{text}</span>
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 active:scale-98 font-bold text-xl py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-3 tracking-tight"
                            >
                                <span>Review Order to Pay</span>
                                <span className="font-bold text-2xl">৳{total.toFixed(2)}</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}