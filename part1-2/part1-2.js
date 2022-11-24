var first = Number(prompt("Enter first number:"));
var operation = '';
var second = 0;
var result = 0;

while (operation != null) {
    operation = prompt('enter the operation');
    second = Number(prompt("enter number:"));

    if (operation == '+') {
        result = first + second;
    }
    else if (operation == '-') {
        result = first - second;
    }
    else if (operation == '*') {
        result = first * second;
    }
    else if (operation == '/') {
        result = first / second;
    }
    else if (operation == '%') {
        result = first % second;
    }
    alert('result is:' + result);
    first = result;
}





