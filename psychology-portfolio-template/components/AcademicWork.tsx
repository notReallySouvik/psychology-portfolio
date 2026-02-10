"use client";

import { useEffect, useRef } from "react";

import Reveal from "@/components/Reveal";

import { motion } from "framer-motion";

export default function AcademicWork() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const items = [
    {
      title: "Cognitive Behavioral Study",
      desc: "Placeholder description discussing focus, methodology, and key psychological insights explored in this work.",
      icon: "🧠",
      bg: "academic-bg-1",
    },
    {
      title: "Neuropsychology Research",
      desc: "Placeholder summary describing research questions, theoretical background, and analytical approach.",
      icon: "📊",
      bg: "academic-bg-2",
    },
    {
      title: "Independent Literature Review",
      desc: "Placeholder description outlining scope, sources reviewed, and conceptual synthesis.",
      icon: "📄",
      bg: "academic-bg-3",
    },
    {
      title: "Behavioral Data Analysis",
      desc: "Placeholder description about statistical modeling and behavioral pattern extraction.",
      icon: "📈",
      bg: "academic-bg-4",
    },
    {
      title: "Cognitive Assessment Design",
      desc: "Placeholder description about experimental design and assessment validation.",
      icon: "🧪",
      bg: "academic-bg-5",
    },
    {
      title: "Clinical Case Review",
      desc: "Placeholder summary describing anonymized clinical observations and reflections.",
      icon: "🩺",
      bg: "academic-bg-6",
    },
  ];

  // duplicate items for looping
  const loopItems = [...items, ...items, ...items];

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    // start in the middle set
    el.scrollLeft = el.scrollWidth / 3;
  }, []);

  const handleScroll = () => {
    const el = carouselRef.current;
    if (!el) return;

    const third = el.scrollWidth / 3;

    if (el.scrollLeft < third * 0.5) {
      el.scrollLeft += third;
    } else if (el.scrollLeft > third * 1.5) {
      el.scrollLeft -= third;
    }
  };

  return (
    <Reveal>
      <section className="academic">
        <div className="academic-inner">
          <h2>Academic Work</h2>

          <motion.div
            className="academic-carousel"
            ref={carouselRef}
            onScroll={handleScroll}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
          >
            {loopItems.map((item, i) => (
              <motion.div
                key={i}
                className={`academic-card ${item.bg}`}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >

                <div className="academic-icon">{item.icon}</div>

                <div className="academic-overlay">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Reveal>
  );
}
