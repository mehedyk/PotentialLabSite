import { Mail, Phone, MapPin, Facebook, Linkedin, Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contact" className="bg-gradient-to-br from-primary to-[#0f5a8a] text-white py-16 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h4 className="text-xl font-semibold mb-6 pb-3 border-b-2 border-gold">
              Artificial Intelligence Lab
            </h4>
            <p className="text-white/85 leading-relaxed">
              Department of Electrical & Electronic Engineering<br />
              Daffodil International University<br />
              Permanent Campus, Ashulia<br />
              Dhaka-1342, Bangladesh
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6 pb-3 border-b-2 border-gold">
              Quick Links
            </h4>
            <div className="space-y-3">
              {["Home", "About", "Members", "Research", "Projects", "Gallery", "Awards"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-white/85 hover:text-gold hover:pl-2 transition-all"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6 pb-3 border-b-2 border-gold">
              Contact Information
            </h4>
            <div className="space-y-4 text-white/85">
              <div className="flex items-start gap-3">
                <Mail size={18} className="mt-1 flex-shrink-0" />
                <span>sudipto.eee0247.c@diu.edu.bd</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={18} className="mt-1 flex-shrink-0" />
                <span>01303249802</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>Room: EEE-401, Building-4</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6 pb-3 border-b-2 border-gold">
              Connect With Us
            </h4>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/sudipto.pramanik.2024/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center transition-all hover:-translate-y-1"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/sudipto-pramanik-081073218"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center transition-all hover:-translate-y-1"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/sudiptopramanik"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center transition-all hover:-translate-y-1"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/15 text-center text-white/70">
          <p>
            A{" "}
            <a 
              href="https://github.com/mehedyk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gold hover:text-white transition-colors font-semibold"
            >
              mehedyk
            </a>
            {" "}product © 2025 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
