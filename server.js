const express = require('express');

const app = express();
const PORT = 3030;

// Página inicial
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <title>Catálogo de Heróis</title>
        </head>
        <body>
            <h1>Catálogo de Heróis</h1>

            <p>Bem-vindo ao catálogo de heróis da Marvel e DC!</p>

            <a href="/marvel">Marvel</a><br>
            <a href="/dc">DC</a>

            <hr>

            <h2>Personagens</h2>

            <a href="/personagem/marvel/Thor">Thor</a><br>
            <a href="/personagem/marvel/Homem-Aranha">Homem-Aranha</a><br>
            <a href="/personagem/dc/Batman">Batman</a><br>
            <a href="/personagem/dc/Superman">Superman</a>
        </body>
        </html>
    `);
});

// Rota Marvel
app.get('/marvel', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <title>Marvel</title>
        </head>
        <body>
            <h1>Marvel</h1>

            <p>A Marvel é uma empresa conhecida por seus diversos personagens e histórias de super-heróis.</p>

            <h2>Personagens</h2>

            <ul>
                <li><a href="/personagem/marvel/Thor">Thor</a></li>
                <li><a href="/personagem/marvel/Homem-Aranha">Homem-Aranha</a></li>
            </ul>

            <a href="/">Voltar para a página inicial</a>
        </body>
        </html>
    `);
});

// Rota DC
app.get('/dc', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <title>DC</title>
        </head>
        <body>
            <h1>DC</h1>

            <p>A DC é uma empresa conhecida por seus diversos personagens e histórias de super-heróis.</p>

            <h2>Personagens</h2>

            <ul>
                <li><a href="/personagem/dc/Batman">Batman</a></li>
                <li><a href="/personagem/dc/Superman">Superman</a></li>
            </ul>

            <a href="/">Voltar para a página inicial</a>
        </body>
        </html>
    `);
});

// Rota com dois parâmetros
app.get('/personagem/:empresa/:nome', (req, res) => {
    const empresa = req.params.empresa;
    const nome = req.params.nome;

    res.send(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <title>${nome}</title>
        </head>
        <body>
            <h1>Personagem</h1>

            <p><strong>Empresa:</strong> ${empresa}</p>
            <p><strong>Nome:</strong> ${nome}</p>

            <a href="/">Voltar para a página inicial</a>
        </body>
        </html>
    `);
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});