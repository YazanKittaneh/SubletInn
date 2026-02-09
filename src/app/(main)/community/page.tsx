"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Globe,
  Heart,
  Handshake,
  GraduationCap,
  Briefcase,
  Music,
} from "lucide-react";
import { countries } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function CommunityPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-warm-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/subletinn/francis/living2.jpg"
            alt="Community"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p
              variants={fadeUp}
              className="text-clay-300 text-sm font-medium tracking-widest uppercase mb-3"
            >
              Our Community
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              More than
              <br />
              a place to live
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-warm-200 text-xl max-w-2xl leading-relaxed"
            >
              Think a dorm, but instead of the shirtless guitar player who
              doesn&apos;t know the difference between 3 a.m. and 3 p.m. living
              next to you, it&apos;s someone pretty cool. That&apos;s what we
              are.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Who lives here */}
      <section className="py-24 bg-warm-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              className="text-4xl font-bold text-warm-900 mb-4"
            >
              Who lives here?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-warm-500 text-lg max-w-3xl mb-12"
            >
              People doing internships, students still in school, or those just
              entering the workforce. What we look for is a certain passion for
              work and outside interests, which translates into a community full
              of ambitious, interesting, and fun people to be around.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {[
                {
                  icon: GraduationCap,
                  title: "Students & Interns",
                  desc: "From top universities and companies, getting real-world experience in the city.",
                },
                {
                  icon: Briefcase,
                  title: "Young Professionals",
                  desc: "Early-career folks building their careers and looking for a supportive community.",
                },
                {
                  icon: Globe,
                  title: "International Residents",
                  desc: "People from 19+ countries bringing diverse perspectives and experiences.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-8 border border-warm-100"
                >
                  <div className="w-12 h-12 bg-sage-100 rounded-xl flex items-center justify-center mb-5">
                    <item.icon className="text-sage-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-warm-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-warm-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              className="text-4xl font-bold text-warm-900 mb-12 text-center"
            >
              What makes us different
            </motion.h2>

            <motion.div
              variants={fadeUp}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            >
              {[
                {
                  icon: Heart,
                  title: "Curated Community",
                  desc: "We have an application process because we're trying to get as eclectic a mix and as friendly a group as we can. Everyone here wants to be here.",
                },
                {
                  icon: Handshake,
                  title: "Self-Governance",
                  desc: "There's a spirit of self-governance where everyone who lives here is responsible for themselves and others' well-being. Mutual respect is the foundation.",
                },
                {
                  icon: Music,
                  title: "Events & Experiences",
                  desc: "From sushi nights to salsa dancing on the patio, there's always something happening. We encourage both professional relationships and friendships.",
                },
                {
                  icon: Globe,
                  title: "Lasting Connections",
                  desc: "Francis helps bring everyone together to form long-lasting relationships that span beyond the time spent at the house. Your network starts here.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-5">
                  <div className="w-12 h-12 bg-clay-100 rounded-xl flex items-center justify-center shrink-0">
                    <item.icon className="text-clay-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-warm-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-warm-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Global Map */}
      <section className="py-24 bg-warm-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center"
          >
            <motion.div variants={fadeUp}>
              <Globe className="mx-auto mb-6 text-clay-400" size={48} />
              <h2 className="text-4xl font-bold mb-4">
                19+ countries represented
              </h2>
              <p className="text-warm-300 text-lg max-w-2xl mx-auto mb-12">
                We have people coming from all over the world to live in this
                slice of Logan Square. Here are just some of the countries our
                residents call home.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto"
            >
              {countries.map((country) => (
                <span
                  key={country}
                  className="px-4 py-2 bg-warm-800 rounded-full text-sm text-warm-200 border border-warm-700 hover:bg-warm-700 transition-colors"
                >
                  {country}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 bg-sage-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.blockquote
              variants={fadeUp}
              className="text-2xl md:text-3xl font-medium text-warm-800 leading-relaxed mb-6"
            >
              &ldquo;We encourage professional relationships as well as
              friendships. It&apos;s our hope that here, you&apos;ll not only
              find your new running buddy, but also someone to work on a cool
              project with.&rdquo;
            </motion.blockquote>
            <motion.p variants={fadeUp} className="text-warm-500">
              &mdash; The SubletInn Team
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              className="text-4xl font-bold text-warm-900 mb-4"
            >
              Ready to be part of something?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-warm-500 text-lg mb-8"
            >
              We&apos;ve been there too - we know how much finding a place in
              Chicago for an internship or a fresh start can be tough. Let us
              make it easy.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                href="/apply"
                className="inline-flex items-center gap-2 px-8 py-4 bg-warm-900 text-warm-50 rounded-full font-semibold text-lg hover:bg-warm-800 transition-colors"
              >
                Apply to Join
                <ArrowRight size={20} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
