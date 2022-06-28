"use strict";
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Sacerdotisa"] = 0] = "Sacerdotisa";
    Profissao[Profissao["Arconte"] = 1] = "Arconte";
    Profissao[Profissao["Aventureiro"] = 2] = "Aventureiro";
    Profissao[Profissao["Farmaceutico"] = 3] = "Farmaceutico";
})(Profissao || (Profissao = {}));
const Yae = {
    nome: "Yae Miko",
    idade: 500,
    profissao: Profissao.Sacerdotisa
};
const jessica = {
    nome: "Jessica",
    idade: 28,
    profissao: Profissao.Farmaceutico,
    materiais: ['Introdução a ervas', 'Vale de Liyue: Guia', 'Tubos de ensaio']
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(jessica.materiais);
