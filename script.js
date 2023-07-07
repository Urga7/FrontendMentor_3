var ratingBox = document.querySelector(".rating-box");
var thanksBox = document.querySelector(".thanks-box");

var submitButton = document.querySelector(".submit-button");

var chosenRating = document.getElementById("chosenRating");
var rates = document.querySelectorAll(".rating-button");

submitButton.addEventListener('click', () => {
    ratingBox.style.display = 'none';
    thanksBox.classList.remove("hidden");
});

rates.forEach(rate => {
    rate.addEventListener('click', () => {
        chosenRating.innerHTML = ' ' + rate.innerHTML + ' ';
        chosenRating.style.whiteSpace = 'pre';
    })
})