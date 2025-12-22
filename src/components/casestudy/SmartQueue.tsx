import { Link } from 'react-router-dom';

export default function SmartQueue() {
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
          Smart Queue Analytics for Retail
        </h1>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <img
            src="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800"
            className="rounded-xl"
            alt="Retail store queue"
          />
          <img
            src="https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg?auto=compress&cs=tinysrgb&w=800"
            className="rounded-xl"
            alt="Store checkout queue"
          />
          <img
            src="https://images.pexels.com/photos/3737615/pexels-photo-3737615.jpeg?auto=compress&cs=tinysrgb&w=800"
            className="rounded-xl"
            alt="Queue analytics"
          />
        </div>

        <p className="text-gray-400 mb-8 leading-relaxed">
          Long queues and inefficient staff allocation directly impact customer
          experience and store revenue. Traditional observation-based methods
          lack real-time accuracy and scalability.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          Challenges Faced by Retailers
        </h2>

        <ul className="list-disc list-inside text-gray-400 mb-10 space-y-2">
          <li>Unpredictable queue buildup</li>
          <li>Manual staff reallocation</li>
          <li>Customer dissatisfaction due to long waits</li>
          <li>Lack of real-time store insights</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">
          Impact of Camex AI
        </h2>

        <p className="text-gray-400 leading-relaxed">
          Camex AI used existing CCTV cameras to track queue lengths, customer
          flow, and waiting time in real time. The system enabled data-driven
          staffing decisions, reduced congestion, and improved customer
          satisfaction across stores.
        </p>
      </div>
    </section>
  );
}

