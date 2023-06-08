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


In this project, I have implemented a game using grid logic instead of HTML Canvas for the game background. To achieve this, I sketched a grid on Wireframe and assigned an index to each cell within the grid. By doing so, I could easily locate and manipulate game elements based on their specific cell index.

<img width="918" alt="Screenshot 2023-06-08 at 17 00 46" src="https://github.com/matea-nikolac/pac-man/assets/62067357/db339a68-5fdc-4622-beba-4cc431ca0d5f">

To create the grid, I utilized the createGrid() function. This function generates the necessary structure for the game background, allowing for precise placement and movement of the elements.

<img width="441" alt="Screenshot 2023-06-08 at 16 56 31" src="https://github.com/matea-nikolac/pac-man/assets/62067357/e1807403-608c-4263-a050-91509d35456d">

Once the grid was established, I assigned positions to all the maze elements. By saving the positions within an array, I could ensure that each element had a designated permanent or starting position within the game. This approach simplifies element management and facilitates accurate gameplay.

<img width="477" alt="Screenshot 2023-06-08 at 18 56 25" src="https://github.com/matea-nikolac/pac-man/assets/62067357/ec915342-a30f-417e-ae13-2cb6a5a05999">

## Challenges

## Wins

## Key Takeaways

## Bugs

## Future Improvements
