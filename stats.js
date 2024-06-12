import { agregarPuntos } from "./modules/funciones.js"

let url = new URL("https://aulamindhub.github.io/amazing-api/events.json")

//mayor asistencia
fetch(url)
    .then(response => response.json())
    .then(data => {
        let mayorAsistencia = document.getElementById("eventoMayorAsistencia")
        let menorAsistencia = document.getElementById('eventoMenorAsistencia')

        let array = data.events
        let arrayPasados = array.filter(ele => ele.assistance)

        let mayorPorcentaje = []
        let menorPorcentaje = []

        arrayPasados.forEach(element => {
            element.assistance = (element.assistance / element.capacity) * 100
            if (mayorPorcentaje.length == 0) {
                mayorPorcentaje.push(element)
            }
            if (mayorPorcentaje[0].assistance < element.assistance) {
                mayorPorcentaje.pop()
                mayorPorcentaje.push(element)
            }

            if (menorPorcentaje.length == 0) {
                menorPorcentaje.push(element)
            }
            if (menorPorcentaje[0].assistance > element.assistance) {
                menorPorcentaje.pop()
                menorPorcentaje.push(element)
            }


        });
        mayorAsistencia.innerHTML = `${mayorPorcentaje[0].name} with ${mayorPorcentaje[0].assistance.toFixed(2)}% assitance`
        menorAsistencia.innerHTML = `${menorPorcentaje[0].name} with ${menorPorcentaje[0].assistance.toFixed(2)}% assitance`




        let mayorCapacidadHtml = document.getElementById('eventoMayorCapacidad')


        let mayorCapacidad = []
        array.forEach(e => {
            if (mayorCapacidad.length === 0) {
                mayorCapacidad.push(e)
            }
            if (mayorCapacidad[0].capacity < e.capacity) {
                mayorCapacidad.pop()
                mayorCapacidad.push(e)
            }
        })

        mayorCapacidadHtml.innerHTML = `${mayorCapacidad[0].name} capacity ${mayorCapacidad[0].capacity} people `
    })


fetch(url)
    .then(response => response.json())
    .then(data => {

        let arrayFuturos = data.events.filter(e => e.date >= data.currentDate ? e : false)

        // categorias

        let category = []
        arrayFuturos.forEach(e => {
            if (!category.includes(e.category)) {
                category.push(e.category)
            }

        })



        // precios
        let preciosPorCategoria = {};

        arrayFuturos.forEach((e) => {
            if (category.includes(e.category)) {
                if (!preciosPorCategoria[e.category]) {
                    preciosPorCategoria[e.category] = 0
                }
                preciosPorCategoria[e.category] += e.price; 
            }
        });

        // porcentaje de assitencia


        
        let porcentajeAssitencia = {}

        arrayFuturos.forEach( e => {
            if(category.includes(e.category)){
                if(!porcentajeAssitencia[e.category]){
                    porcentajeAssitencia[e.category] = 0
                }
                porcentajeAssitencia[e.category] += e.estimate
            }
        })

        let count = {}
        arrayFuturos.forEach( e => {
            if(category.includes(e.category)){
                if(!count[e.category]){
                    count[e.category] = 0
                }
                count[e.category] += e.capacity
            }
        })

        // imprimir las tablas
        category.forEach(e => {
            let tabla = document.getElementById('tbodyCategory')
            let linea = document.createElement('tr')
            linea.innerHTML = `
                <td>${e}</td>
                <td >${agregarPuntos(preciosPorCategoria[e]*porcentajeAssitencia[e])} $</td>
                <td> ${((porcentajeAssitencia[e]/count[e])*100).toFixed(2)}% </td>`
            tabla.appendChild(linea)
        })


    })


    
fetch(url)
.then(response => response.json())
.then(data => {

    let arrayPasados = data.events.filter(e => e.date < data.currentDate ? e : false)

    // categorias

    let category = []
    arrayPasados.forEach(e => {
        if (!category.includes(e.category)) {
            category.push(e.category)
        }

    })



    // precios
    let preciosPorCategoria = {};

    arrayPasados.forEach((e) => {
        if (category.includes(e.category)) {
            if (!preciosPorCategoria[e.category]) {
                preciosPorCategoria[e.category] = 0
            }
            preciosPorCategoria[e.category] += e.price; 
        }
    });

    // porcentaje de assitencia


    
    let porcentajeAssitencia = {}

    arrayPasados.forEach( e => {
        if(category.includes(e.category)){
            if(!porcentajeAssitencia[e.category]){
                porcentajeAssitencia[e.category] = 0
            }
            porcentajeAssitencia[e.category] += e.assistance
        }
    })

    let count = {}
    arrayPasados.forEach( e => {
        if(category.includes(e.category)){
            if(!count[e.category]){
                count[e.category] = 0
            }
            count[e.category] += e.capacity
        }
    })

    // imprimir las tablas
    category.forEach(e => {
        let tabla = document.getElementById('tbodyCategoryPast')
        let linea = document.createElement('tr')
        linea.innerHTML = `
            <td>${e}</td>
            <td >${agregarPuntos(preciosPorCategoria[e]*porcentajeAssitencia[e])} $</td>
            <td> ${((porcentajeAssitencia[e]/count[e])*100).toFixed(2)}% </td>`
        tabla.appendChild(linea)
    })


})
