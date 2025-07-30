import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import p1 from '../assets/pics_2.jpeg'
// import p2 from '../assets/p2.jpeg'

function Homepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/signin');
  };

  return (
    <div className="text-gray-800 font-sans bg-[#fefaf6]">

      <nav className="bg-[#f5e5d8] shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="text-[#6b3e26] text-xl font-bold">FirstFound</div>
            <div className="hidden md:flex space-x-6 items-center">
              <a href="#" className="text-[#6b3e26] hover:text-[#a0522d] transition">Explore</a>
              <a href="#" className="text-[#6b3e26] hover:text-[#a0522d] transition">Launch Product</a>
              <a href="#" className="text-[#6b3e26] hover:text-[#a0522d] transition">For Investors</a>
              <a href="#" className="text-[#6b3e26] hover:text-[#a0522d] transition">About</a>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <input
                type="text"
                placeholder="Search products..."
                className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#d2a679]"
              />
              <button
                onClick={handleSignIn}
                className="bg-[#6b3e26] text-white px-4 py-1.5 rounded hover:bg-[#8b5c3c] transition"
              >
                Sign In
              </button>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#6b3e26]">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden px-4 pb-4 space-y-2 bg-[#f5e5d8]">
            <a href="#" className="block text-[#6b3e26] hover:text-[#a0522d]">Explore</a>
            <a href="#" className="block text-[#6b3e26] hover:text-[#a0522d]">Launch Product</a>
            <a href="#" className="block text-[#6b3e26] hover:text-[#a0522d]">For Investors</a>
            <a href="#" className="block text-[#6b3e26] hover:text-[#a0522d]">About</a>
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#d2a679]"
            />
            <button
              onClick={handleSignIn}
              className="w-full bg-[#6b3e26] text-white py-2 rounded hover:bg-[#8b5c3c] transition"
            >
              Sign In
            </button>
          </div>
        )}
      </nav>


      <section className="bg-[#fffdf9] py-16 text-center px-4">
        <h1 className="text-4xl font-bold mb-4 text-[#5c3a21]">
          Discover India's next big thing before the rest of the world does
        </h1>
        <p className="text-lg mb-6 text-gray-700">Explore and pre-order innovative products from India's top startups.</p>
        <button className="bg-[#6b3e26] text-white px-6 py-2 rounded hover:bg-[#8b5c3c] transition">
          Explore Products
        </button>
      </section>


      <section className="py-12 px-4 max-w-7xl mx-auto bg-[#fefaf6]">
        <h2 className="text-2xl font-semibold mb-6 text-[#6b3e26]">Featured Products</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div key={item} className="border rounded-lg shadow hover:shadow-lg transition bg-white">
              <img
                src={p1}
                alt={`Product ${item}`}
                className="w-full h-52 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-[#4a2e19]">Product {item}</h3>
                <p className="text-sm text-gray-600">Category: Tech</p>
                <div className="my-2 text-sm text-gray-700">₹12.5L raised of ₹15L</div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div className="bg-[#6b3e26] h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
                <button className="mt-2 bg-[#6b3e26] text-white px-4 py-1 rounded hover:bg-green-700">
                  Pre-order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>


      <section className="bg-[#f0f4f8] py-12 px-4 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-[#6b3e26]">Turn your innovative idea into reality</h2>
        <p className="mb-6 text-gray-700">Validate your idea, raise working capital, build community, attract investors.</p>
        <button className="bg-[#6b3e26] text-white px-6 py-2 rounded hover:bg-[#8b5c3c] transition">
          Launch Your Campaign
        </button>
      </section>


      <section className="bg-white py-12 px-4 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-[#6b3e26]">Invest in Startups</h2>
        <p className="mb-6 text-gray-700">Get early access to curated deal flow and traction-backed startups.</p>
        <button className="bg-[#6b3e26] text-white px-6 py-2 rounded hover:bg-[#8b5c3c] transition">
          Join Investor Network
        </button>
      </section>


      <section className="bg-[#fefaf6] py-12 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-8 text-[#6b3e26]">How It Works</h2>
        <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
          {['Discover', 'Pre-order', 'Track & Support'].map((step, index) => (
            <div key={index} className="flex-1 p-4 bg-white shadow rounded">
              <h3 className="font-bold text-lg mb-2">{index + 1}. {step}</h3>
              <p>{step === 'Discover' ? 'Browse innovative products by Indian startups.'
                : step === 'Pre-order' ? 'Support startups by pre-ordering their products.'
                : 'Follow progress and get updates from founders.'}</p>
            </div>
          ))}
        </div>
      </section>


      <section className="py-12 px-4 text-center bg-white">
        <h2 className="text-2xl font-semibold mb-4 text-[#6b3e26]">What Our Users Say</h2>
        <p className="text-gray-600">[Testimonials carousel coming soon]</p>
      </section>


      <section className="py-8 px-4 bg-[#f0f4f8] text-center">
        <h3 className="text-lg font-semibold mb-4 text-[#6b3e26]">Trusted By</h3>
        <div className="flex flex-wrap justify-center gap-6">
          {['Sequoia', 'Accel', '100X.VC'].map((logo) => (
            <div key={logo} className="w-32 h-12 bg-white shadow rounded flex items-center justify-center">
              <span className="text-sm text-gray-500">{logo}</span>
            </div>
          ))}
        </div>
      </section>


      <footer className="bg-[#f5e5d8] text-[#5a3c2e] py-8 px-4 mt-8">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { title: 'Explore', items: ['Products', 'Categories', 'Success Stories'] },
            { title: 'For Startups', items: ['Launch Project', 'How It Works'] },
            { title: 'For Investors', items: ['Join Network', 'Success Metrics'] },
            { title: 'Company', items: ['About', 'Blog', 'Contact', 'Support'] }
          ].map(({ title, items }) => (
            <div key={title}>
              <h4 className="font-semibold mb-2">{title}</h4>
              <ul>
                {items.map((i) => <li key={i} className="text-sm">{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center text-sm text-[#8c6b5c]">© 2025 FirstFound. All rights reserved.</div>
      </footer>
    </div>
  );
}

export default Homepage;
