export function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-12 md:p-16 rounded-lg shadow-sm">
          <svg className="w-16 h-16 text-primary/20 mb-6 mx-auto" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          
          <blockquote 
            className="text-xl md:text-2xl text-center text-gray-800 mb-8 leading-relaxed italic"
            style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 300 }}
          >
            « L'approche structurée du cabinet et sa compréhension fine des enjeux technologiques ont été déterminantes pour la sécurisation de nos opérations à l'échelle internationale. »
          </blockquote>
          
          <div className="text-center">
            <p 
              className="text-gray-700"
              style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700 }}
            >
              Directeur Juridique
            </p>
            <p 
              className="text-sm text-gray-600 mt-1"
              style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 300 }}
            >
              Groupe CAC 40
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
