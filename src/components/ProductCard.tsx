import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../context/CartContext';
import { useCart } from '../context/CartContext';
import { ShoppingBag } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  key?: React.Key;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product, 'M'); // Default size for quick add
  };

  return (
    <Link 
      to={`/product/${product.id}`}
      className="group block relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
        <img
          src={isHovered && product.hoverImage ? product.hoverImage : product.image}
          alt={product.name}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Badges */}
        {product.badge && (
          <div className="absolute top-3 left-3 bg-black text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1">
            {product.badge}
          </div>
        )}

        {/* Quick Add Button (Desktop) */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out hidden md:block">
          <button
            onClick={handleQuickAdd}
            className="w-full bg-white text-black font-bold uppercase tracking-wider py-3 shadow-lg hover:bg-black hover:text-white transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            Quick Add
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-1">{product.name}</h3>
          <p className="text-sm text-gray-500">{product.category}</p>
        </div>
        <p className="text-sm font-bold">${product.price}</p>
      </div>
    </Link>
  );
}
