import heroBg from '@/assets/hero-bg.png';
import heroLogo from '@/assets/hero-logo.png';
import nix18Logo from '@/assets/nix18-logo.png';
import { LiquidButton } from '@/components/ui/liquid-glass-button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* 18+ Badge */}
      <div className="absolute top-24 right-4 md:top-28 md:right-6 z-20">
        <img 
          src={nix18Logo} 
          alt="NIX18 - 18+" 
          className="h-6 md:h-8 w-auto"
        />
      </div>

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-anthracite/70 via-anthracite/75 to-anthracite/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-12 text-center">
        <div className="max-w-6xl mx-auto animate-fade-in">
          {/* Logo */}
          <div className="mb-3 md:mb-8">
            <img 
              src={heroLogo} 
              alt="Van Zoolingen Wijnhandel-Slijterij" 
              className="w-full max-w-[95vw] sm:max-w-2xl md:max-w-4xl lg:max-w-5xl mx-auto h-auto drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)] invert"
            />
          </div>
          
          <p className="font-serif text-sm md:text-xl text-olive-light font-semibold mb-4 md:mb-10 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Met passie geproefd, met zorg geselecteerd
          </p>
          
          <div className="flex justify-center px-4">
            <LiquidButton
              asChild
              size="xxl"
              className="h-10 px-5 md:h-11 md:px-8 text-offwhite text-xs md:text-sm font-medium tracking-wide uppercase rounded-none z-10 w-auto"
            >
              <a href="#nieuwsbrief" style={{ color: 'hsl(40, 20%, 98%)' }}>
                Schrijf je in voor onze nieuwsbrief
              </a>
            </LiquidButton>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
