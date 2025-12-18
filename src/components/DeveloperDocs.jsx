export default function DeveloperDocs() {
    return (
      <section className="bg-black text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
<div className="flex items-center gap-2 text-gray-400 text-sm mb-8">
            <a href="/" className="hover:text-white">Home</a>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            <span>Developer Docs</span>
          </div>
          <p className="text-gray-400 text-sm uppercase tracking-wider mb-3">
            Developer Docs
          </p>
          <h1 className="text-4xl font-bold mb-6">
            Camera Integration & AI Processing Guide
          </h1>
          <p className="text-gray-400 text-lg mb-14">
            Learn how to connect your cameras, configure streams, define zones, and
            understand how Camex AI processes video data in real time.
          </p>
  
          {/* Section 1 */}
          <h2 className="text-2xl font-semibold mb-4">
            1. How to Set Up a Camera
          </h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Camex AI works with most IP cameras that support RTSP streaming.
            Existing CCTV infrastructure can be used without replacing hardware.
          </p>
  
          <ol className="list-decimal list-inside text-gray-400 space-y-2 mb-12">
            <li>Ensure your camera is powered and connected to the network.</li>
            <li>Assign a static IP address to the camera (recommended).</li>
            <li>Enable RTSP streaming from the camera settings.</li>
            <li>Note down the username, password, IP, and port.</li>
            <li>Add the RTSP URL to the Camex dashboard.</li>
          </ol>
  
          {/* Section 2 */}
          <h2 className="text-2xl font-semibold mb-4">
            2. What is an RTSP URL?
          </h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            RTSP (Real-Time Streaming Protocol) is used to stream live video from
            IP cameras to external systems like Camex AI. It allows real-time
            video access without storing footage locally.
          </p>
  
          <div className="bg-[#0F1F3A] border border-gray-800 rounded-lg p-6 mb-12">
            <p className="text-gray-300 font-medium mb-2">RTSP URL Format:</p>
            <code className="text-blue-400 text-sm break-all">
              rtsp://username:password@camera-ip:port/stream-path
            </code>
          </div>
  
          {/* Section 3 */}
          <h2 className="text-2xl font-semibold mb-4">
            3. How to Generate RTSP URL from Your Camera
          </h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Each camera brand has a slightly different RTSP path, but the process
            is generally the same.
          </p>
  
          <ol className="list-decimal list-inside text-gray-400 space-y-2 mb-12">
            <li>Log in to your camera’s web interface.</li>
            <li>Navigate to Network or Streaming settings.</li>
            <li>Enable RTSP or Live Stream access.</li>
            <li>Copy the RTSP stream path provided.</li>
            <li>Combine it with IP, port, username, and password.</li>
          </ol>
  
          {/* Section 4 */}
          <h2 className="text-2xl font-semibold mb-4">
            4. Adding Camera to Camex Dashboard
          </h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Once you have the RTSP URL, adding the camera to Camex is straightforward.
          </p>
  
          <ol className="list-decimal list-inside text-gray-400 space-y-2 mb-12">
            <li>Open the Camex Admin Dashboard.</li>
            <li>Navigate to Cameras → Add Camera.</li>
            <li>Paste the RTSP URL.</li>
            <li>Select camera type (indoor, outdoor, entry, queue, etc.).</li>
            <li>Save and verify live stream preview.</li>
          </ol>
  
          {/* Section 5 */}
          <h2 className="text-2xl font-semibold mb-4">
            5. Creating Zones in a Camera
          </h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Zones allow Camex AI to focus analysis on specific areas such as entry
            points, queues, restricted zones, or exits.
          </p>
  
          <ol className="list-decimal list-inside text-gray-400 space-y-2 mb-12">
            <li>Select a camera from the dashboard.</li>
            <li>Open Zone Configuration.</li>
            <li>Draw zones directly on the video frame.</li>
            <li>Assign zone purpose (Crowd, Queue, Restricted, Exit).</li>
            <li>Save and activate zone analytics.</li>
          </ol>
  
          {/* Section 6 */}
          <h2 className="text-2xl font-semibold mb-4">
            6. How AI Models Process Camera Streams
          </h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Camex AI processes video streams in real time using optimized computer
            vision models deployed at the edge or server level.
          </p>
  
          <ul className="list-disc list-inside text-gray-400 space-y-2 mb-12">
            <li>Frames are sampled from live RTSP streams.</li>
            <li>AI models detect people, movement, and objects.</li>
            <li>Behavioral patterns are analyzed over time.</li>
            <li>Events and anomalies are identified instantly.</li>
            <li>Alerts and insights are generated automatically.</li>
          </ul>
  
          {/* Section 7 */}
          <h2 className="text-2xl font-semibold mb-4">
            7. Supported AI Use Cases
          </h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2 mb-12">
            <li>Crowd density monitoring</li>
            <li>Queue length and waiting time analysis</li>
            <li>Intrusion and perimeter breach detection</li>
            <li>Loitering and unusual behavior detection</li>
            <li>Heatmaps and movement analytics</li>
          </ul>
  
          {/* Section 8 */}
          <h2 className="text-2xl font-semibold mb-4">
            8. Security & Privacy Considerations
          </h2>
          <p className="text-gray-400 leading-relaxed mb-12">
            Camex AI does not store raw video by default. Only metadata, alerts,
            and analytics are retained. All streams are encrypted and processed
            according to enterprise security standards.
          </p>
  
          {/* Footer CTA */}
          <div className="mt-16 p-8 rounded-xl bg-[#0F1F3A] border border-gray-800">
            <h3 className="text-2xl font-semibold mb-3">
              Need Advanced Integration?
            </h3>
            <p className="text-gray-400">
              Contact our engineering team for SDK access, custom model deployment,
              or on-premise setup guidance.
            </p>
          </div>
        </div>
      </section>
    );
  }
  