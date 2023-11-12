//Ejecutar función en el evento click
try {
  const imagen =  localStorage.getItem("imgs")
  const avatar = document.getElementById("avatar")
  avatar.setAttribute("src", imagen == null? "https://rickandmortyapi.com/api/character/avatar/1.jpeg" : imagen)
  
} catch (error) {
  
}

try {
  document
    .getElementById("btn_open")
    .addEventListener("click", open_close_menu);
  
} catch (error) {
  
}
try {
  

  document.getElementById("animation").addEventListener("click", cambiarFondo);
} catch (error) {}
//Declaramos variables
var side_menu = document.getElementById("menu_side");
var btn_open = document.getElementById("btn_open");
var body = document.body;

let root = document.documentElement;

function open_close_menu() {
  body.classList.toggle("body_move");
  side_menu.classList.toggle("menu__side_move");
  
}
//Evento para mostrar y ocultar menú
function cambiarFondo(e) {
  
  console.log(root.style.getPropertyValue("--posicionClick"));

  animation.classList.add("animate");
  setTimeout(() => {
    animation.classList.remove("animate");
  }, 1500);
}
//Si el ancho de la página es menor a 760px, ocultará el menú al recargar la página

if (window.innerWidth < 760) {
  body.classList.add("body_move");
  side_menu.classList.add("menu__side_move");
}

//Haciendo el menú responsive(adaptable)


  window.addEventListener("resize", function () {
    try{

      if (window.innerWidth > 760) {
        body.classList.remove("body_move");
        side_menu.classList.remove("menu__side_move");
      }
    
      if (window.innerWidth < 760) {
        body.classList.add("body_move");
        side_menu.classList.add("menu__side_move");
      }
    }
    catch{

    }
  });
try {
    document.getElementById("username").innerHTML= localStorage.getItem("username")
    document.getElementById("email").innerHTML= localStorage.getItem("email")
} catch (error) {
  
}
try {
  fetch('https://rickandmortyapi.com/api/character')
  .then((resp) => resp.json())
  .then((data) => {
    try {
      data.results.map((p, index) => {
        document.getElementById("imgs").innerHTML+= `<img onclick="selectImg(${index})" src="${p.image}">` 
  
      }) 
    } catch (error) {
      
    }
  } )
  let btnToggle = document.getElementById("toggle-imgs")
btnToggle.addEventListener("click", e => {
  let imgs = document.getElementById("imgs")
  imgs.classList.toggle("hidden")

})
function selectImg(index){
  fetch(`https://rickandmortyapi.com/api/character/${index+1}`)
  .then((resp) => resp.json())
  .then((data) => {
    document.getElementById("avatar").setAttribute("src", data.image)
    localStorage.setItem("imgs", data.image)
  })
}
  
} catch (error) {
  
}