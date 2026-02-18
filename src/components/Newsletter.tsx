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

          <div className="c-enormail-webform c-enormail-webform--885a79e0e2f21736d148ee23222f308d">
            <div className="c-enormail-webform__panelholder">
              <div className="c-enormail-webform__panelwrapper c-enormail-webform__panelwrapper--default">
                <div className="c-enormail-webform__close" style={{ display: 'none' }}>
                  <a href="javascript:;"></a>
                </div>
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
                          <div className="c-enormail-webform__thankyouheading">
                            <p>Proost, je bent erbij!</p>
                          </div>
                          <div className="c-enormail-webform__thankyouparagraph">
                            <p>
                              Leuk dat je je hebt aangemeld voor onze nieuwsbrief.<br />
                              Je ontvangt voortaan als eerste onze acties,<br />
                              aanbiedingen en nieuwtjes.<br />
                              <br />
                              Tot snel in de winkel,<br />
                              Team van Zoolingen
                            </p>
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
                        <div className="c-enormail-webform__brand">
                          <a href="https://enormail.eu?utm_source=&utm_medium=referral&utm_campaign=subscribe-form" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="465.4" height="76" viewBox="0 0 465.4 76" fill="#fff">
                              <path d="M42.5.1h12.2c4.4 0 8.8-.2 13.2.1C73.8.4 79.7 2 85 4.7L34.8 37.8c-3.1-5.1-6.1-10.1-9.2-15.2-2.1-3.4-4.1-6.8-6.2-10.2l-1.8-3c-.1-.2-.4-.5-.4-.7 0-.5 1.5-1.2 1.9-1.5C26 2.6 34.2.1 42.5.1M23.3 28.9L13 12C5.5 19.2.6 29.2 0 40.2l23.3-11.3z" />
                              <path d="M64.3 61.7H39.5V76H0V46l26.1-12.4 7.1 11.7v-.1.1c2.7-1.8 5.3-3.5 8-5.3.8-.5 1.5-1 2.3-1.5.3-.2.9-.8 1.3-.9.4-.1.5.4.8.7 4.7 5.8 9.3 11.7 14 17.5 1.6 2 3.2 3.9 4.7 5.9zm61.8-13.6c-1.9 3.1-4.9 5-8.4 5.7-2.2.4-4.7.7-6.7-.4-.9-.5-1.9-1.3-2.3-2.2-.5-1.1-.5-2.5-.5-3.7v-4.9c0-9.9-3.6-19.7-10-27.3-1.6-1.9-3.3-3.6-5.2-5.2-.7-.6-1.7-1.7-2.6-2-.6-.2 0-.2-.4-.1-.3.1-.7.5-1 .6-.6.4-1.3.8-1.9 1.3-9.6 6.3-19.2 12.7-28.8 19-2.9 1.9-5.9 3.9-8.8 5.8l21.1 27h-.1V76h37.6v-6.7c11.5 7 26.7 3.7 34.4-7.3 7-10.1 5.7-24.2-3.1-32.9-4.8-4.7-11.3-7.3-18-7.3v12.3h.1c6.1 0 11.6 4.3 13 10.3 1.4 5.9-1.6 12.2-7 14.9-3.5 1.7-7.6 1.9-11.2.3 5.5-1 9.6-5.9 9.8-11.5M86 35.4c-2.5 0-4.5-2.1-4.5-4.5 0-2.5 2.1-4.5 4.5-4.5 2.5 0 4.5 2.1 4.5 4.5s-2.1 4.5-4.5 4.5" />
                              <path d="M359.9 40.9V75h-8c-.7-.1-1.5-.2-2.2-.3l-.3-33.8c-4-2.4-13.7-1.4-13.9-.2v34c-2 .3-4 .5-5.9.5-2 0-3.9-.2-6-.5V33.2c5.2-1.8 10.8-2.7 16.3-2.7 3.7 0 10 .2 14 1.5 7.4-1.8 18.5-2.9 25.9 0 8.2 3.1 7.8 9.1 7.8 16.4V75h-2.9c-.7.1-1.4.1-2.1.1h-2.1c-1.6 0-3.3-.2-4.9-.5l-.3-33.8c-5.4-2-14.7-1.1-15.4.1M241.4 75c-2 .3-4 .5-6 .5s-3.9-.2-6-.5V52c0-2.3-.2-4.2-.5-5.7-.4-1.5-.9-2.7-1.7-3.5-.8-.9-1.7-1.5-2.8-1.8-1.1-.4-2.4-.5-3.9-.5-2.1 0-3.8.2-5.2.6v34c-2 .3-4 .5-5.9.5-2 0-3.9-.2-6-.5V33.2c1.8-.6 4.2-1.2 7.1-1.8 2.9-.6 6-.9 9.2-.9 2.9 0 5.6.2 8.2.7 2.6.4 4.9 1.4 6.9 2.9s3.6 3.6 4.7 6.4c1.2 2.8 1.8 6.5 1.8 11.2V75zm74.2-34.6c-1.8 0-7.5.1-9.3.6v34c-2 .3-4 .5-5.9.5-2 0-3.9-.2-6-.5V33.2c5.5-1.9 15.4-2.8 21.1-2.7v9.9zm119.8-15.7c-.3-1.9-.5-3.8-.5-5.6 0-1.8.2-3.7.5-5.6 1-.2 2-.3 3.1-.4 1.1-.1 2.1-.1 3-.1 1 0 2 0 3.1.1s2.2.2 3.1.4c.2 1 .3 1.9.3 2.8.1.9.1 1.9.1 2.8 0 .9 0 1.8-.1 2.8-.1 1-.2 1.9-.3 2.9-1 .2-2 .3-3.1.3-1.1.1-2.1.1-3.1.1-.9 0-1.9 0-3-.1-1.1-.2-2.2-.3-3.1-.4m-.5 6.7h11.7v43.4c-2 .3-4 .5-5.9.5-1.8 0-3.8-.2-5.8-.5V31.4zm-18.6 23.7c-.7-.1-1.4-.2-2.2-.3-.8-.1-1.5-.1-2.1-.1-2.7 0-4.9.5-6.5 1.5-1.6 1-2.4 2.6-2.4 4.7 0 1.5.3 2.6.9 3.4.6.8 1.4 1.4 2.2 1.7.9.4 1.8.6 2.8.7 1 .1 1.8.1 2.6.1s1.7-.1 2.5-.2 1.6-.3 2.2-.4V55.1zm0-8.7c0-1.3-.2-2.4-.7-3.3-.4-.8-1.1-1.5-1.8-2-.8-.5-1.7-.8-2.9-1-1.2-.2-2.4-.3-3.8-.3-3 0-6.2.6-9.7 1.8-.8-1.5-1.4-2.8-1.8-4.1-.4-1.3-.6-2.8-.6-4.6 2.5-.8 4.9-1.5 7.4-1.8 2.5-.4 4.8-.6 6.9-.6 5.8 0 10.4 1.4 13.7 4.2 3.3 2.8 4.9 7.3 4.9 13.4v25.2c-2 .6-4.3 1.2-7.1 1.8-2.8.6-6 .8-9.5.8-2.9 0-5.5-.3-7.9-.8-2.4-.5-4.4-1.3-6.1-2.5-1.7-1.2-3-2.7-3.9-4.5-.9-1.8-1.4-4.1-1.4-6.8s.6-4.9 1.7-6.8c1.1-1.8 2.6-3.3 4.5-4.4 1.8-1.1 3.8-1.9 6.1-2.4 2.2-.5 4.5-.7 6.7-.7 1.6 0 3.4.1 5.4.3v-.9zM267.9 76c-3.5 0-6.6-.6-9.2-1.7-2.6-1.1-4.8-2.7-6.5-4.8-1.7-2-3-4.4-3.9-7.2-.9-2.7-1.3-5.7-1.3-8.9s.4-6.2 1.3-9 2.2-5.2 3.9-7.3c1.7-2 3.9-3.7 6.5-4.8 2.6-1.2 5.7-1.8 9.2-1.8 3.5 0 6.6.6 9.2 1.8 2.6 1.2 4.8 2.8 6.6 4.8 1.7 2 3 4.5 3.9 7.3.8 2.8 1.3 5.8 1.3 9s-.4 6.2-1.3 8.9c-.8 2.7-2.1 5.1-3.9 7.2-1.7 2-3.9 3.6-6.6 4.8-2.6 1.1-5.7 1.7-9.2 1.7m0-9.1c3.1 0 5.4-1.2 6.8-3.5 1.4-2.3 2.1-5.7 2.1-10 0-4.4-.7-7.7-2.1-10-1.4-2.3-3.6-3.5-6.8-3.5-3.1 0-5.3 1.2-6.7 3.5-1.4 2.3-2.1 5.7-2.1 10 0 4.4.7 7.7 2.1 10 1.4 2.3 3.6 3.5 6.7 3.5zm-98.4-10c.2 3.4 1.4 5.8 3.5 7.3s4.9 2.3 8.4 2.3c1.6 0 3.3-.1 5-.4v9.5c-1.9.2-3.9.4-6 .4-4 0-7.5-.6-10.4-1.7-2.9-1.1-5.2-2.7-7.1-4.7-1.8-2-3.2-4.4-4-7.1-.9-2.7-1.3-5.7-1.3-9 0-3.2.4-6.2 1.3-9s2.2-5.2 4-7.3c1.8-2.1 3.9-3.7 6.6-4.9 2.6-1.2 5.6-1.8 9.1-1.8 3 0 5.7.5 8.1 1.6 2.3 1.1 4.4 2.5 6 4.4 1.7 1.8 2.9 4 3.7 6.6.8 2.5 1.3 5.3 1.3 8.2 0 1.1 0 2.1-.1 3.1s-.2 1.9-.3 2.5h-27.8zm17-8.3c-.1-2.7-.8-4.9-2.2-6.5-1.4-1.7-3.3-2.5-5.8-2.5-2.8 0-4.9.8-6.4 2.4s-2.3 3.8-2.6 6.6h17zm267 26.7c2 .3 4 .5 6 .5 1.9 0 3.9-.2 5.9-.5V13.4c-2-.3-4-.5-5.9-.5-2 0-3.9.2-6 .5v61.9" />
                            </svg>
                          </a>
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
