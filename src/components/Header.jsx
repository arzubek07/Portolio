const Header = () => {
  return (
    <header className=" fixed top-0 left-0 w-full z-50 bg-[#050d1a]/50 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto  py-5 flex items-center justify-between">
        <a
          href="#home"
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
            hover:after:w-full">
          <span className="text-white">Арзубек</span>{" "}
          <span className="bg-gradient-to-r from-white to-[#4fd1c5] bg-clip-text text-transparent">
            Токторов
          </span></a>

        <nav className="flex gap-10 text-white/70 text-sm uppercase tracking-wider">
          {["Главная", "Проекты", "Контакты"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
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
                hover:after:w-full">
                {item}
            </a>))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
