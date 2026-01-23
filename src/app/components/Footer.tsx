export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Logo et description */}
          <div className="md:col-span-1">
            <div className="flex flex-col mb-4">
              <div className="text-2xl tracking-wider" style={{ fontFamily: 'var(--font-bebas)' }}>
                LAZARÈGUE
              </div>
              <div className="text-sm tracking-widest" style={{ fontFamily: 'var(--font-bebas)' }}>
                AVOCATS
              </div>
            </div>
            <p 
              className="text-sm text-gray-400 mb-2"
              style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 300 }}
            >
              Avocat au barreau de Paris
            </p>
            <p 
              className="text-sm text-gray-400"
              style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 300 }}
            >
              Cabinet d'avocats spécialisé en droit du numérique
            </p>
          </div>

          {/* Navigation Rapide */}
          <div>
            <h3 
              className="mb-4"
              style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700 }}
            >
              Navigation Rapide
            </h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#expertises"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                  style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 300 }}
                >
                  Expertises
                </a>
              </li>
              <li>
                <a 
                  href="#cabinet"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                  style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 300 }}
                >
                  Le Cabinet
                </a>
              </li>
              <li>
                <a 
                  href="#references"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                  style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 300 }}
                >
                  Références
                </a>
              </li>
              <li>
                <a 
                  href="#publications"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                  style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 300 }}
                >
                  Publications
                </a>
              </li>
              <li>
                <a 
                  href="#newsletter"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                  style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 300 }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Expertises */}
          <div>
            <h3 
              className="mb-4"
              style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700 }}
            >
              Expertises
            </h3>
            <ul className="space-y-2">
              {['RGPD & Conformité', 'Cyber-Résilience', 'Propriété Intellectuelle', 'E-commerce'].map((item) => (
                <li key={item}>
                  <a 
                    href="#expertises"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                    style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 300 }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 
              className="mb-4"
              style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700 }}
            >
              Coordonnées
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <svg className="w-4 h-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 300 }}>
                  18 rue de Tilsitt<br />75017 Paris
                </span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a 
                  href="tel:0181706200"
                  className="hover:text-white transition-colors"
                  style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 300 }}
                >
                  01.81.70.62.00
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 300 }}>
                  www.lazaregue-avocats.fr
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400">
            <p className="text-center sm:text-left" style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 300 }}>
              © {currentYear} LAZARÈGUE AVOCATS. Tous droits réservés.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
              <a 
                href="#" 
                className="hover:text-white transition-colors text-center sm:text-left"
                style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 300 }}
              >
                Politique de confidentialité
              </a>
              <a 
                href="#" 
                className="hover:text-white transition-colors text-center sm:text-left"
                style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 300 }}
              >
                Mentions Légales
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
