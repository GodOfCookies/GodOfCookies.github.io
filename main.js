document.getElementById("changeBackgroundBtn").addEventListener("click", changeBackground);

function changeBackground() {
    var randomColor = generateRandomColor();
    document.body.style.backgroundColor = randomColor;
}

function generateRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}