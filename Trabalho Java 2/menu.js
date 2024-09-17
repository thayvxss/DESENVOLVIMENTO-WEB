// Seleciona todos os links internos
const links = document.querySelectorAll('nav ul li a');

// Adiciona um evento de clique para cada link
links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Previne o comportamento padrão do link

        const targetId = this.getAttribute('href'); // Obtém o id da seção alvo
        const targetSection = document.querySelector(targetId); // Seleciona a seção correspondente

        // Faz a rolagem suave até a seção correspondente
        targetSection.scrollIntoView({
            behavior: 'smooth' // Animação de rolagem suave
        });
    });
});
