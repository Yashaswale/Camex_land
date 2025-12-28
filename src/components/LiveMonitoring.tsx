import { useState, useMemo, useRef, useEffect } from 'react';

const cameras = [
  { id: 1, type: 'Employee Monitoring', title: 'Retail Store', status: 'Live', video: '/Videos/vid6.mp4' },
  { id: 2, type: 'Restricted Zone', title: 'Road', status: 'Live', video: '/Videos/vid2.mp4' },
  { id: 3, type: 'Heatmap', title: 'Retail Store', status: 'Live', video: '/Videos/vid3.mp4' },
  { id: 4, type: 'Crowd Counting', title: 'Retail Store', status: 'Live', video: '/Videos/vid4.mp4' },
  { id: 5, type: 'PPE detection', title: 'Factory', status: 'Live', video: '/Videos/vid5.mp4' },
  { id: 6, type: 'Theft Detection', title: 'Retail Store', status: 'Live', video: '/Videos/vid1.mp4' },
  { id: 7, type: 'ANPR Detection', title: 'Road', status: 'Live', video: '/Videos/vid7.mp4' },
  { id: 8, type: 'Employee Monitoring', title: 'Factory', status: 'Live', video: '/Videos/vid8.mp4' },
  { id: 9, type: 'Employee Monitoring', title: 'Road', status: 'Live', video: '/Videos/vid9.mp4' },
  { id: 10, type: 'Employee Monitoring', title: 'Retail Store', status: 'Live', video: '/Videos/vid10.mp4' },
  { id: 11, type: 'Employee Monitoring', title: 'Road', status: 'Live', video: '/Videos/vid11.mp4' },
  { id: 12, type: 'Employee Monitoring', title: 'Retail Store', status: 'Live', video: '/Videos/vid12.mp4' },
];

const categories = [
  { id: 'all', label: 'All Live Wall', title: 'All' },
  { id: 'retail', label: 'Retail Store', title: 'Retail Store' },
  { id: 'factory', label: 'Factory', title: 'Factory' },
  { id: 'road', label: 'Road', title: 'Road' },
  { id: 'restaurant', label: 'Restaurant', title: 'Restaurant' },
  { id: 'hospital', label: 'Hospital', title: 'Hospital' },
];

// Map category IDs to title values in cameras
const categoryTitleMap: { [key: string]: string } = {
  'all': 'all',
  'retail': 'Retail Store',
  'factory': 'Factory',
  'road': 'Road',
  'restaurant': 'Restaurant',
  'hospital': 'Hospital',
};

// Video Card Component with Lazy Loading
function VideoCard({ camera, index }: { camera: typeof cameras[0]; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldLoadImmediately = index < 9;
  const [isLoaded, setIsLoaded] = useState(shouldLoadImmediately);

  useEffect(() => {
    // For first 9 videos, load immediately
    if (shouldLoadImmediately) {
      setIsLoaded(true);
      return;
    }

    // For videos beyond the first 9, use IntersectionObserver for lazy loading
    if (!shouldLoadImmediately && containerRef.current && !isLoaded) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsLoaded(true);
              observer.disconnect();
            }
          });
        },
        { rootMargin: '100px' } // Start loading 100px before it comes into view
      );

      observer.observe(containerRef.current);

      return () => {
        observer.disconnect();
      };
    }
  }, [shouldLoadImmediately, isLoaded]);

  return (
    <div ref={containerRef} className="relative rounded-xl overflow-hidden bg-gray-900 border border-gray-800 hover:border-gray-700 transition-all group">
      <div className="aspect-video relative">
        {isLoaded ? (
          <>
            <video
              ref={videoRef}
              src={camera.video}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

            <div className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1.5 bg-red-500/90 backdrop-blur-sm rounded-full">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-white text-xs font-medium">{camera.status}</span>
            </div>

            <div className="absolute top-3 right-3 px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded text-white text-xs font-medium">
              {camera.type}
            </div>
          </>
        ) : (
          <div className="w-full h-full bg-gray-800 flex items-center justify-center">
            <div className="text-gray-500 text-sm">Loading...</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function LiveMonitoring() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showAll, setShowAll] = useState(false);

  // Filter cameras based on active category
  const filteredCameras = useMemo(() => {
    if (activeCategory === 'all') {
      return cameras;
    }
    const categoryTitle = categoryTitleMap[activeCategory];
    return cameras.filter(camera => camera.title === categoryTitle);
  }, [activeCategory]);

  // Show only 9 videos initially, or all if showAll is true
  const displayedCameras = useMemo(() => {
    return showAll ? filteredCameras : filteredCameras.slice(0, 9);
  }, [filteredCameras, showAll]);

  // Check if there are more videos to load
  const hasMore = filteredCameras.length > 9;

  // Reset showAll when category changes
  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setShowAll(false);
  };

  return (
    <section className="relative bg-black py-12 sm:py-20 overflow-hidden">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="mb-8 sm:mb-12">
          <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3">LIVE MONITORING</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">Live Wall – Watch AI in Action</h2>
          <p className="text-gray-400 text-base sm:text-lg">Explore real CCTV scenarios powered by Camex AI analytics.</p>
        </div>

        <div className="flex gap-2 sm:gap-3 mb-6 sm:mb-8 overflow-x-auto pb-2 -mx-4 sm:mx-0 px-4 sm:px-0">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg font-medium whitespace-nowrap transition-all text-sm sm:text-base ${
                activeCategory === category.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-transparent border border-gray-700 text-gray-400 hover:border-gray-600'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Category Title */}
        {activeCategory !== 'all' && (
          <div className="mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {categoryTitleMap[activeCategory]} Cameras
            </h3>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCameras.map((camera, index) => (
            <VideoCard key={camera.id} camera={camera} index={index} />
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && !showAll && (
          <div className="flex justify-center mt-8 sm:mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 sm:px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-all shadow-lg shadow-blue-500/30 text-sm sm:text-base"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
