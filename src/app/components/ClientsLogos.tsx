const references = [
  {
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Souveraineté Numérique",
    description: "Accompagnement d'un leader de l'infrastructure numérique dans la sécurisation de sa gouvernance de données européennes.",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Contentieux Stratégique PI",
    description: "Défense d'un groupe de presse international dans un litige majeur relatif aux droits voisins et aux algorithmes.",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    title: "Gouvernance Data",
    description: "Audit et sécurisation des flux de données transfrontaliers pour une institution financière globale.",
  },
];

export function ClientsLogos() {
  return (
    <section id="references" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          className="text-4xl md:text-5xl text-center mb-4 tracking-wide"
          style={{ fontFamily: 'var(--font-bebas)' }}
        >
          ENJEUX COMPLEXES & SOLUTIONS JURIDIQUES
        </h2>

        <p 
          className="text-center text-gray-600 mb-16 max-w-2xl mx-auto"
          style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 300 }}
        >
          Références & Impact
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {references.map((ref, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-8 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                {ref.icon}
              </div>
              
              <h3 
                className="text-center mb-4"
                style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700 }}
              >
                Cas n°{index + 1} | {ref.title}
              </h3>
              
              <p 
                className="text-sm text-gray-600 leading-relaxed text-center"
                style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 300 }}
              >
                {ref.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
