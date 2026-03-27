import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Filter, ChevronDown, Check } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function Shop() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialCategory = queryParams.get('category') || 'All';

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    if (initialCategory !== activeCategory) {
      setActiveCategory(initialCategory);
    }
  }, [initialCategory]);

  const categories = ['All', 'T-Shirts', 'Hoodies', 'Pants', 'Outerwear', 'Accessories'];

  let filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory || p.badge === activeCategory);

  if (sortBy === 'price-low') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sortBy === 'newest') {
    filteredProducts = [...filteredProducts].sort((a, b) => (a.badge === 'New' ? -1 : 1));
  }

  return (
    <div className="animate-in fade-in duration-500 bg-white min-h-screen">
      {/* Header */}
      <div className="bg-gray-50 py-16 text-center border-b">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-4">
          {activeCategory === 'All' ? 'Shop All' : activeCategory}
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto px-4">
          Discover our collection of premium, minimalist essentials designed for everyday comfort and effortless style.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          {/* Categories (Desktop) */}
          <div className="hidden md:flex space-x-8 overflow-x-auto pb-2 w-full md:w-auto">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-sm font-bold uppercase tracking-wider whitespace-nowrap pb-1 border-b-2 transition-colors ${
                  activeCategory === category 
                    ? 'border-black text-black' 
                    : 'border-transparent text-gray-400 hover:text-black'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Mobile Filter Toggle */}
          <button 
            className="md:hidden flex items-center gap-2 font-bold uppercase tracking-wider text-sm border px-4 py-2"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <Filter className="w-4 h-4" />
            Filters
          </button>

          {/* Sort */}
          <div className="flex items-center gap-3 ml-auto">
            <span className="text-sm text-gray-500 hidden sm:inline">Sort by:</span>
            <div className="relative group">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent border-b border-gray-300 py-1 pr-8 text-sm font-bold uppercase tracking-wider focus:outline-none focus:border-black cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500" />
            </div>
          </div>
        </div>

        {/* Mobile Categories Dropdown */}
        {isFilterOpen && (
          <div className="md:hidden mb-8 p-4 bg-gray-50 border">
            <h3 className="font-bold uppercase tracking-wider mb-4 text-sm">Categories</h3>
            <div className="flex flex-col space-y-3">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setIsFilterOpen(false);
                  }}
                  className={`text-left text-sm flex items-center justify-between ${
                    activeCategory === category ? 'font-bold text-black' : 'text-gray-500'
                  }`}
                >
                  {category}
                  {activeCategory === category && <Check className="w-4 h-4" />}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12 sm:gap-x-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-24 text-gray-500">
            <p className="text-xl mb-4">No products found in this category.</p>
            <button 
              onClick={() => setActiveCategory('All')}
              className="font-bold uppercase tracking-wider border-b-2 border-black pb-1 text-black hover:text-gray-500 transition-colors"
            >
              View All Products
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
