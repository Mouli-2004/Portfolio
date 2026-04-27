"use client";

import { useState, useEffect, useRef } from "react";
import { UserRound } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
  const aboutContentRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection observer for scroll-triggered reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative bg-t-bg w-full py-16 px-4 md:px-8 lg:px-2"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--mc-stone) 1px, transparent 1px), linear-gradient(90deg, var(--mc-stone) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header - Crafting Table Style */}
        <div
          className={`mb-16 relative overflow-hidden p-8 md:p-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          style={{
            background: "var(--t-surface)",
            border: "3px solid var(--t-border)",
            boxShadow:
              "inset 2px 2px 0 rgba(255,255,255,0.1), inset -2px -2px 0 rgba(0,0,0,0.25), 4px 4px 0 rgba(0,0,0,0.3)",
          }}
        >
          {/* Top accent bar */}
          <div
            className="absolute top-0 left-0 w-full h-1"
            style={{ background: "var(--mc-grass)" }}
          />

          {/* Corner decorations */}
          <div className="absolute top-2 left-2 w-3 h-3 bg-mc-grass opacity-60" />
          <div className="absolute top-2 right-2 w-3 h-3 bg-mc-grass opacity-60" />
          <div className="absolute bottom-2 left-2 w-3 h-3 bg-mc-diamond opacity-60" />
          <div className="absolute bottom-2 right-2 w-3 h-3 bg-mc-diamond opacity-60" />

          <h2
            className="text-4xl md:text-6xl font-black mb-4 text-mc-grass uppercase tracking-wide"
            style={{
              textShadow:
                "2px 2px 0 rgba(0,0,0,0.5), 4px 4px 0 rgba(0,0,0,0.15)",
            }}
          >
            About Me
          </h2>
        </div>

        {/* Content - Inventory Panel */}
        <div
          className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <div
            style={{
              background: "var(--t-surface)",
              border: "3px solid var(--t-border)",
              boxShadow:
                "inset 2px 2px 0 rgba(255,255,255,0.08), inset -2px -2px 0 rgba(0,0,0,0.25), 4px 4px 0 rgba(0,0,0,0.3)",
            }}
          >
            {/* Title bar */}
            <div
              className="px-6 py-3 flex items-center gap-3"
              style={{
                background: "var(--t-bg2)",
                borderBottom: "2px solid var(--t-border)",
              }}
            >
              <div className="w-2 h-2 bg-mc-redstone" />
              <div className="w-2 h-2 bg-mc-gold" />
              <div className="w-2 h-2 bg-mc-grass" />
              <span className="text-t-muted text-sm ml-2 uppercase tracking-wider font-medium">
                Player Info
              </span>
            </div>

            <div className="p-6">
              <div ref={aboutContentRef} className="space-y-6">
                <div className="space-y-4">
                  <p className="text-t-text2 leading-relaxed">
                    Hi, I’m Mouli, an aspiring AI/ML Engineer with a strong interest in building intelligent systems that solve real-world problems. I enjoy working with data, developing machine learning models, and exploring how AI can improve decision-making in areas like healthcare and business.
                    I’m currently focused on learning and applying concepts in machine learning, deep learning, and full-stack development, aiming to build end-to-end AI-powered applications.
                  </p>

                  {/* Stats grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                    <div
                      className="p-4"
                      style={{
                        background: "var(--t-bg2)",
                        border: "2px solid var(--t-border)",
                        borderLeft: "4px solid var(--mc-grass)",
                        boxShadow:
                          "inset 1px 1px 0 rgba(255,255,255,0.05), inset -1px -1px 0 rgba(0,0,0,0.2)",
                      }}
                    >
                      <h4 className="text-t-text font-bold mb-2 flex items-center gap-2">
                        <span className="text-mc-gold">🎓</span>
                        Education
                      </h4>
                      <p className="text-t-text2">
                        Bachelor of Computer Applications
                      </p>
                      <p className="text-t-muted text-sm">
                        Presidency University, 2026
                      </p>
                    </div>
                    <div
                      className="p-4"
                      style={{
                        background: "var(--t-bg2)",
                        border: "2px solid var(--t-border)",
                        borderLeft: "4px solid var(--mc-diamond)",
                        boxShadow:
                          "inset 1px 1px 0 rgba(255,255,255,0.05), inset -1px -1px 0 rgba(0,0,0,0.2)",
                      }}
                    >
                      <h4 className="text-t-text font-bold mb-2 flex items-center gap-2">
                        <span className="text-mc-diamond">📍</span>
                        Location
                      </h4>
                      <p className="text-t-text2"> Bengaluru, Karnataka, India</p>
                      <p className="text-t-muted text-sm">
                        Available for remote work
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t-2 border-t-border">
                  <Link href="/contact" className="w-full sm:w-auto">
                    <Button
                      className="w-full cursor-pointer text-white font-medium"
                      style={{
                        background: "var(--mc-diamond)",
                        border: "2px solid rgba(0,0,0,0.2)",
                        boxShadow:
                          "inset 1px 1px 0 rgba(255,255,255,0.2), inset -1px -1px 0 rgba(0,0,0,0.3), 2px 2px 0 rgba(0,0,0,0.3)",
                        borderRadius: "0",
                      }}
                    >
                      Contact
                      <UserRound className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
