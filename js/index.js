// Creo el contenedor para agregar cada card
const container = document.getElementById('productList')

// Obtengo los datos del catalogo de productos y muestro una card por cada uno
fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(productos=>{
    productos.forEach(card => {
        const div = document.createElement('div')
        div.className = "card"
        div.style = "width: 18rem;"
    
        const imgCard = document.createElement('img')
        imgCard.src = `${card.image}`
    
        const cardBody = document.createElement('div')
        cardBody.className = "card-body"
        cardBody.innerHTML = `<h5 class="card-title">${card.title}</h5> <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>`
    
        const button = document.createElement('button')
        button.className = "btn btn-primary"
        button.id = "addToCart"
        button.innerText = "Agregar"
        button.addEventListener("click", () => {
            agregarAlCarrito(card)
        })
    
    
        div.appendChild(imgCard)
        div.appendChild(cardBody)
        cardBody.appendChild(button)
        container.appendChild(div)
    });

    // traer una sola card 
    // const div = document.createElement('div')
    // div.className = "card"
    // div.style = "width: 18rem;"

    // const imgCard = document.createElement('img')
    // imgCard.src = `${card[0].image}`

    // const cardBody = document.createElement('div')
    // cardBody.className = "card-body"
    // cardBody.innerHTML = `<h5 class="card-title">${card.title}</h5> <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>`

    // const button = document.createElement('button')
    // button.className = "btn btn-primary"
    // button.id = "addToCart"
    // button.innerText = "Agregar"
    // button.addEventListener("click", agregarAlCarrito)


    // div.appendChild(imgCard)
    // div.appendChild(cardBody)
    // cardBody.appendChild(button)
    // container.appendChild(div)
})


function agregarAlCarrito(card) {
    console.log('Se agrega el producto: ' + card.title)
}

// Lo mejor sería crear un objeto card que ya contenga la funcion que me agregue elementos al carrito

