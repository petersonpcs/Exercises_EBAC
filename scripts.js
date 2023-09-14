$(document).ready(function(){

    var $cpf = $('#cpf');
    $cpf.mask('000.000.000-00', {reverse: true});

    $("#telefone").mask("00 00000-0000");

    $("#cep").mask("99999-999");

    $('form').validate({
        rules: {
            nome: {
                required:true
            },
            cpf: {
                required:true
            },
            email: {
                required:true,
                email:true
            },
            telefone: {
                required:true
            },
            cep: {
                required:true
            },
        },
        messages: {
            nome: 'Insira seu nome completo.'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidhandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids()
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
})