function submitdata() {
    var first= Number(document.getElementById("number1").value);
    var second= Number(document.getElementById("number2").value);

    total = first + second;
    total = total
    document.getElementById("printout").innerHTML="Total: " + total;

    console.log(first)
    console.log(second)
    console.log(total)

}