# Lazarègue Avocats - Landing Page

Landing page moderne pour le cabinet d'avocats Lazarègue Avocats, spécialisé en droit numérique, IA Act, cybersécurité et conformité.

## 🎨 Charte Graphique

Le site respecte la charte graphique officielle :
- **Couleur principale** : Pantone Reflex Blue C (#001489)
- **Typographie principale** : Bebas Neue (Bold et Thin)
- **Typographie secondaire** : Montserrat (Bold et Light)
- **Logo** : Logo officiel Lazarègue Avocats

## 🚀 Technologies

- **React 18** avec TypeScript
- **Vite** pour le build et le développement
- **Tailwind CSS** pour le styling
- **Motion** pour les animations
- **Radix UI** pour les composants accessibles
- **Netlify Functions** pour la newsletter

## 📦 Installation

```bash
npm install
```

## 🛠️ Développement

```bash
npm run dev
```

Le serveur de développement sera accessible sur `http://localhost:3000`

## 🏗️ Build de production

```bash
npm run build
```

Le build sera généré dans le dossier `dist/`

## 👀 Prévisualisation du build

```bash
npm run preview
```

Permet de prévisualiser le build de production localement.

## 🌐 Déploiement sur Netlify

### Option 1 : Déploiement automatique via Git

1. Poussez votre code sur GitHub/GitLab/Bitbucket
2. Connectez votre repository à Netlify
3. Configurez les paramètres de build :
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Netlify détectera automatiquement le fichier `netlify.toml`

### Option 2 : Déploiement manuel

1. Build le projet : `npm run build`
2. Glissez-déposez le dossier `dist/` sur [Netlify Drop](https://app.netlify.com/drop)

### Configuration Newsletter

Pour que la newsletter fonctionne et envoie les emails à `contact@lazaregue-avocats.fr`, vous avez plusieurs options :

#### Option 1 : SendGrid (Recommandé)
1. Créez un compte sur [SendGrid](https://sendgrid.com)
2. Générez une clé API
3. Dans Netlify, allez dans **Site settings > Environment variables**
4. Ajoutez :
   - `SENDGRID_API_KEY` : votre clé API SendGrid
   - `FROM_EMAIL` : noreply@lazaregue-avocats.fr (ou votre email vérifié)
5. Décommentez le code SendGrid dans `netlify/functions/newsletter.ts`

#### Option 2 : Webhook (Zapier, Make, etc.)
1. Créez un webhook sur Zapier ou Make
2. Dans Netlify, ajoutez la variable d'environnement :
   - `WEBHOOK_URL` : l'URL de votre webhook
3. Le webhook recevra les inscriptions et pourra envoyer un email

#### Option 3 : Fallback mailto
Si aucune des options ci-dessus n'est configurée, le formulaire utilisera un lien `mailto:` qui ouvrira le client email par défaut.

## 📁 Structure du projet

```
├── src/
│   ├── app/
│   │   ├── components/     # Composants React
│   │   │   ├── Header.tsx  # Header avec logo et navigation
│   │   │   ├── Newsletter.tsx # Formulaire newsletter
│   │   │   └── ...
│   │   └── App.tsx         # Composant principal
│   ├── assets/
│   │   └── logo.png        # Logo officiel
│   ├── styles/             # Styles globaux
│   └── main.tsx            # Point d'entrée
├── netlify/
│   └── functions/
│       └── newsletter.ts   # Fonction Netlify pour la newsletter
├── index.html              # Template HTML
├── vite.config.ts          # Configuration Vite
├── netlify.toml            # Configuration Netlify
└── package.json            # Dépendances
```

## ✨ Fonctionnalités

- 🎨 Design moderne et responsive respectant la charte graphique
- ⚡ Performance optimisée
- 🔒 Headers de sécurité configurés
- 📱 Mobile-first
- ♿ Accessibilité (ARIA, navigation clavier)
- 🎭 Animations fluides
- 📧 Newsletter fonctionnelle avec envoi d'emails

## 📝 Notes

- Les `console.log` sont automatiquement supprimés en production
- Le code est minifié et optimisé pour la production
- Les assets sont mis en cache pour améliorer les performances
- Le logo est importé depuis `src/assets/logo.png`
- L'email de contact `contact@lazaregue-avocats.fr` est affiché dans le header

## 🔧 Configuration

### Variables d'environnement

Créez un fichier `.env.local` (pour le développement) ou configurez-les dans Netlify :

```env
# SendGrid (optionnel)
SENDGRID_API_KEY=your_api_key_here
FROM_EMAIL=noreply@lazaregue-avocats.fr

# Webhook (optionnel)
WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/your_webhook_id
```

## 📞 Contact

- **Téléphone** : 01.81.70.62.00
- **Email** : contact@lazaregue-avocats.fr
