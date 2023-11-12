const grillas = document.querySelectorAll(".grilla");
const buttonReiniciar = document.getElementById("reiniciar");
let contador = 0;
const combinaciones = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const x = "✖";
const o = "〇";

iniciarJuego();
buttonReiniciar.addEventListener("click", reiniciar);
function iniciarJuego() {
  grillas.forEach((grilla) =>
    grilla.addEventListener("click", grillaPresionada)
  );
}
function reiniciar() {
  
  grillas.forEach((grilla) => (grilla.innerHTML = ""));
  contador = 0;
  console.log(contador)//reinicia el contador
  iniciarJuego();

}
function grillaPresionada(e) {
  if (e.target.innerHTML == "") {
    contador++;
    e.target.innerHTML = contador % 2 != 0 ? x : o;
    revisarSiHayGanador();
  }
}
function finalizarJuego(ganador) {
  Swal.fire({
    icon: "success",
    title: "Ha Ganado " + ganador,
  });
  grillas.forEach((g) => {
    g.removeEventListener("click", grillaPresionada);
  });
}
function revisarSiHayGanador() {
  let resultado = false;
  const checkJugador = (jugador) => {
    combinaciones.map((jugada) => {
      if (
        arrayGrillas[jugada[0]].innerHTML == jugador &&
        arrayGrillas[jugada[1]].innerHTML == jugador &&
        arrayGrillas[jugada[2]].innerHTML == jugador
      ) {
        resultado = true;
      }
    });
    return resultado;
  };

  let arrayGrillas = Array.from(grillas);
  if (checkJugador(x)) finalizarJuego(x);
  else if (checkJugador(o)) finalizarJuego(o);
  else if (arrayGrillas.every((x) => x.innerHTML != "")) {
    Swal.fire({
      icon: "error",
      title: "hubo empate",
    });

    grillas.forEach((g) => {
      g.removeEventListener("click", grillaPresionada);
    });
  }
}