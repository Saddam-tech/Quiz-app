const quizData = [
  {
    question: "What is the capital of Chile?",
    a: "Ben Nevis",
    b: "Berna",
    c: "Santiago",
    d: "Nile",
    correct: "c",
  },
  {
    question: "What is the most used programming language in 2019?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "Who is the President of US in 2021?",
    a: "Florin Pop",
    b: "Donald Trump",
    c: "Joe Biden",
    d: "Ivan Saldano",
    correct: "c",
  },
  {
    question: "What does HTML stand for?",
    a: "Helicopters Terminals Motorboats Lamborghinis",
    b: "Hypertext Markup Language",
    c: "Cascading Style Sheet",
    d: "Jason Object Notation",
    correct: "b",
  },
  {
    question: "What is the highest mountain in Britain?",
    a: "Everest",
    b: "On g`or",
    c: "Ben Nevis",
    d: "Achasan",
    correct: "c",
  },
  {
    question: "What is the smallest country in the world?",
    a: "Vatican",
    b: "Kazakhstan",
    c: "Poland",
    d: "none of the above",
    correct: "a",
  },
  {
    question: "What are the 5 colors of Olympic rings?",
    a: "Blue, yellow, black, green and red",
    b: "Purple, green, black, red, orange",
    c: "All of the same color",
    d: "none of the above",
    correct: "a",
  },
  {
    question:
      "Which horse is the only three-time winner of the Grand National?",
    a: "Black Panther",
    b: "White shadow",
    c: "Red Rum",
    d: "Ronald",
    correct: "c",
  },
  {
    question: "In golf, where does the Masters take place?",
    a: "Grand Avenue",
    b: "Britain Park",
    c: "Augusta National",
    d: "none of the above",
    correct: "c",
  },
];
// const parentUl = document.querySelector(".parent_ul");
const quiz = document.getElementById("quiz");
const answersEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const submitBtn = document.getElementById("submit");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const parent_el = document.querySelector(".parent-el");
const uls = document.querySelectorAll(".child-el");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  uls.forEach((ul) => (ul.style.background = "white"));

  parent_el.addEventListener("click", (e) => {
    const answer = getSelected();
    const ul = e.target.closest(".child-el");
    if (answer === quizData[currentQuiz].correct) {
      console.log("Data");
      ul.style.background = "blue";
    } else {
      ul.style.background = "red";
    }
  });

  const currentQuizData = quizData[currentQuiz];
  questionEl.innerHTML = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answersEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselectAnswers() {
  answersEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  //check to see the answer
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      //TODO: show results
      quiz.innerHTML = `
      <h2>
      You answered correctly to ${score}/${quizData.length} questions</h2> 
      
      <button onclick="location.reload()">
      Reload
      </button>
      
      `;
    }
  }
});
