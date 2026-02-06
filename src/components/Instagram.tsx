import { Instagram as InstagramIcon } from 'lucide-react';

import storyImg1 from '@/assets/insta-story-1.jpg';
import storyImg2 from '@/assets/insta-story-2.jpg';
import storyImg3 from '@/assets/insta-story-3.jpg';
import storyImg4 from '@/assets/insta-story-4.jpg';
import postHiring from '@/assets/insta-post-hiring.jpg';
import postProeverij from '@/assets/insta-post-proeverij.jpg';
import postGeschenken from '@/assets/insta-post-geschenken.jpg';

const INSTAGRAM_URL = 'https://www.instagram.com/wijnhandelvanzoolingen/';

const stories = [
  { image: storyImg1, label: 'Wijn' },
  { image: storyImg2, label: 'Wijngaard' },
  { image: storyImg3, label: 'Champagne' },
  { image: storyImg4, label: 'Kelder' },
];

const posts = [
  {
    image: postHiring,
    title: 'We are Hiring',
    url: 'https://www.instagram.com/p/DT-R54AiK_l/',
  },
  {
    image: postProeverij,
    title: 'Najaarsproeverij',
    url: 'https://www.instagram.com/reel/DQ2eCw6DZHZ/',
  },
  {
    image: postGeschenken,
    title: 'Geschenken',
    url: 'https://www.instagram.com/p/DQgd0oyDabG/',
  },
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
          {/* Desktop: 4 columns (1 stories + 3 posts) / Mobile: stacked */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Stories column */}
            <div>
              <p className="text-anthracite font-sans text-xs tracking-[0.15em] uppercase mb-5 font-medium">
                Stories
              </p>
              <div className="flex lg:flex-col gap-5 justify-center lg:justify-start">
                {stories.map((story) => (
                  <a
                    key={story.label}
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 group"
                  >
                    <div className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-full overflow-hidden border-2 border-bordeaux/30 group-hover:border-bordeaux transition-colors duration-300 p-[2px]">
                      <img
                        src={story.image}
                        alt={story.label}
                        className="w-full h-full object-cover rounded-full"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-anthracite/60 font-sans text-[11px] group-hover:text-bordeaux transition-colors">
                      {story.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* 3 Posts */}
            {posts.map((post) => (
              <a
                key={post.url}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <p className="text-anthracite font-sans text-xs tracking-[0.15em] uppercase mb-5 font-medium lg:block hidden">
                  {post.title}
                </p>
                <p className="text-anthracite font-sans text-xs tracking-[0.15em] uppercase mb-3 font-medium lg:hidden">
                  {post.title}
                </p>
                <div className="aspect-square overflow-hidden bg-beige">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-14">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-bordeaux text-primary-foreground font-sans text-sm tracking-wider uppercase px-8 py-4 hover:bg-bordeaux-dark transition-all duration-300"
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
