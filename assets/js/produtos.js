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
    },


    //adicionados pelo GPT para testes
    {
        imagem: '/assets/images/sprite2L.jpg',
        nome: 'Sprite 2L',
        valor: 8.50
    },
    {
        imagem: '/assets/images/cervejaCorona.webp',
        nome: 'Cerveja Corona 355ml',
        valor: 7.50
    },
    {
        imagem: '/assets/images/agua500ml.jpg',
        nome: 'Água Mineral 500ml',
        valor: 2.00
    },
    {
        imagem: '/assets/images/sucoLaranja.jpg',
        nome: 'Suco de Laranja Natural 1L',
        valor: 12.00
    },
    {
        imagem: '/assets/images/vodkaAbsolute.jpg',
        nome: 'Vodka Absolut 1L',
        valor: 99.90
    }
]