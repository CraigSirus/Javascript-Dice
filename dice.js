//Roll results
var final = [];
//roll
roll = (result) => {
    result = Math.floor(Math.random() * 6) + 1;
    final.push(result);
    document.getElementById("result").innerHTML="Roll Result " + result;
}
//Count rolls
counter = (count) => {
    var count = final.length;
    document.getElementById("resCount").innerHTML="Roll count " + count;
}
//Clear rolls
function empty() {
    final = [];
    document.getElementById("result").innerHTML="";
    document.getElementById("resCount").innerHTML="";
    document.getElementById("resultList").innerHTML="";
}

checkResults = () => {
    document.getElementById("resultList").innerHTML="Rolls " + final;
}

console.log("Developed by Craig Beyer, if you would like something built, contact me at info@chbdesigns.co.za");