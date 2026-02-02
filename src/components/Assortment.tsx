import { Wine, Sparkles, GlassWater, WineOff, ArrowRight } from 'lucide-react';

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
        <div className="text-center mb-16">
          <p className="text-olive text-sm font-sans tracking-[0.2em] uppercase mb-4">
            Onze Collectie
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-anthracite font-medium">
            Ons Assortiment
          </h2>
        </div>

        {/* Grid - 2x2 tight layout */}
        <div className="grid md:grid-cols-2 gap-5 lg:gap-6 max-w-4xl mx-auto">
          {assortmentItems.map((item) => (
            <div
              key={item.title}
              className="bg-beige-warm p-8 lg:p-10 border border-bordeaux/25 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] hover:border-bordeaux/50 transition-all duration-300 group flex flex-col min-h-[280px]"
            >
              {/* Icon */}
              <div className="mb-6 w-12 h-12 flex items-center justify-center">
                <item.icon 
                  size={44} 
                  strokeWidth={1}
                  className="text-bordeaux group-hover:text-bordeaux-dark transition-colors" 
                />
              </div>
              
              {/* Title */}
              <h3 className="font-serif text-2xl lg:text-[1.7rem] text-anthracite font-medium mb-3">
                {item.title}
              </h3>
              
              {/* Brands */}
              <p className="text-anthracite-light/80 font-sans text-xs leading-relaxed tracking-wide flex-grow">
                {item.brands}
              </p>
              
              {/* Link */}
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 text-bordeaux font-sans text-sm mt-6 group-hover:gap-3 transition-all duration-300"
              >
                <span>Ontdek meer</span>
                <ArrowRight size={14} strokeWidth={2} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Assortment;
