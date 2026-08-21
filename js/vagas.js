function lampada() {

    const imagens = document.querySelector('#img')

    const ligar = document.querySelector('#ligar')
    const desligar = document.querySelector('#desligar')

    ligar.addEventListener('click', () => {
        imagens.src = "../IMG/green-circle-emoji.jpg";
    })

    desligar.addEventListener('click', () => {
        imagens.src = "../IMG/images.jpg";
    })

}

lampada()