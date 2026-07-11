/**
 * LEVEL UP AFRICA — Quiz Culture Tech & Innovation Africaine
 * Logique JS vanilla — aucune librairie externe.
 */

// ---------------------------------------------------------
// Configuration
// ---------------------------------------------------------
const SECONDS_PER_QUESTION = 15;

const RANK_TIERS = [
  {
    threshold: 0,
    name: "Recrue Curieuse",
    sub: "Niveau 1 / 5",
    icon: "seed"
  },
  {
    threshold: 20,
    name: "Apprentie Codeuse",
    sub: "Niveau 2 / 5",
    icon: "spark"
  },
  {
    threshold: 40,
    name: "Bâtisseuse Digitale",
    sub: "Niveau 3 / 5",
    icon: "block"
  },
  {
    threshold: 60,
    name: "Innovatrice Panafricaine",
    sub: "Niveau 4 / 5",
    icon: "bolt"
  },
  {
    threshold: 80,
    name: "Future Elon Musk Africain·e",
    sub: "Niveau 5 / 5",
    icon: "rocket"
  }
];

const RESULT_MESSAGES = [
  { min: 0, text: "Chaque expert a commencé quelque part. Rejoue le quiz pour ancrer ces notions et grimper de niveau." },
  { min: 20, text: "Tu tiens quelque chose ! Les bases sont là, continue à explorer l'écosystème tech africain." },
  { min: 40, text: "Solide progression. Ton radar à innovation s'affine, thème après thème." },
  { min: 60, text: "Belle performance ! Tu connais déjà bien les acteurs qui façonnent la tech en Afrique." },
  { min: 80, text: "Score exceptionnel. Statut « Future Elon Musk africain·e » débloqué — à toi de construire la suite !" }
];

const BADGE_ICONS = {
  seed: '<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="4" fill="currentColor"/></svg>',
  spark: '<svg viewBox="0 0 24 24" fill="none"><path d="M12 3v6M12 15v6M3 12h6M15 12h6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  block: '<svg viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="7" height="7" fill="currentColor"/><rect x="13" y="4" width="7" height="7" fill="currentColor" opacity="0.5"/><rect x="4" y="13" width="7" height="7" fill="currentColor" opacity="0.5"/><rect x="13" y="13" width="7" height="7" fill="currentColor"/></svg>',
  bolt: '<svg viewBox="0 0 24 24" fill="none"><path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" fill="currentColor"/></svg>',
  rocket: '<svg viewBox="0 0 24 24" fill="none"><path d="M12 2c3 2 5 6 5 10 0 2-1 4-2 5l-1 3-2-2-2 2-1-3c-1-1-2-3-2-5 0-4 2-8 5-10z" fill="currentColor"/><circle cx="12" cy="10" r="1.6" fill="var(--bg,#0b0f1a)"/></svg>'
};

// ---------------------------------------------------------
// State
// ---------------------------------------------------------
const theme = quizThemes[ACTIVE_THEME];
const questions = theme.questions;

let currentIndex = 0;
let correctCount = 0;
let selectedRankIndex = 0;
let timerId = null;
let timeLeft = SECONDS_PER_QUESTION;
let answerLocked = false;

// ---------------------------------------------------------
// DOM references
// ---------------------------------------------------------
const screens = {
  start: document.getElementById("screen-start"),
  quiz: document.getElementById("screen-quiz"),
  result: document.getElementById("screen-result")
};

const el = {
  themeLabel: document.getElementById("theme-label"),
  themeTagline: document.getElementById("theme-tagline"),
  totalQuestionsStart: document.getElementById("total-questions-start"),
  startBtn: document.getElementById("start-btn"),

  rankBadge: document.getElementById("rank-badge"),
  rankName: document.getElementById("rank-name"),
  rankSub: document.getElementById("rank-sub"),
  rankMeter: document.getElementById("rank-meter"),
  timer: document.getElementById("timer"),

  questionCount: document.getElementById("question-count"),
  scoreLive: document.getElementById("score-live"),
  progressFill: document.getElementById("progress-fill"),
  questionText: document.getElementById("question-text"),
  optionsGrid: document.getElementById("options-grid"),
  feedbackLine: document.getElementById("feedback-line"),

  resultBadge: document.getElementById("result-badge"),
  resultRank: document.getElementById("result-rank"),
  resultScore: document.getElementById("result-score"),
  resultMessage: document.getElementById("result-message"),
  replayBtn: document.getElementById("replay-btn")
};

const KEYS = ["A", "B", "C", "D"];

// ---------------------------------------------------------
// Init static content
// ---------------------------------------------------------
el.themeLabel.textContent = theme.label;
el.themeTagline.textContent = theme.tagline;
el.totalQuestionsStart.textContent = questions.length;

buildRankMeterTicks();
setRankDisplay(0);

// ---------------------------------------------------------
// Screen navigation
// ---------------------------------------------------------
function showScreen(name) {
  Object.values(screens).forEach((s) => s.classList.remove("is-active"));
  screens[name].classList.add("is-active");
}

// ---------------------------------------------------------
// Rank meter (signature element)
// ---------------------------------------------------------
function buildRankMeterTicks() {
  el.rankMeter.innerHTML = "";
  RANK_TIERS.forEach((_, i) => {
    const tick = document.createElement("div");
    tick.className = "tick" + (i === RANK_TIERS.length - 1 ? " is-final" : "");
    tick.dataset.index = i;
    el.rankMeter.appendChild(tick);
  });
}

function getRankForPercent(percent) {
  let idx = 0;
  RANK_TIERS.forEach((tier, i) => {
    if (percent >= tier.threshold) idx = i;
  });
  return idx;
}

function setRankDisplay(rankIndex) {
  const tier = RANK_TIERS[rankIndex];
  el.rankBadge.innerHTML = BADGE_ICONS[tier.icon];
  el.rankBadge.style.color = rankIndex === RANK_TIERS.length - 1 ? "var(--gold)" : "var(--text)";
  el.rankName.textContent = tier.name;
  el.rankSub.textContent = tier.sub;

  [...el.rankMeter.children].forEach((tick, i) => {
    tick.classList.toggle("is-filled", i <= rankIndex);
  });
}

function updateRankMeterLive() {
  const answered = currentIndex; // questions fully answered so far
  const percent = answered === 0 ? 0 : Math.round((correctCount / answered) * 100);
  const rankIndex = answered === 0 ? 0 : getRankForPercent(percent);
  if (rankIndex !== selectedRankIndex) {
    selectedRankIndex = rankIndex;
    el.rankBadge.style.transform = "scale(1.15)";
    setTimeout(() => (el.rankBadge.style.transform = "scale(1)"), 220);
  }
  setRankDisplay(selectedRankIndex);
}

// ---------------------------------------------------------
// Quiz flow
// ---------------------------------------------------------
function startQuiz() {
  currentIndex = 0;
  correctCount = 0;
  selectedRankIndex = 0;
  setRankDisplay(0);
  showScreen("quiz");
  renderQuestion();
}

function renderQuestion() {
  answerLocked = false;
  el.feedbackLine.textContent = "";
  el.feedbackLine.className = "feedback-line";

  const q = questions[currentIndex];
  el.questionCount.textContent = `Question ${currentIndex + 1} / ${questions.length}`;
  el.scoreLive.textContent = `Score : ${correctCount}`;
  el.progressFill.style.width = `${(currentIndex / questions.length) * 100}%`;
  el.questionText.textContent = q.question;

  el.optionsGrid.innerHTML = "";
  q.options.forEach((option, i) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.innerHTML = `<span class="key">${KEYS[i]}</span><span>${escapeHTML(option)}</span>`;
    btn.addEventListener("click", () => handleAnswer(option, btn));
    el.optionsGrid.appendChild(btn);
  });

  startTimer();
}

function startTimer() {
  clearInterval(timerId);
  timeLeft = SECONDS_PER_QUESTION;
  el.timer.textContent = timeLeft;
  el.timer.classList.remove("is-low");

  timerId = setInterval(() => {
    timeLeft -= 1;
    el.timer.textContent = Math.max(timeLeft, 0);
    if (timeLeft <= 5) el.timer.classList.add("is-low");
    if (timeLeft <= 0) {
      clearInterval(timerId);
      if (!answerLocked) handleAnswer(null, null);
    }
  }, 1000);
}

function handleAnswer(selectedOption, clickedBtn) {
  if (answerLocked) return;
  answerLocked = true;
  clearInterval(timerId);

  const q = questions[currentIndex];
  const isCorrect = selectedOption === q.answer;

  [...el.optionsGrid.children].forEach((btn) => {
    btn.disabled = true;
    const label = btn.querySelector("span:last-child").textContent;
    if (label === q.answer) btn.classList.add("is-correct");
    else if (btn === clickedBtn) btn.classList.add("is-wrong");
  });

  if (isCorrect) {
    correctCount += 1;
    el.feedbackLine.textContent = "Bonne réponse !";
    el.feedbackLine.classList.add("correct");
  } else if (selectedOption === null) {
    el.feedbackLine.textContent = `Temps écoulé — la bonne réponse était : ${q.answer}`;
    el.feedbackLine.classList.add("wrong");
  } else {
    el.feedbackLine.textContent = "Mauvaise réponse.";
    el.feedbackLine.classList.add("wrong");
  }

  currentIndex += 1;
  updateRankMeterLive();

  setTimeout(() => {
    if (currentIndex < questions.length) {
      renderQuestion();
    } else {
      finishQuiz();
    }
  }, 1100);
}

function finishQuiz() {
  clearInterval(timerId);
  el.progressFill.style.width = "100%";

  const percent = Math.round((correctCount / questions.length) * 100);
  const rankIndex = getRankForPercent(percent);
  const tier = RANK_TIERS[rankIndex];
  const message = [...RESULT_MESSAGES].reverse().find((m) => percent >= m.min).text;

  el.resultBadge.innerHTML = BADGE_ICONS[tier.icon];
  el.resultBadge.style.color = rankIndex === RANK_TIERS.length - 1 ? "var(--gold)" : "var(--text)";
  el.resultRank.textContent = tier.name;
  el.resultScore.innerHTML = `Score final : <b>${correctCount} / ${questions.length}</b> (${percent}%)`;
  el.resultMessage.textContent = message;

  showScreen("result");
}

function escapeHTML(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

// ---------------------------------------------------------
// Events
// ---------------------------------------------------------
el.startBtn.addEventListener("click", startQuiz);
el.replayBtn.addEventListener("click", startQuiz);
