const Newsletter = () => {
  return (
    <section id="nieuwsbrief" className="py-24 lg:py-32 bg-olive">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-beige/80 text-sm font-sans tracking-[0.2em] uppercase mb-4">
            onze Nieuwsbrief
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-offwhite font-medium mb-6">
            Blijf op de hoogte
          </h2>
          <p className="text-beige/90 font-sans text-base md:text-lg mb-12 leading-relaxed">
            Ontvang als eerste het laatste nieuws, ontdek nieuwe wijnen en profiteer van exclusieve aanbiedingen, zorgvuldig bezorgd in uw inbox.
          </p>

          <div data-enormail-webform="885a79e0e2f21736d148ee23222f308d"></div>

          <p className="text-beige/60 text-xs font-sans mt-8">
            Wij respecteren uw privacy. U kunt zich op elk moment uitschrijven.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
