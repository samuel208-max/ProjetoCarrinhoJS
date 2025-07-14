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