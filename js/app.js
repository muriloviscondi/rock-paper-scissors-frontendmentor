const movesGame = document.querySelectorAll('.icon-game')

for (let moveGame of movesGame) {
  moveGame.addEventListener('click', () => {
    const id = moveGame.getAttribute('id')

    alert(id)
  })  
}

// Modal Rules
document.querySelector('#rules').addEventListener('click', () => {
  document.querySelector('.modal-rules').classList.add('active')
})

document.querySelector('.close').addEventListener('click', () => {
  document.querySelector('.modal-rules').classList.remove('active')
})