import heroBg from '@/assets/hero-bg.png';

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
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl text-offwhite font-medium leading-tight mb-6 drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
            Welkom bij Wijnhandel<br />van Zoolingen
          </h1>
          
          <p className="font-serif text-xl md:text-2xl text-beige italic mb-12 drop-shadow-lg">
            Persoonlijk geselecteerde kwaliteitswijnen
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
