"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Users, Bed } from "lucide-react";
import { houses } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function HousesPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-warm-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              className="text-sage-600 text-sm font-medium tracking-widest uppercase mb-3"
            >
              Our Houses
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-6xl font-bold text-warm-900 mb-4"
            >
              Find your home
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-warm-500 text-lg max-w-2xl"
            >
              Each of our houses is a unique community in some of Chicago&apos;s
              most vibrant neighborhoods. Explore and find the one that fits you.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* House Cards */}
      <section className="pb-24 bg-warm-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 gap-8"
          >
            {houses.map((house) => (
              <motion.div key={house.slug} variants={fadeUp}>
                <Link
                  href={`/houses/${house.slug}`}
                  className="group block bg-white rounded-2xl overflow-hidden border border-warm-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Image */}
                    <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[400px]">
                      <Image
                        src={house.images.gallery[0]}
                        alt={house.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-warm-900">
                          {house.totalRooms} rooms
                        </span>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-2 text-warm-500 mb-3">
                        <MapPin size={16} />
                        <span className="text-sm font-medium">
                          {house.neighborhood}, {house.city}
                        </span>
                      </div>

                      <h2 className="text-3xl font-bold text-warm-900 mb-3 group-hover:text-clay-600 transition-colors">
                        {house.name}
                      </h2>

                      <p className="text-warm-500 mb-2 text-sm italic">
                        {house.tagline}
                      </p>

                      <p className="text-warm-600 leading-relaxed mb-6">
                        {house.description}
                      </p>

                      <div className="flex flex-wrap gap-4 mb-6">
                        <div className="flex items-center gap-2 text-sm text-warm-600">
                          <Bed size={16} className="text-sage-500" />
                          Furnished rooms
                        </div>
                        <div className="flex items-center gap-2 text-sm text-warm-600">
                          <Users size={16} className="text-sage-500" />
                          {house.totalRooms} residents
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-bold text-warm-900">
                            ${house.priceFrom}
                          </span>
                          <span className="text-warm-500 text-sm">
                            /mo starting
                          </span>
                        </div>
                        <span className="inline-flex items-center gap-1 text-clay-600 font-medium group-hover:gap-2 transition-all">
                          View details
                          <ArrowRight size={18} />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-warm-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Don&apos;t see what you&apos;re looking for?
          </h2>
          <p className="text-warm-300 text-lg mb-8">
            We&apos;re always expanding. Apply now and let us know your
            preferences - we&apos;ll help you find the right fit.
          </p>
          <Link
            href="/apply"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-warm-900 rounded-full font-semibold hover:bg-warm-100 transition-colors"
          >
            Apply Now
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
