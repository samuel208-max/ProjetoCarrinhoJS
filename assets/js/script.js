const produtos = document.getElementById('produtos')
const ul = document.createElement('ul')
ul.className = "ul_produtos"

const produtosCarrinho = document.getElementById('produtosCarrinho')

let produtos1 = [
    {
        imagem: '/assets/images/gin.jpg',
        nome: 'gin',
        valor: 30.00
    },
    {
        imagem: '/assets/images/whisky.jpg',
        nome: 'Whisky',
        valor: 30.00
    },
    {
        imagem: '/assets/images/licor.jpg',
        nome: 'Licor',
        valor: 40.00
    },
    {
        imagem: '/assets/images/vinhos.png',
        nome: 'Vinho',
        valor: 40.00
    },
    {
        imagem: '/assets/images/cerveja.jpg',
        nome: 'Heineken',
        valor: 40.00
    }
]

let carrinho = []

// let total = 0

produtos1.forEach((produto) => {
    const li = document.createElement('li');
    li.className = "item";
    li.style.listStyle = 'none'

    const img = document.createElement('img');
    img.src = produto.imagem
    img.alt = produto.nome

    const comprar = document.createElement('button');
    comprar.textContent = "COMPRAR 🛒";
    comprar.className = "comprar"

    li.appendChild(img);
    li.append(`${produto.nome} - R$ ${produto.valor.toFixed(2)}`);
    li.appendChild(comprar);
    ul.appendChild(li)
    produtos.appendChild(ul)

    comprar.addEventListener('click', () => {
        carrinho.push(produto)
        atualizarCarrinho()
    })
})

function atualizarCarrinho() {
    produtosCarrinho.innerHTML = ''

    carrinho.forEach((produto, index) => {

        const li_carrinho = document.createElement('li')
        li_carrinho.className = "li_carrinho"

        const liItem = document.createElement('p')
        liItem.className = 'item_lista'
        liItem.append(`${produto.nome} - R$${produto.valor}`)

        const btnRemover = document.createElement('p')
        btnRemover.textContent = "X"
        btnRemover.style.cursor = 'pointer'

        btnRemover.addEventListener('click', () => {
            removerCarrinho(index)
        })

        li_carrinho.appendChild(liItem)
        li_carrinho.appendChild(btnRemover)
        produtosCarrinho.appendChild(li_carrinho)
    })
}

function removerCarrinho(index) {
    const produtoRemovido = carrinho[index];
    carrinho.splice(index, 1);
    atualizarCarrinho();
}


const btnAbrirCarrinho = document.getElementById('abrirCarrinho')
const checkout = document.getElementById('checkout')

//================== abrir carrinho ============================
btnAbrirCarrinho.addEventListener('click', () => {
    checkout.style.display = 'block';
})

const fecharCarrinho = document.getElementById('fecharCarrinho')
//==================== fechar carrinho ===================
fecharCarrinho.addEventListener('click', () => {
    checkout.style.display = 'none'
})