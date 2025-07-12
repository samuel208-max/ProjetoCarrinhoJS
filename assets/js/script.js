const produtos = document.getElementById('produtos')
const ul = document.createElement('ul')
ul.className = "ul_produtos"
const produtosCarrinho = document.getElementById('produtosCarrinho')
const totalCarrinho = document.getElementById('total')

let produtos1 = [
    {
        imagem: '/assets/images/gin.jpg',
        nome: 'gin',
        valor: 89.90
    },
    {
        imagem: '/assets/images/energetico.webp',
        nome: 'energético',
        valor: 9.90
    },
    {
        imagem: '/assets/images/cocaKS.jpeg',
        nome: 'Coca-Cola KS',
        valor: 16.50
    },
    {
        imagem: '/assets/images/whisky.jpg',
        nome: 'Whisky',
        valor: 129.90
    },
    {
        imagem: '/assets/images/licor.jpg',
        nome: 'Licor',
        valor: 59.90
    },
    {
        imagem: '/assets/images/vinhos.png',
        nome: 'Vinho',
        valor: 49.90
    },
    {
        imagem: '/assets/images/cerveja.jpg',
        nome: 'Heineken',
        valor: 6.90
    }
]


let carrinho = []

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
        const existente = carrinho.find(item => item.nome === produto.nome) //.find() é um método de arrays em JavaScript que retorna o primeiro item do array que satisfaz uma condição.
        if (existente) {
            existente.quantidade += 1
        } else {
            carrinho.push({ ...produto, quantidade: 1 })
        }
        atualizarCarrinho()
    })
})


function atualizarCarrinho() {
    produtosCarrinho.innerHTML = ''
    let total = 0;

    carrinho.forEach((produto, index) => {

        const li_carrinho = document.createElement('li')
        li_carrinho.className = "li_carrinho"

        const liItem = document.createElement('p')
        liItem.className = 'item_lista'
        liItem.append(`${produto.nome} (x${produto.quantidade}) - R$${(produto.valor * produto.quantidade).toFixed(2)}`)

        const btnRemover = document.createElement('p')
        btnRemover.textContent = "-"
        btnRemover.style.cursor = 'pointer'

        btnRemover.addEventListener('click', () => {
            removerCarrinho(index)
        })

        total += produto.valor * produto.quantidade

        li_carrinho.appendChild(liItem)
        li_carrinho.appendChild(btnRemover)
        produtosCarrinho.appendChild(li_carrinho)
    })
    totalCarrinho.textContent = `Total: R$${total.toFixed(2)}`
}

function removerCarrinho(index) {
    if (carrinho[index].quantidade > 1) {
        carrinho[index].quantidade -= 1
    } else {
        carrinho.splice(index, 1)
    }
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
