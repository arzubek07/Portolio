import { useEffect, useState } from "react";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

function About() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <section className="pt-32 px-6 mb-24">
      {/* Заголовок */}
      <div className="flex justify-center">
        <h2
          className={`
            text-5xl md:text-6xl font-semibold text-center max-w-3xl
            transition-all duration-1000 ease-out
            ${show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-24"}
          `}
        >
          Junior Frontend Developer
        </h2>
      </div>

      {/* Описание */}
      <p
        className={`
          mt-8 mx-auto text-gray-600 max-w-2xl text-center leading-relaxed
          transition-all duration-1000 ease-out delay-200
          ${show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-24"}
        `}
      >
        Я junior frontend-разработчик. Проходил стажировку в компании EduPro
        под менторством Бектена Омурбаева — специалиста с опытом работы в Apple и Gap.
        Получил практический опыт разработки современных интерфейсов
        с использованием React и Tailwind CSS.
      </p>
    </section>
  );
}

export default About;
