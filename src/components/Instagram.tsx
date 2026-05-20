import { Instagram as InstagramIcon, Heart, MessageCircle } from 'lucide-react';
import post1 from '@/assets/instagram-post-1.jpg';
import post2 from '@/assets/instagram-post-2.jpg';
import post3 from '@/assets/instagram-post-3.jpg';

const INSTAGRAM_URL = 'https://www.instagram.com/wijnhandelvanzoolingen/';

const posts = [
  {
    image: post1,
    title: 'Nieuwe collega gezocht',
    caption:
      'Op zoek naar een leuke (bij)baan in een sfeervolle winkel? Min. 18 jaar, beschikbaar op zaterdag, klantvriendelijk en leergierig. Wijnkennis leer je al werkend.',
    date: '2 dagen geleden',
  },
  {
    image: post2,
    title: 'UP Limited Edition 2026',
    caption:
      'Slechts 2.500 flessen in heel Nederland. Frisse fruittonen, elegante uitstraling, perfect voor lange zomeravonden. Op = écht op.',
    date: '5 dagen geleden',
  },
  {
    image: post3,
    title: 'UP Rosé, 5 + 1 gratis',
    caption:
      'Ultimate Provence, gemaakt van Grenache en Cinsault. Bij 5 flessen krijg je er één cadeau t.w.v. €19,99. Zolang de voorraad strekt.',
    date: '1 week geleden',
  },
];

const Instagram = () => {
  return (
    <section id="instagram" className="py-24 lg:py-32 bg-beige">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-olive text-sm font-sans tracking-[0.2em] uppercase mb-4">
            Blijf op de hoogte
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-anthracite font-medium mb-4">
            Een kijkje achter de kurk
          </h2>
          <p className="text-anthracite/70 font-sans text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Proeverijen, nieuwe wijnen, tips en een blik achter de schermen. Volg ons op Instagram en ontdek wat er speelt bij Van Zoolingen.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-10">
          <div className="bg-anthracite text-offwhite p-8 md:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-8 text-center md:text-left">
            <div className="shrink-0 w-16 h-16 rounded-full bg-offwhite/10 border border-offwhite/20 flex items-center justify-center">
              <InstagramIcon size={28} strokeWidth={1.5} className="text-offwhite" />
            </div>
            <div className="flex-1">
              <p className="text-badge-today text-xs font-sans tracking-[0.25em] uppercase mb-2">
                @wijnhandelvanzoolingen
              </p>
              <h3 className="font-serif text-2xl md:text-3xl font-medium mb-2">
                Volg ons op Instagram
              </h3>
              <p className="text-offwhite/70 font-sans text-sm leading-relaxed">
                Mis geen nieuwe binnenkomers, proeverijen of wijntips meer.
              </p>
            </div>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-3 bg-offwhite text-anthracite font-sans text-sm tracking-wide px-7 py-4 hover:bg-badge-today transition-colors"
            >
              <span>Volgen</span>
              <InstagramIcon size={16} strokeWidth={1.75} />
            </a>
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 lg:gap-8">
          {posts.map((post, i) => (
            <a
              key={i}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-offwhite shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-500"
            >
              <div className="flex items-center gap-3 px-5 py-4 border-b border-anthracite/10">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-bordeaux to-olive p-[2px]">
                  <div className="w-full h-full rounded-full bg-offwhite flex items-center justify-center">
                    <InstagramIcon size={16} strokeWidth={1.75} className="text-anthracite" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-sans text-xs text-anthracite font-medium truncate">
                    wijnhandelvanzoolingen
                  </p>
                  <p className="font-sans text-[10px] text-anthracite/50 tracking-wider uppercase">
                    Sliedrecht
                  </p>
                </div>
              </div>
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-anthracite/0 group-hover:bg-anthracite/40 transition-colors duration-500 flex items-center justify-center">
                  <InstagramIcon
                    size={32}
                    strokeWidth={1.5}
                    className="text-offwhite opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </div>
              </div>
              <div className="px-5 pt-4 pb-5">
                <div className="flex items-center gap-4 mb-3 text-anthracite/70">
                  <Heart size={18} strokeWidth={1.5} className="group-hover:text-bordeaux group-hover:fill-bordeaux transition-colors" />
                  <MessageCircle size={18} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-lg text-anthracite mb-1.5 leading-snug">
                  {post.title}
                </h3>
                <p className="text-anthracite/70 font-sans text-sm leading-relaxed line-clamp-3">
                  {post.caption}
                </p>
                <p className="mt-3 text-anthracite/40 font-sans text-[10px] tracking-[0.2em] uppercase">
                  {post.date}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instagram;
