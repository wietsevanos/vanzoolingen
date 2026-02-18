import aboutPhoto from "@/assets/about-owners.png";

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
                Van Zoolingen is een toegankelijke wijnhandel met een klassieke basis, waar traditie en vernieuwing samenkomen. In een warme en gastvrije omgeving staan smaak, kwaliteit en beleving centraal. Wij willen een plek zijn waar zowel de beginnende liefhebber als de echte kenner zich thuis voelt.
              </p>
              <p>
                Van karaktervolle klassiekers tot verrassende ontdekkingen: elke fles in ons assortiment is met zorg geselecteerd op kwaliteit en smaak. Daarnaast bieden wij een uitgebreide collectie champagne, likeuren, cognac, jenever, gin en whisky. Ook voor stijlvolle kerstpakketten en relatiegeschenken – particulier of zakelijk – bent u bij ons aan het juiste adres.
              </p>
              <p>
                Met persoonlijke aandacht, deskundig advies en bezorging in de regio streven wij ernaar u altijd de beste service te bieden. Of u nu op zoek bent naar een bijzondere fles voor een diner, een passend cadeau of een mooie aanvulling op uw eigen collectie – wij denken graag met u mee.
              </p>
              <p>
                Wij hopen u binnenkort te mogen verwelkomen in onze winkel en u kennis te laten maken met ons assortiment.
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
                src={aboutPhoto}
                alt="Foto van wijnhandel Van Zoolingen"
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
