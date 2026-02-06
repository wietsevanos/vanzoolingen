import { Instagram as InstagramIcon } from 'lucide-react';

const instagramPosts = [
  {
    url: 'https://www.instagram.com/p/DT-R54AiK_l/',
    image: '/placeholder.svg',
    alt: 'Instagram post 1',
  },
  {
    url: 'https://www.instagram.com/reel/DQ2eCw6DZHZ/',
    image: '/placeholder.svg',
    alt: 'Instagram post 2',
  },
  {
    url: 'https://www.instagram.com/p/DQgd0oyDabG/',
    image: '/placeholder.svg',
    alt: 'Instagram post 3',
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
            Volg ons op Instagram
          </h2>
        </div>

        {/* Posts grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12">
          {instagramPosts.map((post, index) => (
            <a
              key={index}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden bg-beige"
            >
              <img
                src={post.image}
                alt={post.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-anthracite/0 group-hover:bg-anthracite/30 transition-colors duration-300 flex items-center justify-center">
                <InstagramIcon
                  size={32}
                  className="text-offwhite opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
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
