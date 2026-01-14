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
      media: "images/tum_tum_sahur.jpg",
      question: "Q, Who is this character ?",
      choices: ["Tum Tum Sahur", "Brr brr patapim", "Bombordilo crocodilo"],
      correct: 0
    },
    {
      id: 2,
      type: "image",
      media: "images/Brrr_patapim.jpg",
      question: "Q, Who is this character ?",
      choices: ["Crocodile", "Brrr Brrr Patapim", "Tum Tum Sahur"],
      correct: 1
    },
    {
      id: 3,
      type: "image",
      media: "images/Bombordilo_crocodilo.jpg",
      question: "What is the name ?",
      choices: ["Bombordilo Crocodilo", "Croc Meme", "Fake"],
      correct: 0
    },
    {
      id: 4,
      type: "image",
      media: "images/casius_thundercock.jpg",
      question: "Q, Who is this man ?",
      choices: ["Cassius Thundercock", "Brother noah", "Meme Guy"],
      correct: 0
    },
    {
      id: 5,
      type: "image",
      media: "images/ballerina_cappuccino.jpg",
      question: "Q, Who is this character ?",
      choices: ["Bombordilo", "Ballerina Cappuccino", "Coffee Guy"],
      correct: 1
    },
    {
      id: 6,
      type: "image",
      media: "images/diddy_name.jpg",
      question: "Q, What is the real name of this guy ?",
      choices: ["Sean Combs", "Jeffery Epstein", "Jon Jones"],
      correct: 0
    },
    {
      id: 7,
      type: "image",
      media: "images/chimpanzini_bananini.jpg",
      question: "Q, Who is this character ?",
      choices: ["Chimpanzini Baninini", "Monkey Meme", "Banana meme"],
      correct: 0
    },
    {
      id: 8,
      type: "image",
      media: "images/ref_mike.jpg",
      question: "Q, Who is this guy ?",
      choices: ["Ref Mike", "Fernandez", "Coach Jackson"],
      correct: 0
    },

    /* ================= STYLE 2 — VIDEO END (14) ================= */

    {
      id: 9,
      type: "videoEnd",
      media: "videos/kirkification.mp4",
      question: "Q, what's the term used in this type of memes ?",
      choices: ["Kirkification", "Random Clip", "No clue"],
      correct: 0
    },
    {
      id: 10,
      type: "videoEnd",
      media: "videos/niche_baby.mp4",
      question: "Q, What's the name of this baby ?",
      choices: ["Eugene", "Niche Baby", "Pumpkin baby"],
      correct: 1
    },
    {
      id: 11,
      type: "videoEnd",
      media: "videos/chopped_chin.mp4",
      question: "Q, What is the name of this meme ?",
      choices: ["Chopped Chin", "Dancing guy", "Basketball guy"],
      correct: 0
    },
    {
      id: 12,
      type: "videoEnd",
      media: "videos/gloving.mp4",
      question: "Q, What's the name of this activity ?",
      choices: ["Gloving", "Finger lights", "sparking"],
      correct: 0
    },
    {
      id: 13,
      type: "videoEnd",
      media: "videos/quandle_dingle.mp4",
      question: "Q, What's the name of this meme ?",
      choices: ["Grandpa meme", "Quandle Dingle", "What's up guys"],
      correct: 1
    },
    {
      id: 14,
      type: "videoEnd",
      media: "videos/wish_i_knew.mp4",
      question: "Q, What's the name of this meme ?",
      choices: ["Wish I Knew", "Speed noise", "alert"],
      correct: 0
    },
    {
      id: 15,
      type: "videoEnd",
      media: "videos/afia_oil.mp4",
      question: "Q, What's the name of this song ?",
      choices: ["Afia Oil", "Oil song", "Car oil"],
      correct: 0
    },
    {
      id: 16,
      type: "videoEnd",
      media: "videos/eye_of_rah.mp4",
      question: "Q, What's the name of this character ?",
      choices: ["Eye of Rah", "Egypt property", "one eye"],
      correct: 0
    },
    {
      id: 17,
      type: "videoEnd",
      media: "videos/ashton_hall.mp4",
      question: "Q, Who is this guy ?",
      choices: ["Ashton Hall", "Franklin", "Joseph jones"],
      correct: 0
    },
    {
      id: 18,
      type: "videoEnd",
      media: "videos/totea.mp4",
      question: "Q, What's the name of this meme ?",
      choices: ["Totr", "Spongbob", "Cartoon meme"],
      correct: 0
    },
    {
      id: 19,
      type: "videoEnd",
      media: "videos/your_daddy_home.mp4",
      question: "Q, What's the name of this song ?",
      choices: ["doggy dance", "Your daddy was home", "Cassette dreams"],
      correct: 1
    },
    {
      id: 20,
      type: "videoEnd",
      media: "videos/i_know_but_cant_prove.mp4",
      question: "Q, What sentense usually goes with this video ?",
      choices: ["I know but I can’t prove it", "I'm watching every thing", "I'll keep my eyes on you"],
      correct: 0
    },
    {
      id: 21,
      type: "videoEnd",
      media: "videos/epstein_theme.mp4",
      question: "Q, which person is connected to this song ?",
      choices: ["Jeffery Epstein", "Diddy", "Lebron James"],
      correct: 0
    },
    {
      id: 22,
      type: "videoEnd",
      media: "videos/khaby-mech.mp4",
      question: "Q, What's the name of this meme ?",
      choices: ["Khaby Mechanism", "khaby-robot", "AI robot"],
      correct: 0
    },

    /* ================= STYLE 3 — VIDEO PAUSE (16) ================= */

    {
      id: 23, 
      type: "videoPause",
      media: "videos/my_mom_is_kinda_homeless.mp4",
      pauseAt: 3.7,
      question: "Q, What is he about to say?",
      choices: ["My mom is kinda homeless", "Please help me", "I live with my mom"],
      correct: 0
    },
    {
      id: 24,
      type: "videoPause",
      media: "videos/nba_young_kirk.mp4",
      pauseAt: 6,
      question: "Q, What are you going to see in the next videos ?",
      choices: ["Charlie kirk edit", "NBA young kirk", "Donald trump"],
      correct: 1
    },
    {
      id: 25,
      type: "videoPause",
      media: "videos/barber_shop_haircut.mp4",
      pauseAt: 2,
      question: "Q, what's the kid about to say",
      choices: ["Barbershop Haircut", "Wish i knew", "Walk away"],
      correct: 0
    },
    {
      id: 26,
      type: "videoPause",
      media: "videos/six_seven.mp4",
      pauseAt: 2.6,
      question: "Q, what's the kid about to say",
      choices: ["Six Seven", "Six Nine", "Six sixteen"],
      correct: 0
    },
    {
      id: 27,
      type: "videoPause",
      media: "videos/whats_a_father.mp4",
      pauseAt: 3.7,
      question: "Q, What is he going to say ?",
      choices: ["What’s a father?", "Silence", "Laugh"],
      correct: 0
    },
    {
      id: 28,
      type: "videoPause",
      media: "videos/w_speed.mp4",
      pauseAt: 8,
      question: "Q, What happens next?",
      choices: ["W Speed", "speed walks away", "Speed stops"],
      correct: 0
    },
    {
      id: 29,
      type: "videoPause",
      media: "videos/beefin_in_jail.mp4",
      pauseAt: 3,
      question: "Q, What is he going to say ?",
      choices: ["Beefin with my chick", "A chick fill a", "That's not him"],
      correct: 0
    },
    {
      id: 30,
      type: "videoPause",
      media: "videos/but_when_iiii.mp4",
      pauseAt: 7.5,
      question: "Q, What is he going to say next ?",
      choices: ["But when iiii", "But every time", "I get negative aura"],
      correct: 0
    },
    {
      id: 31,
      type: "videoPause",
      media: "videos/ali_nice_guy.mp4",
      pauseAt: 5.8,
      question: "Q, What is he going to say next ?",
      choices: ["Ali you are a nice guy", "Ali calm dow", "Ali listen to me"],
      correct: 0
    },
    {
      id: 32,
      type: "videoPause",
      media: "videos/what_up_youtu.mp4",
      pauseAt: 0.7,
      question: "Q, What is she going to say next ?",
      choices: ["You tub tub", "Guys i miss you", "Tiktok"],
      correct: 0
    },
    {
      id: 33,
      type: "videoPause",
      media: "videos/one_two_three_release.mp4",
      pauseAt: 6.5,
      question: "Q, What is she going to say next ?",
      choices: ["123 Release them", "123 sing with me", "123 shoot them"],
      correct: 0
    },
    {
      id: 34,
      type: "videoPause",
      media: "videos/dax_up_down.mp4",
      pauseAt: 3.8,
      question: "Finish the lyric ?",
      choices: ["Up Down", "Left Right", "Down up"],
      correct: 0
    },
    {
      id: 35,
      type: "videoPause",
      media: "videos/23_years_Dagestan.mp4",
      pauseAt: 3.7,
      question: "Q, What is he going to say next ?",
      choices: ["Send him Dagestan", "Start training him", "Send him to the gym"],
      correct: 0
    },
    {
      id: 36,
      type: "videoPause",
      media: "videos/chicken_jockey.mp4",
      pauseAt: 4.1,
      question: "Q, What is he going to say next ?",
      choices: ["Chicken Jockey", "Chiknen egg", "Chicken sandwich"],
      correct: 0
    },
    {
      id: 37,
      type: "videoPause",
      media: "videos/world_fastest_67.mp4",
      pauseAt: 6,
      question: "Q, What is he going to do next ?",
      choices: ["Fastest 67", "Shout", "Longest breath"],
      correct: 0
    },
    {
      id: 38,
      type: "videoPause",
      media: "videos/stole_that_shit.mp4",
      pauseAt: 2.3,
      question: "Q, What is he going to say next ?",
      choices: ["Stole that shit", "It was mine", "I did'nt do that"],
      correct: 0
    },
    {
      id: 39,
      type: "videoPause",
      media: "videos/Chick_fil_a_song.mp4",
      pauseAt: 0.2,
      question: "Q, What is he going to say next ?",
      choices: ["Eat this chick fill a", "Eat chicken nuggets", "Eat fried Chickens"],
      correct: 0
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


/* ===================== RESULT ===================== */
function showResult() {
  const percent = Math.round((score / 10) * 100);
  resultPopup.classList.remove("hidden");
  document.getElementById("resultPercent").textContent = percent + "%";

  if (percent <= 24) setResult("Neural balance", "Cognitive systems operating within \n normal parameters");
  else if (percent <= 49) setResult("Cognitive drift", "Attention is fragmented but \n core function remains intact");
  else if (percent <= 74) setResult("Neural fatigue", "Recovery is possible, but \n further exposure is not advised");
  else setResult("Cognitive collapse", "Prolonged exposure to online stimuli has \n resulted in mental failure");
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


