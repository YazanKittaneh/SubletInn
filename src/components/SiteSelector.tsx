"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Palette } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const routes = [
  { path: "/", label: "Home", icon: Home },
  { path: "/1", label: "Design 1", icon: null },
  { path: "/2", label: "Design 2", icon: null },
  { path: "/3", label: "Design 3", icon: null },
  { path: "/4", label: "Design 4", icon: null },
  { path: "/5", label: "Design 5", icon: null },
];

export default function SiteSelector() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50">
      <div className="relative">
        {/* Toggle Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 rounded-full bg-warm-900 text-white shadow-lg hover:bg-warm-800 transition-colors flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Palette size={20} />
        </motion.button>

        {/* Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.2 }}
              className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-xl border border-warm-100 overflow-hidden min-w-[160px]"
            >
              <div className="p-2">
                <div className="text-xs font-medium text-warm-400 uppercase tracking-wider px-3 py-2">
                  Designs
                </div>
                {routes.map((route) => {
                  const isActive = pathname === route.path;
                  const Icon = route.icon;

                  return (
                    <Link
                      key={route.path}
                      href={route.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                        isActive
                          ? "bg-warm-900 text-white"
                          : "text-warm-600 hover:bg-warm-50"
                      }`}
                    >
                      {Icon && <Icon size={16} />}
                      <span>{route.label}</span>
                      {isActive && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="ml-auto w-1.5 h-1.5 rounded-full bg-white"
                        />
                      )}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 -z-10"
          />
        )}
      </AnimatePresence>
    </div>
  );
}
