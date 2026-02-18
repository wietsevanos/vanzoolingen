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
    intro: "Onze wijncollectie is een zorgvuldig samengestelde selectie uit de mooiste wijnstreken ter wereld. Van elegante Bourgognes en krachtige Barolo's tot frisse Sauvignon Blancs en volle Chardonnays: iedere fles in ons assortiment hebben wij gekozen omdat wij er zelf enthousiast van worden.\n\nBij het selecteren van onze wijnen staan kwaliteit en authenticiteit altijd centraal. We kijken niet alleen naar gerenommeerde namen, maar juist ook naar kleinere, gepassioneerde producenten die met toewijding en vakmanschap werken. Zo bieden wij een collectie waarin vertrouwde klassiekers en verrassende nieuwe ontdekkingen elkaar moeiteloos aanvullen.\n\nHet resultaat is een veelzijdig aanbod voor iedere wijnliefhebber: wijnen met karakter, een eigen verhaal en vooral veel smaakbeleving.",
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
    intro: "Champagne is niet zomaar een drank; het is een symbool van stijl, verfijning en bijzondere momenten. Het sprankelende karakter en de elegante finesse maken van elk glas een kleine viering op zich.\n\nOf u nu een intieme gelegenheid viert, een belangrijk zakelijk moment kracht wilt bijzetten of spontaan wilt toosten op het leven, wij adviseren u graag bij het vinden van de champagne die perfect aansluit bij uw wensen en de sfeer van het moment.\n\nOnze collectie brengt vertrouwde klassiekers en verrassende ontdekkingen samen, zorgvuldig geselecteerd op kwaliteit en karakter. Voor iedere liefhebber hebben wij een champagne die past bij de gelegenheid én bij de persoonlijke smaak.",
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
    intro: "Wij hebben een uitgebreid en veelzijdig assortiment gedistilleerd dat aansluit bij uiteenlopende smaken en voorkeuren. Van verfijnde gin en ambachtelijke jenever tot expressieve whisky, zachte rum en vodka: ons aanbod is divers. Ook voor bijzondere likeuren en karaktervolle tequila's kunt u bij ons terecht, waardoor er voor iedere liefhebber iets passends te vinden is.\n\nOf uw voorkeur nu uitgaat naar een tijdloze klassieker met een rijke traditie of een eigentijdse variant met een moderne twist, er is altijd een passende keuze voor elk moment. Perfect voor een ontspannen avond thuis, een feestelijke gelegenheid of als stijlvol en smaakvol cadeau.",
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
    intro: "Goede accessoires versterken de smaak, presentatie en beleving van wijn. Bij ons vindt u een stijlvolle collectie wijnaccessoires die kwaliteit en gebruiksgemak combineren.\n\nOns assortiment omvat onder meer verfijnd glaswerk, elegante karaffen en praktische wijnkoelers. Elk product is ontworpen om het schenken, serveren en bewaren van wijn optimaal te ondersteunen.\n\nOf u nu uw eigen wijnmoment wilt verrijken of een passend geschenk zoekt voor een liefhebber, onze accessoires zorgen voor net dat beetje extra aandacht en uitstraling bij iedere fles.",
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
