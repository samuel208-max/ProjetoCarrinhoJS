//array que contém os objetos(produtos)
let produtos1 = JSON.parse(localStorage.getItem('produtos1')) || [ //usa o JSON.parse pra transforma em obj/array    localStorage.getItem serve pra pegar um item pela chave(nome) dele
    {
        imagem: './images/gin.jpg',
        nome: 'gin',
        valor: 89.90
    },
    {
        imagem: './images/cerveja.jpg',
        nome: 'energético',
        valor: 9.90
    },
    {
        imagem: './images/licor.jpg',
        nome: 'Coca-Cola KS',
        valor: 16.50
    },
    {
        imagem: './images/logo.jpg',
        nome: 'Whisky',
        valor: 129.90
    },
    {
        imagem: './images/licor.jpg',
        nome: 'Licor',
        valor: 59.90
    },
    {
        imagem: './images/vinhos.png',
        nome: 'Vinho',
        valor: 49.90
    },
    {
        imagem: './images/whisky.jpg',
        nome: 'Heineken',
        valor: 6.90
    },


    //adicionados pelo GPT para testes
    {
        imagem: './images/gin.jpg',
        nome: 'Sprite 2L',
        valor: 8.50
    },
    {
        imagem: './images/cerveja.jpg',
        nome: 'Cerveja Corona 355ml',
        valor: 7.50
    },
    {
        imagem: './images/logo.jpg',
        nome: 'Água Mineral 500ml',
        valor: 2.00
    },
    {
        imagem: './images/cerveja.jpg',
        nome: 'Suco de Laranja Natural 1L',
        valor: 12.00
    },
    {
        imagem: './images/whisky.jpg',
        nome: 'Vodka Absolut 1L',
        valor: 99.90
    }
]