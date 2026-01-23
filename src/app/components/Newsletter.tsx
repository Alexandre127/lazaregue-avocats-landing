import React, { useState } from 'react';

export function Newsletter() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const emailInput = form.elements.namedItem('email') as HTMLInputElement;
    const email = emailInput.value.trim();
    
    if (!email) return;
    
    setIsSubmitting(true);
    setMessage(null);
    
    try {
      // Envoi via fonction Netlify
      const response = await fetch('/.netlify/functions/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage({ type: 'success', text: 'Merci de votre inscription ! Vous recevrez bientôt nos actualités à contact@lazaregue-avocats.fr.' });
        form.reset();
      } else {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Erreur lors de l\'inscription');
      }
    } catch (error) {
      // Fallback: envoi par mailto si la fonction Netlify n'est pas disponible
      try {
        const subject = encodeURIComponent('Nouvelle inscription newsletter');
        const body = encodeURIComponent(`Nouvelle inscription à la newsletter:\n\nEmail: ${email}\n\nDate: ${new Date().toLocaleString('fr-FR')}`);
        const mailtoLink = `mailto:contact@lazaregue-avocats.fr?subject=${subject}&body=${body}`;
        
        // Ouvrir le client email par défaut
        window.location.href = mailtoLink;
        
        setMessage({ type: 'success', text: 'Merci de votre inscription ! Votre email a été envoyé.' });
        form.reset();
      } catch (fallbackError) {
        setMessage({ type: 'error', text: 'Une erreur est survenue. Veuillez réessayer plus tard ou nous contacter directement.' });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="newsletter" className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary text-white p-6 sm:p-8 md:p-12 rounded-lg text-center">
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 tracking-wide"
            style={{ fontFamily: 'var(--font-bebas)' }}
          >
            NEWSLETTER
          </h2>
          
          <p 
            className="mb-6 sm:mb-8 text-white/90 text-sm sm:text-base px-2"
            style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 300 }}
          >
            Abonnez-vous pour recevoir nos analyses juridiques et actualités du numérique
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
            <input
              type="email"
              name="email"
              placeholder="Votre adresse email"
              required
              disabled={isSubmitting}
              className="flex-1 px-4 py-2 rounded border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50 disabled:opacity-50 text-sm sm:text-base"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            />
            <button 
              type="submit"
              disabled={isSubmitting}
              className="px-4 sm:px-6 py-2 bg-white text-primary rounded hover:bg-gray-100 transition-colors whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
              style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700 }}
            >
              {isSubmitting ? 'Inscription...' : "S'inscrire"}
            </button>
          </form>
          
          {message && (
            <div 
              className={`mt-4 p-3 rounded text-sm ${
                message.type === 'success' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              {message.text}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}