import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-anthracite/70 via-anthracite/75 to-anthracite/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <p className="text-olive-light text-base md:text-lg font-sans font-semibold tracking-[0.3em] uppercase mb-6 drop-shadow-lg">
            Wijnhandel · Slijterij
          </p>
          
          <h1 className="font-serif text-5xl md:text-6xl lg:text-8xl text-offwhite font-bold leading-tight mb-6 drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
            Welkom bij Wijnhandel<br />van Zoolingen
          </h1>
          
          <p className="font-serif text-2xl md:text-3xl text-beige font-medium italic mb-4 drop-shadow-lg">
            Toegankelijke, moderne en klassieke wijnhandel
          </p>
          
          <p className="text-beige-warm text-lg md:text-xl font-sans font-medium mb-12 max-w-2xl mx-auto drop-shadow-md">
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

    </section>
  );
};

export default Hero;
