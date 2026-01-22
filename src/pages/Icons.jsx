import React from 'react'
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";


const Icons = () => {
  return (
    <div>
        <div className="flex gap-4 mt-10">
  <a
    href="#"
    className="w-12 h-12 flex items-center justify-center rounded-xl
      bg-gray-900 text-blue-400
      shadow-lg shadow-blue-500/40
      transition-all duration-300 ease-out
      hover:bg-gray-800 hover:shadow-blue-500/70
      hover:-translate-y-1"
  >
    <FaLinkedinIn size={20} />
  </a>

  <a
    href="#"
    className="w-12 h-12 flex items-center justify-center rounded-xl
      bg-gray-900 text-blue-400
      shadow-lg shadow-blue-500/40
      transition-all duration-300 ease-out
      hover:bg-gray-800 hover:shadow-blue-500/70
      hover:-translate-y-1"
  >
    <FaGithub size={20} />
  </a>

  <a
    href="#"
    className="w-12 h-12 flex items-center justify-center rounded-xl
      bg-gray-900 text-blue-400
      shadow-lg shadow-blue-500/40
      transition-all duration-300 ease-out
      hover:bg-gray-800 hover:shadow-blue-500/70
      hover:-translate-y-1"
  >
    <FaInstagram size={20} />
  </a>
</div>

    </div>
  )
}

export default Icons