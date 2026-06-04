function help() {
    if (document.getElementById("help").style.left === "5vw") {
        document.getElementById("help").style.left = "-100vw";
        document.getElementById("x").style.display = "none";
        document.getElementById("QuestionMark").style.display = "block";
    } else {
        document.getElementById("help").style.left = "5vw";
        document.getElementById("x").style.display = "block";
        document.getElementById("QuestionMark").style.display = "none";
    }
}