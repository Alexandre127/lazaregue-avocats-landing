export function Hero() {
  return (
    <section id="accueil" className="bg-white py-12 sm:py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl mb-4 sm:mb-6 tracking-wide leading-tight"
          style={{ fontFamily: 'var(--font-bebas)' }}
        >
          L'ARCHITECTE JURIDIQUE DE VOTRE SOUVERAINETÉ NUMÉRIQUE
        </h1>
        
        <p 
          className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-6 sm:mb-8 text-gray-700 px-2"
          style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 300 }}
        >
          Au carrefour de l'innovation et de la haute expertise, le cabinet Lazarègue Avocats déploie des stratégies de protection globales pour sécuriser vos actifs les plus critiques.
        </p>

        {/* Trois Piliers */}
        <div className="mb-8 sm:mb-12 px-2">
          <p 
            className="text-xl sm:text-2xl md:text-3xl tracking-wider text-primary break-words"
            style={{ fontFamily: 'var(--font-bebas)' }}
          >
            INNOVATION — EXPERTISE — PROTECTION
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#expertises"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded hover:bg-primary/90 transition-colors"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            Découvrir nos expertises
          </a>
        </div>
      </div>
    </section>
  );
}
