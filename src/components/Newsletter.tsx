import { useEffect } from 'react';

const Newsletter = () => {
  useEffect(() => {
    // Re-initialize Enormail form when component mounts
    const script = document.querySelector('script[src*="enormail"]');
    if (script) {
      // Trigger re-render of Enormail form
      const event = new Event('DOMContentLoaded');
      document.dispatchEvent(event);
    }
  }, []);

  return (
    <section id="nieuwsbrief" className="py-24 lg:py-32 bg-olive">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mx-auto text-center">
          {/* Header */}
          <p className="text-beige/80 text-sm font-sans tracking-[0.2em] uppercase mb-4">
            Exclusieve Aanbiedingen
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-offwhite font-medium mb-6">
            Blijf op de hoogte
          </h2>
          <p className="text-beige/90 font-sans text-base md:text-lg mb-12 leading-relaxed">
            Ontvang aanbiedingen, nieuwe wijnen en exclusieve acties in je inbox.
          </p>

          {/* Enormail Popup Trigger */}
          <a 
            href="#" 
            data-enormail-popup="db516cb837a9bb07886a083b85bd25f8"
            className="inline-flex items-center gap-3 px-8 py-4 bg-beige text-olive font-sans font-medium text-base tracking-wide hover:bg-offwhite hover:scale-105 transition-all duration-300 group"
          >
            <span>Schrijf je in</span>
            <svg 
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>

          <p className="text-beige/60 text-xs font-sans mt-8">
            Wij respecteren uw privacy. U kunt zich op elk moment uitschrijven.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
