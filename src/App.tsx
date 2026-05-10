/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  Menu as MenuIcon, 
  X, 
  ChevronRight, 
  Star, 
  MapPin, 
  Phone, 
  ArrowRight, 
  Truck, 
  Heart, 
  Navigation,
  Download,
  ShoppingBag,
  ExternalLink,
  Facebook,
  Twitter,
  Instagram,
  Play
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
interface MenuItem {
  id: number;
  name: string;
  price: string;
  desc: string;
  icon: string;
}

interface Testimonial {
  id: number;
  name: string;
  location: string;
  quote: string;
  rating: number;
}

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 h-16 flex items-center ${scrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}>
      <div className="w-full flex justify-between items-center px-8">
        {/* Logo */}
        <div className="flex items-center gap-8">
          <a href="#" className="flex items-center group">
            <span className="text-3xl font-display text-brand-red italic font-bold tracking-tight">
              Chick-fil-A
            </span>
          </a>

          {/* Nav Links */}
          <div className="hidden lg:flex gap-6 text-sm font-extrabold uppercase tracking-widest text-slate-500">
            <a href="#menu" className="hover:text-brand-red transition-colors">Menu</a>
            <a href="#locations" className="hover:text-brand-red transition-colors">Locations</a>
            <a href="#app" className="hover:text-brand-red transition-colors">App</a>
            <a href="#catering" className="hover:text-brand-red transition-colors">Catering</a>
            <a href="#about" className="hover:text-brand-red transition-colors">About</a>
          </div>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <button className="btn-primary shadow-md">Order Now</button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-brand-red" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6 font-bold text-lg text-gray-700">
              <a href="#menu" onClick={() => setIsOpen(false)}>Menu</a>
              <a href="#locations" onClick={() => setIsOpen(false)}>Locations</a>
              <a href="#app" onClick={() => setIsOpen(false)}>App</a>
              <a href="#catering" onClick={() => setIsOpen(false)}>Catering</a>
              <button className="btn-primary w-full shadow-lg">Order Now</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] pt-16 flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="bg-gradient-to-br from-red-50 to-white rounded-3xl p-10 md:p-20 flex flex-col md:grid md:grid-cols-2 items-center gap-12 relative overflow-hidden border border-red-100 shadow-sm">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <h1 className="text-6xl md:text-8xl font-display leading-tight text-slate-900 mb-6">
              More Than a Meal. <br />
              <span className="text-brand-red italic">It's a Memory.</span>
            </h1>
            <p className="text-slate-600 text-xl md:text-2xl mb-10 max-w-lg leading-relaxed">
              Fresh ingredients, genuine care, and a taste that brings people together since 1946.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="btn-primary !px-10 !py-4 shadow-xl">
                Order Online
              </button>
              <button className="btn-outline !px-10 !py-4">
                Find a Location
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex justify-center z-10"
          >
            <div className="w-64 h-64 md:w-96 md:h-96 relative animate-float drop-shadow-2xl flex items-center justify-center">
               <div className="text-[12rem] md:text-[20rem] select-none">🍗</div>
            </div>
          </motion.div>

          {/* Bottom Hint */}
          <div className="absolute bottom-8 left-10 flex items-center gap-2 text-brand-red font-bold animate-bounce text-sm uppercase tracking-widest hidden lg:flex">
            <span>Scroll for flavor</span>
            <ArrowRight className="rotate-90" size={16} />
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialProofTicker = () => {
  const items = [
    "⭐ #1 in Customer Satisfaction 8 Years Running",
    "🍗 Over 3 Billion Sandwiches Served",
    "📍 3,000+ Locations Nationwide",
    "❤️ Closed Sundays — Because We Care",
    "🥤 Legendary Iced Tea & Lemonade",
    "🌿 Fresh, Never Frozen Ingredients"
  ];

  return (
    <div className="bg-brand-red text-white py-4 overflow-hidden border-y border-brand-red-dark">
      <div className="ticker-track">
        {Array(4).fill(items).flat().map((item, i) => (
          <span key={i} className="font-extrabold px-12 whitespace-nowrap text-sm opacity-90 uppercase tracking-[0.2em]">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

const MenuSection = () => {
  const items: MenuItem[] = [
    { id: 1, name: "Original Chicken Sandwich", price: "$5.45", desc: "A boneless breast of chicken seasoned to perfection, hand-breaded, cooked in 100% refined peanut oil and served on a toasted, buttered bun with dill pickle chips.", icon: "🍔" },
    { id: 2, name: "Spicy Deluxe Sandwich", price: "$6.85", desc: "A boneless breast of chicken seasoned with a spicy blend of peppers, freshly breaded, pressure cooked in 100% refined peanut oil and served on a toasted, buttered bun.", icon: "🌶️" },
    { id: 3, name: "Waffle Potato Fries", price: "$3.25", desc: "Waffle-cut potatoes cooked in canola oil until crispy outside and tender inside. Sprinkled with Sea Salt.", icon: "🍟" },
    { id: 4, name: "Chick-fil-A Sauce (8oz)", price: "$2.75", desc: "Our classic dipping sauce with notes of honey mustard and a smoky tang.", icon: "🍯" }
  ];

  return (
    <section id="menu" className="py-24 max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-display text-slate-900 mb-4">Fan Favorites</h2>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg uppercase tracking-widest font-bold text-sm">Deliciously Crafted • Freshly Served</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-brand-red hover:shadow-xl transition-all duration-300 group flex flex-col"
          >
            <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform bg-slate-50 rounded-xl py-8 flex justify-center">
              {item.icon}
            </div>
            <h3 className="text-sm font-extrabold mb-2 uppercase tracking-wide">{item.name}</h3>
            <p className="text-xs text-slate-500 mb-4 line-clamp-2 leading-relaxed">{item.desc}</p>
            <div className="flex justify-between items-center mt-auto border-t border-slate-100 pt-4">
              <span className="text-lg font-bold text-brand-red">{item.price}</span>
              <button className="text-slate-400 hover:text-brand-red transition-colors flex items-center gap-1 text-xs font-black uppercase tracking-widest">
                Add <ShoppingBag size={14} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a href="#" className="inline-flex items-center gap-2 font-bold text-brand-red hover:underline group">
          View Full Menu <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
};

const WhyUs = () => {
  const points = [
    { title: "Fresh, Never Frozen", desc: "All chicken is hand-breaded fresh daily in our kitchens.", icon: "🌿" },
    { title: "Genuine Hospitality", desc: "My pleasure isn't just a phrase, it's a promise to serve you.", icon: "💛" },
    { title: "Community First", desc: "Locally owned and operated by people in your own neighborhood.", icon: "🏘️" }
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {points.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-8 rounded-3xl bg-brand-cream border border-orange-100 hover:shadow-lg transition-shadow"
            >
              <div className="text-5xl mb-6">{p.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{p.title}</h3>
              <p className="text-gray-600 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AppSection = () => {
  return (
    <section id="app" className="bg-brand-red py-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12">
        <div className="text-white">
          <h2 className="text-4xl md:text-6xl font-display font-black mb-8">
            Order Ahead. <br />
            Skip the Line. <br />
            <span className="text-brand-gold">Earn Rewards.</span>
          </h2>
          <ul className="space-y-4 mb-10 text-lg opacity-90 font-medium">
            <li className="flex items-center gap-3"><ChevronRight className="text-brand-gold" /> Mobile ordering & pickup</li>
            <li className="flex items-center gap-3"><ChevronRight className="text-brand-gold" /> Exclusive member-only deals</li>
            <li className="flex items-center gap-3"><ChevronRight className="text-brand-gold" /> Points on every purchase</li>
            <li className="flex items-center gap-3"><ChevronRight className="text-brand-gold" /> Free food milestones</li>
          </ul>
          <div className="flex flex-wrap gap-4">
            <button className="bg-black text-white px-8 py-3 rounded-2xl flex items-center gap-3 hover:scale-105 transition-transform group">
              <div className="text-2xl opacity-80"></div>
              <div className="text-left">
                <div className="text-[10px] uppercase opacity-70">Download on</div>
                <div className="text-xl font-bold leading-tight">App Store</div>
              </div>
            </button>
            <button className="bg-black text-white px-8 py-3 rounded-2xl flex items-center gap-3 hover:scale-105 transition-transform group">
              <Play fill="white" size={20} className="opacity-80" />
              <div className="text-left">
                <div className="text-[10px] uppercase opacity-70">Get it on</div>
                <div className="text-xl font-bold leading-tight">Google Play</div>
              </div>
            </button>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end">
          {/* CSS Drawn Phone Mockup */}
          <div className="w-[280px] h-[560px] bg-gray-900 rounded-[3rem] border-[8px] border-gray-800 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-2xl"></div>
            <div className="absolute inset-0 m-2 bg-white rounded-[2.5rem] p-6 flex flex-col items-center justify-center text-center">
              <div className="text-6xl mb-6 animate-bounce">🥪</div>
              <div className="w-16 h-1 bg-brand-red rounded-full mb-4"></div>
              <h4 className="text-gray-900 font-bold mb-2">My Chick-fil-A</h4>
              <p className="text-xs text-gray-500 mb-8 px-4 leading-relaxed">Your reward balance: <br/><span className="text-brand-red font-black text-xl">1,240 pts</span></p>
              <div className="w-full h-10 bg-brand-red rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg">
                View Rewards
              </div>
            </div>
          </div>
          {/* Accent decoration */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-gold/20 rounded-full blur-3xl animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

const LocationSection = () => {
  const sampleLocations = ["Atlanta, GA", "Dallas, TX", "New York, NY"];
  
  return (
    <section id="locations" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="inline-block p-4 bg-brand-cream rounded-full mb-6">
          <MapPin size={40} className="text-brand-red" />
        </div>
        <h2 className="text-4xl md:text-5xl font-display font-black text-brand-red mb-4">Find Your Nearest Chick-fil-A</h2>
        <div className="max-w-xl mx-auto mt-10 relative">
          <input 
            type="text" 
            placeholder="Enter ZIP code or city..."
            className="w-full px-8 py-5 rounded-full border-2 border-gray-100 focus:border-brand-red outline-none text-lg shadow-sm pr-40 transition-all font-medium"
          />
          <button className="absolute right-2 top-2 bottom-2 btn-primary px-6 rounded-full hidden sm:block">
            Find Locations
          </button>
        </div>
        <button className="sm:hidden btn-primary w-full mt-4 rounded-full py-4 font-bold">Find Locations</button>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {sampleLocations.map((loc, i) => (
            <div key={i} className="p-8 rounded-3xl border border-gray-100 hover:border-brand-red group shadow-sm transition-all text-left">
              <h4 className="text-xl font-bold mb-2 group-hover:text-brand-red transition-all">{loc} Restaurant</h4>
              <p className="text-gray-500 mb-6 text-sm">Open 6:30 AM - 10:00 PM <br/>Closed Sundays</p>
              <a href="#" className="flex items-center gap-2 font-bold text-brand-red hover:underline text-sm uppercase tracking-wide">
                Get Directions <Navigation size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const list: Testimonial[] = [
    { id: 1, name: "Sarah M.", location: "Atlanta", rating: 5, quote: "Best chicken sandwich I've ever had. The service makes it even better. 'My pleasure' really means something here." },
    { id: 2, name: "James R.", location: "Dallas", rating: 5, quote: "My family eats here every week. The kids love it and so do we. The waffle fries are legendary!" },
    { id: 3, name: "Linda K.", location: "New York", rating: 5, quote: "Mobile ordering changed my lunch breaks. So fast and always perfect, even in the middle of Manhattan." }
  ];

  return (
    <section className="py-24 bg-brand-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-black text-brand-red mb-4">What Our Guests Are Saying</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {list.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ rotate: 1 }}
              className="bg-white p-10 rounded-3xl shadow-xl border border-gray-50 relative"
            >
              <div className="flex gap-1 mb-6">
                {Array(t.rating).fill(0).map((_, j) => <Star key={j} size={20} fill="#DD9933" stroke="#DD9933" />)}
              </div>
              <p className="text-gray-700 italic text-lg leading-relaxed mb-8">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-red text-white flex items-center justify-center font-bold rounded-full">
                  {t.name[0]}
                </div>
                <div>
                  <h4 className="font-bold">{t.name}</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">{t.location}</p>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 text-6xl text-brand-red opacity-10 font-serif">“</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Catering = () => {
  return (
    <section id="catering" className="py-24 max-w-7xl mx-auto px-6">
       <div className="bg-brand-red rounded-[4rem] px-8 md:px-20 py-16 md:py-24 text-white overflow-hidden relative">
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-black mb-6">Feed the Whole Team</h2>
              <p className="text-brand-cream text-xl mb-12 opacity-90 max-w-lg">
                Perfect for offices, events, and celebrations. Easy ordering, generous portions, and that legendary flavor everyone loves.
              </p>
              <button className="bg-white text-brand-red px-12 py-5 rounded-full font-bold text-lg shadow-xl hover:scale-105 active:scale-95 transition-all">
                Explore Catering Options
              </button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 hover:bg-white/20 transition-all cursor-pointer">
                <div className="text-4xl mb-4 text-brand-gold">☀️</div>
                <h4 className="font-bold text-xl mb-2">Breakfast Trays</h4>
                <p className="text-sm opacity-70">Minis, Chicken Biscuits, and Coffee.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 hover:bg-white/20 transition-all cursor-pointer">
                <div className="text-4xl mb-4 text-brand-gold">🥙</div>
                <h4 className="font-bold text-xl mb-2">Lunch Packages</h4>
                <p className="text-sm opacity-70">Nugget Trays, Sandwiches, and Salads.</p>
              </div>
            </div>
          </div>
          {/* Background Decorative Circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>
       </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white text-slate-800 border-t border-slate-100 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1">
            <span className="text-3xl font-display italic text-brand-red font-bold tracking-tight mb-4 block">
              Chick-fil-A
            </span>
            <p className="text-slate-400 text-xs italic mb-8 leading-relaxed">"We Didn't Invent the Chicken, Just the Chicken Sandwich."</p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center bg-slate-100 hover:bg-brand-red hover:text-white transition-all text-slate-500">
                <Facebook size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center bg-slate-100 hover:bg-brand-red hover:text-white transition-all text-slate-500">
                <Twitter size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center bg-slate-100 hover:bg-brand-red hover:text-white transition-all text-slate-500">
                <Instagram size={14} />
              </a>
            </div>
          </div>
          
          <div className="text-left font-medium">
            <h5 className="font-bold text-lg mb-6 text-brand-gold uppercase tracking-widest text-[12px]">Explore</h5>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Full Menu</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Nutrition Information</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gift Cards</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Merchandise</a></li>
            </ul>
          </div>
          
          <div className="text-left font-medium">
            <h5 className="font-bold text-lg mb-6 text-brand-gold uppercase tracking-widest text-[12px]">About</h5>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">The Heritage</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Franchising Info</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press Room</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          <div className="text-left">
            <h5 className="font-bold text-lg mb-6 text-brand-gold uppercase tracking-widest text-[12px]">Support</h5>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Customer Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">CA Transp. Act</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Use</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
           <p className="text-gray-500 text-sm">© 2025 Chick-fil-A, Inc. All rights reserved.</p>
           <div className="flex items-center gap-2 bg-white/5 px-6 py-2 rounded-full border border-white/10">
             <span className="text-xs font-bold uppercase tracking-tighter text-brand-gold">Closed Sundays</span> <Heart size={14} className="text-white fill-white" />
           </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="selection:bg-brand-red selection:text-white font-sans overflow-x-hidden">
      <Navbar />
      <Hero />
      <SocialProofTicker />
      
      <main>
        <MenuSection />
        <WhyUs />
        <AppSection />
        <LocationSection />
        <Catering />
        <Testimonials />
        
        {/* Final CTA Section */}
        <section className="bg-brand-red py-24 text-center px-6 relative overflow-hidden">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-5xl md:text-7xl font-display font-black text-white mb-6">Ready to Taste the Difference?</h2>
            <p className="text-brand-cream text-xl md:text-2xl mb-12 opacity-90 max-w-2xl mx-auto">
              Order online, pick up in minutes. No wait. Just great food.
            </p>
            <button className="bg-white text-brand-red px-14 py-6 rounded-full font-black text-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all group flex items-center gap-3 mx-auto">
              Start Your Order <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
          {/* Decorative Emojis floating */}
          <div className="absolute top-10 left-10 text-4xl animate-float opacity-20 hidden md:block">🍗</div>
          <div className="absolute bottom-10 right-10 text-4xl animate-float opacity-20 hidden md:block" style={{ animationDelay: '1s' }}>🥤</div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
