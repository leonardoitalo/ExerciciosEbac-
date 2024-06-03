class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

class Estudande extends Pessoa {
    constructor(nome, idade, turma) {
        super(nome, idade);
        this.turma = turma;
    }
}

class Funcionario extends Pessoa {
    constructor(nome, idade, salario) {
        super(nome, idade)
        this.salario = salario
    }
}



const p1 = new Pessoa("Joao", 19);
const e1 = new Estudande("Pedro", 16, "A")
const f1 = new Funcionario("Guilherme", 18, 1400)

console.log(p1);
console.log(e1);
console.log(f1);
