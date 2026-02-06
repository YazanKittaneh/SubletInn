"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/houses", label: "Houses" },
    { href: "/community", label: "Community" },
    { href: "/apply", label: "Apply" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-warm-50/80 backdrop-blur-lg border-b border-warm-200/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-warm-900">
              Sublet<span className="text-clay-500">Inn</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-warm-700 hover:text-warm-900 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/apply"
              className="px-5 py-2 bg-warm-900 text-warm-50 rounded-full text-sm font-medium hover:bg-warm-800 transition-colors"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-warm-700"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-warm-50 border-b border-warm-200"
          >
            <div className="px-6 py-4 space-y-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-base font-medium text-warm-700 hover:text-warm-900 transition-colors py-2"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/apply"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-5 py-3 bg-warm-900 text-warm-50 rounded-full text-sm font-medium hover:bg-warm-800 transition-colors mt-2"
              >
                Apply Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
