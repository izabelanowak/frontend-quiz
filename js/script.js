{
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
    const switchGradeAndComment = (numberOfCorrectAnswers) => {
        let grade;
        let comment;
        switch (numberOfCorrectAnswers) {
            case 10:
                return {
                    grade: "5 - bardzo dobry",
                    comment: "Świetnie! Oby tak dalej!"
                };
            case 9: case 8:
                return {
                    grade: "4 - dobry",
                    comment: "Dobrze Ci idzie! Może następnym razem będzie jeszcze lepiej?"
                };
            case 7: case 6:
                return {
                    grade: "3 - dostateczny",
                    comment: "Nie jest źle, ale następnym razem postaraj się bardziej!"
                };
            case 5:
                return {
                    grade: "2 - dopuszczający",
                    comment: "Musisz się bardziej postarać!"
                };
            default:
                return {
                    grade: "1 - niedostateczny",
                    comment: "Kiepsko. Spróbuj jeszcze raz, a być może będzie lepiej? Trzymam kciuki!"
                };
        };
    };

    const toggleElementsAfterSubmit = (correctAnswersButtonElement) => {
        const resultsFieldElement = document.querySelector(".js-formResults");

        resultsFieldElement.classList.toggle("form__results--hidden");
        correctAnswersButtonElement.classList.toggle("form__button--hidden");
    };

    const showResults = (numberOfCorrectAnswers, correctAnswersButtonElement) => {
        const resultElement = document.querySelector(".js-numberOfCorrectAnswers");
        const gradeElement = document.querySelector(".js-grade");
        const commentElement = document.querySelector(".js-comment");

        toggleElementsAfterSubmit(correctAnswersButtonElement);
        let { grade, comment } = switchGradeAndComment(numberOfCorrectAnswers);

        resultElement.innerText = `Liczba poprawnych odpowiedzi: ${numberOfCorrectAnswers}`;
        gradeElement.innerText = `Twoja ocena to: ${grade}`;
        commentElement.innerText = comment;
    };

    const onFormSubmit = (event, correctAnswersButtonElement) => {
        event.preventDefault();

        const numberOfCorrectAnswers = calculateNumberOfCorrectAnswers();
        showResults(numberOfCorrectAnswers, correctAnswersButtonElement);
    };

    const onAnswersButtonClick = (correctAnswersButtonElement) => {
        const answerElement = document.querySelectorAll(".js-correct");
        const showText = "Wyświetl poprawne odpowiedzi";
        const hideText = "Ukryj poprawne odpowiedzi";
        correctAnswersButtonElement.innerText = correctAnswersButtonElement.innerText === showText ? hideText : showText;

        for (let i = 0; i < 10; i++) {
            answerElement[i].classList.toggle("form__answerText--correct");
        }
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");
        const correctAnswersButtonElement = document.querySelector(".js-correctAnswersButton");

        formElement.addEventListener("submit", () => {
            onFormSubmit(event, correctAnswersButtonElement);
        });
        correctAnswersButtonElement.addEventListener("click", () => {
            onAnswersButtonClick(correctAnswersButtonElement);
        });
    };
    init();
}