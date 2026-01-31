import React from 'react';
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

const Icons = () => {
  const icons = [
    {
      href: "https://www.linkedin.com/in/arzubek-toktorov",
      icon: <FaLinkedinIn />,
    },
    {
      href: "https://github.com/arzubek07",
      icon: <FaGithub />,
    },
    {
      href: "https://www.instagram.com/arzubek.dev",
      icon: <FaInstagram />,
    },
  ];

  return (
    <div className="flex flex-wrap gap-4 mt-10"> {/* Убрали justify-center */}
      {icons.map((item, idx) => (
        <a
          key={idx}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          className="
            w-10 h-10 sm:w-12 sm:h-12
            flex items-center justify-center
            rounded-xl
            bg-gray-900 text-blue-400
            shadow-lg shadow-blue-500/40
            transition-all duration-300 ease-out
            hover:bg-gray-800 hover:shadow-blue-500/70
            hover:-translate-y-0.5 sm:hover:-translate-y-1
          "
        >
          {React.cloneElement(item.icon, { size: 18, className: "sm:text-[20px]" })}
        </a>
      ))}
    </div>
  );
};

export default Icons;
