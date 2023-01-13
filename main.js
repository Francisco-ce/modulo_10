
$(document).ready(function() {
    $('#carousel-imagens').slick({
        autoplay: true,
    });


    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle();
    });

// baixar no site Mask https://igorescobar.github.io/jQuery-Mask-Plugin/

//uso o ZERO para minha página entender que é um número
//Para a página identificar que é uma letra usa-se S

    $('#telefone').mask('(00) 0000-0000'  //, {
    //     placeholder: '(00) 00000-0000'
    )

// baixar no site Mask https://jqueryvalidation.org//
//aqui não trabalha com Id e sim com 'name'//
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            veiculoDeinteresse: {
                required: false
            },
            mensagem: {
                required: true
            },
        }, 

        messages: {
            nome: 'Inserir seu nome',
            email: 'Insira seu email',
            telefone : 'Insira seu telefone WhatsApp'
        },

        submitHandler: function(form) {
            console.log(form)
        },

        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            console.log(camposIncorretos)
        }
    })
//coloco 1000 pois é milisegundo
    $('.lista-veiculos button').click(function() {
        const destino = $('#contato');

        //THIS é um parâmetro intrinseco que representa o próprio elemento que está na função,nesse caso o BUTTON
        //PARENT é para acessar o pai - no caso o LI
        //FIND procura o elemento que queremos - no caso o H3
        //Dentro do que queremos, no caso o TEXTO do H3, usamos o TEXT()
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })

})

