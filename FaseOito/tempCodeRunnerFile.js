function substituirTudo(texto, antigo, novo) {
    var resultado = texto;
    do {
        resultado = resultado.replace(antigo, novo);
        var posicao = resultado.indexOf(antigo);
    }
    while (posicao > -1);

    return resultado;
}

nova = substituirTudo(frase, "nao", "certeza");
console.log(nova);