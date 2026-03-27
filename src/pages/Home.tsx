import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShieldCheck, Truck, RotateCcw, CheckCircle2 } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function Home() {
  const bestSellers = products.filter(p => p.badge === 'Best Seller' || p.badge === 'Trending').slice(0, 4);

  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] w-full bg-gray-100 flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Minimalist Fashion" 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/30" />
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-6 leading-tight">
            Minimal Style.<br />Maximum Comfort.
          </h1>
          <p className="text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto opacity-90">
            Elevate your everyday wardrobe with clean lines, premium fabrics, and effortless silhouettes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/shop" 
              className="bg-white text-black font-bold uppercase tracking-wider px-10 py-4 hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              Shop Now <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/shop?category=New" 
              className="bg-transparent border-2 border-white text-white font-bold uppercase tracking-wider px-10 py-4 hover:bg-white/10 transition-colors flex items-center justify-center"
            >
              View Lookbook
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <ShieldCheck className="w-8 h-8 mb-4 text-black" />
              <h3 className="font-bold uppercase tracking-wider text-sm mb-2">Premium Fabric</h3>
              <p className="text-gray-500 text-sm">Ethically sourced materials</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle2 className="w-8 h-8 mb-4 text-black" />
              <h3 className="font-bold uppercase tracking-wider text-sm mb-2">Clean Design</h3>
              <p className="text-gray-500 text-sm">Minimalist aesthetics</p>
            </div>
            <div className="flex flex-col items-center">
              <Truck className="w-8 h-8 mb-4 text-black" />
              <h3 className="font-bold uppercase tracking-wider text-sm mb-2">Free Shipping</h3>
              <p className="text-gray-500 text-sm">On orders over $50</p>
            </div>
            <div className="flex flex-col items-center">
              <RotateCcw className="w-8 h-8 mb-4 text-black" />
              <h3 className="font-bold uppercase tracking-wider text-sm mb-2">Easy Returns</h3>
              <p className="text-gray-500 text-sm">30-day return policy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter uppercase mb-4">Trending Now</h2>
              <p className="text-gray-500 max-w-2xl">Our most loved pieces, designed for everyday wear.</p>
            </div>
            <Link to="/shop" className="hidden md:flex items-center font-bold uppercase tracking-wider hover:text-gray-500 transition-colors">
              View All <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {bestSellers.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Link to="/shop" className="inline-flex items-center font-bold uppercase tracking-wider border-b-2 border-black pb-1 hover:text-gray-500 transition-colors">
              View All Products <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Lifestyle Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-6 leading-tight">
                Designed for the<br />Modern Routine.
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                We believe that less is more. Our collections are built around versatile, high-quality essentials that form the foundation of a clean, effortless wardrobe. No loud logos, just perfect fits and premium fabrics.
              </p>
              <Link 
                to="/about" 
                className="inline-flex items-center font-bold uppercase tracking-wider border-b-2 border-black pb-1 hover:text-gray-500 transition-colors"
              >
                Read Our Story <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Lifestyle 1" 
                className="w-full h-[400px] object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1485230895905-ef350c266e79?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Lifestyle 2" 
                className="w-full h-[400px] object-cover mt-12"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter uppercase mb-16 text-center">What They Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex M.",
                review: "The quality of the heavyweight tee is insane. It fits perfectly and hasn't lost its shape after multiple washes. Definitely my new go-to brand.",
                rating: 5
              },
              {
                name: "Sarah T.",
                review: "Finally found a brand that understands minimalist design. The hoodie is so soft and the fit is exactly what I was looking for. Clean and simple.",
                rating: 5
              },
              {
                name: "Jordan K.",
                review: "Fast shipping and the packaging was premium. The chinos are incredibly comfortable for all-day wear. Highly recommend Pure_Casual.",
                rating: 5
              }
            ].map((review, i) => (
              <div key={i} className="bg-gray-50 p-8 flex flex-col items-center text-center">
                <div className="flex text-black mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{review.review}"</p>
                <p className="font-bold uppercase tracking-wider text-sm">{review.name}</p>
                <div className="flex items-center mt-2 text-xs text-gray-400 uppercase tracking-wider">
                  <CheckCircle2 className="w-3 h-3 mr-1" /> Verified Buyer
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / Promo */}
      <section className="py-24 bg-black text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-6">Join the Club</h2>
          <p className="text-lg text-gray-400 mb-10">
            Subscribe to get 10% off your first order, plus early access to new drops and exclusive sales.
          </p>
          <form className="flex flex-col sm:flex-row max-w-md mx-auto gap-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow px-6 py-4 bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
              required
            />
            <button 
              type="submit" 
              className="bg-white text-black font-bold uppercase tracking-wider px-8 py-4 hover:bg-gray-200 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
