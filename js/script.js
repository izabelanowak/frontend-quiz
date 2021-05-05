{
    const correctAnswersButtonElement = document.querySelector(".js-correctAnswersButton");

    const getCorrectAnswersCount = () => {
        const correctAnswersTable = new Array(
            document.querySelector(".js-question1CorrectAnswer").checked,
            document.querySelector(".js-question2CorrectAnswer").checked,
            document.querySelector(".js-question3CorrectAnswer").checked,
            document.querySelector(".js-question4CorrectAnswer").checked,
            document.querySelector(".js-question5CorrectAnswer").checked,
            document.querySelector(".js-question6CorrectAnswer").checked,
            document.querySelector(".js-question7CorrectAnswer").checked,
            document.querySelector(".js-question8CorrectAnswer").checked,
            document.querySelector(".js-question9CorrectAnswer").checked,
            document.querySelector(".js-question10CorrectAnswer").checked,
        );
        return correctAnswersTable.filter(Boolean).length;
    };
    const getGradeAndComment = (points) => {

        switch (points) {
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

    const toggleElements = () => {
        const resultsFieldElement = document.querySelector(".js-formResults");

        resultsFieldElement.classList.toggle("form__results--hidden");
        correctAnswersButtonElement.classList.toggle("form__button--hidden");
    };

    const showResults = (points) => {
        const resultElement = document.querySelector(".js-points");
        const gradeElement = document.querySelector(".js-grade");
        const commentElement = document.querySelector(".js-comment");

        toggleElements();
        const { grade, comment } = getGradeAndComment(points);

        resultElement.innerText = `Liczba poprawnych odpowiedzi: ${points}`;
        gradeElement.innerText = `Twoja ocena to: ${grade}`;
        commentElement.innerText = comment;
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const points = getCorrectAnswersCount();
        showResults(points);
    };

    const onAnswersButtonClick = () => {
        const answerElements = document.querySelectorAll(".js-correct");
        const showText = "Wyświetl poprawne odpowiedzi";
        const hideText = "Ukryj poprawne odpowiedzi";

        correctAnswersButtonElement.innerText = correctAnswersButtonElement.innerText === showText ? hideText : showText;

        answerElements.forEach(element => {
            element.classList.toggle("form__answerText--correct");
        });
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
        correctAnswersButtonElement.addEventListener("click", onAnswersButtonClick);
    };

    init();
}