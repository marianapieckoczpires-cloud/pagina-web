
// Seleciona todos os botões de like da página
const botoesLike = document.querySelectorAll('.btn-like');

// Adiciona um evento de clique para cada botão individualmente
botoesLike.forEach(botao => {
    botao.addEventListener('click', () => {
        // Encontra o contador específico dentro deste botão
        const contador = botao.querySelector('.contador');
        
        // Pega o número atual e transforma em número inteiro
        let quantidadeLikes = parseInt(contador.textContent);
        
        // Alterna a classe 'curtido' no botão para mudar a cor
        botao.classList.toggle('curtido');

        // Lógica de incrementar ou decrementar curtidas
        if (botao.classList.contains('curtido')) {
            quantidadeLikes++;
        } else {
            quantidadeLikes--;
        }

        // Atualiza o texto do contador na tela
        contador.textContent = quantidadeLikes;
    });
});
