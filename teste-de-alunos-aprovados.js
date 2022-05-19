const alunos = [

    {
    name: 'mel',
    nota: '8',
    turma: '8A'
},

    {
    name: 'tom',
    nota: '9',
    turma: '8A'
},

    {
    name: 'tayla',
    nota: '3',
    turma: '8A'
},

    {
    name: 'isa',
    nota: '6',
    turma: '8A'
},

{
    name: 'hector',
    nota: '5',
    turma: '8A'
},

    {
    name: 'hadassa',
    nota: '2',
    turma: '8A'
},

];

function alunosAprovados(alunos, media){
    let aprovados = [];

    for (let i = 0; i < alunos.length; i++) {
        let { nota, name } = alunos[i];

        if (nota >= media) {
            aprovados.push(name);
        }
    }
    return aprovados;
}

console.log(alunosAprovados(alunos, 7));

