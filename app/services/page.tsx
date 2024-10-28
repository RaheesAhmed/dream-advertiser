// app/services/page.tsx
"use client";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Film,
  Camera,
  Megaphone,
  Palette,
  CheckCircle2,
  ArrowRight,
  PlayCircle,
} from "lucide-react";
import Script from "next/script";

export default function ServicesPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedService, setSelectedService] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      icon: <Film className="h-12 w-12" />,
      title: "Video Production",
      description:
        "Professional video production services for commercials, corporate videos, and digital content.",
      features: [
        "TV Commercial Production",
        "Corporate Video Creation",
        "Social Media Content",
        "Aerial Videography",
        "Motion Graphics",
        "Post-Production Editing",
      ],
      image: "/api/placeholder/600/400",
    },
    {
      icon: <Camera className="h-12 w-12" />,
      title: "Photography",
      description:
        "High-quality photography services for products, events, and commercial purposes.",
      features: [
        "Product Photography",
        "Event Coverage",
        "Commercial Shoots",
        "Fashion Photography",
        "Real Estate Photography",
        "Photo Retouching",
      ],
      image: "/api/placeholder/600/400",
    },
    {
      icon: <Megaphone className="h-12 w-12" />,
      title: "Digital Marketing",
      description:
        "Strategic digital marketing solutions to enhance your brand's online presence.",
      features: [
        "Social Media Marketing",
        "Content Strategy",
        "SEO Optimization",
        "Email Campaigns",
        "PPC Advertising",
        "Analytics & Reporting",
      ],
      image: "/api/placeholder/600/400",
    },
    {
      icon: <Palette className="h-12 w-12" />,
      title: "Brand Design",
      description:
        "Creative brand design services to make your business stand out in the market.",
      features: [
        "Logo Design",
        "Brand Identity",
        "Marketing Materials",
        "Packaging Design",
        "Website Design",
        "Brand Guidelines",
      ],
      image: "/api/placeholder/600/400",
    },
  ];

  return (
    <main className="min-h-screen bg-[#17232b] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23990408' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2V6h4V4H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#17232b] via-[#990408]/10 to-[#17232b]" />

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-6">
              <span className="text-white/80 text-sm font-medium">
                Our Services
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-['Poppins']">
              Comprehensive Solutions for Your
              <span className="text-[#990408] block mt-2">Brand Success</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              We offer a full range of creative services to help your business
              thrive in the digital age.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative cursor-pointer ${
                  selectedService === index ? "ring-2 ring-[#990408]" : ""
                }`}
                onClick={() => setSelectedService(index)}
              >
                <div className="absolute inset-0 bg-white/5 rounded-xl backdrop-blur-sm group-hover:-rotate-3 transition-transform duration-300" />
                <div className="relative p-8 rounded-xl border border-white/10 hover:border-[#990408]/50 transition-colors">
                  <div className="text-[#990408] mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4 font-['Poppins']">
                    {service.title}
                  </h3>
                  <p className="text-white/60 mb-6">{service.description}</p>
                  <button className="flex items-center text-[#990408] hover:text-white/90 transition-colors">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Selected Service Detail */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6 font-['Poppins']">
                  {services[selectedService].title}
                </h3>
                <p className="text-white/70 mb-8">
                  {services[selectedService].description}
                </p>
                <ul className="space-y-4">
                  {services[selectedService].features.map((feature, index) => (
                    <li key={index} className="flex items-center text-white/80">
                      <CheckCircle2 className="w-5 h-5 text-[#990408] mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex gap-4">
                  <button className="px-6 py-3 bg-[#990408] text-white rounded-lg flex items-center gap-2 hover:bg-[#990408]/90 transition-all">
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="px-6 py-3 bg-white/10 text-white rounded-lg flex items-center gap-2 hover:bg-white/20 transition-all">
                    <PlayCircle className="w-4 h-4" />
                    Watch Demo
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#990408]/20 to-transparent rounded-xl" />
                <img
                  src={services[selectedService].image}
                  alt={services[selectedService].title}
                  className="rounded-xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-20 bg-[#17232b]/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-white mb-6 font-['Poppins']">
              Our Process
            </h2>
            <p className="text-white/60">
              We follow a structured approach to ensure the best results for
              your project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Discovery",
                desc: "Understanding your needs",
              },
              {
                number: "02",
                title: "Strategy",
                desc: "Planning the approach",
              },
              {
                number: "03",
                title: "Creation",
                desc: "Bringing ideas to life",
              },
              {
                number: "04",
                title: "Delivery",
                desc: "Launching your success",
              },
            ].map((step, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-white/5 rounded-xl backdrop-blur-sm group-hover:-rotate-3 transition-transform duration-300" />
                <div className="relative p-8 rounded-xl border border-white/10">
                  <div className="text-4xl font-bold text-[#990408] mb-4 font-['Poppins']">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-white/60">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative overflow-hidden rounded-2xl bg-[#990408]/20 backdrop-blur-sm p-12 border border-[#990408]/30">
            <div className="absolute inset-0 bg-gradient-to-r from-[#990408]/30 to-transparent" />
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl font-bold text-white mb-6 font-['Poppins']">
                Ready to Transform Your Brand?
              </h2>
              <p className="text-white/80 mb-8">
                Let's create something amazing together. Contact us today to get
                started on your project.
              </p>
              <button className="px-8 py-4 bg-[#990408] text-white rounded-lg flex items-center gap-2 hover:bg-[#990408]/90 transition-all">
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <Script
        id="services-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: [
              {
                "@type": "Service",
                position: 1,
                name: "Video Production",
                description:
                  "Professional TV commercials and digital video content",
                provider: {
                  "@type": "Organization",
                  name: "Dream Advertising",
                },
              },
              {
                "@type": "Service",
                position: 2,
                name: "Digital Marketing",
                description:
                  "Strategic online advertising and social media campaigns",
                provider: {
                  "@type": "Organization",
                  name: "Dream Advertising",
                },
              },
              {
                "@type": "Service",
                position: 3,
                name: "Brand Strategy",
                description: "Comprehensive brand development and positioning",
                provider: {
                  "@type": "Organization",
                  name: "Dream Advertising",
                },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
