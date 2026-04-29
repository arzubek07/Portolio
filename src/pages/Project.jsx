import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Cinemas from "../assets/cinemas.png";
import KNUKI from "../assets/knuki.png";
import JavaScript from "../assets/JavaScript.png"
import CSS from "../assets/css.png" 
import React from "../assets/react.png" 
import Tailwind from "../assets/tailwind.png" 
import Redux from "../assets/redux.png" 
import HTML from "../assets/html.png" 
import Bootstrap from "../assets/bootstrap.png" 
import Figma from "../assets/fugma.png" 

const projects = [
  {
    name: "Cinemas",
    description: "Кинотеатр, бронирование сеансов",
    link: Cinemas,
    url: "https://sinemas.vercel.app/",
  },
  {
    name: "КУМИУ-университет",
    description: "Сайт университета",
    link: KNUKI,
    url: "https://www.knuki.kg/",
  },
];

const skills = [
  { name: "JavaScript", icon: JavaScript },
  { name: "React", icon: React },
  { name: "Tailwind", icon: Tailwind },
  { name: "Redux", icon: Redux },
  { name: "CSS", icon: CSS },
  { name: "HTML", icon: HTML },
  { name: "Bootstrap", icon: Bootstrap },
  { name: "Figma", icon: Figma },
];

export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState("projects");
  const [show, setShow] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShow(entry.isIntersecting),
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const tabClasses = (tab) =>
    `flex-1 py-4 rounded-xl cursor-pointer text-center font-medium transition-all
     backdrop-blur-xl
     ${
       activeTab === tab
         ? "bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 border border-cyan-400 text-white shadow-[0_0_40px_rgba(79,209,197,0.25)]"
         : "bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10"
     }`;

  return (
    <section
      id="проекты"
      ref={sectionRef}
      className="min-h-screen py-20 px-4 sm:px-6 md:px-8 text-white"
    >
      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-16"
      >
        <div className={tabClasses("projects")} onClick={() => setActiveTab("projects")}>
          Projects
        </div>
        <div className={tabClasses("certificates")} onClick={() => setActiveTab("certificates")}>
          Certificates
        </div>
        <div className={tabClasses("skills")} onClick={() => setActiveTab("skills")}>
          Tech Stack
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto">
        {/* Projects */}
        {activeTab === "projects" && (
          <motion.div
            key={`projects-${show}`}
            initial={{ opacity: 0, y: 40 }}
            animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10"
          >
            {projects.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={show ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 160, damping: 18, delay: i * 0.15 }}
                whileHover={{ y: -12, boxShadow: "0 20px 60px rgba(79,209,197,0.25)" }}
                className="relative rounded-2xl p-4 sm:p-6 md:p-8 border border-white/10 backdrop-blur-xl bg-gradient-to-br from-indigo-500/10 to-cyan-500/10"
              >
                <div className="rounded-xl overflow-hidden mb-4 sm:mb-5 border border-white/10">
                  <img src={p.link} alt={p.name} className="w-full h-auto" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-xl font-semibold mb-2">{p.name}</h3>
                <p className="text-white/60 text-sm sm:text-base mb-4 sm:mb-6">{p.description}</p>
                <div className="flex justify-between items-center">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 transition"
                  >
                    Live Demo ↗
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Certificates */}
        {activeTab === "certificates" && (
          <motion.div
            key={`certificates-${show}`}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={show ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 120, damping: 16 }}
            className="max-w-md mx-auto rounded-2xl bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 border border-white/10 backdrop-blur-xl p-6 sm:p-10 text-center shadow-[0_20px_60px_rgba(79,209,197,0.15)]"
          >
            Сертификаты отсутствуют
          </motion.div>
        )}

        {/* Skills */}
        {activeTab === "skills" && (
  <motion.div
    key={`skills-${show}`}
    initial="hidden"
    animate={show ? "show" : "hidden"}
    variants={{
      hidden: {},
      show: { transition: { staggerChildren: 0.12 } },
    }}
    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-10"
  >
    {skills.map((s, i) => (
      <motion.div
        key={i}
        variants={{
          hidden: { opacity: 0, y: 40, scale: 0.9 },
          show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: "spring", stiffness: 160, damping: 18, delay: i * 0.08 },
          },
        }}
        whileHover={{ y: -10, scale: 1.05, boxShadow: "0 20px 50px rgba(79,209,197,0.25)" }}
        className="rounded-2xl bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 border border-white/10 backdrop-blur-xl p-4 sm:p-6 md:p-8 text-center flex flex-col h-full"
      >
        <img
          className="w-24 h-24 mx-auto mb-4 object-contain"
          src={s.icon}
          alt=""
        />

        <div className="text-sm sm:text-base md:text-lg font-medium mt-auto">
          {s.name}
        </div>
      </motion.div>
    ))}
  </motion.div>
)}
      </div>
    </section>
  );
}
