// Obter referência ao botão de voltar ao topo
const backToTopButton = document.getElementById('backToTop');

// Mostrar o botão quando o usuário rolar para baixo
window.addEventListener('scroll', function() {
    if (window.scrollY > 300) { // Ajuste o valor conforme necessário
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Adicionar evento de clique para rolar para o topo
backToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
