/**
 * LEVEL UP AFRICA — Dictionnaire i18n (FR / EN / ES)
 * Regroupe tous les textes d'interface, les rangs et les messages de résultat.
 */

const SUPPORTED_LANGS = ["fr", "en", "es"];
const DEFAULT_LANG = "fr";

const UI_STRINGS = {
  fr: {
    rule1: "questions à choix multiple, une à la fois.",
    rule2: "secondes par question — le temps compte autant que la réponse.",
    rule3: "Chaque bonne réponse te rapproche du rang suivant, jusqu'au niveau 5.",
    startBtn: "Commencer le quiz",
    footerNote: "Level Up Africa — Projet individuel · Vacances L1 · IFRI",
    questionCount: "Question {current} / {total}",
    scoreLive: "Score : {score}",
    correctFeedback: "Bonne réponse !",
    wrongFeedback: "Mauvaise réponse.",
    timeUpFeedback: "Temps écoulé — la bonne réponse était : {answer}",
    resultScore: "Score final : <b>{score} / {total}</b> ({percent}%)",
    replayBtn: "Rejouer",
    langLabel: "Langue",
    themeLightLabel: "Mode clair",
    themeDarkLabel: "Mode sombre"
  },
  en: {
    rule1: "multiple-choice questions, one at a time.",
    rule2: "seconds per question — timing counts as much as the answer.",
    rule3: "Every right answer brings you closer to the next rank, up to level 5.",
    startBtn: "Start the quiz",
    footerNote: "Level Up Africa — Individual project · L1 vacation · IFRI",
    questionCount: "Question {current} / {total}",
    scoreLive: "Score: {score}",
    correctFeedback: "Correct answer!",
    wrongFeedback: "Wrong answer.",
    timeUpFeedback: "Time's up — the correct answer was: {answer}",
    resultScore: "Final score: <b>{score} / {total}</b> ({percent}%)",
    replayBtn: "Play again",
    langLabel: "Language",
    themeLightLabel: "Light mode",
    themeDarkLabel: "Dark mode"
  },
  es: {
    rule1: "preguntas de opción múltiple, una a la vez.",
    rule2: "segundos por pregunta — el tiempo cuenta tanto como la respuesta.",
    rule3: "Cada respuesta correcta te acerca al siguiente rango, hasta el nivel 5.",
    startBtn: "Empezar el quiz",
    footerNote: "Level Up Africa — Proyecto individual · Vacaciones L1 · IFRI",
    questionCount: "Pregunta {current} / {total}",
    scoreLive: "Puntuación: {score}",
    correctFeedback: "¡Respuesta correcta!",
    wrongFeedback: "Respuesta incorrecta.",
    timeUpFeedback: "Se acabó el tiempo — la respuesta correcta era: {answer}",
    resultScore: "Puntuación final: <b>{score} / {total}</b> ({percent}%)",
    replayBtn: "Jugar de nuevo",
    langLabel: "Idioma",
    themeLightLabel: "Modo claro",
    themeDarkLabel: "Modo oscuro"
  }
};

const RANK_TIERS_I18N = [
  {
    threshold: 0,
    icon: "seed",
    name: { fr: "Recrue Curieuse", en: "Curious Recruit", es: "Recluta Curiosa" },
    sub: { fr: "Niveau 1 / 5", en: "Level 1 / 5", es: "Nivel 1 / 5" }
  },
  {
    threshold: 20,
    icon: "spark",
    name: { fr: "Apprentie Codeuse", en: "Apprentice Coder", es: "Aprendiz de Código" },
    sub: { fr: "Niveau 2 / 5", en: "Level 2 / 5", es: "Nivel 2 / 5" }
  },
  {
    threshold: 40,
    icon: "block",
    name: { fr: "Bâtisseuse Digitale", en: "Digital Builder", es: "Constructora Digital" },
    sub: { fr: "Niveau 3 / 5", en: "Level 3 / 5", es: "Nivel 3 / 5" }
  },
  {
    threshold: 60,
    icon: "bolt",
    name: { fr: "Innovatrice Panafricaine", en: "Pan-African Innovator", es: "Innovadora Panafricana" },
    sub: { fr: "Niveau 4 / 5", en: "Level 4 / 5", es: "Nivel 4 / 5" }
  },
  {
    threshold: 80,
    icon: "rocket",
    name: { fr: "Future Elon Musk Africain·e", en: "Future African Elon Musk", es: "Futura Elon Musk Africana" },
    sub: { fr: "Niveau 5 / 5", en: "Level 5 / 5", es: "Nivel 5 / 5" }
  }
];

const RESULT_MESSAGES_I18N = [
  {
    min: 0,
    text: {
      fr: "Chaque expert a commencé quelque part. Rejoue le quiz pour ancrer ces notions et grimper de niveau.",
      en: "Every expert started somewhere. Replay the quiz to lock in these facts and level up.",
      es: "Todo experto empezó por algo. Vuelve a jugar para afianzar estos conceptos y subir de nivel."
    }
  },
  {
    min: 20,
    text: {
      fr: "Tu tiens quelque chose ! Les bases sont là, continue à explorer l'écosystème tech africain.",
      en: "You're onto something! The basics are there — keep exploring Africa's tech ecosystem.",
      es: "¡Vas por buen camino! Las bases están ahí, sigue explorando el ecosistema tecnológico africano."
    }
  },
  {
    min: 40,
    text: {
      fr: "Solide progression. Ton radar à innovation s'affine, thème après thème.",
      en: "Solid progress. Your radar for innovation is getting sharper, theme after theme.",
      es: "Buen progreso. Tu radar para la innovación se afina, tema tras tema."
    }
  },
  {
    min: 60,
    text: {
      fr: "Belle performance ! Tu connais déjà bien les acteurs qui façonnent la tech en Afrique.",
      en: "Great performance! You already know the key players shaping tech in Africa.",
      es: "¡Gran actuación! Ya conoces bien a quienes están dando forma a la tecnología en África."
    }
  },
  {
    min: 80,
    text: {
      fr: "Score exceptionnel. Statut « Future Elon Musk africain·e » débloqué — à toi de construire la suite !",
      en: "Outstanding score. \"Future African Elon Musk\" status unlocked — now go build what's next!",
      es: "Puntuación excepcional. Estatus «Futura Elon Musk africana» desbloqueado — ¡ahora te toca construir lo que sigue!"
    }
  }
];

/**
 * Remplace les {placeholders} d'une chaîne par les valeurs fournies.
 * Exemple : t("questionCount", "fr", { current: 1, total: 20 })
 */
function t(key, lang, vars) {
  const dict = UI_STRINGS[lang] || UI_STRINGS[DEFAULT_LANG];
  let str = dict[key] !== undefined ? dict[key] : (UI_STRINGS[DEFAULT_LANG][key] || "");
  if (vars) {
    Object.keys(vars).forEach((k) => {
      str = str.replace(`{${k}}`, vars[k]);
    });
  }
  return str;
}
