"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

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

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

function SectionNumber({ num }: { num: string }) {
  return (
    <span className="text-warm-300 text-xs font-mono tracking-wider">{num} /</span>
  );
}

export default function MagazineDesign() {
  return (
    <div className="min-h-screen bg-warm-50 text-warm-900 font-sans">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-warm-50/90 backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <span className="font-serif text-xl italic text-warm-900">
            SubletInn
          </span>
          <div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.2em] text-warm-400">
            <a href="#about" className="hover:text-warm-900 transition-colors">About</a>
            <a href="#francis" className="hover:text-warm-900 transition-colors">Francis</a>
            <a href="#community" className="hover:text-warm-900 transition-colors">Community</a>
            <a href="#pricing" className="hover:text-warm-900 transition-colors">Pricing</a>
          </div>
          <Link
            href="/apply"
            className="text-xs uppercase tracking-[0.2em] text-warm-900 hover:text-clay-500 transition-colors flex items-center gap-1"
          >
            Apply <ArrowUpRight size={12} />
          </Link>
        </div>
        <div className="border-b border-warm-200" />
      </motion.nav>

      {/* Hero - Magazine Cover */}
      <section className="pt-20 min-h-screen grid grid-cols-1 md:grid-cols-2">
        {/* Left - Title */}
        <div className="flex flex-col justify-center px-8 md:px-16 py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="text-warm-400 text-xs tracking-[0.3em] uppercase mb-8 font-mono">
              Issue No. 01 &mdash; Chicago, 2026
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.1] mb-8"
            >
              The New
              <br />
              Way to
              <br />
              <em className="text-clay-500">Live</em> in
              <br />
              Chicago
            </motion.h1>
            <motion.div variants={fadeUp} className="border-t border-warm-200 pt-6">
              <p className="text-warm-500 leading-relaxed max-w-sm">
                Inside SubletInn, the coliving community redefining how young professionals
                experience the city. Furnished rooms, lasting friendships, and one address that
                changes everything.
              </p>
            </motion.div>
            <motion.p variants={fadeUp} className="text-warm-300 text-xs mt-8 font-mono tracking-wider">
              SCROLL TO EXPLORE
            </motion.p>
          </motion.div>
        </div>

        {/* Right - Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative min-h-[60vh] md:min-h-screen"
        >
          <Image
            src={images.hero}
            alt="SubletInn community"
            fill
            className="object-cover"
            sizes="50vw"
            priority
          />
        </motion.div>
      </section>

      {/* Editorial Intro */}
      <section id="about" className="py-24 px-8 md:px-16 border-t border-warm-200">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-8">
              <SectionNumber num="01" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              <motion.div variants={fadeUp} className="md:col-span-5">
                <h2 className="text-4xl md:text-5xl font-serif leading-[1.15] mb-6">
                  More than shared walls &mdash; shared <em>ambitions</em>
                </h2>
              </motion.div>
              <motion.div variants={fadeUp} className="md:col-span-7 md:pt-2">
                <div className="columns-1 md:columns-2 gap-8 text-warm-600 leading-relaxed space-y-4">
                  <p>
                    SubletInn is a coliving company focused on creating communities of young
                    professionals within fast-moving cities through the medium of shared houses.
                    The backbone is the community we build.
                  </p>
                  <p>
                    We look for a certain passion for work and outside interests, which translates
                    into a community full of ambitious, interesting, and fun people. When you put
                    smart and enthusiastic people together, something remarkable happens.
                  </p>
                  <p>
                    Every room is furnished, every utility is covered. All you need to bring is
                    yourself and your ambition. From sushi nights to salsa dancing on the patio,
                    Francis makes sure you leave with a close and lasting network.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pull Quote */}
      <section className="py-16 px-8 border-t border-b border-warm-200">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="border-l-2 border-clay-400 pl-8 md:pl-12 text-left">
            <p className="text-2xl md:text-3xl font-serif italic leading-relaxed text-warm-700">
              &ldquo;A hotspot for students and interns who want to live with people who share
              the same drive and motivation. It&apos;s bound to be amazing.&rdquo;
            </p>
            <p className="text-warm-400 text-sm mt-4 font-mono tracking-wider uppercase">
              &mdash; SubletInn, Est. 2016
            </p>
          </div>
        </motion.div>
      </section>

      {/* Francis Photo Essay */}
      <section id="francis" className="py-24 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-4">
              <SectionNumber num="02" />
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-serif mb-2">
              Francis House
            </motion.h2>
            <motion.p variants={fadeUp} className="text-warm-400 text-sm tracking-[0.15em] uppercase mb-16">
              Logan Square, Chicago &mdash; 12 rooms
            </motion.p>
          </motion.div>

          {/* Photo essay grid */}
          <div className="space-y-8">
            {/* Full width */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative w-full aspect-[21/9] overflow-hidden group"
            >
              <Image src={images.rooms} alt="Francis House overview" fill className="object-cover transition-transform duration-700 group-hover:scale-[1.02]" sizes="100vw" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-white text-sm font-mono">The main living area, where community happens naturally.</p>
              </div>
            </motion.div>

            {/* Two column */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative aspect-[4/5] overflow-hidden group"
              >
                <Image src={images.bedroom} alt="Bedroom" fill className="object-cover transition-transform duration-700 group-hover:scale-[1.02]" sizes="50vw" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-white text-sm font-mono">Every room: furnished, private, yours.</p>
                </div>
              </motion.div>
              <div className="flex flex-col justify-between gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="relative aspect-[4/3] overflow-hidden group"
                >
                  <Image src={images.dining} alt="Dining area" fill className="object-cover transition-transform duration-700 group-hover:scale-[1.02]" sizes="50vw" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-white text-sm font-mono">Shared dinners, shared stories.</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="border-t border-warm-200 pt-6"
                >
                  <p className="text-warm-600 leading-relaxed">
                    12 private rooms in the heart of Logan Square. Five minutes from the CTA California stop,
                    surrounded by the neighborhood&apos;s best coffee shops, live music venues, and restaurants.
                    Francis isn&apos;t just where you live &mdash; it&apos;s where your Chicago story begins.
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Three column */}
            <div className="grid grid-cols-3 gap-4">
              {[images.room6, images.living, images.room11].map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                  className="relative aspect-square overflow-hidden group"
                >
                  <Image src={src} alt={`Francis detail ${i + 1}`} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.02]" sizes="33vw" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Story */}
      <section id="community" className="py-24 px-8 md:px-16 border-t border-warm-200 bg-warm-900 text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-4">
              <span className="text-warm-600 text-xs font-mono tracking-wider">03 /</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-serif mb-4">
              The Community
            </motion.h2>
            <motion.p variants={fadeUp} className="text-warm-400 text-sm tracking-[0.15em] uppercase mb-16">
              19+ countries represented
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="md:col-span-7 grid grid-cols-2 gap-4"
            >
              {[images.community1, images.community2, images.community3, images.community5].map((src, i) => (
                <div key={i} className={`relative overflow-hidden group ${i === 0 ? "row-span-2 aspect-[3/4]" : "aspect-square"}`}>
                  <Image src={src} alt={`Community ${i + 1}`} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.02]" sizes="35vw" />
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="md:col-span-5 flex flex-col justify-center"
            >
              <p className="text-warm-300 leading-relaxed text-lg mb-8">
                Every resident is hand-picked. We look for people with a genuine passion for their work
                and a desire to connect with others. The result is a house where conversations flow
                naturally, where Monday mornings feel different, and where you&apos;re surrounded by people
                from Czech Republic to Australia, from India to Argentina.
              </p>
              <div className="border-t border-warm-700 pt-6">
                <div className="flex flex-wrap gap-3">
                  {["USA", "Germany", "Italy", "India", "Mexico", "Canada", "Poland", "Jordan", "China", "Australia", "Argentina", "Ghana"].map(
                    (country) => (
                      <span key={country} className="text-warm-500 text-xs font-mono">
                        {country}
                      </span>
                    )
                  )}
                  <span className="text-warm-600 text-xs font-mono">+7 more</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-8 md:px-16 border-t border-warm-200">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-4">
              <SectionNumber num="04" />
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-serif mb-16">
              Pricing
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-warm-200">
            {[
              { duration: "1 Month", price: "$950", label: "Explorer", desc: "Perfect for trying out coliving" },
              { duration: "2 Months", price: "$850", label: "Settler", desc: "Our most popular option", featured: true },
              { duration: "3+ Months", price: "$750", label: "Resident", desc: "Best value for commitment" },
            ].map((plan) => (
              <motion.div
                key={plan.duration}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`p-10 ${plan.featured ? "bg-warm-900 text-white" : "bg-warm-50"}`}
              >
                {plan.featured && (
                  <span className="text-clay-400 text-xs font-mono tracking-wider uppercase">Most Popular</span>
                )}
                <p className={`text-xs font-mono tracking-wider uppercase mt-2 ${plan.featured ? "text-warm-400" : "text-warm-400"}`}>
                  {plan.label}
                </p>
                <p className="text-5xl font-serif my-6">{plan.price}<span className={`text-lg ${plan.featured ? "text-warm-400" : "text-warm-400"}`}>/mo</span></p>
                <p className={`text-sm ${plan.featured ? "text-warm-300" : "text-warm-500"}`}>{plan.duration}</p>
                <div className={`border-t mt-6 pt-4 ${plan.featured ? "border-warm-700" : "border-warm-200"}`}>
                  <p className={`text-sm ${plan.featured ? "text-warm-400" : "text-warm-500"}`}>{plan.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-warm-400 text-xs font-mono mt-6 tracking-wider"
          >
            All plans include furnished room, WiFi, gas, water, and electricity.
          </motion.p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-8 border-t border-warm-200">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
              <div>
                <p className="text-warm-300 text-xs font-mono tracking-wider mb-4">05 /</p>
                <h2 className="text-5xl md:text-6xl font-serif leading-[1.1]">
                  Your chapter
                  <br />
                  <em className="text-clay-500">begins here.</em>
                </h2>
              </div>
              <div>
                <p className="text-warm-500 leading-relaxed mb-8">
                  Apply today and become part of a community that will change how you experience Chicago.
                  Your room is waiting. Your people are waiting.
                </p>
                <Link
                  href="/apply"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-warm-900 text-white font-medium hover:bg-warm-800 transition-colors"
                >
                  Apply Now
                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-warm-200 py-10 px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="font-serif text-lg italic text-warm-900">SubletInn</span>
            <p className="text-warm-400 text-xs font-mono mt-1">Creating communities for young professionals</p>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 text-xs font-mono text-warm-400 tracking-wider">
            <span>chicagosubletinn@gmail.com</span>
            <span className="hidden md:inline">&middot;</span>
            <span>(312) 714-0294</span>
            <span className="hidden md:inline">&middot;</span>
            <span>&copy; {new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
