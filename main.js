// DOM elements
const $player = document.querySelector('.player')
const $maze = document.querySelector('.maze')

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
  }
})
