//======================================= CADASTRO DE PRODUTO ======================================
const modal = document.getElementById('modal') //pega o id 'modal' no HTML e adiciona na const "modal"
const abrirModal = document.getElementById('abrirModal') //pega o id 'abrirModal' no HTML e adiciona na const "abrirModal"
const botaoCadastrar = document.getElementById('botaoCadastrar') //pega o id 'botaoCadastrar' no HTML e adiciona na const "botaoCadastrar"
const fecharModal = document.getElementById('fecharModal') //pega o id 'fecharModal' no HTML e adiciona na const "fecharModal"

abrirModal.addEventListener('click', () => { //adiciona um evento 'click' na const "abrirModal"
    modal.open = true //transforma o modal.open em true
})

botaoCadastrar.addEventListener('click', (evento) => { //adiciona um evento 'click' na const "botaoCadastrar"
    evento.preventDefault() //para o evento padrão do formulario
    let inputNome = document.getElementById('inputNome').value //pega o valor colocado no id 'inputNome' no HTML e coloca em uma nova variavel com nome "inputNome"
    let inputFoto = document.getElementById('inputFoto').value //pega o valor colocado no id 'inputFoto' no HTML e coloca em uma nova variavel com nome "inputFoto"
    let inputValor = parseFloat(document.getElementById('inputValor').value) //pega o valor colocado no id 'inputValor' no HTML e coloca em uma nova variavel com nome "inputValor"

    let novoProduto = { //cria uma variavel e coloca um objeto(nesse caso um novo produto) dentro dela
        imagem: inputFoto, //cria uma chave "imagem" e atribui o valor da variavel "inputFoto"
        nome: inputNome, //cria uma chave "nome" e atribui o valor da variavel "inputNome"
        valor: inputValor //cria uma chave "valor" e atribui o valor da variavel "inputValor"
    }

    produtos1.push(novoProduto) //coloca a variavel "novoProduto" e adiciona no array "produtos1"
    ul.innerHTML = "" //limpa o conteudo da ul pra evitar duplicatas
    localStorage.setItem('produtos1', JSON.stringify(produtos1)) //salva um dado no localStorage com a chave(nome) "produtos1" e atribui o valor JSON.stringify(produtos1) pra mandar o array "produtos1" pro localStorage em forma de String
    atualizarCardapio() //chama a função "atualizarCardapio"
    modal.open = false //fecha o modal
})
atualizarCardapio() //chama a função "atualizarCardapio"
atualizarCarrinho() //chama a função "atualizarCarrinho"

fecharModal.addEventListener('click', () => { //adiciona um evento 'click' na const "fecharModal"
    modal.open = false //fecha o modal
})