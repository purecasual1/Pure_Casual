import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Check if already shown in this session
    const shown = sessionStorage.getItem('exit_intent_shown');
    if (shown) {
      setHasShown(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem('exit_intent_shown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  if (!isVisible) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => setIsVisible(false), 3000);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-300">
      <div className="bg-white max-w-lg w-full relative overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-black z-10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="flex flex-col md:flex-row h-full">
          {/* Image Side */}
          <div className="hidden md:block w-2/5 bg-gray-100 relative">
            <img 
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Model" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          
          {/* Content Side */}
          <div className="w-full md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
            {isSubmitted ? (
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold tracking-tighter uppercase">Check Your Email!</h3>
                <p className="text-gray-600">Your 15% off code is on its way.</p>
              </div>
            ) : (
              <>
                <h3 className="text-3xl font-bold tracking-tighter uppercase mb-2 leading-tight">
                  Wait! Don't Leave Empty Handed.
                </h3>
                <p className="text-gray-600 mb-6">
                  Get <span className="font-bold text-black">15% OFF</span> your first order. Sign up for our newsletter to claim your discount instantly.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
                  />
                  <button 
                    type="submit"
                    className="w-full bg-black text-white font-bold uppercase tracking-wider py-3 hover:bg-black/90 transition-colors"
                  >
                    Claim 15% Off
                  </button>
                </form>
                
                <button 
                  onClick={() => setIsVisible(false)}
                  className="mt-4 text-sm text-gray-400 hover:text-black underline transition-colors w-full text-center"
                >
                  No thanks, I prefer paying full price
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
