import { Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 bg-anthracite">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo / Name */}
          <div className="text-center md:text-left">
            <p className="font-serif text-2xl text-offwhite font-medium tracking-wide">
              Van Zoolingen
            </p>
            <p className="text-beige/60 text-sm font-sans mt-1">
              Wijnhandel · Slijterij
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
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
              href="https://wa.me/31612345678"
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

          {/* Copyright & KVK */}
          <div className="text-center md:text-right">
            <p className="text-beige/50 text-sm font-sans">
              © {new Date().getFullYear()} Wijnhandel van Zoolingen
            </p>
            <p className="text-beige/40 text-xs font-sans mt-1">
              KVK: 61120707
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
