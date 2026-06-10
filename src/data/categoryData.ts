import wineImage from '@/assets/assortment-wine.png';
import champagneImage from '@/assets/assortment-champagne.png';
import spiritsImage from '@/assets/assortment-spirits.png';
import accessoriesImage from '@/assets/assortment-accessories.png';

import moetLogo from '@/assets/brands/moet-chandon.png';
import veuveLogo from '@/assets/brands/veuve-clicquot.png';
import ruinartLogo from '@/assets/brands/ruinart.png';
import laurentLogo from '@/assets/brands/laurent-perrier.png';
import krugLogo from '@/assets/brands/krug.png';
import domPerignonLogo from '@/assets/brands/dom-perignon.png';
import bollingerLogo from '@/assets/brands/bollinger.png';
import perrierJouetLogo from '@/assets/brands/perrier-jouet.png';
import louisRoedererLogo from '@/assets/brands/louis-roederer.png';
import armandLogo from '@/assets/brands/armand-de-brignac.png';
import kriptaLogo from '@/assets/brands/kripta.png';
import laTorderaLogo from '@/assets/brands/la-tordera.webp';
import pizzolatoLogo from '@/assets/brands/pizzolato.png';
import raventosLogo from '@/assets/brands/raventos-i-blanc.jpg';

import coppolaLogo from '@/assets/brands/francis-ford-coppola.png';
import bernardusLogo from '@/assets/brands/bernardus-black.png';
import elenaWalchLogo from '@/assets/brands/elena-walch.webp';
import mezzacoronaLogo from '@/assets/brands/mezzacorona.png';
import baronDeLeyLogo from '@/assets/brands/baron-de-ley.png';
import cantineParadisoLogo from '@/assets/brands/cantine-paradiso.webp';
import delaireGraffLogo from '@/assets/brands/delaire-graff.webp';
import faiveleyLogo from '@/assets/brands/domaine-faiveley.avif';
import leflaiveLogo from '@/assets/brands/domaine-leflaive.png';
import enateLogo from '@/assets/brands/enate.webp';
import moutonLogo from '@/assets/brands/mouton-rothschild.png';
import nittnausLogo from '@/assets/brands/nittnaus.png';
import olivierLeflaiveLogo from '@/assets/brands/olivier-leflaive.png';
import opusOneLogo from '@/assets/brands/opus-one.png';
import ottLogo from '@/assets/brands/domaines-ott.webp';
import waterkloofLogo from '@/assets/brands/waterkloof.webp';
import meerlustLogo from '@/assets/brands/meerlust.png';
import minutyLogo from '@/assets/brands/minuty.png';
import mipLogo from '@/assets/brands/mip-black.png';
import mistyCoveLogo from '@/assets/brands/misty-cove.png';
import saintClairLogo from '@/assets/brands/saint-clair.png';
import salenteinLogo from '@/assets/brands/salentein.png';
import taylorsLogo from '@/assets/brands/taylors-port.png';
import ultimateProvenceLogo from '@/assets/brands/up.avif';
import pedroEscuderoLogo from '@/assets/brands/pedro-escudero.webp';
import villaBlancheLogo from '@/assets/brands/villa-blanche.png';
import seegerLogo from '@/assets/brands/weingut-seeger.avif';
import whisperingAngelLogo from '@/assets/brands/whispering-angel-v2.png';

import ardbegLogo from '@/assets/brands/ardbeg.avif';
import cirocLogo from '@/assets/brands/ciroc.png';
import lagavulinLogo from '@/assets/brands/lagavulin.png';
import taliskerLogo from '@/assets/brands/talisker.png';
import absolutLogo from '@/assets/brands/absolut.webp';
import aperolLogo from '@/assets/brands/aperol.png';
import baileysLogo from '@/assets/brands/baileys.png';
import balvenieLogo from '@/assets/brands/balvenie.png';
import belugaLogo from '@/assets/brands/beluga.png';
import belvedereLogo from '@/assets/brands/belvedere.png';

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
      { name: 'Francis Ford Coppola', logo: coppolaLogo },
      { name: 'Bernardus', logo: bernardusLogo },
      { name: 'Elena Walch', logo: elenaWalchLogo },
      { name: 'Mezzacorona', logo: mezzacoronaLogo },
      { name: 'Baron de Ley', logo: baronDeLeyLogo },
      { name: 'Cantine Paradiso', logo: cantineParadisoLogo },
      { name: 'Delaire Graff Estate', logo: delaireGraffLogo },
      { name: 'Domaine Faiveley', logo: faiveleyLogo },
      { name: 'Domaine Leflaive', logo: leflaiveLogo },
      { name: 'Enate', logo: enateLogo },
      { name: 'Château Mouton Rothschild', logo: moutonLogo },
      { name: 'Gebrüder Nittnaus', logo: nittnausLogo },
      { name: 'Olivier Leflaive', logo: olivierLeflaiveLogo },
      { name: 'Opus One', logo: opusOneLogo },
      { name: 'Domaines Ott', logo: ottLogo },
      { name: 'Waterkloof', logo: waterkloofLogo },
      { name: 'Meerlust', logo: meerlustLogo },
      { name: 'Minuty', logo: minutyLogo },
      { name: 'Le Domaine des Diables (MiP)', logo: mipLogo },
      { name: 'Misty Cove Wines', logo: mistyCoveLogo },
      { name: 'Saint Clair Family Estate', logo: saintClairLogo },
      { name: 'Salentein', logo: salenteinLogo },
      { name: "Taylor's Port", logo: taylorsLogo },
      { name: 'Ultimate Provence', logo: ultimateProvenceLogo },
      { name: 'Pedro Escudero', logo: pedroEscuderoLogo },
      { name: 'Villa Blanche', logo: villaBlancheLogo },
      { name: 'Weingut Seeger', logo: seegerLogo },
      { name: 'Whispering Angel', logo: whisperingAngelLogo },
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
      { name: "Mo\u00EBt & Chandon", logo: moetLogo },
      { name: 'Veuve Clicquot', logo: veuveLogo },
      { name: 'Ruinart', logo: ruinartLogo },
      { name: 'Laurent Perrier', logo: laurentLogo },
      { name: 'Krug', logo: krugLogo },
      { name: "Dom P\u00E9rignon", logo: domPerignonLogo },
      { name: 'Bollinger', logo: bollingerLogo },
      { name: "Perrier-Jou\u00EBt", logo: perrierJouetLogo },
      { name: 'Louis Roederer', logo: louisRoedererLogo },
      { name: 'Armand de Brignac', logo: armandLogo },
      { name: 'Celler Kripta', logo: kriptaLogo },
      { name: 'La Tordera', logo: laTorderaLogo },
      { name: 'Pizzolato', logo: pizzolatoLogo },
      { name: "Ravent\u00F3s i Blanc", logo: raventosLogo },
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
      { name: 'Ardbeg', logo: ardbegLogo },
      { name: 'Cîroc Vodka', logo: cirocLogo },
      { name: 'Lagavulin', logo: lagavulinLogo },
      { name: 'Talisker', logo: taliskerLogo },
      { name: 'Absolut Vodka', logo: absolutLogo },
      { name: 'Aperol', logo: aperolLogo },
      { name: 'Baileys', logo: baileysLogo },
      { name: 'The Balvenie', logo: balvenieLogo },
      { name: 'Beluga Vodka', logo: belugaLogo },
      { name: 'Belvedere Vodka', logo: belvedereLogo },
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
