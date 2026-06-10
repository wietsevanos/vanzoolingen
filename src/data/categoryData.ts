import wineImage from '@/assets/assortment-wine.png';
import champagneImage from '@/assets/assortment-champagne.png';
import spiritsImage from '@/assets/assortment-spirits.png';
import accessoriesImage from '@/assets/assortment-accessories.png';

import moetLogo from '@/assets/brands/moet-chandon.png.asset.json';
import veuveLogo from '@/assets/brands/veuve-clicquot.png.asset.json';
import ruinartLogo from '@/assets/brands/ruinart.png.asset.json';
import laurentLogo from '@/assets/brands/laurent-perrier.png.asset.json';
import krugLogo from '@/assets/brands/krug.png.asset.json';
import domPerignonLogo from '@/assets/brands/dom-perignon.png.asset.json';
import bollingerLogo from '@/assets/brands/bollinger.png.asset.json';
import perrierJouetLogo from '@/assets/brands/perrier-jouet.png.asset.json';
import louisRoedererLogo from '@/assets/brands/louis-roederer.png.asset.json';
import armandLogo from '@/assets/brands/armand-de-brignac.png.asset.json';
import kriptaLogo from '@/assets/brands/kripta.png.asset.json';
import laTorderaLogo from '@/assets/brands/la-tordera.webp.asset.json';
import pizzolatoLogo from '@/assets/brands/pizzolato.png.asset.json';
import raventosLogo from '@/assets/brands/raventos-i-blanc.jpg.asset.json';

import coppolaLogo from '@/assets/brands/francis-ford-coppola.png.asset.json';
import bernardusLogo from '@/assets/brands/bernardus-black.png.asset.json';
import elenaWalchLogo from '@/assets/brands/elena-walch.webp.asset.json';
import mezzacoronaLogo from '@/assets/brands/mezzacorona.png.asset.json';
import baronDeLeyLogo from '@/assets/brands/baron-de-ley.png.asset.json';
import cantineParadisoLogo from '@/assets/brands/cantine-paradiso.webp.asset.json';
import delaireGraffLogo from '@/assets/brands/delaire-graff.webp.asset.json';
import faiveleyLogo from '@/assets/brands/domaine-faiveley.avif.asset.json';
import leflaiveLogo from '@/assets/brands/domaine-leflaive.png.asset.json';
import enateLogo from '@/assets/brands/enate.webp.asset.json';
import moutonLogo from '@/assets/brands/mouton-rothschild.png.asset.json';
import nittnausLogo from '@/assets/brands/nittnaus.png.asset.json';
import olivierLeflaiveLogo from '@/assets/brands/olivier-leflaive.png.asset.json';
import opusOneLogo from '@/assets/brands/opus-one.png.asset.json';
import ottLogo from '@/assets/brands/domaines-ott.webp.asset.json';
import waterkloofLogo from '@/assets/brands/waterkloof.webp.asset.json';
import meerlustLogo from '@/assets/brands/meerlust.png.asset.json';
import minutyLogo from '@/assets/brands/minuty.png.asset.json';
import mipLogo from '@/assets/brands/mip-black.png.asset.json';
import mistyCoveLogo from '@/assets/brands/misty-cove.png.asset.json';
import saintClairLogo from '@/assets/brands/saint-clair.png.asset.json';
import salenteinLogo from '@/assets/brands/salentein.png.asset.json';
import taylorsLogo from '@/assets/brands/taylors-port.png.asset.json';
import ultimateProvenceLogo from '@/assets/brands/up.avif.asset.json';
import pedroEscuderoLogo from '@/assets/brands/pedro-escudero.webp.asset.json';
import villaBlancheLogo from '@/assets/brands/villa-blanche.png.asset.json';
import seegerLogo from '@/assets/brands/weingut-seeger.avif.asset.json';
import whisperingAngelLogo from '@/assets/brands/whispering-angel-v2.png.asset.json';

export interface Brand {
  name: string;
  logo?: string;
}

export interface CategoryData {
  slug: string;
  title: string;
  heroTitle: string;
  heroImage: string;
  intro: string;
  brandsSupertitle: string;
  brandsTitle: string;
  brands: Brand[];
}

export const categories: CategoryData[] = [
  {
    slug: 'wijnen',
    title: 'Wijnen',
    heroTitle: 'Wijnen van topkwaliteit',
    heroImage: wineImage,
    intro: "Onze wijncollectie is een zorgvuldig samengestelde selectie uit de mooiste wijnstreken ter wereld. Van elegante Bourgognes en krachtige Barolo's tot frisse Sauvignon Blancs en volle Chardonnays: iedere fles in ons assortiment hebben wij gekozen omdat wij er zelf enthousiast van worden.\n\nBij het selecteren van onze wijnen staan kwaliteit en authenticiteit altijd centraal. We kijken niet alleen naar gerenommeerde namen, maar juist ook naar kleinere, gepassioneerde producenten die met toewijding en vakmanschap werken. Zo bieden wij een collectie waarin vertrouwde klassiekers en verrassende nieuwe ontdekkingen elkaar moeiteloos aanvullen.\n\nHet resultaat is een veelzijdig aanbod voor iedere wijnliefhebber: wijnen met karakter, een eigen verhaal en vooral veel smaakbeleving.",
    brandsSupertitle: 'Uit ons assortiment',
    brandsTitle: 'Wijnhuizen die wij aanbieden',
    brands: [
      { name: 'Francis Ford Coppola', logo: coppolaLogo.url },
      { name: 'Bernardus', logo: bernardusLogo.url },
      { name: 'Elena Walch', logo: elenaWalchLogo.url },
      { name: 'Mezzacorona', logo: mezzacoronaLogo.url },
      { name: 'Baron de Ley', logo: baronDeLeyLogo.url },
      { name: 'Cantine Paradiso', logo: cantineParadisoLogo.url },
      { name: 'Delaire Graff Estate', logo: delaireGraffLogo.url },
      { name: 'Domaine Faiveley', logo: faiveleyLogo.url },
      { name: 'Domaine Leflaive', logo: leflaiveLogo.url },
      { name: 'Enate', logo: enateLogo.url },
      { name: 'Château Mouton Rothschild', logo: moutonLogo.url },
      { name: 'Gebrüder Nittnaus', logo: nittnausLogo.url },
      { name: 'Olivier Leflaive', logo: olivierLeflaiveLogo.url },
      { name: 'Opus One', logo: opusOneLogo.url },
      { name: 'Domaines Ott', logo: ottLogo.url },
      { name: 'Waterkloof', logo: waterkloofLogo.url },
      { name: 'Meerlust', logo: meerlustLogo.url },
      { name: 'Minuty', logo: minutyLogo.url },
      { name: 'Le Domaine des Diables (MiP)', logo: mipLogo.url },
      { name: 'Misty Cove Wines', logo: mistyCoveLogo.url },
      { name: 'Saint Clair Family Estate', logo: saintClairLogo.url },
      { name: 'Salentein', logo: salenteinLogo.url },
      { name: "Taylor's Port", logo: taylorsLogo.url },
      { name: 'Ultimate Provence', logo: ultimateProvenceLogo.url },
      { name: 'Pedro Escudero', logo: pedroEscuderoLogo.url },
      { name: 'Villa Blanche', logo: villaBlancheLogo.url },
      { name: 'Weingut Seeger', logo: seegerLogo.url },
      { name: 'Whispering Angel', logo: whisperingAngelLogo.url },
    ],
  },
  {
    slug: 'champagne',
    title: 'Champagne',
    heroTitle: 'Champagne voor elk bijzonder moment',
    heroImage: champagneImage,
    intro: "Champagne is niet zomaar een drank; het is een symbool van stijl, verfijning en bijzondere momenten. Het sprankelende karakter en de elegante finesse maken van elk glas een kleine viering op zich.\n\nOf u nu een intieme gelegenheid viert, een belangrijk zakelijk moment kracht wilt bijzetten of spontaan wilt toosten op het leven, wij adviseren u graag bij het vinden van de champagne die perfect aansluit bij uw wensen en de sfeer van het moment.\n\nOnze collectie brengt vertrouwde klassiekers en verrassende ontdekkingen samen, zorgvuldig geselecteerd op kwaliteit en karakter. Voor iedere liefhebber hebben wij een champagne die past bij de gelegenheid én bij de persoonlijke smaak.",
    brandsSupertitle: 'Uit ons assortiment',
    brandsTitle: 'Champagnehuizen die wij voeren',
    brands: [
      { name: "Mo\u00EBt & Chandon", logo: moetLogo.url },
      { name: 'Veuve Clicquot', logo: veuveLogo.url },
      { name: 'Ruinart', logo: ruinartLogo.url },
      { name: 'Laurent Perrier', logo: laurentLogo.url },
      { name: 'Krug', logo: krugLogo.url },
      { name: "Dom P\u00E9rignon", logo: domPerignonLogo.url },
      { name: 'Bollinger', logo: bollingerLogo.url },
      { name: "Perrier-Jou\u00EBt", logo: perrierJouetLogo.url },
      { name: 'Louis Roederer', logo: louisRoedererLogo.url },
      { name: 'Armand de Brignac', logo: armandLogo.url },
      { name: 'Celler Kripta', logo: kriptaLogo.url },
      { name: 'La Tordera', logo: laTorderaLogo.url },
      { name: 'Pizzolato', logo: pizzolatoLogo.url },
      { name: "Ravent\u00F3s i Blanc", logo: raventosLogo.url },
    ],
  },
  {
    slug: 'gedistilleerd',
    title: 'Gedistilleerd',
    heroTitle: 'Gedistilleerd voor de kenner',
    heroImage: spiritsImage,
    intro: "Wij hebben een uitgebreid en veelzijdig assortiment gedistilleerd dat aansluit bij uiteenlopende smaken en voorkeuren. Van verfijnde gin en ambachtelijke jenever tot expressieve whisky, zachte rum en vodka: ons aanbod is divers. Ook voor bijzondere likeuren en karaktervolle tequila's kunt u bij ons terecht, waardoor er voor iedere liefhebber iets passends te vinden is.\n\nOf uw voorkeur nu uitgaat naar een tijdloze klassieker met een rijke traditie of een eigentijdse variant met een moderne twist, er is altijd een passende keuze voor elk moment. Perfect voor een ontspannen avond thuis, een feestelijke gelegenheid of als stijlvol en smaakvol cadeau.",
    brandsSupertitle: 'Uit ons assortiment',
    brandsTitle: 'Merken die wij aanbieden',
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
    brandsSupertitle: 'Uit ons assortiment',
    brandsTitle: 'Merken die wij aanbieden',
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
