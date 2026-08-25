function ligarLampada() {

    const imagens = document.getElementById('img')
    imagens.src = "/IMG/green-circle-emoji.jpg"

}

function desligarLampada() {

    const imagens = document.querySelector('#img')
    imagens.src = "/IMG/images.jpg";

}

function ocupada() {

    const imagens = document.getElementById('img2')
    imagens.src = "/IMG/green-circle-emoji.jpg"

}

function desocupada() {

    const imagens = document.querySelector('#img2')
    imagens.src = "/IMG/images.jpg";

}