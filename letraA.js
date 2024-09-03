let palavra = "Araraquara" // prompt ("Digite uma palavra qualquer: ");

// Informar se a letra "a" está contida em data string e contar quantas vezes aparecem
if (palavra.indexOf('a') || palavra.indexOf('A')) {
    contador = 0
    for (let index = 0; index < palavra.length; index++) {
        if (palavra[index] === 'a' || palavra[index] === 'A') {
            contador ++;
        };
    }
} else {
    console.log('Não existe a letra A nesta palavra')
}