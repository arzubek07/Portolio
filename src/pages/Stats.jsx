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
  return (
    <section className="w-full py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {stats.map((item) => (
          <div
            key={item.id}
            className="
              relative
              rounded-2xl
              border border-white/10
              bg-[#0a1a2f]/80
              backdrop-blur-xl
              p-8
              shadow-[0_20px_50px_rgba(79,209,197,0.15)]
              transition-all duration-300
              hover:-translate-y-2
              hover:shadow-[0_25px_60px_rgba(79,209,197,0.25)]
            "
          >
            {/* Левая часть */}
            <div>
              <div className="text-[#4fd1c5] text-2xl mb-4">
                {item.icon}
              </div>

              <div className="text-white/80 uppercase tracking-wider text-sm mb-1">
                {item.title}
              </div>

              <p className="text-white/50 text-sm">
                {item.desc}
              </p>
            </div>

            {/* Большое число справа */}
            <div className="absolute top-6 right-6 text-4xl font-bold text-white/90">
              {item.value}
            </div>

            <div className="absolute right-6 bottom-6 text-white/30">
              ↗
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
