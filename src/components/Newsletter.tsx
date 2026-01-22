import { useState } from 'react';
import { toast } from 'sonner';

const Newsletter = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !email.trim()) {
      toast.error('Vul alle velden in');
      return;
    }

    setIsSubmitting(true);
    
    // Submit to Enormail via their form endpoint
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('formid', 'db516cb837a9bb07886a083b85bd25f8');

      // Open Enormail subscription in new tab as fallback
      const enormailUrl = `https://enormail.eu/subscribe?id=db516cb837a9bb07886a083b85bd25f8&name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`;
      window.open(enormailUrl, '_blank');
      
      toast.success('Bedankt voor uw inschrijving!');
      setName('');
      setEmail('');
    } catch (error) {
      toast.error('Er ging iets mis. Probeer het opnieuw.');
    } finally {
      setIsSubmitting(false);
    }
  };

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

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Uw naam"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-6 py-4 bg-offwhite text-anthracite font-sans placeholder:text-anthracite-light/60 border-0 focus:outline-none focus:ring-2 focus:ring-bordeaux"
              />
              <input
                type="email"
                placeholder="Uw e-mailadres"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-6 py-4 bg-offwhite text-anthracite font-sans placeholder:text-anthracite-light/60 border-0 focus:outline-none focus:ring-2 focus:ring-bordeaux"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-12 py-4 bg-bordeaux text-primary-foreground text-base font-medium tracking-wide uppercase hover:bg-bordeaux-dark transition-colors disabled:opacity-50"
            >
              {isSubmitting ? 'Bezig...' : 'Inschrijven'}
            </button>
          </form>

          <p className="text-beige/60 text-xs font-sans mt-8">
            Wij respecteren uw privacy. U kunt zich op elk moment uitschrijven.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;