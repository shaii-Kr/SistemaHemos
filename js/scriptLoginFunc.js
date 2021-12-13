$(document).ready(function () {

    $(document).on("click", "#logarFunc", function () {
        // Pega os dados necessários
        email = $("#loginEmail").val();
        senha = $("#loginSenha").val();

        // Cria a variável que será mandada para o back-end no formato json
        var dados = JSON.stringify({
            Email: email, senha: senha
        });

        // Enviando os dados pelo método Ajax
        $.ajax({
            url: 'http://localhost:5000/loginFunc', // Endereço do banco de dados
            type: 'POST', // O tipo POST é o de envio, enquanto GET é o de recuperação de dados
            dataType: 'json', // tipo de dados que será retornado
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
                sessionStorage.nomeCompleto = retorno.usuario["Nome completo"];
                sessionStorage.dtNascimento = retorno.usuario["Data de nascimento"];
                sessionStorage.genero = retorno.usuario["Genero Biologico"];
                sessionStorage.cpf = retorno.usuario.CPF; // ESTE FUNCIONA
                sessionStorage.email = retorno.usuario.Email;
                sessionStorage.cep = retorno.usuario.CEP;
                sessionStorage.telefoneCelular = retorno.usuario["Telefone celular"];
                sessionStorage.telefoneResidencial = retorno.usuario["Telefone residencial"];
                sessionStorage.idade = retorno.usuario.Idade;
                sessionStorage.unidade_hemocentro = retorno["Unidade Hemocentro"];
                sessionStorage.especialidade = retorno.usuario.Especialidade;
                //alert(retorno.usuario.CPF);
                location.href = "PerfilFunc.html"; // Redireciona a página para o ferfil do funcionário
            } else {
                // informar mensagem de erro
                alert("Erro: " + retorno.resultado + " Detalhes: " + retorno.detalhes);
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
