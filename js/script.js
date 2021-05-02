{
    const formElement = document.querySelector(".js-form");
    const answerElement = document.querySelectorAll(".js-correct");

    const calculateNumberOfCorrectAnswers = () => {
        const correctAnswersTable = new Array(document.querySelector(".js-question1CorrectAnswer").checked,
            document.querySelector(".js-question2CorrectAnswer").checked,
            document.querySelector(".js-question3CorrectAnswer").checked,
            document.querySelector(".js-question4CorrectAnswer").checked,
            document.querySelector(".js-question5CorrectAnswer").checked,
            document.querySelector(".js-question6CorrectAnswer").checked,
            document.querySelector(".js-question7CorrectAnswer").checked,
            document.querySelector(".js-question8CorrectAnswer").checked,
            document.querySelector(".js-question9CorrectAnswer").checked,
            document.querySelector(".js-question10CorrectAnswer").checked);
        let numberOfCorrectAnswers = 0;
        for (const element of correctAnswersTable) {
            if (element) {
                numberOfCorrectAnswers += 1;
            };
        }
        return numberOfCorrectAnswers;
    };

    const showResults = (numberOfCorrectAnswers) => {
        const resultsFieldElement = document.querySelector(".js-formResults");
        const resultElement = document.querySelector(".js-numberOfCorrectAnswers");
        const gradeElement = document.querySelector(".js-grade");
        const commentElement = document.querySelector(".js-comment");
        const correctAnswersButtonElement = document.querySelector(".js-correctAnswersButton");

        resultsFieldElement.classList.toggle("form__results--hidden");
        resultElement.innerText = `Liczba poprawnych odpowiedzi: ${numberOfCorrectAnswers}`;

        let grade;
        let comment;
        switch (numberOfCorrectAnswers) {
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
    };
    const onFormSubmit = (event) => {
        event.preventDefault();

        const numberOfCorrectAnswers = calculateNumberOfCorrectAnswers();

        showResults(numberOfCorrectAnswers);

    };

    formElement.addEventListener("submit", onFormSubmit);

    correctAnswersButtonElement.addEventListener("click", () => {
        const showText = "Wyświetl poprawne odpowiedzi";
        const hideText = "Ukryj poprawne odpowiedzi";
        correctAnswersButtonElement.innerText = correctAnswersButtonElement.innerText === showText ? hideText : showText;

        for (const i = 0; i < 10; i++) {
            answerElement[i].classList.toggle("form__answerText--correct");
        }
    });
}