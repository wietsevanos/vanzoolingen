const About = () => {
  return (
    <section id="over-ons" className="py-24 lg:py-32 bg-offwhite">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <p className="text-olive text-sm font-sans tracking-[0.2em] uppercase mb-4">
              Sinds jaar en dag
            </p>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-anthracite font-medium mb-8 leading-tight">
              Over Van Zoolingen
            </h2>
            
            <div className="space-y-6 text-anthracite-light font-sans leading-relaxed">
              <p>
                Welkom bij Van Zoolingen, een toegankelijke, moderne, maar toch klassieke wijnhandel.
              </p>
              <p>
                Wij specialiseren ons in wijnen uit de oude en nieuwe wereld. Ons assortiment bestaat uit wijn, champagne, likeuren, cognac, whisky, bier, kerst- en relatiegeschenken.
              </p>
              <p>
                Met persoonlijke aandacht, deskundig advies en bezorging in de regio streven wij naar uitstekende service.
              </p>
              <p>
                Wij hopen u te mogen ontvangen in de winkel.
              </p>
              <p className="font-serif text-lg text-anthracite italic pt-4">
                Team Van Zoolingen
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-olive" />
              <img
                src="/placeholder.svg"
                alt="Placeholder afbeelding (upload een foto van de winkel)"
                className="relative w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
