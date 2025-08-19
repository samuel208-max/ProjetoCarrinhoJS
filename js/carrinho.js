const btnAbrirCarrinho = document.getElementById('abrirCarrinho') //cria uma const pegando o id "abrirCarrinho" no HTML
const checkout = document.getElementById('checkout') //cria uma const pegando o id "checkout" no HTML
const fecharCarrinho = document.getElementById('fecharCarrinho') //cria uma const pegando o id "fecharCarrinho" no HTML
const produtosCarrinho = document.getElementById('produtosCarrinho') //cria uma const pegando o id "produtosCarrinho" no HTML
const totalCarrinho = document.getElementById('total') //cria uma const pegando o id "total" no HTML

//================== abrir carrinho ============================
btnAbrirCarrinho.addEventListener('click', () => { //adiciona um evento 'click' na const btnAbrirCarrinho
    checkout.style.display = 'block'; //transforma o checkout q está com display 'none(sem aparecer)' em display 'block(aparecendo)'  
})

let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [] //usa o JSON.parse pra transforma a String em obj/array.    localStorage.getItem serve pra pegar um item pela chave(nome) dele

//===================== Função pra atualizar carrinho =======================
function atualizarCarrinho() {
    produtosCarrinho.innerHTML = '' //limpa os produtos do Carrinho pra evitar duplicata
    let total = 0; //cria uma variavel com o nome "total" e armazena o número 0

    carrinho.forEach((produto, index) => { //cria um forEach pra cada produto do carrinho, usando 2 parametros: "produto(Objeto do Array) e index(indice)"
        const li_carrinho = document.createElement('li') //cria um elemento <li> e armazena dentro de uma const
        li_carrinho.className = "li_carrinho" //adiciona uma class a const q eu acabei de criar

        const liItem = document.createElement('p') //cria um elemento <p> e coloca em uma const
        liItem.className = 'item_lista' //adiciona uma class nessa const
        liItem.append(`${produto.nome} (x${produto.quantidade}) - R$${(produto.valor * produto.quantidade).toFixed(2)}`) //coloca em texto o nome do produto, quantidade e valor total(multiplicando o valor do produto pela quantidade dele no carrinho) na const criada

        const btnRemover = document.createElement('p') //cria um elemento <p> e coloca em uma const 
        btnRemover.textContent = "-" //adiciona um texto nesse p
        btnRemover.style.cursor = 'pointer' //coloca um cursor pointer pra quando passa o mouse encima desse p

        btnRemover.addEventListener('click', () => { //adiciona um evento 'click' na const
            removerCarrinho(index) //chama a função "removerCarrinho"
        })

        total += produto.valor * produto.quantidade //coloca o preço total do produto na variavel total(variavel que se inicia em zero e é atualizada constantemente)

        li_carrinho.appendChild(liItem) //adiciona a const 'liItem' em li_Carrinho
        li_carrinho.appendChild(btnRemover) //adiciona a const 'btnRemover' em li_Carrinho
        produtosCarrinho.appendChild(li_carrinho) //adiciona a const 'li_carrinho' em produtosCarrinho
    })
    totalCarrinho.textContent = `Total: R$${total.toFixed(2)}` //adiciona um texto com a variavel total na const "totalCarrinho" 
}

//===================== Função pra remover um item do carrinho ======================
function removerCarrinho(index) { //cria uma função com o nome "RemoverCarrinho"
    if (carrinho[index].quantidade > 1) { // verifica se a quantidade do indice é maior que 1
        carrinho[index].quantidade -= 1 //se for: ele tira 1 da quantidade do indice do carrinho 
    } else { //senao
        carrinho.splice(index, 1)
    }

    const toast2 = document.createElement('div') //cria um elemento div e guarda na const 'toast'
    toast2.textContent = "Produto removido do carrinho!" //adiciona um texto na const toast
    toast2.className = "toast" //adiciona uma classe "toast" na const 'toast'
    document.body.appendChild(toast2) //chama o toast diretamente no corpo do documento

    setTimeout(() => { //setTimeout deixa algo na tela pelo intervalo(tempo) definido
        toast2.remove() //vai remover o toast da tela
    }, 3000) //depois de 3 segundo esse código vai ser executado. OU seja, o toast é chamado no corpo do documento e é removido depois de 3 segundos(tempo definido em '3000(se lê em milesimos)' no setTimeOut) 

    localStorage.setItem('carrinho', JSON.stringify(carrinho)) //setItem serve pra salvar um dado no localStorage, 'carrinho' é o nome da chave e o JSON.stringify tranforma o array em string pra conseguir salvar no localStorage. Nesse caso, tá transformando o array 'carrinho' em string com chave(nome) "carrinho", transformando em string pra conseguir salvar no localStorage já que ele só aceita string 

    atualizarCarrinho(); //chama a função "atualizarCarrinho"
}

//==================== fechar carrinho ===================
fecharCarrinho.addEventListener('click', () => { //adiciona um evento 'click' na const "fecharCarrinho"
    checkout.style.display = 'none' //tranforma a const "checkout" de volta em display 'none'
})