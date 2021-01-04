let leftColumn = document.getElementById('leftColumn')
let rightColumn = document.getElementById('rightColumn')
let left = document.getElementById('left')
let leftAll = document.getElementById('leftAll')
let right = document.getElementById('right')
let rightAll = document.getElementById('rightAll')

let choisedElemsArr = []

const leftChoiseHandler = (e) => {
    let choisedElem = e.target
    if(e.target === e.currentTarget) {
        return
    }
    let flag = false
    choisedElemsArr.forEach((elem,index) => {
        if(elem === choisedElem) {
            flag = true
            choisedElemsArr.splice(index,1)
        }
    })
    if(flag) {
        choisedElem.style.backgroundColor = 'white'
    } else {
        choisedElem.style.backgroundColor = '#A3C8F5'
        choisedElemsArr.push(choisedElem)
    }

}
leftColumn.addEventListener('click',leftChoiseHandler)

const rightChoiceHandler = (e) => {
    let currentElem = e.target
    let flag = false
    if(currentElem !== e.currentTarget) {
        choisedElemsArr.forEach((elem,index) => {
            if(elem === currentElem) {
                flag = true
                choisedElemsArr.splice(index,1)
            }
        })
        if(flag) {
            currentElem.style.backgroundColor = 'white'

        } else {
            currentElem.style.backgroundColor = '#A3C8F5'
            choisedElemsArr.push(currentElem)
        }
    }
}
rightColumn.addEventListener('click',rightChoiceHandler)

const transfer = (arr,from,to) => {
    arr.forEach(elem => {
        elem.style.backgroundColor = 'white'
        from.removeChild(elem)
        to.appendChild(elem)
    })
}

const leftHandler = (e) => {
    if(choisedElemsArr.length !== 0) {
        transfer(choisedElemsArr, rightColumn, leftColumn)
        choisedElemsArr = []
    }
}
left.addEventListener('click',leftHandler)

const leftAllHandler = (e) => {
    let rightColumnArr = document.querySelectorAll('#rightColumn p')
    transfer(rightColumnArr,rightColumn, leftColumn)
}
leftAll.addEventListener('click',leftAllHandler)

const rightHandler = (e) => {
    if(choisedElemsArr.length !== 0) {
        transfer(choisedElemsArr,leftColumn,rightColumn)
        choisedElemsArr = []
    }
}
right.addEventListener('click',rightHandler)

const rightAllHandler = (e) => {
    let leftColumnElemsArr = document.querySelectorAll('#leftColumn p')
    // leftColumnElemsArr.forEach(elem => {
    //     leftColumn.removeChild(elem)
    //     rightColumn.appendChild(elem)
    // })
    transfer(leftColumnElemsArr,leftColumn,rightColumn)
}
rightAll.addEventListener('click',rightAllHandler)