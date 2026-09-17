import { ArrowRight, CalendarDays, MapPin } from 'lucide-react';
import autumnTasting from '@/assets/events/najaarsproeverij-2026.png';

type NewsItem = {
  title: string;
  category: string;
  date: string;
  location: string;
  description: string;
  image: string;
  link?: string;
  linkLabel?: string;
  // Optioneel: na deze datum wordt het item automatisch niet meer getoond.
  hideAfter?: Date;
};

// Voeg nieuwe berichten of evenementen simpelweg als extra item aan deze lijst toe.
const newsItems: NewsItem[] = [
  {
    title: 'Najaarsproeverij',
    category: 'Evenement',
    date: '8 november 2026, 13:00 tot 17:00',
    location: 'TC VOC, Zeeweg 5, Overveen',
    description:
      'Proef samen met ons de mooiste wijnen voor het najaar. De toegang is gratis, aanmelden is verplicht en kan in de winkel, via WhatsApp of per mail.',
    image: autumnTasting,
    link: 'https://wa.me/31628351298?text=Hallo%2C%20ik%20wil%20mij%20graag%20aanmelden%20voor%20de%20najaarsproeverij%20op%208%20november%202026.',
    linkLabel: 'Aanmelden via WhatsApp',
    // Verdwijnt automatisch na 7 november 2026.
    hideAfter: new Date(2026, 10, 8, 0, 0, 0),
  },
];

const News = () => {
  const today = new Date();
  const visibleItems = newsItems.filter(
    (item) => !item.hideAfter || today < item.hideAfter
  );

  if (visibleItems.length === 0) {
    return null;
  }

  return (
    <section id="nieuws" className="bg-offwhite py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-14 max-w-2xl lg:mb-16">
          <p className="mb-4 font-sans text-sm uppercase tracking-[0.2em] text-olive">
            Nieuws en agenda
          </p>
          <h2 className="mb-5 font-serif text-3xl font-medium text-anthracite md:text-4xl lg:text-5xl">
            Wat staat er op de agenda
          </h2>
          <p className="font-sans text-sm leading-relaxed text-anthracite/70 md:text-base">
            Proeverijen, bijzondere flessen en het laatste nieuws uit onze winkel.
          </p>
        </div>

        <div className="grid gap-8">
          {visibleItems.map((item) => (
            <article
              key={`${item.title}-${item.date}`}
              className="flex flex-col overflow-hidden bg-beige lg:flex-row"
            >
              <div className="aspect-[4/5] w-full overflow-hidden bg-muted lg:aspect-auto lg:w-2/5 xl:w-1/3">
                <img
                  src={item.image}
                  alt={`Aankondiging van ${item.title}`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-1 flex-col justify-center p-7 lg:p-10 xl:p-12">
                <p className="mb-3 font-sans text-xs uppercase tracking-[0.2em] text-olive">
                  {item.category}
                </p>
                <h3 className="mb-5 font-serif text-2xl font-medium text-anthracite md:text-3xl">
                  {item.title}
                </h3>

                <div className="mb-5 space-y-3 border-y border-olive/20 py-4 font-sans text-sm text-anthracite/80 md:text-base">
                  <p className="flex items-start gap-3">
                    <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-bordeaux" aria-hidden="true" />
                    <span>{item.date}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-bordeaux" aria-hidden="true" />
                    <span>{item.location}</span>
                  </p>
                </div>

                <p className="mb-7 max-w-2xl font-sans text-sm leading-relaxed text-anthracite/75 md:text-base">
                  {item.description}
                </p>

                {item.link && item.linkLabel && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 self-start font-sans text-sm font-medium text-bordeaux transition-colors hover:text-bordeaux-dark md:text-base"
                  >
                    <span>{item.linkLabel}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
