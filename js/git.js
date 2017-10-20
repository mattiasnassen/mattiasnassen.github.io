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
        var str = "Congratulations! To get the coordinates to the entrence of level 1-2 follow the link. Use the provided geochecker for further information. Hint: 10=0 Etc.";
        var result = str.link("http://mattiasnassen.github.io/mario.html");
        document.getElementById("coords").innerHTML = result;
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
