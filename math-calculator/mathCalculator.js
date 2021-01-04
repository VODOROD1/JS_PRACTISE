let inputField = document.getElementById('inputField')
let output = document.getElementById('output')
let calculateButton = document.getElementById('calculateButton')

const regexp = /((\d+?\b)(\.\d+?)?)(\s?([+\-\/*])\s?(\d+?\b(\.\d+?)?))+?\s?=/g;

const calculate = (e) => {
    let str = inputField.value.match(regexp)
    let opArr = str[0].match(/[+\-*\/]/g)
    let valuesArr = str[0].match(/(\d+?\b)(\.\d+?)?/g)
    result = valuesArr[0]
    valuesArr.shift()

    for(let i = 0; i<opArr.length; i++) {
        if(opArr[i] === '+') {
            result = result + valuesArr[i]
        } else if(opArr[i] === '-') {
            result = result - valuesArr[i]
        } else if(opArr[i] === '*') {
            result = result * valuesArr[i]
        } else if(opArr[i] === '/') {
            result = result / valuesArr[i]
        }
    }
    output.innerText = result
}

calculateButton.addEventListener('click',calculate)
