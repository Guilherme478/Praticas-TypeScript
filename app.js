"use strict";
const pessoa = {
    nome: 'mariana',
    idade: 28,
    profissao: 'desenvolvedora'
};
pessoa.idade = 25;
const andre = {
    nome: 'andre',
    idade: 25,
    profissao: 'pintor'
};
const paula = {
    nome: 'paula',
    idade: 25,
    profissao: 'desenvolvedora'
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["JofadoraDeFutebol"] = 3] = "JofadoraDeFutebol";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedora
};
const marua = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedora
};
const jessica = {
    nome: 'jessica',
    idade: 28,
    profissao: Profissao.Desenvolvedora,
    materias: ['programação', 'Calculo']
};
const monica = {
    nome: 'jessica',
    idade: 28,
    materias: ['programação', 'Calculo']
};
function listar(lista) {
    for (const item of lista) {
        console.log('-', item);
    }
}
listar(monica.materias);
