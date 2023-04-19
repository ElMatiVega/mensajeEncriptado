// document.querySelector("#botonCopiar").addEventListener("click", copy)
// document.addEventListener("DOMContentLoaded", copy);
// function copy() {
//     console.log("hola");
//     let copyText = document.querySelector(".pResultado");
//     //copyText.select();
//     window.clipboard.writeText(copyText)
//     .then(() => {
//       console.log('Texto copiado al portapapeles')
//     })
//     .catch(err => {
//       console.error('Error al copiar al portapapeles:', err)
//     })
  

//   }




//   window.clipboard
//   .readText()
//   .then(
//     (clipText) => (document.querySelector(".pResultado").innerText = clipText),
//     console.log(clipText)
//   );

 
//   let boton = document.getElementById("botonCopiar");
//   boton.addEventListener("click", copy);


  let result = document.querySelector("#pResultado");
  let button_Copia = document.querySelector("#botonCopiar")
  button_Copia.addEventListener('click', (event) => {

    event.preventDefault();

    navigator.clipboard.writeText(result.innerHTML)
        .then(() => {
            alert("Copiado")
        })
        .catch(err => {
            alert('Hubo un error', err);
        })
})