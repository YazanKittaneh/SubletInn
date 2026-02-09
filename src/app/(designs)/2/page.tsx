"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Wifi, Sofa, Users, MapPin, Globe, Home } from "lucide-react";

const images = {
  hero: "/images/subletinn/homepage/hero-dinner.jpg",
  rooms: "/images/subletinn/homepage/rooms-overview.jpg",
  bedroom: "/images/subletinn/homepage/bedroom.jpg",
  room6: "/images/subletinn/francis/room1.jpg",
  dining: "/images/subletinn/francis/living1.jpg",
  living: "/images/subletinn/francis/living2.jpg",
  room11: "/images/subletinn/francis/room2.jpg",
  community1: "/images/subletinn/community/photo1.jpg",
  community2: "/images/subletinn/community/photo2.jpeg",
  community3: "/images/subletinn/community/photo3.png",
  community4: "/images/subletinn/community/photo4.jpg",
  community5: "/images/subletinn/community/photo5.png",
  exterior: "/images/subletinn/homepage/exterior.jpg",
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

function BentoCard({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`rounded-3xl overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function BentoDesign() {
  return (
    <div className="bg-dark-50 text-dark-800 min-h-screen">
      {/* Floating Nav */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50"
      >
        <div className="flex items-center gap-8 px-8 py-3 rounded-full bg-white/70 backdrop-blur-xl shadow-lg shadow-dark-800/5 border border-dark-100">
          <span className="font-semibold text-dark-800">
            Sublet<span className="text-brand-500">Inn</span>
          </span>
          <div className="hidden md:flex items-center gap-6 text-sm text-dark-300">
            <a href="#features" className="hover:text-dark-800 transition-colors">Features</a>
            <a href="#house" className="hover:text-dark-800 transition-colors">House</a>
            <a href="#community" className="hover:text-dark-800 transition-colors">Community</a>
            <a href="#pricing" className="hover:text-dark-800 transition-colors">Pricing</a>
          </div>
          <Link
            href="/apply"
            className="px-5 py-1.5 rounded-full bg-brand-500 text-white text-sm font-medium hover:bg-brand-600 transition-colors"
          >
            Apply
          </Link>
        </div>
      </motion.nav>

      {/* Hero */}
      <section className="pt-32 pb-8 px-6 max-w-7xl mx-auto">
        <motion.div initial="hidden" animate="visible" variants={stagger} className="text-center mb-16">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 text-teal-700 text-sm mb-8">
            <MapPin size={14} />
            Logan Square, Chicago
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1] mb-6 tracking-tight">
            Live Together.
            <br />
            <span className="text-dark-200">Grow Together.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-dark-300 text-lg md:text-xl max-w-lg mx-auto">
            Furnished coliving for ambitious young professionals. One monthly payment covers everything.
          </motion.p>
        </motion.div>

        {/* Hero Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px] md:auto-rows-[200px]">
          <BentoCard className="col-span-2 row-span-2 relative" delay={0.1}>
            <Image src={images.rooms} alt="SubletInn rooms" fill className="object-cover" sizes="50vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="text-white text-2xl font-bold">Francis House</p>
              <p className="text-white/70 text-sm">12 rooms in Logan Square</p>
            </div>
          </BentoCard>

          <BentoCard className="bg-dark-800 p-6 flex flex-col justify-between" delay={0.15}>
            <p className="text-dark-300 text-xs uppercase tracking-wider">Starting at</p>
            <div>
              <span className="text-4xl font-bold text-white">$750</span>
              <span className="text-dark-300 text-sm">/mo</span>
            </div>
          </BentoCard>

          <BentoCard className="relative" delay={0.2}>
            <Image src={images.bedroom} alt="Bedroom" fill className="object-cover" sizes="25vw" />
          </BentoCard>

          <BentoCard className="bg-teal-100 p-6 flex flex-col justify-between" delay={0.25}>
            <Globe size={24} className="text-teal-600" />
            <div>
              <p className="text-3xl font-bold text-teal-800">19+</p>
              <p className="text-teal-600 text-sm">Countries</p>
            </div>
          </BentoCard>

          <BentoCard className="relative" delay={0.3}>
            <Image src={images.living} alt="Living room" fill className="object-cover" sizes="25vw" />
          </BentoCard>
        </div>
      </section>

      {/* Features Bento */}
      <section id="features" className="py-20 px-6 max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="text-center mb-12">
          <motion.p variants={fadeUp} className="text-dark-300 text-sm uppercase tracking-wider mb-3">Everything Included</motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tight">One payment. Zero hassle.</motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <BentoCard className="bg-white p-8 shadow-sm border border-dark-100" delay={0}>
            <div className="w-12 h-12 rounded-2xl bg-brand-100 flex items-center justify-center mb-6">
              <Sofa size={22} className="text-brand-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Fully Furnished</h3>
            <p className="text-dark-300 leading-relaxed">
              Bed, desk, storage, and modern decor. The kitchen and living room are ready too. Just bring your suitcase.
            </p>
          </BentoCard>

          <BentoCard className="bg-white p-8 shadow-sm border border-dark-100" delay={0.08}>
            <div className="w-12 h-12 rounded-2xl bg-sky-100 flex items-center justify-center mb-6">
              <Wifi size={22} className="text-sky-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">All Utilities</h3>
            <p className="text-dark-300 leading-relaxed">
              WiFi, gas, water, electricity — everything covered. No surprise bills. No setting up accounts.
            </p>
          </BentoCard>

          <BentoCard className="bg-white p-8 shadow-sm border border-dark-100" delay={0.16}>
            <div className="w-12 h-12 rounded-2xl bg-gold-100 flex items-center justify-center mb-6">
              <Users size={22} className="text-gold-700" />
            </div>
            <h3 className="text-xl font-bold mb-2">Curated Community</h3>
            <p className="text-dark-300 leading-relaxed">
              Every resident is vetted. We look for ambition, curiosity, and warmth. The result? Lifelong friendships.
            </p>
          </BentoCard>
        </div>
      </section>

      {/* House Showcase */}
      <section id="house" className="py-20 px-6 max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="mb-12">
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-3">
            <Home size={18} className="text-brand-500" />
            <p className="text-brand-500 text-sm uppercase tracking-wider font-medium">Featured House</p>
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tight mb-2">Francis</motion.h2>
          <motion.p variants={fadeUp} className="text-dark-300 text-lg">Where ambition meets community in Logan Square</motion.p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          <BentoCard className="col-span-2 row-span-2 relative" delay={0}>
            <Image src={images.dining} alt="Dining area" fill className="object-cover" sizes="50vw" />
          </BentoCard>
          <BentoCard className="relative" delay={0.05}>
            <Image src={images.room6} alt="Room" fill className="object-cover" sizes="25vw" />
          </BentoCard>
          <BentoCard className="bg-dark-800 p-6 flex flex-col justify-between text-white" delay={0.1}>
            <p className="text-dark-300 text-xs uppercase tracking-wider">Location</p>
            <div>
              <p className="font-bold text-lg">Logan Square</p>
              <p className="text-dark-300 text-sm">5 min to CTA</p>
            </div>
          </BentoCard>
          <BentoCard className="relative" delay={0.15}>
            <Image src={images.room11} alt="Room" fill className="object-cover" sizes="25vw" />
          </BentoCard>
          <BentoCard className="bg-brand-50 p-6 flex flex-col justify-between" delay={0.2}>
            <p className="text-brand-400 text-xs uppercase tracking-wider">Capacity</p>
            <div>
              <p className="text-3xl font-bold text-brand-700">12</p>
              <p className="text-brand-500 text-sm">Private rooms</p>
            </div>
          </BentoCard>
        </div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
          {["Furnished rooms", "Full kitchen", "WiFi included", "Utilities covered", "Laundry on-site", "Modern decor", "Community events", "Flexible leases"].map((amenity) => (
            <motion.div key={amenity} variants={fadeUp} className="bg-white rounded-2xl px-5 py-4 text-sm text-dark-400 border border-dark-100 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
              {amenity}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Community */}
      <section id="community" className="py-20 px-6 max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
          <motion.p variants={fadeUp} className="text-dark-300 text-sm uppercase tracking-wider mb-3">The Community</motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tight">19+ Countries. One Family.</motion.h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[250px]">
          <BentoCard className="row-span-2 relative" delay={0}>
            <Image src={images.community1} alt="Community" fill className="object-cover" sizes="33vw" />
          </BentoCard>
          <BentoCard className="relative" delay={0.05}>
            <Image src={images.community2} alt="Community" fill className="object-cover" sizes="33vw" />
          </BentoCard>
          <BentoCard className="bg-dark-800 p-8 flex flex-col justify-center text-white" delay={0.1}>
            <p className="text-3xl font-bold mb-2">From sushi nights to salsa dancing</p>
            <p className="text-dark-300 text-sm">Francis makes sure you leave with lasting friendships.</p>
          </BentoCard>
          <BentoCard className="relative" delay={0.15}>
            <Image src={images.community3} alt="Community" fill className="object-cover" sizes="33vw" />
          </BentoCard>
          <BentoCard className="relative" delay={0.2}>
            <Image src={images.community5} alt="Community" fill className="object-cover" sizes="33vw" />
          </BentoCard>
        </div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="flex flex-wrap justify-center gap-2 mt-8">
          {["Czech Republic", "Germany", "Italy", "Poland", "Canada", "Mexico", "USA", "Argentina", "Ghana", "China", "India", "Jordan", "South Korea", "Australia"].map((country) => (
            <motion.span key={country} variants={fadeUp} className="px-4 py-1.5 rounded-full bg-white border border-dark-100 text-dark-400 text-xs">
              {country}
            </motion.span>
          ))}
        </motion.div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6 max-w-5xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
          <motion.p variants={fadeUp} className="text-dark-300 text-sm uppercase tracking-wider mb-3">Pricing</motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tight">Choose your stay</motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { duration: "1 Month", price: 950, label: "Explorer", desc: "Perfect for trying coliving" },
            { duration: "2 Months", price: 850, label: "Settler", desc: "Most popular for interns", featured: true },
            { duration: "3+ Months", price: 750, label: "Resident", desc: "Best value, full commitment" },
          ].map((plan, i) => (
            <BentoCard
              key={plan.duration}
              className={`p-8 text-center ${
                plan.featured ? "bg-brand-500 text-white shadow-xl shadow-brand-500/20" : "bg-white border border-dark-100"
              }`}
              delay={i * 0.08}
            >
              {plan.featured && (
                <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs mb-4">Most Popular</span>
              )}
              <p className={`text-sm mb-1 ${plan.featured ? "text-brand-100" : "text-dark-300"}`}>{plan.label}</p>
              <div className="flex items-baseline justify-center gap-1 my-4">
                <span className="text-5xl font-bold">${plan.price}</span>
                <span className={plan.featured ? "text-brand-200" : "text-dark-300"}>/mo</span>
              </div>
              <p className={`text-sm mb-6 ${plan.featured ? "text-brand-100" : "text-dark-300"}`}>{plan.duration}</p>
              <p className={`text-xs ${plan.featured ? "text-brand-200" : "text-dark-400"}`}>{plan.desc}</p>
            </BentoCard>
          ))}
        </div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-dark-300 text-sm text-center mt-6">
          All plans include furnished room + utilities. Security deposit required.
        </motion.p>
      </section>

      {/* CTA */}
      <section className="py-32 px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-4xl mx-auto text-center">
          <motion.h2 variants={fadeUp} className="text-5xl md:text-7xl font-bold tracking-tight mb-6">Ready to join?</motion.h2>
          <motion.p variants={fadeUp} className="text-dark-300 text-lg mb-10 max-w-md mx-auto">
            Apply today and become part of Chicago&apos;s most exciting coliving community.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link
              href="/apply"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-brand-500 text-white text-lg font-medium hover:bg-brand-600 transition-colors shadow-lg shadow-brand-500/20"
            >
              Apply Now
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-dark-100 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-dark-300 text-sm">
            &copy; {new Date().getFullYear()} Sublet<span className="text-brand-500">Inn</span>
          </span>
          <div className="flex items-center gap-6 text-sm text-dark-300">
            <span>chicagosubletinn@gmail.com</span>
            <span>(312) 714-0294</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
