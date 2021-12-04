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
function generatePhoneNumber() {
    // seu código aqui
}

// Desafio 12
function triangleCheck() {
    // seu código aqui
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