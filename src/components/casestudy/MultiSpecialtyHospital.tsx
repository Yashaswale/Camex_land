import { Link } from 'react-router-dom';
import Navigation from '../Navigation';
import Footer from '../Footer';

export default function MultiSpecialtyHospital() {
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
          Multi-Specialty Hospital
        </h1>
        <p className="text-gray-400 text-sm mb-8">Abu Dhabi</p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <img
            src="https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg"
            className="rounded-xl"
            alt="Hospital facility"
          />
          <img
            src="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg"
            className="rounded-xl"
            alt="Hospital corridor"
          />
          <img
            src="https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg"
            className="rounded-xl"
            alt="Medical facility"
          />
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Operational Context</h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            A 300+ bed facility serving high-acuity cases, with recurring challenges in emergency department (ED) throughput, infection control compliance (especially among rotating contractors), and audit readiness for regulatory bodies (DHA, CAP, JCI).
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">AI Use Cases</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">PPE Detection with Role-Aware Context</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Over 50 cameras cover clinical zones, sterilization units, labs, and corridors.</li>
                <li>AI model uses multi-label classification + instance segmentation to identify: Mask (surgical vs. N95, proper fit), Gloves (presence, color-coded by zone: blue for general, purple for chemo), Gown (tied vs. open, fluid-resistant type in ICUs), Hairnet/beard net (mandatory in OR prep, labs)</li>
                <li>Role inference is enabled via: Uniform color/pattern recognition (e.g., white coat = doctor, teal scrubs = nurse, gray = engineering), Badge region detection (non-PII, only verifies presence, not identity)</li>
                <li>Alerts are tiered: Level 1 (immediate): Missing mask in OR corridor → SMS + siren at nearest nursing station, Level 2 (corrective): Untied gown in lab → log for supervisor review at shift end</li>
                <li>All violations auto-logged with timestamp, camera ID, zone, and frame snippet, used in daily safety huddles.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Queue & Patient Flow Analytics</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Cameras at registration, triage, consultation rooms, and pharmacy windows.</li>
                <li>AI reconstructs patient journey paths using re-identification (non-biometric, appearance-based tracking across zones).</li>
                <li>Key triggers: Dwell &gt;15 mins at triage without nurse interaction → alert to charge nurse, 3 patients waiting at pharmacy for &gt;8 mins → triggers &quot;express lane&quot; activation</li>
                <li>Integration with EMR allows correlation: high-dwell patients flagged for social worker/interpreter support.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Staff-to-Patient Ratio Guardian</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>In critical care units, virtual zones are defined per room or bay.</li>
                <li>Simultaneous detection of clinical staff (via uniform + stethoscope/glove cues) and patients.</li>
                <li>Ratio thresholding (e.g., 1:2 in ICU, 1:4 in general wards) enforced in real time.</li>
                <li>If ratio breached &gt;90 seconds, alert sent to charge nurse and backup staff pool.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Geo-Fenced Unauthorized Access</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Virtual perimeters drawn around: Pharmacy narcotics cabinet, Data server room, Neonatal ICU, Specimen storage</li>
                <li>Access validation requires temporal + spatial sync with badge system: If badge swipe occurs, but person doesn&apos;t enter within 15 sec → flagged as badge sharing, If person enters without swipe → tailgating alert</li>
                <li>Alerts trigger live video pop-up at central security console + lock downstream doors.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Workflow Integration</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Alerts integrated into hospital&apos;s incident management system (e.g., Qlik or custom middleware)</li>
            <li>Daily compliance scorecards auto-generated for department heads</li>
            <li>Audit prep time reduced from 2–3 days to &lt;4 hours</li>
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Impact Summary</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Near real-time correction of hygiene lapses eliminated repeat violations</li>
            <li>Patient flow became predictable, enabling better shift planning and resource forecasting</li>
            <li>Regulatory audit findings related to staff conduct and access control dropped to zero</li>
            <li>ROI attained in under 8 months, primarily via reduced incident reporting burden and improved bed turnover</li>
          </ul>
        </div>
      </div>
    </section>
    <Footer />
    </div>
  );
}

