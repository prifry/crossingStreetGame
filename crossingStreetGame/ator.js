//codigo do ator
let xAtor=200;
let yAtor = 366;
let colisao = false;
let comprimentoCarro = 50;
let alturaCarro = 40
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 40, 60); // 100 is x horizontal space, y is 366 vertical space. //vaca Image-size = 30, 30
  print(yAtor)
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
      yAtor -= 3;
  }
  if(keyIsDown(DOWN_ARROW))
    if(podeSemover()){
      yAtor += 3;
    }
}

function podeSemover(){
  return yAtor < 366;
}

function verificaColisao(){
    //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
    for(let i = 0; i < imagemCarros.length; i++){
      
        colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro,   xAtor, yAtor, 15)
      
        if(colisao){
  
            voltaAtorParaPosicaoInicial();
            somDaColisao.play()
  
            if(pontosMaiorQueZero() > 0){
              meusPontos -= 1;
          }
        }
      
    } 
    
  }
  
  function pontosMaiorQueZero(){
    return meusPontos > 0
  }
  
  function voltaAtorParaPosicaoInicial(){
    yAtor = 366;
  }
  
  function incluePontos(){
    fill(255,240,60)
    textAlign(CENTER);
    textSize(25)
    text(meusPontos, width / 5, 27);
  }
  
  function marcaPonto(){
    if(yAtor < 15){
      meusPontos += 1;
      somDoPonto.play()
      voltaAtorParaPosicaoInicial();
    }
    
  }