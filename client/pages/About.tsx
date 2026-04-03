import PageBanner from "@/components/PageBanner";

export default function About() {
  return (
    <div className="vm_main_wrapper" id="about_wrapper">
      <PageBanner
        title="About"
        description="Technology has revolutionized the world, and at Alphamovil we believe in revolutionizing technology. While we provide end-to-end solutions to telecommunication needs, we strive to develop platforms that enhance the very usage of technology."
      />

      <section className="main_content py-10 md:py-14">
        <div className="container mx-auto px-4">
          <section className="our_strength">
            <div className="row">
              <div className="col-xs-12">
                <h2 className="inner_section_head text-2xl md:text-3xl font-bold font-saira mb-6">Our Strength</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <p className="strength_list section-content">
                  Our strength lies in the ability to constantly be on top of the <strong>technological game.</strong>
                </p>
                <p className="strength_list section-content">
                  We have the capability to provide <strong>cutting-edge technology</strong> when it comes to tech platforms.
                </p>
                <p className="strength_list section-content">
                  <strong>DCB, WAP, USSD, SMS, IVR and beyond</strong> — you name it, we can provide it.
                </p>
                <p className="strength_list section-content">
                  Our network of collaborators grows rapidly as we now work with over <strong>50+ collaborators internationally.</strong>
                </p>
              </div>

              <div className="space-y-4">
                <p className="strength_list section-content">
                  Our content aggregation and distribution is unmatched as we have the license rights over a <strong>myriad of content, games and more.</strong>
                </p>
                <p className="strength_list section-content">
                  At our core, we seek to <strong>develop newer platforms and products</strong> that make communication easier through more advanced technology.
                </p>
                <p className="strength_list section-content">
                  The company currently powers content for over <strong>10 OTT platforms</strong> and has products live in more than <strong>15 operators across 8 countries.</strong>
                </p>
              </div>
            </div>
          </section>
        </div>

        <section className="core_belief mt-14 md:mt-20 bg-gradient-to-r from-blue-50 to-cyan-50 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h2 className="inner_section_head text-2xl md:text-3xl font-bold font-saira mb-4">Our Core Belief</h2>
                <p className="section-content">
                  <strong>Our number one resource – </strong>
                  <br />
                  our people. Our internal culture is built on the pillars of passion, personal development and a sense of work life balance.
                </p>
              </div>
              <div>
                <h2 className="inner_section_head text-2xl md:text-3xl font-bold font-saira mb-4">Our Mission</h2>
                <p className="section-content">
                  To go above and beyond with every responsibility we undertake. We understand what our customer needs and challenge ourselves to provide the best set of solutions.
                </p>
                <p className="section-content mt-4">
                  Technology is dynamic, and giving our clients the latest and most user-friendly solutions is what we believe in.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="team_n_event mt-14 md:mt-20">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h3 className="inner_section_head text-2xl md:text-3xl font-bold font-saira">Our Team</h3>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {[1,2,3,4,5,6,7,8].map((n) => (
                <div key={n} className="scroll_inside_device rounded-lg overflow-hidden aspect-[4/3]">
                  <img src={`/team/${n}.png`} alt={`Team ${n}`} className="w-full h-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
