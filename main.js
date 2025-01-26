// DOM elements
const $player = document.querySelector('.player')
const $maze = document.querySelector('.maze')
const $congratulations = document.querySelector('.congratulations')

// Initial position of the player
let playerPos = { x: 10, y: 10 }

// Movement step size for the player
const step = 10

// Listen for keyboard arrow key events
document.addEventListener('keydown', (event) => {
  // Get the boundaries of the maze and the player
  const mazeRect = $maze.getBoundingClientRect()
  const playerRect = $player.getBoundingClientRect()

  // Move the player based on the key pressed
  switch (event.key) {
    case 'ArrowUp':
      // Move up if the player is not at the top edge
      if (playerRect.top > mazeRect.top) playerPos.y -= step
      break

    case 'ArrowDown':
      // Move down if the player is not at the bottom edge
      if (playerRect.bottom < mazeRect.bottom) playerPos.y += step
      break

    case 'ArrowLeft':
      // Move left if the player is not at the left edge
      if (playerRect.left > mazeRect.left) playerPos.x -= step
      break

    case 'ArrowRight':
      // Move right if the player is not at the right edge
      if (playerRect.right < mazeRect.right) playerPos.x += step
      break
  }

  // Update the player's position in the maze
  $player.style.top = `${playerPos.y}px`
  $player.style.left = `${playerPos.x}px`

  // Check if the player has reached the exit
  const $exit = document.querySelector('.exit').getBoundingClientRect()
  if (
    playerRect.left >= $exit.left &&
    playerRect.right <= $exit.right &&
    playerRect.top >= $exit.top &&
    playerRect.bottom <= $exit.bottom
  ) {
    const $p_congrats = document.createElement('p')
    $p_congrats.textContent = 'Congratulations! You reached the exit!'
    $congratulations.appendChild($p_congrats)
  }
})

// Reset the player's position to the starting point
function resetGame() {
  playerPos = { x: 10, y: 10 } // Reset position
  $player.style.top = `${playerPos.y}px`
  $player.style.left = `${playerPos.x}px`
  $congratulations.textContent = ''
}
