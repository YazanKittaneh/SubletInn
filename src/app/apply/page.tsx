"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { houses } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    occupation: "",
    moveInDate: "",
    house: "",
    duration: "",
    about: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-warm-50 pt-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center px-6 max-w-md"
        >
          <CheckCircle size={64} className="text-sage-500 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-warm-900 mb-4">
            Application received!
          </h1>
          <p className="text-warm-500 text-lg mb-2">
            Thanks, {formData.name}. We&apos;ll review your application and get
            back to you within a day.
          </p>
          <p className="text-warm-400 text-sm">
            Check your email at {formData.email} for a confirmation.
          </p>
        </motion.div>
      </section>
    );
  }

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-12 bg-warm-50">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p
              variants={fadeUp}
              className="text-sage-600 text-sm font-medium tracking-widest uppercase mb-3"
            >
              Apply
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-6xl font-bold text-warm-900 mb-4"
            >
              Join the community
            </motion.h1>
            <motion.p variants={fadeUp} className="text-warm-500 text-lg">
              Fill out the application below and we&apos;ll get back to you
              within a day. We look for people with a passion for work and
              outside interests - people who make great housemates.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="pb-24 bg-warm-50">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.form
            onSubmit={handleSubmit}
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="bg-white rounded-2xl border border-warm-100 p-8 md:p-12 shadow-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={fadeUp}>
                <label className="block text-sm font-medium text-warm-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-warm-200 bg-warm-50 text-warm-900 placeholder-warm-400 focus:outline-none focus:ring-2 focus:ring-clay-400 focus:border-transparent transition"
                  placeholder="Your full name"
                />
              </motion.div>

              <motion.div variants={fadeUp}>
                <label className="block text-sm font-medium text-warm-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-warm-200 bg-warm-50 text-warm-900 placeholder-warm-400 focus:outline-none focus:ring-2 focus:ring-clay-400 focus:border-transparent transition"
                  placeholder="you@email.com"
                />
              </motion.div>

              <motion.div variants={fadeUp}>
                <label className="block text-sm font-medium text-warm-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-warm-200 bg-warm-50 text-warm-900 placeholder-warm-400 focus:outline-none focus:ring-2 focus:ring-clay-400 focus:border-transparent transition"
                  placeholder="(555) 123-4567"
                />
              </motion.div>

              <motion.div variants={fadeUp}>
                <label className="block text-sm font-medium text-warm-700 mb-2">
                  Age *
                </label>
                <input
                  type="number"
                  name="age"
                  required
                  min="18"
                  max="99"
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-warm-200 bg-warm-50 text-warm-900 placeholder-warm-400 focus:outline-none focus:ring-2 focus:ring-clay-400 focus:border-transparent transition"
                  placeholder="25"
                />
              </motion.div>

              <motion.div variants={fadeUp}>
                <label className="block text-sm font-medium text-warm-700 mb-2">
                  Occupation *
                </label>
                <input
                  type="text"
                  name="occupation"
                  required
                  value={formData.occupation}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-warm-200 bg-warm-50 text-warm-900 placeholder-warm-400 focus:outline-none focus:ring-2 focus:ring-clay-400 focus:border-transparent transition"
                  placeholder="Software Engineer, Student, etc."
                />
              </motion.div>

              <motion.div variants={fadeUp}>
                <label className="block text-sm font-medium text-warm-700 mb-2">
                  Desired Move-in Date *
                </label>
                <input
                  type="date"
                  name="moveInDate"
                  required
                  value={formData.moveInDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-warm-200 bg-warm-50 text-warm-900 placeholder-warm-400 focus:outline-none focus:ring-2 focus:ring-clay-400 focus:border-transparent transition"
                />
              </motion.div>

              <motion.div variants={fadeUp}>
                <label className="block text-sm font-medium text-warm-700 mb-2">
                  Preferred House *
                </label>
                <select
                  name="house"
                  required
                  value={formData.house}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-warm-200 bg-warm-50 text-warm-900 focus:outline-none focus:ring-2 focus:ring-clay-400 focus:border-transparent transition"
                >
                  <option value="">Select a house</option>
                  {houses.map((h) => (
                    <option key={h.slug} value={h.slug}>
                      {h.name} - {h.neighborhood}, {h.city}
                    </option>
                  ))}
                </select>
              </motion.div>

              <motion.div variants={fadeUp}>
                <label className="block text-sm font-medium text-warm-700 mb-2">
                  Planned Duration *
                </label>
                <select
                  name="duration"
                  required
                  value={formData.duration}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-warm-200 bg-warm-50 text-warm-900 focus:outline-none focus:ring-2 focus:ring-clay-400 focus:border-transparent transition"
                >
                  <option value="">Select duration</option>
                  <option value="1">1 month ($950/mo)</option>
                  <option value="2">2 months ($850/mo)</option>
                  <option value="3+">3+ months ($750+/mo)</option>
                </select>
              </motion.div>
            </div>

            <motion.div variants={fadeUp} className="mt-6">
              <label className="block text-sm font-medium text-warm-700 mb-2">
                Tell us about yourself *
              </label>
              <textarea
                name="about"
                required
                rows={5}
                value={formData.about}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-warm-200 bg-warm-50 text-warm-900 placeholder-warm-400 focus:outline-none focus:ring-2 focus:ring-clay-400 focus:border-transparent transition resize-none"
                placeholder="What are you passionate about? What brings you to Chicago? What would you bring to the community?"
              />
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8">
              <button
                type="submit"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-warm-900 text-warm-50 rounded-full font-semibold text-lg hover:bg-warm-800 transition-colors"
              >
                <Send size={20} />
                Submit Application
              </button>
              <p className="text-warm-400 text-sm mt-3">
                We&apos;ll review your application and respond within 24 hours.
              </p>
            </motion.div>
          </motion.form>

          {/* What to Expect */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mt-12"
          >
            <h3 className="text-xl font-semibold text-warm-900 mb-6">
              What to expect
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  step: "1",
                  title: "Apply",
                  desc: "Fill out the form above with your details and a bit about yourself.",
                },
                {
                  step: "2",
                  title: "We review",
                  desc: "Our team reviews your application within 24 hours and reaches out.",
                },
                {
                  step: "3",
                  title: "Move in",
                  desc: "Once approved, pay your deposit and pick your move-in date. Welcome home.",
                },
              ].map((s) => (
                <div key={s.step} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-clay-100 text-clay-600 flex items-center justify-center font-bold shrink-0">
                    {s.step}
                  </div>
                  <div>
                    <h4 className="font-semibold text-warm-900 mb-1">
                      {s.title}
                    </h4>
                    <p className="text-warm-500 text-sm">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
