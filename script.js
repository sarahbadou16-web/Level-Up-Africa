/**
 * LEVEL UP AFRICA — Quiz Culture Tech & Innovation Africaine
 * Logique JS vanilla — aucune librairie externe.
 * Gère aussi la langue (FR/EN/ES) et le mode clair/sombre.
 */

// ---------------------------------------------------------
// Configuration
// ---------------------------------------------------------
const SECONDS_PER_QUESTION = 15;

const BADGE_ICONS = {
  seed: '<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="4" fill="currentColor"/></svg>',
  spark: '<svg viewBox="0 0 24 24" fill="none"><path d="M12 3v6M12 15v6M3 12h6M15 12h6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  block: '<svg viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="7" height="7" fill="currentColor"/><rect x="13" y="4" width="7" height="7" fill="currentColor" opacity="0.5"/><rect x="4" y="13" width="7" height="7" fill="currentColor" opacity="0.5"/><rect x="13" y="13" width="7" height="7" fill="currentColor"/></svg>',
  bolt: '<svg viewBox="0 0 24 24" fill="none"><path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" fill="currentColor"/></svg>',
  rocket: '<svg viewBox="0 0 24 24" fill="none"><path d="M12 2c3 2 5 6 5 10 0 2-1 4-2 5l-1 3-2-2-2 2-1-3c-1-1-2-3-2-5 0-4 2-8 5-10z" fill="currentColor"/><circle cx="12" cy="10" r="1.6" fill="var(--bg,#0b0f1a)"/></svg>'
};

const START_TITLES = {
  fr: 'Deviens le/la <span>Future Elon Musk</span> africain·e',
  en: 'Become the next <span>African Elon Musk</span>',
  es: 'Conviértete en la próxima <span>Elon Musk africana</span>'
};

// ---------------------------------------------------------
// Language & theme (persisted preferences)
// ---------------------------------------------------------
let currentLang = localStorage.getItem("lua-lang") || DEFAULT_LANG;
if (!SUPPORTED_LANGS.includes(currentLang)) currentLang = DEFAULT_LANG;

let currentVisualTheme = localStorage.getItem("lua-visual-theme") || "dark";

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
  startTitle: document.getElementById("start-title"),
  totalQuestionsStart: document.getElementById("total-questions-start"),
  secondsPerQuestion: document.getElementById("seconds-per-question"),
  rule1Text: document.getElementById("rule1-text"),
  rule2Text: document.getElementById("rule2-text"),
  rule3Text: document.getElementById("rule3-text"),
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
  replayBtn: document.getElementById("replay-btn"),

  footerNotes: document.querySelectorAll(".footer-note"),
  langBtns: document.querySelectorAll(".lang-btn"),
  themeToggle: document.getElementById("theme-toggle")
};

const KEYS = ["A", "B", "C", "D"];

// ---------------------------------------------------------
// Screen navigation
// ---------------------------------------------------------
function showScreen(name) {
  Object.values(screens).forEach((s) => s.classList.remove("is-active"));
  screens[name].classList.add("is-active");
}

function isScreenActive(name) {
  return screens[name].classList.contains("is-active");
}

// ---------------------------------------------------------
// Language application
// ---------------------------------------------------------
function applyStaticTexts() {
  document.documentElement.lang = currentLang;

  el.themeLabel.textContent = theme.label[currentLang];
  el.themeTagline.textContent = theme.tagline[currentLang];
  el.startTitle.innerHTML = START_TITLES[currentLang];
  el.totalQuestionsStart.textContent = questions.length;
  el.secondsPerQuestion.textContent = SECONDS_PER_QUESTION;
  el.rule1Text.textContent = t("rule1", currentLang);
  el.rule2Text.textContent = t("rule2", currentLang);
  el.rule3Text.textContent = t("rule3", currentLang);
  el.startBtn.textContent = t("startBtn", currentLang);
  el.replayBtn.textContent = t("replayBtn", currentLang);
  el.footerNotes.forEach((node) => (node.textContent = t("footerNote", currentLang)));

  el.langBtns.forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.lang === currentLang);
  });

  const toggleLabel =
    currentVisualTheme === "dark" ? t("themeLightLabel", currentLang) : t("themeDarkLabel", currentLang);
  el.themeToggle.setAttribute("aria-label", toggleLabel);
  el.themeToggle.title = toggleLabel;
}

function refreshDynamicTexts() {
  setRankDisplay(selectedRankIndex);

  if (isScreenActive("quiz")) {
    el.questionCount.textContent = t("questionCount", currentLang, {
      current: currentIndex + 1,
      total: questions.length
    });
    el.scoreLive.textContent = t("scoreLive", currentLang, { score: correctCount });

    const q = questions[currentIndex];
    if (q) {
      el.questionText.textContent = q.question[currentLang];
      [...el.optionsGrid.children].forEach((btn, i) => {
        const label = btn.querySelector("span:last-child");
        if (label) label.textContent = q.options[currentLang][i];
      });
    }
  }

  if (isScreenActive("result")) {
    renderResultTexts();
  }
}

function setLanguage(lang) {
  if (!SUPPORTED_LANGS.includes(lang) || lang === currentLang) return;
  currentLang = lang;
  localStorage.setItem("lua-lang", lang);
  applyStaticTexts();
  refreshDynamicTexts();
}

// ---------------------------------------------------------
// Visual theme (dark / light)
// ---------------------------------------------------------
function applyVisualTheme() {
  document.documentElement.setAttribute("data-visual-theme", currentVisualTheme);
  const toggleLabel =
    currentVisualTheme === "dark" ? t("themeLightLabel", currentLang) : t("themeDarkLabel", currentLang);
  el.themeToggle.setAttribute("aria-label", toggleLabel);
  el.themeToggle.title = toggleLabel;
}

function toggleVisualTheme() {
  currentVisualTheme = currentVisualTheme === "dark" ? "light" : "dark";
  localStorage.setItem("lua-visual-theme", currentVisualTheme);
  applyVisualTheme();
}

// ---------------------------------------------------------
// Rank meter (signature element)
// ---------------------------------------------------------
function buildRankMeterTicks() {
  el.rankMeter.innerHTML = "";
  RANK_TIERS_I18N.forEach((_, i) => {
    const tick = document.createElement("div");
    tick.className = "tick" + (i === RANK_TIERS_I18N.length - 1 ? " is-final" : "");
    tick.dataset.index = i;
    el.rankMeter.appendChild(tick);
  });
}

function getRankForPercent(percent) {
  let idx = 0;
  RANK_TIERS_I18N.forEach((tier, i) => {
    if (percent >= tier.threshold) idx = i;
  });
  return idx;
}

function setRankDisplay(rankIndex) {
  const tier = RANK_TIERS_I18N[rankIndex];
  el.rankBadge.innerHTML = BADGE_ICONS[tier.icon];
  el.rankBadge.style.color = rankIndex === RANK_TIERS_I18N.length - 1 ? "var(--gold)" : "var(--text)";
  el.rankName.textContent = tier.name[currentLang];
  el.rankSub.textContent = tier.sub[currentLang];

  [...el.rankMeter.children].forEach((tick, i) => {
    tick.classList.toggle("is-filled", i <= rankIndex);
  });
}

function updateRankMeterLive() {
  const answered = currentIndex;
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
  el.questionCount.textContent = t("questionCount", currentLang, {
    current: currentIndex + 1,
    total: questions.length
  });
  el.scoreLive.textContent = t("scoreLive", currentLang, { score: correctCount });
  el.progressFill.style.width = `${(currentIndex / questions.length) * 100}%`;
  el.questionText.textContent = q.question[currentLang];

  el.optionsGrid.innerHTML = "";
  q.options[currentLang].forEach((option, i) => {
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
  const correctAnswer = q.answer[currentLang];
  const isCorrect = selectedOption === correctAnswer;

  [...el.optionsGrid.children].forEach((btn) => {
    btn.disabled = true;
    const label = btn.querySelector("span:last-child").textContent;
    if (label === correctAnswer) btn.classList.add("is-correct");
    else if (btn === clickedBtn) btn.classList.add("is-wrong");
  });

  if (isCorrect) {
    correctCount += 1;
    el.feedbackLine.textContent = t("correctFeedback", currentLang);
    el.feedbackLine.classList.add("correct");
  } else if (selectedOption === null) {
    el.feedbackLine.textContent = t("timeUpFeedback", currentLang, { answer: correctAnswer });
    el.feedbackLine.classList.add("wrong");
  } else {
    el.feedbackLine.textContent = t("wrongFeedback", currentLang);
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

function renderResultTexts() {
  const percent = Math.round((correctCount / questions.length) * 100);
  const rankIndex = getRankForPercent(percent);
  const tier = RANK_TIERS_I18N[rankIndex];
  const message = [...RESULT_MESSAGES_I18N].reverse().find((m) => percent >= m.min).text[currentLang];

  el.resultBadge.innerHTML = BADGE_ICONS[tier.icon];
  el.resultBadge.style.color = rankIndex === RANK_TIERS_I18N.length - 1 ? "var(--gold)" : "var(--text)";
  el.resultRank.textContent = tier.name[currentLang];
  el.resultScore.innerHTML = t("resultScore", currentLang, {
    score: correctCount,
    total: questions.length,
    percent
  });
  el.resultMessage.textContent = message;
}

function finishQuiz() {
  clearInterval(timerId);
  el.progressFill.style.width = "100%";
  renderResultTexts();
  showScreen("result");
}

function escapeHTML(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

// ---------------------------------------------------------
// Init
// ---------------------------------------------------------
applyVisualTheme();
buildRankMeterTicks();
applyStaticTexts();
setRankDisplay(0);

// ---------------------------------------------------------
// Events
// ---------------------------------------------------------
el.startBtn.addEventListener("click", startQuiz);
el.replayBtn.addEventListener("click", startQuiz);
el.themeToggle.addEventListener("click", toggleVisualTheme);
el.langBtns.forEach((btn) => {
  btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
});
