import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Assortment from '@/components/Assortment';
import WhyUs from '@/components/WhyUs';
import Newsletter from '@/components/Newsletter';
import Location from '@/components/Location';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AgeVerification from '@/components/AgeVerification';

const Index = () => {
  return (
    <div className="min-h-screen bg-offwhite">
      <AgeVerification />
      <Header />
      <main>
        <Hero />
        <About />
        <Assortment />
        <WhyUs />
        <Newsletter />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
