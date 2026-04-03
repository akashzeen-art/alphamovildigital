import PageBanner from "@/components/PageBanner";

export default function Partners() {
  return (
    <div className="vm_main_wrapper" id="partner_wrapper">
      <PageBanner
        title="Partners"
        description="At Alphamovil, we believe in the power of partnerships to drive innovation and mutual growth. We collaborate with leading companies, agencies, and service providers to expand our capabilities and deliver exceptional value to our clients."
      />

      <section className="main_content py-10 md:py-14">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div className="bg-green-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold font-saira mb-4 text-vm-green">Why Partner With Us?</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <i className="fas fa-star text-vm-green mt-1 flex-shrink-0"></i>
                  <span>Proven expertise in telecommunications and digital marketing</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-star text-vm-green mt-1 flex-shrink-0"></i>
                  <span>Cutting-edge technology platform and infrastructure</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-star text-vm-green mt-1 flex-shrink-0"></i>
                  <span>Strong track record and client satisfaction</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-star text-vm-green mt-1 flex-shrink-0"></i>
                  <span>Global network and resources</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-star text-vm-green mt-1 flex-shrink-0"></i>
                  <span>Dedicated support and collaborative approach</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold font-saira mb-4 text-vm-green">Partnership Types</h2>
              <ul className="space-y-4 text-gray-700">
                <li>
                  <strong className="text-vm-green">Technology Partners:</strong>
                  <p className="mt-1">Integrate your solutions with our platform</p>
                </li>
                <li>
                  <strong className="text-vm-green">Agency Partners:</strong>
                  <p className="mt-1">White-label solutions and resale opportunities</p>
                </li>
                <li>
                  <strong className="text-vm-green">Service Partners:</strong>
                  <p className="mt-1">Complementary services and joint go-to-market</p>
                </li>
                <li>
                  <strong className="text-vm-green">Affiliate Partners:</strong>
                  <p className="mt-1">Revenue sharing and referral programs</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-green-100 border-2 border-vm-green p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold font-saira mb-4 text-vm-green">Ready to Partner With Us?</h3>
            <p className="text-gray-700 mb-6">
              Contact our partnership team to explore opportunities that align with your business goals.
            </p>
            <a href="mailto:partnerships@Alphamovil.com" className="inline-block">
              <button className="btn-vm-pink">Start a Partnership</button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
