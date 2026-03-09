const express = require('express');
const app = express();
const PORT = 3000;
// Middleware para JSON
app.use(express.json());
// Importar as rotas
const MusicaRoutes = require('./src/routes/musicaRoutes');
app.use('/Musica', MusicaRoutes);

app.listen(PORT, () => {
console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
console.log(`📦 API MVC implementada com sucesso!`);
});