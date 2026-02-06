import { useEffect } from 'react';

const Instagram = () => {
  useEffect(() => {
    // Load mirror-app iframe bridge script
    if (!document.querySelector('script[src*="mirrorapp/iframe-bridge"]')) {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/@mirrorapp/iframe-bridge@latest/dist/index.umd.js';
      script.async = true;
      document.body.appendChild(script);
    }
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
          <p className="text-anthracite/70 font-sans text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Proeverijen, nieuwe wijnen, tips en een blik achter de schermen. Volg ons en ontdek wat er speelt bij Van Zoolingen.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <iframe
            onLoad={(e) => {
              if (typeof (window as any).iFrameSetup === 'function') {
                (window as any).iFrameSetup(e.currentTarget);
              }
            }}
            src="https://app.mirror-app.com/feed-instagram/b5f0f049-d8e0-4d8d-bde0-e6b451421cf3/preview"
            style={{ width: '100%', border: 'none', overflow: 'hidden' }}
            scrolling="no"
            title="Instagram feed Wijnhandel van Zoolingen"
          />
        </div>
      </div>
    </section>
  );
};

export default Instagram;
