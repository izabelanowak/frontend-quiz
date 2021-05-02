let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-numberOfCorrectAnswers");
let gradeElement = document.querySelector(".js-grade");
let commentElement = document.querySelector(".js-comment");
let correctAnswersButtonElement = document.querySelector(".js-correctAnswersButton");
let answerElement = document.querySelectorAll(".js-correct");
let resultsFieldElement = document.querySelector(".js-formResults");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let correctAnswersTable = new Array(document.querySelector(".js-question1CorrectAnswer").checked,
        document.querySelector(".js-question2CorrectAnswer").checked,
        document.querySelector(".js-question3CorrectAnswer").checked,
        document.querySelector(".js-question4CorrectAnswer").checked,
        document.querySelector(".js-question5CorrectAnswer").checked,
        document.querySelector(".js-question6CorrectAnswer").checked,
        document.querySelector(".js-question7CorrectAnswer").checked,
        document.querySelector(".js-question8CorrectAnswer").checked,
        document.querySelector(".js-question9CorrectAnswer").checked,
        document.querySelector(".js-question10CorrectAnswer").checked);

    let grade;
    let comment;
    let sum = 0;
    for (let i = 0; i < 10; i++) {
        if (correctAnswersTable[i] === true) {
            sum += 1;
        };
    }
    resultsFieldElement.classList.toggle("form__results--hidden");
    resultElement.innerText = `Liczba poprawnych odpowiedzi: ${sum}`;

    switch (sum) {
        case 10:
            grade = "5 - bardzo dobry";
            comment = "Świetnie! Oby tak dalej!";
            break;
        case 9: case 8:
            grade = "4 - dobry";
            comment = "Dobrze Ci idzie! Może następnym razem będzie jeszcze lepiej?";
            break;
        case 7: case 6:
            grade = "3 - dostateczny";
            comment = "Nie jest źle, ale następnym razem postaraj się bardziej!";
            break;
        case 5:
            grade = "2 - dopuszczający";
            comment = "Musisz się bardziej postarać!";
            break;
        default:
            grade = "1 - niedostateczny";
            comment = "Kiepsko. Spróbuj jeszcze raz, a być może będzie lepiej? Trzymam kciuki!";
            break;
    }
    gradeElement.innerText = `Twoja ocena to: ${grade}`;
    commentElement.innerText = comment;

    correctAnswersButtonElement.classList.toggle("form__button--hidden");
});

correctAnswersButtonElement.addEventListener("click", () => {
    let showText = "Wyświetl poprawne odpowiedzi";
    let hideText = "Ukryj poprawne odpowiedzi";
    correctAnswersButtonElement.innerText = correctAnswersButtonElement.innerText === showText ? hideText : showText;

    for (let i = 0; i < 10; i++) {
        answerElement[i].classList.toggle("form__answerText--correct");
    }
});