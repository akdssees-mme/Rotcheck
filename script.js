 const hamburger = document.getElementById("hamburger");
 const mobileMenu = document.getElementById("mobileMenu");

 hamburger.addEventListener("click", () => {
 hamburger.classList.toggle("active");
 mobileMenu.classList.toggle("active");
});


/* ===================== QUESTIONS (SAMPLE – REPLACE LATER) ===================== */
// ================= QUESTIONS (40 PLACEHOLDERS) =================
const QUESTIONS = [

/* ================= STYLE 1 — IMAGE (8) ================= */

    {
      id: 1,
      type: "image",
      media: "images/portugal.PNG",
      question: "Q, What country flag is this ?",
      choices: ["Italy", "Portugal", "Spain"],
      correct: 2
    },
    {
      id: 2,
      type: "image",
      media: "images/Mexico.PNG",
      question: "Q, What country flag is this ?",
      choices: ["Mexico", "Colombia", "Venezuela"],
      correct: 1
    },
    {
      id: 3,
      type: "image",
      media: "images/Germany.PNG",
      question: "Q, What country flag is this ?",
      choices: ["Germany", "France", "Belgium"],
      correct: 2
    },
    {
      id: 4,
      type: "image",
      media: "images/IMG_3310.jpg",
      question: "Q, Where is the statue of liberty ?",
      choices: ["Saudi arabia", "Dubai", "USA"],
      correct: 1
    },
    {
      id: 5,
      type: "image",
      media: "images/IMG_3312.jpg",
      question: "Q, Mount everest is in which country ?",
      choices: ["Philpines", "India", "China"],
      correct: 0
    },
    {
      id: 6,
      type: "image",
      media: "images/IMG_3313.jpg",
      question: "Q, What's the capital city of france ?",
      choices: ["London", "Paris", "Dubai"],
      correct: 2
    },
    {
      id: 7,
      type: "image",
      media: "images/IMG_3315.jpg",
      question: "Q, Egypt is in which continent ?",
      choices: ["Asia", "Africa", "Europe"],
      correct: 0
    },
    {
      id: 8,
      type: "image",
      media: "images/IMG_3316.jpg",
      question: "Q, The Great wall of china is in which country ?",
      choices: ["China", "India", "Japan"],
      correct: 1
    },
    {
      id: 9,
      type: "image",
      media: "images/IMG_3317.jpg",
      question: "Q, What's the capital city of Japan ?",
      choices: ["Bangkok", "Beijing", "Tokyo"],
      correct: 1
    },{
      id: 10,
      type: "image",
      media: "images/IMG_3318.jpg",
      question: "Q, What's the capital city of Brazil ?",
      choices: ["Brasilia", "Rio", "Sau paulo"],
      correct: 0
    },{
      id: 11,
      type: "image",
      media: "images/IMG_3319.jpg",
      question: "Q, Which country uses pounds ?",
      choices: ["USA", "United kingdom", "China"],
      correct: 2
    },{
      id: 12,
      type: "image",
      media: "images/IMG_3320.jpg",
      question: "Q, What is the longest river in the world ?",
      choices: ["Amazon", "Nile", "Yangtze"],
      correct: 0
    },{
      id: 13,
      type: "image",
      media: "images/IMG_3321.jpg",
      question: "Q, Who is this celebrity ?",
      choices: ["Brad Pitt", "Leonardo Dicaprio", "Tom Cruise"],
      correct: 0
    },{
      id: 14,
      type: "image",
      media: "images/IMG_3322.jpg",
      question: "Q, Who is this celebrity ?",
      choices: ["Emma watson", "Natalie portman", "Emma Stone"],
      correct: 0
    },{
      id: 15,
      type: "image",
      media: "images/IMG_3323.jpg",
      question: "Q, Who is this celebrity ?",
      choices: ["Johnny Depp", "Chris Evans", "Mark Ruffalo"],
      correct: 0
    },{
      id: 16,
      type: "image",
      media: "images/IMG_3324.jpg",
      question: "Q, Who is this celebrity ?",
      choices: ["Jennifer Aniston", "Orlando Bloom", "Lisa kudrow"],
      correct: 2
    },{
      id: 17,
      type: "image",
      media: "images/IMG_3325.jpg",
      question: "Q, Who is this celebrity ?",
      choices: ["Elon Musk", "jeff Bezos", "Mark Zuck"],
      correct: 0
    },{
      id: 18,
      type: "image",
      media: "images/IMG_3326.jpg",
      question: "Q, TWho is this celebrity ?",
      choices: ["Beynce", "Adele", "Rihana"],
      correct: 1
    },{
      id: 19,
      type: "image",
      media: "images/IMG_3327.jpg",
      question: "Q, Who led french after the revolution ?",
      choices: ["Elsa", "Napoleon", "Jeffery"],
      correct: 0
    },{
      id: 20,
      type: "image",
      media: "images/IMG_3328.jpg",
      question: "Q, Who crossed the atlantic in a ship ?",
      choices: ["Colombus", "Napoleon", "Patrick jones"],
      correct: 0
    },{
      id: 21,
      type: "image",
      media: "images/IMG_3329.jpg",
      question: "Q, Who was the first man to step on the moon ?",
      choices: ["Neil Armstrong", "Buzz Lightyear", "Abraham Lincoln"],
      correct: 1
    },{
      id: 22,
      type: "image",
      media: "images/IMG_3330.jpg",
      question: "Q, Who is this man ?",
      choices: ["Nelson Mandela", "Abraham lincoln", "malcolm x"],
      correct: 2
    },{
      id: 23,
      type: "image",
      media: "images/IMG_3331.jpg",
      question: "Q, Which one ruled england ?",
      choices: ["Elsa the second", "Elizabeth", "Cinderella"],
      correct: 0
    },{
      id: 24,
      type: "image",
      media: "images/IMG_3332.jpg",
      question: "Q, TWho is this celebrity ?",
      choices: ["Robert Downey", "Johnny Depp", "Iron man"],
      correct: 2
    },{
      id: 25,
      type: "image",
      media: "images/IMG_3333.jpg",
      question: "Q, TWho is this rapper ?",
      choices: ["Kanye west", "Travis scott", "DJ khaled"],
      correct: 2
    },{
      id: 26,
      type: "image",
      media: "images/IMG_3334.jpg",
      question: "Q, TWho is this rapper ?",
      choices: ["Eminem", "Justin bieber", "Elon Musk"],
      correct: 0
    },{
      id: 27,
      type: "image",
      media: "images/IMG_3335.jpg",
      question: "Q, TWho is this celebrity ?",
      choices: ["Jay z", "Eminem", "Kanye West"],
      correct: 2
    },{
      id: 28,
      type: "image",
      media: "images/IMG_3336.jpg",
      question: "Q, When did the Berlin wall fall ?",
      choices: ["1976", "1989", "1986"],
      correct: 1
    },{
      id: 29,
      type: "image",
      media: "images/IMG_3337.jpg",
      question: "Q, TWho is this rapper ?",
      choices: ["Drake", "Kendrick", "Jay z"],
      correct: 1
    },{
      id: 30,
      type: "image",
      media: "images/IMG_3338.jpg",
      question: "Q, TWho is this celebrity ?",
      choices: ["Fanum", "Kai Cennat", "Duke Dennis"],
      correct: 1
    },{
      id: 31,
      type: "image",
      media: "images/IMG_3339.jpg",
      question: "Q, Who is this player ?",
      choices: ["Iniesta", "Neymar", "Suarez"],
      correct: 2
    },{
      id: 32,
      type: "image",
      media: "images/IMG_3340.jpg",
      question: "Q, Which country's flag has a red cross on white ?",
      choices: ["Switzerland", "India", "denmark"],
      correct: 1
    },{
      id: 33,
      type: "image",
      media: "images/IMG_3342.jpg",
      question: "Q, When did the world war 2 ended ?",
      choices: ["1940", "1945", "1935"],
      correct: 0
    },{
      id: 34,
      type: "image",
      media: "images/IMG_3343.jpg",
      question: "Q, Who is this celebrity ?",
      choices: ["Adolf Hitler", "Joseph Stalin", "Donald Trump"],
      correct: 0
    },{
      id: 35,
      type: "image",
      media: "images/IMG_3344.jpg",
      question: "Q, The White House is in which country ?",
      choices: ["China", "USA", "Japan"],
      correct: 1
    },
];


/* ===================== ELEMENTS ===================== */
const quiz = document.getElementById("quiz");
const soundGate = document.getElementById("soundGate");
const timerEl = document.getElementById("timer");
const scoreEl = document.getElementById("score");
const mediaEl = document.getElementById("mediaContainer");
const questionEl = document.getElementById("questionText");
const choicesEl = document.getElementById("choices");
const timeUpEl = document.getElementById("timeUp");
const resultPopup = document.getElementById("resultPopup");

const timerSound = new Audio("sounds/Timer-sound.mp3");
const pauseSound = new Audio("sounds/pause-sound.mp3");

/* ===================== STATE ===================== */
let quizQuestions = [];
let index = 0;
let score = 0;
let timer = null;
let timeLeft = 10;
let locked = true;
let activeVideo = null;
let pauseIcon = null;

/* ===================== START ===================== */
document.getElementById("enableSound").onclick = () => {
  soundGate.classList.add("hidden");
  quiz.style.display = "block";
  startQuiz();
};

document.getElementById("restart").onclick = () => {
  resultPopup.classList.add("hidden");
  quiz.style.display = "none";
  soundGate.classList.remove("hidden");
};

/* ===================== QUIZ ===================== */
function startQuiz() {
  score = 0;
  index = 0;
  scoreEl.textContent = "0/10";
  quizQuestions = [...QUESTIONS].sort(() => Math.random() - 0.5).slice(0, 10);
  loadQuestion();
}

/* ===================== RESET ===================== */
function resetUI() {
  clearTimer();
  locked = true;
  activeVideo = null;
  pauseIcon?.remove();
  pauseIcon = null;

  mediaEl.innerHTML = "";
  questionEl.textContent = "";
  choicesEl.innerHTML = "";
}

/* ===================== LOAD ===================== */
function loadQuestion() {
  resetUI();
  const q = quizQuestions[index];

  if (q.type === "image") {
    showImage(q.media);
    showQuestion(q);
    startTimer();
  }

  if (q.type === "imageReveal") {
    showImage(q.media);
    showQuestion(q);
    startTimer();
  }

  if (q.type === "videoEnd") {
    playVideoEnd(q);
  }

  if (q.type === "videoPause") {
    playVideoPause(q);
  }

  if (q.type === "imageRevealVideo") {
    showImage(q.media);
    showQuestion(q);
    startTimer();
  }
}

/* ===================== MEDIA ===================== */
function showImage(src) {
  const img = document.createElement("img");
  img.src = src;
  mediaEl.appendChild(img);
}

function playVideoEnd(q) {
  const video = document.createElement("video");
  video.src = q.media;
  video.autoplay = true;
  video.playsInline = true;
  video.controls = false;

  mediaEl.appendChild(video);
  activeVideo = video;

  video.onended = () => {
    showQuestion(q);
    startTimer();
  };
}

function playVideoPause(q) {
  const video = document.createElement("video");
  video.src = q.media;
  video.autoplay = true;
  video.playsInline = true;

  mediaEl.appendChild(video);
  activeVideo = video;

  let paused = false;

  video.addEventListener("timeupdate", () => {
    if (!paused && video.currentTime >= q.pauseAt) {
      paused = true;
      video.pause();
      pauseSound.play();
      showPauseIcon();

      setTimeout(() => {
        showQuestion(q);
        startTimer();
      }, 1000);
    }
  });
}

/* ===================== QUESTION UI ===================== */
function showQuestion(q) {
  locked = false;
  questionEl.textContent = q.question;

  q.choices.forEach((c, i) => {
    const div = document.createElement("div");
    div.className = "choice";
    div.textContent = c;
    div.onclick = () => answer(i);
    choicesEl.appendChild(div);
  });
}

/* ===================== TIMER ===================== */
function startTimer() {
  clearTimer();
  timeLeft = 10;
  timerEl.textContent = "0:10";
  timerSound.currentTime = 0;
  timerSound.play();

  timer = setInterval(() => {
    timeLeft--;
    timerEl.textContent = `0:0${timeLeft}`;
    if (timeLeft <= 0) handleTimeout();
  }, 1000);
}

function clearTimer() {
  clearInterval(timer);
  timer = null;
  timerSound.pause();
}

/* ===================== ANSWER ===================== */
function answer(i) {
  if (locked) return;
  locked = true;
  clearTimer();
  pauseIcon?.remove();

  const q = quizQuestions[index];
  const els = document.querySelectorAll(".choice");

  els.forEach((el, idx) => {
    el.classList.add(idx === q.correct ? "correct" : "wrong");
  });

  if (i === q.correct) score++;
  scoreEl.textContent = `${score}/10`;

  if (q.type === "videoPause" && activeVideo) activeVideo.play();

  if (q.type === "imageReveal") {
    mediaEl.innerHTML = "";
    showImage(q.reveal);
  }

  if (q.type === "imageRevealVideo" && i === q.correct) {
    mediaEl.innerHTML = "";
    playVideoEnd({ media: q.revealVideo });
  }

  setTimeout(next, 2000);
}

/* ===================== TIME UP ===================== */
function handleTimeout() {
  clearTimer();
  timeUpEl.classList.remove("hidden");

  pauseIcon?.remove();
  if (activeVideo) activeVideo.play();

  setTimeout(() => {
    timeUpEl.classList.add("hidden");
    next();
  }, 2000);
}

/* ===================== FLOW ===================== */
function next() {
  index++;
  if (index < quizQuestions.length) loadQuestion();
  else setTimeout(showResult, 3000);
}


function showResult() {
  const percent = Math.round((score / 10) * 100);
  resultPopup.classList.remove("hidden");
  document.getElementById("resultPercent").textContent = percent + "%";

  if (percent <= 24) setResult("Knowledge Novice", "Looks like you might need a bit more \n brushing up time to study");
  else if (percent <= 49) setResult("Knowledge Adventurer", "You're on the right path, \n but might need a bit more practice");
  else if (percent <= 74) setResult("Knowledge Explorer", "You've got a good grasp but there's \n room to grow Keep exploring");
  else setResult("Knowledge Master", "You've got a sharp mind! Everything's \n running at peak knowledge");
}

function setResult(t, m) {
  document.getElementById("resultTitle").textContent = t;
  document.getElementById("resultMsg").textContent = m;
}

/* ===================== PAUSE ICON ===================== */
function showPauseIcon() {
  pauseIcon = document.createElement("img");
  pauseIcon.src = "icons/Pause.png";
  pauseIcon.className = "pause-icon";
  mediaEl.appendChild(pauseIcon);
}




