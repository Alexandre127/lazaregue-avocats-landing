const newsArticles = [
  {
    type: 'Analyse',
    icon: (
      <svg className="w-20 h-20 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Intelligence Artificielle Générative",
    subtitle: "Vers un nouveau cadre de responsabilité algorithmique",
    excerpt: "Analyse approfondie des enjeux juridiques liés à l'émergence de l'IA générative et des nouveaux cadres de responsabilité...",
  },
  {
    type: 'Tribune',
    icon: (
      <svg className="w-20 h-20 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
    title: "Souveraineté numérique et protection des données stratégiques",
    subtitle: "Enjeux 2026",
    excerpt: "Face aux défis géopolitiques actuels, la protection des données stratégiques devient un impératif de souveraineté nationale...",
  },
  {
    type: 'Jurisprudence',
    icon: (
      <svg className="w-20 h-20 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    title: "Cyber-extorsion",
    subtitle: "Analyse d'une victoire judiciaire majeure",
    excerpt: "Retour sur une affaire emblématique de fraude informatique et les enseignements juridiques de cette décision de justice...",
  },
];

export function News() {
  return (
    <section id="publications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          className="text-4xl md:text-5xl text-center mb-4 tracking-wide"
          style={{ fontFamily: 'var(--font-bebas)' }}
        >
          L'ACTUALITÉ DU DROIT NUMÉRIQUE
        </h2>
        
        <p 
          className="text-center text-gray-600 mb-16 max-w-2xl mx-auto"
          style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 300 }}
        >
          Intelligence & Publications
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsArticles.map((article, index) => (
            <article 
              key={index} 
              className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="bg-primary/5 p-8 flex items-center justify-center h-48">
                {article.icon}
              </div>
              
              <div className="p-6">
                <div 
                  className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded mb-4"
                  style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700 }}
                >
                  {article.type}
                </div>
                
                <h3 
                  className="mb-2"
                  style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700 }}
                >
                  {article.title}
                </h3>

                <p 
                  className="text-sm text-gray-600 mb-4"
                  style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 600 }}
                >
                  {article.subtitle}
                </p>
                
                <p 
                  className="text-sm text-gray-600 mb-4 leading-relaxed"
                  style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 300 }}
                >
                  {article.excerpt}
                </p>
                
                <button 
                  className="text-primary hover:underline"
                  style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700 }}
                >
                  Lire la suite →
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            className="px-8 py-3 border-2 border-primary text-primary rounded hover:bg-primary hover:text-white transition-colors"
            style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700 }}
          >
            Voir toutes les publications
          </button>
        </div>
      </div>
    </section>
  );
}
