import { Menu, X, MapPin, Calendar, Phone } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background Video */}
      <video autoPlay muted loop className="fixed inset-0 w-full h-full object-cover z-0 opacity-50">
        <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-digital-animation-8645-large.mp4" type="video/mp4" />
      </video>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <img src="msec3.png" alt="MSEC Logo" className="h-16 w-auto" />
            </div>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white hover:text-cyan-400 transition"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className="hidden md:flex items-center space-x-12">
              <a href="#home" className="text-white hover:text-cyan-400 transition text-lg font-medium">Home</a>
              <a href="#events" className="text-white hover:text-cyan-400 transition text-lg font-medium">Events</a>
              <a href="#sponsors" className="text-white hover:text-cyan-400 transition text-lg font-medium">Sponsors</a>
              <a href="#about" className="text-white hover:text-cyan-400 transition text-lg font-medium">About</a>
              <a href="#contact" className="text-white hover:text-cyan-400 transition text-lg font-medium">Contact</a>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg">
            <div className="px-4 pt-2 pb-3 space-y-2">
              <a href="#home" className="block px-4 py-3 text-white hover:text-cyan-400 transition text-lg font-medium">Home</a>
              <a href="#events" className="block px-4 py-3 text-white hover:text-cyan-400 transition text-lg font-medium">Events</a>
              <a href="#sponsors" className="block px-4 py-3 text-white hover:text-cyan-400 transition text-lg font-medium">Sponsors</a>
              <a href="#about" className="block px-4 py-3 text-white hover:text-cyan-400 transition text-lg font-medium">About</a>
              <a href="#contact" className="block px-4 py-3 text-white hover:text-cyan-400 transition text-lg font-medium">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center text-center px-4 pt-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-3 gap-8 mb-12 items-center justify-items-center">
            <img src="msec3.png" alt="MSEC Logo" className="w-32 h-32 md:w-40 md:h-40 object-contain" />
            <img src="yantra3.png" alt="Yantra Logo" className="w-40 h-40 md:w-48 md:h-48 object-contain" />
            <img src="torque3.png" alt="Torque Logo" className="w-32 h-32 md:w-40 md:h-40 object-contain" />
          </div>
          
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-yellow-400 mb-6">
            Meenakshi Sundararajan Engineering College
          </h1>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-6">
            YANTRA 2K25
          </h2>
          
          <p className="text-xl md:text-2xl mb-10">
            A NATIONAL LEVEL TECHNICAL SYMPOSIUM
            <br />
            <span>16<sup>th</sup> APRIL</span>
          </p>

          <button className="px-10 py-4 bg-cyan-400 text-black font-bold rounded-lg hover:bg-cyan-300 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_cyan] text-lg">
            REGISTER NOW
          </button>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Technical Events
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300">
                <img 
                  src={`https://source.unsplash.com/random/400x300?tech=${item}`}
                  alt={`Event ${item}`}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold mb-2">Technical Event {item}</h3>
                <p className="text-gray-300 mb-4">Description of the technical event goes here.</p>
                <button className="w-full px-4 py-2 bg-cyan-400 text-black font-bold rounded-lg hover:bg-cyan-300 transition">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative bg-black/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Contact Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p>Arcot Road, Kodambakkam<br />Chennai-24</p>
            </div>

            <div className="text-center p-6">
              <Calendar className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
              <h3 className="text-xl font-bold mb-2">Event Date</h3>
              <p>16th April, 2025</p>
            </div>

            <div className="text-center p-6">
              <Phone className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
              <h3 className="text-xl font-bold mb-2">Contact</h3>
              <p>+91 1234567890</p>
            </div>
          </div>

          <div className="mt-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.683566432549!2d80.22393577484293!3d13.055802687267327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266f499eee457%3A0x4d3f7e677496e707!2sMeenakshi%20Sundararajan%20Engineering%20College!5e0!3m2!1sen!2sin!4v1742882891511!5m2!1sen!2sin"
              className="w-full h-[400px] rounded-xl"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/80 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© 2025 Meenakshi Sundararajan Engineering College. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;