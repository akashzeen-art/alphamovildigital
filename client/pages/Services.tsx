import PageBanner from "@/components/PageBanner";
import { useMemo, useState } from "react";

export default function Services() {
  const services = useMemo(
    () => [
      {
        id: "direct-carrier-billing",
        title: "Direct Carrier Billing",
        icon: "fa-credit-card",
        color: "text-vm-pink",
        summary:
          "Direct Carrier Billing circumvents that problem! We provide the Direct Carrier Billing set-up. The best way to incorporate this is by targeting users with an active mobile subscription, to provide an alternative to credit and debit card payments.",
      },
      {
        id: "messaging-platform",
        title: "Messaging Platform",
        icon: "fa-comments",
        color: "text-vm-green",
        summary:
          "Alphamovil’s A2P messaging platform bridges the gap between those that have content and those that want it. It provides both the platform as well as the technology for content providers to disseminate their information using both SMS and USSD services.",
      },
      {
        id: "ivr-services",
        title: "IVR Services",
        icon: "fa-phone",
        color: "text-vm-blue",
        summary:
          "Often times, voice works better than text! We provide clients with the Interactive Voice Response set-up to simplify and standardize processes and provide mobile users with a variety of options and solutions.",
      },

      {
        id: "wap-products",
        title: "WAP Products",
        icon: "fa-globe",
        color: "text-vm-cyan",
        summary:
          "Mobile users love being entertained! We at Alphamovil have collected the best of entertainment for our WAP services across multiple categories.",
      },
    ],
    [],
  );

  const [activeId, setActiveId] = useState(services[0]?.id ?? "direct-carrier-billing");
  const active = services.find((s) => s.id === activeId) ?? services[0];

  return (
    <div className="min-h-screen bg-white flex flex-col vm_main_wrapper" id="services_wrapper">
      <PageBanner
        title="Services"
        description={[
          "From setting up channels that can send out content to customers, to the content in itself – all of it is provided by Alphamovil.",
          "We have products as well as services that can be opted for individually or as a collective.",
        ]}
      />

      <section className="main_content py-10 md:py-14">
        <div className="container mx-auto px-4">
          {/* Tab Head (structure inspired by website/services.php) */}
          <div className="tab_head border border-gray-200 rounded-lg overflow-hidden">
            {/* Mobile: dropdown selector */}
            <div className="md:hidden px-4 py-3 bg-gray-50">
              <select
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm font-semibold font-saira bg-white"
                value={activeId}
                onChange={(e) => setActiveId(e.target.value)}
              >
                {services.map((s) => (
                  <option key={s.id} value={s.id}>{s.title}</option>
                ))}
              </select>
            </div>

            {/* Desktop: tab pills */}
            <ul className="hidden md:flex flex-wrap justify-center gap-4 px-4">
              {services.map((s) => (
                <li
                  key={s.id}
                  className={[
                    "px-4 py-3 text-sm font-semibold cursor-pointer select-none transition-colors",
                    activeId === s.id ? "bg-vm-pink text-white" : "bg-white text-foreground hover:bg-gray-50",
                  ].join(" ")}
                  onClick={() => setActiveId(s.id)}
                >
                  {s.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Tab Content */}
          <div className="tab_content mt-8">
            {services.map((s) => (
              <div key={s.id} id={s.id} className={["cat_area", activeId === s.id ? "block" : "hidden"].join(" ")}>
                <div className="container-fluid">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    <div className="service_landscape_mob border border-gray-200 rounded-lg overflow-hidden bg-white">
                      <div className="p-6">
                        <div className="flex items-center gap-4">
                          <i className={`fas ${s.icon} text-4xl ${s.color}`}></i>
                          <h2 className="cat_head text-2xl font-bold font-saira">{s.title}</h2>
                        </div>
                        <p className="section-content mt-4">{s.summary}</p>
                      </div>
                      <div className="bg-gray-50 px-6 py-4 text-sm text-gray-600">
                        Media area (video/animation) — keeping the same “device + media” slot as the original UI.
                      </div>
                    </div>

                    <div className="cat_content">
                      <h4 className="text-lg font-bold font-saira mb-2">Problem:</h4>
                      <p className="section-content mb-6">
                        We use this area to mirror the original “Problem → Solution → Benefits” structure per service.
                      </p>

                      <h4 className="text-lg font-bold font-saira mb-2">Solution!</h4>
                      <p className="section-content mb-6">{s.summary}</p>

                      <h5 className="text-base font-bold font-saira mb-3">Key benefits:</h5>
                      <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                        <li>Mobile-first user experience</li>
                        <li>Flexible delivery across channels</li>
                        <li>Measurable outcomes and performance tracking</li>
                      </ul>
                    </div>
                  </div>

                  {/* Switch To boxes (structure inspired by website/services.php) */}
                  <div className="container-fluid mt-10">
                    <h3 className="switchto_head text-center text-lg font-bold font-saira">Switch To</h3>
                    <div className="mt-4 flex flex-wrap justify-center gap-9">
                      {services.map((x) => (
                        <button
                          key={x.id}
                          type="button"
                          className={[
                            "switch_cat_box border rounded-lg px-3 py-3 text-left transition-colors",
                            activeId === x.id ? "border-vm-pink bg-vm-pink/10" : "border-gray-200 hover:bg-gray-50",
                          ].join(" ")}
                          onClick={() => setActiveId(x.id)}
                        >
                          <div className="flex items-center gap-3">
                            <i className={`fas ${x.icon} ${x.color}`}></i>
                            <span className="text-xs sm:text-sm font-semibold">{x.title}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
