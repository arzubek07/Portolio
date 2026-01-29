// BackgroundGlow.jsx
export default function BeckgroundAnimation() {
  return (
    <div className="fixed inset-0 -z-10 flex justify-center items-center pointer-events-none">
      {/* Красный свет */}
      <div className="absolute w-72 h-72 bg-red-500 rounded-full opacity-40 shadow-[0_0_150px_50px_rgba(255,0,0,0.5)] animate-glowPulse"></div>
      {/* Синий свет */}
      <div className="absolute w-72 h-72 bg-blue-500 rounded-full opacity-30 shadow-[0_0_150px_50px_rgba(0,0,255,0.5)] animate-glowPulse delay-500"></div>
      {/* Зеленый свет */}
      <div className="absolute w-72 h-72 bg-green-500 rounded-full opacity-30 shadow-[0_0_150px_50px_rgba(0,255,0,0.5)] animate-glowPulse delay-1000"></div>
    </div>
  );
}
