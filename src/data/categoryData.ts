import wineImage from '@/assets/assortment-wine.png';
import champagneImage from '@/assets/assortment-champagne.png';
import spiritsImage from '@/assets/assortment-spirits.png';
import accessoriesImage from '@/assets/assortment-accessories.png';

export interface Brand {
  name: string;
}

export interface CategoryData {
  slug: string;
  title: string;
  heroTitle: string;
  heroImage: string;
  intro: string;
  brands: Brand[];
}

export const categories: CategoryData[] = [
  {
    slug: 'wijnen',
    title: 'Wijnen',
    heroTitle: 'Wijnen van topkwaliteit',
    heroImage: wineImage,
    intro: "Bij Van Zoolingen vindt u een zorgvuldig samengestelde collectie wijnen uit de beste wijnregio\u2019s ter wereld. Van elegante Bourgognes tot krachtige Barolos, van frisse Sauvignon Blancs tot volle Chardonnays, elke fles is met passie geproefd en met zorg geselecteerd. Onze sommeliers reizen regelmatig naar de wijngaarden om persoonlijk kennis te maken met de wijnmakers en hun filosofie. Zo garanderen wij dat elke wijn in ons assortiment een verhaal vertelt en een uitzonderlijke smaakbeleving biedt.",
    brands: [
      { name: 'Francis Ford Coppola' },
      { name: 'Bernardus' },
      { name: 'Louis Jadot' },
      { name: 'Gaja' },
      { name: 'Antinori' },
      { name: 'Boschendal' },
      { name: 'J. Lohr' },
      { name: 'Waterkloof' },
      { name: 'Whispering Angel' },
      { name: 'Jordan' },
      { name: 'Meerlust' },
      { name: 'Rothschild' },
    ],
  },
  {
    slug: 'champagne',
    title: 'Champagne',
    heroTitle: 'Champagne voor elk bijzonder moment',
    heroImage: champagneImage,
    intro: "Champagne is meer dan een drank, het is een beleving. Bij Van Zoolingen presenteren wij de finest champagnes van gerenommeerde huizen tot exclusieve cuv\u00E9es. Of het nu gaat om een intieme viering, een zakelijk evenement of een spontaan moment van geluk, wij helpen u de perfecte fles te kiezen. Onze collectie omvat zowel tijdloze klassiekers als verrassende ontdekkingen, elk met een eigen karakter en verfijning die past bij de gelegenheid.",
    brands: [
      { name: "Mo\u00EBt & Chandon" },
      { name: 'Veuve Clicquot' },
      { name: 'Ruinart' },
      { name: 'Laurent Perrier' },
      { name: 'Krug' },
      { name: "Dom P\u00E9rignon" },
    ],
  },
  {
    slug: 'gedistilleerd',
    title: 'Gedistilleerd',
    heroTitle: 'Gedistilleerd voor de kenner',
    heroImage: spiritsImage,
    intro: "Van rijke single malt whisky\u2019s tot verfijnde cognacs, van ambachtelijke gins tot complexe rums, ons assortiment gedistilleerd is samengesteld voor wie waarde hecht aan kwaliteit en karakter. Elk product is geselecteerd op vakmanschap, herkomst en smaakprofiel. Of u nu een ervaren kenner bent of op zoek naar een bijzonder cadeau, bij Van Zoolingen vindt u altijd iets uitzonderlijks. Laat u verrassen door onze persoonlijke aanbevelingen en ontdek nieuwe favorieten.",
    brands: [
      { name: 'Macallan' },
      { name: 'Glenfiddich' },
      { name: 'Hennessy' },
      { name: "R\u00E9my Martin" },
      { name: "Hendrick's Gin" },
      { name: "Diplomático" },
      { name: 'Tanqueray' },
      { name: 'Johnnie Walker' },
    ],
  },
  {
    slug: 'accessoires',
    title: 'Accessoires',
    heroTitle: 'Accessoires voor de perfecte beleving',
    heroImage: accessoriesImage,
    intro: "De juiste accessoires maken het verschil tussen wijn drinken en wijn beleven. Bij Van Zoolingen bieden wij een selectie van hoogwaardig glaswerk, professionele kurkentrekkers, elegante karaffen en stijlvolle wijnkoelers. Elk product is gekozen op kwaliteit, functionaliteit en design. Of u nu uw eigen collectie wilt aanvullen of op zoek bent naar het perfecte cadeau voor een wijnliefhebber, bij ons vindt u accessoires die de wijnervaring naar een hoger niveau tillen.",
    brands: [
      { name: 'Riedel' },
      { name: 'Zalto' },
      { name: 'Le Creuset' },
      { name: 'Peugeot' },
      { name: 'Schott Zwiesel' },
      { name: 'Vacu Vin' },
    ],
  },
];

export const getCategoryBySlug = (slug: string): CategoryData | undefined =>
  categories.find((c) => c.slug === slug);
