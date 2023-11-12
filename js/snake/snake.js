const tablero = document.querySelector(".tablero");
const scoreElement = document.querySelector(".puntaje");
let perder = false; 
let foodX, foodY;
let snakeX = 5, snakeY=7;
let cuerpito = [];
let velocidadX = 0, velocidadY = 0;
let setIntervalId;
let puntaje=0;

const lugarComida = () => {
    foodX=Math.floor(Math.random()*30) + 1;
    foodY=Math.floor(Math.random()*30) + 1;
}

const handleGameOver = () => {
    clearInterval(setIntervalId);
    alert("PERDISTE!");
    location.reload();
}

const changeDirections = (e) =>{
    if(e.key ==="ArrowUp" && velocidadY != 1){
        velocidadX = 0;
        velocidadY = -1;
    }
    if(e.key==="ArrowDown" && velocidadY != -1){
        velocidadX = 0;
        velocidadY = 1;
    }
    if(e.key==="ArrowLeft" && velocidadX != 1){
        velocidadX = -1;
        velocidadY = 0;
    }
    if(e.key==="ArrowRight" && velocidadX != -1){
        velocidadX = 1;
        velocidadY = 0;
    }

}

const iniciarJuego = () => {
    if(perder)return handleGameOver();
    let htmlMarkUp = `<div class ="comida" style="grid-area: ${foodY} / ${foodX }"> </div>`;
    if(snakeX === foodX && snakeY === foodY){
        lugarComida();
        cuerpito.push([foodX , foodY]);
        puntaje++;
        scoreElement.innerHTML = `Score: ${puntaje}`;
    }
      
    for (let i = cuerpito.length - 1 ; i > 0 ; i--){
        cuerpito[i] = cuerpito[ i - 1];
    }
   
    cuerpito[0] = [snakeX , snakeY];
    snakeY += velocidadY;
    snakeX += velocidadX; 
   
    if(snakeX <= 0 || snakeX > 30 || snakeY <= 0 || snakeY > 30){
        perder=true;
    }
    
    for(let i = 0; i < cuerpito.length; i++ ){
        htmlMarkUp += `<div class ="vibora" style="grid-area: ${cuerpito[i][1]} / ${cuerpito[i][0] }"> </div>`;
        if(i !== 0 && cuerpito[0][1] === cuerpito[i][1] && cuerpito[0][0] === cuerpito[i][0]){
            perder=true;
        }
    }

    tablero.innerHTML = htmlMarkUp;
} 

lugarComida();
setIntervalId = setInterval(iniciarJuego, 125);
document.addEventListener("keydown", changeDirections);