import { useState } from 'react';

const cameras = [
  { id: 1, type: 'Employee Monitoring', status: 'Live', video: '/Videos/vid8.mp4' },
  { id: 2, type: 'Restricted Zone', status: 'Live', video: '/Videos/vid2.mp4' },
  { id: 3, type: 'Heatmap', status: 'Live', video: '/Videos/vid3.mp4' },
  { id: 4, type: 'Crowd Counting', status: 'Live', video: '/Videos/vid4.mp4' },
  { id: 5, type: 'PPE detection', status: 'Live', video: '/Videos/vid5.mp4' },
  { id: 6, type: 'Theft Detection', status: 'Live', video: '/Videos/vid1.mp4' },
  { id: 7, type: 'ANPR Detection', status: 'Live', video: '/Videos/vid7.mp4' },
  { id: 8, type: 'Employee Monitoring', status: 'Live', video: '/Videos/vid8.mp4' },
];

const categories = [
  { id: 'all', label: 'All Live Wall' },
  { id: 'retail', label: 'Retail Store ' },
  { id: 'factory', label: 'Factory ' },
  { id: 'restaurant', label: 'Restaurant ' },
  { id: 'road', label: 'Road ' },
];

export default function LiveMonitoring() {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <section className="relative bg-black py-20 overflow-hidden">
      {/* LEFT radial glow */}
      <div
        className="pointer-events-none absolute left-[-25%] top-1/2 -translate-y-1/2 
        w-[700px] h-[700px] rounded-full
        bg-[radial-gradient(circle,_rgba(6,105,255,0.80)_0%,_rgba(6,105,255,0.22)_40%,_rgba(6,105,255,0)_80%)]
        blur-[150px] opacity-90 z-0"
      />

      {/* RIGHT radial glow */}
      <div
        className="pointer-events-none absolute right-[-25%] top-1/2 -translate-y-1/2 
        w-[700px] h-[700px] rounded-full
        bg-[radial-gradient(circle,_rgba(6,105,255,0.80)_0%,_rgba(6,105,255,0.22)_40%,_rgba(6,105,255,0)_80%)]
        blur-[150px] opacity-90 z-0"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-12">
          <p className="text-gray-400 text-sm uppercase tracking-wider mb-3">LIVE MONITORING</p>
          <h2 className="text-4xl font-bold text-white mb-4">Live Wall – Watch AI in Action</h2>
          <p className="text-gray-400 text-lg">Explore real CCTV scenarios powered by Camex AI analytics.</p>
        </div>

        <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2.5 rounded-lg font-medium whitespace-nowrap transition-all ${
                activeCategory === category.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-transparent border border-gray-700 text-gray-400 hover:border-gray-600'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cameras.map((camera) => (
            <div
              key={camera.id}
              className="relative rounded-xl overflow-hidden bg-gray-900 border border-gray-800 hover:border-gray-700 transition-all group"
            >
              <div className="aspect-video relative">
                <video
                  src={camera.video}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                <div className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1.5 bg-red-500/90 backdrop-blur-sm rounded-full">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span className="text-white text-xs font-medium">{camera.status}</span>
                </div>

                <div className="absolute top-3 right-3 px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded text-white text-xs font-medium">
                  {camera.type}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
