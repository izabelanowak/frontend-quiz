let formElement = document.querySelector(".form");
let resultElement = document.querySelector(".js-number-of-correct-answers");
let gradeElement = document.querySelector(".js-grade");
let commentElement = document.querySelector(".js-comment");
let showCorrectAnswers = document.querySelector(".js-correctAnswersButton");
let answerElement = document.querySelectorAll(".js-correct");
let resultsField = document.querySelector(".form__results");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let checkCorrectAnswers = new Array(document.querySelector(".js-question1-correct-answer").checked,
        document.querySelector(".js-question2-correct-answer").checked,
        document.querySelector(".js-question3-correct-answer").checked,
        document.querySelector(".js-question4-correct-answer").checked,
        document.querySelector(".js-question5-correct-answer").checked,
        document.querySelector(".js-question6-correct-answer").checked,
        document.querySelector(".js-question7-correct-answer").checked,
        document.querySelector(".js-question8-correct-answer").checked,
        document.querySelector(".js-question9-correct-answer").checked,
        document.querySelector(".js-question10-correct-answer").checked);

    let grade;
    let comment;
    let sum = 0;
    for (let i = 0; i < 10; i++) {
        if (checkCorrectAnswers[i] === true) {
            sum += 1;
        };
    }
    resultsField.classList.toggle("form__results--hidden");
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

    showCorrectAnswers.classList.toggle("form__button--hidden");
});

showCorrectAnswers.addEventListener("click", () => {
    let showText = "Wyświetl poprawne odpowiedzi";
    let hideText = "Ukryj poprawne odpowiedzi";
    showCorrectAnswers.innerText = showCorrectAnswers.innerText === showText ? hideText : showText;

    for (let i = 0; i < 10; i++) {
        answerElement[i].classList.toggle("form__answerText--correct");
    }
});