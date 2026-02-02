import { Wine, Sparkles, GlassWater, WineOff } from 'lucide-react';

const assortmentItems = [
  {
    icon: Wine,
    title: 'Wijnen',
    brands: 'Coppola, Bernardus, Louis Jadot, Gaja, Antinori, Boschendal, J.Lohr, Waterkloof, Whispering Angel, Jordan, Meerlust, Rothschild',
  },
  {
    icon: Sparkles,
    title: 'Champagne',
    brands: 'Moët & Chandon, Veuve Clicquot, Ruinart, Laurent Perrier, Krug, Dom Pérignon',
  },
  {
    icon: GlassWater,
    title: 'Gedistilleerd',
    brands: 'Breed assortiment whisky, cognac en likeuren',
  },
  {
    icon: WineOff,
    title: 'Accessoires & Glaswerk',
    brands: 'Glazen, karaffen en wijnaccessoires',
  },
];

const Assortment = () => {
  return (
    <section id="assortiment" className="py-24 lg:py-32 bg-beige">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-olive text-sm font-sans tracking-[0.2em] uppercase mb-4">
            Onze Collectie
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-anthracite font-medium">
            Ons Assortiment
          </h2>
        </div>

        {/* Grid - 2x2 for clean layout */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 max-w-5xl mx-auto">
          {assortmentItems.map((item) => (
            <div
              key={item.title}
              className="bg-offwhite p-10 lg:p-12 border-2 border-olive/20 hover:border-bordeaux/40 transition-colors group"
            >
              <div className="mb-8">
                <item.icon 
                  size={36} 
                  strokeWidth={1.2}
                  className="text-olive group-hover:text-bordeaux transition-colors" 
                />
              </div>
              <h3 className="font-serif text-2xl text-anthracite font-medium mb-4">
                {item.title}
              </h3>
              <p className="text-anthracite-light font-sans text-sm leading-relaxed tracking-wide">
                {item.brands}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Assortment;
