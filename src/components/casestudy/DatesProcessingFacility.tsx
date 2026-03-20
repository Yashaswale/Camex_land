// import { Link } from 'react-router-dom';
// import Navigation from '../Navigation';
// import Footer from '../Footer';

// export default function DatesProcessingFacility() {
//   return (
//     <div className="min-h-screen bg-black">
//       <Navigation />

//       <section className="bg-black text-white py-20 pt-24">
//         <div className="max-w-6xl mx-auto px-6">

//           {/* Breadcrumb */}
//           <div className="flex items-center gap-2 text-gray-400 text-sm mb-8">
//             <Link to="/" className="hover:text-white">Home</Link>
//             <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//             </svg>
//             <span>Case Study</span>
//           </div>

//           {/* Header */}
//           <p className="text-gray-400 text-sm mb-3 uppercase tracking-wider">CASE STUDY</p>
//           <h1 className="text-4xl font-bold mb-4">Dates Processing Facility</h1>
//           <p className="text-gray-400 text-sm mb-14">Abu Dhabi Region</p>

//           {/* Operational Context */}
//           <div className="mb-10 max-w-3xl">
//             <h2 className="text-2xl font-semibold mb-4">Operational Context</h2>
//             <p className="text-gray-400 leading-relaxed">
//               High-speed production line handling 20+ date varieties under strict GFSI and HACCP
//               requirements. Seasonal workforce expansion increased hygiene risk and required
//               continuous, objective monitoring.
//             </p>
//           </div>

//           {/* Image 1 – Facility Overview */}
//           <div className="mb-16 flex justify-center">
//             <img
//               src="https://images.pexels.com/photos/2252619/pexels-photo-2252619.jpeg?auto=compress&cs=tinysrgb&w=1200"
//               alt="Food processing facility overview"
//               className="w-full max-w-4xl h-[300px] object-cover rounded-xl"
//             />
//           </div>

//           {/* AI Use Cases */}
//           <div className="mb-12 max-w-4xl">
//             <h2 className="text-2xl font-semibold mb-8">AI Use Cases</h2>

//             <div className="mb-12">
//               <h3 className="text-xl font-semibold mb-3">
//                 Hygiene Gatekeeping at Zone Transitions
//               </h3>
//               <ul className="list-disc list-inside text-gray-400 space-y-2">
//                 <li>Monitors critical transitions between raw, grading, and packaging zones</li>
//                 <li>Verifies hairnets, gloves, beard nets, and PPE integrity</li>
//                 <li>Non-compliance triggers alerts, visual stop overlays, and logs</li>
//               </ul>
//             </div>

//             <div className="mb-12">
//               <h3 className="text-xl font-semibold mb-3">
//                 Handwashing Verification (Behavior-Level)
//               </h3>
//               <ul className="list-disc list-inside text-gray-400 space-y-2">
//                 <li>Validates WHO 6-step handwashing technique</li>
//                 <li>Enforces minimum duration thresholds</li>
//                 <li>Produces team-level retraining insights</li>
//               </ul>
//             </div>
//           </div>

//           {/* Image 2 – Hygiene & QA */}
//           <div className="mb-16 flex justify-center">
//             <img
//               src="https://images.pexels.com/photos/3194524/pexels-photo-3194524.jpeg?auto=compress&cs=tinysrgb&w=1200"
//               alt="Quality assurance and hygiene compliance"
//               className="w-full max-w-4xl h-[280px] object-cover rounded-xl"
//             />
//           </div>

//           {/* Advanced Detection */}
//           <div className="mb-12 max-w-4xl">
//             <h3 className="text-xl font-semibold mb-3">
//               Foreign Object Detection on Conveyors
//             </h3>
//             <ul className="list-disc list-inside text-gray-400 space-y-2">
//               <li>High-resolution cameras monitor sorting belts</li>
//               <li>Detects stones, insects, plastic, metal, and anomalies</li>
//               <li>Auto pause and operator validation on detection</li>
//             </ul>
//           </div>

//           {/* Image 3 – Conveyor Inspection */}
//           <div className="mb-16 flex justify-center">
//             <img
//               src="https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg?auto=compress&cs=tinysrgb&w=1200"
//               alt="Conveyor belt inspection system"
//               className="w-full max-w-4xl h-[280px] object-cover rounded-xl"
//             />
//           </div>

//           {/* Workflow Integration */}
//           <div className="mb-14 max-w-4xl">
//             <h2 className="text-2xl font-semibold mb-4">Workflow Integration</h2>
//             <ul className="list-disc list-inside text-gray-400 space-y-2">
//               <li>Live hygiene scores displayed on floor dashboards</li>
//               <li>Automated QA reports highlight high-risk shifts</li>
//               <li>One-click compliance exports for audits</li>
//             </ul>
//           </div>

//           {/* Impact Summary */}
//           <div className="mb-8 max-w-4xl">
//             <h2 className="text-2xl font-semibold mb-4">Impact Summary</h2>
//             <ul className="list-disc list-inside text-gray-400 space-y-2">
//               <li>Hygiene compliance became objective and measurable</li>
//               <li>Reduction in contamination-related rework</li>
//               <li>Audit readiness improved significantly</li>
//               <li>ROI achieved within ~6 months</li>
//             </ul>
//           </div>

//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }
