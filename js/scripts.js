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

confirmBtn.addEventListener("click", () => {
    let inputVal = document.getElementById("num-val").value;

    for (let i = 0; i < inputVal * inputVal; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.style.width = (100/inputVal) + "%";
        square.style.height = (100/inputVal) + "%";
        sqContainer.appendChild(square);
    }
})
