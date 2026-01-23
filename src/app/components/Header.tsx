import logo from '@/assets/logo.png';

export function Header() {
  const navItems = [
    { name: 'Expertises Stratégiques', href: '#expertises' },
    { name: 'Le Cabinet', href: '#cabinet' },
    { name: 'Références & Jurisprudences', href: '#references' },
    { name: 'Intelligence & Publications', href: '#publications' },
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 text-sm">
            <div className="flex items-center gap-6">
              <a 
                href="tel:0181706200" 
                className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors"
                style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 300 }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>01.81.70.62.00</span>
              </a>
              <a 
                href="mailto:contact@lazaregue-avocats.fr" 
                className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors"
                style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 300 }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>contact@lazaregue-avocats.fr</span>
              </a>
            </div>
            <div className="flex items-center gap-4">
              <button 
                className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors"
                style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 300 }}
                aria-label="Rechercher"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="hidden sm:inline">Rechercher</span>
              </button>
              <span 
                className="text-gray-700"
                style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700 }}
              >
                FR
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#accueil" className="flex items-center">
              <img 
                src={logo} 
                alt="Lazarègue Avocats" 
                className="h-10 sm:h-12 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm hover:text-primary transition-colors"
                style={{ fontFamily: 'var(--font-montserrat)' }}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#newsletter"
              className="px-6 py-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors whitespace-nowrap"
              style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700 }}
            >
              Consultation Prioritaire
            </a>
          </nav>

          {/* Mobile Menu Toggle - Using details/summary for pure CSS solution */}
          <details className="lg:hidden relative">
            <summary className="list-none cursor-pointer p-2" aria-label="Toggle menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </summary>
            
            {/* Mobile Navigation */}
            <nav className="absolute right-0 top-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg py-4 px-6 min-w-[250px] space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-sm hover:text-primary transition-colors"
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#newsletter"
                className="block w-full px-6 py-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors text-center"
                style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700 }}
              >
                Consultation Prioritaire
              </a>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
