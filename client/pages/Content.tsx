import PageBanner from "@/components/PageBanner";

export default function Content() {
  const contentCategories = [
    { name: "Audio Books", icon: "fa-headphones", color: "text-red-600" },
    { name: "Global Content", icon: "fa-globe", color: "text-blue-600" },
    { name: "VOD (Video On Demand)", icon: "fa-play-circle", color: "text-red-500" },
    { name: "HD Games", icon: "fa-gamepad", color: "text-green-600" },
    { name: "Contest", icon: "fa-trophy", color: "text-orange-600" },
    { name: "Health and Fitness", icon: "fa-heartbeat", color: "text-purple-600" },
  ];

  return (
    <div className="vm_main_wrapper" id="content_wrapper">
      <PageBanner
        title="Content"
        description={[
          "Apart from being technologically forward, we also keep on acquiring access and rights to communication that would find a global audience.",
          "We have the channel, as well as the content, across so many categories. What's more? We regularly update our content repositories to provide users with the latest and most interesting content for end users!",
        ]}
      />

      <section className="main_content py-10 md:py-14">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold font-saira mb-8">Content Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {contentCategories.map((category, idx) => (
              <div
                key={idx}
                className="p-6 md:p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-all hover:border-vm-pink"
              >
                <i className={`fas ${category.icon} text-5xl ${category.color} mb-4 block`}></i>
                <h3 className="text-xl font-bold font-saira text-foreground">{category.name}</h3>
                <p className="text-gray-600 mt-2">
                  {category.name === "Contest"
                    ? "Exciting contests and competitions to engage users, reward participation, and drive platform growth."
                    : `Curated ${category.name.toLowerCase()} content designed for maximum engagement and user satisfaction.`}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 md:mt-16 bg-pink-50 p-6 md:p-8 rounded-lg">
            <h3 className="text-2xl font-bold font-saira mb-4 text-vm-pink">Regular Updates</h3>
            <p className="section-content">
              Our content team works continuously to refresh and update our repositories with the latest and most interesting content. We ensure that our users always have access to trending and high-quality content across all categories.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
