import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#members", label: "Members" },
    { href: "#research-types", label: "Research Areas" },
    { href: "#research", label: "Research" },
    { href: "#projects", label: "Projects" },
    { href: "#gallery", label: "Gallery" },
    { href: "#awards", label: "Awards" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-primary to-[#0f5a8a] shadow-lg">
      <div className="bg-black/25 py-2.5 text-sm text-white/95">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div>sudipto.eee0247.c@diu.edu.bd | 01303249802</div>
          <div>
            <a href="https://daffodilvarsity.edu.bd" className="hover:text-gold transition-colors">
              Daffodil International University
            </a>
          </div>
        </div>
      </div>
      
      <nav className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4 py-4">
            <div>
              <h1 className="text-2xl font-bold text-white font-serif">
                Artificial Intelligence Lab
              </h1>
              <p className="text-xs text-white/90 tracking-wider">
                Department of EEE | Daffodil International University
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white text-2xl"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>

          <ul className="hidden lg:flex gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-white px-5 py-3 rounded-md font-medium transition-all hover:bg-white/15 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gold transition-all group-hover:w-3/5" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {isMenuOpen && (
          <ul className="lg:hidden flex flex-col pb-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white block py-4 border-b border-white/10 hover:bg-white/10 px-4"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};
