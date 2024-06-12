let url = new URL("https://aulamindhub.github.io/amazing-api/events.json")
fetch(url)
    .then(response => response.json())
    .then(data => {

        let value = window.location.href

        value = new URL(value).searchParams.get("value")
        let arrayDatos = data.events.filter(e => {
            if (e._id == value) {
                return e
            }
        })
        
        // crear la tarjeta con el array y el id
            let tarjeta = document.getElementById("container-2")
            let contTarjeta = document.createElement("div")
            contTarjeta.className = " card mb-3 align-items-center"



            contTarjeta.innerHTML = `<div class="row  align-items-center">
    <div class="col-7">
        <img src="${arrayDatos[0].image}" class=" m-3 img-fluid" alt="${arrayDatos[0].category}">
    </div>
    <div class="col-5">
        <div class="card-body">
            <h5 class="card-title">${arrayDatos[0].name}</h5>
            <p class="card-text">${arrayDatos[0].description}</p>
            <p class="card-text">Place: ${arrayDatos[0].place} </p>
            <p class="card-text">Capacity: ${arrayDatos[0].capacity}</p>
            <p class="card-text stimated">Estimate: ${arrayDatos[0].estimate}</p>
            <p class="card-text asist">Assistance: ${arrayDatos[0].assistance}</p>
            <h5 class="p-2">$ ${arrayDatos[0].price}</h5>
            <p class="card-text"><small class="text-body-secondary">Date: ${arrayDatos[0].date}</small></p>
        </div>
    </div>
    
  </div>`

            tarjeta.appendChild(contTarjeta)



            let stimated = document.querySelector(".stimated")
            if (stimated.textContent == "Estimate: undefined") {
                stimated.style.display = "none"
            } else {
                stimated.style.display = "block"
            }

            let assistance = document.querySelector(".asist")
            if (assistance.textContent == "Assistance: undefined") {
                assistance.style.display = "none"
            } else {
                assistance.style.display = "block"
            }



        

    })
