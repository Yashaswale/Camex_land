import { Link } from 'react-router-dom';

export default function UpstreamOilGasFacility() {
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
          Upstream Oil & Gas Facility
        </h1>
        <p className="text-gray-400 text-sm mb-8">Abu Dhabi Region</p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <img
            src="https://images.pexels.com/photos/2252619/pexels-photo-2252619.jpeg?auto=compress&cs=tinysrgb&w=800"
            className="rounded-xl"
            alt="Oil and gas facility"
          />
          <img
            src="https://images.pexels.com/photos/3770580/pexels-photo-3770580.jpeg?auto=compress&cs=tinysrgb&w=800"
            className="rounded-xl"
            alt="Industrial oil facility"
          />
          <img
            src="https://images.pexels.com/photos/3194524/pexels-photo-3194524.jpeg?auto=compress&cs=tinysrgb&w=800"
            className="rounded-xl"
            alt="Oil refinery"
          />
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Operational Context</h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            A 24/7 operational site with mixed workforce, core employees, rotating shift teams, and 100+ daily contractors. Safety culture is strong, but compliance drift occurs during night shifts and contractor onboarding surges.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">AI Use Cases</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">PPE Compliance with Zone-Specific Rules</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Each operational zone has configurable PPE policies: Drilling floor: Hard hat + FR coverall + safety glasses + steel toes, Control room: Hard hat optional, but no open footwear, Lab: Lab coat + gloves + goggles</li>
                <li>AI cross-references detected items against zone rules.</li>
                <li>False-positive mitigation: Hard hat worn under hood? → detected via edge contrast analysis, Goggles pushed up on forehead? → flagged as non-compliant</li>
                <li>Alerts include severity: Yellow: Minor deviation (e.g., unzipped FR jacket) → log for coaching, Red: Critical omission (e.g., no hard hat in red zone) → immediate site-wide alert + auto-photo to supervisor</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Fall & Motion Anomaly Detection</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Uses 3D pose estimation + velocity profiling to detect: Sudden drop in vertical center-of-mass, Asymmetric limb movement (e.g., clutching chest, limping), Prolonged ground contact (&gt;10 sec)</li>
                <li>In open yards, system differentiates fall from intentional crouch (e.g., inspecting equipment) using context: Is person near machinery? → likely work posture, Is person alone in transit path? → higher fall probability</li>
                <li>Confirmed incidents trigger PA announcement + GPS-tagged alert to nearest medics.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Vehicle-Pedestrian Collision Avoidance</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Cameras mounted on loaders, forklifts, and yard perimeter.</li>
                <li>AI fuses: Vehicle trajectory (from motion vectors), Pedestrian path prediction (using LSTM-based forecasting)</li>
                <li>Danger zones dynamically projected around moving vehicles.</li>
                <li>If pedestrian enters predicted path &lt;5 sec before impact: On-vehicle buzzer activated, Flashing beacon on nearest pole, Alert sent to traffic controller</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Early Fire & Smoke Visual Detection</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Complements traditional sensors, especially in open or ventilated zones where smoke dissipates before ion detection.</li>
                <li>Model trained on 50,000+ real & synthetic fire/smoke images under desert lighting (high glare, dust haze).</li>
                <li>Detects: Thin smoke plumes (even against bright sky), Flame flicker frequency (1–20 Hz), Thermal bloom (via color-temperature shift in visible spectrum)</li>
                <li>First-stage alert initiates: Camera PTZ auto-zoom on source, Live feed pushed to HSE + control room, PA warning: &quot;Unverified smoke detection, Zone 4B, investigate&quot;</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Workflow Integration</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>All alerts archived in safety management system (e.g., Intelex, Sphera)</li>
            <li>Weekly &quot;Safety Pulse&quot; reports show compliance trends by contractor company</li>
            <li>New hire onboarding includes personalized violation replay (anonymized) for training</li>
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Impact Summary</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Safety culture deepened through objective, non-punitive feedback</li>
            <li>Near-miss reporting increased (positive indicator of psychological safety)</li>
            <li>Regulatory inspection scores improved across all HSE categories</li>
            <li>ROI realized in under 4 months, via avoided incident costs and productivity continuity</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

