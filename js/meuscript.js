$(document).ready(function () {
    $("#tabelaDoacoes").removeClass("invisible");

    //listar as informações do doador
    $("#link_listar_infoDoador").click(function () {
        $.ajax({
            url: 'http://localhost:5000/listar_infoDoador',
            method: 'GET',
            dataType: 'json', // os dados são recebidos no formato json
            success: listar_infoDoador, // chama a função listar_infoDoador para processar o resultado
            error: function () {
                alert("erro ao ler dados, verifique o backend");
            }
        });

        // lista os dados do doador retornado;
        function listar_infoDoador(resposta) {

            // percorrer a lista de dados do doador retornado;
            for (var i in resposta) { //i vale a posição no vetor
                lin1 = '<div class="container">' +
                    '<div class="row"><div class="col">' + resposta[i]["Nome completo"]
                '</div></div>'
                '</div>';
            }

            // adiciona a coluna e exibe na tabela
            $('#lin1').append(lin1);

            // percorrer a lista de dados do doador retornado;
            for (var i in resposta) { //i vale a posição no vetor
                lin2 = '<div class="container">' +
                    '<div class="row"><div class="col">' + resposta[i]["Data de nascimento"]
                '</div></div>'
                '</div>';
            }

            // adiciona a coluna e exibe na tabela
            $('#lin2').append(lin2);


            // percorrer a lista de dados do doador retornado;
            for (var i in resposta) { //i vale a posição no vetor
                lin3 = '<div class="container">' +
                    '<div class="row"><div class="col">' + resposta[i]["Tipo sanguineo"]
                '</div></div>'
                '</div>';
            }

            // adiciona a coluna e exibe na tabela
            $('#lin3').append(lin3);

            for (var i in resposta) { //i vale a posição no vetor
                lin4 = '<div class="container">' +
                    '<div class="row"><div class="col">' + resposta[i].CPF
                '</div></div>'
                '</div>';
            }

            // adiciona a coluna e exibe na tabela
            $('#lin4').append(lin4);

            for (var i in resposta) { //i vale a posição no vetor
                lin5 = '<div class="container">' +
                    '<div class="row"><div class="col">' + resposta[i]["Genero Biologico"]
                '</div></div>'
                '</div>';
            }

            // adiciona a coluna e exibe na tabela
            $('#lin5').append(lin5);

            for (var i in resposta) { //i vale a posição no vetor
                lin6 = '<div class="container">' +
                    '<div class="row"><div class="col">' + resposta[i].Altura
                '</div></div>'
                '</div>';
            }

            // adiciona a coluna e exibe na tabela
            $('#lin6').append(lin6);

            for (var i in resposta) { //i vale a posição no vetor
                lin7 = '<div class="container">' +
                    '<div class="row"><div class="col">' + resposta[i].Peso
                '</div></div>'
                '</div>';
            }

            // adiciona a coluna e exibe na tabela
            $('#lin7').append(lin7);

            for (var i in resposta) { //i vale a posição no vetor
                lin8 = '<div class="container">' +
                    '<div class="row"><div class="col">' + resposta[i].Idade
                '</div></div>'
                '</div>';
            }

            // adiciona a coluna e exibe na tabela
            $('#lin8').append(lin8);

            for (var i in resposta) { //i vale a posição no vetor
                lin9 = '<div class="container">' +
                    '<div class="row"><div class="col">' + resposta[i].CEP
                '</div></div>'
                '</div>';
            }

            // adiciona a coluna e exibe na tabela
            $('#lin9').append(lin9);


            for (var i in resposta) { //i vale a posição no vetor
                lin10 = '<div class="container">' +
                    '<div class="row"><div class="col">' + resposta[i]["Telefone residencial"]
                '</div></div>'
                '</div>';
            }

            // adiciona a coluna e exibe na tabela
            $('#lin10').append(lin10);

            for (var i in resposta) { //i vale a posição no vetor
                lin11 = '<div class="container">' +
                    '<div class="row"><div class="col">' + resposta[i]["Telefone celular"]
                '</div></div>'
                '</div>';
            }

            // adiciona a coluna e exibe na tabela
            $('#lin11').append(lin11);

            for (var i in resposta) { //i vale a posição no vetor
                lin12 = '<div class="container">' +
                    '<div class="row"><div class="col">' + resposta[i].Email
                '</div></div>'
                '</div>';
            }

            // adiciona a coluna e exibe na tabela
            $('#lin12').append(lin12);

            for (var i in resposta) { //i vale a posição no vetor
                lin13 = '<div class="container">' +
                    '<div class="row"><div class="col">' + resposta[i].Senha
                '</div></div>'
                '</div>';
            }

            // adiciona a coluna e exibe na tabela
            $('#lin13').append(lin13);

        }
    });

    // listar as informações do funcionário
    $("#link_listar_infoFuncionario").click(function () {

        window.location.href = "PerfilFunc.html";

    });

    // listar as informações do doador
    $("#link_listar_infoDoador").click(function () {
        $.ajax({
            url: 'http://localhost:5000/listar_doacoes',
            method: 'GET',
            dataType: 'json', // os dados são recebidos no formato json
            success: listar_doacoes, // chama a função listar_doacoes para processar o resultado
            error: function () {
                alert("erro ao ler dados, verifique o backend");
            }
        });

        function listar_doacoes(doac) {
            // inicializar um acumulador
            linhas = ""
            // percorrer as plantas retornadas em json
            for (var d in doac) {

                // montar uma linha da tabela de plantas
                lin = "<tr>" +
                    "<td>" + doac[d]["CPF do Doador"] + "</td>" +
                    "<td>" + doac[d].Data + "</td>" +
                    "<td>" + doac[d].Hora + "</td>" +
                    "<td>" + doac[d]["Unidade Hemos"] + "</td>" +
                    "</tr>";

                // adicionar a linha da tabela em um acumulador
                linhas = linhas + lin;
            }
            // colocar as linhas na tabela
            $("#corpoTabelaDoacoes").html(linhas);

            // esconder todos os elementos da tela
            $("#tabelaDoacoes").addClass("invisible");

            // exibir a tabela
            $("#tabelaDoacoes").removeClass("invisible");
        }
    });

    // cadastrar as informações do doador
    $(document).on("click", "#btcadastrar", function () {
        // obter os dados da tela do formulário de cadastro de doador
        nome_doador = $("#nomeDoador").val();
        data_nascimento = $("#dataNascimentoDoador").val();
        idade = $("#idade").val();
        tipo_sanguineo = $("#tipoSanguineo").val();
        cpf = $("#CPF").val();
        sexo = $("#sexo").val();
        altura = $("#altura").val();
        peso = $("#peso").val();
        cep = $("#CEP").val();
        telefone = $("#telefone").val();
        celular = $("#cel").val();
        email = $("#email").val();
        senha = $("#senha").val();
        confirmar_senha = $("#confirm").val();

        // preparar os dados para envio (json)
        dados = JSON.stringify({ nomeCompleto: nome_doador, dtNascimento: data_nascimento, idade: idade, tipo_sanguineo: tipo_sanguineo, cpf: cpf, genero: sexo, altura: altura, peso: peso, cep: cep, telefoneCelular: celular, telefoneResidencial: telefone, email: email, senha: senha, confirmarSenha: confirmar_senha });

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
                $("#CPF").val("");
                $("#sexo").val("");
                $("#altura").val("");
                $("#peso").val("");
                $("#CEP").val("");
                $("#telefone").val("");
                $("#cel").val("");
                $("#email").val("");
                $("#senha").val("");
                $("#confirm").val("");

            } else {
                alert('erro na comunicação');
            }
        }
        function erroIncluirDoador(resp) {
            alert("Deu ruim na chamada ao back-end");
        }
    });

    //cadastrar doações/agendamentos
    $(document).on("click", "#btcadastra", function () {
        // obter os dados da tela do formulário de cadastro de doador
        uni_hemos = $("#uniHemos").val();
        data = $("#data").val();
        hora = $("#hora").val();

        // preparar os dados para envio (json)
        dadosDoacao = JSON.stringify({ unidade_hemocentro: uni_hemos, data: data, hora: hora });

        // mandar para o back-end
        $.ajax({
            url: 'http://localhost:5000/incluir_doacao',
            type: 'POST',
            contentType: 'application/json', // enviando dados em json
            dataType: 'json',
            data: dadosDoacao,
            success: incluirDoacao,
            error: erroIncluirDoacao
        });
        function incluirDoacao(resposta) {
            if (resposta.resultado == "ok") {
                // exibe mensagem de sucesso
                alert('Doação incluída com sucesso');
                // limpar valores dos campos do formulário
                $("#uniHemos").val("");
                $("#data").val("");
                $("#hora").val("");

            } else {
                alert('erro na comunicação');
            }
        }
        function erroIncluirDoacao(resposta) {
            alert("Deu ruim na chamada ao back-end");
        }
    });

    //cadastrar funcionário
    $(document).on("click", "#btcadastro", function () {
        // obter os dados da tela do formulário de cadastro de funcionário
        nome_func = $("#nomeFunc").val();
        data_nasc_func = $("#dataNascFunc").val();
        idade_func = $("#idadeFunc").val();
        especialidade = $("#especialidade").val();
        cpf_func = $("#cpfFunc").val();
        sexo_func = $("#sexoFunc").val();
        uni_hemo = $("#uniHemo").val();
        cep_func = $("#cepFunc").val();
        telefone_func = $("#telefoneFunc").val();
        celular_func = $("#celFunc").val();
        email_func = $("#emailFunc").val();
        senha_func = $("#senhaFunC").val();
        codigo = $("#codFunc").val();
        confirm_senha_func = $("#confirmFunc").val();

        // preparar os dados para envio (json)
        dadosFunc = JSON.stringify({ nomeCompleto: nome_func, dtNascimento: data_nasc_func, idade: idade_func, cpf: cpf_func, genero: sexo_func, cep_func: cep, telefoneCelular: celular_func, telefoneResidencial: telefone_func, email: email_func, senha: senha_func, confirmarSenha: confirm_senha_func, unidade_hemocentro: uni_hemo, cod_verificacao: codigo, especialidade: especialidade });

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
                alert('Doação incluída com sucesso');
                // limpar valores dos campos do formulário
                $("#nomeFunc").val();
                $("#dataNascFunc").val();
                $("#idadeFunc").val();
                $("#especialidade").val();
                $("#cpfFunc").val();
                $("#sexoFunc").val();
                $("#uniHemo").val();
                $("#cepFunc").val();
                $("#telefoneFunc").val();
                $("#celFunc").val();
                $("#emailFunc").val();
                $("#senhaFunC").val();
                $("#codFunc").val();
                $("#confirmFunc").val();

            } else {
                alert('erro na comunicação');
            }
        }
        function erroIncluirFuncionario(resposta) {
            alert("Deu ruim na chamada ao back-end");
        }
    });
});