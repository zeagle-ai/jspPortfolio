
    function toggleIt(correctDiv, correctBtn) {
        var x = document.getElementById(correctDiv);
        if (x.style.display === "none") {
        x.style.display = "block";
    document.getElementById(correctBtn).innerHTML = "Hide Code";
        } else {
        x.style.display = "none";
    document.getElementById(correctBtn).innerHTML = "Display Code";
}
}

    function sum() {
        return result.innerHTML = 'The sum of your numbers equals   ' + '<button class="btn btn-outline-primary" style="font-size: 25px">' + (+num1.value + +num2.value + +num3.value + +num4.value + +num5.value) + '</button>' + "."
}

    function prod() {

        validateThem();
    checkLetters();
    var product = 1;
        for (i = 0; i < arr.length; i++) {
        product = product * arr[i];
}
        return result.innerHTML = "The product of your numbers is   " + '<button class="btn btn-outline-primary" style="font-size: 25px">' + product + '</button>' + ".";
}

    function mean() {

        validateThem();
    checkLetters();
    var averageItems = 0;
        for (i = 0; i < arr.length; i++) {
        averageItems = averageItems + arr[i];
}
        return result.innerHTML = "The average of your inputs is   " + '<button class="btn btn-outline-primary" style="font-size: 25px">' + (averageItems / arr.length) + '</button>' +".";
}

    function max() {

        validateThem();
    checkLetters();
        return result.innerHTML = "The largest number in your inputs is " + '<button class="btn btn-outline-primary" style="font-size: 25px">' + Math.max(...arr) + '</button>' + ".";
}

    function min() {

        validateThem();
    checkLetters();
        return result.innerHTML = "The smallest number in your inputs is   " + '<button class="btn btn-outline-primary" style="font-size: 25px">' + Math.min(...arr) + '</button>' + ".";
}

    function facto(n) {

        checkLetters();
        if (n < 0) {
        alert("Can't use a negative number")
            num.value = ""
    return
        } else if (n === 0 || n === 1) {
            return factResult.innerHTML = "Your Factorial is 1"
        } else if (n > 1) {
            for (var i = n - 1; i >= 1; i--) {
        n *= i;
}
            return factResult.innerHTML = "Your Factorial is   " + '<button class="btn btn-outline-primary" style="font-size: 25px">' + n + '</button>' + ".";
}
}

    function validateThem() {

        arr = [];
        for (i = 1; i < 6; i++) {
            var check = ("num" + i);
    var item = document.getElementById(check).value;
            if (item != "") {
        arr.push(+item);
}
}
}

    function clearFields() {

        num1.value = "";
    num2.value = "";
    num3.value = "";
    num4.value = "";
    num5.value = "";
    return
}

    function checkLetters() {

        if (isNaN(+num1.value) || isNaN(+num2.value) || isNaN(+num3.value) || isNaN(+num4.value) || isNaN(+num5.value)) {
        alert("Don't use letters please.");
    clearFields();
    return
}
}

    function zzzz() {

        var fizzy = +fizz.value;
    var buzzy = +buzz.value;
    var allInfo = [];

        for (i = 1; i < 101; i++) {
            if (i % fizzy == 0 && i % buzzy == 0) {
        allInfo.push("<b style='color: red;'>(" + i + ") FizzBuzz</b><br>");
            } else if (i % buzzy == 0) {
        allInfo.push("<b style='color: green;'>(" + i + ")Buzz</b><br>");
            } else if (i % fizzy == 0) {
        allInfo.push("<b style='color: blue;'>(" + i + ")Fizz</b><br>");
            } else {
        allInfo.push("<b style='color: black;'>" + i + "</b><br>");
}
}
return fizzBuzzResult.innerHTML = allInfo.join("");
}

    function palin() {
        var inputTest = drome.value;
    var removeSpace = inputTest.replace(/\s/g, '');
    var removeCase = removeSpace.toLowerCase();
    var newStr = [];
        for (var i = removeCase.length - 1; i >= 0; i--) {
        newStr += removeCase[i];
}
        if (removeCase === newStr) {
            return palAnswer.innerHTML = "Yes! You have found a palindrome. Congratulations!";
        } else {
            return palAnswer.innerHTML = "Nope. Not a palindrome. Sorry. :(";
}
}

var mon = new Date().getMonth();
var dat = new Date().getDate();

    function getBD() {

    if (mon >= 10) {
	    if (dat >= 18 || mon >= 11) {
        document.getElementById("birth").innerHTML = (parseInt(new Date().getFullYear()) - 1983);
        } else {
        document.getElementById("birth").innerHTML = (parseInt(new Date().getFullYear()) - 1984);}
    } else {
        document.getElementById("birth").innerHTML = (parseInt(new Date().getFullYear()) - 1984);}

};

getBD();

    function sumOfTears() {

    var number1 = document.getElementById("numb1");
    var number2 = document.getElementById("numb2");
    var number3 = document.getElementById("numb3");
    var number4 = document.getElementById("numb4");
    var k = document.getElementById("k");

    var arr = [];

    arr = [+number1.value, +number2.value, +number3.value, +number4.value];
        for (var i = 0; i < arr.length; i++){
        var testy = +k.value - arr[i];
    var check = arr.findIndex(eachValue => eachValue == testy);
        if(check == i) {
        check = arr.includes(testy, i + 1);
}
        if (check != -1 && check != false) {
            return document.getElementById("soafAnswer").innerHTML = "Yes! Two numbers in your list add up to K! Too Cool!";
}
}
return document.getElementById("soafAnswer").innerHTML = "Sorry, keep trying until you get numbers that work!";
}
