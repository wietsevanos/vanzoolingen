import { useState, useEffect } from 'react';
import nix18Logo from '@/assets/nix18-logo.png';

const AgeVerification = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const isVerified = localStorage.getItem('ageVerified');
    if (!isVerified) {
      setShowModal(true);
      // Prevent scrolling when modal is open
      document.body.style.overflow = 'hidden';
    }
  }, []);

  const handleVerify = (isAdult: boolean) => {
    if (isAdult) {
      localStorage.setItem('ageVerified', 'true');
      setShowModal(false);
      document.body.style.overflow = 'unset';
    } else {
      // Redirect to a safe page or show message
      window.location.href = 'https://www.google.com';
    }
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-anthracite/95 backdrop-blur-sm">
      <div className="bg-offwhite p-8 md:p-12 max-w-md mx-4 text-center shadow-2xl">
        {/* NIX18 Logo */}
        <img 
          src={nix18Logo} 
          alt="NIX18" 
          className="h-16 md:h-20 w-auto mx-auto mb-8"
        />

        {/* Question */}
        <h2 className="font-serif text-2xl md:text-3xl text-anthracite mb-4">
          Ben je 18 jaar of ouder?
        </h2>
        
        <p className="text-anthracite-light text-sm mb-8 font-sans">
          Deze website bevat informatie over alcoholische dranken. 
          Om verder te gaan moet je bevestigen dat je 18 jaar of ouder bent.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => handleVerify(true)}
            className="px-10 py-3 bg-bordeaux text-offwhite font-sans font-medium tracking-wide hover:bg-bordeaux-dark transition-colors"
          >
            Ja, ik ben 18+
          </button>
          <button
            onClick={() => handleVerify(false)}
            className="px-10 py-3 border border-anthracite/30 text-anthracite font-sans font-medium tracking-wide hover:bg-anthracite hover:text-offwhite transition-colors"
          >
            Nee
          </button>
        </div>

        {/* Legal text */}
        <p className="text-anthracite-light/60 text-xs mt-8 font-sans">
          Door op "Ja" te klikken bevestig je dat je 18 jaar of ouder bent.
        </p>
      </div>
    </div>
  );
};

export default AgeVerification;
