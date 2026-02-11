import { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import wineImage from '@/assets/assortment-wine.png';
import champagneImage from '@/assets/assortment-champagne.png';
import spiritsImage from '@/assets/assortment-spirits.png';
import accessoriesImage from '@/assets/assortment-accessories.png';

const assortmentItems = [
  {
    title: 'Wijnen',
    subtitle: 'Rood, Wit & Rosé',
    description: 'Een zorgvuldig samengestelde collectie van wereldwijnen. Van elegante Bourgognes tot krachtige Barolos, van frisse Sauvignon Blancs tot volle Chardonnays.',
    extendedDescription: 'Onze wijnkelder herbergt een zorgvuldig gecureerde selectie wijnen uit de meest gerenommeerde wijnregio\'s ter wereld. Of u nu op zoek bent naar een toegankelijke huiswijn of een bijzondere fles voor een speciale gelegenheid — wij adviseren u graag persoonlijk. Elk jaar proeven wij honderden wijnen om alleen het beste voor onze klanten te selecteren.',
    brands: ['Coppola', 'Bernardus', 'Louis Jadot', 'Gaja', 'Antinori', 'Boschendal', 'J.Lohr', 'Waterkloof', 'Whispering Angel', 'Jordan', 'Meerlust', 'Rothschild'],
    brandsText: 'Coppola, Bernardus, Louis Jadot, Gaja, Antinori, Boschendal, J.Lohr, Waterkloof, Whispering Angel, Jordan, Meerlust, Rothschild',
    image: wineImage,
    imagePosition: 'right',
  },
  {
    title: 'Champagne',
    subtitle: 'Feest & Elegantie',
    description: 'De finest champagnes voor bijzondere momenten. Van gerenommeerde huizen tot exclusieve cuvées, elk met een eigen karakter en verfijning.',
    extendedDescription: 'Champagne is meer dan een drank — het is een beleving. Wij bieden een exclusieve selectie van de meest prestigieuze champagnehuizen. Van een frisse Brut voor een spontaan moment tot een rijke vintage voor de meest bijzondere gelegenheden. Laat u adviseren over de perfecte champagne bij uw feest of diner.',
    brands: ['Moët & Chandon', 'Veuve Clicquot', 'Ruinart', 'Laurent Perrier', 'Krug', 'Dom Pérignon'],
    brandsText: 'Moët & Chandon, Veuve Clicquot, Ruinart, Laurent Perrier, Krug, Dom Pérignon',
    image: champagneImage,
    imagePosition: 'left',
  },
  {
    title: 'Gedistilleerd',
    subtitle: 'Whisky, Cognac & Meer',
    description: 'Een uitgelezen selectie spirits voor de kenner. Van rijke single malts tot verfijnde cognacs, met zorg geselecteerd voor optimaal genieten.',
    extendedDescription: 'Voor de liefhebber van gedistilleerd bieden wij een breed en kwalitatief hoogstaand assortiment. Van Schotse single malts en Japanse whisky\'s tot ambachtelijke gins en gerijpte rums — elk product is met zorg geselecteerd. Onze kennis en passie helpen u de perfecte fles te vinden, of het nu voor uzelf is of als bijzonder cadeau.',
    brands: ['Macallan', 'Glenfiddich', 'Hennessy', 'Rémy Martin', 'Diplomatico', 'Hendrick\'s', 'Tanqueray', 'Nikka'],
    brandsText: 'Breed assortiment whisky, cognac, rum, gin en likeuren van gerenommeerde distilleerderijen',
    image: spiritsImage,
    imagePosition: 'right',
  },
  {
    title: 'Accessoires',
    subtitle: 'Glaswerk & Gereedschap',
    description: 'Alles voor de perfecte wijnbeleving. Van hoogwaardige glazen tot professionele kurkentrekkers en elegante karaffen.',
    extendedDescription: 'De juiste accessoires maken het verschil in uw wijnbeleving. Wij bieden een selectie premium glaswerk, karaffen, kurkentrekkers en wijnkoelers van de beste merken. Ook voor een stijlvol geschenk bent u bij ons aan het juiste adres — wij stellen graag een gepersonaliseerde geschenkset voor u samen.',
    brands: ['Riedel', 'Schott Zwiesel', 'Peugeot', 'Screwpull', 'Vacu Vin', 'Le Creuset'],
    brandsText: 'Glazen, karaffen, kurkentrekkers, wijnkoelers en geschenksets',
    image: accessoriesImage,
    imagePosition: 'left',
  },
];

const TextBlock = ({ item, onOpenModal }: { item: typeof assortmentItems[0]; onOpenModal: () => void }) => (
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
      {item.brandsText}
    </p>
    <button 
      onClick={onOpenModal}
      className="inline-flex items-center gap-2 text-bordeaux font-sans text-sm hover:gap-3 transition-all duration-300 group cursor-pointer bg-transparent border-none p-0 text-left"
    >
      <span>Ontdek meer</span>
      <ArrowRight size={14} strokeWidth={2} className="group-hover:translate-x-1 transition-transform" />
    </button>
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

const AssortmentModal = ({ item, open, onClose }: { item: typeof assortmentItems[0] | null; open: boolean; onClose: () => void }) => {
  if (!item) return null;

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-2xl p-0 overflow-hidden border-none bg-offwhite shadow-2xl">
        {/* Hero image strip */}
        <div className="relative h-48 md:h-56 overflow-hidden">
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-anthracite/70 via-anthracite/20 to-transparent" />
          <div className="absolute bottom-6 left-8 right-8">
            <p className="text-offwhite/80 text-xs font-sans tracking-[0.2em] uppercase mb-1">
              {item.subtitle}
            </p>
            <DialogTitle className="font-serif text-3xl md:text-4xl text-offwhite font-medium">
              {item.title}
            </DialogTitle>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 md:p-10">
          <p className="text-anthracite/80 font-sans text-sm md:text-base leading-relaxed mb-8">
            {item.extendedDescription}
          </p>

          {/* Brands grid */}
          <div className="mb-2">
            <p className="text-olive text-xs font-sans tracking-[0.2em] uppercase mb-4">
              Geselecteerde Merken
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {item.brands.map((brand) => (
                <div 
                  key={brand}
                  className="bg-beige-warm px-4 py-3 text-center font-sans text-sm text-anthracite tracking-wide"
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const Assortment = () => {
  const [selectedItem, setSelectedItem] = useState<typeof assortmentItems[0] | null>(null);

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
        <div className="max-w-6xl mx-auto">
          {assortmentItems.map((item) => (
            <div 
              key={item.title}
              className="grid md:grid-cols-2 border-b border-bordeaux/10 last:border-b-0"
            >
              {item.imagePosition === 'right' ? (
                <>
                  <div className="order-2 md:order-1 min-h-[300px] md:min-h-[400px]">
                    <TextBlock item={item} onOpenModal={() => setSelectedItem(item)} />
                  </div>
                  <div className="order-1 md:order-2 aspect-video md:aspect-auto md:min-h-[400px]">
                    <ImageBlock image={item.image} alt={item.title} />
                  </div>
                </>
              ) : (
                <>
                  <div className="order-1 aspect-video md:aspect-auto md:min-h-[400px]">
                    <ImageBlock image={item.image} alt={item.title} />
                  </div>
                  <div className="order-2 min-h-[300px] md:min-h-[400px]">
                    <TextBlock item={item} onOpenModal={() => setSelectedItem(item)} />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      <AssortmentModal 
        item={selectedItem} 
        open={!!selectedItem} 
        onClose={() => setSelectedItem(null)} 
      />
    </section>
  );
};

export default Assortment;
