const alunos = [
    {
        nome: 'Clara',
        nota: 10,
        turma: '1A',
    },
    {
        nome: 'Leticia',
        nota: 10,
        turma: '1A',
    },
    {
        nome: 'Kleber',
        nota: 1,
        turma: '2A',
    },

    {
        nome: 'Pedro',
        nota: 2,
        turma: '2A',
    },
    {
        nome: 'Layla',
        nota: 5,
        turma: '2A',
    }
];

function alunosAprovados(arr, media) {
    let aprovados = [];

    for (let i = 0; i < arr.length; i++){

        const {nota, nome} = arr[i];

        if (nota >= media) {
            aprovados.push(nome);
        }
    }
    return aprovados;
}

console.log(alunosAprovados(alunos, 5));

