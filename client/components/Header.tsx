import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const [showTagline, setShowTagline] = useState<'brand' | 'slogan' | null>(null);

  // Loop: brand 10s → slogan 10s → repeat
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const cycle = () => {
      setShowTagline(null);
      timeout = setTimeout(() => {
        setShowTagline('brand');
        timeout = setTimeout(() => {
          setShowTagline(null);
          timeout = setTimeout(() => {
            setShowTagline('slogan');
            timeout = setTimeout(() => {
              setShowTagline(null);
              timeout = setTimeout(cycle, 600);
            }, 5000);
          }, 600);
        }, 5000);
      }, 2000);
    };
    cycle();
    return () => clearTimeout(timeout);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Digital Marketing", href: "/digital-marketing" },
    { label: "Services", href: "/services" },
    { label: "Platform", href: "/platform" },
    { label: "Content", href: "/content" },
    { label: "Partners", href: "/partners" },
    { label: "Contact", href: "/contact" },
  ];

  const sectionColors = [
    "#d02f85", // home
    "#1087c9", // about
    "#2e2c76", // digital marketing
    "#31bbbd", // social media
    "#31bbbd", // services
    "#1ab182", // platform
    "#d02f85", // content
    "#f3764a", // contact
  ];

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <nav className="navbar flex items-center justify-between px-4 md:px-8 py-4">
        {/* Logo + Animated Tagline */}
        <Link to="/" className="flex-shrink-0 flex items-center gap-2 overflow-hidden max-w-[70%] md:max-w-none">
          <img
            src="/vm-site/logo_ltm.png"
            alt="Alphamovil"
            className="h-8 w-auto"
            draggable={false}
          />
          <AnimatePresence mode="wait">
            {showTagline === 'brand' && (
              <motion.span
                key="brand"
                initial={{ x: -40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -40, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-sm md:text-xl font-bold font-saira text-vm-pink whitespace-nowrap"
              >
                Alphamovil Digital
              </motion.span>
            )}
            {showTagline === 'slogan' && (
              <motion.span
                key="slogan"
                initial={{ x: -40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -40, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-xs md:text-base font-saira text-vm-darkblue whitespace-nowrap"
              >
                Revolutionizing technology for enhanced communication solutions
              </motion.span>
            )}
          </AnimatePresence>
        </Link>

        {/* Desktop Navigation */}
        <motion.ul
          className="hidden md:flex items-center gap-8 ml-auto"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
        >
          {navItems.map((item, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Link
                to={item.href}
                className="text-foreground font-nunito text-sm hover:text-vm-pink transition-colors"
                onClick={() => setActiveSection(idx)}
              >
                {item.label}
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 ml-auto"
          aria-label="Toggle menu"
        >
          <span
            className="block w-6 h-0.5 bg-foreground transition-all duration-200"
            style={{
              backgroundColor: `var(--vm-nav-accent, ${sectionColors[activeSection]})`,
              transform: isMenuOpen ? "rotate(45deg) translate(8px, 8px)" : "",
            }}
          ></span>
          <span
            className="block w-6 h-0.5 bg-foreground transition-all duration-200"
            style={{
              backgroundColor: `var(--vm-nav-accent, ${sectionColors[activeSection]})`,
              opacity: isMenuOpen ? 0 : 1,
            }}
          ></span>
          <span
            className="block w-6 h-0.5 bg-foreground transition-all duration-200"
            style={{
              backgroundColor: `var(--vm-nav-accent, ${sectionColors[activeSection]})`,
              transform: isMenuOpen ? "rotate(-45deg) translate(8px, -8px)" : "",
            }}
          ></span>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4 max-h-[70dvh] overflow-y-auto">
          <ul className="flex flex-col gap-2 px-4">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <Link
                  to={item.href}
                  className="text-foreground font-nunito text-base hover:text-vm-pink transition-colors block py-3"
                  onClick={() => {
                    setActiveSection(idx);
                    setIsMenuOpen(false);
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
