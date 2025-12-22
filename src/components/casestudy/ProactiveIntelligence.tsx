import { Link } from 'react-router-dom';

export default function ProactiveIntelligence() {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-2 text-gray-400 text-sm mb-8">
          <Link to="/" className="hover:text-white">Home</Link>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          <span>Case Study</span>
        </div>
        <p className="text-gray-400 text-sm mb-3">CASE STUDY</p>

        <h1 className="text-4xl font-bold mb-6">
          Transforming CCTV into Proactive Intelligence
        </h1>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <img
            src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg"
            className="rounded-xl"
            alt="CCTV monitoring"
          />
          <img
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
            className="rounded-xl"
            alt="AI intelligence"
          />
          <img
            src="https://images.pexels.com/photos/3205735/pexels-photo-3205735.jpeg"
            className="rounded-xl"
            alt="Smart surveillance"
          />
        </div>

        <p className="text-gray-400 mb-8 leading-relaxed">
          Traditional CCTV systems are passive, they record footage but require
          human effort to extract insights. This leads to missed threats and
          delayed responses.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          Limitations of Traditional CCTV
        </h2>

        <ul className="list-disc list-inside text-gray-400 mb-10 space-y-2">
          <li>No real-time intelligence</li>
          <li>Heavy dependence on manual monitoring</li>
          <li>Reactive incident handling</li>
          <li>Limited operational insights</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">
          The Camex Transformation
        </h2>

        <p className="text-gray-400 leading-relaxed">
          Camex AI converted existing CCTV infrastructure into an intelligent
          system capable of detecting anomalies, generating heatmaps, and
          triggering alerts automatically, enabling proactive, data-driven
          decision-making.
        </p>
      </div>
    </section>
  );
}

