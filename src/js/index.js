// Comment
/*
    O que precisamos fazer? - quando passar o mouse em cima do personagem na lista temos que adicionar a borda azul de seleção na imagem pequena do personagem e mostrar a imagem, o nome e o texto grande do personagem que está selecionado

    OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo
        passo 1 - pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles

        passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse

        passo 3 - verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele 

    OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande
        passo 1 - pegar o elemento do personagem grande pra adicionar as informações nele

        passo 2 - alterar a imagem do personagem grande

        passo 3 - alterar o nome do personagem grande
        
        passo 4 - alterar a descrição do personagem grande
*/

// OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo
//         passo 1 - pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles
// Let e Const - Muda Valor e Não muda Valor

const personagens = document.querySelectorAll(".personagem");

// console.log(personagens)
// passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
        
        // passo 3 - verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele 

        RemoverSelecaoDoPersonagem();
        
        personagem.classList.add('selecionado');

        // OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande
        // passo 1 - pegar o elemento do personagem grande pra adicionar as informações nele

        AlterarImagemPersonagemSelecionado();

        // passo 3 - alterar o nome do personagem grande

        alterarNomeDoPersonagemSelecionado();

        // passo 4 - alterar a descrição do personagem grande

        alterarDescricaoPersonagemSelecionado();

        function alterarDescricaoPersonagemSelecionado() {
            const descricaoPersonagem = document.getElementById('descricao-personagem');
            descricaoPersonagem.innerText = personagem.getAttribute('data-description');
        }

        function alterarNomeDoPersonagemSelecionado() {
            const nomePersonagem = document.getElementById('nome-personagem');
            nomePersonagem.innerText = personagem.getAttribute('data-name');
        }

        function AlterarImagemPersonagemSelecionado() {
            const imagemPersonagemGrande = document.querySelector('.personagem-grande');

            // passo 2 - alterar a imagem do personagem grande
            const idPersonagem = personagem.attributes.id.value;
            imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
        }

        function RemoverSelecaoDoPersonagem() {
            const personagemSelecionado = document.querySelector('.selecionado');
            personagemSelecionado.classList.remove('selecionado');
        }
    })
});



