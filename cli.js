//cli = command line interface
//const pegaArquivo = require('./index');
import  chalk  from 'chalk';
import pegaArquivo from './index.js';
import validaURLs from './http-validacao.js';

const caminho = process.argv;
console.log('------ caminho = ' + caminho);
console.log('caminhoDeArquivo[2] ='+ caminho[2]);

async function processaTexto(caminhoDeArquivo) {
    const resultado = await pegaArquivo(caminhoDeArquivo[2]);
    console.log('resultado ='+ resultado);

    if(caminho[3] === 'validar') {
        console.log(chalk.yellow('links validados'), await validaURLs(resultado));
    }else {
        console.log(chalk.yellow('lista de links'), resultado);
    }
}

processaTexto(caminho);

/* scripts ficam no package.json */