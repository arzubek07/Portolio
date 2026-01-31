import { useEffect, useRef, useState } from "react";

function About() {
  const [show, setShow] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        } else {
          setShow(false);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="pt-32 px-4 sm:px-6 md:px-0 mb-24">
      <div className="flex justify-center">
        <h2
          className={`
            text-4xl sm:text-5xl md:text-6xl font-semibold text-center max-w-3xl
            transition-all duration-1000 ease-out
            ${show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12 sm:-translate-x-24"}
          `}
        >
          Junior Frontend Developer
        </h2>
      </div>

      <p
        className={`
          mt-6 sm:mt-8 mx-auto text-gray-600 max-w-xl sm:max-w-2xl text-center leading-relaxed
          text-sm sm:text-base
          transition-all duration-1000 ease-out delay-200
          ${show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12 sm:-translate-x-24"}
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
