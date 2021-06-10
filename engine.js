
function dec() {
    document.querySelector(".getpeople").stepDown(1);
}
function inc() {
    document.querySelector(".getpeople").stepUp(1);
}


function get() {
    var total = document.getElementById("billamount").value; // Get input bill amount
    var inp = document.getElementById("servicequality").value; // Get tip percantage input
    var inpeople = document.getElementById("cvalue").value;  // Get input of number of people spliting bill

    var split = (total * inp / inpeople);  // Maths op

    document.getElementById("result").innerHTML = "Tip amount to be paid by each person " + " " + split;  // Display results




}