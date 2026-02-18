import { useEffect } from 'react';

const ENORMAIL_ID = '885a79e0e2f21736d148ee23222f308d';

const Newsletter = () => {
  useEffect(() => {
    // Remove any existing Enormail script so it re-initializes
    const existing = document.querySelector(`script[src*="${ENORMAIL_ID}"]`);
    if (existing) {
      existing.remove();
    }

    // Dynamically append the script so it runs after the div is in the DOM
    const script = document.createElement('script');
    script.src = `https://embed.enormail.eu/js/${ENORMAIL_ID}.js`;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <section id="nieuwsbrief" className="py-24 lg:py-32 bg-olive">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-beige/80 text-sm font-sans tracking-[0.2em] uppercase mb-4">
            Exclusieve Aanbiedingen
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-offwhite font-medium mb-6">
            Blijf op de hoogte
          </h2>
          <p className="text-beige/90 font-sans text-base md:text-lg mb-12 leading-relaxed">
            Ontvang aanbiedingen, nieuwe wijnen en exclusieve acties in je inbox.
          </p>

          <div className="newsletter-form-wrapper flex justify-center items-center [&>*]:mx-auto">
            <div data-enormail-webform={ENORMAIL_ID}></div>
          </div>

          <p className="text-beige/60 text-xs font-sans mt-8">
            Wij respecteren uw privacy. U kunt zich op elk moment uitschrijven.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
