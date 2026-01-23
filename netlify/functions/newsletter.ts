import type { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';

export const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  // Vérifier que c'est une requête POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const { email } = JSON.parse(event.body || '{}');

    if (!email || !email.includes('@')) {
      return {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: 'Email invalide' }),
      };
    }

    // Option 1: Utiliser SendGrid (recommandé pour production)
    // Décommenter et configurer SENDGRID_API_KEY dans les variables d'environnement Netlify
    /*
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    await sgMail.send({
      to: 'contact@lazaregue-avocats.fr',
      from: process.env.FROM_EMAIL || 'noreply@lazaregue-avocats.fr',
      subject: 'Nouvelle inscription newsletter',
      text: `Nouvelle inscription à la newsletter:\n\nEmail: ${email}\n\nDate: ${new Date().toLocaleString('fr-FR')}`,
      html: `<p>Nouvelle inscription à la newsletter:</p><p><strong>Email:</strong> ${email}</p><p><strong>Date:</strong> ${new Date().toLocaleString('fr-FR')}</p>`,
    });
    */

    // Option 2: Utiliser un webhook (ex: Zapier, Make, IFTTT)
    if (process.env.WEBHOOK_URL) {
      await fetch(process.env.WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email, 
          source: 'newsletter',
          date: new Date().toISOString(),
        }),
      });
    }

    // Option 3: Utiliser EmailJS (nécessite configuration côté client)
    // Cette option est gérée directement dans le composant React

    // Pour l'instant, on log l'inscription (visible dans les logs Netlify)
    console.log('Nouvelle inscription newsletter:', email);
    
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        success: true, 
        message: 'Inscription réussie',
        email: email,
      }),
    };
  } catch (error) {
    console.error('Erreur newsletter:', error);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Erreur serveur' }),
    };
  }
};
