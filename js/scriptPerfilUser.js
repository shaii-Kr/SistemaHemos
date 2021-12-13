$(document).ready(function () {
    $("#tabelaDoacoes").removeClass("invisible");

    cpf_logado = sessionStorage.cpf;
    //alert(cpf_logado);
    //listar as informações do doador
    $.ajax({
        url: 'http://localhost:5000/listar_infoDoador/' + cpf_logado,
        method: 'GET',
        dataType: 'json', // os dados são recebidos no formato json
        success: listar_infoDoador, // chama a função listar_infoDoador para processar o resultado
        error: function () {
            alert("erro ao ler dados, verifique o backend");
        }
    });

    // lista os dados do doador retornado;
    function listar_infoDoador(resposta) {

        lin1 = '<div class="container">' +
            '<div class="row"><div class="col">' + resposta["Nome completo"]
        '</div></div>'
        '</div>';

        // adiciona a coluna e exibe na tabela
        $('#lin1').append(lin1);

        // percorrer a lista de dados do doador retornado;
        //for (var i in resposta) { //i vale a posição no vetor
        lin2 = '<div class="container">' +
            '<div class="row"><div class="col">' + resposta["Data de nascimento"]
        '</div></div>'
        '</div>';
        //}

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

    // listar as informações das doações
    $.ajax({
        url: 'http://localhost:5000/listar_doacoes/' + cpf_logado,
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