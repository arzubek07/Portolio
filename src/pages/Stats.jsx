import { useEffect, useRef, useState } from "react";

const stats = [
  {
    id: 1,
    title: "Проекты",
    value: 1,
    desc: "Реальные pet-проекты",
    icon: "< />",
  },
  {
    id: 2,
    title: "Сертификаты",
    value: 0,
    desc: "Пока в процессе",
    icon: "🏅",
  },
  {
    id: 3,
    title: "Навыки",
    value: 8,
    desc: "Основной стек",
    icon: "⚙️",
  },
];

const Stats = () => {
  const [show, setShow] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShow(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {stats.map((item, idx) => (
          <div
            key={item.id}
            className={`
              relative
              rounded-2xl
              border border-white/10
              bg-[#0a1a2f]/80
              backdrop-blur-xl
              p-8
              shadow-[0_20px_50px_rgba(79,209,197,0.15)]
              transition-all duration-[500ms] ease-out
              hover:-translate-y-2
              hover:shadow-[0_25px_60px_rgba(79,209,197,0.25)]
              ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
            `}
            style={{ transitionDelay: `${idx * 100}ms` }}
          >
            <div>
              <div
                className={`
                  text-[#4fd1c5] text-2xl mb-4
                  transition-all duration-[500ms] ease-out
                  ${show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}
                `}
                style={{ transitionDelay: `${idx * 100 + 50}ms` }}
              >
                {item.icon}
              </div>

              <div
                className={`
                  text-white/80 uppercase tracking-wider text-sm mb-1
                  transition-all duration-[500ms] ease-out
                  ${show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}
                `}
                style={{ transitionDelay: `${idx * 100 + 100}ms` }}
              >
                {item.title}
              </div>

              <p
                className={`
                  text-white/50 text-sm
                  transition-all duration-[500ms] ease-out
                  ${show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}
                `}
                style={{ transitionDelay: `${idx * 100 + 150}ms` }}
              >
                {item.desc}
              </p>
            </div>

            <div
              className={`
                absolute top-6 right-6 text-4xl font-bold text-white/90
                transition-all duration-[500ms] ease-out
                ${show ? "opacity-100 scale-100" : "opacity-0 scale-75"}
              `}
              style={{ transitionDelay: `${idx * 100 + 200}ms` }}
            >
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
