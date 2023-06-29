# Pac-Man
<img width="1300" alt="Screenshot 2023-06-06 at 15 28 43" src="https://github.com/matea-nikolac/pac-man/assets/62067357/04872a29-c83b-4aab-8444-f3e68152a95b">

## Description
This was my first project for the General Assembly's Software Engineering Immersive course. The objective of the project was to develop a game inspired by Pac-man, utilizing only HTML, CSS, and JavaScript.

## Deployment link
https://matea-nikolac.github.io/pac-man/

## Timeframe & Working Team (Solo/Pair/Group)
This was a solo project, completed within a one-week timeframe.

## Technologies Used
* Javascript
* CSS
* HTML

## Brief

#### Requirements

* The player should be able to clear at least one board
* The player's score should be displayed at the end of the game
* Be built on a grid: do not use HTML Canvas for this

#### Suggested enhancements

* Responsive design
* Each board gets more difficult
* Persistent leaderboard using localStorage

## Planning

The Pac-Man project is a web-based game created using CSS, HTML, and JavaScript. Before starting the coding process, a wireframe was designed using Excalidraw. The wireframe consists of two panels: the left panel includes the title, game rules, and a start button, while the right panel contains the game grid where the Pac-Man, ghosts, pellets, power pellets, walls, and fruit will be displayed. Additionally, the right panel also shows indicators for the remaining lives, collected fruit, and the player's score.

<img width="1197" alt="Screenshot 2023-06-06 at 15 52 02" src="https://github.com/matea-nikolac/pac-man/assets/62067357/133ef4cc-6ee7-46fa-b869-e3d31eb17291">


## Build Process

### Grid Creation

I have implemented the game using grid logic instead of HTML Canvas for the game background. To achieve this, I sketched a grid on Wireframe and assigned an index to each cell within the grid. By doing so, I could later easily locate and manipulate game elements based on their specific cell index. Afterward, I saved the position indexes within arrays for each game element, so that I can ensure that each element had a designated permanent or starting position within the game. This approach simplifies element management and facilitates accurate gameplay.

I implemented the game using grid logic instead of HTML Canvas for the game background. To achieve this, I created a grid on Wireframe and assigned unique indexes to each cell. This allowed for easy location and manipulation of game elements based on their specific cell index. Subsequently, I stored the position indexes in arrays for each game element.

<img width="918" alt="Screenshot 2023-06-08 at 17 00 46" src="https://github.com/matea-nikolac/pac-man/assets/62067357/db339a68-5fdc-4622-beba-4cc431ca0d5f">

To create the grid, I utilized the `createGrid` function. This function generates the necessary structure for the game background, allowing for precise placement and movement of the elements.

<img width="441" alt="Screenshot 2023-06-08 at 16 56 31" src="https://github.com/matea-nikolac/pac-man/assets/62067357/e1807403-608c-4263-a050-91509d35456d">

### Element Positioning

After establishing the grid, I carefully assigned positions to all the game elements, ensuring that each element had a designated permanent or starting position within the game. This enabled me to have the game interface set and ready for the start of the game, providing a solid foundation for gameplay.

<img width="477" alt="Screenshot 2023-06-08 at 18 56 25" src="https://github.com/matea-nikolac/pac-man/assets/62067357/ec915342-a30f-417e-ae13-2cb6a5a05999">

After establishing the starting positions of the moving elements and determining the fixed positions of the static elements, the next step involved creating the `gamePlay` function. This function is called within the `createGrid` function and is responsible for initiating the movement of the Pacman and the ghosts. By implementing this `gamePlay` function, the game comes to life as the dynamic elements begin their interactive motions on the grid, while the static elements remain fixed in their designated positions throughout the gameplay.

<img width="803" alt="image" src="https://github.com/matea-nikolac/pac-man/assets/62067357/0ab83b2b-e0f4-4d16-92c3-af85513e6e29">

The `moveFromGhostHouse` function in the snippet above handles the movement of ghosts when they are exiting the ghost house. It sets timers to control the timing of their movement and updates their positions accordingly, allowing them to move out of the ghost house and join the game.

On the other hand, `addFruit` function in the snippet above is responsible for adding a cherry to the game board at specific time intervals. It sets timers to add and remove the cherry after certain durations, creating a dynamic element in the gameplay.

### Pac-Man Movement
The next step was to establish the Pac-Man's movement with the `movePacman` function. 

First I defined the key codes for each position key on the keyboard that is pressed (up, down, left, right) and removed the CSS class 'pac-man' from the HTML element representing the cell at the current position in the game grid (in order to move it to the next position in the next steps if the game). 

The next step was to establish the movement of the Pac-Man character using the movePacman() function. Firstly, I defined the key codes for each directional key (up, down, left, right) to ensure that the event listener accurately registers the pressed key. Additionally, I removed the 'pac-man' CSS class from the HTML element representing the current position in the game grid, preparing it for movement in the following steps.

<img width="518" alt="Screenshot 2023-06-11 at 15 33 01" src="https://github.com/matea-nikolac/pac-man/assets/62067357/8009dfbc-d7ca-4ddc-80f7-600f890037be">

The code snippet below demonstrates the handling of Pac-Man's movement to the right within the game grid. 

Essentially, when the right arrow key is pressed and the next cell to the right doesn't contain a wall, the current movement timer is cleared and a new one is set. If the Pac-Man is at the edge of the grid (currentPosition = 391) and facing right, it wraps the Pac-Man to the opposite side (currentPosition = 364).

Alternatively, if the next cell to the right does not contain a wall or a ghost house border, the 'pac-man' class, along with any directional classes, is removed from the current cell. The currentPosition is incremented, and the 'pac-man' and 'move-right' classes are added to the new cell, which corresponds to the cell to the right in relation to the previous one. Additionally, collision checks for pellets, power pellets, fruits, and ghosts are performed. The movement interval is set to 220 milliseconds.

<img width="873" alt="Screenshot 2023-06-11 at 15 39 25" src="https://github.com/matea-nikolac/pac-man/assets/62067357/95e68f4a-2a04-406d-80aa-9fced6d0cf5b">

The conditional logic for left, up, and down directions follows a similar approach.

### Ghosts Movement

The `moveGhosts` function is responsible for controlling the movement of ghosts in the game, creating unpredictable patterns. It starts by checking if a specific ghost has a current direction assigned. If not, it generates a random direction from the available options (up, down, left, right) to add variety to the ghost movements.

#### Random Direction Assignment
To introduce randomness, each ghost is assigned a random direction using the `Math.random` function and the available options.

<img width="737" alt="Screenshot 2023-06-11 at 18 44 58" src="https://github.com/matea-nikolac/pac-man/assets/62067357/a222308d-683a-4dca-a858-4c604af887fb">

#### Handling Ghost Movement Scenarios
The movement of ghosts is controlled based on their upcoming direction (left, right, up, down). Various scenarios are defined for each direction to ensure smooth navigation while avoiding walls and ghost house borders. The movement interval for the ghosts is set to 220 milliseconds.

<img width="437" alt="Screenshot 2023-06-11 at 18 47 54" src="https://github.com/matea-nikolac/pac-man/assets/62067357/f8afd96e-371a-4999-8362-483af8b558e0">

##### Ghost Facing Left

When a ghost is in the cell with index 364 (the final left cell before the tunnel) and the upcoming direction is left, the r`andomLeftDirection` variable is set to 'left', preparing the ghost to move through the tunnel.

<img width="589" alt="Screenshot 2023-06-11 at 18 51 22" src="https://github.com/matea-nikolac/pac-man/assets/62067357/24ed33f0-ce06-488b-ba2c-d392a19ebf5d">

###### Scenario: Ghost Heading Left with Wall on the Left

This scenario occurs when a ghost is heading left and encounters a wall on the left side. The following possibilities are considered:

* If there is a wall on the left and no walls above or below the ghost, a direction is randomly selected from 'up', 'down', and 'right' to continue moving.
* If there is no wall above but a wall below the ghost, a direction is randomly selected from 'up' and 'right'.
* If there is a wall above but no wall below the ghost, a direction is randomly selected from 'down' and 'right'.

<img width="992" alt="Screenshot 2023-06-11 at 18 56 50" src="https://github.com/matea-nikolac/pac-man/assets/62067357/756dded2-3be2-478b-8f6f-ce4fcf620cf7">

###### Scenario: Ghost Heading Left with no Wall on the Left
This scenario occurs when there is no wall on the left, and the ghost is heading left. The following possibilities are considered:

* If there is no wall on the left and no walls or ghost house borders above or below the ghost, a direction is randomly selected from 'up', 'down', and 'left' to continue moving.
* If there is no wall on the left but a wall or ghost house border below the ghost, a direction is randomly selected from 'up' and 'left'.
* If there is a wall above but no wall or ghost house border below the ghost, a direction is randomly selected from 'down' and 'left'.
* If none of the above conditions are met, the direction is set to 'left' to continue moving in that direction.

<img width="1001" alt="Screenshot 2023-06-11 at 19 00 20" src="https://github.com/matea-nikolac/pac-man/assets/62067357/5204919c-65eb-4f11-80a6-813da4a7b805">

Similar logic is applied to handle movement scenarios for the right, up, and down directions within the moveGhosts() function.

### Ghosts Vulnerability

The `makeGhostsVulnerable` function is responsible for making all the ghosts vulnerable when Pac-Man consumes a power pellet. It clears the ghost movement timers, updates their visual representation to indicate vulnerability, and adjusts their positions and directions. After 8 seconds, the changes are reverted, restoring the ghosts' regular behavior.

<img width="1002" alt="Screenshot 2023-06-11 at 19 51 10" src="https://github.com/matea-nikolac/pac-man/assets/62067357/66df2e46-719d-4818-b750-243f07290c4a">

The `eatVulnerableGhost` function handles Pac-Man consuming a vulnerable ghost by removing its vulnerability and returning it to its original class. It resets the ghost's position and initiates its movement from the ghost house, while updating its vulnerability status for gameplay interactions.

<img width="864" alt="Screenshot 2023-06-11 at 19 55 07" src="https://github.com/matea-nikolac/pac-man/assets/62067357/8d5bd54b-36c4-46f0-92e4-c47e6d054e5c">

### Game Won

The `checkPelletCollisions` function detects collisions between Pac-Man and the pellets on the game board. If Pac-Man's current position overlaps with a pellet, it removes the pellet, increments the score, updates the display, and counts the collected pellets. It also checks if the player has won the game by collecting all the pellets.

<img width="639" alt="Screenshot 2023-06-11 at 19 56 40" src="https://github.com/matea-nikolac/pac-man/assets/62067357/3b33082e-5c50-4afd-90cb-1b5155844e5f">

The `checkWin` function determines if the game has been won by the player. It compares the count of collected pellets with the total number of pellets on the board minus four (representing the power pellets). If the condition is met, it displays a "You Won" message and pauses the game by clearing the ghost movement timers.

<img width="652" alt="Screenshot 2023-06-11 at 19 58 58" src="https://github.com/matea-nikolac/pac-man/assets/62067357/67e31195-65b7-41cb-ad56-90f29263b073">

### Game Lost

The `checkEnd` function continuously monitors the number of remaining lives to check if the game has ended. It sets an interval that checks if the lives have reached zero. If the condition is met, the interval is cleared, and a game over alert is triggered.

<img width="548" alt="Screenshot 2023-06-11 at 19 56 07" src="https://github.com/matea-nikolac/pac-man/assets/62067357/6790e91b-cb81-49ea-8048-8f4ac30166f1">

## Challenges

Implementing the ghost movement posed a significant challenge, requiring thorough consideration of various movement scenarios and obstacle encounters. 

Rather than relying on simplistic direction changes, a more sophisticated approach was adopted to create natural and seamless ghost movement. This involved preventing random direction changes without encountering obstacles, ensuring a more engaging and challenging gameplay experience. 

By selecting the next direction within defined rules and considering factors like corridor availability, walls, and the ghost house, the game achieved dynamic and engaging ghost movements. 

This approach aimed to avoid scenarios where, for example, a ghost moving left would not randomly change its direction to the right upon reaching a corridor, without encountering any obstacles that would prompt such a change.

## Wins
I am thrilled to have successfully utilized JavaScript, HTML, and CSS to create my first game. This achievement includes implementing game mechanics, graphics rendering, and collision detection, while overcoming challenging programming tasks. It signifies a significant milestone in my journey.

## Key Takeaways
* Increased confidence in game design and JavaScript coding, particularly in implementing code logic for game mechanics
* Gained valuable experience in using time intervals, which will be beneficial for creating engaging and interactive game experiences in the future.

## Bugs
Occasionally, a rare bug occurs where the ghosts end up trapped within walls, navigating within them before eventually returning to the corridors. The cause of this anomaly is yet to be determined, but potential factors could include overlapping time intervals or an uncovered movement scenario. Further investigation is required to pinpoint and address the underlying issue.

## Future Improvements
Given the complexity of the current ghost movement implementation, it would be worth exploring if there are simpler approaches that can enhance clarity and efficiency while achieving the same functionality.
