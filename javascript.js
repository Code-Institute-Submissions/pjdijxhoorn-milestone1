


document.getElementById("event1").addEventListener("mouseover", mouseOver1);
document.getElementById("event1").addEventListener("mouseout", mouseOut1);



function mouseOver1() {
    document.getElementById("history-explain-block").style.display = "block";
}

function mouseOut1() {
    document.getElementById("history-explain-block").style.display = "none";}