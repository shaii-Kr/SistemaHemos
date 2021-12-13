$(document).ready(function () {
    //cadastrar funcionário
    $(document).on("click", "#btcadastro", function () {
        // Variavel que define se tem algum erro ou não
        var semErros = true
        // obter os dados da tela do formulário de cadastro de funcionário
        nome_func = $("#nomeFunc").val();
        data_nasc_func = $("#dataNascFunc").val();
        idade_func = $("#idadeFunc").val();
        especialidade = $("#especialidade").val();
        cpf_func = $("#cpf").val();
        sexo_func = $("#sexoFunc").val();
        uni_hemo = $("#uniHemo").val();
        cep_func = $("#cep").val();
        telefone_func = $("#telefoneFunc").val();
        celular_func = $("#celFunc").val();
        email_func = $("#emailFunc").val();
        senha_func = $("#senhaFunc").val();
        codigo = $("#codFunc").val();
        confirm_senha_func = $("#confirmFunc").val();

        // Validação de código
        if (codigo != ("12345678")) {
            semErros = false
            // Mostrando mensagem de aviso
            $("#codigoErrado").removeClass("invisible");
        }

        // Validação da Senha
        if (senha_func != $("#confirmFunc").val()) {
            semErros = false
            // Mostrando mensagem de aviso
            $("#senhaErrada").removeClass("invisible");
        }

        // Caso não tenha erros, procede com o commit
        if (semErros) {
            // preparar os dados para envio (json)
            var dadosFunc = JSON.stringify({ nomeCompleto: nome_func, dtNascimento: data_nasc_func, idade: idade_func, cpf: cpf_func, genero: sexo_func, cep: cep_func, telefoneCelular: celular_func, telefoneResidencial: telefone_func, email: email_func, senha: senha_func, confirmarSenha: confirm_senha_func, unidade_hemocentro: uni_hemo, cod_verificacao: codigo, especialidade: especialidade });

            // mandar para o back-end
            $.ajax({
                url: 'http://localhost:5000/incluir_funcionario',
                type: 'POST',
                contentType: 'application/json', // enviando dados em json
                dataType: 'json',
                data: dadosFunc,
                success: incluirFuncionario,
                error: erroIncluirFuncionario
            });
            function incluirFuncionario(resposta) {
                if (resposta.resultado == "ok") {
                    // exibe mensagem de sucesso
                    alert('Funcionário incluído com sucesso');
                    // limpar valores dos campos do formulário
                    $("#nomeFunc").val("");
                    $("#dataNascFunc").val("");
                    $("#idadeFunc").val("");
                    $("#especialidade").val("");
                    $("#cpf").val("");
                    $("#sexoFunc").val("");
                    $("#uniHemo").val("");
                    $("#cep").val("");
                    $("#telefoneFunc").val("");
                    $("#celFunc").val("");
                    $("#emailFunc").val("");
                    $("#senhaFunc").val("");
                    $("#codFunc").val("");
                    $("#confirmFunc").val("");
                    // Redireciona para outra página
                    location.href = "LoginFunc.html";
                } else if (resp.resultado == "CPF") {
                    // informar mensagem de erro
                    $("#cpfErrado").removeClass("invisible");
                    alert("ERRO: " + resp.resultado + ": " + resp.detalhes);
                }
                
            }
            function erroIncluirFuncionario(resposta) {
                alert("Deu ruim na chamada ao back-end");
            }
        }
    });
});