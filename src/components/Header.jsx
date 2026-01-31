import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id) => {
    setMenuOpen(false); // закрываем меню на мобильных при клике

    if (id === "главная") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (id === "контакты") {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
      return;
    }

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#050d1a]/50 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto py-5 px-4 sm:px-6 flex items-center justify-between">

        {/* Логотип */}
        <button
          onClick={() => handleScroll("главная")}
          className="
            relative
            font-bold text-xl tracking-wide
            transition-all duration-300 ease-out
            hover:-translate-y-1
            after:content-['']
            after:absolute
            after:left-0
            after:-bottom-1
            after:h-[1px]
            after:w-0
            after:bg-white
            after:transition-all
            after:duration-300
            hover:after:w-full
          "
        >
          <span className="text-white">Арзубек</span>{" "}
          <span className="bg-gradient-to-r from-white to-[#4fd1c5] bg-clip-text text-transparent">
            Токторов
          </span>
        </button>

        {/* Кнопка меню для мобильных */}
        <button
          className="sm:hidden text-white p-2 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Навигация */}
        <nav
          className={`
            absolute sm:static top-full left-0 w-full sm:w-auto bg-[#050d1a]/95 sm:bg-transparent backdrop-blur-xl sm:backdrop-blur-0 border-b border-white/10 sm:border-0
            transition-all duration-300 ease-out
            ${menuOpen ? "max-h-96 py-4" : "max-h-0 overflow-hidden"}
          `}
        >
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 px-4 sm:px-0 text-white/70 text-sm uppercase tracking-wider">
            {["Главная", "Проекты", "Контакты"].map((item) => {
              const id = item.toLowerCase();
              return (
                <button
                  key={item}
                  onClick={() => handleScroll(id)}
                  className="
                    relative
                    transition-all duration-300 ease-out
                    hover:-translate-y-1
                    hover:text-white
                    after:content-['']
                    after:absolute
                    after:left-0
                    after:-bottom-1
                    after:h-[1px]
                    after:w-0
                    after:bg-white
                    after:transition-all
                    after:duration-300
                    hover:after:w-full
                  "
                >
                  {item}
                </button>
              );
            })}
          </div>
        </nav>

      </div>
    </header>
  );
};

export default Header;
