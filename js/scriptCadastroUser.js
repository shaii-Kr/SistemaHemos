$(document).ready(function () {
    // cadastrar as informações do doador
    $(document).on("click", "#btcadastrar", function () {
        // Variavel que define se tem algum erro ou não
        var semErros = true
        // obter os dados da tela do formulário de cadastro de doador
        nome_doador = $("#nomeDoador").val();
        data_nascimento = $("#dataNascimentoDoador").val();
        idade = $("#idade").val();
        tipo_sanguineo = $("#tipoSanguineo").val();
        cpf = $("#cpf").val();
        sexo = $("#sexo").val();
        altura = $("#altura").val();
        peso = $("#peso").val();
        cep = $("#cep").val();
        telefone = $("#telefone").val();
        celular = $("#cel").val();
        email = $("#email").val();
        senha = $("#senha").val();
        confirmar_senha = $("#confirm").val();

        // Validação da Senha
        if (senha != $("#confirm").val()) {
            semErros = false
            // Mostrando mensagem de aviso
            $("#senhaErrada").removeClass("invisible");
        }

        // Caso não tenha erros, procede com o commit
        if (semErros) {
        // preparar os dados para envio (json)
            var dados = JSON.stringify({ 
                nomeCompleto: nome_doador, dtNascimento: data_nascimento, idade: idade, tipo_sanguineo: tipo_sanguineo, cpf: cpf, genero: sexo, altura: altura, peso: peso, cep: cep, telefoneCelular: celular, telefoneResidencial: telefone, email: email, senha: senha, confirmarSenha: confirmar_senha 
            });

            // mandar para o back-end
            $.ajax({
                url: 'http://localhost:5000/incluir_doador',
                type: 'POST',
                contentType: 'application/json', // enviando dados em json
                dataType: 'json',
                data: dados,
                success: incluirDoador,
                error: erroIncluirDoador
            });
            function incluirDoador(resp) {
                if (resp.resultado == "ok") {
                    // exibe mensagem de sucesso
                    alert('Doador incluído com sucesso');
                    // limpar valores dos campos do formulário
                    $("#nomeDoador").val("");
                    $("#dataNascimentoDoador").val("");
                    $("#idade").val("");
                    $("#tipoSanguineo").val("");
                    $("#cpf").val("");
                    $("#sexo").val("");
                    $("#altura").val("");
                    $("#peso").val("");
                    $("#cep").val("");
                    $("#telefone").val("");
                    $("#cel").val("");
                    $("#email").val("");
                    $("#senha").val("");
                    $("#confirm").val("");
                    // Redireciona para outra página
                    location.href = "LoginUser.html";
                } else if (resp.resultado == "CPF") {
                    // informar mensagem de erro
                    $("#cpfErrado").removeClass("invisible");
                    alert("ERRO: " + resp.resultado + ": " + resp.detalhes);
                }
            }
            function erroIncluirDoador(resp) {
                alert("Deu ruim na chamada ao back-end");
            }
        }
    });  
});