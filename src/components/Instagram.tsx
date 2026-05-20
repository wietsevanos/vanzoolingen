import { Instagram as InstagramIcon } from 'lucide-react';
import post1 from '@/assets/instagram-post-1.jpg';
import post2 from '@/assets/instagram-post-2.jpg';
import post3 from '@/assets/instagram-post-3.jpg';
import instagramBg from '@/assets/instagram-bg.png';

const INSTAGRAM_URL = 'https://www.instagram.com/wijnhandelvanzoolingen/';

const stats = [
  { value: '527', label: 'berichten' },
  { value: '1.321', label: 'volgers' },
  { value: '1.758', label: 'volgend' },
];

const posts = [
  {
    image: post1,
    caption: 'UP Rosé Limited Edition 2026, slechts 2.500 flessen in heel Nederland. Op = écht op.',
  },
  {
    image: post2,
    caption: 'Paasactie UP Rosé, bij 5 flessen krijg je de 6e cadeau t.w.v. € 19,99.',
  },
  {
    image: post3,
    caption: 'Nieuwe collega gezocht, een leuke (bij)baan in een sfeervolle winkel.',
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

        <div className="max-w-4xl mx-auto mb-8 lg:mb-10">
          <div
            className="relative text-offwhite px-6 md:px-10 py-5 md:py-6 flex flex-col md:flex-row items-center gap-6 md:gap-10 overflow-hidden"
            style={{
              backgroundImage: `url(${instagramBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-anthracite/25 pointer-events-none" />
            <div className="relative flex items-center gap-4 md:pr-8 md:border-r border-offwhite/25">
              <div className="shrink-0 w-10 h-10 rounded-full bg-offwhite/15 border border-offwhite/40 flex items-center justify-center backdrop-blur-sm">
                <InstagramIcon size={18} strokeWidth={1.5} className="text-offwhite" />
              </div>
              <div className="text-center md:text-left">
                <p className="text-offwhite/90 text-[10px] font-sans tracking-[0.25em] uppercase mb-0.5">
                  Instagram
                </p>
                <p className="font-serif text-base md:text-lg">@wijnhandelvanzoolingen</p>
              </div>
            </div>
            <div className="relative flex-1 grid grid-cols-3 gap-3 md:gap-6 w-full">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-serif text-xl md:text-2xl font-medium">{s.value}</p>
                  <p className="text-offwhite/80 text-[10px] font-sans tracking-[0.2em] uppercase mt-0.5">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 lg:gap-8">
          {posts.map((post, i) => (
            <a
              key={i}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-offwhite shadow-lg overflow-hidden"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={post.image}
                  alt={post.caption}
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
              <div className="p-6">
                <p className="text-olive text-xs font-sans tracking-[0.2em] uppercase mb-2">
                  @wijnhandelvanzoolingen
                </p>
                <p className="text-anthracite/80 font-sans text-sm leading-relaxed">
                  {post.caption}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-anthracite text-offwhite font-sans text-xs tracking-[0.15em] uppercase px-7 py-3.5 hover:bg-bordeaux transition-colors duration-300"
          >
            <InstagramIcon size={14} strokeWidth={1.75} />
            <span>Volgen op Instagram</span>
            <span className="w-5 h-px bg-offwhite/60 group-hover:w-8 transition-all duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Instagram;
