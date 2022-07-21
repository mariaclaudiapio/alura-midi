function tocaSomPom() {
    document.querySelector('#som_tecla_pom').play();
}
function tocaSomClap() {
    document.querySelector('#som_tecla_clap').play();
}




const LISTA_DE_TECLAS = document.querySelectorAll('.tecla');

LISTA_DE_TECLAS[0].onclick = tocaSomPom;
