"use client";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ArrowRight,
  Play,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  CheckCircle,
  Star,
  Award,
  Monitor,
  Camera,
  PenTool,
  Zap,
} from "lucide-react";
import Link from "next/link";
import Script from "next/script";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const features = [
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "TV Commercials",
      description:
        "Cinematic quality ads that capture attention and drive results",
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Visual Content",
      description: "Stunning photography and videography that tells your story",
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: "Creative Design",
      description: "Eye-catching visuals that make your brand unforgettable",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Digital Strategy",
      description: "Data-driven campaigns that deliver measurable results",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "Tech Innovators",
      content:
        "Dream Advertising transformed our brand presence. Their creative approach and attention to detail exceeded our expectations.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "CEO",
      company: "Global Solutions",
      content:
        "The team's professionalism and creative excellence have made them our go-to agency for all marketing needs.",
      rating: 5,
    },
    {
      name: "Emma Williams",
      role: "Brand Manager",
      company: "Retail Giants",
      content:
        "Outstanding service and remarkable results. They truly understand how to elevate a brand.",
      rating: 5,
    },
  ];

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Dream Advertising",
            url: "https://dreamadvertising.com",
            logo: "https://dreamadvertising.com/images/logo.png",
            description:
              "Professional advertising agency specializing in TV commercials and digital marketing.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Shahzaman Colony",
              addressLocality: "Abbottabad",
              addressRegion: "KPK",
              postalCode: "22020",
              addressCountry: "Pakistan",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+92-344-4000885",
              contactType: "customer service",
            },
            sameAs: [
              "https://facebook.com/dreamadvertising",
              "https://instagram.com/dreamadvertising",
              "https://twitter.com/dreamadvertising",
            ],
          }),
        }}
      />
      <main className="min-h-screen bg-[#17232b] relative overflow-hidden">
        {/* Background Patterns */}
        <div className="fixed inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23990408' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2V6h4V4H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-20">
          <div className="absolute inset-0 bg-gradient-to-br from-[#17232b] via-[#990408]/10 to-[#17232b]" />

          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#990408]/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#990408]/10 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 py-20">
            <div className="space-y-8 max-w-4xl">
              {/* Pill Label */}
              <div className="inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                <span className="text-white/80 text-sm font-medium">
                  Professional Advertising Agency
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight font-['Poppins']">
                Elevate Your Brand Through
                <span className="text-[#990408] block mt-2">
                  Creative Excellence
                </span>
              </h1>

              {/* Description */}
              <p className="text-xl text-white/80 max-w-2xl leading-relaxed font-['Inter']">
                We specialize in delivering professional quality TV and Internet
                oriented commercial services that transform your brand's
                presence and create lasting impact.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="px-8 py-4 bg-[#990408] text-white rounded-lg flex items-center gap-2 hover:bg-[#990408]/90 transition-all transform hover:scale-105 font-semibold">
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </button>

                <button className="px-8 py-4 bg-white/5 backdrop-blur-sm text-white rounded-lg flex items-center gap-2 hover:bg-white/10 transition-all border border-white/10">
                  <Play className="w-5 h-5" fill="white" />
                  View Our Work
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl">
              {[
                { number: "10+", label: "Years Experience" },
                { number: "200+", label: "Projects Completed" },
                { number: "50+", label: "Active Clients" },
                { number: "95%", label: "Client Satisfaction" },
              ].map((stat, index) => (
                <div key={index} className="relative">
                  <div className="absolute inset-0 bg-white/5 rounded-lg backdrop-blur-sm -rotate-3" />
                  <div className="relative p-6 text-center">
                    <div className="text-4xl font-bold text-white mb-2 font-['Poppins']">
                      {stat.number}
                    </div>
                    <div className="text-white/60 text-sm font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="relative py-20 bg-[#17232b]/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Poppins']">
                Our Services
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto text-lg">
                Comprehensive advertising solutions tailored to elevate your
                brand
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Video Production",
                  description:
                    "Professional TV commercials and digital video content",
                  icon: "📹",
                },
                {
                  title: "Digital Marketing",
                  description:
                    "Strategic online advertising and social media campaigns",
                  icon: "💻",
                },
                {
                  title: "Brand Strategy",
                  description:
                    "Comprehensive brand development and positioning",
                  icon: "🎯",
                },
              ].map((service, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-white/5 rounded-xl backdrop-blur-sm group-hover:-rotate-3 transition-transform duration-300" />
                  <div className="relative p-8 rounded-xl border border-white/10 hover:border-[#990408]/50 transition-colors">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3 font-['Poppins']">
                      {service.title}
                    </h3>
                    <p className="text-white/60">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Why Choose Us Section */}
        <section className="relative py-20 bg-[#17232b]/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-[#990408] text-sm font-semibold uppercase tracking-wider">
                Why Choose Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6 font-['Poppins']">
                Creating Impact Through
                <span className="text-[#990408]"> Innovation</span>
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto text-lg">
                We blend creativity with strategy to deliver exceptional results
                that help your brand stand out in today's competitive landscape.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              {features.map((feature, index) => (
                <div key={index} className="relative group">
                  <div className="absolute inset-0 bg-white/5 rounded-xl backdrop-blur-sm group-hover:-rotate-3 transition-transform duration-300" />
                  <div className="relative p-8 rounded-xl border border-white/10">
                    <div className="text-[#990408] mb-6">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-4 font-['Poppins']">
                      {feature.title}
                    </h3>
                    <p className="text-white/60">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="relative py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-[#990408] text-sm font-semibold uppercase tracking-wider">
                Our Process
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6 font-['Poppins']">
                How We Bring Your
                <span className="text-[#990408]"> Vision to Life</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  number: "01",
                  title: "Discovery",
                  desc: "Understanding your goals and vision",
                },
                {
                  number: "02",
                  title: "Strategy",
                  desc: "Crafting the perfect approach",
                },
                {
                  number: "03",
                  title: "Creation",
                  desc: "Bringing ideas to reality",
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

        {/* Testimonials Section */}
        <section className="relative py-20 bg-[#17232b]/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-[#990408] text-sm font-semibold uppercase tracking-wider">
                Testimonials
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6 font-['Poppins']">
                What Our Clients
                <span className="text-[#990408]"> Say About Us</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="relative group">
                  <div className="absolute inset-0 bg-white/5 rounded-xl backdrop-blur-sm group-hover:-rotate-3 transition-transform duration-300" />
                  <div className="relative p-8 rounded-xl border border-white/10">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-[#990408] fill-[#990408]"
                        />
                      ))}
                    </div>
                    <p className="text-white/80 mb-6 italic">
                      "{testimonial.content}"
                    </p>
                    <div className="border-t border-white/10 pt-4">
                      <p className="text-white font-semibold">
                        {testimonial.name}
                      </p>
                      <p className="text-white/60 text-sm">
                        {testimonial.role}
                      </p>
                      <p className="text-[#990408] text-sm">
                        {testimonial.company}
                      </p>
                    </div>
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
                  Let's create something extraordinary together. Contact us
                  today to start your journey towards creative excellence.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#990408] text-white rounded-lg hover:bg-[#990408]/90 transition-all"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
