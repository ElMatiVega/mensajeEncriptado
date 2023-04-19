// document.addEventListener("DOMContentLoaded", encriptacion);
const contenido = document.querySelector("#resultado");
let boton = document.getElementById("botonEncriptar");
// boton.onclick = encriptacion;
boton.addEventListener('click',encriptacion)

var html='';

function encriptacion() {
  
  let texto = document.querySelector("textarea");
  let textoAEncriptar = texto.value;
  
  let encriptado = "";

  for (let i = 0; i < textoAEncriptar.length; i++) {
    if (textoAEncriptar[i] === "a") {
      
      encriptado += "ai";
    } else if (textoAEncriptar[i] === "e") {
      
      encriptado += "enter";
    } else if (textoAEncriptar[i] === "i") {
      
      encriptado += "imes";
    } else if (textoAEncriptar[i] === "o") {
      
      encriptado += "ober";
    } else if (textoAEncriptar[i] === "u") {
      
      encriptado += "ufat";
    } else {
      
      encriptado += textoAEncriptar[i];
    }
  }
 
  //Mostrar en pantalla
  
   
  if (encriptado.length > 0) {
    html='';
    html += `<textarea class="textResultado" id="pResultado" cols="25" rows="20"> ${encriptado}</textarea></br><button id="botonCopiar">Copiar</button>`;
    
  } else {
    html='';
    html += (` <img
    class="imagenResultado"
    src="imagenes/Muñeco.png"
    alt="Imagen de busqueda"
  />
    <div>
        <p class="pResultado" id="pResultado">Ningún mensaje fue encontrado</p>
        <span class="spanResultado" >Ingresa el texto que desees encriptar o desencriptar</span>
    </div>`);
    
  }
  texto.value='';
  contenido.innerHTML=html;


}


let result = document.querySelector("#pResultado");
let button_Copia = document.querySelector("#botonCopiar");
button_Copia.addEventListener('click', (event) => {

  event.preventDefault();

  navigator.clipboard.writeText(result.innerHTML)
      .then(() => {
          alert("Copiado");
          console.log("copiado");
      })
      .catch(err => {
          alert('Hubo un error', err);
          console.log("err");
      })
})




