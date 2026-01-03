import { Link } from 'react-router-dom';
import Navigation from '../Navigation';
import Footer from '../Footer';

export default function DatesProcessingFacility() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <section className="bg-black text-white py-20 pt-24">
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
          Dates Processing Facility
        </h1>
        <p className="text-gray-400 text-sm mb-8">Abu Dhabi Region</p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <img
            src="https://images.pexels.com/photos/3770580/pexels-photo-3770580.jpeg?auto=compress&cs=tinysrgb&w=800"
            className="rounded-xl"
            alt="Food processing facility"
          />
          <img
            src="https://images.pexels.com/photos/3194524/pexels-photo-3194524.jpeg?auto=compress&cs=tinysrgb&w=800"
            className="rounded-xl"
            alt="Production line"
          />
          <img
            src="https://images.pexels.com/photos/2252619/pexels-photo-2252619.jpeg?auto=compress&cs=tinysrgb&w=800"
            className="rounded-xl"
            alt="Dates processing"
          />
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Operational Context</h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            High-speed production line handling 20+ date varieties, with strict GFSI and HACCP requirements. Seasonal demand spikes double workforce, increasing hygiene risk due to rushed onboarding.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">AI Use Cases</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Hygiene Gatekeeping at Zone Transitions</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Critical control points (CCPs) monitored: Raw receiving → washing, Washing → grading, Grading → packaging</li>
                <li>At each transition, cameras verify: Hairnet fully covering hair (no exposed strands at nape), Beard net for facial hair &gt;1 cm, Gloves present, no tears/holes (via texture anomaly detection)</li>
                <li>If non-compliant, system: Halts conveyor via PLC integration (optional, configurable), Displays red &quot;STOP&quot; overlay on local monitor, Logs incident with shift/team metadata</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Handwashing Verification (Not Just Presence)</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Cameras above handwash stations.</li>
                <li>Uses skeletal motion tracking to verify WHO 6-step technique: Palm-to-palm rubbing, Interlaced fingers, Back of fingers to opposing palms, Rotational thumb rubbing, Fingertip scrubbing, Rinsing & drying</li>
                <li>Duration must exceed 20 sec. Skipping steps or &lt;15 sec → flagged as incomplete.</li>
                <li>Data used for targeted retraining, e.g., &quot;Team B skips thumb rub 42% of time&quot;.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Foreign Object Detection on Conveyors</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>High-resolution cameras over sorting belts.</li>
                <li>AI model trained on: Date morphology (normal shape, color, texture), Common contaminants: stones, insects, plastic fragments, metal shavings, non-date organic matter</li>
                <li>Uses anomaly segmentation: anything deviating &gt;3σ from expected visual features is highlighted.</li>
                <li>Confirmed foreign object → conveyor pause + alarm + operator review on tablet.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Worker Density & Cross-Zone Contamination Prevention</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Virtual zones with max occupancy (e.g., 8 persons in packaging clean room).</li>
                <li>Alerts if: Density exceeded &gt;2 mins, Person moves backward (e.g., from clean to raw zone) without re-sanitization break, Glove change not detected at hygiene station between zones</li>
                <li>System correlates with time logs, identifies chronic violators for coaching.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Workflow Integration</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Real-time hygiene score per line displayed on floor monitors (gamified: green/yellow/red)</li>
            <li>QA team receives automated daily report: top violation types, high-risk shifts</li>
            <li>Audit preparation reduced to clicking &quot;Export Compliance Log&quot;</li>
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Impact Summary</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Hygiene became measurable, not subjective, closing the &quot;we assumed they washed&quot; gap</li>
            <li>Product integrity improved visibly, fewer customer complaints on foreign matter</li>
            <li>Internal audits transformed from stressful events to routine validations</li>
            <li>ROI achieved in just over 6 months, via reduced rework and stronger export certification standing</li>
          </ul>
        </div>
      </div>
    </section>
    <Footer />
    </div>
  );
}

