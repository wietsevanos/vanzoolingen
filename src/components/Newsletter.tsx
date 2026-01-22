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
  return <section id="nieuwsbrief" className="py-24 lg:py-32 bg-olive">
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

          {/* Enormail Embedded Form */}
          <div className="newsletter-form-wrapper flex justify-center items-center [&>*]:mx-auto">
            <div data-enormail-webform="db516cb837a9bb07886a083b85bd25f8"></div>
          </div>

          <p className="text-beige/60 text-xs font-sans mt-8">
            Wij respecteren uw privacy. U kunt zich op elk moment uitschrijven.
          </p>
        </div>
      </div>
    </section>;
};
export default Newsletter;