import * as funciones from './modules/funciones.js'


let url = new URL("https://aulamindhub.github.io/amazing-api/events.json")
fetch(url)
  .then(response => response.json())
  .then(data => {
    // fuction crear tarjetas futuras
    let divPadre = document.getElementById("padreTarjeta")
    let array = data.events

    let arrayPast = array.filter(ele => ele.date < data.currentDate ? ele : false)

    funciones.recorrerArray(arrayPast, divPadre)

    // fujncion crear checkbox 

    let divCheck = document.getElementById("divCheck")

    let categorias = []
    arrayPast.forEach((e, i) => {
      if (!categorias.includes(e.category)) {
        categorias.push(e.category)
        funciones.crearCheckbox(divCheck, arrayPast[i])
      }
    })




    // barra de busqueda

    let buscar = document.getElementById("search")
    buscar.addEventListener("keyup", (e) => {
      funciones.filtrarTarjetas(arrayPast, buscar)
    })

    // los chechkbox b pro checked

    divCheck.addEventListener("change", () => {
      funciones.filtrarTarjetas(arrayPast, buscar)
    })



  })
