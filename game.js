'use strict'

const cell1x1 = document.getElementById('1x1')
const cell1x2 = document.getElementById('1x2')
const cell1x3 = document.getElementById('1x3')
const cell2x1 = document.getElementById('2x1')
const cell2x2 = document.getElementById('2x2')
const cell2x3 = document.getElementById('2x3')
const cell3x1 = document.getElementById('3x1')
const cell3x2 = document.getElementById('3x2')
const cell3x3 = document.getElementById('3x3')

const firstRow = [cell1x1, cell1x2, cell1x3]
const secondRow = [cell2x1, cell2x2, cell2x3]
const thirdRow = [cell3x1, cell3x2, cell3x3]
const firstCol = [cell1x1, cell2x1, cell3x1]
const secondCol = [cell1x2, cell2x2, cell3x2]
const thirdCol = [cell1x3, cell2x3, cell3x3]
const diagLeftRigth = [cell1x1, cell2x2, cell3x3]
const diagRigthLeft = [cell3x1, cell2x2, cell1x3]

let currentTurn = ['x', 'o']
let gameOver = false

document.querySelectorAll('.pixel').forEach(pixel => {
    pixel.addEventListener('click', function createSign() {
        if (!pixel.textContent && !gameOver) {
            pixel.textContent = currentTurn[0]
            currentTurn.reverse()
        }
        function isStingFull(arr) {
            if (arr.every(field => field.textContent === currentTurn[0])) {
                arr.forEach(field => field.classList.add('red'))
                return true
            } else if (arr.every(field => field.textContent === currentTurn[1])) {
                arr.forEach(field => field.classList.add('red'))
                return true
            } else return false
        }
        if (isStingFull(firstRow) || isStingFull(secondRow) || isStingFull(thirdRow) || isStingFull(firstCol) || isStingFull(secondCol) || isStingFull(thirdCol) || isStingFull(diagLeftRigth) || isStingFull(diagRigthLeft)) {
            gameOver = true
        }
    })
})
document.querySelector('button').addEventListener('click', () => {
    document.querySelectorAll('.pixel').forEach(pixel => {
        pixel.textContent = ''
        if (pixel.classList.contains('red')) {
            pixel.classList.remove('red')
        }
    })
    gameOver = false
})