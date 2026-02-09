"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Users,
  Wifi,
  Home,
  MapPin,
  Globe,
  Sparkles,
} from "lucide-react";
import { houses, countries } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/subletinn/homepage/hero-dinner.jpg"
            alt="SubletInn community"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-warm-900/70 via-warm-900/50 to-warm-900/80" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              className="text-clay-300 text-sm font-medium tracking-widest uppercase mb-6"
            >
              Coliving in Chicago
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] mb-6"
            >
              Live with people
              <br />
              <span className="text-clay-300">who inspire you</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-warm-200 max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Furnished rooms, utilities included, and a built-in community of
              ambitious young professionals. This is coliving, done right.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/houses"
                className="px-8 py-4 bg-white text-warm-900 rounded-full font-semibold hover:bg-warm-100 transition-colors flex items-center gap-2 text-lg"
              >
                Explore Houses
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/apply"
                className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-colors text-lg"
              >
                Apply Now
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1.5">
            <div className="w-1.5 h-3 bg-white/60 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Value Props */}
      <section className="py-24 bg-warm-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Home,
                title: "Furnished & Ready",
                desc: "Move in with just your suitcase. Rooms come with a bed, desk, and storage. Common areas are fully equipped.",
              },
              {
                icon: Wifi,
                title: "All-Inclusive",
                desc: "Wi-Fi, gas, water, electricity - it's all covered. One simple monthly payment, no surprise bills.",
              },
              {
                icon: Users,
                title: "Built-In Community",
                desc: "Live alongside ambitious professionals and interns from around the world. Your next collaborator might be down the hall.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="bg-white rounded-2xl p-8 border border-warm-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-sage-100 rounded-xl flex items-center justify-center mb-5">
                  <item.icon className="text-sage-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-warm-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-warm-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured House */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-12">
              <p className="text-sage-600 text-sm font-medium tracking-widest uppercase mb-3">
                Featured House
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-warm-900">
                {houses[0].name}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeUp}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src={houses[0].images.gallery[0]}
                    alt={`${houses[0].name} house`}
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              <motion.div variants={fadeUp}>
                <div className="flex items-center gap-2 text-warm-500 mb-4">
                  <MapPin size={18} />
                  <span className="text-sm font-medium">
                    {houses[0].neighborhood}, {houses[0].city}
                  </span>
                </div>
                <p className="text-warm-600 text-lg leading-relaxed mb-6">
                  {houses[0].description}
                </p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-3xl font-bold text-warm-900">
                    ${houses[0].priceFrom}
                  </span>
                  <span className="text-warm-500">/month</span>
                  <span className="text-warm-400 text-sm ml-1">starting</span>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  {houses[0].highlights.slice(0, 4).map((h) => (
                    <div key={h} className="flex items-start gap-2">
                      <Sparkles
                        size={16}
                        className="text-clay-500 mt-0.5 shrink-0"
                      />
                      <span className="text-sm text-warm-600">{h}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={`/houses/${houses[0].slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-warm-900 text-warm-50 rounded-full font-medium hover:bg-warm-800 transition-colors"
                >
                  View Details
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-warm-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-warm-900 mb-4">
                See the space
              </h2>
              <p className="text-warm-500 text-lg">
                Modern, comfortable, and designed for community living
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="grid grid-cols-2 md:grid-cols-3 gap-4"
            >
              {houses[0].images.gallery.map((img, i) => (
                <div
                  key={i}
                  className={`relative rounded-xl overflow-hidden ${
                    i === 0 ? "md:col-span-2 md:row-span-2 aspect-square" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`House gallery ${i + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Global Community */}
      <section className="py-24 bg-warm-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center"
          >
            <motion.div variants={fadeUp}>
              <Globe className="mx-auto mb-6 text-clay-400" size={48} />
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                A global community
              </h2>
              <p className="text-warm-300 text-lg max-w-2xl mx-auto mb-12">
                Our residents come from all over the world, bringing diverse
                perspectives, cultures, and experiences under one roof.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto"
            >
              {countries.map((country) => (
                <span
                  key={country}
                  className="px-4 py-2 bg-warm-800 rounded-full text-sm text-warm-200 border border-warm-700"
                >
                  {country}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-sage-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-bold text-warm-900 mb-4"
            >
              Ready to join?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-warm-500 text-lg mb-8 max-w-xl mx-auto"
            >
              Apply today and we&apos;ll get back to you within a day. Your next
              chapter starts here.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                href="/apply"
                className="inline-flex items-center gap-2 px-8 py-4 bg-warm-900 text-warm-50 rounded-full font-semibold text-lg hover:bg-warm-800 transition-colors"
              >
                Start Your Application
                <ArrowRight size={20} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
