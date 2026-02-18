import { Facebook, Instagram } from 'lucide-react';
import nix18Logo from '@/assets/nix18-logo.png';
import footerLogo from '@/assets/footer-logo.png';

const Footer = () => {
  return (
    <footer className="py-12 bg-anthracite">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Logo */}
          <div className="text-center md:text-left">
            <img
              src={footerLogo}
              alt="Van Zoolingen Wijnhandel-Slijterij"
              className="h-16 md:h-20 w-auto invert opacity-80"
            />
          </div>

          {/* Social Links - Center */}
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://nl-nl.facebook.com/wijnhandelvanzoolingen"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center border border-beige/30 text-beige hover:border-bordeaux hover:text-bordeaux transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} strokeWidth={1.5} />
            </a>
            <a
              href="https://www.instagram.com/wijnhandelvanzoolingen/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center border border-beige/30 text-beige hover:border-bordeaux hover:text-bordeaux transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} strokeWidth={1.5} />
            </a>
            <a
              href="https://wa.me/31628351298"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center border border-beige/30 text-beige hover:border-bordeaux hover:text-bordeaux transition-colors"
              aria-label="WhatsApp"
            >
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
              </svg>
            </a>
          </div>

          {/* NIX18 Block - Right */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <img 
              src={nix18Logo} 
              alt="NIX18" 
              className="h-8 md:h-10 w-auto mb-3"
            />
            <div className="text-beige/50 text-xs font-sans space-y-0.5 leading-relaxed">
              <p>18+, verkoop van alcohol uitsluitend aan volwassenen</p>
              <p>Geen alcohol onder de 18 jaar</p>
              <p>Legitimeren verplicht tot 25 jaar</p>
            </div>
          </div>
        </div>

        {/* Copyright & KVK */}
        <div className="mt-10 pt-6 border-t border-beige/10 text-center">
          <p className="text-beige/50 text-sm font-sans">
            © {new Date().getFullYear()} Wijnhandel van Zoolingen
          </p>
          <p className="text-beige/40 text-xs font-sans mt-1">
            KVK: 61120707
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
