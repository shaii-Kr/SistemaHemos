$(document).ready(function () {
    $("#tabelaDoacoes").removeClass("invisible");
    
    $("#link_listar_infoDoador").click(function(){
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

    $("#link_listar_infoFuncionario").click(function(){
        $.ajax({
            url: 'http://localhost:5000/listar_infoFuncionario',
            method: 'GET',
            dataType: 'json', // os dados são recebidos no formato json
            success: listar_infoFuncionario, // chama a função listar_infoFuncionario para processar o resultado
            error: function () {
                alert("erro ao ler dados, verifique o backend");
            }
        });

        //lista os dados do funcionário retornado;
        function listar_infoFuncionario(resposta2) {

            // percorre a lista de dados do funcionário retornado;
            for (var i in resposta2) { //i vale a posição no vetor
                linha1 = '<div class="container">' +
                    '<div class="row"><div class="col">' + resposta2[i]["Nome completo"]
                '</div></div>'
                '</div>';
            }

            // adiciona a coluna e exibe na tabela
            $('#linha1').append(linha1);

            // percorre a lista de dados do funcionário retornado;
            for (var i in resposta2) { //i vale a posição no vetor
                linha2 = '<div class="container">' +
                    '<div class="row"><div class="col">' + resposta2[i]["Data de nascimento"]
                '</div></div>'
                '</div>';
            }

            // adiciona a coluna e exibe na tabela
            $('#linha2').append(linha2);

            // percorre a lista de dados do funcionário retornado;
            for (var i in resposta2) { //i vale a posição no vetor
                linha3 = '<div class="container">' +
                    '<div class="row"><div class="col">' + resposta2[i].Idade
                '</div></div>'
                '</div>';
            }

            // adiciona a coluna e exibe na tabela
            $('#linha3').append(linha3);

            for (var i in resposta2) { //i vale a posição no vetor
                linha4 = '<div class="container">' +
                    '<div class="row"><div class="col">' + resposta2[i].CPF
                '</div></div>'
                '</div>';
            }

            // adiciona a coluna e exibe na tabela
            $('#linha4').append(linha4);

            for (var i in resposta2) { //i vale a posição no vetor
                linha5 = '<div class="container">' +
                    '<div class="row"><div class="col">' + resposta2[i]["Genero Biologico"]
                '</div></div>'
                '</div>';
            }

            // adiciona a coluna e exibe na tabela
            $('#linha5').append(linha5);

            for (var i in resposta2) { //i vale a posição no vetor
                linha6 = '<div class="container">' +
                    '<div class="row"><div class="col">' + resposta2[i].CEP
                '</div></div>'
                '</div>';
            }

            // adiciona a coluna e exibe na tabela
            $('#linha6').append(linha6);

            for (var i in resposta2) { //i vale a posição no vetor
                linha7 = '<div class="container">' +
                    '<div class="row"><div class="col">' + resposta2[i]["Telefone residencial"]
                '</div></div>'
                '</div>';
            }

            // adiciona a coluna e exibe na tabela
            $('#linha7').append(linha7);

            for (var i in resposta2) { //i vale a posição no vetor
                linha8 = '<div class="container">' +
                    '<div class="row"><div class="col">' + resposta2[i]["Telefone celular"]
                '</div></div>'
                '</div>';
            }

            // adiciona a coluna e exibe na tabela
            $('#linha8').append(linha8);

            for (var i in resposta2) { //i vale a posição no vetor
                linha9 = '<div class="container">' +
                    '<div class="row"><div class="col">' + resposta2[i].Email
                '</div></div>'
                '</div>';
            }

            // adiciona a coluna e exibe na tabela
            $('#linha9').append(linha9);

            for (var i in resposta2) { //i vale a posição no vetor
                linha10 = '<div class="container">' +
                    '<div class="row"><div class="col">' + resposta2[i].Senha
                '</div></div>'
                '</div>';
            }

            // adiciona a coluna e exibe na tabela
            $('#linha10').append(linha10);

            for (var i in resposta2) { //i vale a posição no vetor
                linha11 = '<div class="container">' +
                    '<div class="row"><div class="col">' + resposta2[i]["Unidade Hemocentro"]
                '</div></div>'
                '</div>';
            }

            // adiciona a coluna e exibe na tabela
            $('#linha11').append(linha11);

            for (var i in resposta2) { //i vale a posição no vetor
                linha12 = '<div class="container">' +
                    '<div class="row"><div class="col">' + resposta2[i].Especialidade
                '</div></div>'
                '</div>';
            }

            // adiciona a coluna e exibe na tabela
            $('#linha12').append(linha12);

            for (var i in resposta2) { //i vale a posição no vetor
                linha13 = '<div class="container">' +
                    '<div class="row"><div class="col">' + resposta2[i]["Codigo de verificacao"]
                '</div></div>'
                '</div>';
            }

            // adiciona a coluna e exibe na tabela
            $('#linha13').append(linha13);

        }
    });

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

    $(document).on("click", "#btcadastra", function () {
        // obter os dados da tela do formulário de cadastro de doador
        uni_hemos = $("#uniHemos").val();
        data = $("#data").val();
        hora = $("#hora").val();

        // preparar os dados para envio (json)
        dadosDoacao = JSON.stringify({ unidade_hemocentro: uni_hemos, data: data, hora : hora});

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
});