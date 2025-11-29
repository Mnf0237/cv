import { Mail, Phone, MapPin, Download } from 'lucide-react';
import { useRef } from 'react';
import html2pdf from 'html2pdf.js';

function App() {
  const cvRef = useRef<HTMLDivElement>(null);

  const generatePDF = () => {
    if (!cvRef.current) return;

    const element = cvRef.current;
    const opt = {
      margin: 10,
      filename: 'MAYI_NONGA_FRANCK_MANUEL_CV.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' },
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto mb-6 flex justify-end">
        <button
          onClick={generatePDF}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
        >
          <Download className="w-5 h-5" />
          Télécharger PDF
        </button>
      </div>

      <div className="max-w-4xl mx-auto bg-white shadow-lg" ref={cvRef}>
        <div className="border-b-4 border-blue-600 pb-8 pt-8 px-8 bg-gradient-to-r from-blue-50 to-white">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            MAYI NONGA FRANCK MANUEL
          </h1>
          <h2 className="text-xl text-blue-600 font-semibold mb-4">
            Network & Telecommunications Engineer
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-600" />
              <span>Douala, Cameroon</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-600" />
              <span>(+237) 697 039 163</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-600" />
              <span>manuelmayi581@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="p-8">
          <section className="mb-8">
            <h3 className="text-xl font-bold text-blue-600 mb-4 pb-2 border-b-2 border-gray-200">
              SUMMARY
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Dynamic Network & Telecommunications Engineer with hands-on experience in SOC/NOC operations
              through roles at Huawei and AFRO Engineering. Skilled in network supervision, performance analysis,
              incident management, and first-level diagnostics. I effectively reduced Mean Time to Restore (MTTR)
              while fostering cross-domain collaboration. Adept at leveraging technical expertise and strong
              problem-solving abilities to enhance service quality, while demonstrating strong communication,
              adaptability, attention to detail, teamwork, and a customer-focused mindset.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-bold text-blue-600 mb-4 pb-2 border-b-2 border-gray-200">
              EDUCATION
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-bold text-gray-900">Master's Degree</h4>
                    <p className="text-gray-700">National Advanced School of Polytechnic, Douala</p>
                    <p className="text-sm text-gray-600">Specialization in Networks & Telecommunications</p>
                  </div>
                  <span className="text-sm font-semibold text-blue-600 whitespace-nowrap ml-4">2021 - 2024</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-bold text-gray-900">DUT</h4>
                    <p className="text-gray-700">University Institute of Technology, Douala</p>
                    <p className="text-sm text-gray-600">Specialization in Networks & Telecommunications</p>
                  </div>
                  <span className="text-sm font-semibold text-blue-600 whitespace-nowrap ml-4">2018 - 2020</span>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-bold text-blue-600 mb-4 pb-2 border-b-2 border-gray-200">
              WORK EXPERIENCE
            </h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-bold text-gray-900">Smartcare Intern – Service Analysis</h4>
                    <p className="text-gray-700 font-semibold">Huawei Technologies Cameroon - Douala</p>
                  </div>
                  <span className="text-sm font-semibold text-blue-600 whitespace-nowrap ml-4">Nov 2024 to Present</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Monitor network and customer experience through Smartcare analytics</li>
                  <li>Detect anomalies affecting voice and data services</li>
                  <li>Follow-up on customer complaints and Second-level diagnosis</li>
                  <li>Support MS team with deep demarcation analysis and root cause identification</li>
                  <li>Produce service-impact reports and performance documentation</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-bold text-gray-900">Front Office Engineer at MTN Cameroon</h4>
                    <p className="text-gray-700 font-semibold">AFRO Engineering - Douala</p>
                  </div>
                  <span className="text-sm font-semibold text-blue-600 whitespace-nowrap ml-4">02/2024 to 05/11/2024</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Real-time monitoring of key performance indicators (KPIs) related to voice and data services</li>
                  <li>Proactive analysis of KPI trends to detect potential service quality degradation</li>
                  <li>Correlation of multi-domain alarms (Core, IP, RAN, Transmission) to identify the probable source of incidents</li>
                  <li>Follow-up on customer complaints and first-level diagnosis of reported anomalies</li>
                  <li>Tracking and updating incident tickets until full restoration of impacted services</li>
                  <li>Preparation of daily and weekly performance reports for management and technical documentation</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-bold text-gray-900">Network Security Administrator – Intern</h4>
                    <p className="text-gray-700 font-semibold">Infinity Tech SARL - Douala</p>
                  </div>
                  <span className="text-sm font-semibold text-blue-600 whitespace-nowrap ml-4">02/2024 to 05/2024</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Installed and configured network devices (routers, switches, firewalls)</li>
                  <li>Managed access control policies and monitored network performance</li>
                  <li>Provided user technical assistance and troubleshooting</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-bold text-blue-600 mb-4 pb-2 border-b-2 border-gray-200">
              SKILLS
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Technical Skills</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>Protocols: TCP/IP, OSI Model, OSPF, MPLS, ARP, BGP</li>
                  <li>Mobile Networks: 2G/3G/4G</li>
                  <li>Monitoring & Analytics</li>
                  <li>Performance analysis (KPI, QoS)</li>
                  <li>Network supervision and monitoring</li>
                  <li>Incident management and ticketing</li>
                  <li>Event management</li>
                  <li>First-level diagnostics and deep demarcation</li>
                  <li>Troubleshooting: Incident analysis, alarm handling, RCA</li>
                  <li>SQL: Database querying for high demarcation and incident investigation</li>
                  <li>Tools: Network diagnostic tools, SOC dashboards</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Certifications</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm mb-4">
                  <li>HCIA Datacom (in progress)</li>
                  <li>Cisco Networking Academy:
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>Network Addressing and Basic Troubleshooting</li>
                      <li>Network Devices and Initial Configuration</li>
                      <li>Network Technician Career Path</li>
                    </ul>
                  </li>
                </ul>
                <h4 className="font-semibold text-gray-900 mb-2">Soft Skills</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>Analytical thinking and problem-solving</li>
                  <li>Cross-domain team collaboration</li>
                  <li>Strong communication and reporting</li>
                  <li>Adaptability to changing environments</li>
                  <li>Attention to detail in technical analysis</li>
                  <li>Customer-focused mindset</li>
                  <li>Root cause analysis and investigation</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold text-blue-600 mb-4 pb-2 border-b-2 border-gray-200">
              LANGUAGES
            </h3>
            <div className="flex gap-8">
              <div className="flex items-center gap-3">
                <span className="font-semibold text-gray-900">French:</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-3 h-3 bg-blue-600 rounded-sm"></div>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-semibold text-gray-900">English:</span>
                <div className="flex gap-1">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-3 h-3 bg-blue-600 rounded-sm"></div>
                  ))}
                  {[4, 5].map((i) => (
                    <div key={i} className="w-3 h-3 bg-gray-300 rounded-sm"></div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
