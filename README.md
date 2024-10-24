# crossingStreetGame

<b>Project Description:</b> Simple Road Crossing Game
This project is a simple road-crossing game built using the visual studio code JavaScript library. The player controls an actor (a character, represented by an image) trying to cross a busy road while avoiding collisions with moving cars. The game keeps track of the player's points based on how many times they successfully cross the road. It features basic gameplay elements, collision detection, sound effects, and button controls for starting and ending the game.

# Key Features:

# Player (Actor) Movement:
The player moves the actor (e.g., a cow) up and down the screen using keyboard arrow keys.
The goal is to safely cross the road by moving the actor to the top of the canvas without colliding with the cars.
Cars (Obstacles):

Cars move from right to left across the screen at varying speeds.
If the actor collides with a car, the actor is reset to the starting position, and the player loses a point (unless the score is already zero).

# Collision Detection:
The game uses the p5.collide2d library to detect collisions between the actor and the cars.
Upon collision, a sound effect plays, and the actor is reset to the starting position.

# Scoring:
Every time the player successfully reaches the top of the screen (crosses the road), they earn a point.
A sound effect plays when a point is scored. If the actor touches a car it looses a point.

# Background Music and Sound Effects:
The game features background music that loops continuously during gameplay.
Sound effects play during collisions and when points are scored.

# Buttons for Game Control:
Start Game Button: This button appears at the start screen and allows the player to begin the game.
End Game Button: This button allows the player to end the game and return to a game-over screen.

# Game States:
The game includes multiple states (start, playing, end) to manage the game's flow:
Start State: Displays a welcome message and the start button.
Playing State: Runs the game, showing the road, cars, actor, and score.
End State: Displays a game-over screen with the option to restart the game.

# Technologies Used:
p5.js: A JavaScript library for creative coding, responsible for drawing graphics, handling user inputs, and playing sounds.
p5.collide2d: A library used to detect collisions between the actor and cars.
HTML/CSS: Basic HTML is used to set up the page, and p5.js handles the canvas and rendering.
# How the Game Works:
The game starts with a Start Game screen. The player clicks the "Start Game" button to begin.
Once the game starts, the player uses the arrow keys to move the actor up and down the screen.
The player must avoid the moving cars to safely reach the top of the screen, earning points along the way.
If the player collides with a car, they lose a point and the actor is reset to the starting position at the bottom of the screen.
The game continues until the player clicks the End Game button, which brings them to the game-over screen.
The game can be restarted by clicking the Start Game button again.

# Game Flow:
Start Screen: The game begins on a start screen with a "Start Game" button.
Gameplay: Once started, the player controls the actor, avoiding cars and scoring points.
End Game: The player can end the game at any time by clicking the "End Game" button, which stops the music and displays a game-over message.

# Files in the Project:
index.html: The main HTML file that loads the necessary scripts (p5.js, sketch.js, ator.js, carro.js, imagens.js).
sketch.js: Contains the main game logic, including game states, button management, and rendering the canvas.
ator.js: Contains the logic for displaying and moving the actor (player character).
carro.js: Contains the logic for displaying and moving the cars (obstacles).
imagens.js: Manages the loading of images and sounds used in the game.
p5.collide2d.js: A library used for collision detection.
# Conclusion:
This p5.js game project is a simple but engaging game that involves basic animation, keyboard interaction, collision detection, and sound integration. It's a great example of how to use p5.js for creating interactive browser-based games with minimal setup. The game can be expanded by adding features like difficulty levels, more obstacles, or time-based challenges.



https://github.com/user-attachments/assets/a923df3b-109d-4385-88ee-0a214c959ad8

