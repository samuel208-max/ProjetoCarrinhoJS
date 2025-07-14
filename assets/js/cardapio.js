const produtos = document.getElementById('produtos') //cria uma const "produtos" pegando o id "produtos" do HTML
const ul = document.createElement('ul') //cria um elemento <ul> e armazena na const "ul"
ul.className = "ul_produtos" //atribui uma classe com nome "ul_produtos" na ul

// ================== função que atualiza o cardapio ======================
function atualizarCardapio() {
    ul.innerHTML = "" //limpa o cardapio, evitando duplicata

    produtos1.forEach((produto) => { //ForEach que executa tudo que estiver entre {} pra cada produto do cardapio
        const li = document.createElement('li'); //cria um elemento no HTML 'li' e guarda em uma const "li"
        li.className = "item"; //adiciona uma class na li
        li.style.listStyle = 'none' // tira o estilo da li da ul

        const img = document.createElement('img'); //cria um elemento no HTML 'img' e guarda em uma const "img"
        img.src = produto.imagem //pega a imagem lá do objeto que está dentro do array 'produtos1'
        img.alt = produto.nome //coloca um alt na imagem com o nome do produto, o alt é adicionado por questões de acessibilidade

        const comprar = document.createElement('button'); //cria um elemento no HTML 'button' e guarda em uma const "comprar"
        comprar.textContent = "COMPRAR 🛒"; //adiciona um texto no 'comprar(que armazena um button)'
        comprar.className = "comprar" //coloca uma classe "comprar" no botão

        li.appendChild(img); //adiciona a const 'img' na li
        li.append(`${produto.nome} - R$ ${produto.valor.toFixed(2)}`); //adiciona na li um texto que contem nome e valor do produto
        li.appendChild(comprar); //adiciona o botao "comprar" na li
        ul.appendChild(li) //por fim, adiciona a li na ul

        comprar.addEventListener('click', () => { //adiciona um evento 'click' no botao "comprar"
            const existente = carrinho.find(item => item.nome === produto.nome) //cria uma const existente que verifica se se já tem o nome do produto no carrinho, .find() é um método de arrays em JavaScript que retorna o primeiro item do array que satisfaz uma condição.
            if (existente) { //verifica se "existente" contem algo
                existente.quantidade += 1// se conter, adiciona mais 1 na quantidade do produto no
            } else { //senao
                carrinho.push({ ...produto, quantidade: 1 }) //cria uma chave com nome "quantidade" no objeto "produto" e inicia essa quantidade com 1 e adiciona o produto no carrinho
            }

            const toast = document.createElement('div') //cria um elemento div e guarda na const 'toast'
            toast.textContent = "Produto adicionado ao carrinho!" //adiciona um texto na const toast
            toast.className = "toast" //adiciona uma classe "toast" na const 'toast'
            document.body.appendChild(toast) //chama o toast diretamente no corpo do documento

            setTimeout(() => { //setTimeout deixa algo na tela pelo intervalo(tempo) definido
                toast.remove() //vai remover o toast da tela
            }, 3000) //depois de 3 segundo esse código vai ser executado. OU seja, o toast é chamado no corpo do documento e é removido depois de 3 segundos(tempo definido em '3000(se lê em milesimos)' no setTimeOut) 

            localStorage.setItem('carrinho', JSON.stringify(carrinho)) //setItem serve pra salvar um dado no localStorage, 'carrinho' é o nome da chave e o JSON.stringify tranforma o array em string pra conseguir salvar no localStorage

            atualizarCarrinho() //chama a função "atualizarCarrinho"
        })
    })
    produtos.appendChild(ul) //por ultimo, adiciona a const ul na const produtos
}