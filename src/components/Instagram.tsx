import { useEffect, useRef } from 'react';

const Instagram = () => {
  const scriptLoaded = useRef(false);

  useEffect(() => {
    if (scriptLoaded.current) return;

    const existing = document.querySelector('script[src="https://w.behold.so/widget.js"]');
    if (!existing) {
      const script = document.createElement('script');
      script.type = 'module';
      script.src = 'https://w.behold.so/widget.js';
      document.head.appendChild(script);
    }
    scriptLoaded.current = true;
  }, []);

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

        <div className="max-w-5xl mx-auto">
          <behold-widget feed-id="7N8r32pUv97kzXXNuDkD" />
        </div>
      </div>
    </section>
  );
};

export default Instagram;
