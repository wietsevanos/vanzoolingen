import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo.png';

const navLinks = [
  { href: '#over-ons', label: 'Over Ons' },
  { href: '#assortiment', label: 'Assortiment' },
  { href: '#waarom', label: 'Waarom Wij' },
  { href: '#locatie', label: 'Bezoek Ons' },
  { href: '#contact', label: 'Contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-offwhite/95 backdrop-blur-sm border-b-2 border-bordeaux">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-end gap-3 mb-3">
            <img 
              src={logo} 
              alt="Van Zoolingen logo" 
              className="h-14 w-auto object-contain"
            />
            <span className="font-serif text-xl md:text-2xl font-semibold text-anthracite tracking-wide">
              Van Zoolingen
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-anthracite-light hover:text-bordeaux transition-colors tracking-wide uppercase"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <a
            href="#nieuwsbrief"
            className="hidden lg:block px-6 py-3 bg-bordeaux text-primary-foreground text-sm font-medium tracking-wide uppercase hover:bg-bordeaux-dark transition-colors"
          >
            Nieuwsbrief
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-anthracite"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-6 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm font-medium text-anthracite-light hover:text-bordeaux transition-colors tracking-wide uppercase py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#nieuwsbrief"
                onClick={() => setIsMenuOpen(false)}
                className="mt-4 px-6 py-3 bg-bordeaux text-primary-foreground text-sm font-medium tracking-wide uppercase text-center hover:bg-bordeaux-dark transition-colors"
              >
                Nieuwsbrief
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
