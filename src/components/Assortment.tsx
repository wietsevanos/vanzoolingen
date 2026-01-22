import { Wine, Sparkles, GlassWater, Cylinder, Beer, Gift } from 'lucide-react';

const assortmentItems = [
  {
    icon: Wine,
    title: 'Wijnen',
    description: 'Selectie uit de oude en nieuwe wereld',
  },
  {
    icon: Sparkles,
    title: 'Champagne',
    description: 'Verfijnde bubbels voor elk moment',
  },
  {
    icon: GlassWater,
    title: 'Likeuren',
    description: 'Klassieke en moderne likeuren',
  },
  {
    icon: Cylinder,
    title: 'Cognac & Whisky',
    description: 'Premium spirits voor de kenner',
  },
  {
    icon: Beer,
    title: 'Bier',
    description: 'Speciaalbieren en klassiekers',
  },
  {
    icon: Gift,
    title: 'Kerst- en Relatiegeschenken',
    description: 'Stijlvolle cadeaupakketten',
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

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {assortmentItems.map((item) => (
            <div
              key={item.title}
              className="bg-offwhite p-8 border-2 border-olive hover:border-bordeaux transition-colors group"
            >
              <div className="mb-6">
                <item.icon 
                  size={40} 
                  strokeWidth={1.5}
                  className="text-olive group-hover:text-bordeaux transition-colors" 
                />
              </div>
              <h3 className="font-serif text-xl text-anthracite font-medium mb-3">
                {item.title}
              </h3>
              <p className="text-anthracite-light font-sans text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Assortment;
