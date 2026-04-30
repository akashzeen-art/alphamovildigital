import { Link } from "react-router-dom";

export default function MobileHeaderLinks() {
  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Digital Marketing", href: "/digital-marketing" },
    { label: "Services", href: "/services" },
    { label: "Platform", href: "/platform" },
    { label: "Content", href: "/content" },
    { label: "Partners", href: "/partners" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className="mobile_header md:hidden border-b border-gray-200 bg-white">
      <ul className="flex gap-4 px-4 py-3 overflow-x-auto whitespace-nowrap text-sm">
        {links.map((l) => (
          <li key={l.href} className="flex-shrink-0">
            <Link to={l.href} className="text-foreground hover:text-vm-pink transition-colors">
              {l.label.toLowerCase()}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

