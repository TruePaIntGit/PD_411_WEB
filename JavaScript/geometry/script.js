// JavaScript source code
const Figures = {
    SQUARE:     "square",
    TRIANGLE1:  "triangle1",
    TRIANGLE2:  "triangle2",
    TRIANGLE3:  "triangle3",
    TRIANGLE4:  "triangle4",
}
function Square(n) {
    let f = "";
    for (let i = 1n; i<n; i++){
        for (let j = 1n; j<n; j++){
            f+="* ";
        }
        f+="<br>";
    }
    return f;
}
function Triangle1(n){
    let f = "";
    let index = 0n;
    for (let i = 0n; i<n; i++){
        index++;
        for (let j = 0n; j<index; j++){
            f+="* ";
        }
        f+="<br>";
    }
    return f;
}

function Triangle2(n){
    let f = "";
    let index = n;
    for (let i = 0n; i<n; i++){
        for (let j = 0n; j<index; j++){
            f+="* ";
        }
        f+="<br>";
        index--;
    }
    return f;
}
function GetInput(figure)
{
    let source_input_field = document.getElementById(figure+"-source");
    let source_value = BigInt(source_input_field.value);
    let factorial_result = document.getElementById(figure+"-result");
    switch(figure){
    case "square":
        factorial_result.innerHTML = Square(source_value);
        break;
    case "triangle1":
        factorial_result.innerHTML = Triangle1(source_value);
        break;
    case "triangle2":
        factorial_result.innerHTML = Triangle2(source_value);
        break;
    default:
        break;
    }
}