let tamanhoTela = 0;
document.addEventListener("DOMContentLoaded", function() {
    tamanhoTela = document.body.scrollHeight; /*pega tamanho da tela do dispositivo*/
});

window.addEventListener("scroll", (event) => {
    let yAtual = this.scrollY; /*estado atual do scroll do mouse que inicia com 0*/
    const valorMinimo = 0.55; /*valor minimo opacidade css*/
    const valorMaximo = 0.90; /*valor max opacidade css*/
    const diferencaMinMax = valorMaximo - valorMinimo;
    let valorGradiente = valorMinimo + ((diferencaMinMax / tamanhoTela) * yAtual);
    document.documentElement.style.setProperty('--porcentagem-gradient', valorGradiente);
    /*aplica o valor gerado pela logica acima para ser aplicado no css*/
});