function submitdata1() {
    var first= Number(document.getElementById("number1").value);
    var second= Number(document.getElementById("number2").value);

    total = first + second;
    document.getElementById("printout").innerHTML="Total: " + total;

    console.log("first number: " + first)
    console.log("second number: " + second)
    console.log("Total: " + total)

}

function submitdata2() {
    var first= Number(document.getElementById("number1").value);
    var second= Number(document.getElementById("number2").value);

    total = first - second;
    document.getElementById("printout").innerHTML="Total: " + total;

    console.log("first number: " + first)
    console.log("second number: " + second)
    console.log("Total: " + total)

}

function submitdata3() {
    var first= Number(document.getElementById("number1").value);
    var second= Number(document.getElementById("number2").value);

    total = first * second;
    document.getElementById("printout").innerHTML="Total: " + total;

    console.log("first number: " + first)
    console.log("second number: " + second)
    console.log("Total: " + total)

}

function submitdata4() {
    var first= Number(document.getElementById("number1").value);
    var second= Number(document.getElementById("number2").value);

    total = first / second;
    document.getElementById("printout").innerHTML="Total: " + total;

    console.log("first number: " + first)
    console.log("second number: " + second)
    console.log("Total: " + total)

}