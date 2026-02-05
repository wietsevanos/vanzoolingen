import heroBg from '@/assets/hero-bg.png';
import heroLogo from '@/assets/hero-logo.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* 18+ Badge */}
      <div className="absolute top-4 right-4 md:top-6 md:right-6 z-20">
        <span className="bg-anthracite/80 text-offwhite text-xs md:text-sm font-sans font-medium px-3 py-1.5 backdrop-blur-sm border border-beige/20">
          18+ / NIX18
        </span>
      </div>

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-anthracite/70 via-anthracite/75 to-anthracite/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
        <div className="max-w-6xl mx-auto animate-fade-in">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src={heroLogo} 
              alt="Van Zoolingen Wijnhandel-Slijterij" 
              className="w-full max-w-4xl lg:max-w-5xl mx-auto h-auto drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)] invert"
            />
          </div>
          
          <p className="font-serif text-xl md:text-2xl text-olive-light font-semibold mb-12 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Met passie geproefd, met zorg geselecteerd
          </p>
          
          <a
            href="#nieuwsbrief"
            className="inline-block px-10 py-4 bg-bordeaux text-primary-foreground text-base font-medium tracking-wide uppercase hover:bg-bordeaux-dark transition-colors"
          >
            Schrijf je in voor onze nieuwsbrief
          </a>
        </div>
      </div>

    </section>
  );
};

export default Hero;
