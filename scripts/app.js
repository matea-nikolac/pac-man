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
  const fruitIndex = 461

  // define the current position of pac-man
  let currentPosition = pacmanStartIndex

  // define the current position of the ghosts
  let currentGhostPositions = {
    blinky: blinkyStartIndex,
    inky: inkyStartIndex,
    pinky: pinkyStartIndex,
    clyde: clydeStartIndex,
    vulnerableblinky: blinkyStartIndex,
    vulnerablebleinky: inkyStartIndex,
    vulnerableblepinky: pinkyStartIndex,
    vulnerableclyde: clydeStartIndex
  }

  // define ghost names and classes
  const ghostNames = ['blinky', 'inky', 'pinky', 'clyde']
  const vulnerableGhostNames = ['vulnerableblinky', 'vulnerableinky', 'vulnerablepinky', 'vulnerableclyde']
  let ghostClassName
  let originalClassName

  // define ghost vulnerability

  const isVulnerable = {
    blinky: false,
    inky: false,
    pinky: false,
    clyde: false,
    vulnerableblinky: false,
    vulnerableinky: false,
    vulnerablepinky: false,
    vulnerableclyde: false,
  }

  let vulnerable = false
  let vulnerableTimeout

  // define ghosts' current direction
  let currentGhostDirection = {
    blinky: null,
    inky: null,
    pinky: null,
    clyde: null,
    vulnerableblinky: null,
    vulnerablebleinky: null,
    vulnerableblepinky: null,
    vulnerableclyde: null
  }

// define ghosts' start indexes
  const ghostStartIndexes = {
    blinky: 293,
    inky: 405,
    pinky: 406,
    clyde: 407
  }

  // define and display lives andscore
  let livesLeft = 3
  let score = 0
  scoreSpan.innerHTML = score

   // count the pellets
  let pelletsCount = 0

  // define pellet, power pellet and fruit points
  let pelletPoints = 100
  const powerPelletPoints = [200, 400, 800, 1600]
  const vulnerableGhostPoints = [200, 400, 800, 1600]
  const cherryPoints = 100

 // define power pellet and vlunerableghost indexes
  let powerPelletIndex = 0
  let vulnerableGhostIndex = 0


  // define available directions for ghosts
  const directions = ['left', 'right', 'up', 'down']

  // declare pac-man timer variable 
  let timer


  // gamePlay timeouts
  let timeouts = []
  let gamePlayTimeout
  let beginningTimeout

  // moveFromGhostHouse timeouts
  let ghostHouseTimeouts = []

  // declare timer variable for ghosts
  let timerGhosts = {}
  let ghostHouseTimer = {}

  // hide score, lives left and fruit before "start" is clicked
  fruitParagraph.style.visibility = 'hidden'
  livesParagraph.style.visibility = 'hidden'
  scoreParagraph.style.visibility = 'hidden'


  let pelletsIndex 

  // ! Create Grid

  function createGrid(){
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
    pelletsIndex = cells.filter(element => {
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
      cells[index]?.classList.remove('pellet')
    })

    // add pac-man images
    for (let i = 0; i < livesLeft; i++) {
      const pacmanImg = document.createElement('img');
      pacmanImg.src = 'assets/pacman.png';
      pacmanImg.alt = 'pacman';
      pacmanImg.classList.add('pac-man-lives-image');
      livesSpan.appendChild(pacmanImg);
    }

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

    const audio = new Audio('sounds/pacman_beginning.wav')
    audio.play()

    // disable the start button so that a new grid cannot be created if it is clicked again
    start.disabled = true

    // show score, lives left and fruit once "start" is clicked
    fruitParagraph.style.visibility = 'visible'
    livesParagraph.style.visibility = 'visible'
    scoreParagraph.style.visibility = 'visible'

    beginningTimeout = setTimeout(() => {
      moveGhosts('blinky')
      moveFromGhostHouse('pinky')
      moveFromGhostHouse('inky')
      moveFromGhostHouse('clyde')

      // add event listener for arrow key press
      document.addEventListener('keydown', movePacman)
      
    }, 4000)

    setTimeout(() => {
      clearTimeout(beginningTimeout)
    }, 4001)

    addFruit()
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
          checkPelletCollisions()
          checkPowerPelletCollisions()
          checkFruitCollisions()
          checkGhostCollisions()

        } else if (!cells[currentPosition + 1].classList.contains('wall') && !cells[currentPosition + 1].classList.contains('ghost-house-border')){
          cells[currentPosition].classList.remove('pac-man')
          cells[currentPosition].classList.remove('move-right', 'move-left', 'move-up', 'move-down')
          currentPosition++
          cells[currentPosition].classList.add('pac-man')
          cells[currentPosition].classList.add('move-right')
          checkPelletCollisions()
          checkPowerPelletCollisions()
          checkFruitCollisions()
          checkGhostCollisions()
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
          checkPelletCollisions()
          checkPowerPelletCollisions()
          checkFruitCollisions()
          checkGhostCollisions()

        } else if (!cells[currentPosition - 1].classList.contains('wall') && !cells[currentPosition - 1].classList.contains('ghost-house-border')){
          cells[currentPosition].classList.remove('pac-man')
          cells[currentPosition].classList.remove('move-right', 'move-left', 'move-up', 'move-down')
          currentPosition--
          cells[currentPosition].classList.add('pac-man')
          cells[currentPosition].classList.add('move-left')
          checkPelletCollisions()
          checkPowerPelletCollisions()
          checkFruitCollisions()
          checkGhostCollisions()
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
          checkPelletCollisions()
          checkPowerPelletCollisions()
          checkFruitCollisions()
          checkGhostCollisions()
          }
        }, 220)
    } else if (event.keyCode === down && cells[currentPosition+width].classList.contains('wall')!== true && cells[currentPosition+width].classList.contains('ghost-house-border')!== true){
      clearInterval(timer)
      timer = setInterval(() => {
        if (!cells[currentPosition + width].classList.contains('wall') && !cells[currentPosition + width].classList.contains('ghost-house-border')){
          cells[currentPosition].classList.remove('move-right', 'move-left', 'move-up', 'move-down')
          cells[currentPosition].classList.remove('pac-man')
          currentPosition += width
          cells[currentPosition].classList.add('pac-man')
          cells[currentPosition].classList.add('move-down')
          checkPelletCollisions()
          checkPowerPelletCollisions()
          checkFruitCollisions()
          checkGhostCollisions()
          }
        }, 220)
    } 

    cells[currentPosition].classList.add('pac-man')

  }

  function moveGhosts(className){

    if (currentGhostDirection[className]!== true){

    let randomDirection = directions[Math.floor(Math.random() * directions.length)]
    currentGhostDirection[className] = randomDirection
    }

    let leftDirectionOptions
    let randomLeftDirection

    let rightDirectionOptions
    let randomRightDirection

    let upDirectionOptions
    let randomUpDirection

    let downDirectionOptions
    let randomDownDirection

  
    // repeat timerGhost
    timerGhosts[className] = setInterval(() => {

      //GHOST MOVING LEFT
      if (currentGhostDirection[className] == 'left'){

        // if ghost is in the cell with index 364
        if (currentGhostPositions[className] === 364){
          // console.log('364 LEFT - MOVING LEFT - CHECKING RIGHT')
          randomLeftDirection = 'left'
        }

        // IF THERE IS A WALL ON THE LEFT
        else if (cells[currentGhostPositions[className] - 1].classList.contains('wall')){

          // if there is not a wall up and down
          if (!(cells[currentGhostPositions[className] - width].classList.contains('wall')) 
          && !(cells[currentGhostPositions[className] + width].classList.contains('wall'))
          )
            {
          // console.log('WALL LEFT - MOVING LEFT - CHECKING UP, DOWN AND RIGHT')
          leftDirectionOptions = ['up', 'down', 'right']
          randomLeftDirection = leftDirectionOptions[Math.floor(Math.random() * leftDirectionOptions.length)]
          } 

          // if there is not a wall up, but there is a wall down 
          else if (!(cells[currentGhostPositions[className] - width].classList.contains('wall')) 
            && (cells[currentGhostPositions[className] + width].classList.contains('wall'))
            )
              {
            // console.log('WALL LEFT - MOVING LEFT - CHECKING UP AND RIGHT')
            leftDirectionOptions = ['up', 'right']
            randomLeftDirection = leftDirectionOptions[Math.floor(Math.random() * leftDirectionOptions.length)]
          } 

          // if there is a wall up, but there is not a wall down 
          else if ((cells[currentGhostPositions[className] - width].classList.contains('wall')) 
            && !(cells[currentGhostPositions[className] + width].classList.contains('wall'))
            )
              {
            // console.log('WALL LEFT - MOVING LEFT - CHECKING DOWN AND RIGHT')
            leftDirectionOptions = ['down', 'right']
            randomLeftDirection = leftDirectionOptions[Math.floor(Math.random() * leftDirectionOptions.length)]
          } 
        } 
        // IF THERE IS NOT A WALL ON THE LEFT
        else if (!cells[currentGhostPositions[className] - 1].classList.contains('wall')){

          // if there is not a wall up, and if there is neither a wall nor a ghost house border down
          if (!(cells[currentGhostPositions[className] - width].classList.contains('wall')) 
          && (!(cells[currentGhostPositions[className] + width].classList.contains('wall') 
          && !cells[currentGhostPositions[className] + width].classList.contains('ghost-house-border'))
          )){
            // console.log('NO WALL LEFT - MOVING LEFT - CHECKING UP, DOWN AND LEFT')
            // then go up, down, or continue left
            leftDirectionOptions = ['up', 'down', 'left']
            randomLeftDirection = leftDirectionOptions[Math.floor(Math.random() * leftDirectionOptions.length)]
          } 

          // if there is not a wall up, but there is either a wall or ghost-house border down 
          else if (!(cells[currentGhostPositions[className] - width].classList.contains('wall')) 
          && ((cells[currentGhostPositions[className] + width].classList.contains('wall')) 
          || (cells[currentGhostPositions[className] + width].classList.contains('ghost-house-border')))
          ){
            // console.log('NO WALL LEFT - MOVING LEFT - CHECKING UP AND LEFT')
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
          // console.log('391 RIGHT - MOVING RIGHT - CHECKING RIGHT')
          randomRightDirection = 'right'
        }

        // IF THERE IS A WALL ON THE RIGHT
        else if (cells[currentGhostPositions[className] + 1].classList.contains('wall')){

          // if there is not a wall up and down
          if (!(cells[currentGhostPositions[className] - width].classList.contains('wall')) 
          && !(cells[currentGhostPositions[className] + width].classList.contains('wall'))
          )
            {
          // console.log('WALL RIGHT - MOVING RIGHT - CHECKING UP, DOWN AND LEFT')
          rightDirectionOptions = ['up', 'down', 'left']
          randomRightDirection = rightDirectionOptions[Math.floor(Math.random() * rightDirectionOptions.length)]
          } 

          // if there is not a wall up, but there is a wall down 
          else if (!(cells[currentGhostPositions[className] - width].classList.contains('wall')) 
            && (cells[currentGhostPositions[className] + width].classList.contains('wall'))
            )
              {
            // console.log('WALL RIGHT - MOVING RIGHT - CHECKING UP AND LEF')
            rightDirectionOptions = ['up', 'left']
            randomRightDirection = rightDirectionOptions[Math.floor(Math.random() * rightDirectionOptions.length)]
          } 

          // if there is a wall up, but there is not a wall down 
          else if ((cells[currentGhostPositions[className] - width].classList.contains('wall')) 
            && !(cells[currentGhostPositions[className] + width].classList.contains('wall'))
            )
              {
            // console.log('WALL RIGHT - MOVING RIGHT - CHECKING DOWN AND LEFT')
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
            // console.log('NO WALL RIGHT - MOVING RIGHT, DOWN AND LEFT')
            // then go up, down, or continue right
            rightDirectionOptions  = ['up', 'down', 'right']
            randomRightDirection  = rightDirectionOptions[Math.floor(Math.random() * rightDirectionOptions.length)]
          } 

          // if there is not a wall up, but there is either a wall or ghost-house border down 
          else if (!(cells[currentGhostPositions[className] - width].classList.contains('wall')) 
          && ((cells[currentGhostPositions[className] + width].classList.contains('wall')) 
          || (cells[currentGhostPositions[className] + width].classList.contains('ghost-house-border')))
          ){
            // console.log('NO WALL RIGHT - MOVING RIGHT - CHECKING UP AND RIGHT')
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
            // console.log('NO WALL RIGHT - MOVING RIGHT - CHECKING DOWN AND RIGHT')
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
          // console.log('WALL ABOVE - MOVING UP - CHECKING LEFT, RIGHT AND DOWN')
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
          // console.log('WALL ABOVE - MOVING UP - CHECKING LEFT AND RIGHT')
          upDirectionOptions = ['left', 'right']
          randomUpDirection = upDirectionOptions[Math.floor(Math.random() * upDirectionOptions.length)]
          } 

          // if there is not a wall left but there is a wall right
          else if (!(cells[currentGhostPositions[className] - 1].classList.contains('wall')) 
            && (cells[currentGhostPositions[className] + 1].classList.contains('wall'))
            )
              {
            // console.log('WALL ABOVE - MOVING UP - CHECKING LEFT AND DOWN')
            upDirectionOptions = ['left', 'down']
            randomUpDirection = upDirectionOptions[Math.floor(Math.random() * upDirectionOptions.length)]
          } 

          // if there is a wall left but there is not a wall right
          else if ((cells[currentGhostPositions[className] - 1].classList.contains('wall')) 
            && !(cells[currentGhostPositions[className] + 1].classList.contains('wall'))
            )
              {
            // console.log('WALL ABOVE - MOVING UP - CHECKING DOWN AND RIGHT')
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
          // console.log('NO WALL ABOVE - MOVING UP - CHECKING LEFT, RIGHT AND UP')
          upDirectionOptions = ['left', 'right', 'up']
          randomUpDirection = upDirectionOptions[Math.floor(Math.random() * upDirectionOptions.length)]
          } 

          // if there is not a wall left but there is a wall right
          else if (!(cells[currentGhostPositions[className] - 1].classList.contains('wall')) 
            && (cells[currentGhostPositions[className] + 1].classList.contains('wall'))
            )
              {
            // console.log('NO WALL ABOVE - MOVING UP - CHECKING LEFT AND UP')
            upDirectionOptions = ['left', 'up']
            randomUpDirection = upDirectionOptions[Math.floor(Math.random() * upDirectionOptions.length)]
          } 

          // if there is a wall left but there is not a wall right
          else if ((cells[currentGhostPositions[className] - 1].classList.contains('wall')) 
            && !(cells[currentGhostPositions[className] + 1].classList.contains('wall'))
            )
              {
            // console.log('NO WALL ABOVE - MOVING UP - CHECKING UP AND RIGHT')
            upDirectionOptions = ['up', 'right']
            randomUpDirection = upDirectionOptions[Math.floor(Math.random() * upDirectionOptions.length)]
          } else {
            randomUpDirection = 'up'
          }
        }
      
        randomDirection = randomUpDirection
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
          // console.log('WALL BELOW - MOVING DOWN - CHECKING LEFT AND RIGHT')
          downDirectionOptions = ['left', 'right']
          randomDownDirection = downDirectionOptions[Math.floor(Math.random() * downDirectionOptions.length)]
          } 
          
          // if there is not a wall left and right, and there is no wall up
          if (!(cells[currentGhostPositions[className] - 1].classList.contains('wall')) 
          && !(cells[currentGhostPositions[className] + 1].classList.contains('wall'))
          && !(cells[currentGhostPositions[className] - width].classList.contains('wall'))
          )
            {
          // console.log('WALL BELOW - MOVING DOWN - CHECKING LEFT, RIGHT AND UP')
          downDirectionOptions = ['left', 'right', 'up']
          randomDownDirection = downDirectionOptions[Math.floor(Math.random() * downDirectionOptions.length)]
          }


          // if there is not a wall left but there is a wall right
          else if (!(cells[currentGhostPositions[className] - 1].classList.contains('wall')) 
            && (cells[currentGhostPositions[className] + 1].classList.contains('wall'))
            )
              {
            // console.log('WALL BELOW - MOVING DOWN - CHECKING LEFT AND UP')
            downDirectionOptions = ['left', 'up']
            randomDownDirection = downDirectionOptions[Math.floor(Math.random() * downDirectionOptions.length)]
          } 

          // if there is a wall left but there is not a wall right
          else if ((cells[currentGhostPositions[className] - 1].classList.contains('wall')) 
            && !(cells[currentGhostPositions[className] + 1].classList.contains('wall'))
            )
              {
            // console.log('WALL BELOW - MOVING DOWN - CHECKING UP AND RIGHT')
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
            // console.log('NO WALL BELOW - MOVING DOWN - CHECKING LEFT, RIGHT AND DOWN')
            downDirectionOptions = ['left', 'right', 'down']
            randomDownDirection = downDirectionOptions[Math.floor(Math.random() * downDirectionOptions.length)]
            } 

          // if there is not a wall left but there is a wall right
          else if (!(cells[currentGhostPositions[className] - 1].classList.contains('wall')) 
            && (cells[currentGhostPositions[className] + 1].classList.contains('wall'))
            )
            {
              // console.log('NO WALL BELOW - MOVING DOWN - CHECKING LEFT AND DOWN')
              downDirectionOptions = ['left', 'down']
              randomDownDirection = downDirectionOptions[Math.floor(Math.random() * downDirectionOptions.length)]
            } 

          // if there is a wall left but there is not a wall right
          else if ((cells[currentGhostPositions[className] - 1].classList.contains('wall')) 
            && !(cells[currentGhostPositions[className] + 1].classList.contains('wall'))
            )
            {
              // console.log('NO WALL BELOW - MOVING DOWN - CHECKING DOWN AND RIGHT')
              downDirectionOptions = ['down', 'right']
              randomDownDirection = downDirectionOptions[Math.floor(Math.random() * downDirectionOptions.length)]
            } 
          else {
            randomDownDirection = 'down'
          }
        }
      
        randomDirection = randomDownDirection

      }

    // update ghost direction
    currentGhostDirection[className] = randomDirection

    
    if (isVulnerable[className] === false) {
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
      checkGhostCollisions()

    } else if (isVulnerable[className] === true) {
      if (randomDirection === 'left' && currentGhostPositions[className] === 364){
        cells[currentGhostPositions[className]].classList.remove(className)
        cells[currentGhostPositions[className]].classList.remove('vulnerable-ghost')
        currentGhostPositions[className] = 391
        cells[currentGhostPositions[className]].classList.add(className)
        cells[currentGhostPositions[className]].classList.add('vulnerable-ghost')

      } else if (randomDirection === 'left'){
        cells[currentGhostPositions[className]].classList.remove(className)
        cells[currentGhostPositions[className]].classList.remove('vulnerable-ghost')
        currentGhostPositions[className]--
        cells[currentGhostPositions[className]].classList.add(className)
        cells[currentGhostPositions[className]].classList.add('vulnerable-ghost')

      } else if (randomDirection === 'right' && currentGhostPositions[className] === 391){
        cells[currentGhostPositions[className]].classList.remove(className)
        cells[currentGhostPositions[className]].classList.remove('vulnerable-ghost')
        currentGhostPositions[className] = 364
        cells[currentGhostPositions[className]].classList.add(className)
        cells[currentGhostPositions[className]].classList.add('vulnerable-ghost')

      } else if (randomDirection === 'right'){
        cells[currentGhostPositions[className]].classList.remove(className)
        cells[currentGhostPositions[className]].classList.remove('vulnerable-ghost')
        currentGhostPositions[className]++
        cells[currentGhostPositions[className]].classList.add(className)
        cells[currentGhostPositions[className]].classList.add('vulnerable-ghost')

      } else if (randomDirection === 'up'){
        cells[currentGhostPositions[className]].classList.remove(className)
        cells[currentGhostPositions[className]].classList.remove('vulnerable-ghost')
        currentGhostPositions[className] -= width
        cells[currentGhostPositions[className]].classList.add(className)
        cells[currentGhostPositions[className]].classList.add('vulnerable-ghost')

      } else if (randomDirection === 'down'){
        cells[currentGhostPositions[className]].classList.remove(className)
        cells[currentGhostPositions[className]].classList.remove('vulnerable-ghost')
        currentGhostPositions[className] += width
        cells[currentGhostPositions[className]].classList.add(className)
        cells[currentGhostPositions[className]].classList.add('vulnerable-ghost')
      }
      checkGhostCollisions()
    }

    ghostClassName = className

    }, 220)

  }

  function moveFromGhostHouse(className){

    if (className === 'pinky' || className === 'inky'){

      ghostHouseTimeouts = []
    
      for (let i = 0; i < ghostHouseTimeouts.length; i++) {
        clearTimeout(ghostHouseTimeouts[i])
      }

      ghostHouseTimeouts.push(setTimeout(() => {
        clearInterval(ghostHouseTimer[className])
      }, 2001))
  
      ghostHouseTimeouts.push(setTimeout(() => {
        moveGhosts(className)
      }, 2001))
  

      ghostHouseTimer[className] = setInterval(() => {
        cells[currentGhostPositions[className]]?.classList.remove(className)
        currentGhostPositions[className] -= width
        cells[currentGhostPositions[className]]?.classList.add(className)
      }, 500)

        // cells[currentGhostPositions[className]+1]

      } else if (className === 'clyde'){
      cells[currentGhostPositions[className]]?.classList.remove(className)
      currentGhostPositions[className] -= 1

      cells[currentGhostPositions[className]]?.classList.add(className)

      ghostHouseTimeouts.push(setTimeout(() => {
        clearInterval(ghostHouseTimer[className])
      }, 2001))
  
      ghostHouseTimeouts.push(setTimeout(() => {
        moveGhosts(className)
      }, 2001))

      ghostHouseTimer[className] = setInterval(() => {
        cells[currentGhostPositions[className]]?.classList.remove(className)
        currentGhostPositions[className] -= width
        cells[currentGhostPositions[className]]?.classList.add(className)
      }, 500)

    }
  }
  
    function addFruit(){

      fruitTimeouts = []
    
      for (let i = 0; i < fruitTimeouts.length; i++) {
        clearTimeout(fruitTimeouts[i])
      }

      // add a cherry after 20 seconds
      setTimeout(() => {
        cells[fruitIndex].classList.add('cherry')
      }, 20*1000)

      setTimeout(() => {
        cells[fruitIndex].classList.remove('cherry')
      }, 35*1000)

      // add another cherry after 60 seconds
      setTimeout(() => {
        cells[fruitIndex].classList.add('cherry')
      }, 60*1000)

      setTimeout(() => {
        cells[fruitIndex].classList.remove('cherry')
      }, 75*1000)
    }
  
    function checkPelletCollisions(){
      // check if pac-man has the same position as a pellet
      if (cells[currentPosition].classList.contains('pellet')){
        cells[currentPosition].classList.remove('pellet')
        score += 1
        scoreSpan.innerHTML = score
        pelletsCount++
        checkWin()
      }
      }
  
    function checkPowerPelletCollisions(){
      // check if pac-man has the same position as a power pellet
      if (cells[currentPosition].classList.contains('power-pellet')){
        cells[currentPosition].classList.remove('power-pellet')
        score += powerPelletPoints[powerPelletIndex]
        powerPelletIndex++
        scoreSpan.innerHTML = score
        const audio = new Audio('sounds/pacman_chomp.wav')
        audio.play()
        makeGhostsVulnerable()

      }

    }
  
    function makeGhostsVulnerable(){

      // make all ghosts vulnerable once pac-man eats a power pellet
  
        for (let i = 0; i < ghostNames.length; i++){
          clearInterval(timerGhosts[ghostNames[i]])
          clearInterval(ghostHouseTimer[ghostNames[i]])

          cells[currentGhostPositions[ghostNames[i]]]?.classList.add('vulnerable-ghost')
          cells[currentGhostPositions[ghostNames[i]]]?.classList.add(vulnerableGhostNames[i])
          
          isVulnerable[vulnerableGhostNames[i]] = true

          currentGhostPositions[vulnerableGhostNames[i]] = currentGhostPositions[ghostNames[i]]
          currentGhostDirection[vulnerableGhostNames[i]] = currentGhostDirection[ghostNames[i]]
          cells[currentGhostPositions[ghostNames[i]]]?.classList.remove(ghostNames[i])
          moveGhosts(vulnerableGhostNames[i])
        }

        // undo changes after 8 seconds
        vulnerableTimeout = setTimeout(() => {
          for (let i = 0; i < ghostNames.length; i++) {
          
            if (isVulnerable[vulnerableGhostNames[i]] === true ) {
              clearInterval(timerGhosts[vulnerableGhostNames[i]])

              cells[currentGhostPositions[vulnerableGhostNames[i]]].classList.remove('vulnerable-ghost')
              cells[currentGhostPositions[vulnerableGhostNames[i]]].classList.add(ghostNames[i])
              currentGhostPositions[ghostNames[i]] = currentGhostPositions[vulnerableGhostNames[i]]
              currentGhostDirection[ghostNames[i]] = currentGhostDirection[vulnerableGhostNames[i]]
              cells[currentGhostPositions[vulnerableGhostNames[i]]].classList.remove(vulnerableGhostNames[i])

              moveGhosts(ghostNames[i])
            }
          }
        }, 8 * 1000)

    }

    function checkFruitCollisions(){
      // if the fruit is eaten by pac-man, then increase the points

      if (cells[currentPosition].classList.contains('cherry')){
        const audio = new Audio('sounds/pacman_eatfruit.wav')
        audio.play()
        cells[currentPosition].classList.remove('cherry')
        score += cherryPoints
        const fruitImg = document.createElement('img')
        fruitImg.src = 'assets/cherry.webp'
        fruitImg.alt = 'cherry'
        fruitImg.classList.add('fruit-image')
        fruitSpan.appendChild(fruitImg)
      }
    }

    function checkGhostCollisions(){
      // check for collision with ghosts
    
      // check if the ghosts are regular
      if (cells[currentPosition].classList.contains('pac-man') 
      && (cells[currentPosition].classList.contains('blinky')
      || cells[currentPosition].classList.contains('inky')
      || cells[currentPosition].classList.contains('pinky')
      || cells[currentPosition].classList.contains('clyde')))
      {
        const audio = new Audio('sounds/pacman_death.wav')
        audio.play()

        cells[currentPosition].classList.remove('pac-man')
        cells[currentPosition].classList.remove('move-right', 'move-left', 'move-up', 'move-down')

        livesLeft -= 1

        //select all elements that have the class name pac-man-lives-image and are descendants of the element stored in the livesSpan variable
        const pacmanImgs = livesSpan.querySelectorAll('.pac-man-lives-image')

        //remove the last pacmanImg element from livesSpan
        pacmanImgs[pacmanImgs.length - 1].remove()

        if (livesLeft > 0){
          startOver()

        } else {
          gameOverAlert()
        }

      // check if the ghosts are vulnerable
      } else if (cells[currentPosition].classList.contains('pac-man') 
      && (cells[currentPosition].classList.contains('vulnerableblinky')
      || cells[currentPosition].classList.contains('vulnerableinky')
      || cells[currentPosition].classList.contains('vulnerablepinky')
      || cells[currentPosition].classList.contains('vulnerableclyde')))
      { 
        if (cells[currentPosition].classList.contains('vulnerableblinky')){
          eatVulnerableGhost('vulnerableblinky')
        } else if (cells[currentPosition].classList.contains('vulnerableinky')){
          eatVulnerableGhost('vulnerableinky')
        } else if (cells[currentPosition].classList.contains('vulnerablepinky')){
          eatVulnerableGhost('vulnerablepinky')
        } else if (cells[currentPosition].classList.contains('vulnerableclyde')){
          eatVulnerableGhost('vulnerableclyde')
      }

      const audio = new Audio('sounds/pacman_eatghost.wav')
        audio.play()

      score += vulnerableGhostPoints[vulnerableGhostIndex]
        vulnerableGhostIndex++

    }
    }

    function eatVulnerableGhost(className){
  
      cells[currentGhostPositions[className]]?.classList.remove('vulnerable-ghost')
      
      if (cells[currentGhostPositions[className]]?.classList.contains('vulnerableblinky')){
        //clear all timers so that there are no reduntant ghost left
        clearInterval(ghostHouseTimer[className])
        clearInterval(timerGhosts[className])
        originalClassName = 'blinky'
        // bring the ghost back to ghost house
        currentGhostPositions[originalClassName] = ghostStartIndexes[originalClassName]
        
        cells[currentGhostPositions[originalClassName]]?.classList.add(originalClassName)
        // remove the vulnerableblinky class
        cells[currentGhostPositions[className]]?.classList.remove('vulnerableblinky')

        isVulnerable['vulnerableblinky'] = false
        moveGhosts(originalClassName)

      } else if (cells[currentGhostPositions[className]]?.classList.contains('vulnerableinky')){
        clearInterval(ghostHouseTimer[className])
        clearInterval(timerGhosts[className])
        originalClassName = 'inky'

        currentGhostPositions[originalClassName] = ghostStartIndexes[originalClassName]
        cells[currentGhostPositions[originalClassName]]?.classList.add(originalClassName)
        cells[currentGhostPositions[className]]?.classList.remove('vulnerableinky')
        moveFromGhostHouse(originalClassName)
        isVulnerable['vulnerableinky'] = false

      } else if (cells[currentGhostPositions[className]]?.classList.contains('vulnerablepinky')){
        clearInterval(ghostHouseTimer[className])
        clearInterval(timerGhosts[className])
        originalClassName = 'pinky'
        currentGhostPositions[originalClassName] = ghostStartIndexes[originalClassName]
        cells[currentGhostPositions[originalClassName]]?.classList.add(originalClassName)
        cells[currentGhostPositions[className]]?.classList.remove('vulnerablepinky')
        moveFromGhostHouse(originalClassName)
        isVulnerable['vulnerablepinky'] = false

      }else if (cells[currentGhostPositions[className]]?.classList.contains('vulnerableclyde')){
        clearInterval(ghostHouseTimer[className])
        clearInterval(timerGhosts[className])
        originalClassName = 'clyde'
        currentGhostPositions[originalClassName] = ghostStartIndexes[originalClassName]
        cells[currentGhostPositions[originalClassName]]?.classList.add(originalClassName)
        cells[currentGhostPositions[className]]?.classList.remove('vulnerableclyde')
        moveFromGhostHouse(originalClassName)
        isVulnerable['vulnerableclyde'] = false
      }

    }

    function checkEnd(){
      // check if the game has ended
      const timerEndCheck = setInterval(() => {
        if (livesLeft === 0) {
          clearInterval(timerEndCheck)
          gameOverAlert()
        }
      }, 15)
    }
  
    function gameOverAlert(){
      // display on the screen that the game has ended and clear all intervals
      for (let i = 0; i < ghostNames.length; i++){
      
        clearInterval(timerGhosts[ghostNames[i]])
        clearInterval(ghostHouseTimer[ghostNames[i]])
        clearInterval(timerGhosts[vulnerableGhostNames[i]])
        clearInterval(ghostHouseTimer[vulnerableGhostNames[i]])
      }
      document.querySelector('.game-over').style.display = 'block';
    }

    function startOver(){
      // start from the beggining once pac-man is eaten by a ghost

      const ghostStartIndexesArray = [293, 405, 406, 407]

      cells[currentPosition].classList.remove('pac-man')
      cells[currentPosition].classList.remove('move-right', 'move-left', 'move-up', 'move-down')
      cells[pacmanStartIndex].classList.add('pac-man')
      currentPosition = pacmanStartIndex 
      clearInterval(timer)


      // erase the fruit if it is displayed
      if (cells[fruitIndex].classList.contains('cherry')){
        cells[fruitIndex].classList.remove('cherry')
      }

    }

    function checkWin(){
      // check if the game is won
      if (pelletsCount === (pelletsIndex.length - 4)){
        setTimeout(() => {
          document.querySelector('.you-won').style.display = 'block';
        }, 220)

        for (let i = 0; i < ghostNames.length; i++){
          
          clearInterval(timerGhosts[ghostNames[i]])
          clearInterval(ghostHouseTimer[ghostNames[i]])
          clearInterval(timerGhosts[vulnerableGhostNames[i]])
          clearInterval(ghostHouseTimer[vulnerableGhostNames[i]])
    
      }
    }
    }
    
  // ! Events
  
  start.addEventListener('click', createGrid)

  // ! Page Load

}
window.addEventListener('DOMContentLoaded', init)