$(document).ready(function() {
    // Aplicar máscaras aos campos
    console.log("Máscaras aplicadas");
    $('#telefone').mask('(00) 0000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');

    // Manipular o envio do formulário
    $('#cadastroForm').submit(function(event) {
        event.preventDefault();

        // Validar campos
        const nomeCompleto = $('#nomeCompleto').val();
        const email = $('#email').val();
        const telefone = $('#telefone').val();
        const cpf = $('#cpf').val();
        const endereco = $('#endereco').val();
        const cep = $('#cep').val();

        console.log("Formulário enviado");
        // Se todos os campos estiverem válidos, você pode enviar o formulário aqui
        // Ou realizar qualquer outra ação necessária

        // Limpar mensagens de erro
        $('#errorMessages').empty();
    });

    function showError(message) {
        $('#errorMessages').html('<p class="error-message">' + message + '</p>');
    }
});
