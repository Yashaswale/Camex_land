import { Link } from 'react-router-dom';
import Navigation from '../Navigation';
import Footer from '../Footer';

export default function UrbanPharmacy() {
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
          Urban Pharmacy
        </h1>
        <p className="text-gray-400 text-sm mb-8">Dubai</p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <img
            src="https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800"
            className="rounded-xl"
            alt="Pharmacy interior"
          />
          <img
            src="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800"
            className="rounded-xl"
            alt="Pharmacy counter"
          />
          <img
            src="https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800"
            className="rounded-xl"
            alt="Pharmacy service"
          />
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Operational Context</h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            High-footfall location in residential-commercial mix, balancing prescription accuracy, OTC availability, and controlled substance security with limited staff.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">AI Use Cases</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Controlled Substance Access Integrity Protocol</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Narcotics cabinet equipped with: Dual-camera view (front + top-down), Integration with electronic lock & access log system</li>
                <li>AI verifies: Who: Detects face region (non-identifying, used for liveness only, not recognition), confirms it matches badge holder via temporal sync (±5 sec window), What: Monitors drawer opening, item removal (via motion trajectory), and dose logging on terminal, How many: Validates quantity removed vs. system-authorized prescription</li>
                <li>Mismatches trigger: Cabinet auto-lock, Red alert to pharmacy manager + security, Video clip archived with audit trail</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Queue Intelligence with Predictive Load Balancing</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Two streams monitored: Prescription queue: Guests waiting for script fulfillment, OTC service queue: Customers seeking advice or high-value items</li>
                <li>Estimated wait = (current queue length × avg. service time) + buffer</li>
                <li>When threshold breached, system recommends: Activate &quot;express refill&quot; counter, Redirect pharmacist assistant from inventory to front, Send SMS: &quot;Your wait is ~7 mins, reply YES for curbside pickup&quot;</li>
                <li>Historical trends used to forecast daily peaks, informs staff rostering.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Shelf-Out-of-Stock Visual Detection</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Cameras with fixed view of top-selling shelves (e.g., pain relief, antihistamines, vitamins).</li>
                <li>AI trained on SKU-level packaging (logo, color, shape) to detect: Empty front-facing slots, Stock pushed to back (common during rush), Misplaced items (e.g., generic in branded slot)</li>
                <li>Alert severity based on sales velocity: High-velocity item out of stock → immediate alert, Low-velocity → included in end-of-day restock list</li>
                <li>Integration with inventory system auto-generates pick list for backroom.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Staff Utilization & Task Matching</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Tracks each staff member via uniform + role badge region.</li>
                <li>Classifies activity state every 15 sec: Active service (interacting with customer), Processing (at POS, compounding), Idle (standing, phone use &gt;90 sec), Transition (walking between zones)</li>
                <li>During peak, idle staff &gt;2 mins → suggestion: &quot;Reassign Sarah to OTC counter, 4 customers waiting&quot;</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Workflow Integration</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Manager dashboard shows real-time &quot;service health score&quot;</li>
            <li>End-of-day report: top stockouts, peak wait times, staff utilization variance</li>
            <li>Alerts feed into staff performance reviews (constructive, not punitive)</li>
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Impact Summary</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Security of controlled substances became auditable and tamper-evident</li>
            <li>Customer experience stabilized, no more &quot;out of stock&quot; or &quot;long wait&quot; surprises</li>
            <li>Staff felt empowered by real-time support, not micromanaged</li>
            <li>ROI achieved in under 6 months, via loss prevention and increased OTC sales capture</li>
          </ul>
        </div>
      </div>
    </section>
    <Footer />
    </div>
  );
}

