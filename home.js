import * as funciones from './modules/funciones.js'

let url = new URL("https://aulamindhub.github.io/amazing-api/events.json")

fetch(url)
  .then(response => response.json())
  .then(data => {
    let padreTarjeta = document.getElementById('padreTarjeta')
    let arrayRec = data.events
    funciones.recorrerArray(data.events, padreTarjeta)


    // crear checkbox

    let padreCheck = document.getElementById("fatherCheck")


    //recorrer el array y buscar categorias

    let categorias = []
    arrayRec.forEach((e, i) => {
      if (!categorias.includes(e.category)) {
        categorias.push(e.category)
        funciones.crearCheckbox(padreCheck, arrayRec[i])
      }
    })


    // barra de busqueda

    let buscar = document.getElementById("search")
    buscar.addEventListener("keyup", () => {
      funciones.filtrarTarjetas(arrayRec, buscar)
    })

    // los chechkbox b pro checked

    padreCheck.addEventListener("change", (e) => {
      funciones.filtrarTarjetas(arrayRec, buscar)
    })

  })











