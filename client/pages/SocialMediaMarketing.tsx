import PageBanner from "@/components/PageBanner";

export default function SocialMediaMarketing() {
  const services = [
    {
      platform: "Facebook",
      icon: "fa-facebook",
      description: "Reach millions with targeted Facebook advertising campaigns"
    },
    {
      platform: "Instagram",
      icon: "fa-instagram",
      description: "Engage audiences with visual storytelling on Instagram"
    },
    {
      platform: "LinkedIn",
      icon: "fa-linkedin",
      description: "B2B marketing and professional networking strategies"
    },
    {
      platform: "Twitter",
      icon: "fa-twitter",
      description: "Real-time engagement and brand conversation management"
    },
    {
      platform: "YouTube",
      icon: "fa-youtube",
      description: "Video marketing and channel growth strategies"
    },
    {
      platform: "TikTok",
      icon: "fa-tiktok",
      description: "Creative content marketing for younger audiences"
    },
  ];

  return (
    <div className="vm_main_wrapper" id="social_media_marketing_wrapper">
      <PageBanner
        title="Social Media Marketing"
        description={[
          "Our Social Media Marketing Services help grow your business by increasing brand awareness, building relationships, and driving website traffic.",
          "We create engaging content, manage communities, and develop strategic campaigns across all major social media platforms to maximize your reach and engagement.",
        ]}
      />

      <section className="main_content py-10 md:py-14">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold font-saira mb-8">Platform Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="p-6 md:p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-all hover:border-vm-cyan"
              >
                <i className={`fab ${service.icon} text-5xl text-vm-cyan mb-4 block`}></i>
                <h3 className="text-xl font-bold font-saira text-foreground mb-3">{service.platform}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 md:mt-16 bg-cyan-50 p-6 md:p-8 rounded-lg">
            <h3 className="text-2xl font-bold font-saira mb-4 text-vm-cyan">Our Approach</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
              <div className="flex items-start gap-3">
                <i className="fas fa-check text-vm-cyan mt-1 flex-shrink-0"></i>
                <span>
                  <strong>Strategy First:</strong> We develop comprehensive social media strategies tailored to your goals
                </span>
              </div>
              <div className="flex items-start gap-3">
                <i className="fas fa-check text-vm-cyan mt-1 flex-shrink-0"></i>
                <span>
                  <strong>Content Creation:</strong> Engaging, shareable content designed for maximum impact
                </span>
              </div>
              <div className="flex items-start gap-3">
                <i className="fas fa-check text-vm-cyan mt-1 flex-shrink-0"></i>
                <span>
                  <strong>Community Management:</strong> Active engagement and relationship building with your audience
                </span>
              </div>
              <div className="flex items-start gap-3">
                <i className="fas fa-check text-vm-cyan mt-1 flex-shrink-0"></i>
                <span>
                  <strong>Analytics:</strong> Data-driven insights to optimize performance
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
