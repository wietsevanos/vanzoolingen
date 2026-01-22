import { useState } from 'react';
import { Mail, Phone } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error('Vul alle velden in');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success('Uw bericht is verzonden!');
    setName('');
    setEmail('');
    setMessage('');
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-offwhite">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Form */}
          <div>
            <p className="text-olive text-sm font-sans tracking-[0.2em] uppercase mb-4">
              Neem Contact Op
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-anthracite font-medium mb-8">
              Contact
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Uw naam"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-6 py-4 bg-beige text-anthracite font-sans placeholder:text-anthracite-light/60 border-2 border-transparent focus:border-olive focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Uw e-mailadres"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-6 py-4 bg-beige text-anthracite font-sans placeholder:text-anthracite-light/60 border-2 border-transparent focus:border-olive focus:outline-none"
                />
              </div>
              <div>
                <textarea
                  placeholder="Uw bericht"
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-6 py-4 bg-beige text-anthracite font-sans placeholder:text-anthracite-light/60 border-2 border-transparent focus:border-olive focus:outline-none resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-12 py-4 bg-bordeaux text-primary-foreground text-base font-medium tracking-wide uppercase hover:bg-bordeaux-dark transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Verzenden...' : 'Verstuur bericht'}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:pt-16">
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Mail size={20} className="text-olive" strokeWidth={1.5} />
                  <p className="text-olive text-sm font-sans tracking-[0.2em] uppercase">
                    E-mail
                  </p>
                </div>
                <a 
                  href="mailto:info@wijnhandelvanzoolingen.nl"
                  className="font-sans text-lg text-anthracite hover:text-bordeaux transition-colors"
                >
                  info@wijnhandelvanzoolingen.nl
                </a>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Phone size={20} className="text-olive" strokeWidth={1.5} />
                  <p className="text-olive text-sm font-sans tracking-[0.2em] uppercase">
                    Telefoon
                  </p>
                </div>
                <a 
                  href="tel:0235252290"
                  className="font-sans text-lg text-anthracite hover:text-bordeaux transition-colors"
                >
                  023 525 22 90
                </a>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="mt-16 p-8 border-2 border-olive bg-beige">
              <p className="font-serif text-xl text-anthracite italic leading-relaxed">
                "Wij staan altijd klaar om u te helpen met persoonlijk advies en een warm welkom."
              </p>
              <p className="mt-4 text-olive font-sans text-sm tracking-wide">
                Team Van Zoolingen
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
