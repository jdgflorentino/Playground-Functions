// Desafio 10
function techList(tecnologia, nome) {
    // seu código aqui
    let techname = [];
    tecnologia = tecnologia.sort();

    for (let i of tecnologia) {
        techname.push({ name: nome, tech: i });
    }
    if (tecnologia == 0) {
        return 'Vazio!';
    }
    return techname;
}

// Desafio 11
function generatePhoneNumber(numeros) {
    // seu código aqui
    let count;
    if (numeros.length !== 11) {
        return 'Array com tamanho incorreto.';
    }

    for (let i = 0; i < numeros.length; i += 1) {
        for (let j = 0; j < numeros.length; j += 1) {
            if (numeros[i] === numeros[j]) {
                count = count + 1;
            }
        }
        if (count >= 3 || numeros[i] < 0 || numeros[i] > 9) {
            return 'não é possível gerar um número de telefone com esses valores';
        }
        count = 0;
    }

    let ddd = numeros.slice(0, 2);
    ddd = ddd.join('');
    let first = numeros.slice(2, 7);
    first = first.join('');
    let last = numeros.slice(7);
    last = last.join('');

    return '(' + ddd + ')' + ' ' + first + '-' + last;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
    // seu código aqui
    let result = false;

    if (lineA > (lineB + lineC) || lineB > (lineA + lineC) || lineC > (lineA + lineB)) {
        return result;
    } else if (lineA < Math.abs(lineB - lineC) || lineB < Math.abs(lineA - lineC) || lineC < Math.abs(lineA - lineB)) {
        return result;
    } else {
        result = true;
    }
    return result;

}

// Desafio 13
function hydrate() {
    // seu código aqui
}

module.exports = {
    generatePhoneNumber,
    techList,
    hydrate,
    triangleCheck,
};