const numeroSenha = document.querySelector('parametro-senha_texto');

let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha_botao');

botoes[0].onclick = diminuitamanho;
botoes[1].onclick = aumentatamanho;

function diminuitamanho(){
    if (tamanho > 20){
        //tamanhosenha = tamanhosenha - 1
        tamanho--;

    }
    numeroSenha.textcontent = tamanhoSenha;
}

