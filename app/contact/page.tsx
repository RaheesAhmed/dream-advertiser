"use client";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { FormEvent, useState } from "react";
import Script from "next/script";

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    isPrivacyAccepted: false,
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const mailtoLink = `mailto:hariskhank885@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}
Phone: ${formData.phone}
Email: ${formData.email}

Message:
${formData.message}`
    )}`;

    window.location.href = mailtoLink;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-white/80 mb-2 text-sm">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:border-[#990408] transition-colors focus:outline-none"
            placeholder="John"
          />
        </div>
        <div>
          <label className="block text-white/80 mb-2 text-sm">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:border-[#990408] transition-colors focus:outline-none"
            placeholder="Doe"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-white/80 mb-2 text-sm">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:border-[#990408] transition-colors focus:outline-none"
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label className="block text-white/80 mb-2 text-sm">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:border-[#990408] transition-colors focus:outline-none"
            placeholder="+92 XXX XXXXXXX"
          />
        </div>
      </div>

      <div>
        <label className="block text-white/80 mb-2 text-sm">Subject</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:border-[#990408] transition-colors focus:outline-none"
          placeholder="How can we help you?"
        />
      </div>

      <div>
        <label className="block text-white/80 mb-2 text-sm">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:border-[#990408] transition-colors focus:outline-none resize-none"
          placeholder="Tell us about your project..."
        />
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="privacy"
          name="isPrivacyAccepted"
          checked={formData.isPrivacyAccepted}
          onChange={handleChange}
          required
          className="w-4 h-4 rounded border-white/10 bg-white/5 text-[#990408] focus:ring-[#990408] focus:ring-offset-0"
        />
        <label htmlFor="privacy" className="text-white/60 text-sm">
          I agree to the{" "}
          <a href="#" className="text-[#990408] hover:underline">
            Privacy Policy
          </a>
        </label>
      </div>

      <button
        type="submit"
        className="w-full p-4 bg-[#990408] text-white rounded-lg flex items-center justify-center gap-2 hover:bg-[#990408]/90 transition-all transform hover:scale-[1.02]"
      >
        <Send className="w-5 h-5" />
        Send Message
      </button>
    </form>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#17232b] relative overflow-hidden">
      <Script
        id="contact-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            mainEntity: {
              "@type": "Organization",
              name: "Dream Advertising",
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
                email: "hariskhank885@gmail.com",
                contactType: "customer service",
                availableLanguage: ["English", "Urdu"],
              },
            },
          }),
        }}
      />

      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23990408' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2V6h4V4H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Contact Section */}
      <section className="relative pt-32 pb-20 mt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#17232b] via-[#990408]/10 to-[#17232b]" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-6">
              <span className="text-white/80 text-sm font-medium">
                Get in Touch
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-['Poppins']">
              Let's Create
              <span className="text-[#990408] block mt-2">
                Something Amazing
              </span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Ready to transform your brand? We're here to help bring your
              vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-white/5 rounded-xl backdrop-blur-sm group-hover:-rotate-3 transition-transform duration-300" />
                <div className="relative p-8 rounded-xl border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-6 font-['Poppins']">
                    Contact Information
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-[#990408]/20 rounded-lg">
                        <MapPin className="w-6 h-6 text-[#990408]" />
                      </div>
                      <div>
                        <p className="text-white/80">Location</p>
                        <p className="text-white font-medium">
                          Shahzaman Colony Abbottabad, Pakistan, 22020
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-[#990408]/20 rounded-lg">
                        <Phone className="w-6 h-6 text-[#990408]" />
                      </div>
                      <div>
                        <p className="text-white/80">Phone</p>
                        <p className="text-white font-medium">0344 4000885</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-[#990408]/20 rounded-lg">
                        <Mail className="w-6 h-6 text-[#990408]" />
                      </div>
                      <div>
                        <p className="text-white/80">Email</p>
                        <p className="text-white font-medium">
                          hariskhank885@gmail.com
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-[#990408]/20 rounded-lg">
                        <Clock className="w-6 h-6 text-[#990408]" />
                      </div>
                      <div>
                        <p className="text-white/80">Working Hours</p>
                        <p className="text-white font-medium">
                          Mon - Fri: 9:00 AM - 6:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="relative group">
              <div className="absolute inset-0 bg-white/5 rounded-xl backdrop-blur-sm group-hover:-rotate-3 transition-transform duration-300" />
              <div className="relative p-8 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4 font-['Poppins']">
                  Quick Contact
                </h3>
                <a
                  href="tel:+923444000885"
                  className="block p-4 bg-[#990408]/20 rounded-lg hover:bg-[#990408]/30 transition-colors group/call"
                >
                  <Phone className="w-6 h-6 text-[#990408] mx-auto group-hover/call:scale-110 transition-transform" />
                  <span className="text-white text-sm block mt-2 text-center">
                    Call Now: +92 344 4000885
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative group mt-20">
            <div className="absolute inset-0 bg-white/5 rounded-xl backdrop-blur-sm group-hover:-rotate-3 transition-transform duration-300" />
            <div className="relative p-8 rounded-xl border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 font-['Poppins']">
                Send Us a Message
              </h3>
              <ContactForm />
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-20 relative group">
            <div className="absolute inset-0 bg-white/5 rounded-xl backdrop-blur-sm group-hover:-rotate-1 transition-transform duration-300" />
            <div className="relative p-1 rounded-xl border border-white/10 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.494246599668!2d73.2160149!3d34.1468661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38de3111111111!2sShahzaman+Colony+Abbottabad!5e0!3m2!1sen!2s!4v1635777777777!5m2!1sen!2s"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
