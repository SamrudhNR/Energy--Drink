import React from 'react';
import './App.css';
import { motion } from 'framer-motion';
import { 
  ChevronDown, 
  Zap, 
  Target, 
  Trophy, 
  Users, 
  Star,
  ShoppingCart,
  ArrowRight,
  Instagram,
  Facebook,
  Twitter
} from 'lucide-react';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
            >
              ENERGYX
            </motion.div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
              <a href="#products" className="hover:text-blue-400 transition-colors">Products</a>
              <a href="#benefits" className="hover:text-blue-400 transition-colors">Benefits</a>
              <a href="#testimonials" className="hover:text-blue-400 transition-colors">Reviews</a>
            </div>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all"
            >
              Order Now
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(30, 41, 59, 0.8)), url('https://images.pexels.com/photos/31094114/pexels-photo-31094114.jpeg')`
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent"
          >
            UNLEASH
            <br />
            YOUR POWER
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto"
          >
            Experience the ultimate energy boost with EnergyX. Engineered for peak performance, 
            designed for champions who never settle for less.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all transform hover:scale-105 flex items-center gap-2">
              <ShoppingCart size={20} />
              Shop Now
            </button>
            <button className="border-2 border-blue-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-400 hover:text-gray-900 transition-all transform hover:scale-105">
              Learn More
            </button>
          </motion.div>
        </div>
        
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown size={32} className="text-blue-400" />
        </motion.div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              FUEL YOUR AMBITION
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Premium energy drinks crafted for different moments of peak performance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "ENERGYX BLUE",
                flavor: "Arctic Blast",
                image: "https://images.unsplash.com/photo-1545334894-9c7a7ccefaf8",
                description: "Pure energy with a refreshing arctic taste"
              },
              {
                name: "ENERGYX STORM",
                flavor: "Thunder Strike",
                image: "https://images.unsplash.com/photo-1541694458248-5aa2101c77df",
                description: "Maximum power for extreme performance"
              },
              {
                name: "ENERGYX FOCUS",
                flavor: "Mental Edge",
                image: "https://images.unsplash.com/photo-1551524559-ebd149166b2e",
                description: "Enhanced focus and sustained energy"
              }
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
              >
                <div className="h-64 bg-gradient-to-br from-blue-600 to-cyan-500 relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover mix-blend-overlay opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-blue-400">{product.name}</h3>
                  <p className="text-gray-400 mb-2">{product.flavor}</p>
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all transform hover:scale-105">
                    Add to Cart - $3.99
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              WHY CHOOSE ENERGYX
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Science-backed formula designed for peak human performance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Zap className="w-12 h-12" />,
                title: "Instant Energy",
                description: "Rapid energy boost within 15 minutes"
              },
              {
                icon: <Target className="w-12 h-12" />,
                title: "Enhanced Focus",
                description: "Improved mental clarity and concentration"
              },
              {
                icon: <Trophy className="w-12 h-12" />,
                title: "Peak Performance",
                description: "Optimized for athletic and mental performance"
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: "Zero Crash",
                description: "Sustained energy without the crash"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-gray-800 rounded-2xl hover:bg-gray-700 transition-all duration-300"
              >
                <div className="text-blue-400 mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle Section */}
      <section className="py-20 bg-gray-800 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1530143311094-34d807799e8f')`
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                POWER YOUR
                <br />
                LIFESTYLE
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Whether you're crushing your workout, powering through work, or conquering your goals, 
                EnergyX gives you the edge you need to dominate every moment.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">200mg Natural Caffeine</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">B-Vitamins Complex</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">Zero Sugar Formula</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src="https://images.unsplash.com/photo-1659614871014-50243eb3579a"
                alt="Fitness"
                className="rounded-2xl object-cover h-48 hover:scale-105 transition-transform duration-300"
              />
              <img
                src="https://images.unsplash.com/photo-1465310477141-6fb93167a273"
                alt="Adventure"
                className="rounded-2xl object-cover h-48 hover:scale-105 transition-transform duration-300"
              />
              <img
                src="https://images.pexels.com/photos/13990510/pexels-photo-13990510.jpeg"
                alt="Performance"
                className="rounded-2xl object-cover h-48 col-span-2 hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              CHAMPIONS CHOOSE ENERGYX
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of athletes, professionals, and achievers who trust EnergyX
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Professional Athlete",
                rating: 5,
                text: "EnergyX gives me the clean energy I need for my training sessions. No crash, just pure performance."
              },
              {
                name: "Mike Rodriguez",
                role: "Fitness Coach",
                rating: 5,
                text: "I recommend EnergyX to all my clients. It's the perfect pre-workout fuel that actually delivers."
              },
              {
                name: "Jessica Park",
                role: "Business Executive",
                rating: 5,
                text: "Long days at the office are no match for EnergyX. It keeps me sharp and focused all day long."
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-800 p-6 rounded-2xl hover:bg-gray-700 transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-blue-400 text-blue-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-blue-400 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold mb-6 text-white">
              READY TO UNLEASH YOUR POWER?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Join the energy revolution. Get your EnergyX delivered to your door.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center gap-2">
                <ShoppingCart size={20} />
                Order Now
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105 flex items-center gap-2">
                Learn More
                <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-4">
                ENERGYX
              </h3>
              <p className="text-gray-400">
                Premium energy drinks for peak performance and ultimate focus.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li>EnergyX Blue</li>
                <li>EnergyX Storm</li>
                <li>EnergyX Focus</li>
                <li>Variety Pack</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Contact</li>
                <li>Careers</li>
                <li>Press</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <div className="flex gap-4">
                <Instagram className="w-6 h-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
                <Facebook className="w-6 h-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
                <Twitter className="w-6 h-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EnergyX. All rights reserved. Fuel your potential.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;