var ratingNumber = document.getElementsByClassName('number');
var ratingNumberArray = Array.from(ratingNumber);//converting html collection to array
var SELECTED_RATING;
var selectedStar = document.getElementById("user-rating");
var submitButton = document.getElementById("submit");

ratingNumberArray.forEach(ratingNumberArray1=>ratingNumberArray1.addEventListener("click", ratingCalc));

function ratingCalc(event)
{
    ratingNumberArray.forEach(ratingNumberArray1=>ratingNumberArray1.classList.remove("active"));
    event.target.classList.add("active");
    SELECTED_RATING = event.target.id;
    selectedStar.innerHTML = SELECTED_RATING;
}

submitButton.addEventListener("click", function(){
    document.getElementById("box1").hidden = false;
    document.getElementById("box").hidden = true;

}, false);









