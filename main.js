const newCard = document.querySelector("#newCard");
const deleteCards = document.querySelector("#deleteCards");
const saveFlashCard = document.querySelector("#save");
const closeCreateFlashCard = document.querySelector("#close");
const questionField = document.querySelector("#question");
const answerField = document.querySelector("#answer");
const createFlashCardForm = document.querySelector("#create-form");
const flashCardsForms = document.querySelector(".flashcards");
const flashCardAnswer = document.querySelectorAll("#showFlashCardAnswer");

document.addEventListener("DOMContentLoaded", function () {
    const flashCards = localStorage.getItem("flashcards");
    const createCardFrom = localStorage.getItem("createForm");

    if (flashCards) flashCardsForms.innerHTML = flashCards;
    if (createCardFrom) createFlashCardForm.style.display = createCardFrom;
});

closeCreateFlashCard.addEventListener("click", function () {
    createFlashCardForm.style.display = "none";
    localStorage.setItem("createForm", createFlashCardForm.style.display);
});

newCard.addEventListener("click", function () {
    createFlashCardForm.style.display = "block";
    localStorage.setItem("createForm", createFlashCardForm.style.display);
});

saveFlashCard.addEventListener("click", saveCard);

deleteCards.addEventListener("click", function () {
    flashCardsForms.innerHTML = '';
    localStorage.setItem("flashcards", flashCardsForms.innerHTML);
});

flashCardAnswer.forEach(cardAnswer => {
    cardAnswer.addEventListener("click", function(){
        cardAnswer.className += " show";
        setTimeout(function(){cardAnswer.className = cardAnswer.className.replace('show', '')},3000)
    }) 
})

function saveCard() {
    flashCardsForms.innerHTML += `
        <div class="flashcard">
            <div class="flashcard__question" id="showFlashCardAnswer">${questionField.value}</div>
            <div class="flashcard__answer" id="showFlashCardAnswer">${answerField.value}</div>
        </div>
    `

    answerField.value = '';
    questionField.value = '';

    localStorage.setItem("flashcards", flashCardsForms.innerHTML);
}