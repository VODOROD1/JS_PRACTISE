var inputField = document.getElementById('inputField')
var outputField = document.getElementById('outputField')
var clickButton = document.getElementById('clickButton')

const inputHandler = (e) => {
    let text = inputField.value
    let newText = charRemover(text)
    outputField.value = newText 

    // let newText = text.replace('а', '')
    // console.log(text.length)
    // console.log(newText.length)
    // outputField.value = newText
}
clickButton.addEventListener('click',inputHandler)

const charRemover = (text) => {
    let charArr = text.split(' ')
    let filteredArr = charArr.filter(word => word != '')
    let newText = ''
    filteredArr.forEach(word => {
        let newWord = word
        for(let i = 0; i<newWord.length-1; i++) {
            let flag = false
            for(let j = i+1; j<newWord.length; j++) {
                if(newWord[i] === newWord[j] && newWord[i] != ' ') {
                    flag = true
                    debugger;
                    let var1 = newWord[j-1]
                    let var2 = newWord[j+1]
                    newWord = newWord.substr(0,j) + ' ' + newWord.substr(j+1,newWord.length)
                }
            }
            if(flag) {
                newWord[i] = ' '
                debugger;
                let var1 = newWord[i-1]
                let var2 = newWord[i+1]
                newWord = newWord.substr(0,i) + ' ' + newWord.substr(i+1,newWord.length)
            }
            flag = false
        }
        let trimmedWord = ''
        for(let symbol of newWord) {    // проверяем слово на пробелы
            if(symbol != ' ') {
                trimmedWord = trimmedWord + symbol
            }
        }

        // newWord.forEach(symbol => { // проверяем слово на пробелы
        //     if(symbol != ' ') {
        //         trimmedWord = trimmedWord + symbol
        //     }}
        // )

        newText = newText + trimmedWord + ' '
    })
    return newText
}

// У попа была собака