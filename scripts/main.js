document.addEventListener("DOMContentLoaded", () => {
    const table = document.querySelector("table")
    const calcWindow = document.getElementById("calcWindow")
    const inputWindow = document.getElementById("inputWindow")
    const tbody = table.querySelector("tbody") || table.appendChild(document.createElement("tbody"))
    const numbers = tbody.getElementsByClassName("number")
    const operations = tbody.getElementsByClassName("operation")
    const equals = document.getElementById("equals")
    const dot = document.getElementById("dot")
    const backspace = document.getElementById("backspace")
    const clear = document.getElementById("clear")

    inputWindow.addEventListener("input", formatCalc)
    formatCalc()
    let inputString = ""
    let grayNumber = 0
    let grayOperator = new Operator("?")
    let afterDot = false // ввод числа после запятой
    let result = 0

    table.addEventListener("click", (event) => {
        if (event.target.tagName === 'BUTTON') {
            const button = event.target;
            console.log(button)
            if(button == backspace){ // стираем символ
                if(inputString.slice(-1) == ".") afterDot = false
                inputString = inputString.slice(0, -1)
            } else if(button == clear){ // стираем всю входную строку
                inputString = ""
                grayNumber = 0
                grayOperator = new Operator("?")
                afterDot = false
            } else {
                let textContent = button.textContent
                let isNumber = false;
                let isOperation = false;

                for(let i = numbers.length - 1; i >= 0; i--){
                    if(button == numbers[i]){
                        isNumber = true
                        break
                    }
                }
                for(let i = operations.length - 1; i >= 0; i--){
                    if(button == operations[i]){
                        isOperation = true
                        break
                    }
                }
                
                if(isNumber){ //нажата цифра
                    inputString += textContent
                } else if(isOperation) { //нажат оператор
                    if(grayOperator.toString() == null){ // есть для нее место
                        grayOperator = new Operator(textContent)
                        if(inputString == "" || inputString == "NaN" || inputString == "0") grayNumber = 0
                        else grayNumber = parseFloat(inputString)
                        inputString = ""
                        afterDot = false
                    }
                } else if(button == dot && !afterDot){ // нажата точка
                    afterDot = true
                    inputString += "."
                } else if(button == equals && grayOperator.toString() != null){ //выполняем вычисление
                    if(inputString == "" || inputString == "NaN" || inputString == "0") result = grayOperator.compute(grayNumber, 0)
                    else result = grayOperator.compute(grayNumber, parseFloat(inputString))
                    if(result == parseInt(result)) afterDot = false
                    else afterDot = true
                    inputString = result.toString()
                    grayNumber = 0
                    grayOperator = new Operator("?")
                }
            }
            
            inputWindow.value = inputString
            if(grayOperator.toString() == null) { // нет серой части строки
                calcWindow.textContent = ""
            } else {
                calcWindow.textContent = `${grayNumber} ${grayOperator.toString()}`
            }
            formatCalc(afterDot);
        }
    });

    function formatCalc(afterDot) {
        if(afterDot) dotOffset = 4
        else dotOffset = 0
        calcWindow.style.left = `${(inputWindow.offsetLeft + inputWindow.clientWidth - inputWindow.value.length * 13.2 - (calcWindow.textContent.length - 2) * 13.2 - 6 + dotOffset)}px`
    }
});

class Operator {
    constructor(operation){
        this.op = operation
    }
    toString(){
        switch(this.op){
            case "+":
            case "-":
            case "*":
            case "/":
                return this.op
            default:
                return null
        }
    }
    compute(first, second){
        switch(this.op){
            case "+":
                return first + second
            case "-":
                return first - second
            case "*":
                return first * second
            case "/":
                return first / second
            default:
                return second
        }
    }
}