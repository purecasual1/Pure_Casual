import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Truck, RotateCcw, ShieldCheck, ChevronRight, Eye, AlertCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

export default function Product() {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);
  const { addItem } = useCart();
  
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [viewers, setViewers] = useState(12);
  const [stock, setStock] = useState(5);
  const [error, setError] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    // Simulate live viewers changing
    const interval = setInterval(() => {
      setViewers(Math.floor(Math.random() * 15) + 5);
    }, 10000);
    return () => clearInterval(interval);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl font-bold uppercase tracking-wider mb-4">Product Not Found</h1>
        <p className="text-gray-500 mb-8">The item you're looking for doesn't exist or has been removed.</p>
        <Link to="/shop" className="bg-black text-white font-bold uppercase tracking-wider px-8 py-4 hover:bg-black/90 transition-colors">
          Return to Shop
        </Link>
      </div>
    );
  }

  const images = [product.image];
  if (product.hoverImage) images.push(product.hoverImage);
  // Add a placeholder third image
  images.push('https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80');

  const sizes = ['S', 'M', 'L', 'XL'];

  const handleAddToCart = () => {
    if (!selectedSize) {
      setError('Please select a size');
      return;
    }
    setError('');
    addItem(product, selectedSize, quantity);
  };

  return (
    <div className="animate-in fade-in duration-500 bg-white min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center text-sm text-gray-500">
          <Link to="/" className="hover:text-black transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <Link to="/shop" className="hover:text-black transition-colors">Shop</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-black font-medium">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-4 overflow-x-auto md:w-24 flex-shrink-0">
              {images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`w-20 h-24 md:w-full md:h-32 flex-shrink-0 border-2 transition-colors ${
                    activeImage === idx ? 'border-black' : 'border-transparent hover:border-gray-200'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
            
            {/* Main Image */}
            <div className="flex-grow bg-gray-100 aspect-[3/4] relative overflow-hidden">
              <img 
                src={images[activeImage]} 
                alt={product.name} 
                className="w-full h-full object-cover animate-in fade-in duration-300"
              />
              {product.badge && (
                <div className="absolute top-4 left-4 bg-black text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5">
                  {product.badge}
                </div>
              )}
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            {/* Live Viewers */}
            <div className="flex items-center text-sm text-red-600 font-medium mb-4 animate-pulse">
              <Eye className="w-4 h-4 mr-2" />
              {viewers} people are viewing this right now
            </div>

            <h1 className="text-3xl md:text-4xl font-bold tracking-tighter uppercase mb-2">{product.name}</h1>
            
            <div className="flex items-center mb-6">
              <div className="flex text-black mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-sm text-gray-500 underline cursor-pointer">128 Reviews</span>
            </div>

            <p className="text-2xl font-bold mb-6">${product.price}</p>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Size Selector */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold uppercase tracking-wider text-sm">Size</span>
                <button className="text-sm text-gray-500 underline hover:text-black transition-colors">Size Guide</button>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => {
                      setSelectedSize(size);
                      setError('');
                    }}
                    className={`py-3 border text-sm font-bold transition-colors ${
                      selectedSize === size 
                        ? 'border-black bg-black text-white' 
                        : 'border-gray-300 text-gray-700 hover:border-black'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {error && (
                <p className="text-red-500 text-sm mt-2 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" /> {error}
                </p>
              )}
            </div>

            {/* Urgency */}
            <div className="bg-red-50 border border-red-100 text-red-800 px-4 py-3 rounded-sm text-sm font-medium mb-6 flex items-center">
              <AlertCircle className="w-4 h-4 mr-2 flex-shrink-0" />
              Hurry! Only {stock} items left in stock.
            </div>

            {/* Add to Cart */}
            <button 
              onClick={handleAddToCart}
              className="w-full bg-black text-white font-bold uppercase tracking-wider py-4 hover:bg-black/90 transition-colors mb-8 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transform duration-200"
            >
              Add to Cart - ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Value Props */}
            <div className="grid grid-cols-1 gap-4 py-6 border-y border-gray-200">
              <div className="flex items-center text-sm text-gray-600">
                <Truck className="w-5 h-5 mr-3 text-black" />
                <span>Free shipping on orders over $50</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <RotateCcw className="w-5 h-5 mr-3 text-black" />
                <span>Free 30-day returns</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <ShieldCheck className="w-5 h-5 mr-3 text-black" />
                <span>Secure checkout</span>
              </div>
            </div>

            {/* Accordion Details */}
            <div className="mt-8 space-y-4">
              <details className="group border-b pb-4">
                <summary className="flex justify-between items-center font-bold uppercase tracking-wider text-sm cursor-pointer list-none">
                  <span>Details & Fit</span>
                  <span className="transition group-open:rotate-180">
                    <ChevronDownIcon />
                  </span>
                </summary>
                <div className="text-gray-600 text-sm mt-4 space-y-2">
                  <p>• True to size fit.</p>
                  <p>• Model is 6'1" wearing size M.</p>
                  <p>• Pre-shrunk to minimize shrinkage.</p>
                </div>
              </details>
              <details className="group border-b pb-4">
                <summary className="flex justify-between items-center font-bold uppercase tracking-wider text-sm cursor-pointer list-none">
                  <span>Materials & Care</span>
                  <span className="transition group-open:rotate-180">
                    <ChevronDownIcon />
                  </span>
                </summary>
                <div className="text-gray-600 text-sm mt-4 space-y-2">
                  <p>• 100% Organic Cotton.</p>
                  <p>• Machine wash cold with like colors.</p>
                  <p>• Tumble dry low or hang dry.</p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
      
      {/* Sticky Mobile Add to Cart */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t p-4 z-40 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <button 
          onClick={handleAddToCart}
          className="w-full bg-black text-white font-bold uppercase tracking-wider py-3 hover:bg-black/90 transition-colors"
        >
          Add to Cart - ${product.price}
        </button>
      </div>
    </div>
  );
}

function ChevronDownIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  );
}
