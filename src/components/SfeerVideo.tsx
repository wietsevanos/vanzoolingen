import sfeerVideo from '@/assets/sfeer.mp4.asset.json';

const SfeerVideo = () => {
  return (
    <section id="sfeer" className="py-24 lg:py-32 bg-offwhite">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-olive text-sm font-sans tracking-[0.2em] uppercase mb-4">
            Een impressie
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-anthracite font-medium mb-4">
            Sfeer in de winkel
          </h2>
          <div className="w-12 h-px bg-olive/40 mx-auto mb-6" />
          <p className="text-anthracite/70 font-sans text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Stap binnen en proef de sfeer van onze wijnhandel, waar elke fles een verhaal vertelt.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-olive pointer-events-none" />
            <video
              src={sfeerVideo.url}
              className="relative w-full aspect-video object-cover bg-anthracite"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SfeerVideo;