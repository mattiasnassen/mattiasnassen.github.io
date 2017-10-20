var checkPoint = false
function giveAnswer() {
    var cheatcode = document.getElementById("text").innerHTML;
if (cheatcode.endsWith("Up Up Down Down Left Right Left Right B A")) {
    document.getElementById("results").innerHTML = "<img src = 'img/endscreen.jpg'/>";
    document.getElementById("text").innerHTML = "";
    checkPoint = true;
    }
}
function buttonPressA() {
document.getElementById("text").innerHTML = document.getElementById("text").innerHTML + " A";
    giveAnswer();
}
function buttonPressB() {
    if(checkPoint == false){
    document.getElementById("text").innerHTML = document.getElementById("text").innerHTML + " B";
    giveAnswer();
      }
    else{
        document.getElementById("coords").innerHTML = "Congratulations, the coordinates can be found if the images shown are interpreted correclty. Hint 10=0 etc.";
        document.write("<p>Link: " + txt.link("http://mattiasnassen.github.io/mario.html") + "</p>");
        }
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
