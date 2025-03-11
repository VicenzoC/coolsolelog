import chalk from 'chalk';
import coolFaces from 'cool-ascii-faces';

function criarBalao(mensagem) {
    const linhaSuperior1 = '    ' + '_'.repeat(mensagem.length + 2);
    const linhaSuperior2 = '   /' + ' '.repeat(mensagem.length + 2) + '\\';
    const linhaMensagem = `  <  ${mensagem}  >`;
    const linhaInferior = '   \\' + '_'.repeat(mensagem.length + 2) + '/';
    const conexao = '      \\\n       \\';
    return `${linhaSuperior1}\n${linhaSuperior2}\n${linhaMensagem}\n${linhaInferior}\n${conexao}`;
}

export default function coolsolelog(mensagem) {
    const rosto = coolFaces();

    const balaoDeFala = criarBalao(mensagem);

    console.log(chalk.blue(balaoDeFala));
    console.log(chalk.yellow(`       ${rosto}`));
}