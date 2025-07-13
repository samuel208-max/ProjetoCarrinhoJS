const produtos = document.getElementById('produtos')
const ul = document.createElement('ul')
ul.className = "ul_produtos"

//array que contém os objetos(produtos)
let produtos1 = JSON.parse(localStorage.getItem('produtos1')) || [ //usa o JSON.parse pra transforma em obj/array    localStorage.getItem serve pra pegar um item pela chave(nome) dele
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

// ================== executa o que tá dentro desse ForEach pra cada produto ======================

function atualizarCardapio() {
    ul.innerHTML = ""

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

        comprar.addEventListener('click', () => {
            const existente = carrinho.find(item => item.nome === produto.nome) //.find() é um método de arrays em JavaScript que retorna o primeiro item do array que satisfaz uma condição.
            if (existente) {
                existente.quantidade += 1
            } else {
                carrinho.push({ ...produto, quantidade: 1 })
            }

            const toast = document.createElement('div')
            toast.textContent = "Produto adicionado ao carrinho!"
            toast.className = "toast"
            document.body.appendChild(toast)

            setTimeout(() => {
                toast.remove()
            }, 3000)

            localStorage.setItem('carrinho', JSON.stringify(carrinho)) //setItem serve pra salvar um dado no localStorage, 'carrinho' é o nome da chave e o JSON.stringify tranforma o array em string pra conseguir salvar no localStorage

            atualizarCarrinho()
        })
    })
    produtos.appendChild(ul)
}

//========================================= TUDO DO CARRINHO =======================================
const btnAbrirCarrinho = document.getElementById('abrirCarrinho')
const checkout = document.getElementById('checkout')
const fecharCarrinho = document.getElementById('fecharCarrinho')
const produtosCarrinho = document.getElementById('produtosCarrinho')
const totalCarrinho = document.getElementById('total')

//================== abrir carrinho ============================
btnAbrirCarrinho.addEventListener('click', () => {
    checkout.style.display = 'block';
})

let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [] //usa o JSON.parse pra transforma em obj/array    localStorage.getItem serve pra pegar um item pela chave(nome) dele


//===================== Função pra atualizar carrinho =======================
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

//===================== Função pra remover um item do carrinho ======================
function removerCarrinho(index) {
    if (carrinho[index].quantidade > 1) {
        carrinho[index].quantidade -= 1
    } else {
        carrinho.splice(index, 1)
    }

    localStorage.setItem('carrinho', JSON.stringify(carrinho)) //setItem serve pra salvar um dado no localStorage, 'carrinho' é o nome da chave e o JSON.stringify tranforma o array em string pra conseguir salvar no localStorage

    atualizarCarrinho();
}

//==================== fechar carrinho ===================
fecharCarrinho.addEventListener('click', () => {
    checkout.style.display = 'none'
})
//======================================= FECHA TUDO QUE ESTÁ NO CARRINHO ==============================


//======================================= CADASTRO DE PRODUTO ======================================
const modal = document.getElementById('modal')
const abrirModal = document.getElementById('abrirModal')
const botaoCadastrar = document.getElementById('botaoCadastrar')
const fecharModal = document.getElementById('fecharModal')

abrirModal.addEventListener('click', () => {
    modal.open = true
})

botaoCadastrar.addEventListener('click', (evento) => {
    evento.preventDefault()
    let inputNome = document.getElementById('inputNome').value
    let inputFoto = document.getElementById('inputFoto').value
    let inputValor = parseFloat(document.getElementById('inputValor').value)

    let novoProduto = {
        imagem: inputFoto,
        nome: inputNome,
        valor: inputValor
    }

    produtos1.push(novoProduto)
    ul.innerHTML = ""
    localStorage.setItem('produtos1', JSON.stringify(produtos1))
    atualizarCardapio()
    modal.open = false
})
atualizarCardapio()
atualizarCarrinho()

fecharModal.addEventListener('click', () => {
    modal.open = false
})