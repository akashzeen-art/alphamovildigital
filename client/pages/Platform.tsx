import PageBanner from "@/components/PageBanner";

export default function Platform() {
  return (
    <div className="vm_main_wrapper" id="platform_wrapper">
      <PageBanner
        title="Platform"
        description="An old technology that evolved when mobile telephone services became a part of the norm. It is still a widely used technology for communication."
      />

      <section className="main_content py-10 md:py-14">
        <div className="container mx-auto px-4">
          <p className="section-content mb-10">
            We developed and deployed SMS subscription packs, SMS Short Codes, Premium Numbers and Bulk SMS Gateway. Our platform provides comprehensive solutions for all your communication needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

            <div className="bg-green-50 p-6 md:p-8 rounded-lg">
              <h3 className="text-2xl font-bold font-saira mb-4 text-vm-green">Voucher Management Service</h3>
              <p className="text-gray-700">
                Seamlessly create, distribute, and track vouchers to drive customer loyalty and boost sales.
              </p>
            </div>

            
            <div className="bg-green-50 p-6 md:p-8 rounded-lg">
              <h3 className="text-2xl font-bold font-saira mb-4 text-vm-green">Disaster Management Services</h3>
              <p className="text-gray-700">
                Fast, reliable emergency alerts and mass notifications to protect communities during critical disaster situations.
              </p>
            </div>

            <div className="bg-green-50 p-6 md:p-8 rounded-lg">
              <h3 className="text-2xl font-bold font-saira mb-4 text-vm-green">SMS Subscription</h3>
              <p className="text-gray-700">
                Flexible SMS subscription packs designed for businesses of all sizes. Easy integration, reliable delivery.
              </p>
            </div>
            
            <div className="bg-green-50 p-6 md:p-8 rounded-lg">
              <h3 className="text-2xl font-bold font-saira mb-4 text-vm-green">Bulk SMS Gateway</h3>
              <p className="text-gray-700">
                Enterprise-grade bulk SMS solution with excellent uptime and delivery rates.
              </p>
            </div>

            <div className="bg-green-50 p-6 md:p-8 rounded-lg">
              <h3 className="text-2xl font-bold font-saira mb-4 text-vm-green">USSD Gateway</h3>
              <p className="text-gray-700">
                Interactive USSD menus enabling real-time mobile services without internet connectivity.
              </p>
            </div>

            <div className="bg-green-50 p-6 md:p-8 rounded-lg">
              <h3 className="text-2xl font-bold font-saira mb-4 text-vm-green">CRBT Platform</h3>
              <p className="text-gray-700">
                Caller Ring Back Tone platform delivering personalized audio experiences to engage mobile subscribers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
