import { MapPin, Clock } from 'lucide-react';

const openingHours = [
  { day: 'Maandag', hours: 'Gesloten' },
  { day: 'Dinsdag', hours: '09:30 – 18:00' },
  { day: 'Woensdag', hours: '09:30 – 18:00' },
  { day: 'Donderdag', hours: '09:30 – 18:00' },
  { day: 'Vrijdag', hours: '09:30 – 18:00' },
  { day: 'Zaterdag', hours: '09:30 – 17:00' },
  { day: 'Zondag', hours: 'Gesloten' },
];

const Location = () => {
  return (
    <section id="locatie" className="py-24 lg:py-32 bg-beige">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Location */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <MapPin size={24} className="text-olive" strokeWidth={1.5} />
              <p className="text-olive text-sm font-sans tracking-[0.2em] uppercase">
                Onze Locatie
              </p>
            </div>
            
            <h2 className="font-serif text-3xl md:text-4xl text-anthracite font-medium mb-8">
              Bezoek ons
            </h2>
            
            <address className="not-italic text-anthracite-light font-sans text-lg leading-relaxed mb-8">
              Bloemendaalseweg 261<br />
              2051 GD Overveen
            </address>

            {/* Google Maps */}
            <div className="w-full flex-1 min-h-[300px] border-2 border-olive">
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
            <div className="flex items-center gap-3 mb-6">
              <Clock size={24} className="text-olive" strokeWidth={1.5} />
              <p className="text-olive text-sm font-sans tracking-[0.2em] uppercase">
                Wanneer
              </p>
            </div>
            
            <h2 className="font-serif text-3xl md:text-4xl text-anthracite font-medium mb-8">
              Openingstijden
            </h2>

            <div className="border-2 border-olive bg-offwhite">
              <table className="w-full">
                <tbody>
                  {openingHours.map((item, index) => (
                    <tr 
                      key={item.day}
                      className={index !== openingHours.length - 1 ? 'border-b border-border' : ''}
                    >
                      <td className="px-6 py-4 font-sans text-anthracite font-medium">
                        {item.day}
                      </td>
                      <td className={`px-6 py-4 font-sans text-right ${item.hours === 'Gesloten' ? 'text-anthracite-light' : 'text-anthracite'}`}>
                        {item.hours}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Holiday notice */}
            <div className="mt-auto pt-6">
              <div className="border-2 border-olive/30 bg-olive/5 px-6 py-4">
                <p className="text-anthracite font-sans text-sm leading-relaxed">
                  <span className="font-medium">Let op:</span> Openingstijden kunnen afwijken op feestdagen. Neem bij twijfel gerust contact met ons op.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
