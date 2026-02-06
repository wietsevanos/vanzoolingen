import { Instagram as InstagramIcon, ExternalLink } from 'lucide-react';
import instagramPost1 from '@/assets/instagram-post-1.jpeg';
import instagramPost2 from '@/assets/instagram-post-2.jpeg';
import instagramProfile from '@/assets/instagram-profile.png';

const instagramPosts = [
  {
    url: 'https://www.instagram.com/p/DT-R54AiK_l/',
    image: instagramPost1,
    type: 'image' as const,
  },
  {
    url: 'https://www.instagram.com/reel/DQ2eCw6DZHZ/',
    video: '/videos/instagram-reel.mp4',
    type: 'video' as const,
  },
  {
    url: 'https://www.instagram.com/p/DQgd0oyDabG/',
    image: instagramPost2,
    type: 'image' as const,
  },
];

const Instagram = () => {
  return (
    <section className="py-24 lg:py-32 bg-beige">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-olive text-sm font-sans tracking-[0.2em] uppercase mb-4">
            Blijf op de hoogte
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-anthracite font-medium mb-4">
            Een kijkje achter de kurk
          </h2>
          <p className="text-anthracite/70 font-sans text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Proeverijen, nieuwe wijnen, tips en een blik achter de schermen. Volg ons en ontdek wat er speelt bij Van Zoolingen.
          </p>
        </div>

        {/* Instagram widget card */}
        <div className="max-w-3xl mx-auto bg-offwhite border border-border shadow-md overflow-hidden">
          {/* Gradient header bar */}
          <div
            className="flex items-center justify-between px-6 py-3"
            style={{
              background: 'linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
            }}
          >
            <div className="flex items-center gap-2.5">
              <InstagramIcon size={18} className="text-white" />
              <span className="text-white text-sm font-sans font-medium">
                @wijnhandelvanzoolingen
              </span>
            </div>
            <InstagramIcon size={22} className="text-white/80" />
          </div>

          {/* Profile section */}
          <div className="flex items-center gap-6 px-6 md:px-8 py-6 md:py-8">
            <div
              className="w-20 h-20 md:w-24 md:h-24 shrink-0"
              style={{
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
                padding: '3px',
              }}
            >
              <div
                className="w-full h-full bg-offwhite"
                style={{ borderRadius: '50%', padding: '3px' }}
              >
                <img
                  src={instagramProfile}
                  alt="Wijnhandel van Zoolingen"
                  className="w-full h-full object-cover"
                  style={{ borderRadius: '50%' }}
                />
              </div>
            </div>
            <div className="flex-1">
              <p className="text-anthracite text-base md:text-lg font-sans font-bold leading-tight">
                wijnhandelvanzoolingen
              </p>
              <p className="text-anthracite-light/60 text-sm font-sans mt-1">
                Wijnhandel &amp; Slijterij van Zoolingen
              </p>
              <p className="text-anthracite/70 text-xs font-sans mt-1">
                📍 Overveen
              </p>
              <div className="flex items-center gap-6 mt-3">
                <span className="text-anthracite text-sm font-sans">
                  <strong className="font-semibold">523</strong> berichten
                </span>
                <span className="text-anthracite text-sm font-sans">
                  <strong className="font-semibold">1.274</strong> volgers
                </span>
              </div>
            </div>
          </div>

          {/* Posts grid */}
          <div className="grid grid-cols-3 gap-[3px]">
            {instagramPosts.map((post, index) => (
              <a
                key={index}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-square overflow-hidden bg-beige-warm group"
              >
                {post.type === 'video' ? (
                  <video
                    src={post.video}
                    muted
                    playsInline
                    loop
                    className="w-full h-full object-cover"
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => {
                      e.currentTarget.pause();
                      e.currentTarget.currentTime = 0;
                    }}
                  />
                ) : (
                  <img
                    src={post.image!}
                    alt=""
                    className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-200"
                  />
                )}
              </a>
            ))}
          </div>

          {/* Footer link */}
          <a
            href="https://www.instagram.com/wijnhandelvanzoolingen/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-5 text-anthracite-light hover:text-anthracite font-sans text-sm transition-colors border-t border-border"
          >
            <span>Bekijk op Instagram</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Instagram;
