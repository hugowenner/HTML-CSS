const fs = require('fs');  
const caminhoArquivo = 'C:\\Users\\hugow\\OneDrive\\Área de Trabalho\\JAVA\\3709-nodejs-lib-arquivos-iniciais\\3709-nodejs-lib-arquivos-iniciais\\arquivos\\texto-web.txt';

// Função para ler o arquivo e verificar palavras duplicadas
fs.readFile(caminhoArquivo, 'utf8', (erro, texto) => {
    if (erro) {
        console.error('Erro ao ler o arquivo:', erro);
        return;
    }
    verificaPalavrasDuplicadas(texto);
});

// Função para verificar e contar palavras duplicadas
function verificaPalavrasDuplicadas(texto) {
    // Remove pontuação e divide o texto em palavras
    const palavras = texto.replace(/[.,?!;()"']/g, '').toLowerCase().split(/\s+/);

    // Cria um objeto para contar as ocorrências de cada palavra
    const contagemPalavras = {};

    palavras.forEach(palavra => {
        if (palavra) {
            contagemPalavras[palavra] = (contagemPalavras[palavra] || 0) + 1;
        }
    });

    // Filtra palavras com mais de uma ocorrência
    const palavrasDuplicadas = Object.entries(contagemPalavras)
        .filter(([palavra, contagem]) => contagem > 1)
        .map(([palavra, contagem]) => ({ palavra, contagem }));

    if (palavrasDuplicadas.length > 0) {
        console.log('Palavras duplicadas e suas contagens:', palavrasDuplicadas);
    } else {
        console.log('Não há palavras duplicadas.');
    }
}