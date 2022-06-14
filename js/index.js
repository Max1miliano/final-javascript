// Creo el contenedor para agregar cada card
const container = document.getElementById('productList')

// Obtengo los datos del catalogo de productos y muestro una card por cada uno
fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(productos => {
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
    })

localStorage.clear() 
function agregarAlCarrito(card) {

    let listaDeId = localStorage.getItem("listaId")

    let totalDeIds = []

    if(listaDeId === null) {
        // localStorage.setItem("listaId", [])
        // listaDeId = localStorage.getItem("listaId")
    } else {
        totalDeIds = listaDeId.split(",")
    }


    totalDeIds.push(card.id)

    localStorage.setItem("listaId", totalDeIds)

   


    const numeroCarrito = document.getElementById('totalItems')
    numeroCarrito.innerText = totalDeIds.length;

    let cartButton = document.getElementById('totalItems')
    cartButton.title = localStorage.getItem('listaId')
    console.log(numeroCarrito)

}

// SCRIPT PARA LOGIN

let main = document.getElementById('firstMain')
let form = document.getElementById('loginForm')
let button = document.getElementById('submitButton')
let inputEmail = document.getElementById('floatingInputValue').value

console.log(inputEmail);



localStorage.setItem("email", 'coder@house.com')
localStorage.setItem("contraseña", 'coderhouse')


button.addEventListener("click",() => {
    main.style.display = 'block'
    form.style.display = 'none'
    
   localStorage.setItem("email", inputEmail)
})

let checkoutOn = document.getElementById('totalItems')
let checkoutSection = document.getElementById('checkoutSection')

checkoutOn.addEventListener("click",() => {
    main.style.display = 'none'
    form.style.display = 'none'
    checkoutSection.style.display = 'block'
    
   localStorage.setItem("email", inputEmail)
})
