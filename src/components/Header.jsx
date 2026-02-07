import { useEffect, useState } from "react";

const sections = ["главная", "проекты", "контакты"];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("главная");

  const handleScroll = (id) => {
    setMenuOpen(false);
    setActive(id);

    if (id === "главная") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleSpy = () => {
      const scrollBottom = window.scrollY + window.innerHeight;

      if (scrollBottom >= document.body.scrollHeight - 50) {
        setActive("контакты");
        return;
      }

      if (window.scrollY < 200) {
        setActive("главная");
        return;
      }

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const top = el.offsetTop;
        const height = el.offsetHeight;

        if (window.scrollY + 120 >= top && window.scrollY < top + height) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleSpy);
    return () => window.removeEventListener("scroll", handleSpy);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#050d1a]/50 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto py-5 px-4 sm:px-6 flex items-center justify-between">

        <button
          onClick={() => handleScroll("главная")}
          className="font-bold text-xl text-white"
        >
          Арзубек <span className="text-[#4fd1c5]">Токторов</span>
        </button>

        <button
          className="sm:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav
          className={`
            absolute sm:static top-full left-0 w-full sm:w-auto
            bg-[#050d1a]/95 sm:bg-transparent
            transition-all duration-300
            ${menuOpen ? "max-h-96 py-4" : "max-h-0 sm:max-h-none overflow-hidden sm:overflow-visible"}
          `}
        >
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 px-4 sm:px-0 text-sm uppercase tracking-wider">
            {["Главная", "Проекты", "Контакты"].map((item) => {
              const id = item.toLowerCase();
              const isActive = active === id;

              return (
                <button
                  key={item}
                  onClick={() => handleScroll(id)}
                  className={`
                    relative
                    text-white/70 hover:text-white
                    transition-colors duration-300
                    after:absolute after:left-0 after:-bottom-1
                    after:h-[2px] after:w-full
                    after:bg-[#4fd1c5]
                    after:origin-left
                    after:transition-transform after:duration-300
                    ${isActive
                      ? "after:scale-x-100 text-white"
                      : "after:scale-x-0 hover:after:scale-x-100"}
                  `}
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
