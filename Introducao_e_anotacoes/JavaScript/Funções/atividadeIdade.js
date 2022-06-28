function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${
        this.idade + anos
    } anos de idade.`;
}

const pessoa1 = {
    nome: 'Raiden',
    idade: 500
}

const pessoa2 = {
    nome: 'Yae Miko',
    idade: 300
}

const pessoa3 = {
    nome: 'Zhongli',
    idade: 1000
}

console.log(calculaIdade.call(pessoa1, 30))

console.log(calculaIdade.apply(pessoa2, [50]))

