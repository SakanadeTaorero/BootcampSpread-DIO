function calcIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
	nome: 'Amelia',
	sobrenome: 'Soares',
    idade: 23,
};

const pessoa2 = {
	nome: 'Márcia',
	sobrenome: 'Soares',
    idade: 20,
};

const pessoa3 = {
	nome: 'Jonas',
	sobrenome: 'Neves',
    idade: 13,
};

console.log(calcIdade.call(pessoa1, 40));
console.log(calcIdade.apply(pessoa1, [22]));
