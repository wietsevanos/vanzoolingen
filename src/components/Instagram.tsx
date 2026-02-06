import { Instagram as InstagramIcon, Play, Heart, MessageCircle } from 'lucide-react';
import instagramPost1 from '@/assets/instagram-post-1.jpeg';
import instagramPost2 from '@/assets/instagram-post-2.jpeg';

const instagramPosts = [
  {
    url: 'https://www.instagram.com/p/DT-R54AiK_l/',
    image: instagramPost1,
    alt: 'We are hiring - Winkelmedewerker gezocht',
    type: 'image' as const,
    caption: '🍷 Nieuwe collega gezocht! Ben jij op zoek naar een leuke (bij)baan in een sfeervolle winkel? Wijnkennis niet nodig – die leer je al werkend!',
  },
  {
    url: 'https://www.instagram.com/reel/DQ2eCw6DZHZ/',
    video: '/videos/instagram-reel.mp4',
    image: null,
    alt: 'Najaarsproeverij 2025',
    type: 'video' as const,
    caption: '🍷 Najaarsproeverij 2025 — Wij hebben erg genoten! Dankbaar voor alle hulp en gezelligheid op deze mooie herfstdag. 🍂',
  },
  {
    url: 'https://www.instagram.com/p/DQgd0oyDabG/',
    image: instagramPost2,
    alt: 'Geschenken - Feestelijk aanbod',
    type: 'image' as const,
    caption: '🎁 Relatie- & kerstgeschenken — De feestdagen zijn hét moment om waardering te tonen. Bij ons bent u aan het juiste adres!',
  },
];

const Instagram = () => {
  return (
    <section className="py-24 lg:py-32 bg-offwhite">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-olive text-sm font-sans tracking-[0.2em] uppercase mb-4">
            @wijnhandelvanzoolingen
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-anthracite font-medium">
            Een kijkje achter de kurk
          </h2>
        </div>

        {/* Posts grid - Instagram card style */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {instagramPosts.map((post, index) => (
            <a
              key={index}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-border overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Post header */}
              <div className="flex items-center gap-2.5 px-4 py-3">
                <div className="w-8 h-8 bg-gradient-to-br from-bordeaux to-olive flex items-center justify-center">
                  <span className="text-white text-xs font-bold font-sans">VZ</span>
                </div>
                <div>
                  <p className="text-anthracite text-xs font-sans font-semibold leading-tight">wijnhandelvanzoolingen</p>
                  <p className="text-anthracite-light/60 text-[10px] font-sans">Hillegom</p>
                </div>
              </div>

              {/* Media - full aspect ratio */}
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-beige">
                {post.type === 'video' ? (
                  <>
                    <video
                      src={post.video}
                      muted
                      playsInline
                      loop
                      className="w-full h-full object-cover"
                      onMouseEnter={(e) => e.currentTarget.play()}
                      onMouseLeave={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-14 h-14 bg-anthracite/50 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
                        <Play size={24} className="text-white ml-1" fill="currentColor" />
                      </div>
                    </div>
                  </>
                ) : (
                  <img
                    src={post.image!}
                    alt={post.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                )}
              </div>

              {/* Action icons */}
              <div className="flex items-center gap-4 px-4 pt-3 pb-1">
                <Heart size={20} className="text-anthracite" />
                <MessageCircle size={20} className="text-anthracite" />
                <InstagramIcon size={18} className="text-anthracite ml-auto opacity-0 group-hover:opacity-60 transition-opacity" />
              </div>

              {/* Caption */}
              <div className="px-4 pb-4 pt-1">
                <p className="text-anthracite font-sans text-xs leading-relaxed line-clamp-3">
                  <span className="font-semibold">wijnhandelvanzoolingen</span>{' '}
                  {post.caption}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://www.instagram.com/wijnhandelvanzoolingen/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-bordeaux text-primary-foreground font-sans text-sm px-8 py-3 hover:bg-bordeaux-dark transition-colors duration-300"
          >
            <InstagramIcon size={16} />
            <span>Volg ons op Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Instagram;
