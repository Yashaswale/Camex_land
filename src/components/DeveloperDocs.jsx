import { useModal } from '../contexts/ModalContext';

export default function DeveloperDocs() {
    const { openModal } = useModal();
    
    return (
      <section className="bg-black text-white py-12 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Header */}
        <div className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm mb-6 sm:mb-8">
            <a href="/" className="hover:text-white">Home</a>
            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            <span>Developer Docs</span>
          </div>
          <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3">
            Developer Docs
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Camera Integration & AI Processing Guide
          </h1>
          <p className="text-gray-400 text-base sm:text-lg mb-10 sm:mb-14">
            Learn how to connect your cameras, configure streams, define zones, and
            understand how Camex AI processes video data in real time.
          </p>
  
          {/* Section 1 */}
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
            1. How to Set Up a Camera
          </h2>
          <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
            Camex AI works with most IP cameras that support RTSP streaming.
            Existing CCTV infrastructure can be used without replacing hardware.
          </p>
  
          <ol className="list-decimal list-inside text-gray-400 space-y-2 mb-8 sm:mb-12 text-sm sm:text-base">
            <li>Ensure your camera is powered and connected to the network.</li>
            <li>Assign a static IP address to the camera (recommended).</li>
            <li>Enable RTSP streaming from the camera settings.</li>
            <li>Note down the username, password, IP, and port.</li>
            <li>Add the RTSP URL to the Camex dashboard.</li>
          </ol>
  
          {/* Section 2 */}
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
            2. What is an RTSP URL?
          </h2>
          <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
            RTSP (Real-Time Streaming Protocol) is used to stream live video from
            IP cameras to external systems like Camex AI. It allows real-time
            video access without storing footage locally.
          </p>
  
          <div className="bg-[#0F1F3A] border border-gray-800 rounded-lg p-4 sm:p-6 mb-8 sm:mb-12">
            <p className="text-gray-300 font-medium mb-2 text-sm sm:text-base">RTSP URL Format:</p>
            <code className="text-blue-400 text-xs sm:text-sm break-all">
              rtsp://username:password@camera-ip:port/stream-path
            </code>
          </div>
  
          {/* Section 3 */}
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
            3. How to Generate RTSP URL from Your Camera
          </h2>
          <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
            Each camera brand has a slightly different RTSP path, but the process
            is generally the same.
          </p>
  
          <ol className="list-decimal list-inside text-gray-400 space-y-2 mb-8 sm:mb-12 text-sm sm:text-base">
            <li>Log in to your camera’s web interface.</li>
            <li>Navigate to Network or Streaming settings.</li>
            <li>Enable RTSP or Live Stream access.</li>
            <li>Copy the RTSP stream path provided.</li>
            <li>Combine it with IP, port, username, and password.</li>
          </ol>
  
          {/* Section 4 */}
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
            4. Adding Camera to Camex Dashboard
          </h2>
          <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
            Once you have the RTSP URL, adding the camera to Camex is straightforward.
          </p>
  
          <ol className="list-decimal list-inside text-gray-400 space-y-2 mb-8 sm:mb-12 text-sm sm:text-base">
            <li>Open the Camex Admin Dashboard.</li>
            <li>Navigate to Cameras → Add Camera.</li>
            <li>Paste the RTSP URL.</li>
            <li>Select camera type (indoor, outdoor, entry, queue, etc.).</li>
            <li>Save and verify live stream preview.</li>
          </ol>
  
          {/* Section 5 */}
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
            5. Creating Zones in a Camera
          </h2>
          <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
            Zones allow Camex AI to focus analysis on specific areas such as entry
            points, queues, restricted zones, or exits.
          </p>
  
          <ol className="list-decimal list-inside text-gray-400 space-y-2 mb-8 sm:mb-12 text-sm sm:text-base">
            <li>Select a camera from the dashboard.</li>
            <li>Open Zone Configuration.</li>
            <li>Draw zones directly on the video frame.</li>
            <li>Assign zone purpose (Crowd, Queue, Restricted, Exit).</li>
            <li>Save and activate zone analytics.</li>
          </ol>
  
          {/* Section 6 */}
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
            6. How AI Models Process Camera Streams
          </h2>
          <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
            Camex AI processes video streams in real time using optimized computer
            vision models deployed at the edge or server level.
          </p>
  
          <ul className="list-disc list-inside text-gray-400 space-y-2 mb-8 sm:mb-12 text-sm sm:text-base">
            <li>Frames are sampled from live RTSP streams.</li>
            <li>AI models detect people, movement, and objects.</li>
            <li>Behavioral patterns are analyzed over time.</li>
            <li>Events and anomalies are identified instantly.</li>
            <li>Alerts and insights are generated automatically.</li>
          </ul>
  
          {/* Section 7 */}
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
            7. Supported AI Use Cases
          </h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2 mb-8 sm:mb-12 text-sm sm:text-base">
            <li>Crowd density monitoring</li>
            <li>Queue length and waiting time analysis</li>
            <li>Intrusion and perimeter breach detection</li>
            <li>Loitering and unusual behavior detection</li>
            <li>Heatmaps and movement analytics</li>
          </ul>
  
          {/* Section 8 */}
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
            8. Security & Privacy Considerations
          </h2>
          <p className="text-gray-400 leading-relaxed mb-8 sm:mb-12 text-sm sm:text-base">
            Camex AI does not store raw video by default. Only metadata, alerts,
            and analytics are retained. All streams are encrypted and processed
            according to enterprise security standards.
          </p>

          {/* FAQ Section */}
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 mt-12 sm:mt-16">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-12">
            {/* Question 1 */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white">
                1. What camera models and protocols does Camex support?
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Camex supports most standard IP cameras using RTSP (H.264/H.265), ONVIF Profile S, and HTTP/MJPEG streams. It works with major brands including Hikvision, Dahua, Axis, Bosch, and Hanwha. A full compatibility list is available in the Developer Portal and is updated quarterly. Cameras must provide an open RTSP or ONVIF interface proprietary SDK-based models are not supported.
              </p>
            </div>

            {/* Question 2 */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white">
                2. Can Camex connect to NVRs or DVRs instead of individual cameras?
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Yes. Camex can ingest video directly from NVRs or DVRs via RTSP streams or ONVIF discovery. When using ONVIF, it can retrieve individual camera streams through the NVR, preserving per-camera analytics. Stream health is monitored continuously, and automatic reconnection is handled with exponential backoff. For mission-critical deployments, direct camera access is recommended for lower latency and higher reliability.
              </p>
            </div>

            {/* Question 3 */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white">
                3. How can I integrate Camex alerts into third-party systems?
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Camex offers webhook, REST API, and MQTT integrations for real-time event delivery. Alerts include structured JSON payloads with event type, camera ID, zone, confidence score, and snapshot links. Pre-built connectors are available for ServiceNow, Bosch Building Integration, LenelS2 OnGuard, Splunk, and QRadar. Custom integrations can be developed using our Python or Node.js SDK.
              </p>
            </div>

            {/* Question 4 */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white">
                4. Does Camex provide an API for real-time and historical data?
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Yes. The Camex REST API supports real-time event streaming via WebSockets or Server-Sent Events, and historical data retrieval via standard HTTP endpoints. Responses include full metadata timestamps, camera info, object tracking IDs, bounding boxes, and attributes. Data can be exported in JSON, CSV, or NDJSON formats. Authentication uses OAuth2 or API keys, with rate limits adjustable per plan.
              </p>
            </div>

            {/* Question 5 */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white">
                5. Can I use my own AI model with Camex?
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Yes. Camex supports custom models in TensorFlow (SavedModel, TFLite), PyTorch (TorchScript), ONNX, and compiled C++ libraries. Models must accept RGB frames as input and return detections in a standard format (class ID, confidence, bounding box, optional attributes). You can validate, upload, and deploy models via CLI or API, and assign them to specific cameras or zones.
              </p>
            </div>

            {/* Question 6 */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white">
                6. How do I configure camera zones and geo-fences programmatically?
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Zones (polygons, rectangles, tripwires) can be created and managed using the REST API or by uploading an SVG floorplan with labeled zone layers. You can define time-based or conditional zones e.g., active only during night shifts. All events automatically include zone names and occupancy status.
              </p>
            </div>

            {/* Question 7 */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white">
                7. What metadata is included with each analytics event?
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Each event contains a timestamp, camera ID and location, object tracking ID, bounding box coordinates (normalized), confidence score, detected attributes (e.g., mask: false), zone information, dwell time, inference latency, device used, and signed URLs to snapshots or short video clips. No personally identifiable information is included by default.
              </p>
            </div>

            {/* Question 8 */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white">
                8. What hardware do I need to run Camex?
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Resource usage depends on the analytics enabled. For example, people counting uses ~1 GB RAM and minimal CPU/GPU, while full PPE detection on 1080p video uses ~2.5 GB RAM and moderate GPU load. As a guideline: a Jetson AGX Orin can handle up to 6 streams, an Intel NUC up to 8, and a server with a mid-tier GPU up to 40+. A built-in benchmark tool helps estimate requirements for your specific setup.
              </p>
            </div>

            {/* Question 9 */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white">
                9. How does Camex perform in crowded scenes?
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Camex automatically adjusts in high-density environments—reducing frame rate, focusing on active regions, or switching to group-level analytics (e.g., density heatmaps instead of individual tracking) to maintain responsiveness. Safety-critical detections (e.g., falls, loitering) are always prioritized. The system has been tested in scenes with over 200 people and maintains stable performance.
              </p>
            </div>

            {/* Question 10 */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white">
                10. Can Camex work in a distributed edge-and-cloud setup?
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Yes. Camex is designed for hybrid deployments: analytics run locally on edge devices (keeping video on-premise), while anonymized metadata is securely sent to a central dashboard for cross-site reporting and management. The system works fully offline and syncs when connectivity resumes. Cloud components can be hosted in UAE data centers if required.
              </p>
            </div>

            {/* Question 11 */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white">
                11. How does Camex comply with UAE data and privacy laws?
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Camex supports full on-premise deployment with no external data transfer. Video and metadata stay within your network unless you explicitly enable cloud sync and even then, only anonymized metadata is shared. Face blurring is applied by default to snapshots and clips. The platform helps meet ADHICS, DHA, and UAE PDPL requirements, and documentation includes a compliance self-assessment guide.
              </p>
            </div>

            {/* Question 12 */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white">
                12. What anonymization is applied by default?
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                By default, Camex blurs faces and license plates in all event snapshots and video clips. Raw video retention is configurable (1–30 days), and you can disable video storage entirely keeping only metadata. No biometric identification (e.g., facial recognition) is performed unless explicitly enabled and legally justified. All anonymization happens on the edge device.
              </p>
            </div>

            {/* Question 13 */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white">
                13. Are models trained for UAE environments? Can I improve them with my data?
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Yes. Base models include training on regional imagery covering local clothing, lighting conditions, and environments to improve accuracy. You can further fine-tune models using your own anonymized footage. Camex provides tools to collect, label, and retrain models on-site without sending raw video externally.
              </p>
            </div>

            {/* Question 14 */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white">
                14. Can I create custom alert rules?
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Yes. Using a visual rule builder or simple YAML/JSON scripts, you can define multi-condition rules e.g., &quot;If PPE violation occurs in the pharmacy between 8 AM and 6 PM, send an SMS and create a ServiceNow ticket.&quot; Rules support time windows, repetition thresholds, and external data lookups. They update instantly without restarting the system.
              </p>
            </div>

            {/* Question 15 */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white">
                15. How are updates delivered and managed?
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Updates for security, models, and platform features are delivered over-the-air. You control the policy: auto-apply critical patches, approve updates manually, or schedule them during maintenance windows. Rollouts are phased and monitored automatically rolling back if issues are detected. For air-gapped sites, offline update packages are available.
              </p>
            </div>
          </div>
  
          {/* Footer CTA */}
          <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-xl bg-[#0F1F3A] border border-gray-800">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">
              Need Advanced Integration?
            </h3>
            <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
              Contact our engineering team for SDK access, custom model deployment,
              or on-premise setup guidance.
            </p>
            <button
              onClick={openModal}
              className="inline-block w-full sm:w-auto text-center px-6 sm:px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-all shadow-lg shadow-blue-500/30 text-sm sm:text-base"
            >
              Book Now
            </button>
          </div>
        </div>
      </section>
    );
  }
  