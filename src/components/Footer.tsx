import Link from "next/link";
import { Mail, Phone, Instagram } from "lucide-react";
import { siteConfig } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-warm-900 text-warm-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-warm-50 mb-3">
              Sublet<span className="text-clay-400">Inn</span>
            </h3>
            <p className="text-warm-300 max-w-md leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-warm-100 uppercase tracking-wider mb-4">
              Navigate
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/houses", label: "Houses" },
                { href: "/community", label: "Community" },
                { href: "/apply", label: "Apply" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-warm-300 hover:text-warm-100 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-warm-100 uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 text-warm-300 hover:text-warm-100 transition-colors text-sm"
                >
                  <Mail size={16} />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-2 text-warm-300 hover:text-warm-100 transition-colors text-sm"
                >
                  <Phone size={16} />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-warm-300 hover:text-warm-100 transition-colors text-sm"
                >
                  <Instagram size={16} />
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-warm-800 mt-12 pt-8 text-center">
          <p className="text-warm-400 text-sm">
            &copy; {new Date().getFullYear()} SubletInn. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
