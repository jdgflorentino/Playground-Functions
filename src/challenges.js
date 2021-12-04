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
    let distcat1 = Math.abs(mouse - cat1);
    let distcat2 = Math.abs(mouse - cat2);

    if (distcat1 < distcat2) {
        return 'cat1';
    } else if (distcat2 < distcat1) {
        return 'cat2';
    } else {
        return 'os gatos trombam e o rato foge';
    }
}

// Desafio 8
function fizzBuzz(numeros) {
    // seu código aqui
    let palavras = [];
    for (let i = 0; i < numeros.length; i += 1) {
        if (numeros[i] % 3 === 0 && numeros[i] % 5 === 0) {
            palavras.push('fizzBuzz');
        } else if (numeros[i] % 5 === 0) {
            palavras.push('buzz');
        } else if (numeros[i] % 3 === 0) {
            palavras.push('fizz');
        } else {
            palavras.push('bug!');
        }
    }
    return palavras;
}

// Desafio 9

function encode(frase) {
    // seu código aqui

    let result = '';

    for (let i of frase) {
        if (i === 'a') {
            result += '1';
        } else if (i === 'e') {
            result += '2';
        } else if (i === 'i') {
            result += '3';
        } else if (i === 'o') {
            result += '4';
        } else if (i === 'u') {
            result += '5';
        } else {
            result += i;
        }
    }

    return result;
}

function decode(numeros) {
    // seu código aqui
    let result = '';

    for (let i of numeros) {
        if (i === '1') {
            result += 'a';
        } else if (i === '2') {
            result += 'e';
        } else if (i === '3') {
            result += 'i';
        } else if (i === '4') {
            result += 'o';
        } else if (i === '5') {
            result += 'u';
        } else {
            result += i;
        }
    }

    return result;
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