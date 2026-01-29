import React from 'react'

const Buttons = () => {
  return (
    <div>
        <div className="flex flex-wrap gap-4 mt-8">
            <button className="px-6 py-3 rounded-xl bg-blue-500 text-white font-medium
    shadow-lg shadow-blue-500/50
    transition-all duration-300 ease-out
    hover:bg-blue-600 hover:shadow-blue-600/80
    hover:-translate-y-2">
              React
            </button>

            <button className="px-6 py-3 rounded-xl bg-blue-500 text-white font-medium
    shadow-lg shadow-blue-500/50
    transition-all duration-300 ease-out
    hover:bg-blue-600 hover:shadow-blue-600/80
    hover:-translate-y-2">
              JavaScript
            </button>

            <button className="px-6 py-3 rounded-xl bg-blue-500 text-white font-medium
    shadow-lg shadow-blue-500/50
    transition-all duration-300 ease-out
    hover:bg-blue-600 hover:shadow-blue-600/80
    hover:-translate-y-2">
              Tailwind
            </button>
          </div>
    </div>

  )
}

export default Buttons