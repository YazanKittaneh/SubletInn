"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Wifi, Home, Users, MapPin } from "lucide-react";

const images = {
  hero: "https://s3.amazonaws.com/subletinn/Images/Francis/Background/concert.jpg",
  rooms: "https://s3.amazonaws.com/subletinn/Images/Francis/Carousel/All1.jpg",
  bedroom: "https://s3.amazonaws.com/subletinn/Images/Francis/Carousel/Bedroom1.3.jpg",
  room6: "https://s3.amazonaws.com/subletinn/Images/Francis/Carousel/Room_6.jpg",
  dining: "https://s3.amazonaws.com/subletinn/Images/Francis/Carousel/Dining1.jpg",
  living: "https://s3.amazonaws.com/subletinn/Images/Francis/Carousel/Living3.jpg",
  room11: "https://s3.amazonaws.com/subletinn/Images/Francis/Carousel/Room_11.jpg",
  community1: "https://images.squarespace-cdn.com/content/v1/56ed557d07eaa0e20bf74ab4/3c6ae476-46c4-448d-b8ab-97724dd20075/467399737_898391759063954_8001495981327664016_n.jpg",
  community2: "https://images.squarespace-cdn.com/content/v1/56ed557d07eaa0e20bf74ab4/1732256843109-WK9MUV7CJXWY60H9V53O/PHOTO-2022-05-27-22-05-53.jpg",
  community3: "https://images.squarespace-cdn.com/content/v1/56ed557d07eaa0e20bf74ab4/1732256842853-NOJYAK8V9LZTY4I72Q5D/120203259_622375185128918_4840753130849617993_n.jpeg",
  community4: "https://images.squarespace-cdn.com/content/v1/56ed557d07eaa0e20bf74ab4/1732256844189-SGZX50EFD1Q6IZUKRE9P/7.png",
  community5: "https://images.squarespace-cdn.com/content/v1/56ed557d07eaa0e20bf74ab4/1732256843879-NZS55Z4PI32M8TTWBT7I/PHOTO-2022-05-31-14-10-43.jpg",
  exterior: "https://images.squarespace-cdn.com/content/v1/56ed557d07eaa0e20bf74ab4/1546589476702-29MNMFU2P31NC6WHVAIE/subletinn-chicago-logan-square-short-term-rental.jpg",
};

const springy = { type: "spring" as const, stiffness: 300, damping: 20 };

function Sticker({
  children,
  className = "",
  rotate = 0,
  color = "#fab819",
}: {
  children: React.ReactNode;
  className?: string;
  rotate?: number;
  color?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: rotate - 5 }}
      whileInView={{ opacity: 1, scale: 1, rotate }}
      viewport={{ once: true }}
      transition={springy}
      whileHover={{ scale: 1.05, rotate: rotate + 2, transition: { duration: 0.2 } }}
      className={`inline-block border-4 border-dark-800 font-bold ${className}`}
      style={{ backgroundColor: color, boxShadow: "6px 6px 0px 0px #222222" }}
    >
      {children}
    </motion.div>
  );
}

export default function BrutalistDesign() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: "#FFFEF5" }}>
      {/* Navigation */}
      <motion.nav
        initial={{ y: -60 }}
        animate={{ y: 0 }}
        transition={springy}
        className="sticky top-0 z-50 border-b-4 border-dark-800 px-6 py-4 flex items-center justify-between"
        style={{ backgroundColor: "#FFFEF5" }}
      >
        <span className="text-2xl font-black tracking-tight text-dark-800">
          SUBLET<span className="text-brand-500">INN</span>
        </span>
        <div className="hidden md:flex items-center gap-4">
          {["Features", "House", "People", "Pricing"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="px-4 py-2 text-sm font-bold uppercase hover:bg-dark-800 hover:text-white transition-colors"
              style={{ borderWidth: "3px", borderColor: "#222222", borderStyle: "solid" }}
            >
              {item}
            </a>
          ))}
        </div>
        <Link
          href="/apply"
          className="px-6 py-2 bg-brand-500 text-white font-bold uppercase text-sm border-4 border-dark-800 hover:bg-gold-500 hover:text-dark-800 transition-colors"
          style={{ boxShadow: "4px 4px 0px 0px #222222" }}
        >
          Apply Now
        </Link>
      </motion.nav>

      {/* Marquee */}
      <div className="border-b-4 border-dark-800 bg-brand-500 text-white py-2 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {Array.from({ length: 3 }).map((_, i) => (
            <span key={i} className="text-sm font-bold uppercase tracking-wider mx-4">
              COLIVING IN CHICAGO &bull; YOUNG PROFESSIONALS &bull; 19+ COUNTRIES &bull; LOGAN SQUARE &bull; FROM $750/MO &bull; FURNISHED ROOMS &bull; ALL UTILITIES INCLUDED &bull;&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* Hero */}
      <section className="px-6 py-16 md:py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ...springy, delay: 0.1 }}
              className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] text-dark-800 uppercase mb-8"
            >
              Your
              <br />
              Next
              <br />
              Home Is
              <br />
              <span className="text-brand-500">A Vibe</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ...springy, delay: 0.3 }}
              className="text-dark-400 text-lg max-w-sm mb-8"
            >
              Coliving for ambitious young professionals in Chicago.
              Furnished rooms, utilities included, and the best roommates you&apos;ll ever have.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ ...springy, delay: 0.5 }}>
              <Link
                href="/apply"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gold-500 text-dark-800 font-black uppercase text-lg border-4 border-dark-800 hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
                style={{ boxShadow: "6px 6px 0px 0px #222222" }}
              >
                Get Started
                <ArrowRight size={24} strokeWidth={3} />
              </Link>
            </motion.div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, rotate: -3, scale: 0.9 }}
              animate={{ opacity: 1, rotate: 2, scale: 1 }}
              transition={{ ...springy, delay: 0.2 }}
              className="relative w-full aspect-[4/5] border-4 border-dark-800"
              style={{ boxShadow: "8px 8px 0px 0px #222222" }}
            >
              <Image src={images.hero} alt="SubletInn community" fill className="object-cover" sizes="50vw" priority />
            </motion.div>
            <Sticker rotate={-6} color="#68b096" className="absolute -top-4 -right-4 px-4 py-2 text-sm rounded-full text-white">
              19+ COUNTRIES
            </Sticker>
            <Sticker rotate={4} color="#ec6363" className="absolute -bottom-4 -left-4 px-4 py-2 text-sm rounded-full text-white">
              LOGAN SQUARE
            </Sticker>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-6 py-16 border-t-4 border-dark-800">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springy}
            className="text-5xl md:text-6xl font-black text-dark-800 uppercase text-center mb-16"
          >
            What You Get
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Home, title: "FURNISHED", desc: "Bed, desk, storage. Kitchen & living room too. Just bring your stuff.", color: "#fab819", rotate: -2 },
              { icon: Wifi, title: "ALL-IN", desc: "WiFi, gas, water, electricity. One payment. Zero surprises.", color: "#7dc6d1", rotate: 1 },
              { icon: Users, title: "COMMUNITY", desc: "Hand-picked residents. Sushi nights, salsa dancing, lasting bonds.", color: "#ec6363", rotate: -1 },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30, rotate: feature.rotate * 2 }}
                whileInView={{ opacity: 1, y: 0, rotate: feature.rotate }}
                viewport={{ once: true }}
                transition={{ ...springy, delay: i * 0.1 }}
                whileHover={{ scale: 1.03, rotate: feature.rotate + 1, transition: { duration: 0.2 } }}
                className="p-8 border-4 border-dark-800"
                style={{ backgroundColor: feature.color, boxShadow: "8px 8px 0px 0px #222222" }}
              >
                <feature.icon size={40} strokeWidth={3} className="mb-4 text-dark-800" />
                <h3 className="text-3xl font-black text-dark-800 mb-3">{feature.title}</h3>
                <p className="text-dark-700 font-medium">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* House Showcase */}
      <section id="house" className="px-6 py-16 border-t-4 border-dark-800 bg-dark-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
            <div>
              <Sticker rotate={-3} color="#fab819" className="px-4 py-1 text-xs rounded-full mb-4 text-dark-800">
                FEATURED HOUSE
              </Sticker>
              <h2 className="text-6xl md:text-8xl font-black uppercase">Francis</h2>
            </div>
            <div className="flex items-center gap-2 text-dark-300">
              <MapPin size={18} />
              <span className="font-bold">Logan Square, Chicago</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[images.rooms, images.bedroom, images.room6, images.dining, images.living, images.room11].map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9, rotate: i % 2 === 0 ? -1 : 1 }}
                whileInView={{ opacity: 1, scale: 1, rotate: i % 2 === 0 ? -1 : 1 }}
                viewport={{ once: true }}
                transition={{ ...springy, delay: i * 0.05 }}
                whileHover={{ scale: 1.03, rotate: 0 }}
                className={`relative border-4 border-white overflow-hidden ${i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-[4/3]"}`}
                style={{ boxShadow: "6px 6px 0px 0px rgba(255,255,255,0.3)" }}
              >
                <Image src={src} alt={`Francis ${i + 1}`} fill className="object-cover" sizes={i === 0 ? "66vw" : "33vw"} />
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { num: "12", label: "ROOMS", color: "#fab819" },
              { num: "24/7", label: "ACCESS", color: "#68b096" },
              { num: "5min", label: "TO CTA", color: "#ec6363" },
              { num: "1", label: "BIG FAMILY", color: "#7dc6d1" },
            ].map((stat, i) => (
              <Sticker key={stat.label} rotate={i % 2 === 0 ? -1 : 1} color={stat.color} className="p-4 text-center text-dark-800">
                <p className="text-3xl font-black">{stat.num}</p>
                <p className="text-xs font-bold uppercase tracking-wider">{stat.label}</p>
              </Sticker>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section id="people" className="px-6 py-16 border-t-4 border-dark-800">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springy}
            className="text-5xl md:text-7xl font-black text-dark-800 uppercase text-center mb-4"
          >
            THE PEOPLE
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center text-dark-400 font-bold text-lg mb-12">
            From 19+ countries. Bound by ambition.
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[images.community1, images.community2, images.community3, images.community4, images.community5].map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8, rotate: (i - 2) * 2 }}
                whileInView={{ opacity: 1, scale: 1, rotate: (i - 2) * 2 }}
                viewport={{ once: true }}
                transition={{ ...springy, delay: i * 0.08 }}
                whileHover={{ scale: 1.05, rotate: 0 }}
                className={`relative border-4 border-dark-800 aspect-[3/4] ${i === 2 ? "col-span-2 md:col-span-1" : ""}`}
                style={{ boxShadow: "6px 6px 0px 0px #222222" }}
              >
                <Image src={src} alt={`Community ${i + 1}`} fill className="object-cover" sizes="20vw" />
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex flex-wrap justify-center gap-3 mt-10">
            {[
              { name: "USA", color: "#fab819" },
              { name: "Germany", color: "#68b096" },
              { name: "Italy", color: "#ec6363" },
              { name: "India", color: "#7dc6d1" },
              { name: "Mexico", color: "#fab819" },
              { name: "Poland", color: "#f04924" },
              { name: "Canada", color: "#68b096" },
              { name: "China", color: "#ec6363" },
              { name: "Jordan", color: "#7dc6d1" },
              { name: "Australia", color: "#fab819" },
            ].map((c, i) => (
              <Sticker key={c.name} rotate={(i % 3 - 1) * 3} color={c.color} className="px-4 py-1 text-xs rounded-full text-dark-800">
                {c.name.toUpperCase()}
              </Sticker>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-6 py-16 border-t-4 border-dark-800 bg-gold-500">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springy}
            className="text-5xl md:text-7xl font-black text-dark-800 uppercase text-center mb-4"
          >
            PICK YOUR PLAN
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center text-dark-700 font-bold mb-12">
            All plans include furnished room + all utilities. No hidden fees.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { duration: "1 MONTH", price: "$950", label: "EXPLORER", desc: "Try it out", color: "#FFFEF5", rotate: -2 },
              { duration: "2 MONTHS", price: "$850", label: "SETTLER", desc: "Most popular", color: "#f04924", featured: true, rotate: 0 },
              { duration: "3+ MONTHS", price: "$750", label: "RESIDENT", desc: "Best value", color: "#68b096", rotate: 2 },
            ].map((plan, i) => (
              <motion.div
                key={plan.duration}
                initial={{ opacity: 0, y: 40, rotate: plan.rotate * 2 }}
                whileInView={{ opacity: 1, y: 0, rotate: plan.rotate }}
                viewport={{ once: true }}
                transition={{ ...springy, delay: i * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 0, transition: { duration: 0.2 } }}
                className={`p-8 text-center border-4 border-dark-800 ${plan.featured ? "text-white" : ""}`}
                style={{ backgroundColor: plan.color, boxShadow: "8px 8px 0px 0px #222222" }}
              >
                {plan.featured && (
                  <span className="inline-block px-3 py-1 bg-dark-800 text-white text-xs font-black uppercase mb-4">POPULAR</span>
                )}
                <p className={`text-sm font-black uppercase tracking-wider mb-2 ${plan.featured ? "text-white/70" : "text-dark-500"}`}>{plan.label}</p>
                <p className="text-6xl font-black">{plan.price}</p>
                <p className={`text-sm font-bold ${plan.featured ? "text-white/70" : "text-dark-500"}`}>/month</p>
                <p className={`font-bold mt-4 text-lg ${plan.featured ? "text-white" : "text-dark-800"}`}>{plan.duration}</p>
                <p className={`text-sm mt-1 ${plan.featured ? "text-white/60" : "text-dark-400"}`}>{plan.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 border-t-4 border-dark-800 bg-dark-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={springy}>
            <Zap size={48} strokeWidth={3} className="mx-auto mb-6 text-gold-500" />
            <h2 className="text-5xl md:text-7xl font-black uppercase mb-6">
              STOP SCROLLING.
              <br />
              <span className="text-brand-500">START LIVING.</span>
            </h2>
            <p className="text-dark-300 font-bold text-lg mb-10 max-w-md mx-auto">
              Apply today. Join a house full of people as ambitious as you.
            </p>
            <Link
              href="/apply"
              className="inline-flex items-center gap-3 px-10 py-5 bg-brand-500 text-white font-black uppercase text-xl border-4 border-white hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
              style={{ boxShadow: "6px 6px 0px 0px rgba(255,255,255,0.5)" }}
            >
              APPLY NOW
              <ArrowRight size={28} strokeWidth={3} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-dark-800 px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4" style={{ backgroundColor: "#FFFEF5" }}>
        <span className="text-dark-800 font-black text-lg">SUBLET<span className="text-brand-500">INN</span></span>
        <div className="flex items-center gap-6 text-sm font-bold text-dark-400">
          <span>chicagosubletinn@gmail.com</span>
          <span>(312) 714-0294</span>
        </div>
        <span className="text-dark-300 text-xs font-bold">&copy; {new Date().getFullYear()}</span>
      </footer>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </div>
  );
}
