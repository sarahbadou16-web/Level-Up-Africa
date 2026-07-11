# Level Up Africa — Quiz Culture Tech & Innovation Africaine

> Réponds bien, réponds vite, et deviens le/la Future Elon Musk africain·e.

## Description

Ce projet est un quiz interactif consacré aux startups, inventeurs et success stories de la tech africaine (fintech, IA, mobile money, jeunes entrepreneurs du continent). C'est un projet individuel de vacances (fin de Licence 1, IFRI), pensé pour consolider les fondamentaux HTML/CSS/JS avant de passer à un framework — et pour constituer une première pièce de portfolio.

Le problème que le projet résout est pédagogique : ancrer la manipulation du DOM, des événements et des tableaux d'objets JS à travers un cas concret, motivant et culturellement pertinent, plutôt qu'un exercice abstrait. La solution est un quiz à 20 questions, chronométré, avec un système de score en temps réel et un indicateur de progression original : un **rang qui évolue en direct** selon le taux de bonnes réponses (de « Recrue Curieuse » à « Future Elon Musk Africain·e »).

## Fonctionnalités

- [x] Affichage dynamique des questions depuis un tableau d'objets JS
- [x] Système de score en temps réel
- [x] Feedback immédiat bonne/mauvaise réponse (mise en surbrillance de la bonne réponse)
- [x] Timer de 15 secondes par question, avec alerte visuelle en fin de compte à rebours
- [x] Barre de progression (question X / 20)
- [x] Indicateur de rang à 5 niveaux, mis à jour en direct pendant le quiz
- [x] Écran de résultats final avec message personnalisé selon le score
- [x] Design responsive (mobile et desktop)
- [ ] Déploiement sur GitHub Pages *(à faire après le premier push — voir plus bas)*

## Stack technique

| Couche | Techno |
|---|---|
| Structure | HTML5 |
| Style | CSS3 (vanilla, variables CSS) |
| Logique | JavaScript vanilla (aucun framework, aucune librairie externe pour la logique du quiz) |
| Données | Tableau d'objets JS (`data/questions.js`) |
| Typographie | Sora (titres), Inter (texte), JetBrains Mono (score / timer) — via Google Fonts |
| Hébergement | GitHub Pages |

## Installation & lancement

Aucune dépendance à installer — le projet est en HTML/CSS/JS pur.

```bash
git clone https://github.com/sarahbadou16-web/Level-Up-Africa.git
cd Level-Up-Africa
```

Puis ouvre `index.html` dans ton navigateur, ou lance un serveur local (recommandé pour éviter les restrictions CORS de certains navigateurs) :

```bash
# avec l'extension Live Server de VS Code : clic droit sur index.html → "Open with Live Server"
# ou avec Python
python -m http.server 8000
```

## Structure du projet

```
level-up-africa-quiz/
├── index.html              → structure des 3 écrans (accueil, quiz, résultats)
├── style.css                → design system (couleurs, typographie, layout, responsive)
├── script.js                → logique du quiz (state machine, timer, score, rang)
├── data/
│   └── questions.js          → banque de questions (3 thèmes × 20 questions)
├── assets/
│   ├── images/                → réservé aux visuels additionnels
│   └── fonts/                 → réservé aux polices auto-hébergées
└── README.md
```

Le thème actif du quiz se change en modifiant une seule constante dans `data/questions.js` :

```js
const ACTIVE_THEME = "levelUpAfrica"; // ou "naijaBeninTrivia" / "devTrivia"
```

## Roadmap (évolutions possibles)

- Sélecteur de thème directement dans l'interface (actuellement le thème actif se change en une ligne de code)
- Leaderboard multi-joueurs partagé
- Backend + comptes utilisateurs pour sauvegarder la progression
- Extension du pack de questions au-delà de 20 par thème
- Mode difficulté (temps par question ajustable)

## Auteur

Projet réalisé par Sarah — étudiante en Licence 1 à l'IFRI (Institut de Formation et de Recherche en Informatique), Université d'Abomey-Calavi, Bénin.

Encadrant : Duvalier (Drakenarl) — Projet vacances L1, juillet 2026.
