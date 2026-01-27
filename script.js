const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
hamburger.classList.toggle("active");
mobileMenu.classList.toggle("active");
            });
// List of questions/images (40 total)
const questions = [
{ img: 'images/IMG_3508.jpg', type: 'politician', name: 'Milan Knezevich', info: 'Memeber of the parliament of Montenegro' },
{ img: 'images/IMG_3509.jpg', type: 'politician', name: 'Zsolt Semjen', info: 'Deputy PM of Hungary' },
{ img: 'images/IMG_3510.jpg', type: 'politician', name: 'Robert Kalinak', info: 'Deputy PM of the Solvak' },
{ img: 'images/IMG_3511.jpg', type: 'politician', name: 'Ivan Malenicia', info: 'Memeber Croatian parliament' },
{ img: 'images/IMG_3512.jpg', type: 'politician', name: 'Darko Harvart', info: 'Former Minister of assets of Croatia' },
{ img: 'images/IMG_3513.jpg', type: 'politician', name: 'Bheki Cele', info: 'Former minister of police of S.Africa' },
{ img: 'images/IMG_3514.jpg', type: 'politician', name: 'Fikile Mbalula', info: 'Former minister of police of S.Africa' },
{ img: 'images/IMG_3515.jpg', type: 'politician', name: 'Abdulrazak Gurnah', info: 'Tanzanian novalist and academic' },
{ img: 'images/IMG_3516.jpg', type: 'politician', name: 'Ahmed Maiteeq', info: 'Former PM of Libya' },
{ img: 'images/IMG_3517.JPG', type: 'politician', name: 'Hadi Al-Amiri', info: 'Member of the council of Iraq' },
{ img: 'images/IMG_3518.jpg', type: 'politician', name: 'Luis Fernando', info: 'Governor of Santa Cruz Department' },
{ img: 'images/IMG_3519.jpg', type: 'politician', name: 'Manuel Baldizon', info: 'Former member of the congress of Gutamala' },
{ img: 'images/IMG_3520.jpg', type: 'politician', name: 'Fransisco santos', info: 'Former vice president of Colombia' },
{ img: 'images/IMG_3522.JPG', type: 'politician', name: 'Bongani Bongo', info: 'Former minister of security of S.Africa' },
{ img: 'images/IMG_3523.jpg', type: 'politician', name: 'Sakaja Johnson', info: 'Governor of Nairobi Country' },
{ img: 'images/IMG_3527.jpg', type: 'politician', name: 'Nomvula mokon', info: 'Former minister of technology of S.Africa' },
{ img: 'images/IMG_3486.jpg', type: 'politician', name: 'Abdulghani Baradar', info: 'Deputy PM for Economic Affair of Afganistan' },
{ img: 'images/IMG_3504.GIF', type: 'politician', name: 'Eduardo Leite', info: 'Governor of Rio Grando Do Sul' },
{ img: 'images/IMG_3506.jpg', type: 'politician', name: 'Andres Babis', info: 'PM Minister of the Czech Republic' },
{ img: 'images/IMG_3507.jpg', type: 'politician', name: 'Herman Mashaba', info: 'President of ActionSA' },

{ img: 'images/IMG_3529.jpg', type: 'criminal', name: 'Joseph Anthony', info: 'Italian-American mobster' },
{ img: 'images/IMG_3530.JPG', type: 'criminal', name: 'Bhadreshkumar', info: 'Killed his own wife' },
{ img: 'images/IMG_3531.jpg', type: 'criminal', name: 'Yulan Adonay', info: 'Leader of MS-13' },
{ img: 'images/IMG_3532.jpg', type: 'criminal', name: 'Ruja Ignatova', info: 'Leading a $4 Billion money laundering scheme' },
{ img: 'images/IMG_3533.jpg', type: 'criminal', name: 'Ryan Weeding', info: 'Drug trafficking and oredering multiple murders' },
{ img: 'images/IMG_3534.JPG', type: 'criminal', name: 'Roman Semenov', info: 'Launder over $1 Billion' },
{ img: 'images/IMG_3535.jpg', type: 'criminal', name: 'Robert William', info: 'Killed his wife, two childrens and blowed their home' },
{ img: 'images/IMG_3536.jpg', type: 'criminal', name: 'Donald Eugene', info: 'Sex trafficking of childrens' },
{ img: 'images/IMG_3538.jpg', type: 'criminal', name: 'Yasser Said', info: 'Killed his two daughters' },
{ img: 'images/IMG_3539.jpg', type: 'criminal', name: 'Arnold Jimenez', info: 'Killed his wife on the wedding night' },
{ img: 'images/IMG_3541.jpg', type: 'criminal', name: 'Erik Kristian', info: 'A convicted child molester' },
{ img: 'images/IMG_3542.jpg', type: 'criminal', name: 'Fausto Esidro', info: 'Distribution of heroin, cocaine and meth' },
{ img: 'images/IMG_3544.jpg', type: 'criminal', name: 'Sidney Rodriguez', info: 'Murdered her own 3-years old son' },
{ img: 'images/IMG_3545.jpg', type: 'criminal', name: 'Ted Bundy', info: 'Confessed to killing 30 people' },
{ img: 'images/IMG_3546.jpg', type: 'criminal', name: 'Jeffery Dahmer', info: 'Serial killer, killed 17 people' },
{ img: 'images/IMG_3548.jpg', type: 'criminal', name: 'Timothy McVeigh', info: 'Oklohama city bombing' },
{ img: 'images/IMG_3550.jpg', type: 'criminal', name: 'Nikolas Cruz', info: 'Shot 14 students and 3 staff members' },
{ img: 'images/IMG_3551.jpg', type: 'criminal', name: 'Matt de Grood', info: 'Commited and attack on a university' },
{ img: 'images/IMG_3552.jpg', type: 'criminal', name: 'Andres Breivik', info: 'Mass murderer, killed 69 people' },
{ img: 'images/File_032.png', type: 'criminal', name: 'Giovanni Vicenete', info: 'International drug distributer' },

 




// Add all 40 questions here in the same format
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}


shuffleArray(questions);

let currentIndex = 0;
let correctAnswers = 0;

const imgEl = document.getElementById('question-img');
const loadingEl = document.getElementById('loading-text');
const answerEl = document.getElementById('answer');
const politicianBtn = document.getElementById('politician-btn');
const criminalBtn = document.getElementById('criminal-btn');
const nextBtn = document.getElementById('next-btn');
const questionNumberEl = document.getElementById('question-number');
const correctCountEl = document.getElementById('correct-count');

// Show current question
function showQuestion() {
if (currentIndex < questions.length) {
// Update counters
questionNumberEl.textContent = `Question: ${currentIndex + 1} / ${questions.length}`;
correctCountEl.textContent = `Correct Answers: ${correctAnswers}`;

// Reset answer and next button
answerEl.innerHTML = '';
nextBtn.style.display = 'none';
politicianBtn.disabled = false;
criminalBtn.disabled = false;

// Show loading text
loadingEl.style.display = 'block';
imgEl.style.display = 'none';

// Load image
imgEl.src = questions[currentIndex].img;
imgEl.onload = () => {
loadingEl.style.display = 'none';
imgEl.style.display = 'block';
};
} else {
// Game completed
imgEl.style.display = 'none';
loadingEl.style.display = 'none';
answerEl.innerHTML = `<h2>Game Over!</h2><p>You got ${correctAnswers} out of ${questions.length} correct!</p>`;
politicianBtn.style.display = 'none';
criminalBtn.style.display = 'none';
nextBtn.style.display = 'none';
}
}

// Handle user choice
function handleChoice(choice) {
const q = questions[currentIndex];
const isCorrect = choice === q.type;
if (isCorrect) correctAnswers++;

// Show feedback
answerEl.innerHTML = `
<div class="feedback" style="color: ${isCorrect ? 'blue' : 'red'}; font-weight: bold; font-size: 18px;">
${isCorrect ? 'Correct!' : 'Wrong!'}
</div>
<div class="name">${q.name}</div>
<div class="info">${q.info}</div>
`;

// Disable buttons and show next button
politicianBtn.disabled = true;
criminalBtn.disabled = true;
nextBtn.style.display = 'inline-block';

// Update correct answers counter immediately
correctCountEl.textContent = `Correct Answers: ${correctAnswers}`;
}

// Go to next question
function nextQuestion() {
currentIndex++;
showQuestion();
}

// Event listeners
politicianBtn.addEventListener('click', () => handleChoice('politician'));
criminalBtn.addEventListener('click', () => handleChoice('criminal'));
nextBtn.addEventListener('click', nextQuestion);

// Start the game immediately
showQuestion();

