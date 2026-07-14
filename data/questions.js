/**
 * Level Up Africa — Banque de questions (multilingue FR / EN / ES)
 * Format : { question: {fr,en,es}, options: {fr:[4],en:[4],es:[4]}, answer: {fr,en,es} }
 * Chaque thème contient 20 questions.
 * L'ordre des options est identique dans les 3 langues (seul le texte change),
 * donc la position de la bonne réponse reste équilibrée A/B/C/D quelle que soit la langue.
 */

const quizThemes = {
  levelUpAfrica: {
    label: { fr: "Level Up Africa", en: "Level Up Africa", es: "Level Up Africa" },
    tagline: {
      fr: "Startups, inventeurs & innovation tech africaine",
      en: "Startups, inventors & African tech innovation",
      es: "Startups, inventores e innovación tecnológica africana"
    },
    questions: [
      { question: { fr: "Quelle startup nigériane de fintech est devenue une licorne en 2019 ?", en: "Which Nigerian fintech startup became a unicorn in 2019?", es: "¿Qué startup fintech nigeriana se convirtió en unicornio en 2019?" },
        options: { fr: ["OPay", "Paystack", "Flutterwave", "Interswitch"], en: ["OPay", "Paystack", "Flutterwave", "Interswitch"], es: ["OPay", "Paystack", "Flutterwave", "Interswitch"] },
        answer: { fr: "Interswitch", en: "Interswitch", es: "Interswitch" } },

      { question: { fr: "Quel pays africain a lancé le M-Pesa, service pionnier de mobile money ?", en: "Which African country launched M-Pesa, the pioneering mobile money service?", es: "¿Qué país africano lanzó M-Pesa, el servicio pionero de dinero móvil?" },
        options: { fr: ["Tanzanie", "Kenya", "Ghana", "Nigeria"], en: ["Tanzania", "Kenya", "Ghana", "Nigeria"], es: ["Tanzania", "Kenia", "Ghana", "Nigeria"] },
        answer: { fr: "Kenya", en: "Kenya", es: "Kenia" } },

      { question: { fr: "Quelle application panafricaine facilite le paiement en ligne francophone ?", en: "Which pan-African app facilitates online payments in French-speaking Africa?", es: "¿Qué aplicación panafricana facilita los pagos en línea en África francófona?" },
        options: { fr: ["MoMo", "Wave", "Orange Money", "Djamo"], en: ["MoMo", "Wave", "Orange Money", "Djamo"], es: ["MoMo", "Wave", "Orange Money", "Djamo"] },
        answer: { fr: "Djamo", en: "Djamo", es: "Djamo" } },

      { question: { fr: "Quel pays africain accueille le siège de Flutterwave ?", en: "Which African country hosts Flutterwave's headquarters?", es: "¿Qué país africano alberga la sede de Flutterwave?" },
        options: { fr: ["Afrique du Sud", "Nigeria", "Ghana", "Kenya"], en: ["South Africa", "Nigeria", "Ghana", "Kenya"], es: ["Sudáfrica", "Nigeria", "Ghana", "Kenia"] },
        answer: { fr: "Nigeria", en: "Nigeria", es: "Nigeria" } },

      { question: { fr: "Quelle application de transfert d'argent mobile est populaire en Afrique de l'Ouest francophone ?", en: "Which mobile money transfer app is popular in French-speaking West Africa?", es: "¿Qué aplicación de transferencia de dinero móvil es popular en África Occidental francófona?" },
        options: { fr: ["Zelle", "Venmo", "Wave", "Cash App"], en: ["Zelle", "Venmo", "Wave", "Cash App"], es: ["Zelle", "Venmo", "Wave", "Cash App"] },
        answer: { fr: "Wave", en: "Wave", es: "Wave" } },

      { question: { fr: "Quel domaine tech connaît la plus forte croissance de startups en Afrique ?", en: "Which tech sector has the fastest startup growth in Africa?", es: "¿Qué sector tecnológico tiene el mayor crecimiento de startups en África?" },
        options: { fr: ["Healthtech", "Fintech", "Proptech", "Edtech"], en: ["Healthtech", "Fintech", "Proptech", "Edtech"], es: ["Healthtech", "Fintech", "Proptech", "Edtech"] },
        answer: { fr: "Fintech", en: "Fintech", es: "Fintech" } },

      { question: { fr: "Quelle ville est surnommée le « Silicon Lagoon » ?", en: "Which city is nicknamed \"Silicon Lagoon\"?", es: "¿Qué ciudad es apodada «Silicon Lagoon»?" },
        options: { fr: ["Abidjan", "Accra", "Lagos", "Nairobi"], en: ["Abidjan", "Accra", "Lagos", "Nairobi"], es: ["Abiyán", "Accra", "Lagos", "Nairobi"] },
        answer: { fr: "Lagos", en: "Lagos", es: "Lagos" } },

      { question: { fr: "Quel incubateur tech panafricain est basé au Kenya ?", en: "Which pan-African tech incubator is based in Kenya?", es: "¿Qué incubadora tecnológica panafricana tiene sede en Kenia?" },
        options: { fr: ["iHub", "MEST", "Impact Hub", "CcHub"], en: ["iHub", "MEST", "Impact Hub", "CcHub"], es: ["iHub", "MEST", "Impact Hub", "CcHub"] },
        answer: { fr: "iHub", en: "iHub", es: "iHub" } },

      { question: { fr: "Quelle solution béninoise connecte les producteurs d'ananas aux acheteurs via une application mobile ?", en: "Which Beninese solution connects pineapple producers to buyers via a mobile app?", es: "¿Qué solución beninesa conecta a los productores de piña con los compradores mediante una aplicación móvil?" },
        options: { fr: ["AgriConnect Bénin", "FarmLink", "e-pineA", "AnanasPay"], en: ["AgriConnect Benin", "FarmLink", "e-pineA", "AnanasPay"], es: ["AgriConnect Benín", "FarmLink", "e-pineA", "AnanasPay"] },
        answer: { fr: "e-pineA", en: "e-pineA", es: "e-pineA" } },

      { question: { fr: "Quel pays a lancé son propre satellite grâce à des ingénieurs locaux en 2022 ?", en: "Which country launched its own satellite thanks to local engineers in 2022?", es: "¿Qué país lanzó su propio satélite gracias a ingenieros locales en 2022?" },
        options: { fr: ["Djibouti", "Sénégal", "Togo", "Bénin"], en: ["Djibouti", "Senegal", "Togo", "Benin"], es: ["Yibuti", "Senegal", "Togo", "Benín"] },
        answer: { fr: "Djibouti", en: "Djibouti", es: "Yibuti" } },

      { question: { fr: "Quelle plateforme e-commerce panafricaine est cotée à la bourse de New York ?", en: "Which pan-African e-commerce platform is listed on the New York Stock Exchange?", es: "¿Qué plataforma de comercio electrónico panafricana cotiza en la Bolsa de Nueva York?" },
        options: { fr: ["Konga", "Kilimall", "Takealot", "Jumia"], en: ["Konga", "Kilimall", "Takealot", "Jumia"], es: ["Konga", "Kilimall", "Takealot", "Jumia"] },
        answer: { fr: "Jumia", en: "Jumia", es: "Jumia" } },

      { question: { fr: "Quel secteur combine IA et agriculture pour aider les petits exploitants ouest-africains ?", en: "Which sector combines AI and agriculture to help small West African farmers?", es: "¿Qué sector combina IA y agricultura para ayudar a los pequeños agricultores de África Occidental?" },
        options: { fr: ["AgriTech", "EdTech", "PropTech", "FinTech"], en: ["AgriTech", "EdTech", "PropTech", "FinTech"], es: ["AgriTech", "EdTech", "PropTech", "FinTech"] },
        answer: { fr: "AgriTech", en: "AgriTech", es: "AgriTech" } },

      { question: { fr: "Quelle ville ghanéenne est un hub tech montant ?", en: "Which Ghanaian city is a rising tech hub?", es: "¿Qué ciudad ghanesa es un centro tecnológico emergente?" },
        options: { fr: ["Kumasi", "Tamale", "Cape Coast", "Accra"], en: ["Kumasi", "Tamale", "Cape Coast", "Accra"], es: ["Kumasi", "Tamale", "Cape Coast", "Accra"] },
        answer: { fr: "Accra", en: "Accra", es: "Accra" } },

      { question: { fr: "Quel réseau soutient les startups tech à travers l'Afrique ?", en: "Which network supports tech startups across Africa?", es: "¿Qué red apoya a las startups tecnológicas en toda África?" },
        options: { fr: ["TechStars", "AfriLabs", "500 Startups", "Y Combinator"], en: ["TechStars", "AfriLabs", "500 Startups", "Y Combinator"], es: ["TechStars", "AfriLabs", "500 Startups", "Y Combinator"] },
        answer: { fr: "AfriLabs", en: "AfriLabs", es: "AfriLabs" } },

      { question: { fr: "Quelle solution facilite les paiements interbancaires transfrontaliers dans la zone UEMOA ?", en: "Which solution facilitates cross-border interbank payments in the WAEMU zone?", es: "¿Qué solución facilita los pagos interbancarios transfronterizos en la zona UEMOA?" },
        options: { fr: ["GIM-UEMOA", "PAPSS", "Visa Direct", "SWIFT"], en: ["GIM-UEMOA", "PAPSS", "Visa Direct", "SWIFT"], es: ["GIM-UEMOA", "PAPSS", "Visa Direct", "SWIFT"] },
        answer: { fr: "GIM-UEMOA", en: "GIM-UEMOA", es: "GIM-UEMOA" } },

      { question: { fr: "Quelle fintech nigériane, rachetée en partie par Stripe en 2020, a démocratisé les paiements en ligne en Afrique ?", en: "Which Nigerian fintech, partly acquired by Stripe in 2020, democratized online payments in Africa?", es: "¿Qué fintech nigeriana, adquirida en parte por Stripe en 2020, democratizó los pagos en línea en África?" },
        options: { fr: ["Flutterwave", "Paystack", "OPay", "Chipper Cash"], en: ["Flutterwave", "Paystack", "OPay", "Chipper Cash"], es: ["Flutterwave", "Paystack", "OPay", "Chipper Cash"] },
        answer: { fr: "Paystack", en: "Paystack", es: "Paystack" } },

      { question: { fr: "Quelle plateforme panafricaine de data science organise des compétitions IA pour résoudre des défis locaux ?", en: "Which pan-African data science platform hosts AI competitions to solve local challenges?", es: "¿Qué plataforma panafricana de ciencia de datos organiza competiciones de IA para resolver retos locales?" },
        options: { fr: ["Coursera", "DataCamp", "Zindi", "Kaggle"], en: ["Coursera", "DataCamp", "Zindi", "Kaggle"], es: ["Coursera", "DataCamp", "Zindi", "Kaggle"] },
        answer: { fr: "Zindi", en: "Zindi", es: "Zindi" } },

      { question: { fr: "Quelle entreprise forme et connecte des développeurs africains à des entreprises tech internationales ?", en: "Which company trains and connects African developers with international tech companies?", es: "¿Qué empresa forma y conecta a desarrolladores africanos con empresas tecnológicas internacionales?" },
        options: { fr: ["ALX", "Moringa School", "Decagon", "Andela"], en: ["ALX", "Moringa School", "Decagon", "Andela"], es: ["ALX", "Moringa School", "Decagon", "Andela"] },
        answer: { fr: "Andela", en: "Andela", es: "Andela" } },

      { question: { fr: "En 2024, quel pays africain comptait le plus grand nombre de startups valorisées à plus d'un milliard de dollars (licornes) ?", en: "In 2024, which African country had the most startups valued at over one billion dollars (unicorns)?", es: "En 2024, ¿qué país africano tenía la mayor cantidad de startups valoradas en más de mil millones de dólares (unicornios)?" },
        options: { fr: ["Afrique du Sud", "Égypte", "Nigeria", "Kenya"], en: ["South Africa", "Egypt", "Nigeria", "Kenya"], es: ["Sudáfrica", "Egipto", "Nigeria", "Kenia"] },
        answer: { fr: "Nigeria", en: "Nigeria", es: "Nigeria" } },

      { question: { fr: "Quelle infrastructure panafricaine, lancée en 2022 par Afreximbank, facilite les paiements transfrontaliers dans toute l'Afrique ?", en: "Which pan-African infrastructure, launched in 2022 by Afreximbank, facilitates cross-border payments across Africa?", es: "¿Qué infraestructura panafricana, lanzada en 2022 por Afreximbank, facilita los pagos transfronterizos en toda África?" },
        options: { fr: ["PAPSS", "SWIFT Africa", "AfCFTA Pay", "GIM-UEMOA"], en: ["PAPSS", "SWIFT Africa", "AfCFTA Pay", "GIM-UEMOA"], es: ["PAPSS", "SWIFT Africa", "AfCFTA Pay", "GIM-UEMOA"] },
        answer: { fr: "PAPSS", en: "PAPSS", es: "PAPSS" } }
    ]
  },

  naijaBeninTrivia: {
    label: { fr: "Naija/Benin Trivia", en: "Naija/Benin Trivia", es: "Naija/Benin Trivia" },
    tagline: {
      fr: "Culture générale de l'Afrique de l'Ouest",
      en: "General knowledge of West Africa",
      es: "Cultura general de África Occidental"
    },
    questions: [
      { question: { fr: "Quelle est la capitale politique du Bénin ?", en: "What is the political capital of Benin?", es: "¿Cuál es la capital política de Benín?" },
        options: { fr: ["Porto-Novo", "Abomey", "Cotonou", "Parakou"], en: ["Porto-Novo", "Abomey", "Cotonou", "Parakou"], es: ["Porto-Novo", "Abomey", "Cotonú", "Parakou"] },
        answer: { fr: "Porto-Novo", en: "Porto-Novo", es: "Porto-Novo" } },

      { question: { fr: "Quelle est la capitale économique du Bénin ?", en: "What is the economic capital of Benin?", es: "¿Cuál es la capital económica de Benín?" },
        options: { fr: ["Porto-Novo", "Cotonou", "Ouidah", "Bohicon"], en: ["Porto-Novo", "Cotonou", "Ouidah", "Bohicon"], es: ["Porto-Novo", "Cotonú", "Ouidah", "Bohicon"] },
        answer: { fr: "Cotonou", en: "Cotonou", es: "Cotonú" } },

      { question: { fr: "Quel plat est emblématique de la cuisine béninoise ?", en: "Which dish is emblematic of Beninese cuisine?", es: "¿Qué plato es emblemático de la cocina beninesa?" },
        options: { fr: ["L'attiéké", "Le jollof rice", "La pâte rouge", "Le couscous"], en: ["Attiéké", "Jollof rice", "Red pâte (pâte rouge)", "Couscous"], es: ["Attiéké", "Arroz jollof", "La pâte roja (pâte rouge)", "Cuscús"] },
        answer: { fr: "La pâte rouge", en: "Red pâte (pâte rouge)", es: "La pâte roja (pâte rouge)" } },

      { question: { fr: "Quel festival vaudou majeur est célébré chaque année à Ouidah ?", en: "Which major Vodun festival is celebrated every year in Ouidah?", es: "¿Qué gran festival vudú se celebra cada año en Ouidah?" },
        options: { fr: ["Festival Gaani", "Fête des Ignames", "Fête du Vodoun (25 décembre)", "Fête du Vaudou (10 janvier)"], en: ["Gaani Festival", "Yam Festival", "Vodoun Day (December 25)", "Vodun Festival (January 10)"], es: ["Festival Gaani", "Fiesta del Ñame", "Día del Vodún (25 de diciembre)", "Festival del Vudú (10 de enero)"] },
        answer: { fr: "Fête du Vaudou (10 janvier)", en: "Vodun Festival (January 10)", es: "Festival del Vudú (10 de enero)" } },

      { question: { fr: "Quelle langue nationale est la plus parlée au Bénin ?", en: "Which national language is most widely spoken in Benin?", es: "¿Qué lengua nacional es la más hablada en Benín?" },
        options: { fr: ["Fon", "Dendi", "Bariba", "Yoruba"], en: ["Fon", "Dendi", "Bariba", "Yoruba"], es: ["Fon", "Dendi", "Bariba", "Yoruba"] },
        answer: { fr: "Fon", en: "Fon", es: "Fon" } },

      { question: { fr: "Quel pays voisin du Bénin partage la langue Yoruba ?", en: "Which neighboring country of Benin shares the Yoruba language?", es: "¿Qué país vecino de Benín comparte el idioma yoruba?" },
        options: { fr: ["Burkina Faso", "Nigeria", "Togo", "Niger"], en: ["Burkina Faso", "Nigeria", "Togo", "Niger"], es: ["Burkina Faso", "Nigeria", "Togo", "Níger"] },
        answer: { fr: "Nigeria", en: "Nigeria", es: "Nigeria" } },

      { question: { fr: "Quel roi béninois est célèbre pour sa résistance à la colonisation française ?", en: "Which Beninese king is famous for resisting French colonization?", es: "¿Qué rey beninés es famoso por su resistencia a la colonización francesa?" },
        options: { fr: ["Ghézo", "Glèlè", "Béhanzin", "Agaja"], en: ["Ghezo", "Glele", "Behanzin", "Agaja"], es: ["Ghezo", "Glele", "Behanzin", "Agaja"] },
        answer: { fr: "Béhanzin", en: "Behanzin", es: "Behanzin" } },

      { question: { fr: "Quelle est la monnaie officielle du Bénin ?", en: "What is the official currency of Benin?", es: "¿Cuál es la moneda oficial de Benín?" },
        options: { fr: ["Franc CFA (XOF)", "Naira", "Dalasi", "Cedi"], en: ["CFA franc (XOF)", "Naira", "Dalasi", "Cedi"], es: ["Franco CFA (XOF)", "Naira", "Dalasi", "Cedi"] },
        answer: { fr: "Franc CFA (XOF)", en: "CFA franc (XOF)", es: "Franco CFA (XOF)" } },

      { question: { fr: "Quel sport est le plus populaire au Bénin ?", en: "Which sport is most popular in Benin?", es: "¿Qué deporte es el más popular en Benín?" },
        options: { fr: ["Handball", "Athlétisme", "Basketball", "Football"], en: ["Handball", "Athletics", "Basketball", "Football (Soccer)"], es: ["Balonmano", "Atletismo", "Baloncesto", "Fútbol"] },
        answer: { fr: "Football", en: "Football (Soccer)", es: "Fútbol" } },

      { question: { fr: "Quelle université est la plus grande du Bénin ?", en: "Which is the largest university in Benin?", es: "¿Cuál es la universidad más grande de Benín?" },
        options: { fr: ["Université de Parakou", "Université Catholique de l'Afrique de l'Ouest", "Université d'Abomey-Calavi (UAC)", "Université Lumière Lyon 2"], en: ["University of Parakou", "Catholic University of West Africa", "University of Abomey-Calavi (UAC)", "Université Lumière Lyon 2"], es: ["Universidad de Parakou", "Universidad Católica de África Occidental", "Universidad de Abomey-Calavi (UAC)", "Universidad Lumière Lyon 2"] },
        answer: { fr: "Université d'Abomey-Calavi (UAC)", en: "University of Abomey-Calavi (UAC)", es: "Universidad de Abomey-Calavi (UAC)" } },

      { question: { fr: "Quel site béninois est classé au patrimoine mondial de l'UNESCO ?", en: "Which Beninese site is a UNESCO World Heritage Site?", es: "¿Qué sitio beninés está clasificado como patrimonio mundial de la UNESCO?" },
        options: { fr: ["Palais royaux d'Abomey", "Fort de Grand-Popo", "Château de Ouidah", "Mosquée de Porto-Novo"], en: ["Royal Palaces of Abomey", "Grand-Popo Fort", "Ouidah Castle", "Porto-Novo Mosque"], es: ["Palacios Reales de Abomey", "Fuerte de Grand-Popo", "Castillo de Ouidah", "Mezquita de Porto-Novo"] },
        answer: { fr: "Palais royaux d'Abomey", en: "Royal Palaces of Abomey", es: "Palacios Reales de Abomey" } },

      { question: { fr: "Quel pays d'Afrique de l'Ouest est le plus peuplé ?", en: "Which West African country is the most populous?", es: "¿Qué país de África Occidental es el más poblado?" },
        options: { fr: ["Côte d'Ivoire", "Nigeria", "Sénégal", "Ghana"], en: ["Ivory Coast", "Nigeria", "Senegal", "Ghana"], es: ["Costa de Marfil", "Nigeria", "Senegal", "Ghana"] },
        answer: { fr: "Nigeria", en: "Nigeria", es: "Nigeria" } },

      { question: { fr: "Quelle danse traditionnelle est originaire du Bénin ?", en: "Which traditional dance originates from Benin?", es: "¿Qué danza tradicional es originaria de Benín?" },
        options: { fr: ["Le Coupé-décalé", "Le Mapouka", "Le Tchinkoumè", "L'Azonto"], en: ["Coupé-décalé", "Mapouka", "Tchinkoumè", "Azonto"], es: ["Coupé-décalé", "Mapouka", "Tchinkoumè", "Azonto"] },
        answer: { fr: "Le Tchinkoumè", en: "Tchinkoumè", es: "Tchinkoumè" } },

      { question: { fr: "Quelle artiste musicale béninoise est mondialement connue ?", en: "Which Beninese musical artist is world-renowned?", es: "¿Qué artista musical beninesa es mundialmente conocida?" },
        options: { fr: ["Yemi Alade", "Aya Nakamura", "Tiwa Savage", "Angélique Kidjo"], en: ["Yemi Alade", "Aya Nakamura", "Tiwa Savage", "Angélique Kidjo"], es: ["Yemi Alade", "Aya Nakamura", "Tiwa Savage", "Angélique Kidjo"] },
        answer: { fr: "Angélique Kidjo", en: "Angélique Kidjo", es: "Angélique Kidjo" } },

      { question: { fr: "Quel fleuve traverse le Bénin du nord au sud ?", en: "Which river runs through Benin from north to south?", es: "¿Qué río atraviesa Benín de norte a sur?" },
        options: { fr: ["Le fleuve Niger", "Le fleuve Ouémé", "Le fleuve Sénégal", "La Volta"], en: ["The Niger River", "The Ouémé River", "The Senegal River", "The Volta"], es: ["El río Níger", "El río Ouémé", "El río Senegal", "El Volta"] },
        answer: { fr: "Le fleuve Ouémé", en: "The Ouémé River", es: "El río Ouémé" } },

      { question: { fr: "Quelle est la langue officielle héritée de la colonisation au Bénin ?", en: "What is the official language inherited from colonization in Benin?", es: "¿Cuál es el idioma oficial heredado de la colonización en Benín?" },
        options: { fr: ["Espagnol", "Anglais", "Français", "Portugais"], en: ["Spanish", "English", "French", "Portuguese"], es: ["Español", "Inglés", "Francés", "Portugués"] },
        answer: { fr: "Français", en: "French", es: "Francés" } },

      { question: { fr: "Quel parc national béninois est réputé pour sa réserve de faune sauvage ?", en: "Which Beninese national park is renowned for its wildlife reserve?", es: "¿Qué parque nacional beninés es conocido por su reserva de fauna salvaje?" },
        options: { fr: ["Parc National du Niokolo-Koba", "Parc National de la Pendjari", "Parc Kruger", "Parc du W"], en: ["Niokolo-Koba National Park", "Pendjari National Park", "Kruger Park", "W National Park"], es: ["Parque Nacional de Niokolo-Koba", "Parque Nacional de Pendjari", "Parque Kruger", "Parque W"] },
        answer: { fr: "Parc National de la Pendjari", en: "Pendjari National Park", es: "Parque Nacional de Pendjari" } },

      { question: { fr: "Quel pays d'Afrique de l'Ouest est surnommé « Naija » par ses habitants ?", en: "Which West African country is nicknamed \"Naija\" by its people?", es: "¿Qué país de África Occidental es apodado «Naija» por sus habitantes?" },
        options: { fr: ["Ghana", "Bénin", "Niger", "Nigeria"], en: ["Ghana", "Benin", "Niger", "Nigeria"], es: ["Ghana", "Benín", "Níger", "Nigeria"] },
        answer: { fr: "Nigeria", en: "Nigeria", es: "Nigeria" } },

      { question: { fr: "Quelle est la capitale du Nigeria ?", en: "What is the capital of Nigeria?", es: "¿Cuál es la capital de Nigeria?" },
        options: { fr: ["Abuja", "Ibadan", "Kano", "Lagos"], en: ["Abuja", "Ibadan", "Kano", "Lagos"], es: ["Abuya", "Ibadán", "Kano", "Lagos"] },
        answer: { fr: "Abuja", en: "Abuja", es: "Abuya" } },

      { question: { fr: "Quelle pâte à base de maïs fermenté est consommée aussi bien au Bénin qu'au Nigeria ?", en: "Which fermented corn-based paste is eaten in both Benin and Nigeria?", es: "¿Qué pasta a base de maíz fermentado se consume tanto en Benín como en Nigeria?" },
        options: { fr: ["Attiéké", "Garri", "Fufu", "Akassa"], en: ["Attiéké", "Garri", "Fufu", "Akassa"], es: ["Attiéké", "Garri", "Fufú", "Akassa"] },
        answer: { fr: "Akassa", en: "Akassa", es: "Akassa" } }
    ]
  },

  devTrivia: {
    label: { fr: "Dev Trivia", en: "Dev Trivia", es: "Dev Trivia" },
    tagline: {
      fr: "Culture du code et révision technique",
      en: "Coding culture and technical review",
      es: "Cultura del código y repaso técnico"
    },
    questions: [
      { question: { fr: "Que signifie l'acronyme HTML ?", en: "What does the acronym HTML stand for?", es: "¿Qué significa el acrónimo HTML?" },
        options: { fr: ["HighText Machine Language", "HyperText Markup Language", "Home Tool Markup Language", "HyperTransfer Markup Language"], en: ["HighText Machine Language", "HyperText Markup Language", "Home Tool Markup Language", "HyperTransfer Markup Language"], es: ["HighText Machine Language", "HyperText Markup Language", "Home Tool Markup Language", "HyperTransfer Markup Language"] },
        answer: { fr: "HyperText Markup Language", en: "HyperText Markup Language", es: "HyperText Markup Language" } },

      { question: { fr: "Quel langage est principalement utilisé pour le style d'une page web ?", en: "Which language is mainly used for styling a web page?", es: "¿Qué lenguaje se utiliza principalmente para el estilo de una página web?" },
        options: { fr: ["CSS", "PHP", "HTML", "JSON"], en: ["CSS", "PHP", "HTML", "JSON"], es: ["CSS", "PHP", "HTML", "JSON"] },
        answer: { fr: "CSS", en: "CSS", es: "CSS" } },

      { question: { fr: "Quelle méthode JS permet d'ajouter un élément à la fin d'un tableau ?", en: "Which JS method adds an element to the end of an array?", es: "¿Qué método de JS permite añadir un elemento al final de un array?" },
        options: { fr: ["pop()", "concat()", "push()", "shift()"], en: ["pop()", "concat()", "push()", "shift()"], es: ["pop()", "concat()", "push()", "shift()"] },
        answer: { fr: "push()", en: "push()", es: "push()" } },

      { question: { fr: "Quel mot-clé JS déclare une variable dont la valeur ne peut pas être réassignée ?", en: "Which JS keyword declares a variable whose value cannot be reassigned?", es: "¿Qué palabra clave de JS declara una variable cuyo valor no se puede reasignar?" },
        options: { fr: ["var", "let", "static", "const"], en: ["var", "let", "static", "const"], es: ["var", "let", "static", "const"] },
        answer: { fr: "const", en: "const", es: "const" } },

      { question: { fr: "Que signifie l'acronyme API ?", en: "What does the acronym API stand for?", es: "¿Qué significa el acrónimo API?" },
        options: { fr: ["Application Process Interaction", "Automated Process Integration", "Application Programming Interface", "Advanced Programming Instruction"], en: ["Application Process Interaction", "Automated Process Integration", "Application Programming Interface", "Advanced Programming Instruction"], es: ["Application Process Interaction", "Automated Process Integration", "Application Programming Interface", "Advanced Programming Instruction"] },
        answer: { fr: "Application Programming Interface", en: "Application Programming Interface", es: "Application Programming Interface" } },

      { question: { fr: "Quel format de données léger est couramment utilisé pour échanger des infos client/serveur ?", en: "Which lightweight data format is commonly used to exchange client/server information?", es: "¿Qué formato de datos ligero se usa comúnmente para intercambiar información cliente/servidor?" },
        options: { fr: ["YAML", "JSON", "CSV", "XML"], en: ["YAML", "JSON", "CSV", "XML"], es: ["YAML", "JSON", "CSV", "XML"] },
        answer: { fr: "JSON", en: "JSON", es: "JSON" } },

      { question: { fr: "Quelle balise HTML sert à créer un lien hypertexte ?", en: "Which HTML tag creates a hyperlink?", es: "¿Qué etiqueta HTML sirve para crear un hipervínculo?" },
        options: { fr: ["<href>", "<link>", "<a>", "<nav>"], en: ["<href>", "<link>", "<a>", "<nav>"], es: ["<href>", "<link>", "<a>", "<nav>"] },
        answer: { fr: "<a>", en: "<a>", es: "<a>" } },

      { question: { fr: "Quel framework JS peut être utilisé pour ce quiz, en alternative au vanilla JS ?", en: "Which JS framework could be used for this quiz, as an alternative to vanilla JS?", es: "¿Qué framework de JS podría usarse para este quiz, como alternativa al JS vanilla?" },
        options: { fr: ["React", "Symfony", "Django", "Laravel"], en: ["React", "Symfony", "Django", "Laravel"], es: ["React", "Symfony", "Django", "Laravel"] },
        answer: { fr: "React", en: "React", es: "React" } },

      { question: { fr: "Que facilite CSS Flexbox en layout ?", en: "What does CSS Flexbox make easier in layout?", es: "¿Qué facilita CSS Flexbox en el diseño de páginas?" },
        options: { fr: ["La validation de formulaires", "L'alignement flexible d'éléments", "La compression d'images", "Le routage des pages"], en: ["Form validation", "Flexible alignment of elements", "Image compression", "Page routing"], es: ["La validación de formularios", "La alineación flexible de elementos", "La compresión de imágenes", "El enrutamiento de páginas"] },
        answer: { fr: "L'alignement flexible d'éléments", en: "Flexible alignment of elements", es: "La alineación flexible de elementos" } },

      { question: { fr: "Quelle commande Git permet d'envoyer son code vers un dépôt distant ?", en: "Which Git command sends your code to a remote repository?", es: "¿Qué comando de Git permite enviar el código a un repositorio remoto?" },
        options: { fr: ["git push", "git fetch", "git commit", "git pull"], en: ["git push", "git fetch", "git commit", "git pull"], es: ["git push", "git fetch", "git commit", "git pull"] },
        answer: { fr: "git push", en: "git push", es: "git push" } },

      { question: { fr: "Quel port est souvent utilisé par défaut pour un serveur local Vite ?", en: "Which port is commonly used by default for a local Vite server?", es: "¿Qué puerto se usa habitualmente por defecto para un servidor local de Vite?" },
        options: { fr: ["3000", "4200", "8080", "5173"], en: ["3000", "4200", "8080", "5173"], es: ["3000", "4200", "8080", "5173"] },
        answer: { fr: "5173", en: "5173", es: "5173" } },

      { question: { fr: "Quel opérateur JS compare valeur ET type ?", en: "Which JS operator compares both value AND type?", es: "¿Qué operador de JS compara valor Y tipo?" },
        options: { fr: ["!= (différence)", "== (égalité simple)", "=== (égalité stricte)", "= (affectation)"], en: ["!= (inequality)", "== (loose equality)", "=== (strict equality)", "= (assignment)"], es: ["!= (desigualdad)", "== (igualdad simple)", "=== (igualdad estricta)", "= (asignación)"] },
        answer: { fr: "=== (égalité stricte)", en: "=== (strict equality)", es: "=== (igualdad estricta)" } },

      { question: { fr: "Que signifie DOM ?", en: "What does DOM stand for?", es: "¿Qué significa DOM?" },
        options: { fr: ["Document Object Model", "Dynamic Object Manager", "Direct Output Method", "Data Object Mapping"], en: ["Document Object Model", "Dynamic Object Manager", "Direct Output Method", "Data Object Mapping"], es: ["Document Object Model", "Dynamic Object Manager", "Direct Output Method", "Data Object Mapping"] },
        answer: { fr: "Document Object Model", en: "Document Object Model", es: "Document Object Model" } },

      { question: { fr: "Quelle plateforme héberge gratuitement des sites statiques via des dépôts Git ?", en: "Which platform hosts static sites for free via Git repositories?", es: "¿Qué plataforma aloja gratuitamente sitios estáticos a través de repositorios Git?" },
        options: { fr: ["Heroku", "GitHub Pages", "DigitalOcean", "AWS Lambda"], en: ["Heroku", "GitHub Pages", "DigitalOcean", "AWS Lambda"], es: ["Heroku", "GitHub Pages", "DigitalOcean", "AWS Lambda"] },
        answer: { fr: "GitHub Pages", en: "GitHub Pages", es: "GitHub Pages" } },

      { question: { fr: "Quel type de fonction JS s'écrit avec une flèche => ?", en: "Which type of JS function is written with an arrow => ?", es: "¿Qué tipo de función de JS se escribe con una flecha => ?" },
        options: { fr: ["Generator function", "Callback function", "Async function", "Arrow function"], en: ["Generator function", "Callback function", "Async function", "Arrow function"], es: ["Generator function", "Callback function", "Async function", "Arrow function"] },
        answer: { fr: "Arrow function", en: "Arrow function", es: "Arrow function" } },

      { question: { fr: "Quel symbole est utilisé pour commenter une ligne en JavaScript ?", en: "Which symbol is used to comment a line in JavaScript?", es: "¿Qué símbolo se usa para comentar una línea en JavaScript?" },
        options: { fr: ["//", "#", "/* */", "<!-- -->"], en: ["//", "#", "/* */", "<!-- -->"], es: ["//", "#", "/* */", "<!-- -->"] },
        answer: { fr: "//", en: "//", es: "//" } },

      { question: { fr: "Quelle méthode JS transforme chaque élément d'un tableau et retourne un nouveau tableau ?", en: "Which JS method transforms each element of an array and returns a new array?", es: "¿Qué método de JS transforma cada elemento de un array y devuelve un nuevo array?" },
        options: { fr: ["forEach()", "filter()", "reduce()", "map()"], en: ["forEach()", "filter()", "reduce()", "map()"], es: ["forEach()", "filter()", "reduce()", "map()"] },
        answer: { fr: "map()", en: "map()", es: "map()" } },

      { question: { fr: "Que signifie CSS ?", en: "What does CSS stand for?", es: "¿Qué significa CSS?" },
        options: { fr: ["Creative Style Syntax", "Cascading Style Sheets", "Content Styling Service", "Computer Style System"], en: ["Creative Style Syntax", "Cascading Style Sheets", "Content Styling Service", "Computer Style System"], es: ["Creative Style Syntax", "Cascading Style Sheets", "Content Styling Service", "Computer Style System"] },
        answer: { fr: "Cascading Style Sheets", en: "Cascading Style Sheets", es: "Cascading Style Sheets" } },

      { question: { fr: "Quelle balise HTML sert à afficher une image ?", en: "Which HTML tag is used to display an image?", es: "¿Qué etiqueta HTML sirve para mostrar una imagen?" },
        options: { fr: ["<picture>", "<src>", "<img>", "<image>"], en: ["<picture>", "<src>", "<img>", "<image>"], es: ["<picture>", "<src>", "<img>", "<image>"] },
        answer: { fr: "<img>", en: "<img>", es: "<img>" } },

      { question: { fr: "Quel gestionnaire de paquets est utilisé par défaut avec Node.js ?", en: "Which package manager is used by default with Node.js?", es: "¿Qué gestor de paquetes se usa por defecto con Node.js?" },
        options: { fr: ["cargo", "composer", "pip", "npm"], en: ["cargo", "composer", "pip", "npm"], es: ["cargo", "composer", "pip", "npm"] },
        answer: { fr: "npm", en: "npm", es: "npm" } }
    ]
  }

};

// Thème actif pour ce quiz individuel. Change cette valeur pour changer de thème :
// "levelUpAfrica" | "naijaBeninTrivia" | "devTrivia"
const ACTIVE_THEME = "levelUpAfrica";
