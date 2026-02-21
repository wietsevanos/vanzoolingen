import { MapPin, Clock } from 'lucide-react';

const openingHours = [
  { day: 'Maandag', hours: 'Gesloten', dayIndex: 1 },
  { day: 'Dinsdag', hours: '09:30 tot 18:00', dayIndex: 2 },
  { day: 'Woensdag', hours: '09:30 tot 18:00', dayIndex: 3 },
  { day: 'Donderdag', hours: '09:30 tot 18:00', dayIndex: 4 },
  { day: 'Vrijdag', hours: '09:30 tot 18:00', dayIndex: 5 },
  { day: 'Zaterdag', hours: '09:30 tot 17:00', dayIndex: 6 },
  { day: 'Zondag', hours: 'Gesloten', dayIndex: 0 },
];

const Location = () => {
  const now = new Date();
  const today = now.getDay();

  // Voorjaarsvakantie: dinsdag 18 feb t/m woensdag 19 feb 2026 gesloten
  // Verloopt automatisch na zondag 22 feb 2026
  const vacationEnd = new Date(2026, 1, 26, 23, 59, 59); // 26 feb 2026
  const isVacationWeek = now <= vacationEnd;

  const getHours = (item: typeof openingHours[number]) => {
    if (isVacationWeek && (item.dayIndex === 2 || item.dayIndex === 3)) {
      return 'Gesloten (voorjaarsvakantie)';
    }
    return item.hours;
  };

  return (
    <section id="locatie" className="py-24 lg:py-32 bg-beige">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Location */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <MapPin size={20} className="text-olive" strokeWidth={1.5} />
              <p className="text-olive text-xs font-sans tracking-[0.25em] uppercase">
                Onze Locatie
              </p>
            </div>
            
            <h2 className="font-serif text-3xl md:text-4xl text-anthracite font-medium mb-6">
              Bezoek ons
            </h2>
            
            <address className="not-italic text-anthracite-light font-sans text-base leading-relaxed mb-6">
              Bloemendaalseweg 261<br />
              2051 GD Overveen
            </address>

            {/* Google Maps */}
            <div className="w-full flex-1 min-h-[340px] shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.8876812789913!2d4.615393!3d52.391889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5ef5b55555555%3A0x5555555555555555!2sBloemendaalseweg%20261%2C%202051%20GD%20Overveen!5e0!3m2!1snl!2snl!4v1700000000000!5m2!1snl!2snl"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Locatie Wijnhandel van Zoolingen"
              />
            </div>
          </div>

          {/* Opening Hours */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <Clock size={20} className="text-olive" strokeWidth={1.5} />
              <p className="text-olive text-xs font-sans tracking-[0.25em] uppercase">
                Wanneer
              </p>
            </div>
            
            <h2 className="font-serif text-3xl md:text-4xl text-anthracite font-medium mb-6">
              Openingstijden
            </h2>

            {/* Holiday notice - above opening hours */}
            <div className="mb-6 bg-olive/10 border border-olive/20 px-5 py-4">
              <p className="text-anthracite font-sans text-sm leading-relaxed">
                Op feestdagen gooien we de deuren soms wat eerder dicht, of juist extra wijd open. Check bij twijfel even onze socials of bel ons gerust!
              </p>
            </div>

            <div className="bg-offwhite shadow-lg flex-1 flex flex-col overflow-hidden">
              {openingHours.map((item, index) => {
                const isToday = item.dayIndex === today;
                const isClosed = item.hours === 'Gesloten';
                
                return (
                  <div
                    key={item.day}
                    className={`
                      flex items-center justify-between px-6 py-4
                      ${index !== openingHours.length - 1 ? 'border-b border-beige-warm/60' : ''}
                      ${isToday ? 'bg-olive text-offwhite' : getHours(item).includes('vakantie') ? 'bg-rose-50' : ''}
                      transition-colors
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`font-sans font-medium ${isToday ? 'text-offwhite' : 'text-anthracite'}`}>
                        {item.day}
                      </span>
                      {isToday && (
                        <span className="bg-badge-today text-anthracite text-xs font-semibold px-2 pt-1.5 pb-0.5 uppercase tracking-wide inline-flex items-center justify-center leading-none">
                          Vandaag
                        </span>
                      )}
                    </div>
                    <span className={`font-sans ${isToday ? 'text-offwhite font-medium' : (isClosed || getHours(item).includes('vakantie')) ? 'text-anthracite-light' : 'text-anthracite'}`}>
                      {getHours(item)}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
