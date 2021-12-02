// Desafio 1
function compareTrue(valor1, valor2) {
    // seu código aqui
    if (valor1 === true && valor2 === true) {
        return true;
    } else {
        return false;
    }
}

// Desafio 2
function calcArea(base, height) {
    // seu código aqui
    return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
    // seu código aqui
    return sentence.split(' ');
}

// Desafio 4
function concatName(palavras) {
    // seu código aqui
    let ultimo = palavras[palavras.length - 1];
    let primeiro = palavras[0];
    let itens = ultimo + ', ' + primeiro;
    return itens;
}

// Desafio 5
function footballPoints(wins, ties) {
    // seu código aqui
    let pontos = wins * 3 + ties;
    return pontos;
}

// Desafio 6

function highestCount(valores) {
    // seu código aqui
    let maior = Math.max(...valores);
    let count = 0;
    for (let i = 0; i < valores.length; i += 1) {
        if (valores[i] === maior) {
            count++;
        }
    }
    return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
    // seu código aqui
}

// Desafio 8
function fizzBuzz() {
    // seu código aqui
}

// Desafio 9
function encode() {
    // seu código aqui
}

function decode() {
    // seu código aqui
}

module.exports = {
    calcArea,
    catAndMouse,
    compareTrue,
    concatName,
    decode,
    encode,
    fizzBuzz,
    footballPoints,
    highestCount,
    splitSentence,
};