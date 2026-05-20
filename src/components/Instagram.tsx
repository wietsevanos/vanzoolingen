import { Instagram as InstagramIcon } from 'lucide-react';
import post1 from '@/assets/instagram-post-1.jpg';
import post2 from '@/assets/instagram-post-2.jpg';
import post3 from '@/assets/instagram-post-3.jpg';
import instagramBg from '@/assets/instagram-bg.png';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

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
          <div className="w-12 h-px bg-olive/40 mx-auto mb-6" />
          <p className="text-anthracite/70 font-sans text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Proeverijen, nieuwe wijnen, tips en een blik achter de schermen. Volg ons op Instagram en ontdek wat er speelt bij Van Zoolingen.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-10 lg:mb-12">
          <div
            className="relative text-offwhite px-6 md:px-10 py-6 md:py-7 flex flex-col md:flex-row items-center gap-6 md:gap-10 overflow-hidden rounded-[8px] shadow-[0_8px_30px_-12px_rgba(0,0,0,0.35)]"
            style={{
              backgroundImage: `url(${instagramBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-anthracite/40 via-anthracite/20 to-anthracite/30 pointer-events-none" />
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
              {stats.map((s, idx) => (
                <div
                  key={s.label}
                  className={`text-center ${idx > 0 ? 'border-l border-offwhite/15' : ''}`}
                >
                  <p className="font-serif text-2xl md:text-[1.6rem] font-medium leading-tight">{s.value}</p>
                  <p className="text-offwhite/85 text-[10px] font-sans tracking-[0.2em] uppercase mt-1">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid max-w-6xl mx-auto md:grid-cols-3 gap-6 lg:gap-8">
          {posts.map((post, i) => (
            <PostCard key={i} post={post} />
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden max-w-md mx-auto">
          <Carousel opts={{ loop: true, align: 'center' }}>
            <CarouselContent>
              {posts.map((post, i) => (
                <CarouselItem key={i}>
                  <PostCard post={post} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-1 bg-offwhite/90 border-anthracite/10 text-anthracite hover:bg-offwhite rounded-full" />
            <CarouselNext className="right-1 bg-offwhite/90 border-anthracite/10 text-anthracite hover:bg-offwhite rounded-full" />
          </Carousel>
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-anthracite text-offwhite font-sans text-xs tracking-[0.15em] uppercase px-8 py-3.5 rounded-[6px] shadow-[0_6px_20px_-10px_rgba(0,0,0,0.4)] hover:bg-bordeaux hover:shadow-[0_10px_24px_-10px_rgba(0,0,0,0.45)] transition-all duration-300"
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

type Post = { image: string; caption: string };

const PostCard = ({ post }: { post: Post }) => (
  <a
    href={INSTAGRAM_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="group block bg-offwhite overflow-hidden rounded-[8px] shadow-[0_6px_24px_-12px_rgba(0,0,0,0.25)] hover:shadow-[0_14px_36px_-12px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-500"
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
    <div className="p-6 md:p-7">
      <p className="text-olive text-xs font-sans tracking-[0.2em] uppercase mb-2">
        @wijnhandelvanzoolingen
      </p>
      <span className="block w-8 h-px bg-olive/30 mb-3" />
      <p className="text-anthracite/80 font-sans text-sm leading-relaxed">
        {post.caption}
      </p>
    </div>
  </a>
);

export default Instagram;
