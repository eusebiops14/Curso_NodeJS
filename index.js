/*
Para documentação de bibliotecas : npmjs.com
Comando para instalar um biblioteca: npm install <nomeBiblioteca> 
    biblioteca chalk

Código Assíncrono
    Casos como, um texto muito grande que precisa ser encontrado em um arquivo, convertido, passa ali uma lista, 
    devolve a lista e tem outros casos também, é um caso que temos que considerar assincronamente, então não temos como parar a execução do 
    nosso programa, esperar isso acontecer e depois continuar executando o nosso programa, 
    que seria a mesma coisa que pararmos tudo que estamos fazendo inclusive de respirar para ficar esperando chegar a mensagem no WhatsApp.

Expressoes Regulares- REGEX
    regex101.com
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions

Validações de Formulário
    Libs específicas: Joi e Yup (https://joi.dev/api/?v=17.6.0)
*/

import  chalk  from 'chalk';
import fs from 'fs';

console.log(chalk.blue('Vamos lá'));


const paragrafo = 'Texto retornado por uma funcao';


function extraiLinks(texto) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResultados = [];
    
    let temp;
    while((temp = regex.exec(texto)) !== null){
        arrayResultados.push({ [temp[1]]: temp[2]})
    }

    return arrayResultados.length === 0 ? 'não há links' : arrayResultados ;
}


function texto(string) {
    return string;
}

console.log(texto(paragrafo));


/* Trabalhando com biblioteca fs*/

function trataErro(erro) {
    throw new Error(chalk.red(erro.code, 'não há arquivo no caminho'));
}

/*Trabalhando com promessas:
promessas” são a forma que o JavaScript utiliza para trabalhar com código assíncrono e que podemos resolvê-las utilizando em conjunto as palavras-chave async e await ou o método .then() */
export default async function pegaArquivo(caminhoDoArquivo) { //async marca que a funcao possui codigo assincrono
    const enconding = 'utf-8'; 
    try {
        const texto = await fs.promises.readFile(caminhoDoArquivo,enconding); //o awwait garante que o js execute tudo na parte direita da igualdade para só depois atribuir tudo ao lado esquerdo
        return extraiLinks(texto);
    } catch(erro) {
        trataErro(erro);
    } finally {
        console.log(chalk.yellow('operação concluída'));
    }
}



/*
function pegaArquivo(caminhoDoArquivo) { //assíncrona
    const enconding = 'utf-8';
    fs.promises
    .readFile(caminhoDoArquivo,enconding)
    .then((texto) => console.log(chalk.green(texto)))
    .catch((erro) => trataErro(erro))

}


function pegaArquivo(caminhoDoArquivo) {
    const enconding = 'utf-8';
    fs.readFile(caminhoDoArquivo,enconding,(erro,texto) => {
        if (erro) {
            trataErro(erro);
        }
        console.log(chalk.green(texto));
    })
}*/


//pegaArquivo('./texto1.md');

//module.exports = pegaArquivo; //exportando funcao with Common JS
//Export default - exportando funcao com RS mnodule
