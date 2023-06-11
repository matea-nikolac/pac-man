# Pac-Man
<img width="1300" alt="Screenshot 2023-06-06 at 15 28 43" src="https://github.com/matea-nikolac/pac-man/assets/62067357/04872a29-c83b-4aab-8444-f3e68152a95b">

## Description
The objective of this project was to develop a game inspired by Pac-man, utilizing only HTML, CSS, and JavaScript.

## Deployment link
https://matea-nikolac.github.io/pac-man/

## Timeframe & Working Team (Solo/Pair/Group)
This was a solo project, completed within a one-week timeframe.

##Technologies Used
CSS, HTML, Javascript

## Brief

#### Requirements

* The player should be able to clear at least one board
* The player's score should be displayed at the end of the game
* Be built on a grid: do not use HTML Canvas for this

#### Suggested enhancements

* Responsive design
* Each board gets more difficult
* Persistent leaderboard using localStorage

#### Challenges

The biggest challenge here is the logic which moves the ghosts. While their movement may appear random, they are always moving toward Pac Man, who is himself being moved by the player.

## Planning

The Pac-Man project is a web-based game created using CSS, HTML, and JavaScript. Before starting the coding process, a wireframe was designed using Excalidraw. The wireframe consists of two panels: the left panel includes the title, game rules, and a start button, while the right panel contains the game grid where the Pac-Man, ghosts, pellets, power-pellets, walls, and fruit will be displayed. Additionally, the right panel also shows indicators for the remaining lives, collected fruit, and the player's score.

<img width="1197" alt="Screenshot 2023-06-06 at 15 52 02" src="https://github.com/matea-nikolac/pac-man/assets/62067357/133ef4cc-6ee7-46fa-b869-e3d31eb17291">


## Build Process


I have implemented the game using grid logic instead of HTML Canvas for the game background. To achieve this, I sketched a grid on Wireframe and assigned an index to each cell within the grid. By doing so, I could later easily locate and manipulate game elements based on their specific cell index. Afterward, I saved the position indexes within arrays for each game element, so that I can ensure that each element had a designated permanent or starting position within the game. This approach simplifies element management and facilitates accurate gameplay.

I implemented the game using grid logic instead of HTML Canvas for the game background. To achieve this, I created a grid on Wireframe and assigned unique indexes to each cell. This allowed for easy location and manipulation of game elements based on their specific cell index. Subsequently, I stored the position indexes in arrays for each game element.

<img width="918" alt="Screenshot 2023-06-08 at 17 00 46" src="https://github.com/matea-nikolac/pac-man/assets/62067357/db339a68-5fdc-4622-beba-4cc431ca0d5f">

To create the grid, I utilized the `createGrid()` function. This function generates the necessary structure for the game background, allowing for precise placement and movement of the elements.

<img width="441" alt="Screenshot 2023-06-08 at 16 56 31" src="https://github.com/matea-nikolac/pac-man/assets/62067357/e1807403-608c-4263-a050-91509d35456d">

After establishing the grid, I carefully assigned positions to all the game elements, ensuring that each element had a designated permanent or starting position within the game. This enabled me to have the game interface set and ready for the start of the game, providing a solid foundation for gameplay.

<img width="477" alt="Screenshot 2023-06-08 at 18 56 25" src="https://github.com/matea-nikolac/pac-man/assets/62067357/ec915342-a30f-417e-ae13-2cb6a5a05999">

After establishing the starting positions of the moving elements and determining the fixed positions of the static elements, the next step involved creating the `gamePlay()` function. This function is called within the `createGrid()` function and is responsible for initiating the movement of the Pacman and the ghosts. By implementing this `gamePlay()` function, the game comes to life as the dynamic elements begin their interactive motions on the grid, while the static elements remain fixed in their designated positions throughout the gameplay.

<img width="816" alt="Screenshot 2023-06-11 at 15 24 03" src="https://github.com/matea-nikolac/pac-man/assets/62067357/115b20d6-f32e-45a9-80e5-4c50b720ab0f">

The next step was to establish the Pac-Man's movement with the `movePacman()` function. 

First I defined the key codes for each position key on the keyboard that is pressed (up, down, left, right) and removed the CSS class 'pac-man' from the HTML element representing the cell at the current position in the game grid (in order to move it to the next position in the next steps if the game). 

The next step was to establish the movement of the Pac-Man character using the movePacman() function. Firstly, I defined the key codes for each directional key (up, down, left, right) to ensure that the event listener accurately registers the pressed key. Additionally, I removed the 'pac-man' CSS class from the HTML element representing the current position in the game grid, preparing it for movement in the following steps.

<img width="518" alt="Screenshot 2023-06-11 at 15 33 01" src="https://github.com/matea-nikolac/pac-man/assets/62067357/8009dfbc-d7ca-4ddc-80f7-600f890037be">

The code snippet below demonstrates the handling of Pac-Man's movement to the right within the game grid. 

Essentially, when the right arrow key is pressed and the next cell to the right doesn't contain a wall, the current movement timer is cleared and a new one is set. If the Pac-Man is at the edge of the grid (currentPosition = 391) and facing right, it wraps the Pac-Man to the opposite side (currentPosition = 364).

Alternatively, if the next cell to the right does not contain a wall or a ghost house border, the 'pac-man' class, along with any directional classes, is removed from the current cell. The currentPosition is incremented, and the 'pac-man' and 'move-right' classes are added to the new cell, which corresponds to the cell to the right in relation to the previous one. Additionally, collision checks for pellets, power pellets, fruits, and ghosts are performed. The movement interval is set to 220 milliseconds.

<img width="873" alt="Screenshot 2023-06-11 at 15 39 25" src="https://github.com/matea-nikolac/pac-man/assets/62067357/95e68f4a-2a04-406d-80aa-9fced6d0cf5b">


## Challenges

## Wins

## Key Takeaways

## Bugs

## Future Improvements
