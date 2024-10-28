"use client";

import { Award, Users, Smile, Medal } from "lucide-react";

export function AboutContent() {
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
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-6">
              <span className="text-white/80 text-sm font-medium">
                Our Story
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-['Poppins']">
              We Create
              <span className="text-[#990408] block mt-2">
                Impactful Brands
              </span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              At Dream Advertising, we believe in the power of creative
              excellence to transform businesses and create lasting impressions.
            </p>
          </div>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div className="relative group">
              <div className="absolute inset-0 bg-white/5 rounded-xl backdrop-blur-sm group-hover:-rotate-3 transition-transform duration-300" />
              <div className="relative p-8 rounded-xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4 font-['Poppins']">
                  Our Vision
                </h3>
                <p className="text-white/60">
                  To be the leading creative force in advertising, setting new
                  standards of excellence and innovation in the industry.
                </p>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-white/5 rounded-xl backdrop-blur-sm group-hover:-rotate-3 transition-transform duration-300" />
              <div className="relative p-8 rounded-xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4 font-['Poppins']">
                  Our Mission
                </h3>
                <p className="text-white/60">
                  To deliver exceptional creative solutions that help our
                  clients succeed in an ever-evolving digital landscape.
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                number: "1000+",
                label: "Clients Served",
              },
              {
                icon: <Award className="w-8 h-8" />,
                number: "150+",
                label: "Awards Won",
              },
              {
                icon: <Smile className="w-8 h-8" />,
                number: "98%",
                label: "Client Satisfaction",
              },
              {
                icon: <Medal className="w-8 h-8" />,
                number: "10+",
                label: "Years Experience",
              },
            ].map((stat, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-white/5 rounded-xl backdrop-blur-sm group-hover:-rotate-3 transition-transform duration-300" />
                <div className="relative p-6 text-center rounded-xl border border-white/10">
                  <div className="text-[#990408] mb-4 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Team Section */}
          <div className="relative mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6 font-['Poppins']">
                Our Team
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                Meet the creative minds behind Dream Advertising
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((member, index) => (
                <div key={index} className="relative group">
                  <div className="absolute inset-0 bg-white/5 rounded-xl backdrop-blur-sm group-hover:-rotate-3 transition-transform duration-300" />
                  <div className="relative rounded-xl border border-white/10 overflow-hidden">
                    <img
                      src={`/api/placeholder/400/500`}
                      alt="Team Member"
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">
                        Team Member {index + 1}
                      </h3>
                      <p className="text-[#990408] mb-4">Creative Director</p>
                      <p className="text-white/60">
                        Passionate about creating impactful digital experiences.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
