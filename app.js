let numberOfColors = 6;
let rgbColors = generateRandomColor(numberOfColors);
let colors = document.querySelectorAll(".color");
let pickedColor = pickColor();
let displayColor = document.querySelector(".displayColorText");
    displayColor.innerHTML = pickedColor;
let popUp = document.querySelector(".answer");
let headerBgColor = document.querySelector(".header");

let easyButton = document.querySelector("#easyButton");
let hardButton = document.querySelector("#hardButton");

easyButton.addEventListener("click", function(){
    easyButton.classList.add("style");
    hardButton.classList.remove("style");
    numberOfColors =3
    rgbColors = generateRandomColor(numberOfColors);
    pickedColor = pickColor();
    displayColor.innerHTML = pickedColor;
    for (i=0; i<colors.length; i++){
        if (rgbColors[i]) {
            colors[i].style.backgroundColor = rgbColors[i];
        } else {
            colors[i].style.display = "none";
        }
    }
})

hardButton.addEventListener("click", function(){
    hardButton.classList.add("style");
    easyButton.classList.remove("style");
    numberOfColors = 6;
    rgbColors = generateRandomColor(numberOfColors);
    pickedColor = pickColor();
    displayColor.innerHTML = pickedColor;
    for (i=0; i<colors.length; i++){
        colors[i].style.backgroundColor = rgbColors[i];
        colors[i].style.display = "block";
    }
})

let resetButton = document.querySelector(".left");
resetButton.addEventListener("click", function(){
    rgbColors = generateRandomColor(numberOfColors);
    pickedColor = pickColor();
    displayColor.innerHTML = pickedColor;
    for(i=0; i<colors.length; i++) {
        colors[i].style.backgroundColor = rgbColors[i];
    }
    headerBgColor.style.backgroundColor = "#303131";
    this.textContent = "new colours";
    resetButton.style.paddingTop = "5px";
    resetButton.style.fontSize = ".6rem";
    resetButton.style.backgroundColor = "#c2bb7a";

    popUp.innerHTML = " ";
})

resetButton.addEventListener("mouseover", function(){
    resetButton.style.backgroundColor = "#568f48";
    resetButton.style.cursor = "pointer";
})


for (i=0; i<colors.length; i++) {
    colors[i].style.backgroundColor = rgbColors[i];

    colors[i].addEventListener("click", function() {
        let clickedColor = this.style.backgroundColor;

        if (pickedColor === clickedColor) {
            popUp.innerHTML = "Correct!"

            resetButton.innerHTML = "Play Again!";
            resetButton.style.cursor = "pointer";
            // resetButton.style.backgroundColor = "#2121ed";

            changedColor(clickedColor);
            headerBgColor.style.backgroundColor = clickedColor;
        }

        else {
            popUp.innerHTML = "Wrong!"
            this.style.backgroundColor = "#303131";
        }

    })
}

function changedColor(e) {
    for(i=0; i<colors.length; i++) {
        colors[i].style.backgroundColor = e;
    }
}

function pickColor() {
    let randomNum = Math.floor(Math.random() * rgbColors.length);
    return rgbColors[randomNum];
}

function generateRandomColor(nums) {
    let array = [];

    for (i= 0; i<nums; i++) {
        array.unshift(randomRgbColor());
    }

    return array;
}

function randomRgbColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    return "rgb(" + red +", " + green + ", " + blue + ")";
}