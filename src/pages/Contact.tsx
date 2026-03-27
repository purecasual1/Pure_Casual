import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="animate-in fade-in duration-500 bg-white min-h-screen">
      {/* Header */}
      <div className="bg-gray-50 py-16 text-center border-b">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-4">
          Get in Touch
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto px-4">
          Have a question about an order, sizing, or just want to say hello? We'd love to hear from you.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold tracking-tighter uppercase mb-8">Contact Us</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-gray-100 p-4 rounded-full mr-6">
                  <Mail className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="font-bold uppercase tracking-wider mb-1">Email</h3>
                  <p className="text-gray-600 mb-2">Our team typically responds within 24 hours.</p>
                  <a href="mailto:support@purecasual.com" className="font-medium hover:underline">support@purecasual.com</a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-gray-100 p-4 rounded-full mr-6">
                  <Phone className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="font-bold uppercase tracking-wider mb-1">Phone</h3>
                  <p className="text-gray-600 mb-2">Mon-Fri from 9am to 5pm EST.</p>
                  <a href="tel:+18001234567" className="font-medium hover:underline">+1 (800) 123-4567</a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-gray-100 p-4 rounded-full mr-6">
                  <MapPin className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="font-bold uppercase tracking-wider mb-1">Headquarters</h3>
                  <p className="text-gray-600">
                    123 Minimalist Ave.<br />
                    Suite 400<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t">
              <h3 className="font-bold uppercase tracking-wider mb-4">FAQ</h3>
              <div className="space-y-4 text-gray-600">
                <details className="group">
                  <summary className="font-medium text-black cursor-pointer list-none flex justify-between items-center">
                    What is your return policy?
                    <span className="transition group-open:rotate-180">▼</span>
                  </summary>
                  <p className="mt-2 text-sm">We offer free returns within 30 days of purchase. Items must be unworn and in original condition.</p>
                </details>
                <details className="group">
                  <summary className="font-medium text-black cursor-pointer list-none flex justify-between items-center">
                    How long does shipping take?
                    <span className="transition group-open:rotate-180">▼</span>
                  </summary>
                  <p className="mt-2 text-sm">Standard shipping takes 3-5 business days. Expedited options are available at checkout.</p>
                </details>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 md:p-12">
            <h2 className="text-2xl font-bold tracking-tighter uppercase mb-8">Send a Message</h2>
            
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 text-green-800 p-6 text-center animate-in fade-in">
                <h3 className="font-bold uppercase tracking-wider mb-2">Message Sent!</h3>
                <p>Thank you for reaching out. We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-bold uppercase tracking-wider mb-2">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      required
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors bg-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-bold uppercase tracking-wider mb-2">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      required
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold uppercase tracking-wider mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-bold uppercase tracking-wider mb-2">Subject</label>
                  <select 
                    id="subject" 
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors bg-white appearance-none"
                  >
                    <option>Order Inquiry</option>
                    <option>Returns & Exchanges</option>
                    <option>Product Information</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold uppercase tracking-wider mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors bg-white resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-black text-white font-bold uppercase tracking-wider py-4 hover:bg-black/90 transition-colors flex items-center justify-center"
                >
                  Send Message <Send className="w-4 h-4 ml-2" />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
