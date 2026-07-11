/**
 * Level Up Africa — Banque de questions
 * Format : { question, options: [4 choix], answer: "choix exact" }
 * Chaque thème contient 20 questions.
 * Les positions des bonnes réponses sont équilibrées (A/B/C/D) et ne se
 * répètent jamais deux fois de suite entre deux questions consécutives.
 */

const quizThemes = {
  levelUpAfrica: {
    label: "Level Up Africa",
    tagline: "Startups, inventeurs & innovation tech africaine",
    questions: [
      { question: "Quelle startup nigériane de fintech est devenue une licorne en 2019 ?", options: ["OPay", "Paystack", "Flutterwave", "Interswitch"], answer: "Interswitch" },
      { question: "Quel pays africain a lancé le M-Pesa, service pionnier de mobile money ?", options: ["Tanzanie", "Kenya", "Ghana", "Nigeria"], answer: "Kenya" },
      { question: "Quelle application panafricaine facilite le paiement en ligne francophone ?", options: ["MoMo", "Wave", "Orange Money", "Djamo"], answer: "Djamo" },
      { question: "Quel pays africain accueille le siège de Flutterwave ?", options: ["Afrique du Sud", "Nigeria", "Ghana", "Kenya"], answer: "Nigeria" },
      { question: "Quelle application de transfert d'argent mobile est populaire en Afrique de l'Ouest francophone ?", options: ["Zelle", "Venmo", "Wave", "Cash App"], answer: "Wave" },
      { question: "Quel domaine tech connaît la plus forte croissance de startups en Afrique ?", options: ["Healthtech", "Fintech", "Proptech", "Edtech"], answer: "Fintech" },
      { question: "Quelle ville est surnommée le « Silicon Lagoon » ?", options: ["Abidjan", "Accra", "Lagos", "Nairobi"], answer: "Lagos" },
      { question: "Quel incubateur tech panafricain est basé au Kenya ?", options: ["iHub", "MEST", "Impact Hub", "CcHub"], answer: "iHub" },
      { question: "Quelle solution béninoise connecte les producteurs d'ananas aux acheteurs via une application mobile ?", options: ["AgriConnect Bénin", "FarmLink", "e-pineA", "AnanasPay"], answer: "e-pineA" },
      { question: "Quel pays a lancé son propre satellite grâce à des ingénieurs locaux en 2022 ?", options: ["Djibouti", "Sénégal", "Togo", "Bénin"], answer: "Djibouti" },
      { question: "Quelle plateforme e-commerce panafricaine est cotée à la bourse de New York ?", options: ["Konga", "Kilimall", "Takealot", "Jumia"], answer: "Jumia" },
      { question: "Quel secteur combine IA et agriculture pour aider les petits exploitants ouest-africains ?", options: ["AgriTech", "EdTech", "PropTech", "FinTech"], answer: "AgriTech" },
      { question: "Quelle ville ghanéenne est un hub tech montant ?", options: ["Kumasi", "Tamale", "Cape Coast", "Accra"], answer: "Accra" },
      { question: "Quel réseau soutient les startups tech à travers l'Afrique ?", options: ["TechStars", "AfriLabs", "500 Startups", "Y Combinator"], answer: "AfriLabs" },
      { question: "Quelle solution facilite les paiements interbancaires transfrontaliers dans la zone UEMOA ?", options: ["GIM-UEMOA", "PAPSS", "Visa Direct", "SWIFT"], answer: "GIM-UEMOA" },
      { question: "Quelle fintech nigériane, rachetée en partie par Stripe en 2020, a démocratisé les paiements en ligne en Afrique ?", options: ["Flutterwave", "Paystack", "OPay", "Chipper Cash"], answer: "Paystack" },
      { question: "Quelle plateforme panafricaine de data science organise des compétitions IA pour résoudre des défis locaux ?", options: ["Coursera", "DataCamp", "Zindi", "Kaggle"], answer: "Zindi" },
      { question: "Quelle entreprise forme et connecte des développeurs africains à des entreprises tech internationales ?", options: ["ALX", "Moringa School", "Decagon", "Andela"], answer: "Andela" },
      { question: "En 2024, quel pays africain comptait le plus grand nombre de startups valorisées à plus d'un milliard de dollars (licornes) ?", options: ["Afrique du Sud", "Égypte", "Nigeria", "Kenya"], answer: "Nigeria" },
      { question: "Quelle infrastructure panafricaine, lancée en 2022 par Afreximbank, facilite les paiements transfrontaliers dans toute l'Afrique ?", options: ["PAPSS", "SWIFT Africa", "AfCFTA Pay", "GIM-UEMOA"], answer: "PAPSS" }
    ]
  },

  naijaBeninTrivia: {
    label: "Naija/Benin Trivia",
    tagline: "Culture générale de l'Afrique de l'Ouest",
    questions: [
      { question: "Quelle est la capitale politique du Bénin ?", options: ["Porto-Novo", "Abomey", "Cotonou", "Parakou"], answer: "Porto-Novo" },
      { question: "Quelle est la capitale économique du Bénin ?", options: ["Porto-Novo", "Cotonou", "Ouidah", "Bohicon"], answer: "Cotonou" },
      { question: "Quel plat est emblématique de la cuisine béninoise ?", options: ["L'attiéké", "Le jollof rice", "La pâte rouge", "Le couscous"], answer: "La pâte rouge" },
      { question: "Quel festival vaudou majeur est célébré chaque année à Ouidah ?", options: ["Festival Gaani", "Fête des Ignames", "Fête du Vodoun (25 décembre)", "Fête du Vaudou (10 janvier)"], answer: "Fête du Vaudou (10 janvier)" },
      { question: "Quelle langue nationale est la plus parlée au Bénin ?", options: ["Fon", "Dendi", "Bariba", "Yoruba"], answer: "Fon" },
      { question: "Quel pays voisin du Bénin partage la langue Yoruba ?", options: ["Burkina Faso", "Nigeria", "Togo", "Niger"], answer: "Nigeria" },
      { question: "Quel roi béninois est célèbre pour sa résistance à la colonisation française ?", options: ["Ghézo", "Glèlè", "Béhanzin", "Agaja"], answer: "Béhanzin" },
      { question: "Quelle est la monnaie officielle du Bénin ?", options: ["Franc CFA (XOF)", "Naira", "Dalasi", "Cedi"], answer: "Franc CFA (XOF)" },
      { question: "Quel sport est le plus populaire au Bénin ?", options: ["Handball", "Athlétisme", "Basketball", "Football"], answer: "Football" },
      { question: "Quelle université est la plus grande du Bénin ?", options: ["Université de Parakou", "Université Catholique de l'Afrique de l'Ouest", "Université d'Abomey-Calavi (UAC)", "Université Lumière Lyon 2"], answer: "Université d'Abomey-Calavi (UAC)" },
      { question: "Quel site béninois est classé au patrimoine mondial de l'UNESCO ?", options: ["Palais royaux d'Abomey", "Fort de Grand-Popo", "Château de Ouidah", "Mosquée de Porto-Novo"], answer: "Palais royaux d'Abomey" },
      { question: "Quel pays d'Afrique de l'Ouest est le plus peuplé ?", options: ["Côte d'Ivoire", "Nigeria", "Sénégal", "Ghana"], answer: "Nigeria" },
      { question: "Quelle danse traditionnelle est originaire du Bénin ?", options: ["Le Coupé-décalé", "Le Mapouka", "Le Tchinkoumè", "L'Azonto"], answer: "Le Tchinkoumè" },
      { question: "Quelle artiste musicale béninoise est mondialement connue ?", options: ["Yemi Alade", "Aya Nakamura", "Tiwa Savage", "Angélique Kidjo"], answer: "Angélique Kidjo" },
      { question: "Quel fleuve traverse le Bénin du nord au sud ?", options: ["Le fleuve Niger", "Le fleuve Ouémé", "Le fleuve Sénégal", "La Volta"], answer: "Le fleuve Ouémé" },
      { question: "Quelle est la langue officielle héritée de la colonisation au Bénin ?", options: ["Espagnol", "Anglais", "Français", "Portugais"], answer: "Français" },
      { question: "Quel parc national béninois est réputé pour sa réserve de faune sauvage ?", options: ["Parc National du Niokolo-Koba", "Parc National de la Pendjari", "Parc Kruger", "Parc du W"], answer: "Parc National de la Pendjari" },
      { question: "Quel pays d'Afrique de l'Ouest est surnommé « Naija » par ses habitants ?", options: ["Ghana", "Bénin", "Niger", "Nigeria"], answer: "Nigeria" },
      { question: "Quelle est la capitale du Nigeria ?", options: ["Abuja", "Ibadan", "Kano", "Lagos"], answer: "Abuja" },
      { question: "Quelle pâte à base de maïs fermenté est consommée aussi bien au Bénin qu'au Nigeria ?", options: ["Attiéké", "Garri", "Fufu", "Akassa"], answer: "Akassa" }
    ]
  },

  devTrivia: {
    label: "Dev Trivia",
    tagline: "Culture du code et révision technique",
    questions: [
      { question: "Que signifie l'acronyme HTML ?", options: ["HighText Machine Language", "HyperText Markup Language", "Home Tool Markup Language", "HyperTransfer Markup Language"], answer: "HyperText Markup Language" },
      { question: "Quel langage est principalement utilisé pour le style d'une page web ?", options: ["CSS", "PHP", "HTML", "JSON"], answer: "CSS" },
      { question: "Quelle méthode JS permet d'ajouter un élément à la fin d'un tableau ?", options: ["pop()", "concat()", "push()", "shift()"], answer: "push()" },
      { question: "Quel mot-clé JS déclare une variable dont la valeur ne peut pas être réassignée ?", options: ["var", "let", "static", "const"], answer: "const" },
      { question: "Que signifie l'acronyme API ?", options: ["Application Process Interaction", "Automated Process Integration", "Application Programming Interface", "Advanced Programming Instruction"], answer: "Application Programming Interface" },
      { question: "Quel format de données léger est couramment utilisé pour échanger des infos client/serveur ?", options: ["YAML", "JSON", "CSV", "XML"], answer: "JSON" },
      { question: "Quelle balise HTML sert à créer un lien hypertexte ?", options: ["<href>", "<link>", "<a>", "<nav>"], answer: "<a>" },
      { question: "Quel framework JS peut être utilisé pour ce quiz, en alternative au vanilla JS ?", options: ["React", "Symfony", "Django", "Laravel"], answer: "React" },
      { question: "Que facilite CSS Flexbox en layout ?", options: ["La validation de formulaires", "L'alignement flexible d'éléments", "La compression d'images", "Le routage des pages"], answer: "L'alignement flexible d'éléments" },
      { question: "Quelle commande Git permet d'envoyer son code vers un dépôt distant ?", options: ["git push", "git fetch", "git commit", "git pull"], answer: "git push" },
      { question: "Quel port est souvent utilisé par défaut pour un serveur local Vite ?", options: ["3000", "4200", "8080", "5173"], answer: "5173" },
      { question: "Quel opérateur JS compare valeur ET type ?", options: ["!= (différence)", "== (égalité simple)", "=== (égalité stricte)", "= (affectation)"], answer: "=== (égalité stricte)" },
      { question: "Que signifie DOM ?", options: ["Document Object Model", "Dynamic Object Manager", "Direct Output Method", "Data Object Mapping"], answer: "Document Object Model" },
      { question: "Quelle plateforme héberge gratuitement des sites statiques via des dépôts Git ?", options: ["Heroku", "GitHub Pages", "DigitalOcean", "AWS Lambda"], answer: "GitHub Pages" },
      { question: "Quel type de fonction JS s'écrit avec une flèche => ?", options: ["Generator function", "Callback function", "Async function", "Arrow function"], answer: "Arrow function" },
      { question: "Quel symbole est utilisé pour commenter une ligne en JavaScript ?", options: ["//", "#", "/* */", "<!-- -->"], answer: "//" },
      { question: "Quelle méthode JS transforme chaque élément d'un tableau et retourne un nouveau tableau ?", options: ["forEach()", "filter()", "reduce()", "map()"], answer: "map()" },
      { question: "Que signifie CSS ?", options: ["Creative Style Syntax", "Cascading Style Sheets", "Content Styling Service", "Computer Style System"], answer: "Cascading Style Sheets" },
      { question: "Quelle balise HTML sert à afficher une image ?", options: ["<picture>", "<src>", "<img>", "<image>"], answer: "<img>" },
      { question: "Quel gestionnaire de paquets est utilisé par défaut avec Node.js ?", options: ["cargo", "composer", "pip", "npm"], answer: "npm" }
    ]
  }

};

// Thème actif pour ce quiz individuel. Change cette valeur pour changer de thème :
// "levelUpAfrica" | "naijaBeninTrivia" | "devTrivia"
const ACTIVE_THEME = "levelUpAfrica";
