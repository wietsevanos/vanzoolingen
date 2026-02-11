import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import wineImage from '@/assets/assortment-wine.png';
import champagneImage from '@/assets/assortment-champagne.png';
import spiritsImage from '@/assets/assortment-spirits.png';
import accessoriesImage from '@/assets/assortment-accessories.png';

const assortmentItems = [
  {
    title: 'Wijnen',
    slug: 'wijnen',
    subtitle: 'Rood, Wit & Rosé',
    description: 'Een zorgvuldig samengestelde collectie van wereldwijnen. Van elegante Bourgognes tot krachtige Barolos, van frisse Sauvignon Blancs tot volle Chardonnays.',
    brands: 'Coppola, Bernardus, Louis Jadot, Gaja, Antinori, Boschendal, J.Lohr, Waterkloof, Whispering Angel, Jordan, Meerlust, Rothschild',
    image: wineImage,
    imagePosition: 'right',
  },
  {
    title: 'Champagne',
    slug: 'champagne',
    subtitle: 'Feest & Elegantie',
    description: 'De finest champagnes voor bijzondere momenten. Van gerenommeerde huizen tot exclusieve cuvées, elk met een eigen karakter en verfijning.',
    brands: 'Moët & Chandon, Veuve Clicquot, Ruinart, Laurent Perrier, Krug, Dom Pérignon',
    image: champagneImage,
    imagePosition: 'left',
  },
  {
    title: 'Gedistilleerd',
    slug: 'gedistilleerd',
    subtitle: 'Whisky, Cognac & Meer',
    description: 'Een uitgelezen selectie spirits voor de kenner. Van rijke single malts tot verfijnde cognacs, met zorg geselecteerd voor optimaal genieten.',
    brands: 'Breed assortiment whisky, cognac, rum, gin en likeuren van gerenommeerde distilleerderijen',
    image: spiritsImage,
    imagePosition: 'right',
  },
  {
    title: 'Accessoires',
    slug: 'accessoires',
    subtitle: 'Glaswerk & Gereedschap',
    description: 'Alles voor de perfecte wijnbeleving. Van hoogwaardige glazen tot professionele kurkentrekkers en elegante karaffen.',
    brands: 'Glazen, karaffen, kurkentrekkers, wijnkoelers en geschenksets',
    image: accessoriesImage,
    imagePosition: 'left',
  },
];

const TextBlock = ({ item }: { item: (typeof assortmentItems)[0] }) => (
  <div className="bg-beige-warm h-full flex flex-col justify-center p-8 lg:p-12 xl:p-16">
    <p className="text-olive text-xs font-sans tracking-[0.2em] uppercase mb-3">
      {item.subtitle}
    </p>
    <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-anthracite font-medium mb-4">
      {item.title}
    </h3>
    <p className="text-anthracite/80 font-sans text-sm leading-relaxed mb-4">
      {item.description}
    </p>
    <p className="text-anthracite-light/70 font-sans text-xs leading-relaxed mb-6 italic">
      {item.brands}
    </p>
    <Link 
      to={`/categorie/${item.slug}`}
      className="inline-flex items-center gap-2 text-bordeaux font-sans text-sm hover:gap-3 transition-all duration-300 group"
    >
      <span>Ontdek meer</span>
      <ArrowRight size={14} strokeWidth={2} className="group-hover:translate-x-1 transition-transform" />
    </Link>
  </div>
);

const ImageBlock = ({ image, alt }: { image: string; alt: string }) => (
  <div className="h-full w-full overflow-hidden">
    <img 
      src={image} 
      alt={alt}
      className="w-full h-full object-cover"
    />
  </div>
);

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

        {/* Grid - 2 columns, 4 rows with alternating layout */}
        <div className="max-w-6xl mx-auto">
          {assortmentItems.map((item, index) => (
            <div 
              key={item.title}
              className="grid md:grid-cols-2 border-b border-bordeaux/10 last:border-b-0"
            >
              {item.imagePosition === 'right' ? (
                <>
                  {/* Text left, Image right */}
                  <div className="order-2 md:order-1 min-h-[300px] md:min-h-[400px]">
                    <TextBlock item={item} />
                  </div>
                  <div className="order-1 md:order-2 aspect-video md:aspect-auto md:min-h-[400px]">
                    <ImageBlock image={item.image} alt={item.title} />
                  </div>
                </>
              ) : (
                <>
                  {/* Image left, Text right */}
                  <div className="order-1 aspect-video md:aspect-auto md:min-h-[400px]">
                    <ImageBlock image={item.image} alt={item.title} />
                  </div>
                  <div className="order-2 min-h-[300px] md:min-h-[400px]">
                    <TextBlock item={item} />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Assortment;
