# ADEF, Consulting — Site vitrine (Next.js)

Site vitrine du cabinet **ADEF, Consulting** (Afrique · Développement · Éducation · Formation), Dakar.
Construit avec **Next.js 14** (App Router) et React 18, sans dépendance UI externe — CSS maison.

## Démarrer en local

Prérequis : **Node.js 18.17+**

```bash
npm install
npm run dev
```

Le site est servi sur http://localhost:3000

## Scripts

| Commande        | Rôle                                   |
| --------------- | -------------------------------------- |
| `npm run dev`   | Serveur de développement (hot reload)  |
| `npm run build` | Build de production                    |
| `npm run start` | Sert le build de production            |

## Structure

```
app/
  layout.js        Layout racine + polices (next/font : Spectral, Archivo)
  page.js          Page d'accueil (assemble toutes les sections)
  globals.css      Tout le style (variables de couleurs dérivées du logo)
components/
  Header.js        En-tête sticky + navigation + menu mobile (client)
  ContactForm.js   Formulaire de contact (client, validation simple)
  Reveal.js        Animation d'apparition au scroll (client)
lib/
  data.js          Tout le contenu du site (sections, références, équipe…)
public/
  logo.png         Logo ADEF (carte d'Afrique)
```

## Personnalisation

- **Couleurs** : variables CSS en haut de `app/globals.css` (`--red`, `--ink`, etc.), dérivées du rouge brique du logo.
- **Contenu** : tout est centralisé dans `lib/data.js` — modifier les textes, références, membres d'équipe sans toucher au JSX.
- **Images** : les blocs `.ph` (placeholders rayés) marquent les emplacements photo à remplacer. Déposer les images dans `public/` et remplacer le `<div className="ph">` par un `<Image>`.

## Formulaire de contact

Le formulaire est une **démo front-end** (aucun envoi réel). Pour le brancher : créer une route API
`app/api/contact/route.js` et y poster les données depuis `components/ContactForm.js`.

---

© ADEF, Consulting — RC : SN-DKR-2005-C-2907 · NINEA : 44177802R6
