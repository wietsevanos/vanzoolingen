import { useEffect, useRef } from 'react';
import { Instagram as InstagramIcon, ExternalLink } from 'lucide-react';

const INSTAGRAM_URL = 'https://www.instagram.com/wijnhandelvanzoolingen/';

const posts = [
  {
    id: 'DT-R54AiK_l',
    title: 'We are Hiring',
    embedUrl: 'https://www.instagram.com/p/DT-R54AiK_l/embed/',
  },
  {
    id: 'DQ2eCw6DZHZ',
    title: 'Najaarsproeverij',
    embedUrl: 'https://www.instagram.com/reel/DQ2eCw6DZHZ/embed/',
  },
  {
    id: 'DQgd0oyDabG',
    title: 'Geschenken',
    embedUrl: 'https://www.instagram.com/p/DQgd0oyDabG/embed/',
  },
];

const storyHighlights = [
  { label: 'Proeverijen', emoji: '🍷' },
  { label: 'Nieuw binnen', emoji: '✨' },
  { label: 'Acties', emoji: '🏷️' },
  { label: 'Behind the scenes', emoji: '🎬' },
];

const Instagram = () => {
  return (
    <section id="instagram" className="py-24 lg:py-32 bg-offwhite">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-olive text-sm font-sans tracking-[0.2em] uppercase mb-4">
            @wijnhandelvanzoolingen
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-anthracite font-medium mb-4">
            Volg ons op Instagram
          </h2>
          <p className="text-anthracite-light/70 font-sans text-sm md:text-base max-w-lg mx-auto">
            Blijf op de hoogte van acties, proeverijen en nieuwe producten
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Desktop: 2 columns / Mobile: stacked */}
          <div className="grid lg:grid-cols-[280px_1fr] gap-8 lg:gap-12">
            
            {/* Stories column */}
            <div className="order-1">
              <p className="text-anthracite font-sans text-xs tracking-[0.15em] uppercase mb-5 font-medium">
                Stories & Highlights
              </p>
              <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0">
                {storyHighlights.map((story) => (
                  <a
                    key={story.label}
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 flex flex-col items-center gap-2 group"
                  >
                    <div className="w-16 h-16 lg:w-18 lg:h-18 border-2 border-bordeaux/30 flex items-center justify-center bg-beige group-hover:border-bordeaux transition-colors duration-300">
                      <span className="text-2xl">{story.emoji}</span>
                    </div>
                    <span className="text-anthracite/70 font-sans text-xs text-center group-hover:text-bordeaux transition-colors">
                      {story.label}
                    </span>
                  </a>
                ))}
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 flex flex-col items-center gap-2 group"
                >
                  <div className="w-16 h-16 lg:w-18 lg:h-18 border-2 border-dashed border-anthracite/20 flex items-center justify-center bg-beige/50 group-hover:border-bordeaux/50 transition-colors duration-300">
                    <ExternalLink size={18} className="text-anthracite/40 group-hover:text-bordeaux transition-colors" />
                  </div>
                  <span className="text-anthracite/50 font-sans text-xs text-center group-hover:text-bordeaux transition-colors">
                    Bekijk alles
                  </span>
                </a>
              </div>
            </div>

            {/* Posts grid */}
            <div className="order-2">
              <p className="text-anthracite font-sans text-xs tracking-[0.15em] uppercase mb-5 font-medium">
                Uitgelichte posts
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                {posts.map((post) => (
                  <div key={post.id} className="w-full">
                    <div className="relative w-full bg-beige" style={{ minHeight: '400px' }}>
                      <iframe
                        src={post.embedUrl}
                        className="w-full border-0"
                        style={{ minHeight: '400px', height: '100%' }}
                        loading="lazy"
                        title={post.title}
                        allowTransparency
                        allow="encrypted-media"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-14">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-bordeaux text-primary-foreground font-sans text-sm tracking-wider uppercase px-8 py-4 hover:bg-bordeaux-dark transition-all duration-300 group"
            >
              <InstagramIcon size={18} strokeWidth={1.5} />
              <span>Volg ons op Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instagram;
