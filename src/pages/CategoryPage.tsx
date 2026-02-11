import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getCategoryBySlug } from '@/data/categoryData';
import NotFound from './NotFound';

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = getCategoryBySlug(slug || '');

  if (!category) return <NotFound />;

  return (
    <div className="min-h-screen bg-offwhite">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative h-[60vh] min-h-[400px] mt-20">
          <img
            src={category.heroImage}
            alt={category.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-anthracite/60" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-offwhite font-medium mb-4 drop-shadow-lg">
              {category.heroTitle}
            </h1>
          </div>
        </section>

        {/* Back link */}
        <div className="container mx-auto px-6 lg:px-12 pt-8">
          <Link
            to="/#assortiment"
            className="inline-flex items-center gap-2 text-anthracite-light hover:text-bordeaux transition-colors text-sm font-sans tracking-wide"
          >
            <ArrowLeft size={16} />
            <span>Terug naar assortiment</span>
          </Link>
        </div>

        {/* Intro */}
        <section className="container mx-auto px-6 lg:px-12 py-16 lg:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-olive text-xs font-sans tracking-[0.2em] uppercase mb-4">
              Onze Collectie
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-anthracite font-medium mb-8">
              {category.title}
            </h2>
            <p className="text-anthracite/80 font-sans text-base md:text-lg leading-relaxed">
              {category.intro}
            </p>
          </div>
        </section>

        {/* Brands */}
        <section className="bg-beige py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-12">
              <p className="text-olive text-xs font-sans tracking-[0.2em] uppercase mb-3">
                Geselecteerde Merken
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-anthracite font-medium">
                Onze Partners
              </h2>
            </div>
            <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
              {category.brands.map((brand) => (
                <div
                  key={brand.name}
                  className="bg-offwhite border border-border p-6 md:p-8 flex items-center justify-center text-center hover:border-bordeaux hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default group"
                >
                  <span className="font-serif text-sm md:text-base text-anthracite group-hover:text-bordeaux transition-colors duration-300">
                    {brand.name}
                  </span>
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
              href="/#locatie"
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
