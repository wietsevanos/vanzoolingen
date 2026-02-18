import { useState } from 'react';

const Newsletter = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch('https://app.enormail.eu/subscribe/885a79e0e2f21736d148ee23222f308d', {
        method: 'POST',
        body: data,
        mode: 'no-cors',
      });
    } catch {
      // no-cors means we can't read the response, but the request is sent
    }

    setSubmitted(true);
  };

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

          {submitted ? (
            <div className="text-center py-8">
              <h3 className="font-serif text-2xl md:text-3xl text-offwhite font-medium mb-4">
                Proost, je bent erbij! 🥂
              </h3>
              <p className="text-beige/90 font-sans text-base md:text-lg leading-relaxed">
                Leuk dat je je hebt aangemeld voor onze nieuwsbrief.<br />
                Je ontvangt voortaan als eerste onze acties,<br />
                aanbiedingen en nieuwtjes.<br /><br />
                Tot snel in de winkel,<br />
                <em>Team van Zoolingen</em>
              </p>
            </div>
          ) : (
            <div className="w-full [&_.c-enormail-webform__panelholder]:flex [&_.c-enormail-webform__panelholder]:justify-center [&_.c-enormail-webform__panelwrapper]:!float-none [&_.c-enormail-webform__panelwrapper]:mx-auto">
              <div className="c-enormail-webform c-enormail-webform--885a79e0e2f21736d148ee23222f308d w-full">
                <div className="c-enormail-webform__panelholder">
                  <div className="c-enormail-webform__panelwrapper c-enormail-webform__panelwrapper--default">
                    <div className="c-enormail-webform__panel">
                      <div className="c-enormail-webform__panelbackground"></div>
                      <div className="c-enormail-webform__content">
                        <div className="c-enormail-webform__form">
                          <div className="c-enormail-webform__form__inner">
                            <form name="subscribe" onSubmit={handleSubmit} id="subscribe">
                              <div className="c-enormail-webform__fields">
                                <div className="c-enormail-webform__fields__grid c-enormail-webform__fields__grid--fields">
                                  <div className="c-enormail-webform__fields__grid__cell c-enormail-webform__fields__grid__cell--wide">
                                    <div className="form-group has-feedback">
                                      <label htmlFor="name" className="c-enormail-webform__label">Naam *</label>
                                      <input type="text" name="name" required defaultValue="" className="form-control c-enormail-webform__field" />
                                    </div>
                                  </div>
                                  <div className="c-enormail-webform__fields__grid__cell c-enormail-webform__fields__grid__cell--wide">
                                    <div className="form-group has-feedback">
                                      <label htmlFor="email" className="c-enormail-webform__label">E-mailadres *</label>
                                      <input type="email" name="email" required defaultValue="" className="form-control c-enormail-webform__field" />
                                    </div>
                                  </div>
                                </div>
                                <div className="c-enormail-webform__gdpr">
                                  <div className="c-enormail-webform__gdpr__item c-enormail-webform__gdpr__item--privacy c-enormail-webform__privacyborder">
                                    <div className="c-enormail-webform__privacy">
                                      <p>Ja, ik neem kennis van de <a href="https://enormail.eu/privacy" target="_blank" rel="noopener noreferrer">privacy statement</a> en door het formulier te verzenden ga ik daarmee akkoord</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="c-enormail-webform__fields__grid c-enormail-webform__fields__grid--button">
                                  <div className="c-enormail-webform__fields__grid__cell c-enormail-webform__fields__grid__cell--wide">
                                    <div className="form-group text-center">
                                      <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                                        <input type="text" name="b_885a79e0e2f21736d148ee23222f308d" tabIndex={-1} defaultValue="" />
                                      </div>
                                      <button type="submit" className="btn c-enormail-webform__button c-enormail-webform__button--left c-enormail-webform__button--shadow">
                                        <span className="c-enormail-webform__button__inner">
                                          <span className="c-enormail-webform__button__text" style={{ color: 'rgb(255,255,255)' }}>Aanmelden voor nieuwsbrief</span>
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <p className="text-beige/60 text-xs font-sans mt-8">
            Wij respecteren uw privacy. U kunt zich op elk moment uitschrijven.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
