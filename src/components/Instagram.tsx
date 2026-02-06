import { Instagram as InstagramIcon, ExternalLink } from 'lucide-react';
import instagramPost1 from '@/assets/instagram-post-1.jpeg';
import instagramPost2 from '@/assets/instagram-post-2.jpeg';
import logoImage from '@/assets/logo.png';

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
            @wijnhandelvanzoolingen
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-anthracite font-medium">
            Een kijkje achter de kurk
          </h2>
        </div>

        {/* Instagram widget card */}
        <div className="max-w-md mx-auto bg-white border border-border shadow-lg overflow-hidden">
          {/* Gradient header bar */}
          <div
            className="flex items-center justify-between px-4 py-2.5"
            style={{
              background: 'linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
            }}
          >
            <div className="flex items-center gap-2">
              <InstagramIcon size={16} className="text-white" />
              <span className="text-white text-sm font-sans font-medium">
                @wijnhandelvanzoolingen
              </span>
            </div>
            <InstagramIcon size={20} className="text-white/80" />
          </div>

          {/* Profile section */}
          <div className="flex items-center gap-4 px-5 py-5">
            <div className="w-16 h-16 shrink-0 overflow-hidden border-2 border-border" style={{ borderRadius: '50%' }}>
              <img
                src={logoImage}
                alt="Wijnhandel van Zoolingen"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-anthracite text-sm font-sans font-bold leading-tight">
                wijnhandelvanzoolingen
              </p>
              <p className="text-anthracite-light/70 text-xs font-sans mt-0.5">
                Wijnhandel van Zoolingen
              </p>
              <div className="flex items-center gap-4 mt-2">
                <span className="text-anthracite text-xs font-sans">
                  <strong className="font-semibold">3</strong> berichten
                </span>
              </div>
            </div>
          </div>

          {/* Posts grid */}
          <div className="grid grid-cols-3 gap-[2px]">
            {instagramPosts.map((post, index) => (
              <a
                key={index}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-square overflow-hidden bg-beige group"
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
            className="flex items-center justify-center gap-2 py-4 text-anthracite-light/70 hover:text-anthracite font-sans text-sm transition-colors border-t border-border"
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
