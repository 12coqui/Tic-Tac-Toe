const board = document.querySelector('.game-container-grid')
const boxes = document.querySelectorAll('[class*="box"]')
const messageContent = document.querySelector('.text-message')
const displayMessage = document.querySelector('.message-content')
const restartBtn = document.querySelector('.restartButton')
let currentTurn
const CIRCLE_CLASS = 'circle'
const X_CLASS = 'x'


boxes.forEach(item => item.addEventListener('click', playGame, { once: true }))
restartBtn.addEventListener('click', restartGame)

function restartGame (){
  displayMessage.classList.remove('show');
  boxes.forEach(item => {
    item.classList.remove(X_CLASS);
    item.classList.remove(CIRCLE_CLASS);
    item.classList.remove('selected');
    item.removeEventListener('click', playGame)
    item.addEventListener('click', playGame, { once: true })
  });
}

function playGame (e) {
const currentClass = currentTurn ? CIRCLE_CLASS : X_CLASS;
const box = e.target;
markBox(box, currentClass);
changeTurns();
  if(isWinner(currentClass)){
  messageContent.textContent =`${currentClass.toUpperCase()} WINS!`;
  board.classList.add('stop-game');
  show()
}
  else if(isADraw()){
messageContent.textContent = `It's a DRAW!`;
show()
}
}

function show (){
  displayMessage.classList.add('show')
}

function isADraw (){
  return [...boxes].every(box => box.classList.contains(CIRCLE_CLASS) || box.classList.contains(X_CLASS))
}

function markBox (box, currentClass) {
  box.classList.add(currentClass)
  box.classList.add('selected')
}

function changeTurns(){
  currentTurn = !currentTurn
}

function isWinner (player) {
return winnerCombinations.some(combination => {
  return combination.every(index => {
    return boxes[index].classList.contains(player)
    })
  })
}

const winnerCombinations = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,4,8], 
  [2,4,6],
  [0,3,6],
  [1,4,7],
  [2,5,8]
]





//   function sumRange (n){
//     if (n === 1) return 1;
//     return n + sumRange (n - 1)
//   }

//   function power(a, b){
//     if (b === 0) return 1;
//     return a * power(a, b - 1)
//   }

//   function fact(num){
//     if(num === 1) return 1;
//     return num * fact(num - 1)
//   }

// const arr = [1,3,4,9,12]

//   function callback(array){
//       return array.filter(item => item < 7)
//   }


//   function productOfArray (array){
//     array.map((prev, curr) => ((prev * curr) 
//       return curr)
//   }

// const seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]])