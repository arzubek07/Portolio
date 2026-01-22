import { useState } from "react";
import { motion } from "framer-motion";
import Cinemas from "../assets/cinemas.png";

const projects = [
  { name: "Cinemas", description: "Бронирование кино", link: Cinemas },
];

const skills = [
  { name: "JavaScript", icon: "🟨" },
  { name: "React", icon: "⚛️" },
  { name: "Tailwind", icon: "🎨" },
  { name: "Redux", icon: "🔄" },
  { name: "CSS", icon: "💅" },
  { name: "HTML", icon: "📄" },
  { name: "Bootstrap", icon: "🅱️" },
  { name: "Figma", icon: "🎨" },
];

export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState("projects");

  const tabClasses = (tab) =>
    `flex-1 py-4 rounded-xl cursor-pointer transition-all font-medium text-center backdrop-blur-xl
     ${
       activeTab === tab
         ? "bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 border border-cyan-400 text-white shadow-[0_0_40px_rgba(79,209,197,0.25)]"
         : "bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10"
     }`;

  return (
    <section className="min-h-screen text-white py-20 px-6">
      {/* Tabs */}
      <div className="max-w-5xl mx-auto grid grid-cols-3 gap-6 mb-16">
        <div className={tabClasses("projects")} onClick={() => setActiveTab("projects")}>
          Projects
        </div>
        <div className={tabClasses("certificates")} onClick={() => setActiveTab("certificates")}>
          Certificates
        </div>
        <div className={tabClasses("skills")} onClick={() => setActiveTab("skills")}>
          Tech Stack
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto">
        {/* PROJECTS */}
        {activeTab === "projects" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {projects.map((p, i) => (
              <motion.div
                key={i}
                whileHover={{
                  y: -12,
                  boxShadow: "0 20px 60px rgba(79,209,197,0.25)",
                }}
                transition={{ type: "spring", stiffness: 180, damping: 18 }}
                className="
                  relative
                  rounded-2xl
                  bg-gradient-to-br from-indigo-500/10 to-cyan-500/10
                  border border-white/10
                  backdrop-blur-xl
                  p-6
                "
              >
                <div className="rounded-xl overflow-hidden mb-5 border border-white/10">
                  <img src={p.link} alt="" />
                </div>

                <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
                <p className="text-white/60 text-sm mb-6">{p.description}</p>

                <div className="flex justify-between items-center">
                  <a
                    href="#"
                    className="text-cyan-400 hover:text-cyan-300 transition"
                  >
                    Live Demo ↗
                  </a>
                  <button className="bg-white/10 hover:bg-white/20 transition px-4 py-2 rounded-lg">
                    Details →
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* CERTIFICATES */}
        {activeTab === "certificates" && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 16 }}
            className="
              max-w-md mx-auto
              rounded-2xl
              bg-gradient-to-br from-indigo-500/10 to-cyan-500/10
              border border-white/10
              backdrop-blur-xl
              p-10
              text-center
              shadow-[0_20px_60px_rgba(79,209,197,0.15)]
            "
          >
            Сертификаты отсутствуют
          </motion.div>
        )}

        {/* SKILLS */}
        {activeTab === "skills" && (
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.12 },
              },
            }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10"
          >
            {skills.map((s, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 40,
                    scale: 0.9,
                  },
                  show: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 160,
                      damping: 18,
                    },
                  },
                }}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                  boxShadow: "0 20px 50px rgba(79,209,197,0.25)",
                }}
                className="
                  rounded-2xl
                  bg-gradient-to-br from-indigo-500/10 to-cyan-500/10
                  border border-white/10
                  backdrop-blur-xl
                  p-8
                  text-center
                "
              >
                <div className="text-5xl mb-4">{s.icon}</div>
                <div className="text-lg font-medium">{s.name}</div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
