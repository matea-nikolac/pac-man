function init() {

  // ! Generating a grid

  // select grid from the HTML document
  const grid = document.querySelector('.grid')

  // define the width and total cell number
  const width = 28
  const cellCount = width * width

  // define grid related variables
  const cells = []

  // ! Variables

  // select the start button from the HTML document
  const start = document.querySelector('.start-button')

  // select fruit, lives and score span from the HTML document
  const fruitSpan = document.querySelector('.fruit')
  const livesSpan = document.querySelector('.lives')
  const scoreSpan = document.querySelector('.score')

  // select the fruit, lives and score paragraph from the HTML document
  const fruitParagraph = document.querySelector('.fruit-paragraph')
  const livesParagraph = document.querySelector('.lives-paragraph')
  const scoreParagraph = document.querySelector('.score-paragraph')

  // define the indexes for specific elements on the game grid
  const wallIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 55, 41, 42, 56, 58, 59, 60, 62, 63, 64, 65, 66, 67, 69, 70, 72, 73, 74, 75, 76, 77, 79, 80, 81, 83, 84, 86, 87, 88, 90, 91, 92, 93, 94, 95, 97, 98, 100, 101, 102, 103, 104, 105, 107, 108, 109, 111, 112, 114, 115, 116, 118, 119, 120, 121, 122, 123, 125, 126, 128, 129, 130, 131, 132, 133, 135, 136, 137, 139,140, 167, 168, 170, 171, 172, 174, 175, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 188, 189, 191, 192, 193, 195, 196, 198, 199, 200, 202, 203, 209, 210, 216, 217, 219, 220, 221, 223, 224, 230, 231, 232, 233, 234, 235, 237, 238, 240, 241, 242, 243, 244, 245, 251, 252, 253, 254, 255, 256, 258, 259, 260, 261, 262, 263, 265, 266, 268, 269, 270, 271, 272, 273, 275, 276, 277, 278, 279, 284, 286, 287, 300, 301, 303, 312, 314, 315, 317, 318, 319, 320, 323, 324, 325, 326, 328, 329, 331, 336, 337, 338, 339, 340, 342, 343, 345, 354, 356, 357, 359, 360, 361, 362, 363, 373, 382, 392, 393, 394, 395, 396, 398, 399, 401, 410, 412, 413, 415, 416, 417, 418, 419, 424, 426, 427, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 440, 441, 443, 452, 454, 455, 468, 469, 471, 476, 477, 478, 479, 480, 482, 483, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 496, 497, 499, 500, 501, 502, 503, 504, 517, 518, 531, 532, 534, 535, 536, 538, 539, 540, 541, 542, 543, 545, 546, 548, 549, 550, 551, 552, 553, 555, 556, 557, 559,560, 562, 563, 564, 566, 567, 568, 569, 570, 571, 573, 574, 576, 577, 578, 579, 580, 581, 583, 584, 585, 587, 588, 592, 611, 615, 616, 617, 618, 620, 622, 623, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 636, 637, 639, 641, 642, 643, 644, 650, 651, 657, 658, 664, 665, 671,672, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 685, 686, 688, 689, 690, 691, 692, 693, 694, 695, 696, 697, 699, 700, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 713, 714, 716, 717, 718, 719, 720, 721, 722, 723, 724, 725, 727, 728, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782,783, 786, 346, 374, 402, 346, 353, 381, 409, 347, 348, 351, 352]
  const offLimitsIndex = [280, 281, 282, 283, 304, 305, 306, 307, 308, 309, 310, 311, 332, 333, 334, 335, 420, 421, 422, 423, 444, 445, 446, 447, 448, 449, 450, 451, 472,473, 474, 475]
  const ghostHouseIndex = [349, 350, 375, 376, 377, 378, 379, 380, 403, 404, 405, 406, 407, 408]
  const ghostHouseBorderIndex = [321, 322]
  const powerPelletsIndex = [85, 110, 589, 614]
  const pacmanStartIndex = 602
  const blinkyStartIndex = 293
  const inkyStartIndex = 405
  const pinkyStartIndex = 406
  const clydeStartIndex = 407

  // define pac-man's current position
  let currentPosition = pacmanStartIndex

  // define ghosts' current position
  let currentGhostPositions = {
    blinky: blinkyStartIndex,
    inky: inkyStartIndex,
    pinky: pinkyStartIndex,
    clyde: clydeStartIndex
  }
  // ghosts' current position
  let currentGhostDirection = {
    blinky: null,
    inky: null,
    pinky: null,
    clyde: null
  }

  // define lives left and score
  const livesLeft = 3
  const score = 0

  // define available directions for ghosts
  const directions = ['left', 'right', 'up', 'down']

  // define available fruit
  const fruits = [
    'cherry.webp',
    'strawberry.webp'
  ]
  // declare pac-man timer variable 
  let timer

  // declare timer variable for ghosts
  const timerGhosts = {}
  const ghostHouseTimer = {}

  // hide score, lives left and fruit before "start" is clicked
  fruitParagraph.style.visibility = 'hidden'
  livesParagraph.style.visibility = 'hidden'
  scoreParagraph.style.visibility = 'hidden'


  // ! Create Grid

  function createGrid(){
    console.log('Grid created!')
    const cell = document.createElement('div')

    // create the grid
    for (let i = 0; i < cellCount; i++){
      const cell = document.createElement('div')
      cell.dataset.index = i
      grid.appendChild(cell)
      cells.push(cell)
    }
    
 // ! Assign positions to maze elements

    // Assign positions to the wall class

    wallIndex.forEach(index => {
      cells[index]?.classList.add('wall')
    })

    // Assign positions to the off-limits class
    offLimitsIndex.forEach(index => {
      cells[index]?.classList.add('off-limits-index')
    })

    // Assign positions to the ghost-house class
    ghostHouseIndex.forEach(index => {
      cells[index]?.classList.add('ghost-house')
    })

    // Assign positions to the ghost-house-border class
    ghostHouseBorderIndex.forEach(index => {
      cells[index]?.classList.add('ghost-house-border')
    })

     // Assign positions to the pellet class
    const pelletsIndex = cells.filter(element => {
      return !element.classList.contains('wall') 
        && !element.classList.contains('off-limits-index') 
        && !element.classList.contains('ghost-house')
        && !element.classList.contains('ghost-house-border')
    }).map(element => element.dataset.index)

    pelletsIndex.forEach(index => {
      cells[index]?.classList.add('pellet')
    })

    // Assign positions to the power-pellets class
    powerPelletsIndex.forEach(index => {
      cells[index]?.classList.add('power-pellet')
    })

    // ! Assign initial positions to characters

    // Assign initial positions to pacman
    cells[pacmanStartIndex]?.classList.add('pac-man')

    // Assign initial positions to ghosts
    cells[blinkyStartIndex]?.classList.add('blinky')
    cells[inkyStartIndex]?.classList.add('inky')
    cells[pinkyStartIndex]?.classList.add('pinky')
    cells[clydeStartIndex]?.classList.add('clyde')

    // start the game
    gamePlay()
  }

  // ! Executions

  function gamePlay() {

    // disable the start button so that a new grid cannot be created if it is clicked again
    start.disabled = true

    // show score, lives left and fruit once "start" is clicked
    fruitParagraph.style.visibility = 'visible'
    livesParagraph.style.visibility = 'visible'
    scoreParagraph.style.visibility = 'visible'

    // add event listener for arrow key press
    document.addEventListener('keydown', movePacman)

  
    moveGhosts('blinky')

    setTimeout(() => {
      moveFromGhostHouse('pinky')
    }, 1000)
    

    setTimeout(() => {
      moveFromGhostHouse('inky')
    }, 3000)

    setTimeout(() => {
      moveFromGhostHouse('clyde')
    }, 5000)

    // moveGhosts('pinky')
    // moveGhosts('clyde')

    // addFruit()
    // checkPelletCollisions()
    // checkPowerPelletCollisions()
    // checkGhostCollisions()

  }

  function movePacman(event){
    // based on the arrow key press, change pac-man's direction

    const right = 39
    const left = 37
    const up = 38
    const down = 40

    cells[currentPosition].classList.remove('pac-man')


    if (event.keyCode === right && cells[currentPosition+1].classList.contains('wall')!== true){
      clearInterval(timer)

      timer = setInterval(() => {
        if (currentPosition === 391 && cells[currentPosition].classList.contains('move-right')){
          cells[currentPosition].classList.remove('pac-man')
          cells[currentPosition].classList.remove('move-right', 'move-left', 'move-up', 'move-down')
          currentPosition = 364
          cells[currentPosition].classList.add('pac-man')
          cells[currentPosition].classList.add('move-right')

        } else if (!cells[currentPosition + 1].classList.contains('wall') && !cells[currentPosition + 1].classList.contains('ghost-house-border')){
          cells[currentPosition].classList.remove('pac-man')
          cells[currentPosition].classList.remove('move-right', 'move-left', 'move-up', 'move-down')
          currentPosition++
          console.log('CURRENT POSITION', currentPosition)
          cells[currentPosition].classList.add('pac-man')
          cells[currentPosition].classList.add('move-right')
        } 
    }, 220)

    } else if (event.keyCode === left && cells[currentPosition-1].classList.contains('wall')!== true){
      clearInterval(timer)
      timer = setInterval(() => {
        if (currentPosition === 364 && cells[currentPosition].classList.contains('move-left')){
          cells[currentPosition].classList.remove('pac-man')
          cells[currentPosition].classList.remove('move-right', 'move-left', 'move-up', 'move-down')
          currentPosition = 391
          cells[currentPosition].classList.add('pac-man')
          cells[currentPosition].classList.add('move-left')
        } else if (!cells[currentPosition - 1].classList.contains('wall') && !cells[currentPosition - 1].classList.contains('ghost-house-border')){
          cells[currentPosition].classList.remove('pac-man')
          cells[currentPosition].classList.remove('move-right', 'move-left', 'move-up', 'move-down')
          currentPosition--
          cells[currentPosition].classList.add('pac-man')
          cells[currentPosition].classList.add('move-left')
        }
    }, 220)
    } else if (event.keyCode === up && cells[currentPosition-width].classList.contains('wall')!== true){
      clearInterval(timer)
      timer = setInterval(() => {
        if (!cells[currentPosition - width].classList.contains('wall') && !cells[currentPosition - width].classList.contains('ghost-house-border')){
          cells[currentPosition].classList.remove('move-right', 'move-left', 'move-up', 'move-down')
          cells[currentPosition].classList.remove('pac-man')
          currentPosition -= width
          cells[currentPosition].classList.add('pac-man')
          cells[currentPosition].classList.add('move-up')
          }
        }, 220)
    } else if (event.keyCode === down && cells[currentPosition+width].classList.contains('wall')!== true){
      clearInterval(timer)
      timer = setInterval(() => {
        if (!cells[currentPosition + width].classList.contains('wall') && !cells[currentPosition + width].classList.contains('ghost-house-border')){
          cells[currentPosition].classList.remove('move-right', 'move-left', 'move-up', 'move-down')
          cells[currentPosition].classList.remove('pac-man')
          currentPosition += width
          cells[currentPosition].classList.add('pac-man')
          cells[currentPosition].classList.add('move-down')
          }
        }, 220)
    } else {
      console.log('KEY INVALID')
    }

    // cells[currentPosition].classList.add(`move-${event.keyCode}`)
    // console.log(`move-${event.keyCode}`)

    cells[currentPosition].classList.add('pac-man')
  

    // save pacman's new position
    // make sure pac-man avoids walls

    // --- SET INTERVAL TIMER for the pacman to keep going. 
    // ---> MAYBE --> add check end game funciton --> call it every time there is a collision

    // checkEnd()

  }

  function moveGhosts(className){

    let randomDirection = directions[Math.floor(Math.random() * directions.length)]
    console.log('FIRST DIRECTION:', randomDirection)
    currentGhostDirection[className] = randomDirection
    

    let leftDirectionOptions
    let randomLeftDirection

    let rightDirectionOptions
    let randomRightDirection

    let upDirectionOptions
    let randomUpDirection

    let downDirectionOptions
    let randomDownDirection

    // repeat timerGhost every 1.5 second
    timerGhosts[className] = setInterval(() => {

      //GHOST MOVING LEFT
      if (currentGhostDirection[className] == 'left'){
        console.log('cells[currentGhostPositions[className]].dataset.index -->', cells[currentGhostPositions[className]].dataset.index)

        // if ghost is in the cell with index 364
        if (currentGhostPositions[className] === 364){
          console.log('364 LEFT - MOVING LEFT - CHECKING RIGHT')
          randomLeftDirection = 'left'
        }

        // IF THERE IS A WALL ON THE LEFT
        else if (cells[currentGhostPositions[className] - 1].classList.contains('wall')){

          // if there is not a wall up and down
          if (!(cells[currentGhostPositions[className] - width].classList.contains('wall')) 
          && !(cells[currentGhostPositions[className] + width].classList.contains('wall'))
          )
            {
          console.log('WALL LEFT - MOVING LEFT - CHECKING UP, DOWN AND RIGHT')
          leftDirectionOptions = ['up', 'down', 'right']
          randomLeftDirection = leftDirectionOptions[Math.floor(Math.random() * leftDirectionOptions.length)]
          } 

          // if there is not a wall up, but there is a wall down 
          else if (!(cells[currentGhostPositions[className] - width].classList.contains('wall')) 
            && (cells[currentGhostPositions[className] + width].classList.contains('wall'))
            )
              {
            console.log('WALL LEFT - MOVING LEFT - CHECKING UP AND RIGHT')
            leftDirectionOptions = ['up', 'right']
            randomLeftDirection = leftDirectionOptions[Math.floor(Math.random() * leftDirectionOptions.length)]
          } 

          // if there is a wall up, but there is not a wall down 
          else if ((cells[currentGhostPositions[className] - width].classList.contains('wall')) 
            && !(cells[currentGhostPositions[className] + width].classList.contains('wall'))
            )
              {
            console.log('WALL LEFT - MOVING LEFT - CHECKING DOWN AND RIGHT')
            leftDirectionOptions = ['down', 'right']
            randomLeftDirection = leftDirectionOptions[Math.floor(Math.random() * leftDirectionOptions.length)]
            console.log("CHOSEN", randomLeftDirection)
          } 
        } 
        // IF THERE IS NOT A WALL ON THE LEFT
        else if (!cells[currentGhostPositions[className] - 1].classList.contains('wall')){

          // if there is not a wall up, and if there is neither a wall nor a ghost house border down
          if (!(cells[currentGhostPositions[className] - width].classList.contains('wall')) 
          && (!(cells[currentGhostPositions[className] + width].classList.contains('wall') 
          && !cells[currentGhostPositions[className] + width].classList.contains('ghost-house-border'))
          )){
            console.log('NO WALL LEFT - MOVING LEFT - CHECKING UP, DOWN AND LEFT')
            // then go up, down, or continue left
            leftDirectionOptions = ['up', 'down', 'left']
            randomLeftDirection = leftDirectionOptions[Math.floor(Math.random() * leftDirectionOptions.length)]
          } 

          // if there is not a wall up, but there is either a wall or ghost-house border down 
          else if (!(cells[currentGhostPositions[className] - width].classList.contains('wall')) 
          && ((cells[currentGhostPositions[className] + width].classList.contains('wall')) 
          || (cells[currentGhostPositions[className] + width].classList.contains('ghost-house-border')))
          ){
            console.log('NO WALL LEFT - MOVING LEFT - CHECKING UP AND LEFT')
            // then go up, or continue left
            leftDirectionOptions = ['up', 'left' ]
            randomLeftDirection = leftDirectionOptions[Math.floor(Math.random() * leftDirectionOptions.length)]
          } 
          
          // if there is a wall up, and there is no wall down, and there is no ghost house border down
          else if (cells[currentGhostPositions[className] - width].classList.contains('wall') 
          && (!cells[currentGhostPositions[className] + width].classList.contains('wall') 
              && !cells[currentGhostPositions[className] + width].classList.contains('ghost-house-border')
          ))
              {
            // then go down, or go continue left
            leftDirectionOptions = ['down', 'left']
            randomLeftDirection = leftDirectionOptions[Math.floor(Math.random() * leftDirectionOptions.length)]
          } else {
            randomLeftDirection = 'left'
          }
        }
      
        randomDirection = randomLeftDirection
        

      }

      //GHOST MOVING RIGHT
      if (currentGhostDirection[className] == 'right'){

        // if ghost is in the cell with index 391
        if (currentGhostPositions[className] === 391){
          console.log('391 RIGHT - MOVING RIGHT - CHECKING RIGHT')
          randomRightDirection = 'right'
        }

        // IF THERE IS A WALL ON THE RIGHT
        else if (cells[currentGhostPositions[className] + 1].classList.contains('wall')){

          // if there is not a wall up and down
          if (!(cells[currentGhostPositions[className] - width].classList.contains('wall')) 
          && !(cells[currentGhostPositions[className] + width].classList.contains('wall'))
          )
            {
          console.log('WALL RIGHT - MOVING RIGHT - CHECKING UP, DOWN AND LEFT')
          rightDirectionOptions = ['up', 'down', 'left']
          randomRightDirection = rightDirectionOptions[Math.floor(Math.random() * rightDirectionOptions.length)]
          } 

          // if there is not a wall up, but there is a wall down 
          else if (!(cells[currentGhostPositions[className] - width].classList.contains('wall')) 
            && (cells[currentGhostPositions[className] + width].classList.contains('wall'))
            )
              {
            console.log('WALL RIGHT - MOVING RIGHT - CHECKING UP AND LEF')
            rightDirectionOptions = ['up', 'left']
            randomRightDirection = rightDirectionOptions[Math.floor(Math.random() * rightDirectionOptions.length)]
          } 

          // if there is a wall up, but there is not a wall down 
          else if ((cells[currentGhostPositions[className] - width].classList.contains('wall')) 
            && !(cells[currentGhostPositions[className] + width].classList.contains('wall'))
            )
              {
            console.log('WALL RIGHT - MOVING RIGHT - CHECKING DOWN AND LEFT')
            rightDirectionOptions = ['down', 'left']
            randomRightDirection  = rightDirectionOptions[Math.floor(Math.random() * rightDirectionOptions.length)]
          } 

        } 
        // IF THERE IS NOT A WALL ON THE LEFT
        else if (!cells[currentGhostPositions[className] - 1].classList.contains('wall')){

          // if there is not a wall up, and if there is neither a wall nor a ghost house border down
          if (!(cells[currentGhostPositions[className] - width].classList.contains('wall')) 
          && (!(cells[currentGhostPositions[className] + width].classList.contains('wall') 
          || cells[currentGhostPositions[className] + width].classList.contains('ghost-house-border'))
          )){
            console.log('NO WALL RIGHT - MOVING RIGHT, DOWN AND LEFT')
            // then go up, down, or continue right
            rightDirectionOptions  = ['up', 'down', 'right']
            randomRightDirection  = rightDirectionOptions[Math.floor(Math.random() * rightDirectionOptions.length)]
          } 

          // if there is not a wall up, but there is either a wall or ghost-house border down 
          else if (!(cells[currentGhostPositions[className] - width].classList.contains('wall')) 
          && ((cells[currentGhostPositions[className] + width].classList.contains('wall')) 
          || (cells[currentGhostPositions[className] + width].classList.contains('ghost-house-border')))
          ){
            console.log('NO WALL RIGHT - MOVING RIGHT - CHECKING UP AND RIGHT')
            // then go up, or continue right
            rightDirectionOptions  = ['up', 'right' ]
            randomRightDirection  = rightDirectionOptions[Math.floor(Math.random() * rightDirectionOptions.length)]
          } 
          
          // if there is a wall up, and there is no wall down, and there is no ghost house border down
          else if (cells[currentGhostPositions[className] - width].classList.contains('wall')
          && !cells[currentGhostPositions[className] + width].classList.contains('wall')
          && !cells[currentGhostPositions[className] + width].classList.contains('ghost-house-border')
          )
              {
            console.log('NO WALL RIGHT - MOVING RIGHT - CHECKING DOWN AND RIGHT')
            // then go down, or continue right
            rightDirectionOptions = ['down', 'right']
            randomRightDirection  = rightDirectionOptions[Math.floor(Math.random() * rightDirectionOptions.length)]
          } else {
            randomRightDirection  = 'right'
          }
        }
      
        randomDirection = randomRightDirection 
        

      }

      //GHOST MOVING UP
      if (currentGhostDirection[className] == 'up'){

        // IF THERE IS A WALL ABOVE
        if (cells[currentGhostPositions[className] - width].classList.contains('wall')){

          // if there is not a wall left and right, and there is no wall or ghost house border below
          if (!(cells[currentGhostPositions[className] - 1].classList.contains('wall')) 
          && !(cells[currentGhostPositions[className] + 1].classList.contains('wall'))
          && !(cells[currentGhostPositions[className] + width].classList.contains('wall'))
          && !(cells[currentGhostPositions[className] + width].classList.contains('ghost-house-border'))
          )
            {
          console.log('WALL ABOVE - MOVING UP - CHECKING LEFT, RIGHT AND DOWN')
          upDirectionOptions = ['left', 'right', 'down']
          randomUpDirection = upDirectionOptions[Math.floor(Math.random() * upDirectionOptions.length)]
          } 
          // if there is not a wall left and right, and there is a wall or ghost house border below
          else  if (!(cells[currentGhostPositions[className] - 1].classList.contains('wall')) 
          && !(cells[currentGhostPositions[className] + 1].classList.contains('wall'))
          && ((cells[currentGhostPositions[className] + width].classList.contains('wall'))
          || (cells[currentGhostPositions[className] + width].classList.contains('ghost-house-border')))
          )
            {
          console.log('WALL ABOVE - MOVING UP - CHECKING LEFT AND RIGHT')
          upDirectionOptions = ['left', 'right']
          randomUpDirection = upDirectionOptions[Math.floor(Math.random() * upDirectionOptions.length)]
          } 

          // if there is not a wall left but there is a wall right
          else if (!(cells[currentGhostPositions[className] - 1].classList.contains('wall')) 
            && (cells[currentGhostPositions[className] + 1].classList.contains('wall'))
            )
              {
            console.log('WALL ABOVE - MOVING UP - CHECKING LEFT AND DOWN')
            upDirectionOptions = ['left', 'down']
            randomUpDirection = upDirectionOptions[Math.floor(Math.random() * upDirectionOptions.length)]
          } 

          // if there is a wall left but there is not a wall right
          else if ((cells[currentGhostPositions[className] - 1].classList.contains('wall')) 
            && !(cells[currentGhostPositions[className] + 1].classList.contains('wall'))
            )
              {
            console.log('WALL ABOVE - MOVING UP - CHECKING DOWN AND RIGHT')
            upDirectionOptions = ['down', 'right']
            randomUpDirection = upDirectionOptions[Math.floor(Math.random() * upDirectionOptions.length)]
          } 

        } 
        // IF THERE IS NO WALL ABOVE
        else if (!cells[currentGhostPositions[className] - width].classList.contains('wall')){

          // if there is not a wall left and right
          if (!(cells[currentGhostPositions[className] - 1].classList.contains('wall')) 
          && !(cells[currentGhostPositions[className] + 1].classList.contains('wall'))
          )
            {
          console.log('NO WALL ABOVE - MOVING UP - CHECKING LEFT, RIGHT AND UP')
          upDirectionOptions = ['left', 'right', 'up']
          randomUpDirection = upDirectionOptions[Math.floor(Math.random() * upDirectionOptions.length)]
          } 

          // if there is not a wall left but there is a wall right
          else if (!(cells[currentGhostPositions[className] - 1].classList.contains('wall')) 
            && (cells[currentGhostPositions[className] + 1].classList.contains('wall'))
            )
              {
            console.log('NO WALL ABOVE - MOVING UP - CHECKING LEFT AND UP')
            upDirectionOptions = ['left', 'up']
            randomUpDirection = upDirectionOptions[Math.floor(Math.random() * upDirectionOptions.length)]
          } 

          // if there is a wall left but there is not a wall right
          else if ((cells[currentGhostPositions[className] - 1].classList.contains('wall')) 
            && !(cells[currentGhostPositions[className] + 1].classList.contains('wall'))
            )
              {
            console.log('NO WALL ABOVE - MOVING UP - CHECKING UP AND RIGHT')
            upDirectionOptions = ['up', 'right']
            randomUpDirection = upDirectionOptions[Math.floor(Math.random() * upDirectionOptions.length)]
          } else {
            randomUpDirection = 'up'
          }
        }
      
        randomDirection = randomUpDirection
        console.log('finally proceeding with', randomDirection)
        

      }

      //GHOST MOVING DOWN
      if (currentGhostDirection[className] == 'down'){

        // IF THERE IS A WALL BELOW
        if (cells[currentGhostPositions[className] + width].classList.contains('wall') || cells[currentGhostPositions[className] + width].classList.contains('ghost-house-border')){

          // if there is not a wall left and right, and there is a wall up
          if (!(cells[currentGhostPositions[className] - 1].classList.contains('wall')) 
          && !(cells[currentGhostPositions[className] + 1].classList.contains('wall'))
          && (cells[currentGhostPositions[className] - width].classList.contains('wall'))
          )
            {
          console.log('WALL BELOW - MOVING DOWN - CHECKING LEFT AND RIGHT')
          downDirectionOptions = ['left', 'right']
          randomDownDirection = downDirectionOptions[Math.floor(Math.random() * downDirectionOptions.length)]
          } 
          
          // if there is not a wall left and right, and there is no wall up
          if (!(cells[currentGhostPositions[className] - 1].classList.contains('wall')) 
          && !(cells[currentGhostPositions[className] + 1].classList.contains('wall'))
          && !(cells[currentGhostPositions[className] - width].classList.contains('wall'))
          )
            {
          console.log('WALL BELOW - MOVING DOWN - CHECKING LEFT, RIGHT AND UP')
          downDirectionOptions = ['left', 'right', 'up']
          randomDownDirection = downDirectionOptions[Math.floor(Math.random() * downDirectionOptions.length)]
          }


          // if there is not a wall left but there is a wall right
          else if (!(cells[currentGhostPositions[className] - 1].classList.contains('wall')) 
            && (cells[currentGhostPositions[className] + 1].classList.contains('wall'))
            )
              {
            console.log('WALL BELOW - MOVING DOWN - CHECKING LEFT AND UP')
            downDirectionOptions = ['left', 'up']
            randomDownDirection = downDirectionOptions[Math.floor(Math.random() * downDirectionOptions.length)]
          } 

          // if there is a wall left but there is not a wall right
          else if ((cells[currentGhostPositions[className] - 1].classList.contains('wall')) 
            && !(cells[currentGhostPositions[className] + 1].classList.contains('wall'))
            )
              {
            console.log('WALL BELOW - MOVING DOWN - CHECKING UP AND RIGHT')
            downDirectionOptions = ['up', 'right']
            randomDownDirection = downDirectionOptions[Math.floor(Math.random() * downDirectionOptions.length)]
          } 

        } 
        // IF THERE IS NO WALL BELOW
        else if (!cells[currentGhostPositions[className] + width].classList.contains('wall') && !cells[currentGhostPositions[className] + width].classList.contains('ghost-house-border')){

          // if there is not a wall left and right
          if (!(cells[currentGhostPositions[className] - 1].classList.contains('wall')) 
          && !(cells[currentGhostPositions[className] + 1].classList.contains('wall'))
          )
            {
            console.log('NO WALL BELOW - MOVING DOWN - CHECKING LEFT, RIGHT AND DOWN')
            downDirectionOptions = ['left', 'right', 'down']
            randomDownDirection = downDirectionOptions[Math.floor(Math.random() * downDirectionOptions.length)]
            } 

          // if there is not a wall left but there is a wall right
          else if (!(cells[currentGhostPositions[className] - 1].classList.contains('wall')) 
            && (cells[currentGhostPositions[className] + 1].classList.contains('wall'))
            )
            {
              console.log('NO WALL BELOW - MOVING DOWN - CHECKING LEFT AND DOWN')
              downDirectionOptions = ['left', 'down']
              randomDownDirection = downDirectionOptions[Math.floor(Math.random() * downDirectionOptions.length)]
            } 

          // if there is a wall left but there is not a wall right
          else if ((cells[currentGhostPositions[className] - 1].classList.contains('wall')) 
            && !(cells[currentGhostPositions[className] + 1].classList.contains('wall'))
            )
            {
              console.log('NO WALL BELOW - MOVING DOWN - CHECKING DOWN AND RIGHT')
              downDirectionOptions = ['down', 'right']
              randomDownDirection = downDirectionOptions[Math.floor(Math.random() * downDirectionOptions.length)]
            } 
          else {
            randomDownDirection = 'down'
          }
        }
      
        randomDirection = randomDownDirection

      }


    currentGhostDirection[className] = randomDirection
    console.log('currentGhostDirection[blinky]', currentGhostDirection[className])
    
      if (randomDirection === 'left' && currentGhostPositions[className] === 364){
        cells[currentGhostPositions[className]].classList.remove(className)
        currentGhostPositions[className] = 391
        cells[currentGhostPositions[className]].classList.add(className)
      } else if (randomDirection === 'left'){
        cells[currentGhostPositions[className]].classList.remove(className)
        currentGhostPositions[className]--
        cells[currentGhostPositions[className]].classList.add(className)

      } else if (randomDirection === 'right' && currentGhostPositions[className] === 391){
        cells[currentGhostPositions[className]].classList.remove(className)
        currentGhostPositions[className] = 364
        cells[currentGhostPositions[className]].classList.add(className)
      } else if (randomDirection === 'right'){
        cells[currentGhostPositions[className]].classList.remove(className)
        currentGhostPositions[className]++
        cells[currentGhostPositions[className]].classList.add(className)

      } else if (randomDirection === 'up'){
        cells[currentGhostPositions[className]].classList.remove(className)
        currentGhostPositions[className] -= width
        cells[currentGhostPositions[className]].classList.add(className)
      } else if (randomDirection === 'down'){
        cells[currentGhostPositions[className]].classList.remove(className)
        currentGhostPositions[className] += width
        cells[currentGhostPositions[className]].classList.add(className)
      }

      console.log('currentGhostPositions[className]', currentGhostPositions[className])
    }, 220)

  }

  function moveFromGhostHouse(className){
    if (className === 'pinky' || className === 'inky'){
        // (`${className}StartIndex`)
      setTimeout(() => {
        clearInterval (ghostHouseTimer[className])
      }, 2001)

      setTimeout(() => {
        moveGhosts (className)
      }, 2001)

      ghostHouseTimer[className] = setInterval(() => {
        cells[currentGhostPositions[className]].classList.remove(className)
        currentGhostPositions[className] -= width
        cells[currentGhostPositions[className]].classList.add(className)
      }, 500)

        // cells[currentGhostPositions[className]+1]

      } else if (className === 'clyde'){
      cells[currentGhostPositions[className]].classList.remove(className)
      currentGhostPositions[className] -= 1
      cells[currentGhostPositions[className]].classList.add(className)

      setTimeout(() => {
        clearInterval (ghostHouseTimer[className])
      }, 2001)

      setTimeout(() => {
        moveGhosts (className)
      }, 2001)



      ghostHouseTimer[className] = setInterval(() => {
        cells[currentGhostPositions[className]].classList.remove(className)
        currentGhostPositions[className] -= width
        cells[currentGhostPositions[className]].classList.add(className)
      }, 500)

}

// 

    // choose random direction for the ghosts and make sure they avoid going over walls
    // change the position of the ghost based on that direction

    // --- SET INTERVAL TIMER


  function addFruit(){
    // Make sure that the appearance of fruit does not exceed a limit of 2 fruits per round
    // set a timer for the fruit to appear
    // choose a random fruit
    // the fruit appears on the screen
    // Set a timer/timeOut for how long the fruit will remain on the screen
    // if the timer has expired, remove the fruit
  }

  function checkPelletCollisions(){
    // check if pac-man has the same position as a pellet
    //    if yes,remove the pellet and add points
  }

  function checkPowerPelletCollisions(){
    // check if pac-man has the same position as a power pellet
    //    if yes, remove the power pellet and add points
  }

  function checkGhostCollisions(){
    // check for collision with ghosts
    // if the ghosts are regular, pac-man loses a life 
    // if the ghosts are regular, pac-man and the ghosts go back to the starting postion
    // if the ghosts are vulnerable, points are added
    // if the ghosts are vulnerable, the ghost is removed


    
    // ---> add check end game funciton --> call it every time there is a collision
  }

  function checkFruitCollisions(){
    // if the fruit is eaten by pac-man, then increase the points
  }

  function checkEnd(){
    const timerEndCheck = setInterval(() => {
      if (livesLeft === 0) {
        clearInterval(timerEndCheck)
        gameOverAlert()
      }
    }, 15)
  }

  function gameOverAlert(){
    const answer = prompt('Game Over! Would you like to play another game?')
    // ask the player if they want to play again
    // if yes, clear everthing()
    if (answer === 'yes'){
      clearAll()
      gamePlay()
    } else if (answer === 'no') {
      prompt('Thank you for playing!')
    }
  }

  function clearAll(){
    // clear number of lives
    // clear score
    // clear fruit collected
  }

  // ! Events

  }
  
  start.addEventListener('click', createGrid)

  // ! Page Load

}
window.addEventListener('DOMContentLoaded', init)