"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";

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
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

function ParallaxImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className={`overflow-hidden ${className || ""}`}>
      <motion.div style={{ y }} className="relative w-full h-[120%]">
        <Image src={src} alt={alt} fill className="object-cover" sizes="100vw" />
      </motion.div>
    </div>
  );
}

export default function CinematicDesign() {
  const heroRef = useRef(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(heroProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(heroProgress, [0, 0.5], [1, 1.1]);
  const heroTextY = useTransform(heroProgress, [0, 0.5], [0, -80]);

  return (
    <div className="bg-dark-800 text-white overflow-x-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5"
      >
        <div className="backdrop-blur-xl bg-dark-900/40 absolute inset-0" />
        <span className="relative z-10 text-lg tracking-[0.2em] uppercase font-light">
          Sublet<span className="text-brand-500 font-medium">Inn</span>
        </span>
        <Link
          href="/apply"
          className="relative z-10 text-sm tracking-[0.15em] uppercase text-brand-400 hover:text-white transition-colors"
        >
          Apply
        </Link>
      </motion.nav>

      {/* Hero */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center">
        <motion.div style={{ scale: heroScale }} className="absolute inset-0">
          <Image src={images.hero} alt="SubletInn community" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-dark-900/60" />
          <div
            className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />
        </motion.div>

        <motion.div style={{ opacity: heroOpacity, y: heroTextY }} className="relative z-10 text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-brand-500 tracking-[0.3em] uppercase text-sm mb-6"
          >
            Chicago Coliving
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] mb-8"
          >
            Live With
            <br />
            <span className="font-light italic text-dark-100">People Who</span>
            <br />
            Inspire You
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-dark-200 text-lg md:text-xl max-w-md mx-auto font-light"
          >
            Furnished rooms. Utilities included. A community that changes your life.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ArrowDown size={20} className="text-dark-300" />
        </motion.div>
        </motion.div>
      </section>

      {/* Stats Bar */}
      <section className="relative bg-dark-900 py-16 border-t border-dark-700">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="max-w-6xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "$750", label: "Starting monthly" },
            { number: "12", label: "Private rooms" },
            { number: "19+", label: "Countries represented" },
            { number: "1", label: "Community" },
          ].map((stat) => (
            <motion.div key={stat.label} variants={fadeUp} className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-brand-500 mb-2">{stat.number}</p>
              <p className="text-dark-300 text-sm tracking-[0.15em] uppercase">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* About / Vision */}
      <section className="relative py-32 bg-dark-800">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeUp}>
              <p className="text-brand-500 tracking-[0.3em] uppercase text-xs mb-6">The Vision</p>
              <h2 className="text-4xl md:text-6xl font-bold leading-[1.1] mb-8">
                More Than
                <br />
                <span className="font-light italic text-dark-200">a Room</span>
              </h2>
              <p className="text-dark-200 text-lg leading-relaxed mb-6">
                SubletInn creates communities for young professionals through curated coliving
                houses in Chicago. When you put interesting, smart, and enthusiastic people
                together, something amazing happens.
              </p>
              <p className="text-dark-300 leading-relaxed">
                Every resident is hand-picked through our application process. We look for
                passion, ambition, and a genuine desire to connect. The result? A house full
                of people who inspire each other every day.
              </p>
            </motion.div>
            <motion.div variants={fadeUp}>
              <ParallaxImage src={images.exterior} alt="Francis House" className="relative h-[500px] md:h-[600px] rounded-sm" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Full-width Image Break */}
      <section className="relative h-[60vh]">
        <ParallaxImage src={images.living} alt="Living room" className="absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-800 via-transparent to-dark-800" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <motion.p
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-5xl font-light italic text-center px-8 max-w-3xl"
          >
            &ldquo;A hotspot for people who want to live with those who share the same drive&rdquo;
          </motion.p>
        </div>
      </section>

      {/* House Showcase - Francis */}
      <section className="py-32 bg-dark-800">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="text-brand-500 tracking-[0.3em] uppercase text-xs mb-4">
              Featured House
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-5xl md:text-7xl font-bold mb-4">
              Francis
            </motion.h2>
            <motion.p variants={fadeUp} className="text-dark-300 text-lg mb-16">
              Logan Square, Chicago
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-3 gap-3"
          >
            {[images.rooms, images.bedroom, images.room6, images.dining, images.living, images.room11].map((src, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className={`relative overflow-hidden group ${i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-[4/3]"}`}
              >
                <Image src={src} alt={`Francis house ${i + 1}`} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes={i === 0 ? "66vw" : "33vw"} />
                <div className="absolute inset-0 bg-dark-900/20 group-hover:bg-dark-900/0 transition-colors duration-500" />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
          >
            {[
              { title: "Furnished", desc: "Every room comes with a bed, desk, and storage. Move in with just a suitcase." },
              { title: "All-Inclusive", desc: "WiFi, gas, water, electricity — all covered. One simple monthly payment." },
              { title: "Community", desc: "Curated residents from 19+ countries. Events, dinners, and lasting friendships." },
            ].map((f) => (
              <motion.div key={f.title} variants={fadeUp} className="border-t border-dark-600 pt-6">
                <h3 className="text-xl font-bold mb-3 text-brand-500">{f.title}</h3>
                <p className="text-dark-200 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Community Gallery */}
      <section className="py-32 bg-dark-900">
        <div className="max-w-6xl mx-auto px-8 mb-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="text-brand-500 tracking-[0.3em] uppercase text-xs mb-4">
              The People
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-bold mb-4">
              19+ Countries.
              <br />
              <span className="font-light italic text-dark-300">One Family.</span>
            </motion.h2>
          </motion.div>
        </div>

        <div className="overflow-x-auto pb-8 scrollbar-hide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="flex gap-4 px-8 w-max"
          >
            {[images.community1, images.community2, images.community3, images.community4, images.community5].map((src, i) => (
              <motion.div key={i} variants={fadeUp} className="relative w-[300px] md:w-[400px] aspect-[3/4] shrink-0 overflow-hidden group">
                <Image src={src} alt={`Community ${i + 1}`} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="400px" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/40 to-transparent" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-32 bg-dark-800">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
            <motion.p variants={fadeUp} className="text-brand-500 tracking-[0.3em] uppercase text-xs mb-4 text-center">
              Pricing
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-center mb-16">
              Simple. Transparent.
            </motion.h2>

            <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { duration: "1 Month", price: "$950", label: "Explorer", desc: "Short stays & trying coliving" },
                { duration: "2 Months", price: "$850", label: "Settler", desc: "Most popular for interns", featured: true },
                { duration: "3+ Months", price: "$750", label: "Resident", desc: "Best value, full commitment" },
              ].map((plan) => (
                <div
                  key={plan.duration}
                  className={`p-8 text-center border transition-colors ${
                    plan.featured ? "border-brand-500 bg-brand-500/5" : "border-dark-600 hover:border-dark-500"
                  }`}
                >
                  {plan.featured && <p className="text-brand-500 text-xs tracking-[0.2em] uppercase mb-4">Popular</p>}
                  <p className="text-dark-300 text-sm mb-2">{plan.label}</p>
                  <p className="text-5xl font-bold mb-1">{plan.price}</p>
                  <p className="text-dark-400 text-sm mb-4">/ month</p>
                  <p className="text-dark-300 text-sm">{plan.duration}</p>
                  <p className="text-dark-400 text-xs mt-2">{plan.desc}</p>
                </div>
              ))}
            </motion.div>

            <motion.p variants={fadeUp} className="text-dark-400 text-sm text-center mt-8">
              All plans include furnished room + utilities. Security deposit required.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative h-screen flex items-center justify-center bg-dark-900">
        <div className="absolute inset-0 opacity-30">
          <Image src={images.hero} alt="" fill className="object-cover" sizes="100vw" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark-800 via-dark-900/80 to-dark-900" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="relative z-10 text-center px-8"
        >
          <motion.h2 variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[0.95]">
            Your Story
            <br />
            <span className="font-light italic text-pink-400">Starts Here</span>
          </motion.h2>
          <motion.div variants={fadeUp}>
            <Link
              href="/apply"
              className="inline-flex items-center gap-3 px-10 py-5 bg-brand-500 text-white text-lg tracking-wide hover:bg-brand-400 transition-colors"
            >
              Apply Now
              <ArrowRight size={20} />
            </Link>
          </motion.div>
          <motion.p variants={fadeUp} className="text-dark-400 text-sm mt-8">
            chicagosubletinn@gmail.com &middot; (312) 714-0294
          </motion.p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-900 border-t border-dark-700 py-8 px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="text-dark-400 text-sm tracking-[0.15em] uppercase">
            Sublet<span className="text-brand-500">Inn</span>
          </span>
          <span className="text-dark-500 text-xs">&copy; {new Date().getFullYear()} SubletInn</span>
        </div>
      </footer>
    </div>
  );
}
