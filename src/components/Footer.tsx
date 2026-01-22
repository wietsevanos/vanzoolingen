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
          </div>

          {/* Copyright */}
          <p className="text-beige/50 text-sm font-sans">
            © {new Date().getFullYear()} Wijnhandel van Zoolingen
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
