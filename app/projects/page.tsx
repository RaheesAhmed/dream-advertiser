"use client";
import { useState } from "react";
import {
  Play,
  Clock,
  Award,
  Film,
  PlayCircle,
  ChevronRight,
  Filter,
} from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";

// At the top of the file, after imports
interface Video {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  duration: string;
  awards?: string[];
  videoUrl: string;
  clientName: string;
  description: string;
}

// Update the videos array with corrected asset paths
const videos: Video[] = [
  {
    id: 1,
    title: "Show Reel - VFX & Animation",
    category: "Animation",
    thumbnail: "/images/showreel-thumb.jpg", // Updated path
    duration: "3:45",
    awards: ["Best VFX 2023"],
    videoUrl: "/videos/showreel-vfx-animation.mp4",
    clientName: "FSK Production",
    description:
      "Showcase of our best VFX and animation work from various projects.",
  },
  {
    id: 2,
    title: "Skardu Valley",
    category: "Documentary",
    thumbnail: "/images/skardu-thumb.jpg", // Updated path
    duration: "4:30",
    videoUrl: "/videos/skardu-valley-documentary.mp4",
    clientName: "Tourism Board",
    description: "A breathtaking journey through the majestic Skardu Valley.",
  },
  {
    id: 3,
    title: "Great America",
    category: "Documentary",
    thumbnail: "/images/america-thumb.jpg", // Updated path
    duration: "5:15",
    videoUrl: "/videos/great-america-documentary.mp4",
    clientName: "Travel Channel",
    description: "Exploring the diverse landscapes and culture of America.",
  },
  {
    id: 4,
    title: "Luxury Car Showcase",
    category: "Commercial",
    thumbnail: "/images/luxury-car-thumb.jpg", // Updated path
    duration: "2:30",
    awards: ["Best Automotive Ad 2023"],
    videoUrl: "/videos/tameer-wattan-ad.mp4",
    clientName: "Premium Motors",
    description: "Elegant presentation of luxury automotive excellence.",
  },
  {
    id: 5,
    title: "Budget-Friendly Vehicles",
    category: "Product",
    thumbnail: "/images/budget-car-thumb.jpg", // Updated path
    duration: "2:15",
    videoUrl: "/videos/tameer-wattan-ad.mp4",
    clientName: "AutoMart",
    description: "Showcasing affordable and reliable vehicle options.",
  },
  {
    id: 6,
    title: "Exclusive Car Design",
    category: "Product",
    thumbnail: "/images/design-car-thumb.jpg", // Updated path
    duration: "3:00",
    awards: ["Design Excellence 2023"],
    videoUrl: "/videos/tameer-wattan-ad.mp4",
    clientName: "Luxury Automotive",
    description: "Behind the scenes of revolutionary car design.",
  },
];

// Add this after your videos array
console.log(
  "Asset paths:",
  videos.map((v) => ({
    title: v.title,
    thumbnail: v.thumbnail,
    video: v.videoUrl,
  }))
);

// Update categories based on new content
const categories = ["All", "Documentary", "Commercial", "Product", "Animation"];

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const filteredVideos =
    selectedCategory === "All"
      ? videos
      : videos.filter((video) => video.category === selectedCategory);

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
                Our Work
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-['Poppins']">
              Creative Excellence in
              <span className="text-[#990408] block mt-2">Motion</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Explore our portfolio of award-winning commercials, brand videos,
              and creative content.
            </p>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full border ${
                  selectedCategory === category
                    ? "bg-[#990408] text-white border-[#990408]"
                    : "border-white/10 text-white/60 hover:border-[#990408] hover:text-[#990408]"
                } transition-all`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video) => (
              <div
                key={video.id}
                className="group relative"
                onClick={() => setSelectedVideo(video)}
              >
                <div className="absolute inset-0 bg-white/5 rounded-xl backdrop-blur-sm group-hover:-rotate-3 transition-transform duration-300" />
                <div className="relative rounded-xl border border-white/10 overflow-hidden">
                  {/* Thumbnail */}
                  <div className="relative aspect-video">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={video.id <= 3}
                      onError={() => {
                        // You can set a fallback image here
                        const img = document.querySelector(
                          `[alt="${video.title}"]`
                        ) as HTMLImageElement;
                        if (img) {
                          img.src = "/images/fallback-thumb.jpg"; // Create a fallback image
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button className="p-4 bg-[#990408] rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300">
                        <PlayCircle className="w-8 h-8 text-white" />
                      </button>
                    </div>
                    {/* Duration Badge */}
                    <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/70 rounded-full text-white/90 text-sm flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {video.duration}
                    </div>
                    {/* Awards Badge */}
                    {video.awards && (
                      <div className="absolute top-4 left-4 px-3 py-1 bg-[#990408] rounded-full text-white/90 text-sm flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        {video.awards[0]}
                      </div>
                    )}
                  </div>
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-white group-hover:text-[#990408] transition-colors">
                        {video.title}
                      </h3>
                      <span className="text-white/60 text-sm">
                        {video.category}
                      </span>
                    </div>
                    <p className="text-white/60 mb-4">{video.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-white/80 text-sm">
                        {video.clientName}
                      </span>
                      <button className="flex items-center gap-2 text-[#990408] group-hover:translate-x-2 transition-transform">
                        Watch Now
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-[#990408] text-white rounded-lg flex items-center gap-2 hover:bg-[#990408]/90 transition-all mx-auto">
              <Film className="w-5 h-5" />
              Load More Projects
            </button>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-[#17232b] rounded-xl overflow-hidden">
            <div className="aspect-video bg-black">
              <ReactPlayer
                url={selectedVideo.videoUrl}
                width="100%"
                height="100%"
                controls
                playing
                playsinline
                config={{
                  file: {
                    attributes: {
                      controlsList: "nodownload", // Disable download button
                      onContextMenu: (e: React.MouseEvent) =>
                        e.preventDefault(), // Disable right-click
                    },
                  },
                }}
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {selectedVideo.title}
              </h3>
              <p className="text-white/60">{selectedVideo.description}</p>
            </div>
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-white text-xl w-10 h-10 flex items-center justify-center"
            >
              ×<span className="sr-only">Close</span>
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
