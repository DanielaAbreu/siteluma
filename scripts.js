document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        const nome = document.querySelector('#nome').value;
        const email = document.querySelector('#email').value;
        const mensagem = document.querySelector('#mensagem').value;

        if (!nome || !email || !mensagem) {
            alert("Por favor, preencha todos os campos.");
            event.preventDefault();
        } else {
            alert("Mensagem enviada com sucesso!");
        }
    });
});
