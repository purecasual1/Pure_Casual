import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <div className="animate-in fade-in duration-500 bg-white min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] w-full bg-gray-100 flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="About Pure_Casual" 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-6 leading-tight">
            Our Story
          </h1>
          <p className="text-lg md:text-xl font-medium opacity-90">
            Redefining everyday essentials through clean design and uncompromising quality.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tighter uppercase mb-6">The Philosophy</h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Pure_Casual was born from a simple observation: the modern wardrobe is too complicated. We set out to create a collection of essentials that strip away the noise—no loud logos, no fleeting trends, just perfect fits and premium fabrics.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <img 
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Quality" 
                className="w-full h-[500px] object-cover"
              />
              <div>
                <h3 className="text-2xl font-bold tracking-tighter uppercase mb-4">Uncompromising Quality</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We spend months sourcing the right materials. From our heavyweight organic cotton tees to our custom-milled fleece, every fabric is chosen for its durability, comfort, and how it drapes on the body.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our garments are designed to break in, not break down. They look better with age and wear, becoming the pieces you reach for day after day.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold tracking-tighter uppercase mb-4">Ethical Production</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We believe that good design shouldn't come at the expense of the people who make it or the planet we share. We partner exclusively with factories that provide fair wages, safe working conditions, and prioritize sustainable practices.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  By cutting out the traditional retail markup, we're able to invest more in the quality of our products and the welfare of our workers, while still offering accessible prices.
                </p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Production" 
                className="w-full h-[500px] object-cover order-1 md:order-2"
              />
            </div>

            <div className="text-center pt-12 border-t">
              <h2 className="text-3xl font-bold tracking-tighter uppercase mb-8">Experience Pure_Casual</h2>
              <Link 
                to="/shop" 
                className="inline-flex items-center bg-black text-white font-bold uppercase tracking-wider px-10 py-4 hover:bg-black/90 transition-colors"
              >
                Shop The Collection <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
