/* Como podemos melhorar esse código usando TS? 

let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
}
*/

enum trabalho {
    Atriz,
    Padeiro
}

type Empregado = {
    nome: string,
    idade: number,
    profissao: trabalho
}

let pessoa1: Empregado = {
    nome:"maria",
    idade:29,
    profissao: trabalho.Atriz
};

let pessoa2: Empregado = {
    nome:"roberto",
    idade:19,
    profissao: trabalho.Padeiro
};


let pessoa3: Empregado = {
    nome: "laura",
    idade: 32,
    profissao: trabalho.Atriz
};

let pessoa4: Empregado = {
    nome: "carlos",
    idade: 19,
    profissao: trabalho.Padeiro
}