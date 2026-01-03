import { Link } from 'react-router-dom';
import Navigation from '../Navigation';
import Footer from '../Footer';

export default function PremiumRestaurant() {
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
          Premium Restaurant
        </h1>
        <p className="text-gray-400 text-sm mb-8">Dubai</p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <img
            src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800"
            className="rounded-xl"
            alt="Premium restaurant interior"
          />
          <img
            src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800"
            className="rounded-xl"
            alt="Restaurant dining area"
          />
          <img
            src="https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=800"
            className="rounded-xl"
            alt="Restaurant table service"
          />
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Operational Context</h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            The venue operates across three seating zones, main dining, terrace, and bar-lounge, with high variability in demand: weekend evenings reach 100% capacity within 30 minutes of opening, while weekday lunches often run below 40% utilization. Prior to Camex, floor management relied on visual estimation and manual table cards, leading to bottlenecks at check-in, delayed table resets, and inconsistent service pacing.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">AI Use Cases</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">People Counting (Entry & Zonal Flow)</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Cameras installed at all ingress/egress points feed into a multi-stage AI pipeline:</li>
                <li>YOLOv8-based detection identifies individuals, filtering out staff (via uniform-based classification) to count guests only.</li>
                <li>Directional flow analysis distinguishes entering vs. exiting using optical flow vectors.</li>
                <li>Dwell time computation initiates upon entry and terminates upon exit, used to calculate average visit duration and identify potential service delays (e.g., guests lingering &gt;20 mins post-meal may indicate billing or feedback issues).</li>
                <li>Data syncs in real time with the POS and reservation system (via REST API), displaying live capacity on manager dashboards and triggering auto-adjustments (e.g., if &gt;90% capacity projected, system recommends pausing walk-ins and prioritizing reservations).</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Seat Occupancy Status Engine</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Each table is geo-fenced via virtual bounding boxes calibrated for camera perspective.</li>
                <li>AI logic combines:</li>
                <li>Object permanence tracking: Detects presence/absence of chairs pulled out, place settings disturbed, or glasses moved.</li>
                <li>Human pose estimation: Confirms if seated individuals are actively dining (e.g., arms on table, facing center) vs. post-meal (leaning back, phones out).</li>
                <li>Temporal state modeling: Transitions through states, vacant → reserved (pre-set) → occupied → post-meal → cleared → reset, with SLA timers per stage (e.g., &gt;4 mins in cleared triggers reset alert).</li>
                <li>Floor leads receive mobile push notifications when tables exceed reset SLA, with live thumbnail preview.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Heatmap & Behavioral Zoning</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Hourly aggregated footfall density maps are generated using kernel density estimation (KDE), overlaid onto floor plans.</li>
                <li>&quot;Hot zones&quot; (e.g., near open kitchen, bar) show 3× higher dwell vs. &quot;cold zones&quot; (e.g., corridor-adjacent tables).</li>
                <li>Insights used to:</li>
                <li>Reposition high-margin items (e.g., premium shisha, dessert carts) toward hot zones.</li>
                <li>Adjust lighting/music zoning (e.g., increase ambiance in underperforming areas).</li>
                <li>Train hosts on strategic seating, e.g., solo diners placed in high-energy zones, families in quieter sections.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Queue Intelligence & Dynamic Intervention</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>A dedicated camera monitors the host stand and waiting area.</li>
                <li>Queue length is measured as number of standing guests + seated guests in waiting lounge.</li>
                <li>Estimated wait time calculated using: Real-time table turnover rate, Predicted arrivals (from reservation curve + walk-in trend)</li>
                <li>When wait &gt;10 mins or queue &gt;6 persons: Host receives prompt to offer welcome drinks (reducing perceived wait), SMS auto-sent to guests in queue with updated ETA, System suggests opening overflow seating (terrace/bar) with staff reassignment alert</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Workflow Integration</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Dashboard accessible on tablets carried by floor supervisors</li>
            <li>Alerts integrated into staff communication app (e.g., WhatsApp Business API or Teams)</li>
            <li>Daily reports auto-emailed: peak conversion rates, zone-wise turnover, staff response KPIs</li>
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Impact Summary</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Table reset cycle time improved by over 20%, enabling more covers per service window</li>
            <li>Host decision-making shifted from reactive intuition to data-guided pacing</li>
            <li>Customer satisfaction (CSAT) scores showed marked improvement in &quot;wait time&quot; and &quot;attentiveness&quot; metrics</li>
            <li>ROI achieved in under 6 months, driven by increased throughput and reduced staff over-scheduling</li>
          </ul>
        </div>
      </div>
    </section>
    <Footer />
    </div>
  );
}

