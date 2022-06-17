// Creo el contenedor para agregar cada card
let container = document.getElementById('productList')
let contenidoDeModal = document.getElementById('contenidoDeModal')


// ME PIDO DATOS DE UNA API
fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(productos => {
        productos.forEach(card => {
            let div = document.createElement('div')
            div.className = "card"
            div.style = "width: 18rem;"

            let imgCard = document.createElement('img')
            imgCard.src = `${card.image}`

            let cardBody = document.createElement('div')
            cardBody.className = "card-body"
            cardBody.innerHTML = `<h5 class="card-title">${card.title}</h5> <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>`

            let button = document.createElement('button')
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

// USO DE FUNCIONES 
function agregarAlCarrito(card) {

    let listaDeId = localStorage.getItem("listaId")

    // USO DE ARRAYS 
    let totalDeIds = []

    // SINTAXIS AVANZADA 
    listaDeId === null ? true :  totalDeIds = listaDeId.split(",")

    totalDeIds.push(card.id)

    localStorage.setItem("listaId", totalDeIds)

    const numeroCarrito = document.getElementById('totalItems')
    numeroCarrito.innerText = totalDeIds.length;

    let cartButton = document.getElementById('totalItems')
    cartButton.title = localStorage.getItem('listaId')

    Toastify({

        text: "Producto agregado al carrito",
        
        duration: 3000
        
        }).showToast();

    let totalPrice = []
    totalPrice.push(card.price)

    contenidoDeModal.append(totalPrice)
}