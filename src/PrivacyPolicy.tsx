import React from 'react';

interface PrivacyPolicyProps {
  onHome: () => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyProps> = ({ onHome }) => {
  return (
    <div className="min-h-screen bg-bg relative pt-24 md:pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <button 
          onClick={onHome}
          className="mb-8 flex items-center gap-2 text-sm text-txt3 hover:text-txt transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          Back to Home
        </button>

        <div className="bg-[var(--theme-form-bg)] backdrop-blur-md border border-border2 rounded-2xl shadow-[0_0_50px_var(--theme-shadow-heavy)] p-8 md:p-12 mb-12 markdown-body text-txt2 text-[15px] leading-relaxed">
          <div className="text-center mb-12 border-b border-border2 pb-8">
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-txt mb-4 tracking-tight">Privacy Policy</h1>
            <p className="text-txt3">Last Updated: April 20, 2026 | Effective Date: April 20, 2026</p>
          </div>

          <div className="space-y-8">
            <p>
              This Privacy Policy (“Policy”) describes how Leevon Labs Private Limited (“Leevon Labs”, “we”, “us”, or “our”), a company incorporated under the laws of India, having its registered office at:
            </p>
            <p className="font-medium text-txt bg-bg p-4 rounded-lg border border-border2">
              6-44, Allavaram Main Road, Near Gantalamma Temple, Allavaram, East Godavari, Andhra Pradesh, India – 533217
            </p>
            <p>
              collects, uses, stores, shares, and protects personal and business information of users (“User”, “you”, or “your”) who access or use PharmaHead, our B2B pharma trade operating platform available at <strong>pharmahead.app</strong>, including web, desktop, and mobile applications (collectively, the “Platform” or “Services”).
            </p>
            <p>
              By accessing or using the Platform, you agree to this Privacy Policy. If you do not agree, please do not use the Platform.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-txt mb-4 mt-10">1. Scope and Applicability</h2>
              <p className="mb-3">This Policy applies to all users of PharmaHead, including:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Wholesalers, distributors, and super stockists</li>
                <li>Sub-wholesalers</li>
                <li>Retailers and chemists</li>
                <li>Sales representatives and field staff</li>
                <li>Platform administrators</li>
              </ul>
              <p>This Policy does not apply to third-party services or websites linked from the Platform.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-txt mb-4 mt-10">2. Information We Collect</h2>
              
              <h3 className="text-lg font-bold text-txt mt-6 mb-3">2.1 Information You Provide</h3>
              <p className="mb-3">We may collect:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Name, business name, role, and designation</li>
                <li>Email address, mobile number, and business address</li>
                <li>GSTIN, Drug License, PAN, and other regulatory details</li>
                <li>Bank details (for payment tracking and collections)</li>
                <li>Login credentials (stored securely)</li>
                <li>Profile information (logo, description)</li>
                <li>Communication data (support queries, feedback)</li>
              </ul>

              <h3 className="text-lg font-bold text-txt mt-6 mb-3">2.2 Information Generated Through Use</h3>
              <p className="mb-3">We may collect:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Orders, invoices, payments, and ledger records</li>
                <li>Inventory data (stock, batch, expiry, suppliers)</li>
                <li>GST and compliance-related data</li>
                <li>Sales activity and performance data</li>
                <li>Financial summaries and analytics</li>
                <li>Device information (IP address, browser, device type)</li>
                <li>Usage data (features accessed, activity logs)</li>
              </ul>

              <h3 className="text-lg font-bold text-txt mt-6 mb-3">2.3 Third-Party Integrations</h3>
              <p className="mb-3">We may use trusted third-party services for:</p>
              <ul className="list-disc pl-6 space-y-2 mb-3">
                <li>Authentication</li>
                <li>Messaging (SMS/WhatsApp)</li>
                <li>Analytics and error tracking</li>
                <li>AI-assisted invoice processing</li>
              </ul>
              <p>Data shared with these services is handled as per their respective policies.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-txt mb-4 mt-10">3. How We Use Your Information</h2>
              <p className="mb-3">We use your information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Create and manage user accounts</li>
                <li>Provide core services (orders, billing, inventory, GST, etc.)</li>
                <li>Enable communication between users</li>
                <li>Send notifications and reminders</li>
                <li>Generate invoices and reports</li>
                <li>Improve platform features and performance</li>
                <li>Detect and prevent fraud or misuse</li>
                <li>Comply with legal and regulatory requirements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-txt mb-4 mt-10">4. Legal Basis for Processing</h2>
              <p className="mb-3">We process your data based on:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your consent</li>
                <li>Contractual necessity (to provide services)</li>
                <li>Legal obligations</li>
                <li>Legitimate business interests (security, improvements)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-txt mb-4 mt-10">5. Data Sharing</h2>
              <p className="mb-6 font-medium text-txt">We do not sell your personal data.</p>
              
              <h3 className="text-lg font-bold text-txt mt-6 mb-2">5.1 Within Platform</h3>
              <p className="mb-6">Information is shared between connected users (e.g., retailer and wholesaler) as required for platform functionality.</p>
              
              <h3 className="text-lg font-bold text-txt mt-6 mb-2">5.2 Service Providers</h3>
              <p className="mb-3">We may share data with trusted service providers for:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Hosting and infrastructure</li>
                <li>Messaging services</li>
                <li>Analytics and monitoring</li>
                <li>Payment processing (if integrated in the future)</li>
              </ul>
              
              <h3 className="text-lg font-bold text-txt mt-6 mb-2">5.3 Legal Compliance</h3>
              <p className="mb-6">We may disclose information if required by law or authorities.</p>
              
              <h3 className="text-lg font-bold text-txt mt-6 mb-2">5.4 Business Transfers</h3>
              <p className="mb-6">In case of merger, acquisition, or restructuring, user data may be transferred.</p>
              
              <h3 className="text-lg font-bold text-txt mt-6 mb-2">5.5 With Consent</h3>
              <p className="mb-6">We may share information with your explicit consent.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-txt mb-4 mt-10">6. Data Security</h2>
              <p className="mb-3">We implement reasonable and industry-standard security measures, including:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Secure data transmission (HTTPS)</li>
                <li>Controlled access to data</li>
                <li>Authentication and authorization systems</li>
                <li>Monitoring and logging</li>
              </ul>
              <p>However, no system is completely secure, and we cannot guarantee absolute security.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-txt mb-4 mt-10">7. Data Retention</h2>
              <p className="mb-3">We retain data:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>While your account is active</li>
                <li>As required by applicable laws (including tax and GST regulations)</li>
                <li>For operational and security purposes</li>
              </ul>
              <p>After account deletion, data may be deleted or anonymized, except where legally required.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-txt mb-4 mt-10">8. Cookies and Storage</h2>
              <p className="mb-3">We use cookies and local storage for:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Maintaining login sessions</li>
                <li>Saving user preferences</li>
                <li>Improving performance</li>
              </ul>
              <p>Disabling cookies may affect functionality.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-txt mb-4 mt-10">9. Children's Privacy</h2>
              <p>The Platform is intended for business use and not for individuals under 18 years of age. We do not knowingly collect data from minors.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-txt mb-4 mt-10">10. Your Rights</h2>
              <p className="mb-3">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Access your personal data</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion (subject to legal obligations)</li>
                <li>Withdraw consent where applicable</li>
              </ul>
              <p>To exercise your rights, contact us at:<br/>📧 <a href="mailto:admin@pharmahead.app" className="text-ph-lt hover:underline">admin@pharmahead.app</a></p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-txt mb-4 mt-10">11. International Data Transfers</h2>
              <p>Some third-party services may process data outside India. We ensure reasonable safeguards are in place.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-txt mb-4 mt-10">12. Third-Party Links</h2>
              <p>We are not responsible for third-party websites or services linked from the Platform.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-txt mb-4 mt-10">13. Changes to This Policy</h2>
              <p className="mb-3">We may update this Privacy Policy from time to time. Updates will be communicated via:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Platform notifications</li>
                <li>Email</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-txt mb-4 mt-10">14. Legal Clarifications</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>PharmaHead is a technology platform and does not manufacture, store, or sell pharmaceutical products.</li>
                <li>Users are responsible for compliance with applicable laws, including GST and pharmaceutical regulations.</li>
                <li>Users are responsible for the accuracy of the data they provide.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-txt mb-4 mt-10">15. Contact / Grievance Officer</h2>
              <p className="mb-4">For any concerns or complaints:</p>
              <div className="bg-bg p-6 rounded-xl border border-border2 space-y-2">
                <p><strong>Name:</strong> V.S. Satyaram</p>
                <p><strong>Role:</strong> Grievance Officer</p>
                <p><strong>Company:</strong> Leevon Labs Private Limited</p>
                <p><strong>Email:</strong> <a href="mailto:admin@pharmahead.app" className="text-ph-lt hover:underline">admin@pharmahead.app</a></p>
                <p className="pt-2"><strong>Address:</strong><br/>6-44, Allavaram Main Road, East Godavari, Andhra Pradesh – 533217</p>
                <p className="pt-2"><strong>Response Time:</strong> Within 30 days</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
