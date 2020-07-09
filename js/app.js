const movesGame = document.querySelectorAll('.icon-game');
const result = document.querySelector('#result')
const playerMove = document.querySelector('#player-move');
const cpuMove = document.querySelector('#cpu-move');

let playerVictory = 0

for (let moveGame of movesGame) {
  moveGame.addEventListener('click', () => {
    const id = moveGame.getAttribute('id')
    const cpu = checkMoveCpu()

    document.querySelector('.boarder-game').classList.add('out')

    setTimeout(() => {
      handleTransitionGameResult()
      handlePlayerMove(id)   
    }, 1000)

    setTimeout(() => {
      handleCPUMove(cpu)
    }, 1250)

    setTimeout(() => {
      handleResult(id, cpu)
    }, 2500)
  })  
}

// Play again
document.querySelector('#retry').addEventListener('click', () => {
  document.querySelector('#painel-result').classList.add('display-none')
  document.querySelector('.boarder-result').classList.add('out')
  document.querySelector('.boarder-game').classList.remove('out')

  setTimeout(() => {
    handleTransitionGameBorder()
    resetAll()
  }, 1000)
})

// Modal Rules
document.querySelector('#rules').addEventListener('click', () => {
  document.querySelector('.modal-rules').classList.add('active')
})

document.querySelector('.close').addEventListener('click', () => {
  document.querySelector('.modal-rules').classList.remove('active')
})

// Transition border-game to result-game
function handleTransitionGameResult() {
  document.querySelector('.boarder-game').classList.add('display-none')
  document.querySelector('.boarder-result').classList.remove('display-none')
}

// Transition result-game to border-game
function handleTransitionGameBorder() {
  document.querySelector('.boarder-result').classList.add('display-none')
  document.querySelector('.boarder-result').classList.remove('out')
  document.querySelector('.boarder-game').classList.remove('display-none')
}


// PlayerMove and CPUMove
function handlePlayerMove(id) {  
  playerMove.classList.add(id)
  playerMove.classList.remove('none')
  playerMove.querySelector('img').src = `images/icon-${id}.svg`
}

function handleCPUMove(cpu) {
  cpuMove.classList.add(cpu)
  cpuMove.classList.remove('none')
  cpuMove.querySelector('img').src = `images/icon-${cpu}.svg`
}

function checkMoveCpu() {
  const cpu = Math.floor(Math.random() * 4)

  switch (cpu) {
    case 1:
      return 'paper'    
    case 2:
      return 'scissors'    
    case 3:
      return 'rock'
    default:
      return 'rock'
  } 
}

// Results
function handleResult(player, cpu) {

    if ((player === 'rock') && (cpu === 'scissors')) {
      playerWinLose('YOU WIN', 'player')
    }
    else if ((player ==='scissors') && (cpu === 'paper')) {
      playerWinLose('YOU WIN', 'player')
    }
    else if ((player === 'paper') && (cpu === 'rock')) {
      playerWinLose('YOU WIN', 'player')
    }
    else if (player === cpu) {
      playerWinLose('DRAW', 'draw')
    }
    else {
      playerWinLose('YOU LOSE', 'cpu')
    }
}

function playerWinLose(result, gamer) {
  document.querySelector('#painel-result').classList.remove('display-none')
  document.querySelector('#msg-result').innerText = result

  if (gamer === 'player') {
    playerVictory++;
    document.querySelector('#score-player').innerText = playerVictory
  }
}

// clear
function resetAll() {
  const clearResult = document.querySelector('#result')
  const clearIcons = clearResult.querySelectorAll('.icon-game')

  for (let clearIcon of clearIcons) {
    clearIcon.classList.add('none')
    clearIcon.classList.remove('rock')
    clearIcon.classList.remove('scissors')
    clearIcon.classList.remove('paper')

    clearIcon.querySelector('img').src = ''
  }

  document.querySelector('#msg-result').innerText = ''
}
