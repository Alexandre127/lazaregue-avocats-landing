export function About() {
  return (
    <section id="cabinet" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          className="text-4xl md:text-5xl text-center mb-8 tracking-wide"
          style={{ fontFamily: 'var(--font-bebas)' }}
        >
          LE CABINET
        </h2>
        
        <div className="space-y-6 text-center">
          <p 
            className="text-lg text-gray-700 leading-relaxed"
            style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 300 }}
          >
            <strong style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700 }}>
              LAZARÈGUE AVOCATS
            </strong> s'impose comme un cabinet d'affaires de référence, 
            exclusivement dédié à l'architecture juridique du monde numérique. 
            Établie au Barreau de Paris, l'institution déploie une expertise de haute technicité 
            pour répondre aux défis complexes des technologies de rupture.
          </p>
          
          <p 
            className="text-lg text-gray-700 leading-relaxed"
            style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 300 }}
          >
            Notre approche repose sur une synergie unique entre l'excellence du droit et une 
            maîtrise approfondie des écosystèmes technologiques contemporains. Nous intervenons 
            aux côtés des organisations de premier plan et de leurs dirigeants pour assurer 
            la pérennité de leurs actifs immatériels et la maîtrise de leurs risques numériques.
          </p>
        </div>
      </div>
    </section>
  );
}