const arrayAlunos = [
    {
        nome: "Laura",
        nota: 5
    },
    {
        nome: "Antonio",
        nota: 9
    },
    {
        nome: "Pedro",
        nota: 9
    }
]

arrayAlunos.forEach((obj) => {
    if (obj.nota >= 7) {
        return console.log(obj.nome)
    }
})