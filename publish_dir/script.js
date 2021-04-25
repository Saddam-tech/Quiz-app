const quizData = [
  {
    question: "How old is Umidjon?",
    a: "17",
    b: "12",
    c: "15",
    d: "10",
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
    correct: "a",
  },
  {
    question: "What is the name of Umidjon`s cat?",
    a: "Keks",
    b: "Robin",
    c: "Masya",
    d: "none of the above",
    correct: "c",
  },
  {
    question:
      "What is the name of Saddam`s aunt? - who is the mother of Umidjon",
    a: "Lola",
    b: "Rahima",
    c: "Xadichaxon",
    d: "Tojixon",
    correct: "a",
  },
  {
    question: "What is Umidjon`s favorite job?",
    a: "Computer games",
    b: "Playing football",
    c: "Watching TV",
    d: "Counting vorons",
    correct: "b",
  },
  {
    question: "What is Saddam`s favorite occupation?",
    a: "Dancing",
    b: "Singing",
    c: "Software engineering",
    d: "Watching TV",
    correct: "c",
  },
  {
    question: "What is Saddam`s IELTS score?",
    a: "9.0",
    b: "5.0",
    c: "7.0",
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
