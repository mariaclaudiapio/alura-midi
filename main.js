function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const LISTA_DE_TECLAS = document.querySelectorAll('.tecla');

for (let contador = 0; contador < LISTA_DE_TECLAS.length; contador++) {
    const TECLA = LISTA_DE_TECLAS[contador];
    const INSTRUMENTO = TECLA.classList[1];
    const ID_AUDIO = `#som_${INSTRUMENTO}`;

    TECLA.onclick = function () {
        tocaSom(ID_AUDIO);
    };
}


