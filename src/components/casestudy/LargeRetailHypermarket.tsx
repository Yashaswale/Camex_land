import { Link } from 'react-router-dom';

export default function LargeRetailHypermarket() {
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
          Large Retail Hypermarket
        </h1>
        <p className="text-gray-400 text-sm mb-8">Sharjah</p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <img
            src="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800"
            className="rounded-xl"
            alt="Retail hypermarket"
          />
          <img
            src="https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg?auto=compress&cs=tinysrgb&w=800"
            className="rounded-xl"
            alt="Shopping aisle"
          />
          <img
            src="https://images.pexels.com/photos/3737615/pexels-photo-3737615.jpeg?auto=compress&cs=tinysrgb&w=800"
            className="rounded-xl"
            alt="Retail store interior"
          />
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Operational Context</h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            A 10,000+ sqm store with 200+ staff, facing pressure from e-commerce on margins. Key pain points: inventory shrinkage (especially high-value consumables), inconsistent customer engagement, and inefficient labor allocation during demand spikes.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">AI Use Cases</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Loitering & Suspicious Behavior Engine</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Not just &quot;standing still&quot;, Camex uses behavioral state modeling:</li>
                <li>Baseline: Normal browsing (paced movement, frequent product interaction)</li>
                <li>Alert states: Repetitive revisits: Same person in same aisle &gt;3 times in 10 mins, Concealment gestures: Hands near waist/back, bag opening near shelves, Distraction pairing: Two individuals acting in coordination (e.g., one distracts staff, other moves toward high-theft zone)</li>
                <li>Alerts sent discreetly to LP team&apos;s mobile app with live feed, no public alarms to avoid escalation.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Shelf Gazing & Engagement Intelligence</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Cameras mounted at shelf-end gondolas.</li>
                <li>AI detects: Gaze direction via head pose estimation (not eye tracking, privacy-preserving), Interaction via hand-object proximity (e.g., picking up item, reading label), Dwell duration per SKU section</li>
                <li>High gaze + low pickup = potential issue (e.g., unclear pricing, out-of-stock behind front, poor packaging).</li>
                <li>Data fed into weekly merchandising reviews, used to validate new planograms before full rollout.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Dynamic Heatmapping for Layout Optimization</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Heatmaps updated hourly, segmented by: Time of day (e.g., 9–11 AM = senior shoppers → slower movement, higher dwell in pharmacy), Day type (weekday vs. weekend vs. Ramadan evenings)</li>
                <li>&quot;Dead zones&quot; identified where footfall &lt;30% of store average, triggers interventions: Feature seasonal promotions, Install demo stations or sampling kiosks, Re-route main paths via signage or displays</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Staff Assistance Triggering Protocol</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>When customer dwell in high-value category (e.g., electronics, appliances) &gt;2 mins without staff interaction:</li>
                <li>System checks nearest associate location (via uniform detection + zone mapping)</li>
                <li>If no staff within 10m, sends escalation alert to supervisor</li>
                <li>If staff nearby but idle &gt;60 sec, triggers gentle reminder: &quot;Customer waiting in Aisle 12&quot;</li>
                <li>Post-interaction, AI verifies engagement (e.g., joint movement, pointing, transaction at POS) to close loop.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Workflow Integration</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Store manager dashboard shows real-time &quot;engagement score&quot; per department</li>
            <li>Daily loss prevention digest highlights top risk zones and behavior trends</li>
            <li>Staff KPIs include &quot;assistance response rate&quot;, tied to incentive programs</li>
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Impact Summary</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Shrinkage control shifted from post-event investigation to real-time deterrence</li>
            <li>Merchandising became responsive, reducing costly layout overhauls</li>
            <li>Customer experience improved measurably in high-value categories</li>
            <li>ROI achieved in under 5 months, driven by shrink reduction and conversion uplift</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

