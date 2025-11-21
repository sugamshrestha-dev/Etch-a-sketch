let sqContainer = document.getElementById("squares-container");

const changeOverlay = document.getElementById("change-overlay");
const closeBtn = document.getElementById("close-btn");
const changeBtn = document.getElementById("set-btn");
const confirmBtn = document.getElementById("confirm");

// event for displaying the overlay
changeBtn.addEventListener("click", () => {
    changeOverlay.style.display = "flex";
})

// event for closing the overlay
closeBtn.addEventListener("click", () => {
    changeOverlay.style.display = "none";
})

// default number of squares.
makeSquares(16);

function makeSquares(num) {
    const oldSquares = sqContainer.querySelectorAll(".square");
    oldSquares.forEach(square => square.remove());

    for (let i = 0; i < num * num; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        // defining the width and height of the square.
        square.style.width = (100/num) + "%";
        square.style.height = (100/num) + "%";
        sqContainer.appendChild(square);
    }
}

confirmBtn.addEventListener("click", () => {
    // take input from the user.
    let inputVal = document.getElementById("num-val").value;
    makeSquares(inputVal);

    changeOverlay.style.display = "none";
    // empty the fields of the input box.
    document.getElementById("num-val").value = "";
})
