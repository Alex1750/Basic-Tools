function main() {
    var diceVal = Math.floor(Math.random() * 6) + 1;
    document.getElementById("diceImg").src = "resources/dice face " + diceVal + ".jpg";
    document.getElementById("reporter").innerHTML = diceVal;
}