let gameState = "start";
let startButton, endButton;


function setup() {
    createCanvas(500, 400);
        // Buttons for starting and ending the game
    startButton = createButton('Start Game');
    startButton.position(200, 350);
    startButton.mousePressed(startGame);
    startButton.mousePressed(startGame);
    startButton.style('background-color', '#4CAF50'); // Green background
    startButton.style('color', 'white'); // White text
    startButton.style('font-size', '20px'); // Font size
    startButton.style('padding', '10px 20px'); // Padding for better appearance
    startButton.style('border', 'none'); // Remove border
    startButton.style('border-radius', '5px'); // Rounded corners




    endButton = createButton('End Game');
    endButton.position(400, 5);
    endButton.mousePressed(endGame);
    endButton.mousePressed(endGame);
    endButton.style('background-color', '#f44336'); // Red background
    endButton.style('color', 'white'); // White text
    endButton.style('font-size', '16px'); // Font size
    endButton.style('padding', '5px 5px'); // Padding for better appearance
    endButton.style('border', 'none'); // Remove border
    endButton.style('border-radius', '5px'); // Rounded corners
    endButton.hide(); // Initially hidden

    //somDaTrilha.loop(); //Background music for the game
  }
  
  function draw() {
    background(imagemstartBackGround);

    if (gameState === "start") {
        // Start screen
        textAlign(CENTER);
        textSize(32);
        text( width / 2, height / 2 - 40);
        startButton.show();
        endButton.hide();

    }else if(gameState === "playing"){
        // Main game logic
        background(imagemDaStrada);
        mostraAtor();
        mostraCarro();
        movimentaCarro();
        movimentaAtor();
        voltaPosicaoInicialDoCarro();
        verificaColisao();
        incluePontos();
        marcaPonto();
        startButton.hide();
        endButton.show();
    }else if(gameState === "end"){
        // End screen
        textAlign(CENTER);
        textSize(32);
        fill('red'); // Set text color to red
        text("Game Over", width / 2, 6 - 40);
        startButton.show();
        endButton.hide();
        
    }
    
     
  }
  function startGame() {
    gameState = "playing";
    somDaTrilha.loop();
  }
  
  function endGame() {
    gameState = "end";
    somDaTrilha.stop();
    voltaAtorParaPosicaoInicial();
  }