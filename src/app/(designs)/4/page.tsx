"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Leaf, Sun, Sparkles, Check } from "lucide-react";

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
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

function FloatingDot({ className, delay = 0 }: { className: string; delay?: number }) {
  return (
    <motion.div
      animate={{ y: [0, -15, 0] }}
      transition={{ duration: 4, delay, repeat: Infinity }}
      className={`absolute rounded-full ${className}`}
    />
  );
}

function WaveDivider({ flip = false, color = "#f6f7f4" }: { flip?: boolean; color?: string }) {
  return (
    <div className={`w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""}`}>
      <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        <path
          d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

export default function OrganicDesign() {
  return (
    <div className="min-h-screen bg-warm-50 text-warm-900 overflow-x-hidden">
      {/* Floating Nav */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="fixed top-5 left-1/2 -translate-x-1/2 z-50"
      >
        <div className="flex items-center gap-6 px-8 py-3 rounded-full bg-white/80 backdrop-blur-xl shadow-xl shadow-warm-900/5 border border-warm-100">
          <span className="font-semibold">
            Sublet<span className="text-sage-500">Inn</span>
          </span>
          <div className="hidden md:flex items-center gap-4 text-sm text-warm-400">
            <a href="#about" className="hover:text-warm-700 transition-colors">About</a>
            <a href="#house" className="hover:text-warm-700 transition-colors">House</a>
            <a href="#community" className="hover:text-warm-700 transition-colors">Community</a>
          </div>
          <Link
            href="/apply"
            className="px-5 py-1.5 rounded-full bg-sage-500 text-white text-sm font-medium hover:bg-sage-600 transition-colors"
          >
            Apply
          </Link>
        </div>
      </motion.nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-20 -left-32 w-[500px] h-[500px] rounded-full opacity-30"
            style={{ background: "radial-gradient(circle, #e6d2c8 0%, transparent 70%)" }}
          />
          <div
            className="absolute top-40 -right-32 w-[600px] h-[600px] rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, #d1d7c7 0%, transparent 70%)" }}
          />
          <div
            className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, #f0e6d8 0%, transparent 70%)" }}
          />
          <FloatingDot className="w-3 h-3 bg-sage-300 top-[20%] left-[10%]" delay={0} />
          <FloatingDot className="w-2 h-2 bg-clay-300 top-[30%] right-[15%]" delay={1} />
          <FloatingDot className="w-4 h-4 bg-warm-200 top-[60%] left-[20%]" delay={2} />
          <FloatingDot className="w-2 h-2 bg-sage-200 top-[50%] right-[25%]" delay={0.5} />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-2 mb-8">
              <Leaf size={16} className="text-sage-500" />
              <span className="text-sage-600 text-sm font-medium">Coliving in Chicago</span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-8 tracking-tight">
              Find Your People.
              <br />
              <span className="relative inline-block">
                Find Your Home.
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <motion.path
                    d="M2 8C50 2 100 10 150 6C200 2 250 10 298 4"
                    stroke="#95a37e"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-warm-500 text-lg md:text-xl max-w-xl mx-auto mb-12">
              A warm, welcoming community of young professionals living together in one of Chicago&apos;s best neighborhoods.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/apply"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-sage-500 text-white font-medium hover:bg-sage-600 transition-colors shadow-lg shadow-sage-500/20"
              >
                Join Our Community
                <Heart size={18} />
              </Link>
              <a
                href="#house"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-warm-700 font-medium hover:bg-warm-100 transition-colors shadow-md border border-warm-100"
              >
                Explore Francis
              </a>
            </motion.div>
          </motion.div>

          {/* Organic image arrangement */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-16 relative flex items-center justify-center gap-4 flex-wrap"
          >
            {[images.rooms, images.bedroom, images.living].map((src, i) => (
              <motion.div
                key={i}
                animate={{ y: [0, i % 2 === 0 ? -8 : 8, 0] }}
                transition={{ duration: 5, delay: i * 0.5, repeat: Infinity }}
                className="relative w-48 h-48 md:w-64 md:h-64 overflow-hidden shadow-xl"
                style={{
                  borderRadius: i === 0 ? "60% 40% 50% 50% / 40% 60% 40% 60%" : i === 1 ? "50% 50% 40% 60% / 60% 40% 60% 40%" : "40% 60% 50% 50% / 50% 50% 60% 40%",
                }}
              >
                <Image src={src} alt="SubletInn" fill className="object-cover" sizes="256px" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Wave */}
      <WaveDivider color="#ffffff" />

      {/* Features */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-4">
              <Sun size={16} className="text-clay-500" />
              <span className="text-clay-500 text-sm font-medium">Why SubletInn</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tight">
              Everything you need to feel at home
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: Sparkles,
                title: "Fully Furnished",
                desc: "Move in with just a suitcase. Bed, desk, storage, and fully equipped kitchen ready for you.",
                gradient: "from-clay-50 to-warm-50",
              },
              {
                icon: Leaf,
                title: "All Utilities Included",
                desc: "WiFi, gas, water, electricity. One simple monthly payment with zero surprise bills.",
                gradient: "from-sage-50 to-warm-50",
              },
              {
                icon: Heart,
                title: "Built-In Community",
                desc: "Hand-picked residents from 19+ countries. Sushi nights, salsa dancing, and lasting bonds.",
                gradient: "from-warm-100 to-clay-50",
              },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className={`p-8 rounded-3xl bg-gradient-to-br ${f.gradient} shadow-sm`}
              >
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6">
                  <f.icon size={24} className="text-sage-500" />
                </div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-warm-500 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <WaveDivider color="#fdf8f6" />

      {/* House Showcase */}
      <section id="house" className="py-20 px-6 bg-warm-50 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/4 -right-40 w-[500px] h-[500px] rounded-full opacity-15"
            style={{ background: "radial-gradient(circle, #d1d7c7 0%, transparent 70%)" }}
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-12">
              <span className="text-sage-500 text-sm font-medium">Featured House</span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mt-2">Francis</h2>
              <p className="text-warm-400 text-lg mt-2">Logan Square, Chicago</p>
            </motion.div>
          </motion.div>

          {/* Image Grid with organic shapes */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12"
          >
            {[
              { src: images.rooms, span: "col-span-2 row-span-2", radius: "40px 80px 40px 80px" },
              { src: images.room6, span: "", radius: "60px 30px 60px 30px" },
              { src: images.dining, span: "", radius: "30px 60px 30px 60px" },
              { src: images.exterior, span: "md:col-span-2", radius: "60px 40px 80px 40px" },
              { src: images.room11, span: "", radius: "40px 60px 40px 60px" },
            ].map((img, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className={`relative overflow-hidden ${img.span} ${
                  img.span.includes("row-span-2") ? "aspect-square" : "aspect-[4/3]"
                }`}
                style={{ borderRadius: img.radius }}
              >
                <Image src={img.src} alt={`Francis ${i + 1}`} fill className="object-cover" sizes="33vw" />
              </motion.div>
            ))}
          </motion.div>

          {/* Amenities */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="bg-white rounded-3xl p-8 shadow-sm"
          >
            <motion.h3 variants={fadeUp} className="text-xl font-bold mb-6">What&apos;s included</motion.h3>
            <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "Furnished rooms with bed, desk & storage",
                "Fully equipped kitchen",
                "WiFi included",
                "All utilities covered",
                "Coin-operated laundry",
                "Modern decor throughout",
                "Community events & gatherings",
                "5 min walk to CTA California",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-sage-100 flex items-center justify-center shrink-0">
                    <Check size={14} className="text-sage-600" />
                  </div>
                  <span className="text-warm-600 text-sm">{item}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <WaveDivider color="#ffffff" />

      {/* Community */}
      <section id="community" className="py-20 px-6 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full opacity-15"
            style={{ background: "radial-gradient(circle, #f0e6d8 0%, transparent 70%)" }}
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              A community that feels like family
            </motion.h2>
            <motion.p variants={fadeUp} className="text-warm-400 text-lg max-w-xl mx-auto">
              Residents from 19+ countries, united by ambition and the desire to build meaningful connections.
            </motion.p>
          </motion.div>

          {/* Overlapping circular photos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center -space-x-6 mb-12"
          >
            {[images.community1, images.community2, images.community3, images.community4, images.community5].map(
              (src, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, i % 2 === 0 ? -6 : 6, 0] }}
                  transition={{ duration: 4, delay: i * 0.3, repeat: Infinity }}
                  className="relative w-24 h-24 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white shadow-lg"
                  style={{ zIndex: 5 - i }}
                >
                  <Image src={src} alt={`Community ${i + 1}`} fill className="object-cover" sizes="144px" />
                </motion.div>
              )
            )}
          </motion.div>

          {/* Country pills */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="flex flex-wrap justify-center gap-2"
          >
            {["Czech Republic", "Germany", "Denmark", "Italy", "Poland", "Ukraine", "Canada", "Mexico", "USA", "Argentina", "Chile", "Ghana", "China", "India", "Jordan", "South Korea", "Australia"].map(
              (country) => (
                <motion.span
                  key={country}
                  variants={fadeUp}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-warm-50 to-sage-50 text-warm-600 text-xs font-medium border border-warm-100"
                >
                  {country}
                </motion.span>
              )
            )}
          </motion.div>
        </div>
      </section>

      <WaveDivider color="#fdf8f6" />

      {/* Pricing */}
      <section className="py-20 px-6 bg-warm-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tight">
              Simple, friendly pricing
            </motion.h2>
            <motion.p variants={fadeUp} className="text-warm-400 text-lg mt-2">
              All plans include furnished room + utilities
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { duration: "1 Month", price: 950, label: "Explorer", desc: "Perfect for short stays", top: "bg-gradient-to-r from-clay-200 to-clay-300" },
              { duration: "2 Months", price: 850, label: "Settler", desc: "Most popular for interns", featured: true, top: "bg-gradient-to-r from-sage-300 to-sage-400" },
              { duration: "3+ Months", price: 750, label: "Resident", desc: "Best value", top: "bg-gradient-to-r from-warm-200 to-warm-300" },
            ].map((plan) => (
              <motion.div
                key={plan.duration}
                variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className={`rounded-3xl overflow-hidden bg-white shadow-sm ${
                  plan.featured ? "shadow-lg ring-2 ring-sage-300" : ""
                }`}
              >
                <div className={`h-2 ${plan.top}`} />
                <div className="p-8 text-center">
                  {plan.featured && (
                    <span className="inline-block px-3 py-1 rounded-full bg-sage-100 text-sage-700 text-xs font-medium mb-3">
                      Most Popular
                    </span>
                  )}
                  <p className="text-warm-400 text-sm mb-1">{plan.label}</p>
                  <div className="flex items-baseline justify-center gap-1 my-3">
                    <span className="text-5xl font-bold">${plan.price}</span>
                    <span className="text-warm-400">/mo</span>
                  </div>
                  <p className="text-warm-600 text-sm mb-1">{plan.duration}</p>
                  <p className="text-warm-400 text-xs">{plan.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <WaveDivider color="#ffffff" />

      {/* CTA */}
      <section className="py-32 px-6 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, #d1d7c7 0%, transparent 70%)" }}
          />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-3xl mx-auto text-center relative z-10"
        >
          <motion.div variants={fadeUp}>
            <Heart size={32} className="mx-auto mb-6 text-sage-400" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Your home is waiting
          </motion.h2>
          <motion.p variants={fadeUp} className="text-warm-400 text-lg mb-10 max-w-md mx-auto">
            Join a warm community of ambitious people in Logan Square. Apply today and find where you belong.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link
              href="/apply"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-sage-500 text-white text-lg font-medium hover:bg-sage-600 transition-colors shadow-xl shadow-sage-500/20"
            >
              Apply Now
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-warm-50 border-t border-warm-100 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="font-semibold text-warm-600">
            Sublet<span className="text-sage-500">Inn</span>
          </span>
          <div className="flex items-center gap-6 text-sm text-warm-400">
            <span>chicagosubletinn@gmail.com</span>
            <span>(312) 714-0294</span>
          </div>
          <span className="text-warm-300 text-xs">&copy; {new Date().getFullYear()} SubletInn</span>
        </div>
      </footer>
    </div>
  );
}
