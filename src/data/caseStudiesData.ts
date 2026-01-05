import { CaseStudyData } from '../types/caseStudy';

export const caseStudiesData: Record<string, CaseStudyData> = {
  'intelligent-crowd-management': {
    slug: 'intelligent-crowd-management',
    title: 'Intelligent Crowd Management at Scale',
    location: undefined,
    operationalContext:
      'Managing large crowds has always been a challenge — from metro stations and airports to stadiums, festivals, malls, religious gatherings, political events, and public transport hubs. Traditional crowd management relies on manual monitoring, mobile radios, CCTV operators, and on-ground staff. But as crowds grow and urban spaces get denser, old methods can\'t keep up. Today, AI-powered intelligent Crowd Management is transforming how cities, organizations, and event managers predict, monitor, and control crowd movement — at massive scale and with unmatched accuracy.',
    images: {
      layout: 'grid',
      items: [
        {
          url: 'https://images.pexels.com/photos/2422294/pexels-photo-2422294.jpeg?auto=compress&cs=tinysrgb&w=600',
          alt: 'Crowd management 1',
        },
        {
          url: 'https://images.pexels.com/photos/3651375/pexels-photo-3651375.jpeg?auto=compress&cs=tinysrgb&w=600',
          alt: 'Crowd management 2',
        },
        {
          url: 'https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&w=600',
          alt: 'Crowd management 3',
        },
      ],
    },
    aiUseCases: [
      {
        title: 'Real-Time Crowd Density Monitoring',
        points: [
          'AI analyzes live video feeds to detect crowd count, flow direction, bottlenecks, queue lengths',
          'Helps prevent congestion before it gets dangerous',
        ],
      },
      {
        title: 'Predictive Crowd Behavior Analytics',
        points: [
          'AI forecasts upcoming crowd movements based on historical data, entry/exit rates, time of day, and live density patterns',
          'Allows proactive planning rather than reactive management',
        ],
      },
      {
        title: 'Automated Alerts & Incident Detection',
        points: [
          'Instant notifications are sent when density crosses safe limit, unusual movement patterns occur, object is abandoned, aggressive behavior is detected, or emergency exits are blocked',
        ],
      },
      {
        title: 'Heatmaps for Better Decision-Making',
        points: [
          'Heatmaps display crowd hotspots, helping redirect people to safer zones, optimize staff deployment, and improve infrastructure layout',
        ],
      },
      {
        title: 'Seamless Integration With Existing CCTV',
        points: [
          'AI works with existing camera networks — no need for expensive hardware upgrades',
        ],
      },
    ],
    workflowIntegration: [
      'Works with city infrastructure and public safety systems',
      'Real-time dashboards for authorities and event managers',
      'Instant escalations for crowd and safety anomalies',
    ],
    impactSummary: [
      'Incidents pre-empted in high-density zones',
      'Operational cost savings from reduced manual security',
      'City and venue reputation safeguarded',
      'Improved attendee experience and safety',
    ],
  },
  'dates-processing-facility': {
    slug: 'dates-processing-facility',
    title: 'Dates Processing Facility',
    location: 'Abu Dhabi Region',
    operationalContext:
      'High-speed production line handling 20+ date varieties under strict GFSI and HACCP requirements. Seasonal workforce expansion increased hygiene risk and required continuous, objective monitoring.',
    images: {
      layout: 'grid',
      items: [
        {
          url: '/case_study/dates_processing.png',
          alt: 'Food processing facility overview',
        },
        {
          url: 'https://images.pexels.com/photos/3194524/pexels-photo-3194524.jpeg?auto=compress&cs=tinysrgb&w=800',
          alt: 'Quality assurance and hygiene compliance',
        },
        {
          url: 'https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg?auto=compress&cs=tinysrgb&w=800',
          alt: 'Conveyor belt inspection system',
        },
      ],
    },
    aiUseCases: [
      {
        title: 'Hygiene Gatekeeping at Zone Transitions',
        points: [
          'Monitors critical transitions between raw, grading, and packaging zones',
          'Verifies hairnets, gloves, beard nets, and PPE integrity',
          'Non-compliance triggers alerts, visual stop overlays, and logs',
        ],
      },
      {
        title: 'Handwashing Verification (Behavior-Level)',
        points: [
          'Validates WHO 6-step handwashing technique',
          'Enforces minimum duration thresholds',
          'Produces team-level retraining insights',
        ],
      },
      {
        title: 'Foreign Object Detection on Conveyors',
        points: [
          'High-resolution cameras monitor sorting belts',
          'Detects stones, insects, plastic, metal, and anomalies',
          'Auto pause and operator validation on detection',
        ],
      },
    ],
    workflowIntegration: [
      'Live hygiene scores displayed on floor dashboards',
      'Automated QA reports highlight high-risk shifts',
      'One-click compliance exports for audits',
    ],
    impactSummary: [
      'Hygiene compliance became objective and measurable',
      'Reduction in contamination-related rework',
      'Audit readiness improved significantly',
      'ROI achieved within ~6 months',
    ],
  },
  'urban-pharmacy': {
    slug: 'urban-pharmacy',
    title: 'Urban Pharmacy',
    location: 'Dubai',
    operationalContext:
      'High-footfall location in residential-commercial mix, balancing prescription accuracy, OTC availability, and controlled substance security with limited staff.',
    images: {
      layout: 'grid',
      items: [
        {
          url: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800',
          alt: 'Pharmacy interior',
        },
        {
          url: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800',
          alt: 'Pharmacy counter',
        },
        {
          url: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800',
          alt: 'Pharmacy service',
        },
      ],
    },
    aiUseCases: [
      {
        title: 'Controlled Substance Access Integrity Protocol',
        points: [
          'Narcotics cabinet equipped with: Dual-camera view (front + top-down), Integration with electronic lock & access log system',
          'AI verifies: Who: Detects face region (non-identifying, used for liveness only, not recognition), confirms it matches badge holder via temporal sync (±5 sec window), What: Monitors drawer opening, item removal (via motion trajectory), and dose logging on terminal, How many: Validates quantity removed vs. system-authorized prescription',
          'Mismatches trigger: Cabinet auto-lock, Red alert to pharmacy manager + security, Video clip archived with audit trail',
        ],
      },
      {
        title: 'Queue Intelligence with Predictive Load Balancing',
        points: [
          'Two streams monitored: Prescription queue: Guests waiting for script fulfillment, OTC service queue: Customers seeking advice or high-value items',
          'Estimated wait = (current queue length × avg. service time) + buffer',
          'When threshold breached, system recommends: Activate "express refill" counter, Redirect pharmacist assistant from inventory to front, Send SMS: "Your wait is ~7 mins, reply YES for curbside pickup"',
          'Historical trends used to forecast daily peaks, informs staff rostering.',
        ],
      },
      {
        title: 'Shelf-Out-of-Stock Visual Detection',
        points: [
          'Cameras with fixed view of top-selling shelves (e.g., pain relief, antihistamines, vitamins).',
          'AI trained on SKU-level packaging (logo, color, shape) to detect: Empty front-facing slots, Stock pushed to back (common during rush), Misplaced items (e.g., generic in branded slot)',
          'Alert severity based on sales velocity: High-velocity item out of stock → immediate alert, Low-velocity → included in end-of-day restock list',
          'Integration with inventory system auto-generates pick list for backroom.',
        ],
      },
      {
        title: 'Staff Utilization & Task Matching',
        points: [
          'Tracks each staff member via uniform + role badge region.',
          'Classifies activity state every 15 sec: Active service (interacting with customer), Processing (at POS, compounding), Idle (standing, phone use >90 sec), Transition (walking between zones)',
          'During peak, idle staff >2 mins → suggestion: "Reassign Sarah to OTC counter, 4 customers waiting"',
        ],
      },
    ],
    workflowIntegration: [
      'Manager dashboard shows real-time "service health score"',
      'End-of-day report: top stockouts, peak wait times, staff utilization variance',
      'Alerts feed into staff performance reviews (constructive, not punitive)',
    ],
    impactSummary: [
      'Security of controlled substances became auditable and tamper-evident',
      'Customer experience stabilized, no more "out of stock" or "long wait" surprises',
      'Staff felt empowered by real-time support, not micromanaged',
      'ROI achieved in under 6 months, via loss prevention and increased OTC sales capture',
    ],
  },
  'multi-specialty-hospital': {
    slug: 'multi-specialty-hospital',
    title: 'Multi-Specialty Hospital',
    location: 'Abu Dhabi',
    operationalContext:
      'A 300+ bed facility serving high-acuity cases, with recurring challenges in emergency department (ED) throughput, infection control compliance (especially among rotating contractors), and audit readiness for regulatory bodies (DHA, CAP, JCI).',
    images: {
      layout: 'grid',
      items: [
        {
          url: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg',
          alt: 'Hospital facility',
        },
        {
          url: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg',
          alt: 'Hospital corridor',
        },
        {
          url: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg',
          alt: 'Medical facility',
        },
      ],
    },
    aiUseCases: [
      {
        title: 'PPE Detection with Role-Aware Context',
        points: [
          'Over 50 cameras cover clinical zones, sterilization units, labs, and corridors.',
          'AI model uses multi-label classification + instance segmentation to identify: Mask (surgical vs. N95, proper fit), Gloves (presence, color-coded by zone: blue for general, purple for chemo), Gown (tied vs. open, fluid-resistant type in ICUs), Hairnet/beard net (mandatory in OR prep, labs)',
          'Role inference is enabled via: Uniform color/pattern recognition (e.g., white coat = doctor, teal scrubs = nurse, gray = engineering), Badge region detection (non-PII, only verifies presence, not identity)',
          'Alerts are tiered: Level 1 (immediate): Missing mask in OR corridor → SMS + siren at nearest nursing station, Level 2 (corrective): Untied gown in lab → log for supervisor review at shift end',
          'All violations auto-logged with timestamp, camera ID, zone, and frame snippet, used in daily safety huddles.',
        ],
      },
      {
        title: 'Queue & Patient Flow Analytics',
        points: [
          'Cameras at registration, triage, consultation rooms, and pharmacy windows.',
          'AI reconstructs patient journey paths using re-identification (non-biometric, appearance-based tracking across zones).',
          'Key triggers: Dwell >15 mins at triage without nurse interaction → alert to charge nurse, 3 patients waiting at pharmacy for >8 mins → triggers "express lane" activation',
          'Integration with EMR allows correlation: high-dwell patients flagged for social worker/interpreter support.',
        ],
      },
      {
        title: 'Staff-to-Patient Ratio Guardian',
        points: [
          'In critical care units, virtual zones are defined per room or bay.',
          'Simultaneous detection of clinical staff (via uniform + stethoscope/glove cues) and patients.',
          'Ratio thresholding (e.g., 1:2 in ICU, 1:4 in general wards) enforced in real time.',
          'If ratio breached >90 seconds, alert sent to charge nurse and backup staff pool.',
        ],
      },
      {
        title: 'Geo-Fenced Unauthorized Access',
        points: [
          'Virtual perimeters drawn around: Pharmacy narcotics cabinet, Data server room, Neonatal ICU, Specimen storage',
          'Access validation requires temporal + spatial sync with badge system: If badge swipe occurs, but person doesn\'t enter within 15 sec → flagged as badge sharing, If person enters without swipe → tailgating alert',
          'Alerts trigger live video pop-up at central security console + lock downstream doors.',
        ],
      },
    ],
    workflowIntegration: [
      'Alerts integrated into hospital\'s incident management system (e.g., Qlik or custom middleware)',
      'Daily compliance scorecards auto-generated for department heads',
      'Audit prep time reduced from 2–3 days to <4 hours',
    ],
    impactSummary: [
      'Near real-time correction of hygiene lapses eliminated repeat violations',
      'Patient flow became predictable, enabling better shift planning and resource forecasting',
      'Regulatory audit findings related to staff conduct and access control dropped to zero',
      'ROI attained in under 8 months, primarily via reduced incident reporting burden and improved bed turnover',
    ],
  },
  'large-retail-hypermarket': {
    slug: 'large-retail-hypermarket',
    title: 'Large Retail Hypermarket',
    location: 'Sharjah',
    operationalContext:
      'A 10,000+ sqm store with 200+ staff, facing pressure from e-commerce on margins. Key pain points: inventory shrinkage (especially high-value consumables), inconsistent customer engagement, and inefficient labor allocation during demand spikes.',
    images: {
      layout: 'grid',
      items: [
        {
          url: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800',
          alt: 'Retail hypermarket',
        },
        {
          url: 'https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg?auto=compress&cs=tinysrgb&w=800',
          alt: 'Shopping aisle',
        },
        {
          url: 'https://images.pexels.com/photos/3737615/pexels-photo-3737615.jpeg?auto=compress&cs=tinysrgb&w=800',
          alt: 'Retail store interior',
        },
      ],
    },
    aiUseCases: [
      {
        title: 'Loitering & Suspicious Behavior Engine',
        points: [
          'Not just "standing still", Camex uses behavioral state modeling:',
          'Baseline: Normal browsing (paced movement, frequent product interaction)',
          'Alert states: Repetitive revisits: Same person in same aisle >3 times in 10 mins, Concealment gestures: Hands near waist/back, bag opening near shelves, Distraction pairing: Two individuals acting in coordination (e.g., one distracts staff, other moves toward high-theft zone)',
          'Alerts sent discreetly to LP team\'s mobile app with live feed, no public alarms to avoid escalation.',
        ],
      },
      {
        title: 'Shelf Gazing & Engagement Intelligence',
        points: [
          'Cameras mounted at shelf-end gondolas.',
          'AI detects: Gaze direction via head pose estimation (not eye tracking, privacy-preserving), Interaction via hand-object proximity (e.g., picking up item, reading label), Dwell duration per SKU section',
          'High gaze + low pickup = potential issue (e.g., unclear pricing, out-of-stock behind front, poor packaging).',
          'Data fed into weekly merchandising reviews, used to validate new planograms before full rollout.',
        ],
      },
      {
        title: 'Dynamic Heatmapping for Layout Optimization',
        points: [
          'Heatmaps updated hourly, segmented by: Time of day (e.g., 9–11 AM = senior shoppers → slower movement, higher dwell in pharmacy), Day type (weekday vs. weekend vs. Ramadan evenings)',
          '"Dead zones" identified where footfall <30% of store average, triggers interventions: Feature seasonal promotions, Install demo stations or sampling kiosks, Re-route main paths via signage or displays',
        ],
      },
      {
        title: 'Staff Assistance Triggering Protocol',
        points: [
          'When customer dwell in high-value category (e.g., electronics, appliances) >2 mins without staff interaction:',
          'System checks nearest associate location (via uniform detection + zone mapping)',
          'If no staff within 10m, sends escalation alert to supervisor',
          'If staff nearby but idle >60 sec, triggers gentle reminder: "Customer waiting in Aisle 12"',
          'Post-interaction, AI verifies engagement (e.g., joint movement, pointing, transaction at POS) to close loop.',
        ],
      },
    ],
    workflowIntegration: [
      'Store manager dashboard shows real-time "engagement score" per department',
      'Daily loss prevention digest highlights top risk zones and behavior trends',
      'Staff KPIs include "assistance response rate", tied to incentive programs',
    ],
    impactSummary: [
      'Shrinkage control shifted from post-event investigation to real-time deterrence',
      'Merchandising became responsive, reducing costly layout overhauls',
      'Customer experience improved measurably in high-value categories',
      'ROI achieved in under 5 months, driven by shrink reduction and conversion uplift',
    ],
  },
  'premium-restaurant': {
    slug: 'premium-restaurant',
    title: 'Premium Restaurant',
    location: 'Dubai',
    operationalContext:
      'The venue operates across three seating zones, main dining, terrace, and bar-lounge, with high variability in demand: weekend evenings reach 100% capacity within 30 minutes of opening, while weekday lunches often run below 40% utilization. Prior to Camex, floor management relied on visual estimation and manual table cards, leading to bottlenecks at check-in, delayed table resets, and inconsistent service pacing.',
    images: {
      layout: 'grid',
      items: [
        {
          url: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800',
          alt: 'Premium restaurant interior',
        },
        {
          url: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800',
          alt: 'Restaurant dining area',
        },
        {
          url: 'https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=800',
          alt: 'Restaurant table service',
        },
      ],
    },
    aiUseCases: [
      {
        title: 'People Counting (Entry & Zonal Flow)',
        points: [
          'Cameras installed at all ingress/egress points feed into a multi-stage AI pipeline:',
          'YOLOv8-based detection identifies individuals, filtering out staff (via uniform-based classification) to count guests only.',
          'Directional flow analysis distinguishes entering vs. exiting using optical flow vectors.',
          'Dwell time computation initiates upon entry and terminates upon exit, used to calculate average visit duration and identify potential service delays (e.g., guests lingering >20 mins post-meal may indicate billing or feedback issues).',
          'Data syncs in real time with the POS and reservation system (via REST API), displaying live capacity on manager dashboards and triggering auto-adjustments (e.g., if >90% capacity projected, system recommends pausing walk-ins and prioritizing reservations).',
        ],
      },
      {
        title: 'Seat Occupancy Status Engine',
        points: [
          'Each table is geo-fenced via virtual bounding boxes calibrated for camera perspective.',
          'AI logic combines:',
          'Object permanence tracking: Detects presence/absence of chairs pulled out, place settings disturbed, or glasses moved.',
          'Human pose estimation: Confirms if seated individuals are actively dining (e.g., arms on table, facing center) vs. post-meal (leaning back, phones out).',
          'Temporal state modeling: Transitions through states, vacant → reserved (pre-set) → occupied → post-meal → cleared → reset, with SLA timers per stage (e.g., >4 mins in cleared triggers reset alert).',
          'Floor leads receive mobile push notifications when tables exceed reset SLA, with live thumbnail preview.',
        ],
      },
      {
        title: 'Heatmap & Behavioral Zoning',
        points: [
          'Hourly aggregated footfall density maps are generated using kernel density estimation (KDE), overlaid onto floor plans.',
          '"Hot zones" (e.g., near open kitchen, bar) show 3× higher dwell vs. "cold zones" (e.g., corridor-adjacent tables).',
          'Insights used to:',
          'Reposition high-margin items (e.g., premium shisha, dessert carts) toward hot zones.',
          'Adjust lighting/music zoning (e.g., increase ambiance in underperforming areas).',
          'Train hosts on strategic seating, e.g., solo diners placed in high-energy zones, families in quieter sections.',
        ],
      },
      {
        title: 'Queue Intelligence & Dynamic Intervention',
        points: [
          'A dedicated camera monitors the host stand and waiting area.',
          'Queue length is measured as number of standing guests + seated guests in waiting lounge.',
          'Estimated wait time calculated using: Real-time table turnover rate, Predicted arrivals (from reservation curve + walk-in trend)',
          'When wait >10 mins or queue >6 persons: Host receives prompt to offer welcome drinks (reducing perceived wait), SMS auto-sent to guests in queue with updated ETA, System suggests opening overflow seating (terrace/bar) with staff reassignment alert',
        ],
      },
    ],
    workflowIntegration: [
      'Dashboard accessible on tablets carried by floor supervisors',
      'Alerts integrated into staff communication app (e.g., WhatsApp Business API or Teams)',
      'Daily reports auto-emailed: peak conversion rates, zone-wise turnover, staff response KPIs',
    ],
    impactSummary: [
      'Table reset cycle time improved by over 20%, enabling more covers per service window',
      'Host decision-making shifted from reactive intuition to data-guided pacing',
      'Customer satisfaction (CSAT) scores showed marked improvement in "wait time" and "attentiveness" metrics',
      'ROI achieved in under 6 months, driven by increased throughput and reduced staff over-scheduling',
    ],
  },
  'upstream-oil-gas-facility': {
    slug: 'upstream-oil-gas-facility',
    title: 'Upstream Oil & Gas Facility',
    location: 'Abu Dhabi Region',
    operationalContext:
      'A 24/7 operational site with mixed workforce, core employees, rotating shift teams, and 100+ daily contractors. Safety culture is strong, but compliance drift occurs during night shifts and contractor onboarding surges.',
    images: {
      layout: 'grid',
      items: [
        {
          url: '/case_study/ONGC.png',
          alt: 'Oil and gas facility',
        },
        {
          url: 'https://images.pexels.com/photos/3807278/pexels-photo-3807278.jpeg?auto=compress&cs=tinysrgb&w=1200',
          alt: 'Industrial oil facility',
        },
        {
          url: 'https://images.pexels.com/photos/3807279/pexels-photo-3807279.jpeg?auto=compress&cs=tinysrgb&w=1200',
          alt: 'Oil refinery',
        },
      ],
    },
    aiUseCases: [
      {
        title: 'PPE Compliance with Zone-Specific Rules',
        points: [
          'Each operational zone has configurable PPE policies: Drilling floor: Hard hat + FR coverall + safety glasses + steel toes, Control room: Hard hat optional, but no open footwear, Lab: Lab coat + gloves + goggles',
          'AI cross-references detected items against zone rules.',
          'False-positive mitigation: Hard hat worn under hood? → detected via edge contrast analysis, Goggles pushed up on forehead? → flagged as non-compliant',
          'Alerts include severity: Yellow: Minor deviation (e.g., unzipped FR jacket) → log for coaching, Red: Critical omission (e.g., no hard hat in red zone) → immediate site-wide alert + auto-photo to supervisor',
        ],
      },
      {
        title: 'Fall & Motion Anomaly Detection',
        points: [
          'Uses 3D pose estimation + velocity profiling to detect: Sudden drop in vertical center-of-mass, Asymmetric limb movement (e.g., clutching chest, limping), Prolonged ground contact (>10 sec)',
          'In open yards, system differentiates fall from intentional crouch (e.g., inspecting equipment) using context: Is person near machinery? → likely work posture, Is person alone in transit path? → higher fall probability',
          'Confirmed incidents trigger PA announcement + GPS-tagged alert to nearest medics.',
        ],
      },
      {
        title: 'Vehicle-Pedestrian Collision Avoidance',
        points: [
          'Cameras mounted on loaders, forklifts, and yard perimeter.',
          'AI fuses: Vehicle trajectory (from motion vectors), Pedestrian path prediction (using LSTM-based forecasting)',
          'Danger zones dynamically projected around moving vehicles.',
          'If pedestrian enters predicted path <5 sec before impact: On-vehicle buzzer activated, Flashing beacon on nearest pole, Alert sent to traffic controller',
        ],
      },
      {
        title: 'Early Fire & Smoke Visual Detection',
        points: [
          'Complements traditional sensors, especially in open or ventilated zones where smoke dissipates before ion detection.',
          'Model trained on 50,000+ real & synthetic fire/smoke images under desert lighting (high glare, dust haze).',
          'Detects: Thin smoke plumes (even against bright sky), Flame flicker frequency (1–20 Hz), Thermal bloom (via color-temperature shift in visible spectrum)',
          'First-stage alert initiates: Camera PTZ auto-zoom on source, Live feed pushed to HSE + control room, PA warning: "Unverified smoke detection, Zone 4B, investigate"',
        ],
      },
    ],
    workflowIntegration: [
      'All alerts archived in safety management system (e.g., Intelex, Sphera)',
      'Weekly "Safety Pulse" reports show compliance trends by contractor company',
      'New hire onboarding includes personalized violation replay (anonymized) for training',
    ],
    impactSummary: [
      'Safety culture deepened through objective, non-punitive feedback',
      'Near-miss reporting increased (positive indicator of psychological safety)',
      'Regulatory inspection scores improved across all HSE categories',
      'ROI realized in under 4 months, via avoided incident costs and productivity continuity',
    ],
  },
  'proactive-intelligence': {
    slug: 'proactive-intelligence',
    title: 'Transforming CCTV into Proactive Intelligence',
    operationalContext:
      'Traditional CCTV systems are passive, they record footage but require human effort to extract insights. This leads to missed threats and delayed responses.',
    images: {
      layout: 'grid',
      items: [
        {
          url: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1200',
          alt: 'CCTV monitoring',
        },
        {
          url: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=1200',
          alt: 'AI intelligence',
        },
        {
          url: 'https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=1200',
          alt: 'Smart surveillance',
        },
      ],
    },
    aiUseCases: [
      {
        title: 'Limitations of Traditional CCTV',
        points: [
          'No real-time intelligence',
          'Heavy dependence on manual monitoring',
          'Reactive incident handling',
          'Limited operational insights',
        ],
      },
      {
        title: 'The Camex Transformation',
        points: [
          'Camex AI converted existing CCTV infrastructure into an intelligent system capable of detecting anomalies, generating heatmaps, and triggering alerts automatically, enabling proactive, data-driven decision-making.',
        ],
      },
    ],
    workflowIntegration: [
      'Seamless integration with existing CCTV infrastructure',
      'Real-time alerts and notifications',
      'Automated reporting and analytics',
    ],
    impactSummary: [
      'Transformed passive monitoring into proactive intelligence',
      'Reduced response time to incidents',
      'Improved operational efficiency through automated insights',
      'Enhanced security and safety outcomes',
    ],
  },
  'secured-perimeter': {
    slug: 'secured-perimeter',
    title: 'Secured Perimeter with Real-Time Alerts',
    operationalContext:
      'Securing large facilities such as logistics hubs, industrial plants, airports, and restricted zones has traditionally relied on physical guards and reactive CCTV monitoring. These methods often fail to detect threats early, resulting in delayed response times and increased risk.',
    images: {
      layout: 'grid',
      items: [
        {
          url: '/case_study/secured_perimeter.png',
          alt: 'Secured perimeter',
        },
        {
          url: 'https://images.pexels.com/photos/3860003/pexels-photo-3860003.jpeg?auto=compress&cs=tinysrgb&w=1200',
          alt: 'Security monitoring',
        },
        {
          url: 'https://images.pexels.com/photos/3860004/pexels-photo-3860004.jpeg?auto=compress&cs=tinysrgb&w=1200',
          alt: 'Perimeter security',
        },
      ],
    },
    aiUseCases: [
      {
        title: 'Why Perimeter Security Needed an Upgrade',
        points: [
          'Unauthorized access and tailgating incidents',
          'Manual monitoring of multiple CCTV feeds',
          'Delayed alerts during intrusion attempts',
          'High dependency on on-ground manpower',
        ],
      },
      {
        title: 'How Camex AI Solved It',
        points: [
          'Camex AI analyzed live CCTV feeds using computer vision to detect intrusion attempts, loitering, boundary breaches, and suspicious movement in real time. Automated alerts were sent instantly to control rooms, enabling faster and more accurate response.',
        ],
      },
    ],
    workflowIntegration: [
      'Real-time alert system integrated with control rooms',
      'Automated threat detection and classification',
      'Instant notifications to security personnel',
    ],
    impactSummary: [
      'Early threat detection and prevention',
      'Reduced response time to security incidents',
      'Improved perimeter security effectiveness',
      'Enhanced protection of critical assets',
    ],
  },
  'smart-queue-analytics': {
    slug: 'smart-queue-analytics',
    title: 'Smart Queue Analytics for Retail',
    operationalContext:
      'Long queues and inefficient staff allocation directly impact customer experience and store revenue. Traditional observation-based methods lack real-time accuracy and scalability.',
    images: {
      layout: 'grid',
      items: [
        {
          url: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800',
          alt: 'Retail store queue',
        },
        {
          url: 'https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg?auto=compress&cs=tinysrgb&w=800',
          alt: 'Store checkout queue',
        },
        {
          url: 'https://images.pexels.com/photos/3737615/pexels-photo-3737615.jpeg?auto=compress&cs=tinysrgb&w=800',
          alt: 'Queue analytics',
        },
      ],
    },
    aiUseCases: [
      {
        title: 'Challenges Faced by Retailers',
        points: [
          'Unpredictable queue buildup',
          'Manual staff reallocation',
          'Customer dissatisfaction due to long waits',
          'Lack of real-time store insights',
        ],
      },
      {
        title: 'Impact of Camex AI',
        points: [
          'Camex AI used existing CCTV cameras to track queue lengths, customer flow, and waiting time in real time. The system enabled data-driven staffing decisions, reduced congestion, and improved customer satisfaction across stores.',
        ],
      },
    ],
    workflowIntegration: [
      'Real-time queue monitoring and analytics',
      'Automated staff allocation recommendations',
      'Integration with store management systems',
    ],
    impactSummary: [
      'Improved customer experience through reduced wait times',
      'Optimized staff allocation and resource utilization',
      'Data-driven decision making for store operations',
      'Increased customer satisfaction and revenue',
    ],
  },
};

