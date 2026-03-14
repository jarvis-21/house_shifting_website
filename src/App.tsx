/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Phone, MessageCircle, Truck, Package, Home, Building2, MapPin, CheckCircle2, ChevronRight } from "lucide-react";



const PRIMARY_PHONE = "7305626545";
const SECONDARY_PHONE = "908372040"; // Note: User provided 9 digits, keeping as is
const WHATSAPP_URL = `https://wa.me/${PRIMARY_PHONE}?text=Hello%20I%20want%20house%20shifting%20service`;

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } }
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 apple-blur border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-lg font-semibold tracking-tight">Sumathi Packers</span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-500">
            <a href="#services" className="hover:text-zinc-900 transition-colors">Services</a>
            <a href="#why-us" className="hover:text-zinc-900 transition-colors">Why Us</a>
            <a href="#contact" className="hover:text-zinc-900 transition-colors">Contact</a>
          </div>
          <a href={`tel:${PRIMARY_PHONE}`} className="md:hidden">
            <Phone className="w-5 h-5" />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 section-padding flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-4">Sumathi Packers and Movers</h2>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-zinc-900">
            Safe & Reliable <br />
            <span className="text-zinc-400">House Shifting</span>
          </h1>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 text-zinc-900 font-tamil">
            பாதுகாப்பான வீட்டு மாற்ற சேவை
          </h1>
          
          <div className="space-y-2 mb-12">
            <p className="text-xl text-zinc-500 max-w-2xl mx-auto">
              Professional packing and moving services with experienced staff.
            </p>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto font-tamil">
              அனுபவமுள்ள குழுவுடன் பாதுகாப்பான பேக்கிங் மற்றும் மாற்ற சேவைகள்.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary w-full sm:w-auto">
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
            <a href={`tel:${PRIMARY_PHONE}`} className="btn-secondary w-full sm:w-auto">
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Our Services</h2>
            <p className="text-xl text-zinc-500 font-tamil">எங்கள் சேவைகள்</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { icon: <Home className="w-8 h-8" />, en: "House Shifting", ta: "வீட்டு மாற்றம்" },
              { icon: <Building2 className="w-8 h-8" />, en: "Office Shifting", ta: "அலுவலக மாற்றம்" },
              { icon: <Package className="w-8 h-8" />, en: "Packing & Unpacking", ta: "பேக்கிங் மற்றும் அன்பேக்கிங்" },
              { icon: <Truck className="w-8 h-8" />, en: "Furniture Moving", ta: "மரச்சாமான் மாற்றம்" },
              { icon: <MapPin className="w-8 h-8" />, en: "Local Moving", ta: "உள்ளூர் மாற்றம்" },
            ].map((service, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="bg-white p-8 rounded-3xl card-shadow flex flex-col items-start group hover:-translate-y-1 transition-all duration-300"
              >
                <div className="p-3 bg-zinc-50 rounded-2xl text-zinc-900 mb-6 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.en}</h3>
                <p className="text-zinc-500 font-tamil">{service.ta}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Why Choose Us</h2>
              <p className="text-xl text-zinc-500 mb-12 font-tamil">ஏன் எங்களை தேர்வு செய்ய வேண்டும்</p>
              
              <div className="space-y-8">
                {[
                  { en: "Experienced Team", ta: "அனுபவமுள்ள குழு" },
                  { en: "Safe Packing", ta: "பாதுகாப்பான பேக்கிங்" },
                  { en: "Affordable Price", ta: "குறைந்த விலை" },
                  { en: "Fast Service", ta: "வேகமான சேவை" },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="mt-1">
                      <CheckCircle2 className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">{item.en}</h4>
                      <p className="text-zinc-500 font-tamil">{item.ta}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square rounded-3xl overflow-hidden bg-zinc-100"
            >
              <img 
                src="https://picsum.photos/seed/moving/800/800" 
                alt="Moving Service" 
                className="object-cover w-full h-full"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Contact Us</h2>
            <p className="text-xl text-zinc-400 mb-12 font-tamil">தொடர்புக்கு</p>
            
            <div className="flex flex-col items-center gap-6 mb-16">
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-2xl md:text-3xl font-bold">
                <div className="flex items-center gap-3">
                  <Phone className="w-8 h-8 text-blue-400" />
                  <a href={`tel:${PRIMARY_PHONE}`} className="hover:text-blue-400 transition-colors">{PRIMARY_PHONE}</a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-8 h-8 text-blue-400" />
                  <a href={`tel:${SECONDARY_PHONE}`} className="hover:text-blue-400 transition-colors">{SECONDARY_PHONE}</a>
                </div>
              </div>
              <div className="flex items-center gap-3 text-zinc-400">
                <MapPin className="w-5 h-5" />
                <span>Service Area: Chennai</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary bg-white text-zinc-900 hover:bg-zinc-100 w-full sm:w-auto">
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
              <a href={`tel:${PRIMARY_PHONE}`} className="btn-secondary bg-zinc-800 text-white hover:bg-zinc-700 border-none w-full sm:w-auto">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-zinc-100 text-center text-sm text-zinc-400">
        <div className="max-w-7xl mx-auto">
          <p>© {new Date().getFullYear()} Sumathi Packers and Movers. All rights reserved.</p>
          <p className="mt-2">Chennai, Tamil Nadu</p>
        </div>
      </footer>

      {/* Floating Action Button (Mobile) */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 md:hidden">
        <a 
          href={WHATSAPP_URL} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg active:scale-90 transition-transform"
        >
          <MessageCircle className="w-7 h-7" />
        </a>
      </div>
    </div>
  );
}
