function giveAnswer() {
    var cheatcode = document.getElementById("text").innerHTML;
if (cheatcode.endsWith("Up Up Down Down Left Right Left Right B A")) {
    document.getElementById("coords").innerHTML = "Trying to cheat? Not needed, you have solved the mystery and can find the cache at N59 33.123 E016 30.123";}
}
function buttonPressA() {
document.getElementById("text").innerHTML = document.getElementById("text").innerHTML + " A";
    giveAnswer();
}
function buttonPressB() {
document.getElementById("text").innerHTML = document.getElementById("text").innerHTML + " B";
    giveAnswer();
    }
function buttonPressSelect() {
document.getElementById("text").innerHTML = document.getElementById("text").innerHTML + " Select";
    giveAnswer();
}
function buttonPressStart() {
document.getElementById("text").innerHTML = document.getElementById("text").innerHTML + " Start";
    giveAnswer();
}
function buttonPressUp() {
document.getElementById("text").innerHTML = document.getElementById("text").innerHTML + " Up";
    giveAnswer();
}
function buttonPressRight() {
document.getElementById("text").innerHTML = document.getElementById("text").innerHTML + " Right";
    giveAnswer();
}
function buttonPressDown() {
document.getElementById("text").innerHTML = document.getElementById("text").innerHTML + " Down";
    giveAnswer();
}
function buttonPressLeft() {
document.getElementById("text").innerHTML = document.getElementById("text").innerHTML + " Left";
    giveAnswer();
}
