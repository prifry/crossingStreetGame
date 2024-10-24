//codigo das imagens e sons do jogo
let imagemDaStrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

//sons do jogo
let somDaTrilha;
let somDaColisao;
let somDoPonto;

//function to upload a imagem que esta dentro da pasta imagem
function preload(){
    imagemstartBackGround = loadImage("imagens/startBackGround.png");
    imagemDaStrada = loadImage("imagens/estrada.png");
    imagemDoAtor = loadImage("imagens/deer.webp.PNG");
    imagemCarro = loadImage("imagens/carro-1.png");
    imagemCarro2 = loadImage("imagens/carro-2.png");
    imagemCarro3 = loadImage("imagens/carro-3.png");
    imagemCarros =[imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3]
    
    somDaTrilha = loadSound("sons/trilha.mp3");
    somDaColisao = loadSound("sons/colidiu.mp3");
    somDoPonto = loadSound("sons/pontos.wav");
  
}
