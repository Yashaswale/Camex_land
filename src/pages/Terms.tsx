import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Terms() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <section className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              TERMS AND CONDITIONS FOR CAMEX PLATFORM
            </h1>
            <p className="text-gray-400 text-sm sm:text-base italic">
              Effective Date: January 4, 2026
            </p>
          </div>

          <div className="prose prose-invert prose-lg max-w-none text-gray-300 space-y-8">
            <div className="border-t border-gray-800 pt-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">1. INTRODUCTION & ACCEPTANCE OF TERMS</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                These Terms and Conditions (“<strong>Terms</strong>”) govern your access to and use of the <strong>Camex</strong> platform (the “<strong>Platform</strong>”), a cloud-based, AI-powered video analytics solution provided by the entity operating the Camex service (the “<strong>Provider</strong>”). These Terms constitute a legally binding agreement between you (“<strong>Customer</strong>”, “you”, or “your”) and the Provider.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                By registering for, accessing, or using the Platform—including via the web dashboard, APIs, mobile applications, or any associated services—you unconditionally agree to be bound by these Terms, as may be amended from time to time. If you are entering into these Terms on behalf of a legal entity (e.g., your employer or organization), you represent and warrant that you have the authority to bind such entity to these Terms, and references to “you” or “Customer” shall apply to such entity.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you do not agree to these Terms in their entirety, you must not access or use the Platform.
              </p>
              <p className="text-gray-300 leading-relaxed">
                These Terms apply in addition to any applicable data processing addendum, service order, statement of work, or other ancillary agreement entered into between you and the Provider (collectively, the “<strong>Agreement</strong>”).
              </p>
            </div>

            <div className="border-t border-gray-800 pt-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">2. DESCRIPTION OF SERVICES</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Camex is a Software-as-a-Service (SaaS) platform that enables Customers to ingest, process, and analyze video feeds—whether live or recorded—using proprietary artificial intelligence and machine learning (AI/ML) models. The Platform provides real-time and historical analytics, visual dashboards, alerts, and reporting functionalities for security, operational intelligence, compliance, and business optimization purposes.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">Key components include, but are not limited to:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4 ml-4">
                <li>Video ingestion via RTSP, ONVIF, or other compatible streaming protocols;</li>
                <li>AI-driven object detection, classification, behavior analysis, and anomaly detection;</li>
                <li>Web-based dashboard for visualization, configuration, and management;</li>
                <li>API access for integration with third-party systems.</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                The Platform <strong>does not include</strong> physical hardware (e.g., cameras, servers, network infrastructure). The Provider does not manufacture, install, maintain, or monitor physical surveillance equipment. Camex operates strictly as a <em>data processor</em> under applicable data protection laws; the Customer retains full responsibility as the <em>data controller</em> for all processing activities involving personal data.
              </p>
            </div>

            <div className="border-t border-gray-800 pt-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">3. ELIGIBILITY & AUTHORIZED USE</h2>
              <p className="text-gray-300 leading-relaxed mb-4">You represent and warrant that:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4 ml-4">
                <li>You are at least 18 years of age or the age of legal majority in your jurisdiction;</li>
                <li>You are duly authorized to enter into this Agreement on behalf of yourself or your organization;</li>
                <li>Your use of the Platform complies with all applicable laws, including but not limited to the Information Technology Act, 2000 (India), the Digital Personal Data Protection Act, 2023 (India), and equivalent legislation in other relevant jurisdictions;</li>
                <li>You will not use the Platform for any purpose that is unlawful, harmful, deceptive, or violates the rights of third parties.</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                Use of the Platform is strictly limited to internal, legitimate business, operational, or security purposes consistent with your organizational policies and applicable law. The Platform may <strong>not</strong> be used for mass surveillance of individuals in private spaces, discriminatory profiling, or any activity that violates fundamental rights to privacy, dignity, or freedom of movement.
              </p>
            </div>

            <div className="border-t border-gray-800 pt-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">4. ACCOUNT REGISTRATION & SECURITY</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                To access the Platform, you must create an account (“<strong>Account</strong>”) and provide accurate, complete, and up-to-date registration information. You are solely responsible for:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4 ml-4">
                <li>Maintaining the confidentiality of Account credentials (including usernames, passwords, API keys, and multi-factor authentication tokens);</li>
                <li>All activities that occur under your Account;</li>
                <li>Promptly notifying the Provider of any actual or suspected unauthorized use or security breach.</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-4">
                You agree to implement and maintain industry-standard administrative, technical, and physical safeguards (e.g., strong password policies, access controls, encryption at rest and in transit) to protect Account access and prevent unauthorized use. The Provider is not liable for losses arising from credential compromise due to Customer negligence.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Administrators may designate authorized users (“<strong>Authorized Users</strong>”) within their organization, subject to internal role-based access controls configured in the Platform. You remain fully liable for actions performed by Authorized Users.
              </p>
            </div>

            <div className="border-t border-gray-800 pt-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">5. ACCEPTABLE USE POLICY</h2>
              <p className="text-gray-300 leading-relaxed mb-4">You shall not, directly or indirectly, use the Platform or any output thereof to:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4 ml-4">
                <li>Conduct surveillance in locations where individuals have a reasonable expectation of privacy (e.g., restrooms, changing rooms, private residences, medical facilities), unless explicitly authorized by law and accompanied by appropriate notice and consent mechanisms;</li>
                <li>Engage in discriminatory, harassing, or abusive monitoring based on protected attributes (e.g., race, religion, gender, caste, disability);</li>
                <li>Reverse engineer, decompile, disassemble, or attempt to derive source code or algorithms of the Platform (except as expressly permitted by law);</li>
                <li>Transmit malware, initiate denial-of-service attacks, or otherwise disrupt Platform operations;</li>
                <li>Store, process, or transmit data that is unlawful, defamatory, obscene, or infringing;</li>
                <li>Circumvent technical limitations, rate limits, or usage quotas;</li>
                <li>Use AI-generated outputs to make solely automated decisions with legal or similarly significant effects on individuals (e.g., employment termination, access denial, law enforcement action) without meaningful human review.</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                The Provider reserves the right, but not the obligation, to monitor usage for compliance and to suspend or terminate Accounts engaged in prohibited activities.
              </p>
            </div>

            <div className="border-t border-gray-800 pt-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">6. CAMERA FEEDS & CUSTOMER RESPONSIBILITIES</h2>
              <p className="text-gray-300 leading-relaxed mb-4">The Customer is solely responsible for:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4 ml-4">
                <li>Procuring, installing, configuring, maintaining, and securing all cameras, network infrastructure, and video sources;</li>
                <li>Ensuring all video feeds transmitted to the Platform comply with applicable laws regarding lawful surveillance, data minimization, purpose limitation, and prior consent (where required);</li>
                <li>Posting clear and conspicuous signage in monitored areas, where mandated by law or best practice;</li>
                <li>Obtaining and documenting all necessary consents, authorizations, and legal bases for processing personal data (including biometric or sensitive personal data);</li>
                <li>Ensuring camera placement does not capture data beyond the scope of the stated purpose or retain data longer than necessary.</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                The Provider does not verify, validate, or assume responsibility for the legality, ethics, or accuracy of camera placement, field of view, or data collection practices. Any misuse of surveillance infrastructure is the sole liability of the Customer.
              </p>
            </div>

            <div className="border-t border-gray-800 pt-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">7. AI ANALYTICS DISCLAIMER</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                The AI/ML models powering Camex generate probabilistic, heuristic, and statistical outputs. Such outputs—including object detection confidence scores, anomaly alerts, behavior classifications, and trend analyses—are provided for <strong>informational and decision-support purposes only</strong>.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">The Provider expressly disclaims:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4 ml-4">
                <li>Any warranty of <em>accuracy</em>, <em>completeness</em>, <em>timeliness</em>, or <em>fitness for a particular purpose</em> concerning AI-generated analytics;</li>
                <li>Liability for errors, omissions, false positives, false negatives, biases, or model drift arising from:
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>Suboptimal lighting, resolution, or camera angles;</li>
                    <li>Occlusions, motion blur, or environmental interference;</li>
                    <li>Training data limitations or inherent model uncertainty;</li>
                    <li>Changes in real-world conditions not reflected in model training.</li>
                  </ul>
                </li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                Customers must exercise independent judgment and implement human review before taking any consequential action (e.g., security intervention, personnel decisions, regulatory reporting) based on Platform outputs. AI analytics <strong>must not</strong> serve as the sole basis for automated decisions affecting legal rights or significant interests of individuals.
              </p>
            </div>

            <div className="border-t border-gray-800 pt-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">8. INTELLECTUAL PROPERTY RIGHTS</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                All rights, title, and interest in and to the Platform—including software, algorithms, AI models, user interfaces, documentation, trademarks, databases, and derivative works—are and shall remain the exclusive property of the Provider or its licensors.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Nothing in these Terms transfers ownership of any intellectual property to the Customer. Customer acknowledges that the Platform embodies valuable trade secrets and proprietary know-how protected under copyright, patent, trademark, and trade secret laws.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Feedback, suggestions, or enhancement requests provided by the Customer shall be deemed non-confidential and may be used by the Provider without restriction or compensation.
              </p>
            </div>

            <div className="border-t border-gray-800 pt-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">9. LICENSE GRANT & RESTRICTIONS</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Subject to compliance with these Terms and payment of applicable fees, the Provider grants the Customer a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4 ml-4">
                <li>Access and use the Platform for internal business purposes;</li>
                <li>Permit Authorized Users to access the Platform in accordance with role-based permissions;</li>
                <li>Utilize standard APIs for integration with compatible third-party systems, in accordance with published API documentation.</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-4">
                This license is expressly conditioned on Customer's adherence to all obligations herein. All rights not expressly granted are reserved by the Provider.
              </p>
              <p className="text-gray-300 leading-relaxed mb-2">You shall not:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4 ml-4">
                <li>Copy, modify, adapt, translate, or create derivative works of the Platform;</li>
                <li>Rent, lease, sell, sublicense, or distribute the Platform or access credentials;</li>
                <li>Use the Platform to develop a competing product or service;</li>
                <li>Remove, alter, or obscure any proprietary notices (e.g., copyright, trademark).</li>
              </ul>
            </div>

            <div className="border-t border-gray-800 pt-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">10. THIRD-PARTY INTEGRATIONS & DEPENDENCIES</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                The Platform may integrate with or rely upon third-party services (e.g., cloud infrastructure providers, identity providers, device management systems). Such integrations are provided “as is” and “as available.” The Provider does not warrant the performance, security, or availability of third-party services.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">You acknowledge and agree that:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4 ml-4">
                <li>Integrations may require separate agreements with third-party providers;</li>
                <li>Data shared with third parties is governed by their respective terms and privacy policies;</li>
                <li>The Provider is not liable for disruptions, data breaches, or compliance failures arising from third-party dependencies.</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                Use of third-party integrations is at your sole risk. You are responsible for conducting due diligence on any integrated service prior to deployment.
              </p>
            </div>

            <div className="border-t border-gray-800 pt-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">11. SERVICE AVAILABILITY, MAINTENANCE & DOWNTIME</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                The Provider uses commercially reasonable efforts to maintain Platform availability but does <strong>not</strong> guarantee uninterrupted or error-free operation.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Scheduled maintenance may occur with prior notice (typically ≥48 hours) during low-usage windows. Unscheduled downtime will be communicated promptly via in-app notifications or email.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">The Provider reserves the right to suspend access temporarily to:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4 ml-4">
                <li>Perform emergency security patches;</li>
                <li>Address vulnerabilities or threats;</li>
                <li>Comply with legal or regulatory requirements.</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                Maximum scheduled downtime is targeted at ≤4 hours/month. The Provider shall use diligent efforts to meet industry-standard uptime benchmarks (~99.5% annually), but SLAs (if any) shall be specified in a separate service order.
              </p>
            </div>

            <div className="border-t border-gray-800 pt-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">12. SUBSCRIPTION, FEES & PAYMENT TERMS</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Access to the Platform is offered via subscription tiers (e.g., Starter, Professional, Enterprise), each with defined usage limits (e.g., camera feeds, analytics features, storage volume). Pricing, billing cycles, and renewal terms are set forth in the applicable service order or pricing schedule.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">Fees are:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4 ml-4">
                <li>Non-refundable, except as expressly stated herein or required by law;</li>
                <li>Exclusive of applicable taxes, duties, or levies, for which Customer is solely responsible;</li>
                <li>Due in advance, in accordance with the selected billing cycle (monthly/annual);</li>
                <li>Subject to change upon 30 days' written notice for renewals or new subscriptions.</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                Late payments may incur interest at 1.5% per month (or the maximum rate permitted by Indian law) and may result in suspension of services.
              </p>
            </div>

            <div className="border-t border-gray-800 pt-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">13. DATA RETENTION & DELETION POLICY</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Customer data (including video metadata, analytics logs, configuration settings) is retained for the duration of the subscription, unless a shorter retention period is configured by the Customer in the Platform.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">Upon termination or expiration of the Agreement:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4 ml-4">
                <li>Customer may export data via Platform tools during a 30-day grace period;</li>
                <li>After 30 days, the Provider will irreversibly delete or anonymize Customer data from production systems;</li>
                <li>Backups may persist for up to 90 days post-deletion for disaster recovery, after which they are purged.</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-4">Deletion does not apply to:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4 ml-4">
                <li>Aggregated, anonymized, or statistical data used for service improvement or research;</li>
                <li>Data required to comply with legal obligations, resolve disputes, or enforce agreements.</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                Customers may request earlier deletion via written notice; the Provider will comply within 30 days, subject to technical feasibility.
              </p>
            </div>

            <div className="border-t border-gray-800 pt-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">14. LIMITATION OF LIABILITY</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW (INCLUDING SECTION 73 OF THE INFORMATION TECHNOLOGY ACT, 2000), THE PROVIDER'S AGGREGATE LIABILITY ARISING OUT OF OR RELATED TO THESE TERMS—WHETHER IN CONTRACT, TORT, OR OTHERWISE—SHALL NOT EXCEED THE TOTAL FEES PAID BY CUSTOMER TO THE PROVIDER IN THE 12 MONTHS PRECEDING THE EVENT GIVING RISE TO LIABILITY.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">IN NO EVENT SHALL THE PROVIDER BE LIABLE FOR:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4 ml-4">
                <li>INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, OR EXEMPLARY DAMAGES (INCLUDING LOST PROFITS, LOST DATA, BUSINESS INTERRUPTION);</li>
                <li>DAMAGES ARISING FROM CUSTOMER'S FAILURE TO COMPLY WITH LAWS, CAMERA DEPLOYMENT, OR DATA GOVERNANCE;</li>
                <li>ERRORS OR OMISSIONS IN AI ANALYTICS, INCLUDING RELIANCE ON PROBABILISTIC OUTPUTS;</li>
                <li>THIRD-PARTY CONDUCT OR INTEGRATIONS.</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE ABOVE LIMITATION MAY NOT APPLY TO YOU.
              </p>
            </div>

            <div className="border-t border-gray-800 pt-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">15. INDEMNIFICATION</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                You agree to defend, indemnify, and hold harmless the Provider and its affiliates, officers, directors, employees, and agents from and against any and all claims, liabilities, damages, losses, costs, and expenses (including reasonable attorneys' fees) arising out of or in connection with:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4 ml-4">
                <li>Your breach of these Terms;</li>
                <li>Your negligence or willful misconduct;</li>
                <li>Your unlawful surveillance practices, privacy violations, or failure to obtain required consents;</li>
                <li>Your use of the Platform in violation of applicable laws (including data protection, surveillance, or export control regulations);</li>
                <li>Claims by third parties alleging that your camera feeds, data inputs, or integrations infringe intellectual property or other rights.</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                The Provider shall provide prompt notice of any claim and reasonably cooperate in the defense, provided that it retains the right to participate in or assume control of the defense with counsel of its choosing.
              </p>
            </div>

            <div className="border-t border-gray-800 pt-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">16. SUSPENSION & TERMINATION</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Either party may terminate the Agreement for material breach by the other party upon 30 days' written notice, provided the breach remains uncured during such period.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">The Provider may immediately suspend or terminate access if:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4 ml-4">
                <li>There is a breach of the Acceptable Use Policy;</li>
                <li>There is a security threat or illegal activity detected;</li>
                <li>Required by law or governmental authority;</li>
                <li>Customer fails to pay fees within 15 days of invoice due date.</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-4">Upon termination:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4 ml-4">
                <li>All licenses granted herein shall cease;</li>
                <li>Customer must discontinue all use of the Platform and delete any cached or local copies;</li>
                <li>Sections 7 (AI Disclaimer), 8 (IP), 13 (Data Retention), 14 (Liability), 15 (Indemnification), 17 (Governing Law), and 19 (Contact) shall survive.</li>
              </ul>
            </div>

            <div className="border-t border-gray-800 pt-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">17. GOVERNING LAW & JURISDICTION</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                These Terms and any dispute or claim arising out of or in connection with them shall be governed by and construed in accordance with the laws of the Republic of India, without regard to its conflict of laws principles.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                The parties irrevocably submit to the exclusive jurisdiction of the courts located in <strong>New Delhi, India</strong> for the resolution of any disputes. The United Nations Convention on Contracts for the International Sale of Goods (CISG) is expressly excluded.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Notwithstanding the above, either party may seek injunctive relief in any court of competent jurisdiction to prevent irreparable harm or enforce intellectual property rights.
              </p>
            </div>

            <div className="border-t border-gray-800 pt-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">18. CHANGES TO TERMS</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                The Provider reserves the right to update or modify these Terms from time to time to reflect changes in law, technology, or business practices.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">Material changes will be communicated via:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4 ml-4">
                <li>Email to the primary Account contact;</li>
                <li>In-app notification at next login;</li>
                <li>Posting of revised Terms at [insert URL].</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-4">
                Continued use of the Platform after the effective date of revised Terms constitutes acceptance of the changes. If you do not agree, you must discontinue use and terminate your subscription.
              </p>
              <p className="text-gray-300 leading-relaxed">
                The “Effective Date” at the top of this document reflects the latest revision.
              </p>
            </div>

            <div className="border-t border-gray-800 pt-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">19. CONTACT INFORMATION</h2>
              <p className="text-gray-300 leading-relaxed mb-4">For notices, support requests, or legal inquiries, please contact:</p>
              <div className="bg-[#0F1F3A] border border-gray-800 rounded-lg p-6 mb-4">
                <p className="text-white font-semibold mb-2">Camex Legal & Compliance Team</p>
                <p className="text-gray-300 mb-1">Email: <a href="mailto:legal@camex.ai" className="text-blue-500 hover:text-blue-400">legal@camex.ai</a></p>
                <p className="text-gray-300 mb-1">Address:</p>
                <p className="text-gray-300 mb-1">[To be inserted: Registered Office Address]</p>
                <p className="text-gray-300">New Delhi, India</p>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                For data subject requests or data protection inquiries, please contact the designated Data Protection Officer at: <a href="mailto:dpo@camex.ai" className="text-blue-500 hover:text-blue-400">dpo@camex.ai</a>
              </p>
              <p className="text-gray-300 leading-relaxed">
                All formal notices must be in writing and sent via registered post or email with confirmation of receipt.
              </p>
            </div>

            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400 italic text-sm mb-6">
                These Terms constitute the entire agreement between the parties regarding the subject matter herein and supersede all prior or contemporaneous communications, whether oral or written.
              </p>
              <p className="text-gray-400 text-sm">
                © 2026 Camex. All rights reserved.<br />
                Version: 2.1 | Effective: January 4, 2026
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

