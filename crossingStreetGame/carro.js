//codigo do Carro
//xCarro 0 = 600, xCarro1 =600, xCarro2 =600
//yCarro 0 = 40, yCarro 1 = 96, yCarro2 = 150
//velocidadeCarro 0 = 2, velocidadeCarro1 =2.5, velocidadeCarro2 = 3.2
// Above we have the list value for each car wich shows in the list below.Below we have 3 lists 
//to store the positions x,y, and velocity of each car.
let xCarros = [600, 600, 600, 600, 600, 600]
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2.3];


function mostraCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], 50, 40);// x =600, y=40, image-size =50,40
    
  }
}

function movimentaCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];//velocidade do carro
  }

}

function voltaPosicaoInicialDoCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
    if(passouTodaATela(xCarros[i])){
      xCarros[i] = 600;
    }
   
  }
}

function passouTodaATela(xCarro){
   return xCarro < -50;
}