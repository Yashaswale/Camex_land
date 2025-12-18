export default function SecuredPerimeterCaseStudy() {
    return (
      <section className="bg-black text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-8">
            <a href="/" className="hover:text-white">Home</a>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            <span>Case Study</span>
          </div>
          <p className="text-gray-400 text-sm mb-3">CASE STUDY</p>
  
          <h1 className="text-4xl font-bold mb-6">
            Secured Perimeter with Real-Time Alerts
          </h1>
  
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <img
              src="https://images.pexels.com/photos/2252619/pexels-photo-2252619.jpeg"
              className="rounded-xl col-span-1"
            />
            <img
              src="https://images.pexels.com/photos/3770580/pexels-photo-3770580.jpeg"
              className="rounded-xl col-span-1"
            />
            <img
              src="https://images.pexels.com/photos/3194524/pexels-photo-3194524.jpeg"
              className="rounded-xl col-span-1"
            />
          </div>
  
          <p className="text-gray-400 mb-8 leading-relaxed">
            Securing large facilities such as logistics hubs, industrial plants,
            airports, and restricted zones has traditionally relied on physical
            guards and reactive CCTV monitoring. These methods often fail to detect
            threats early, resulting in delayed response times and increased risk.
          </p>
  
          <h2 className="text-2xl font-semibold mb-4">
            Why Perimeter Security Needed an Upgrade
          </h2>
  
          <ul className="list-disc list-inside text-gray-400 mb-10 space-y-2">
            <li>Unauthorized access and tailgating incidents</li>
            <li>Manual monitoring of multiple CCTV feeds</li>
            <li>Delayed alerts during intrusion attempts</li>
            <li>High dependency on on-ground manpower</li>
          </ul>
  
          <h2 className="text-2xl font-semibold mb-4">
            How Camex AI Solved It
          </h2>
  
          <p className="text-gray-400 leading-relaxed">
            Camex AI analyzed live CCTV feeds using computer vision to detect
            intrusion attempts, loitering, boundary breaches, and suspicious
            movement in real time. Automated alerts were sent instantly to control
            rooms, enabling faster and more accurate response.
          </p>
        </div>
      </section>
    );
  }
  