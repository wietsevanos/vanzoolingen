import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-anthracite/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <p className="text-olive-light text-sm md:text-base font-sans tracking-[0.3em] uppercase mb-6">
            Wijnhandel · Slijterij
          </p>
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl text-offwhite font-medium leading-tight mb-6">
            Welkom bij Wijnhandel<br />van Zoolingen
          </h1>
          
          <p className="font-serif text-xl md:text-2xl text-beige italic mb-4">
            Toegankelijke, moderne en klassieke wijnhandel
          </p>
          
          <p className="text-beige-warm/90 text-base md:text-lg font-sans mb-12 max-w-2xl mx-auto">
            Ontdek wijnen uit de oude en nieuwe wereld
          </p>
          
          <a
            href="#nieuwsbrief"
            className="inline-block px-10 py-4 bg-bordeaux text-primary-foreground text-base font-medium tracking-wide uppercase hover:bg-bordeaux-dark transition-colors"
          >
            Schrijf je in voor onze nieuwsbrief
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in-slow">
        <div className="w-px h-16 bg-beige/40" />
      </div>
    </section>
  );
};

export default Hero;
