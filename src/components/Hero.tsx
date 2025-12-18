import { useModal } from '../contexts/ModalContext';

export default function Hero() {
  const { openModal } = useModal();

  return (
    <section
      className="relative min-h-screen 
      bg-black 
      pt-24 pb-32 overflow-hidden"
    >
      {/* LEFT compact but intense radial glow */}
      <div
        className="pointer-events-none absolute left-[-22%] top-1/2 -translate-y-1/2 
        w-[750px] h-[750px] rounded-full
        bg-[radial-gradient(circle,_rgba(6,105,255,0.80)_0%,_rgba(6,105,255,0.22)_40%,_rgba(6,105,255,0)_80%)]
        blur-[160px] opacity-95 z-0"
      />

      {/* RIGHT compact but intense radial glow */}
      <div
        className="pointer-events-none absolute right-[-22%] top-1/2 -translate-y-1/2 
        w-[750px] h-[750px] rounded-full
        bg-[radial-gradient(circle,_rgba(6,105,255,0.80)_0%,_rgba(6,105,255,0.22)_40%,_rgba(6,105,255,0)_80%)]
        blur-[160px] opacity-95 z-0"
      />

      {/* CCTV IMAGE */}
      <div className="absolute top-40 left-0 opacity-90 z-0">
        <img
          src="/cctv.png"
          alt="CCTV"
          className="w-64 h-64 object-contain"
        />
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mt-20">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 mb-8">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-300">AI-powered analytics for your existing CCTV</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 max-w-5xl leading-tight">
            <span className="text-blue-500">Grow</span> your business operations<br />
            using your <span className="text-blue-500">CCTV</span> cameras
          </h1>

          <p className="text-lg text-gray-400 mb-10 max-w-3xl leading-relaxed">
            Camex transforms traditional CCTV into an AI-powered analytics layer — delivering real-time insights, instant alerts,
            and actionable data that helps protect your people, assets, and operations.
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={openModal}
              className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50"
            >
              Book a Demo
            </button>
            <button
              onClick={openModal}
              className="px-8 py-3 border border-gray-600 hover:border-gray-500 text-white rounded-lg font-medium transition-all"
            >
              Sign Up
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
