import { useEffect } from 'react';

const Newsletter = () => {
  useEffect(() => {
    // Check if script already exists to avoid duplicates
    const existingScript = document.querySelector('script[src*="enormail.eu/webform.js"]');
    if (existingScript) return;

    // Load Enormail form script
    const script = document.createElement('script');
    script.src = 'https://enormail.eu/webform.js?id=db516cb837a9bb07886a083b85bd25f8';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup on unmount if needed
      const scriptToRemove = document.querySelector('script[src*="enormail.eu/webform.js"]');
      if (scriptToRemove) {
        document.body.removeChild(scriptToRemove);
      }
    };
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

          {/* Enormail Form Container */}
          <div className="flex justify-center [&_form]:w-full [&_input]:w-full [&_input]:px-6 [&_input]:py-4 [&_input]:bg-offwhite [&_input]:text-anthracite [&_input]:font-sans [&_input]:border-0 [&_input]:focus:outline-none [&_input]:focus:ring-2 [&_input]:focus:ring-bordeaux [&_input]:mb-4 [&_button]:w-full [&_button]:sm:w-auto [&_button]:px-12 [&_button]:py-4 [&_button]:bg-bordeaux [&_button]:text-primary-foreground [&_button]:text-base [&_button]:font-medium [&_button]:tracking-wide [&_button]:uppercase [&_button]:hover:bg-bordeaux-dark [&_button]:transition-colors [&_button]:cursor-pointer">
            {/* Enormail will inject the form here */}
            <div id="enormail-form-db516cb837a9bb07886a083b85bd25f8"></div>
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
