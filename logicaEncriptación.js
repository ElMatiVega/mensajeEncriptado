document.addEventListener("DOMContentLoaded", encriptacion);

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
 
  const contenido = document.querySelector("#resultado");
  
  let html='';
  if (encriptado.length > 0) {
    html += `<p class="pResultado"> ${encriptado}</p></br><button id="botonCopiar">Copiar</button>`;
    
  } else {
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
 
  contenido.innerHTML=html;
 
}
let boton = document.getElementById("botonEncriptar");
boton.onclick = encriptacion;

