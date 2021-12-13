$(document).ready(function () {
    $("#tabelaDoacoes").removeClass("invisible");

    // listar as informações do funcionário
    $("#link_listar_infoFuncionario").click(function () {

        window.location.href = "PerfilFunc.html";

    });

    // listar as informações do doador e doações
    $("#link_listar_infoDoador").click(function () {

        window.location.href = "PerfilUser.html";

    });

    // função que não permite letras no input do CPF
    $("#cpf").keypress(function (event) {
        // Se for digitado numeros, chama a função de mascara
        if (event.which > 47 && event.which < 58) {
            mascara_cpf("#cpf");
            // Caso seja digitado qualquer outra coisa, a função acaba
        } else {
            event.preventDefault();
        }
    });

    // função que não permite letras no input do CEP
    $("#cep").keypress(function (event) {
        // Se for digitado numeros, chama a função de mascara
        if (event.which > 47 && event.which < 58) {
            mascara_cep("#cep");
            // Caso seja digitado qualquer outra coisa, a função acaba
        } else {
            event.preventDefault();
        }
    });

});

// Mascara do CPF
function mascara_cpf(valor){
    // Pegando a informação do site
    var cpf = $(valor).val();
    // Contagem que determina onde terá ponto
    if(cpf.length == 3 || cpf.length == 7){
       // Adicionando ponto no site
       $(valor).val( cpf+'.' );
    };
    // Contagem que determina onde terá hífen
    if(cpf.length == 11){
       // Adicionando hífen no site
       $(valor).val( cpf+'-' );
    };
 };
 // Mascara do CEP
 function mascara_cep(valor){
    // Pegando a informação do site
    var cpf = $(valor).val();
    // Contagem que determina onde terá hífen
    if(cpf.length == 5){
       // Adicionando o hífen no site
       $(valor).val( cpf+'-' );
    };
 };