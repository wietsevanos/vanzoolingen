import { useEffect } from 'react';
import { Instagram as InstagramIcon } from 'lucide-react';

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
            Proeverijen, nieuwe wijnen, tips en een blik achter de schermen. Volg ons op Instagram en ontdek wat er speelt bij Van Zoolingen.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
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
              href="https://www.instagram.com/wijnhandelvanzoolingen/"
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
