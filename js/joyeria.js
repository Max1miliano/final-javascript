let container = document.getElementById('productList')

fetch('https://fakestoreapi.com/products/category/jewelery')
    .then(res=>res.json())
    .then(categoriaJoyeria=>
        categoriaJoyeria.forEach(product => {
            let div = document.createElement('div')
            div.className = "card"
            div.style = "width: 18rem;"

            let imgCard = document.createElement('img')
            imgCard.src = `${product.image}`

            let cardBody = document.createElement('div')
            cardBody.className = "card-body"
            cardBody.innerHTML = `<h5 class="card-title">${product.title}</h5> <p class="card-text">${product.description}</p>`

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


        } ))

function agregarAlCarrito(product) {

    let listaDeId = localStorage.getItem("listaId")

    // USO DE ARRAYS 
    let totalDeIds = []

    // SINTAXIS AVANZADA 
    listaDeId === null ? true :  totalDeIds = listaDeId.split(",")

    totalDeIds.push(product.id)

    localStorage.setItem("listaId", totalDeIds)

    const numeroCarrito = document.getElementById('totalItems')
    numeroCarrito.innerText = totalDeIds.length;

    let cartButton = document.getElementById('totalItems')
    cartButton.title = localStorage.getItem('listaId')

    Toastify({

        text: "Producto agregado al carrito",
        
        duration: 3000
        
        }).showToast();
}