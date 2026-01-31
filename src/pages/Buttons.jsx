import React from 'react';

const Buttons = () => {
  return (
    <div className="flex flex-wrap gap-4 mt-8">
      {["React", "JavaScript", "Tailwind"].map((tech) => (
        <button
          key={tech}
          className="
            px-4 sm:px-6 py-2 sm:py-3 rounded-xl
            bg-blue-500 text-white font-medium
            shadow-lg shadow-blue-500/50
            transition-all duration-300 ease-out
            hover:bg-blue-600 hover:shadow-blue-600/80
            hover:-translate-y-1 sm:hover:-translate-y-2
            text-sm sm:text-base
            min-w-[100px] sm:min-w-[140px]
          "
        >
          {tech}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
