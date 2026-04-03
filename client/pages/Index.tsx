import Footer from "@/components/Footer";
import ScrollAnimationSection from "@/components/ScrollAnimationSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import { Link } from "react-router-dom";
import HomePhoneScroller from "@/components/HomePhoneScroller";
import { useEffect, useMemo, useRef, useState } from "react";

export default function Index() {
  const scrollRootRef = useRef<HTMLElement | null>(null);
  const isAnimatingRef = useRef(false);
  const touchStartYRef = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const phoneSections = useMemo(
    () => [
      { id: "about", label: "About", color: "#1087c9", icon: "fa-info-circle", screenSrc: "/vm-home/screens/about_bg.jpg" },
      { id: "digital-marketing", label: "Digital Marketing", color: "#2e2c76", icon: "fa-chart-line", screenSrc: "/vm-home/screens/digitalmarketing_bg.jpg" },
      { id: "social-media", label: "Social Media", color: "#31bbbd", icon: "fa-share-alt", screenSrc: "/vm-home/screens/socialmedia_bg.png" },
      { id: "services", label: "Services", color: "#31bbbd", icon: "fa-layer-group", screenSrc: "/vm-home/screens/service_bg.jpg" },
      { id: "platform", label: "Platform", color: "#1ab182", icon: "fa-broadcast-tower", screenSrc: "/vm-home/screens/platform_bg.jpg" },
      { id: "content", label: "Content", color: "#d02f85", icon: "fa-book", screenSrc: "/vm-home/screens/content_bg.jpg" },
      { id: "contact", label: "Contact", color: "#f3764a", icon: "fa-envelope", screenSrc: "/vm-home/screens/contact_bg.jpg" },
      { id: "achievements", label: "Achievements", color: "#2e2c76", icon: "fa-trophy" },
    ],
    [],
  );

  // Home behaves like fullpage.js: lock page scroll to this container.
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;
    const prevHtmlHeight = html.style.height;
    const prevBodyHeight = body.style.height;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    html.style.height = "100%";
    body.style.height = "100%";

    return () => {
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
      html.style.height = prevHtmlHeight;
      body.style.height = prevBodyHeight;
    };
  }, []);

  // Keep an active section index (for nav accent color + optional scroll behavior).
  useEffect(() => {
    const root = scrollRootRef.current;
    if (!root) return;

    const els = phoneSections
      .map((s) => root.querySelector<HTMLElement>(`[data-vm-home-section="${s.id}"]`))
      .filter(Boolean) as HTMLElement[];

    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (!visible?.target) return;
        const id = (visible.target as HTMLElement).getAttribute("data-vm-home-section");
        const idx = id ? phoneSections.findIndex((s) => s.id === id) : -1;
        if (idx >= 0) setActiveIndex(idx);
      },
      { root, threshold: [0.35, 0.5, 0.65, 0.8] },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [phoneSections]);

  // Update menu icon accent color like the original homepage.
  useEffect(() => {
    const active = phoneSections[activeIndex];
    if (!active) return;
    document.documentElement.style.setProperty("--vm-nav-accent", active.color);
    return () => {
      document.documentElement.style.removeProperty("--vm-nav-accent");
    };
  }, [activeIndex, phoneSections]);

  // Fullpage-like wheel/touch snapping (one section per interaction).
  useEffect(() => {
    const root = scrollRootRef.current;
    if (!root) return;

    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

    const scrollToIndex = (idx: number) => {
      const target = phoneSections[idx];
      if (!target) return;
      const el = root.querySelector<HTMLElement>(`[data-vm-home-section="${target.id}"]`);
      if (!el) return;

      isAnimatingRef.current = true;
      el.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth", block: "start" });
      window.setTimeout(() => {
        isAnimatingRef.current = false;
      }, prefersReduced ? 50 : 750);
    };

    const onWheel = (e: WheelEvent) => {
      // Only handle intentional vertical scrolls
      if (Math.abs(e.deltaY) < 10 || Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;
      if (isAnimatingRef.current) {
        e.preventDefault();
        return;
      }
      e.preventDefault();
      const dir = e.deltaY > 0 ? 1 : -1;
      const next = Math.max(0, Math.min(phoneSections.length - 1, activeIndex + dir));
      if (next !== activeIndex) scrollToIndex(next);
    };

    const onTouchStart = (e: TouchEvent) => {
      touchStartYRef.current = e.touches[0]?.clientY ?? null;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (isAnimatingRef.current) e.preventDefault();
    };
    const onTouchEnd = (e: TouchEvent) => {
      const startY = touchStartYRef.current;
      touchStartYRef.current = null;
      if (startY == null) return;
      const endY = e.changedTouches[0]?.clientY ?? startY;
      const delta = startY - endY;
      if (Math.abs(delta) < 40) return;
      if (isAnimatingRef.current) return;
      const dir = delta > 0 ? 1 : -1;
      const next = Math.max(0, Math.min(phoneSections.length - 1, activeIndex + dir));
      if (next !== activeIndex) scrollToIndex(next);
    };

    root.addEventListener("wheel", onWheel, { passive: false });
    root.addEventListener("touchstart", onTouchStart, { passive: true });
    root.addEventListener("touchmove", onTouchMove, { passive: false });
    root.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      root.removeEventListener("wheel", onWheel as any);
      root.removeEventListener("touchstart", onTouchStart as any);
      root.removeEventListener("touchmove", onTouchMove as any);
      root.removeEventListener("touchend", onTouchEnd as any);
    };
  }, [activeIndex, phoneSections]);

  return (
    <div className="h-[100dvh] bg-white flex flex-col vm_main_wrapper" id="index_wrapper">
      {/* Main Content */}
      <main
        className="w-full flex-1 overflow-y-auto vm-mobile-scroll vm-fullpage-scroll"
        ref={(el) => {
          scrollRootRef.current = el;
        }}
      >
        <HomePhoneScroller sections={phoneSections} scrollRoot={scrollRootRef.current} />

        {/* About Section */}
        <section
          className="bg-gradient-to-r from-blue-50 to-cyan-50 vm-snap-section vm-fullpage-section"
          data-vm-home-section="about"
        >
          <div className="container mx-auto px-4 vm-home-content-rail">
            <div className="vm-home-section-inner">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
              <div>
                <h2 className="section-head mb-8 text-vm-blue">About</h2>
                <div className="space-y-4 section-content">
                  <p>
                    Technology has revolutionized the world, and at Alphamovil we believe in revolutionizing technology.
                  </p>
                  <p>
                    While we provide end-to-end solutions to telecommunication needs, we strive to develop platforms that enhance the very usage of technology. With a combined experience of 30+ years in the industry, the team has understood the gap in the telecom industry; the need for a company that provides marketing and technological requirements to their client.
                  </p>
                </div>
                <Link to="/about" className="inline-block mt-8">
                  <button className="btn-vm-pink">Know More</button>
                </Link>
              </div>
              </div>
            </div>
          </div>
        </section>

        {/* Digital Marketing Section */}
        <section className="bg-white vm-snap-section vm-fullpage-section" data-vm-home-section="digital-marketing">
          <div className="container mx-auto px-4 vm-home-content-rail">
            <div className="vm-home-section-inner">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
              <div>
                <h2 className="section-head mb-8 text-vm-darkblue">Digital Marketing</h2>
                <p className="section-content mb-8">
                  Alphamovil offers 360º digital marketing solutions to clients. We cover all aspects of digital marketing on all digital devices and offer various solutions to optimize your digital advertising spends.
                </p>
                <Link to="/digital-marketing">
                  <button className="btn-vm-pink">Know More</button>
                </Link>
              </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media Marketing Section */}
        <section className="bg-gradient-to-r from-cyan-50 to-teal-50 vm-snap-section vm-fullpage-section" data-vm-home-section="social-media">
          <div className="container mx-auto px-4 vm-home-content-rail">
            <div className="vm-home-section-inner">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
              <div>
                <h2 className="section-head mb-8 text-vm-cyan">Social Media Marketing</h2>
                <p className="section-content mb-8">
                  Our Social Media Marketing Services help grow your business by increasing brand awareness, building relationships, and driving website traffic.
                </p>
                <a href="#services">
                  <button className="btn-vm-pink">Know More</button>
                </a>
              </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="bg-white vm-snap-section vm-fullpage-section" data-vm-home-section="services">
          <div className="container mx-auto px-4 vm-home-content-rail">
            <div className="vm-home-section-inner flex-col justify-center">
              <h2 className="section-head mb-12 text-center text-vm-cyan">Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* DCB */}
              <div className="p-5 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <i className="fas fa-credit-card text-3xl text-vm-pink mb-3 block"></i>
                <h3 className="text-lg font-bold font-saira text-foreground mb-2">Direct Carrier Billing</h3>
                <p className="text-gray-600 text-sm">
                  Direct Carrier Billing circumvents that problem! We provide the Direct Carrier Billing set-up. The best way to incorporate this is by targeting users with an active mobile subscription, to provide an alternative to credit and debit card payments.
                </p>
                <Link to="/services#direct-carrier-billing" className="inline-block mt-4 text-vm-pink hover:text-vm-darkblue transition-colors text-sm font-semibold">
                  Know More →
                </Link>
              </div>

              {/* Messaging */}
              <div className="p-5 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <i className="fas fa-comments text-3xl text-vm-green mb-3 block"></i>
                <h3 className="text-lg font-bold font-saira text-foreground mb-2">Messaging Platform</h3>
                <p className="text-gray-600 text-sm">
                  Content is king and that has been established as more and more people look for valuable information on certain topics.
                </p>
                <Link to="/services#messaging-platform" className="inline-block mt-4 text-vm-pink hover:text-vm-darkblue transition-colors text-sm font-semibold">
                  Know More →
                </Link>
              </div>

              {/* IVR */}
              <div className="p-5 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <i className="fas fa-phone text-3xl text-vm-blue mb-3 block"></i>
                <h3 className="text-lg font-bold font-saira text-foreground mb-2">IVR Services</h3>
                <p className="text-gray-600 text-sm">
                  Often times, voice works better than text! Some processes would require a lot of back and forth messaging between the operator and the end-user.
                </p>
                <Link to="/services#ivr-services" className="inline-block mt-4 text-vm-pink hover:text-vm-darkblue transition-colors text-sm font-semibold">
                  Know More →
                </Link>
              </div>

              {/* WAP */}
              <div className="p-5 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <i className="fas fa-globe text-3xl text-vm-cyan mb-3 block"></i>
                <h3 className="text-lg font-bold font-saira text-foreground mb-2">WAP Products</h3>
                <p className="text-gray-600 text-sm">
                  Mobile users love being entertained! So keeping in tune with the latest requirements, we at Alphamovil have collected the best of entertainment for our WAP services!
                </p>
                <Link to="/services#wap-products" className="inline-block mt-4 text-vm-pink hover:text-vm-darkblue transition-colors text-sm font-semibold">
                  Know More →
                </Link>
              </div>

              {/* Games */}
              <div className="p-5 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <i className="fas fa-gamepad text-3xl text-vm-darkblue mb-3 block"></i>
                <h3 className="text-lg font-bold font-saira text-foreground mb-2">Games</h3>
                <p className="text-gray-600 text-sm">
                  Mobile gaming entertainment at your fingertips with Alphamovil's premium gaming solutions and services.
                </p>
                <Link to="/services#games" className="inline-block mt-4 text-vm-pink hover:text-vm-darkblue transition-colors text-sm font-semibold">
                  Know More →
                </Link>
              </div>
            </div>
            </div>
          </div>
        </section>

        {/* Platform Section */}
        <section className="bg-gradient-to-r from-green-50 to-cyan-50 vm-snap-section vm-fullpage-section" data-vm-home-section="platform">
          <div className="container mx-auto px-4 vm-home-content-rail">
            <div className="vm-home-section-inner">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
              <div>
                <h2 className="section-head mb-8 text-vm-green">Platform</h2>
                <div className="space-y-4 section-content">
                  <p>
                    An old technology that evolved when mobile telephone services became a part of the norm.
                  </p>
                  <p>
                    It is still a widely used technology for communication. We developed and deployed SMS subscription packs, SMS Short Codes, Premium Numbers and Bulk SMS Gateway.
                  </p>
                </div>
                <Link to="/platform" className="inline-block mt-8">
                  <button className="btn-vm-pink">Know More</button>
                </Link>
              </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="bg-white vm-snap-section vm-fullpage-section" data-vm-home-section="content">
          <div className="container mx-auto px-4 vm-home-content-rail">
            <div className="vm-home-section-inner">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
              <div>
                <h2 className="section-head mb-8 text-vm-pink">Content</h2>
                <div className="space-y-4 section-content">
                  <p>
                    Apart from being technologically forward, we also keep on acquiring access and rights to communication that would find a global audience.
                  </p>
                  <p>
                    We have the channel, as well as the content, across so many categories. What's more? We regularly update our content repositories to provide users with the latest and most interesting content for end users!
                  </p>
                </div>
                <Link to="/content" className="inline-block mt-8">
                  <button className="btn-vm-pink">Know More</button>
                </Link>
              </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gradient-to-r from-orange-50 to-red-50 vm-snap-section vm-fullpage-section" data-vm-home-section="contact">
          <div className="container mx-auto px-4 vm-home-content-rail">
            <div className="vm-home-section-inner">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
              <div>
                <h2 className="section-head mb-8 text-vm-orange">Contact</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-lg mb-2">Alphamovil Digital Solutions LLP</h3>
                    <p className="text-foreground flex items-start gap-2">
                      <i className="fas fa-map-marker-alt text-vm-pink mt-1 flex-shrink-0"></i>
                      <span>Sector 54, Gurgaon, Haryana, 122011</span>
                    </p>
                  </div>

                  <p className="text-foreground font-semibold">Have an enquiry? Get in Touch!</p>
                  <div className="space-y-3">
                    <p className="text-foreground flex items-center gap-3">
                      <i className="fas fa-phone text-vm-pink"></i>
                      <a href="tel:+919667687077" className="hover:text-vm-pink transition-colors">
                        +91 9667687077
                      </a>
                    </p>
                    <p className="text-foreground flex items-center gap-3">
                      <i className="fas fa-envelope text-vm-pink"></i>
                      <a href="mailto:bd@alphamovil.com" className="hover:text-vm-pink transition-colors">
                        bd@alphamovil.com
                      </a>
                    </p>
                  </div>
                </div>
                <Link to="/contact" className="inline-block mt-8">
                  <button className="btn-vm-pink">Contact Us</button>
                </Link>
              </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section
          className="bg-gradient-to-r from-vm-darkblue to-vm-blue text-white vm-snap-section vm-fullpage-section"
          data-vm-home-section="achievements"
        >
          <div className="container mx-auto px-4 vm-home-content-rail">
            <div className="vm-home-section-inner flex-col justify-center">
              <h2 className="section-head mb-12 text-center text-white">Our Achievements</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <ScrollAnimationSection delay={0}>
                <AnimatedCounter end={30} label="Years of Experience" suffix="+" />
              </ScrollAnimationSection>
              <ScrollAnimationSection delay={0.1}>
                <AnimatedCounter end={500} label="Happy Clients" />
              </ScrollAnimationSection>
              <ScrollAnimationSection delay={0.2}>
                <AnimatedCounter end={50} label="Countries Served" />
              </ScrollAnimationSection>
              <ScrollAnimationSection delay={0.3}>
                <AnimatedCounter end={100} label="Team Members" />
              </ScrollAnimationSection>
            </div>
            </div>
          </div>
        </section>

        <section className="vm-snap-section">
          <Footer />
        </section>
      </main>
    </div>
  );
}
