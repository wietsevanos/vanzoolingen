import { UserCheck, Award, Truck } from 'lucide-react';

const features = [
  {
    icon: UserCheck,
    title: 'Persoonlijk Advies',
    description: 'Deskundige begeleiding bij elke keuze. Wij helpen u graag de perfecte wijn te vinden.',
  },
  {
    icon: Award,
    title: 'Hoogwaardige Kwaliteit',
    description: 'Zorgvuldig geselecteerde wijnen en spirits van gerenommeerde producenten.',
  },
  {
    icon: Truck,
    title: 'Lokale Bezorging',
    description: 'Bezorging in de regio voor uw gemak. Snel en betrouwbaar bij u thuis.',
  },
];

const WhyUs = () => {
  return (
    <section id="waarom" className="py-24 lg:py-32 bg-offwhite">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-olive text-sm font-sans tracking-[0.2em] uppercase mb-4">
            Onze Belofte
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-anthracite font-medium">
            Waarom Van Zoolingen
          </h2>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 border-2 border-olive mb-8">
                <feature.icon 
                  size={36} 
                  strokeWidth={1.5}
                  className="text-olive" 
                />
              </div>
              <h3 className="font-serif text-xl text-anthracite font-medium mb-4">
                {feature.title}
              </h3>
              <p className="text-anthracite-light font-sans text-sm leading-relaxed max-w-sm mx-auto">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
