import { useState } from 'react';

export default function HomePage() {
  const [couponCode, setCouponCode] = useState('');

  const generateCoupon = () => {
    // Simple coupon generation logic (replace with your own logic)
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < 8; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setCouponCode(code);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-orange-600">LunchCoupon</h1>
            <div className="space-x-4">
              <a href="#features" className="text-gray-600 hover:text-orange-600">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-orange-600">How It Works</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-400 to-orange-600 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Generate Your Daily Lunch Coupon
          </h1>
          <p className="text-xl text-orange-100 mb-8">
            Get exciting discounts on your favorite meals every day!
          </p>
          <button 
            onClick={generateCoupon}
            className="bg-white text-orange-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-50 transition-all"
          >
            Generate Coupon
          </button>
          
          {couponCode && (
            <div className="mt-8 animate-fade-in">
              <p className="text-white text-xl mb-2">Your Coupon Code:</p>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 inline-block">
                <span className="text-3xl font-mono font-bold text-white tracking-wider">
                  {couponCode}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-orange-600 text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Daily Discounts</h3>
              <p className="text-gray-600">Get new discounts every day on different restaurants</p>
            </div>
            <div className="p-6 border rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-orange-600 text-4xl mb-4">⏱️</div>
              <h3 className="text-xl font-semibold mb-2">Instant Generation</h3>
              <p className="text-gray-600">Generate your coupon code in just one click</p>
            </div>
            <div className="p-6 border rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-orange-600 text-4xl mb-4">💸</div>
              <h3 className="text-xl font-semibold mb-2">Save Money</h3>
              <p className="text-gray-600">Enjoy savings on your daily lunch expenses</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Generate Coupon</h3>
              <p className="text-gray-600">Click the generate button to create your unique code</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Visit Restaurant</h3>
              <p className="text-gray-600">Choose from our partner restaurants</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Enjoy Savings</h3>
              <p className="text-gray-600">Apply the coupon at checkout and save</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="mb-4">© 2023 LunchCoupon. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-orange-400">Privacy Policy</a>
            <a href="#" className="hover:text-orange-400">Terms of Service</a>
            <a href="#" className="hover:text-orange-400">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}