function tocaSom(seletorAudio) {
    const ELEMENTO = document.querySelector(seletorAudio);

    if (ELEMENTO && ELEMENTO.localName === 'audio') {
        ELEMENTO.play();
    } else {
        alert('Elemento não encontrado ou seletor inválido');
    }

}

const LISTA_DE_TECLAS = document.querySelectorAll('.tecla');

for (let contador = 0; contador < LISTA_DE_TECLAS.length; contador++) {
    const TECLA = LISTA_DE_TECLAS[contador];
    const INSTRUMENTO = TECLA.classList[1];
    const ID_AUDIO = `#som_${INSTRUMENTO}`;

    TECLA.onclick = function () {
        tocaSom(ID_AUDIO);
    }

    TECLA.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.code === 'Enter') {
            TECLA.classList.add('ativa');
        }
    }

    TECLA.onkeyup = function () {
        TECLA.classList.remove('ativa');
    }
}



