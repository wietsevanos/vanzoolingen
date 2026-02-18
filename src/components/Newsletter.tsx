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

          <div className="flex justify-center items-center">
            <div className="c-enormail-webform c-enormail-webform--885a79e0e2f21736d148ee23222f308d w-full">
              <div className="c-enormail-webform__panelholder">
                <div className="c-enormail-webform__panelwrapper c-enormail-webform__panelwrapper--default">
                  <div className="c-enormail-webform__panel">
                    <div className="c-enormail-webform__panelbackground"></div>
                    <div className="c-enormail-webform__content">
                      <div className="c-enormail-webform__optin--default c-enormail-webform__panel__row">
                        <div className="col-sm-12">
                          <div className="c-enormail-webform__text"></div>
                        </div>
                      </div>
                      <div className="c-enormail-webform__optin--success c-enormail-webform__panel__row" style={{ display: 'none' }}>
                        <div className="col-sm-12">
                          <div className="c-enormail-webform__text">
                            <div className="c-enormail-webform__thankyouheading"><p>Proost, je bent erbij!</p></div>
                            <div className="c-enormail-webform__thankyouparagraph">
                              <p>Leuk dat je je hebt aangemeld voor onze nieuwsbrief.<br />Je ontvangt voortaan als eerste onze acties,<br />aanbiedingen en nieuwtjes.<br /><br />Tot snel in de winkel,<br />Team van Zoolingen</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="c-enormail-webform__form">
                        <div className="c-enormail-webform__form__inner">
                          <form name="subscribe" action="https://app.enormail.eu/subscribe/885a79e0e2f21736d148ee23222f308d" method="post" id="subscribe">
                            <div className="c-enormail-webform__fields">
                              <div className="c-enormail-webform__fields__grid c-enormail-webform__fields__grid--fields">
                                <div className="c-enormail-webform__fields__grid__cell c-enormail-webform__fields__grid__cell--wide">
                                  <div className="form-group has-feedback">
                                    <label htmlFor="name" className="c-enormail-webform__label">Naam *</label>
                                    <input type="text" name="name" defaultValue="" className="form-control c-enormail-webform__field" />
                                  </div>
                                </div>
                                <div className="c-enormail-webform__fields__grid__cell c-enormail-webform__fields__grid__cell--wide">
                                  <div className="form-group has-feedback">
                                    <label htmlFor="email" className="c-enormail-webform__label">E-mailadres *</label>
                                    <input type="email" name="email" defaultValue="" className="form-control c-enormail-webform__field" />
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
                                        <span className="c-enormail-webform__button__loader" style={{ display: 'none', height: '22px', color: 'rgb(255,255,255)' }}>
                                          <svg version="1.1" id="L4" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 40" enableBackground="new 0 0 0 0" xmlSpace="preserve">
                                            <circle fill="rgb(255,255,255)" stroke="none" cx="30" cy="20" r="6" />
                                            <circle fill="rgb(255,255,255)" stroke="none" cx="50" cy="20" r="6" />
                                            <circle fill="rgb(255,255,255)" stroke="none" cx="70" cy="20" r="6" />
                                          </svg>
                                        </span>
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

          <p className="text-beige/60 text-xs font-sans mt-8">
            Wij respecteren uw privacy. U kunt zich op elk moment uitschrijven.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
