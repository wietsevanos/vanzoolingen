import { useParams, Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft, MapPin } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getCategoryBySlug } from '@/data/categoryData';
import NotFound from './NotFound';

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const category = getCategoryBySlug(slug || '');

  const goToHomeSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 200);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (!category) return <NotFound />;

  return (
    <div className="min-h-screen bg-offwhite">
      <Header />

      {/* Floating back button */}
      <a
        href="#assortiment"
        onClick={goToHomeSection('assortiment')}
        className="fixed bottom-8 right-8 z-40 flex items-center gap-2 px-5 py-3 bg-bordeaux text-primary-foreground font-sans text-sm font-medium tracking-wide shadow-lg hover:bg-bordeaux-dark hover:shadow-xl transition-all duration-300 group"
        aria-label="Terug naar assortiment"
      >
        <ArrowLeft size={16} strokeWidth={2} className="group-hover:-translate-x-1 transition-transform" />
        <span>Terug</span>
      </a>

      <main>
        {/* Hero */}
        <section className="relative mt-20">
          <img
            src={category.heroImage}
            alt={category.title}
            className="w-full h-auto object-contain"
          />
          <div className="absolute inset-0 bg-anthracite/60" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-offwhite font-medium mb-4 drop-shadow-lg">
              {category.heroTitle}
            </h1>
          </div>
        </section>

        {/* Intro */}
        <section className="container mx-auto px-6 lg:px-12 py-16 lg:py-20">
          <div className="max-w-3xl mx-auto text-left">
            <p className="text-olive text-xs font-sans tracking-[0.2em] uppercase mb-4">
              Onze Collectie
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-anthracite font-medium mb-8">
              {category.title}
            </h2>
            <div className="space-y-5 text-anthracite/80 font-sans text-base md:text-lg leading-relaxed text-left">
              {category.intro.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Brands */}
        <section className="bg-beige py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-12">
              <p className="text-olive text-xs font-sans tracking-[0.2em] uppercase mb-3">
                {category.brandsSupertitle}
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-anthracite font-medium">
                {category.brandsTitle}
              </h2>
            </div>
            <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
              {category.brands.map((brand) => (
                <div
                  key={brand.name}
                  className="bg-offwhite border border-border p-6 md:p-8 flex items-center justify-center text-center hover:border-bordeaux hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default group min-h-[120px] md:min-h-[140px]"
                >
                  {brand.logo ? (
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="max-h-16 md:max-h-20 w-auto object-contain transition-all duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <span className="font-serif text-sm md:text-base text-anthracite group-hover:text-bordeaux transition-colors duration-300">
                      {brand.name}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28 bg-offwhite">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-anthracite font-medium mb-4">
              Benieuwd naar ons aanbod?
            </h2>
            <p className="text-anthracite/70 font-sans text-base max-w-xl mx-auto mb-8 leading-relaxed">
              Kom gerust langs in onze winkel in Overveen voor persoonlijk advies en om ons volledige assortiment te ontdekken.
            </p>
            <a
              href="#locatie"
              onClick={goToHomeSection('locatie')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-bordeaux text-primary-foreground font-sans text-sm font-medium tracking-wide uppercase hover:bg-bordeaux-dark hover:shadow-lg transition-all duration-300 group"
            >
              <MapPin size={16} />
              <span>Kom langs in onze winkel</span>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;
