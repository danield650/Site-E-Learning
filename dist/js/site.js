
let questions = [
  {
    id: 1,
    question: "Algoritmii de tip greedy se caracterizeaza prin:",
    answer: "Luarea unor decizii rapide care duc la gasirea unei solutii a problemei",
    options: [
      "Luarea unor decizii rapide care duc la gasirea unei solutii a problemei",
      "Luarea unor decizii lente care duc la gasirea unei solutii sigure",
      "Luarea unor decizii anapoda care duc la gasirea unei solutii a problemei",
      "Luarea unor decizii rapide care duc la gasirea altei probleme"

    ]
  },
  {
    id: 2,
    question: "Ce inseamna numele 'greedy' ?",
    answer: "Lacom",
    options: [
      "Manios",
      "Lacom",
      "Rapid",
      "Concis"

    ]
  },
  {
    id: 3,
    question: "Care dintre urmatoarele probleme se bazeaza pe metoda greedy?",
    answer: "Problema comis-voiajorului",
    options: [
      "Cautarea binara",
      "Divide et Impera",
      "Turnurile lui Hanoi",
      "Problema comis-voiajorului"

    ]
  }
];

let question_count = 0;
let points = 0;

window.onload = function() {
  show(question_count);

};

function next() {

   
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points += 10;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
