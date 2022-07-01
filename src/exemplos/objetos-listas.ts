const pessoa = {
    nome: 'mariana',
    idade: 28,
    profissao: 'desenvolvedora'
}

pessoa.idade = 25;

const andre: {nome: string, idade: number, profissao: string} = {
    nome: 'andre',
    idade: 25,
    profissao: 'pintor'
}
const paula: {nome: string, idade: number, profissao: string} = {
    nome: 'paula',
    idade: 25,
    profissao: 'desenvolvedora'
}

enum Profissao {
    Professora,
    Atriz,
    Desenvolvedora,
    JofadoraDeFutebol
}

interface Pessoa {
    nome:string,
    idade:number,
    profissao?: Profissao
}

interface Estudante extends Pessoa {
    materias: string[]
}

const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedora
}
const marua: Pessoa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedora
}

const jessica: Estudante = {
    nome: 'jessica',
    idade:28,
    profissao: Profissao.Desenvolvedora,
    materias: ['programação', 'Calculo']

}
const monica: Estudante = {
    nome: 'jessica',
    idade:28,
    materias: ['programação', 'Calculo']

}

function listar(lista: string[]) {
    for (const item of lista) {
        console.log('-', item);
    }
}

listar(monica.materias);