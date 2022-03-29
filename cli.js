//cli = command line interface
//const pegaArquivo = require('./index');
import  chalk  from 'chalk';
import pegaArquivo from './index.js';

const caminho = process.argv;

async function processaTexto(caminhoDeArquivo) {
    const resultado = await pegaArquivo(caminhoDeArquivo[2]);
    console.log(chalk.yellow('lista de links'), resultado);
}

processaTexto(caminho);

/* scripts ficam no package.json */