const MusicaModel = require('../models/musicaModels');
function listarTodos(req, res) {
try {
// Chamar a função do Model para buscar as Musicas
const musica = MusicaModel.listarTodos();
// Retornar sucesso com status 200
res.status(200).json(musica);

} catch (erro) {
// Em caso de erro inesperado
res.status(500).json({
mensagem: 'Erro ao listar as Muiscas',
erro: erro.message
});
}
}

function buscarPorId(req, res) {
try {
// Capturar o ID da URL e converter para número
const id = parseInt(req.params.id);
// VALIDAÇÃO: verificar se o ID é um número válido
if (isNaN(id)) {
return res.status(400).json({
mensagem: 'ID inválido - deve ser um número'
});
}
const musica = MusicaModel.buscarPorId(id);
// Verificar se encontrou a musica 
if (musica) {
res.status(200).json(musica);
} else {
res.status(404).json({
mensagem: `Musica com o ID ${id} não encontrado`
});
}
} catch (erro) {
res.status(500).json({
mensagem: 'Erro ao buscar pela Musica',
erro: erro.message
});
}
}

function criar(req, res) {
try {
// Desestruturar os dados recebidos no body
const { nomemusica, autor, link } = req.body;
// VALIDAÇÃO: verificar campos obrigatórios
if (!nomemusica || !autor || !link) {
return res.status(400).json({
mensagem: 'Todos os campos são obrigatórios: nomemusica, autor, link.'
});
}
// Criar uma musica usando a função do Model
const novamusica = MusicaModel.criar({
nomemusica,
autor,
link
});
res.status(201).json(novamusica);
} catch (erro) {
res.status(500).json({
mensagem: 'Erro ao criar nova Musica',
erro: erro.message
});
}
}

function atualizar(req, res) {
try {
// Capturar o ID da URL
const id = parseInt(req.params.id);
// Capturar os dados do body
const { nomemusica, autor, link } = req.body;
// VALIDAÇÃO: ID deve ser válido
if (isNaN(id)) {
return res.status(400).json({
mensagem: 'ID inválido'
});
}
if (!nomemusica || !autor || !link) {
return res.status(400).json({
mensagem: 'Todos os campos são obrigatórios: nomemusica, autor, link.'
});
}
//Atualizar usando a função Model
const musicatualizada = MusicaModel.atualizar(id, {
nomemusica,
autor,
link
});
// Verificar se a atualização foi bem-sucedida
if (musicatualizada) {
res.status(200).json(musicatualizada);
} else {
res.status(404).json({
mensagem: `A musica o com ID ${id} não encontrado`
});
}
} catch (erro) {
res.status(500).json({
mensagem: 'Erro ao atualizar essa musica',
erro: erro.message
});
}
}

function deletar(req, res) {
try {
// Capturar o ID da URL
const id = parseInt(req.params.id);
// VALIDAÇÃO: ID deve ser válido
if (isNaN(id)) {
return res.status(400).json({
mensagem: 'ID inválido'
});
}

// Deletar usando a função do Model
const deletado = MusicaModel.deletar(id);
// Verificar se conseguiu deletar
if (deletado) {
res.status(200).json({
mensagem: `A musica com esse ID ${id} foi removido com sucesso`
});
} else {
res.status(404).json({
mensagem: `A musica com esse ID ${id} não encontrado`
});
}
} catch (erro) {
res.status(500).json({
mensagem: 'Erro ao deletar esta musica',
erro: erro.message
});
}
}

function buscarPorAutor(req, res) {
try {
// Capturar a categoria da URL
const {autor } = req.params;
// Buscar a musica usando a função do Model
const musica = MusicaModel.buscarPorAutor(autor);
// Retornar as musicas encontrados (mesmo que seja array vazio)
res.status(200).json(musica);
} catch (erro) {
res.status(500).json({
mensagem: 'Erro ao buscar pelo autor',
erro: erro.message
});
}
}
// EXPORTAR TODAS AS FUNÇÕES
// Disponibiliza as funções para o arquivo de rotas
module.exports = {
listarTodos,
buscarPorId,
criar,
atualizar,
deletar,
buscarPorAutor
};