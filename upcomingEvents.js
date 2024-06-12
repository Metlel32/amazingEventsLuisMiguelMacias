import * as funciones from './modules/funciones.js'

let url = new URL("https://aulamindhub.github.io/amazing-api/events.json")
fetch(url)
  .then(response => response.json())
  .then(data => {
    // fuction crear tarjetas futuras
    let divPadre = document.getElementById("padreTarjeta")
    let array = data.events

    let arrayFuturos = array.filter(ele => ele.date >= data.currentDate ? ele : false)
    funciones.recorrerArray(arrayFuturos, divPadre)





    //recorrer el array de eventos futuros o presentes

    let divCheck = document.getElementById("divCheck")

    // crear los chechbox

    let categorias = []
    arrayFuturos.forEach((e, i) => {
      if (!categorias.includes(e.category)) {
        categorias.push(e.category)
        funciones.crearCheckbox(divCheck, arrayFuturos[i])
      }
    })



    // barra de busqueda

    let buscar = document.getElementById("search")
    buscar.addEventListener("keyup", () => {
      funciones.filtrarTarjetas(arrayFuturos, buscar)
    })

    // los chechkbox b pro checked

    divCheck.addEventListener("change", () => {
      funciones.filtrarTarjetas(arrayFuturos, buscar)
    })
  })