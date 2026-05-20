import { Instagram as InstagramIcon } from 'lucide-react';
import post1 from '@/assets/instagram-post-1.jpg';
import post2 from '@/assets/instagram-post-2.jpg';
import post3 from '@/assets/instagram-post-3.jpg';

const INSTAGRAM_URL = 'https://www.instagram.com/wijnhandelvanzoolingen/';

const posts = [
  {
    image: post1,
    caption: 'Een glas Bordeaux op een rustige middag — niets mooiers.',
  },
  {
    image: post2,
    caption: 'Nieuw binnen: drie bijzondere flessen die je proeven moet.',
  },
  {
    image: post3,
    caption: 'Proost! Op mooie momenten, samen met goede wijn.',
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

        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-anthracite text-offwhite p-10 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-10 text-center md:text-left">
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
      </div>
    </section>
  );
};

export default Instagram;
