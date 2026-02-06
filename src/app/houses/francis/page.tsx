"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  ChevronDown,
  Check,
  Train,
  Coffee,
  Music,
  UtensilsCrossed,
} from "lucide-react";
import { houses } from "@/lib/data";

const house = houses[0]; // Francis

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-warm-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-lg font-medium text-warm-900 pr-4">
          {question}
        </span>
        <ChevronDown
          size={20}
          className={`text-warm-400 shrink-0 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-warm-600 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const categoryIcons: Record<string, React.ElementType> = {
  Coffee: Coffee,
  "Live Music": Music,
  Ramen: UtensilsCrossed,
  Bakery: UtensilsCrossed,
  Burgers: UtensilsCrossed,
  Brunch: UtensilsCrossed,
};

export default function FrancisPage() {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end">
        <div className="absolute inset-0">
          <Image
            src={house.images.hero}
            alt={house.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-warm-900/90 via-warm-900/30 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-12 w-full">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-2 text-warm-200 mb-3"
            >
              <MapPin size={16} />
              <span className="text-sm font-medium">{house.address}</span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-7xl font-bold text-white mb-3"
            >
              {house.name}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-xl text-warm-200 max-w-xl"
            >
              {house.tagline}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-white border-b border-warm-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-warm-100">
            {[
              { label: "Starting at", value: `$${house.priceFrom}/mo` },
              { label: "Rooms", value: String(house.totalRooms) },
              { label: "Neighborhood", value: house.neighborhood },
              { label: "Lease", value: "1-3+ months" },
            ].map((stat) => (
              <div key={stat.label} className="py-6 px-4 text-center">
                <p className="text-sm text-warm-500 mb-1">{stat.label}</p>
                <p className="text-xl font-bold text-warm-900">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About + Gallery */}
      <section className="py-20 bg-warm-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Gallery */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                <Image
                  src={house.images.gallery[selectedImage]}
                  alt={`${house.name} gallery`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-6 gap-2">
                {house.images.gallery.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === i
                        ? "border-clay-500 opacity-100"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.h2
                variants={fadeUp}
                className="text-3xl font-bold text-warm-900 mb-6"
              >
                About the house
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-warm-600 text-lg leading-relaxed mb-4"
              >
                {house.description}
              </motion.p>
              <motion.p
                variants={fadeUp}
                className="text-warm-600 leading-relaxed mb-8"
              >
                Francis helps bring everyone together to form long lasting
                relationships that span beyond the time spent at the house.
                From sushi night to salsa dancing on the patio, Francis makes
                sure you leave with a close and long lasting network.
              </motion.p>

              <motion.div variants={fadeUp}>
                <h3 className="text-lg font-semibold text-warm-900 mb-4">
                  What&apos;s included
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {house.amenities.map((amenity) => (
                    <div key={amenity} className="flex items-start gap-2">
                      <Check
                        size={18}
                        className="text-sage-500 mt-0.5 shrink-0"
                      />
                      <span className="text-warm-600 text-sm">{amenity}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl font-bold text-warm-900 mb-10 text-center"
            >
              Simple, transparent pricing
            </motion.h2>

            <motion.div
              variants={fadeUp}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            >
              {[
                {
                  duration: "1 Month",
                  price: 950,
                  label: "Explorer",
                  desc: "Perfect for short stays and trying out coliving",
                },
                {
                  duration: "2 Months",
                  price: 850,
                  label: "Settler",
                  desc: "Our most popular option for interns and students",
                  featured: true,
                },
                {
                  duration: "3+ Months",
                  price: 750,
                  label: "Resident",
                  desc: "Best value for those ready to commit to the community",
                },
              ].map((plan) => (
                <div
                  key={plan.duration}
                  className={`rounded-2xl p-8 text-center border-2 transition-shadow ${
                    plan.featured
                      ? "border-clay-500 bg-clay-50 shadow-lg"
                      : "border-warm-200 bg-warm-50"
                  }`}
                >
                  {plan.featured && (
                    <span className="text-xs font-semibold text-clay-600 uppercase tracking-wider">
                      Most Popular
                    </span>
                  )}
                  <p className="text-sm text-warm-500 mt-2">{plan.label}</p>
                  <div className="flex items-baseline justify-center gap-1 my-4">
                    <span className="text-4xl font-bold text-warm-900">
                      ${plan.price}
                    </span>
                    <span className="text-warm-500">/mo</span>
                  </div>
                  <p className="text-warm-600 text-sm mb-1">{plan.duration}</p>
                  <p className="text-warm-400 text-xs">{plan.desc}</p>
                </div>
              ))}
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-center text-warm-400 text-sm mt-8"
            >
              All plans include furnished room + utilities. Security deposit
              required.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Neighborhood */}
      <section className="py-20 bg-warm-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-10">
              <h2 className="text-3xl font-bold text-warm-900 mb-3">
                The neighborhood
              </h2>
              <p className="text-warm-500 text-lg max-w-2xl">
                Live in the heart of Logan Square. The CTA California and
                Western stops are just 5 and 7 minutes away. There&apos;s a
                never-ending supply of bars, restaurants, and venues.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage-100 rounded-full text-sm text-sage-700">
                <Train size={16} />
                CTA California stop: 5 min walk
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="grid grid-cols-2 md:grid-cols-3 gap-4"
            >
              {house.nearbySpots.map((spot) => {
                const Icon = categoryIcons[spot.category] || Coffee;
                return (
                  <div
                    key={spot.name}
                    className="group relative aspect-[4/3] rounded-xl overflow-hidden"
                  >
                    <Image
                      src={spot.image}
                      alt={spot.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-warm-900/80 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="flex items-center gap-1.5 text-warm-200 mb-1">
                        <Icon size={14} />
                        <span className="text-xs">{spot.category}</span>
                      </div>
                      <p className="text-white font-semibold">{spot.name}</p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl font-bold text-warm-900 mb-8"
            >
              Frequently asked questions
            </motion.h2>
            <motion.div variants={fadeUp}>
              {house.faqs.map((faq) => (
                <FAQItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-warm-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Interested in {house.name}?
          </h2>
          <p className="text-warm-300 text-lg mb-8 max-w-xl mx-auto">
            Apply today and join a community of ambitious, interesting people in
            one of Chicago&apos;s best neighborhoods.
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
