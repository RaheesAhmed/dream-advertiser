"use client";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  // Quick Links data
  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact Us", path: "/contact" },
  ];

  // Services data
  const services = [
    { name: "Video Production", path: "/services#video" },
    { name: "Photography", path: "/services#photography" },
    { name: "Digital Marketing", path: "/services#marketing" },
    { name: "Brand Design", path: "/services#design" },
  ];

  // Social links data
  const socialLinks = [
    {
      icon: <Facebook className="w-5 h-5 text-white" />,
      url: "https://facebook.com/dreamadvertising",
    },
    {
      icon: <Instagram className="w-5 h-5 text-white" />,
      url: "https://instagram.com/dreamadvertising",
    },
    {
      icon: <Twitter className="w-5 h-5 text-white" />,
      url: "https://twitter.com/dreamadvertising",
    },
    {
      icon: <Linkedin className="w-5 h-5 text-white" />,
      url: "https://linkedin.com/company/dreamadvertising",
    },
  ];

  return (
    <footer className="relative bg-[#17232b] border-t border-white/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23990408' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div className="space-y-6">
              <Link href="/" className="inline-block">
                <h2 className="text-3xl font-bold text-white font-['Poppins']">
                  Dream <span className="text-[#990408]">Advertising</span>
                </h2>
              </Link>
              <p className="text-white/60">
                Professional quality TV and Internet oriented commercial
                services.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/5 rounded-lg hover:bg-[#990408]/20 transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-6 text-lg">
                Quick Links
              </h3>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.path}
                      className="text-white/60 hover:text-[#990408] transition-colors flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold mb-6 text-lg">
                Services
              </h3>
              <ul className="space-y-4">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.path}
                      className="text-white/60 hover:text-[#990408] transition-colors flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-semibold mb-6 text-lg">
                Contact Info
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-white/60">
                  <MapPin className="w-5 h-5 text-[#990408]" />
                  <Link
                    href="/contact"
                    className="hover:text-[#990408] transition-colors"
                  >
                    Shahzaman Colony Abbottabad, Pakistan
                  </Link>
                </li>
                <li className="flex items-center gap-3 text-white/60">
                  <Phone className="w-5 h-5 text-[#990408]" />
                  <Link
                    href="tel:+923444000885"
                    className="hover:text-[#990408] transition-colors"
                  >
                    0344 4000885
                  </Link>
                </li>
                <li className="flex items-center gap-3 text-white/60">
                  <Mail className="w-5 h-5 text-[#990408]" />
                  <Link
                    href="mailto:hariskhank885@gmail.com"
                    className="hover:text-[#990408] transition-colors"
                  >
                    hariskhank885@gmail.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/60">
                © {new Date().getFullYear()} Dream Advertising. All rights
                reserved.
              </p>
              <div className="flex gap-6">
                <Link
                  href="/privacy-policy"
                  className="text-white/60 hover:text-[#990408] transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-of-service"
                  className="text-white/60 hover:text-[#990408] transition-colors"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
