import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ShieldCheck, Lock, CreditCard, ChevronLeft } from 'lucide-react';

export default function Checkout() {
  const { items, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  const shipping = cartTotal > 50 ? 0 : 5.99;
  const total = cartTotal + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      clearCart();
      setIsProcessing(false);
      alert('Order placed successfully! Thank you for shopping with Pure_Casual.');
      navigate('/');
    }, 2000);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl font-bold uppercase tracking-wider mb-4">Your Cart is Empty</h1>
        <p className="text-gray-500 mb-8">Add some items to your cart to proceed to checkout.</p>
        <Link to="/shop" className="bg-black text-white font-bold uppercase tracking-wider px-8 py-4 hover:bg-black/90 transition-colors">
          Return to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 animate-in fade-in duration-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8">
          <Link to="/shop" className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-gray-500 hover:text-black transition-colors">
            <ChevronLeft className="w-4 h-4 mr-1" /> Back to Shop
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Checkout Form */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold tracking-tighter uppercase mb-6 flex items-center">
                <span className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">1</span>
                Contact Information
              </h2>
              <div className="space-y-4">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
                />
                <div className="flex items-center">
                  <input type="checkbox" id="newsletter" className="mr-2 accent-black" />
                  <label htmlFor="newsletter" className="text-sm text-gray-600">Email me with news and offers</label>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold tracking-tighter uppercase mb-6 flex items-center">
                <span className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">2</span>
                Shipping Address
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="First Name" 
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
                />
                <input 
                  type="text" 
                  placeholder="Last Name" 
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
                />
                <input 
                  type="text" 
                  placeholder="Address" 
                  required
                  className="col-span-2 w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
                />
                <input 
                  type="text" 
                  placeholder="Apartment, suite, etc. (optional)" 
                  className="col-span-2 w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
                />
                <input 
                  type="text" 
                  placeholder="City" 
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
                />
                <div className="grid grid-cols-2 gap-4">
                  <select className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors bg-white">
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="UK">United Kingdom</option>
                  </select>
                  <input 
                    type="text" 
                    placeholder="ZIP Code" 
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold tracking-tighter uppercase mb-6 flex items-center">
                <span className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">3</span>
                Payment
              </h2>
              <div className="border border-gray-300 p-4 mb-4 flex items-center justify-between bg-gray-50">
                <div className="flex items-center">
                  <CreditCard className="w-5 h-5 mr-3 text-gray-500" />
                  <span className="font-medium">Credit Card</span>
                </div>
                <div className="flex space-x-2">
                  {/* Card Icons Placeholder */}
                  <div className="w-8 h-5 bg-gray-200 rounded"></div>
                  <div className="w-8 h-5 bg-gray-200 rounded"></div>
                  <div className="w-8 h-5 bg-gray-200 rounded"></div>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Card Number" 
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
                />
                <input 
                  type="text" 
                  placeholder="Name on Card" 
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="Expiration Date (MM/YY)" 
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
                  />
                  <input 
                    type="text" 
                    placeholder="Security Code" 
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
                  />
                </div>
                
                <button 
                  type="submit"
                  disabled={isProcessing}
                  className="w-full bg-black text-white font-bold uppercase tracking-wider py-4 mt-8 hover:bg-black/90 transition-colors flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isProcessing ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Lock className="w-4 h-4 mr-2" /> Pay ${total.toFixed(2)}
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-5">
            <div className="bg-white p-8 shadow-sm sticky top-24">
              <h2 className="text-xl font-bold tracking-tighter uppercase mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6 max-h-[400px] overflow-y-auto pr-2">
                {items.map((item) => (
                  <div key={`${item.id}-${item.size}`} className="flex gap-4">
                    <div className="w-16 h-20 bg-gray-100 flex-shrink-0 relative">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute -top-2 -right-2 bg-gray-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                        {item.quantity}
                      </span>
                    </div>
                    
                    <div className="flex-1 flex flex-col justify-center">
                      <h3 className="font-medium text-sm">{item.name}</h3>
                      <p className="text-xs text-gray-500 mt-1">Size: {item.size}</p>
                    </div>
                    <div className="flex items-center font-medium text-sm">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-6 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">
                    {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                {shipping > 0 && (
                  <div className="text-xs text-red-600 text-right">
                    Add ${(50 - cartTotal).toFixed(2)} more for free shipping
                  </div>
                )}
                <div className="border-t border-gray-200 pt-3 flex justify-between items-center mt-3">
                  <span className="font-bold uppercase tracking-wider">Total</span>
                  <span className="text-2xl font-bold">${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-center text-sm text-gray-500">
                <ShieldCheck className="w-4 h-4 mr-2" />
                Secure, encrypted checkout
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
