$(document).ready(function () {

    $("#logarDoador").submit(function (e) {
        // Pega os dados necessários
        email = $("#loginEmail").val();
        senha = $("#loginSenha").val();
        // Cria a variável que será mandada para o back-end no formato json
        var dados = JSON.stringify({
            email: email, senha: senha
        });
        // Enviando os dados pelo método Ajax
        $.ajax({
            url: 'http://localhost:5000/login', // Endereço do banco de dados
            type: 'POST', // O tipo POST é o de envio, enquanto GET é o de recuperação de dados
            dataType: 'json', // Tipo de arquivo que será enviado
            contentType: 'application/json', // tipo dos dados enviados
            data: dados, // estes são os dados enviados
            success: executarLogin, // Mostra uma mensagem indicando o sucesso na operação e adiciona os dados do usuário na sessionStorage
            error: erroAoLogar // Caso de erro, mostra uma mensagem indicando o tal
        });
        function executarLogin(retorno) {
            // Se o back-end retornar ok, procede com tais funções
            if (retorno.resultado == "ok") {
                // Alerta que teve sucesso
                alert("Resultado: " + retorno.resultado + " Detalhes: " + retorno.detalhes);
                // salva os dados em uma sessão
                sessionStorage.nomeCompleto = retorno.usuario.nomeCompleto;
                sessionStorage.dtNascimento = retorno.usuario.dtNascimento;
                sessionStorage.genero = retorno.usuario.genero;
                sessionStorage.cpf = retorno.usuario.cpf;
                sessionStorage.email = retorno.usuario.email;
                sessionStorage.cep = retorno.usuario.cep;
                sessionStorage.telefoneCelular = retorno.usuario.telefoneCelular ;
                sessionStorage.telefoneResidencial = retorno.usuario.telefoneResidencial;
                sessionStorage.type = retorno.usuario.type;
                location.href = "PerfilUser.html"; // Recarrega a página
            } else {
                // informar mensagem de erro
                $("#loginIncorreto").removeClass("invisible");
            }
        }
        function erroAoLogar(retorno) {
            // informar mensagem de erro
            alert("Erro: " + retorno.resultado + " Detalhes: " + retorno.detalhes);
        }
    });
    
    $("#log_out").click(function () {
        // Fazendo com que as informações do individuo desapareça quando clicar em logout
        $(".profile_content").addClass("invisivel");
        $(".login_content").removeClass("invisivel");
        sessionStorage.clear(); // Limpa os dados da sessionSotrage
        location.href = "index.html"; // Redireciona para outra página
    });
});
