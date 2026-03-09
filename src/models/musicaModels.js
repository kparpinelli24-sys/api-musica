let musicas = [
    {
        id:1,
        nomeMusica:"Confident",
        autor:"Justin Bieber, Chance the Rapper",
        link:"https://youtu.be/qnD1hwjR3WU?si=2UL9ReCV65iaTO1P"

    },
    {
     id: 2,
    nomemusica: "Flatline",
    autor: "Justin Bieber",
    link: "https://youtu.be/YEVcnTIq1us?si=znreh1TZK4SxMPNE"
},


    {      
    id: 3,
    nomemusica: "Snooze",
    autor: "SZA",
    link: "https://youtu.be/muPO1c6pxXg?si=4NVTuQ0TnURqm_ef"
  },
  {
    id: 4,
    nomemusica: "Talvez Você Precise de Mim",
    autor: "Veigh",
    link: "https://youtu.be/V2M1Xx50arE?si=3FAj-1tuol8lm3V8"
  },
];

let proximoId = 5;

function listarTodos() {
    return musicas;
}

function buscarPorId(id) {
// find() retorna o primeiro elemento que satisfaz a condição
return musicas.find(p => p.id === id);
}

function criar(dados) {
// Criar o objeto do nova musica 
const novamusica = {
id: proximoId++, // Atribui ID e incrementa
nomemusica: dados.nomemusica,
autor:dados.preco, 
link: dados.link,
};
// Adicionar a musica  ao array
musicas.push(novamusica);
return novamusica;
}

function atualizar(id, dados) {
// Encontrar a posição da musica no array
const indice = musicas.findIndex(p => p.id === id);
// Se não encontrou, retornar null
if (indice === -1) {
return null;
}
// Atualizar a musica mantendo o ID original
musicas[indice] = {
id, // Mantém o ID original
nomemusica: dados.nomemusica,
autor:dados.autor, 
link: dados.link,
};
// Retornar a musica atualizado
return musicas[indice];
}
function deletar(id) {
const indice = musicas.findIndex(p => p.id === id);
// Se não encontrou, retornar false
if (indice === -1) {
return false;
}
// Remover a musica  do array
musicas.splice(indice, 1);
// Retornar true indicando sucesso
return true;
}

function buscarPorAutor(autor) {
return musicas.filter(p =>
p.autor.toLowerCase() === autor.toLowerCase()
);
}
module.exports = {
listarTodos,
buscarPorId,
criar,
atualizar,
deletar,
buscarPorAutor
};

