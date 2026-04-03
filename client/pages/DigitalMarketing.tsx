import PageBanner from "@/components/PageBanner";

export default function DigitalMarketing() {
  const solutions = [
    { title: "Campaign Management", description: "Comprehensive digital campaign planning and execution" },
    { title: "Analytics & Reporting", description: "Real-time insights into campaign performance" },
    { title: "Ad Optimization", description: "Advanced targeting and optimization techniques" },
    { title: "Content Strategy", description: "Data-driven content creation and distribution" },
    { title: "Conversion Optimization", description: "Maximize ROI with proven conversion strategies" },
    { title: "Brand Development", description: "Build and strengthen your digital presence" },
  ];

  return (
    <div className="vm_main_wrapper" id="digitalmarketing_wrapper">
      <PageBanner
        title="Digital Marketing"
        description="Alphamovil offers 360º digital marketing solutions to clients. We cover all aspects of digital marketing on all digital devices and offer various solutions to optimize your digital advertising spends."
      />

      <section className="main_content py-10 md:py-14">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold font-saira mb-8">Our Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {solutions.map((solution, idx) => (
              <div
                key={idx}
                className="p-6 md:p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-all hover:border-vm-darkblue"
              >
                <i className="fas fa-check-circle text-3xl text-vm-darkblue mb-4 block"></i>
                <h3 className="text-xl font-bold font-saira text-foreground mb-3">{solution.title}</h3>
                <p className="text-gray-700">{solution.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 md:mt-16 bg-blue-50 p-6 md:p-8 rounded-lg">
            <h3 className="text-2xl font-bold font-saira mb-4 text-vm-darkblue">Why Choose Alphamovil?</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <i className="fas fa-arrow-right text-vm-darkblue mt-1 flex-shrink-0"></i>
                <span>30+ years of combined industry experience</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-arrow-right text-vm-darkblue mt-1 flex-shrink-0"></i>
                <span>Proven track record of successful campaigns</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-arrow-right text-vm-darkblue mt-1 flex-shrink-0"></i>
                <span>Cutting-edge technology and tools</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-arrow-right text-vm-darkblue mt-1 flex-shrink-0"></i>
                <span>Dedicated account management</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
