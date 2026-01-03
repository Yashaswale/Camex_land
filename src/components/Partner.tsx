import { Camera, Cpu, ShieldCheck, Activity } from 'lucide-react';

export default function ImpactMetrics() {
  return (
    <section className="bg-black py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          
          {/* Left Content */}
          <div className="space-y-6">
            <span className="text-sm font-medium text-blue-400">
              Launch smarter
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Turn existing cameras into <br className="hidden sm:block" />
              intelligent systems
            </h2>

            <p className="text-gray-400 max-w-xl text-base sm:text-lg">
              We handle the heavy lifting so you don’t have to. Deploy AI-powered
              analytics on your existing CCTV infrastructure and gain insights
              that actually matter.
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-8 pt-6">
              <Metric
                icon={<Camera />}
                value="10,000+"
                label="Cameras supported"
                description="Across enterprises & smart cities"
              />
              <Metric
                icon={<Cpu />}
                value="80+"
                label="AI models"
                description="Optimized for real-world scenarios"
              />
              <Metric
                icon={<ShieldCheck />}
                value="99.7%"
                label="Detection accuracy"
                description="Continuously improved models"
              />
              <Metric
                icon={<Activity />}
                value="24/7"
                label="System uptime"
                description="Enterprise-grade reliability"
              />
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden border border-gray-800">
              <img
                src="./Camera_img.png"
                alt="CCTV camera monitoring and AI analytics"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            {/* Soft Accent Glow */}
            <div
              className="pointer-events-none absolute -bottom-10 -right-10
              w-[300px] h-[300px] rounded-full
              bg-[radial-gradient(circle,_rgba(6,105,255,0.35)_0%,_rgba(6,105,255,0.12)_45%,_rgba(6,105,255,0)_75%)]
              blur-[120px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* Metric Card */
interface MetricProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  description: string;
}

function Metric({ icon, value, label, description }: MetricProps) {
  return (
    <div className="group space-y-2">
      <div className="flex items-center gap-3 text-blue-400">
        <div className="p-2 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition">
          {icon}
        </div>
        <span className="text-2xl sm:text-3xl font-bold">
          {value}
        </span>
      </div>

      <p className="text-white font-medium">
        {label}
      </p>

      <p className="text-gray-400 text-sm">
        {description}
      </p>
    </div>
  );
}
