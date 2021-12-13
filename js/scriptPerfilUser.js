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

        //cria uma linha e uma coluna
        lin1 = '<div class="container">' +
            '<div class="row"><div class="col">' + resposta["Nome completo"]
        '</div></div>'
        '</div>';
        // adiciona a coluna e exibe na tabela
        $('#lin1').append(lin1);

        //cria uma linha e uma coluna
        lin2 = '<div class="container">' +
            '<div class="row"><div class="col">' + resposta["Data de nascimento"]
        '</div></div>'
        '</div>';
        // adiciona a coluna e exibe na tabela
        $('#lin2').append(lin2);

        lin3 = '<div class="container">' +
            '<div class="row"><div class="col">' + resposta["Tipo sanguineo"]
        '</div></div>'
        '</div>';
        // adiciona a coluna e exibe na tabela
        $('#lin3').append(lin3);

        lin4 = '<div class="container">' +
            '<div class="row"><div class="col">' + resposta.CPF
        '</div></div>'
        '</div>';
        // adiciona a coluna e exibe na tabela
        $('#lin4').append(lin4);

        lin5 = '<div class="container">' +
            '<div class="row"><div class="col">' + resposta["Genero Biologico"]
        '</div></div>'
        '</div>';
        // adiciona a coluna e exibe na tabela
        $('#lin5').append(lin5);

        lin6 = '<div class="container">' +
            '<div class="row"><div class="col">' + resposta.Altura
        '</div></div>'
        '</div>';
        // adiciona a coluna e exibe na tabela
        $('#lin6').append(lin6);

        lin7 = '<div class="container">' +
            '<div class="row"><div class="col">' + resposta.Peso
        '</div></div>'
        '</div>';
        // adiciona a coluna e exibe na tabela
        $('#lin7').append(lin7);

        lin8 = '<div class="container">' +
            '<div class="row"><div class="col">' + resposta.Idade
        '</div></div>'
        '</div>';
        // adiciona a coluna e exibe na tabela
        $('#lin8').append(lin8);

        lin9 = '<div class="container">' +
            '<div class="row"><div class="col">' + resposta.CEP
        '</div></div>'
        '</div>';
        // adiciona a coluna e exibe na tabela
        $('#lin9').append(lin9);

        lin10 = '<div class="container">' +
            '<div class="row"><div class="col">' + resposta["Telefone residencial"]
        '</div></div>'
        '</div>';
        // adiciona a coluna e exibe na tabela
        $('#lin10').append(lin10);

        lin11 = '<div class="container">' +
            '<div class="row"><div class="col">' + resposta["Telefone celular"]
        '</div></div>'
        '</div>';
        // adiciona a coluna e exibe na tabela
        $('#lin11').append(lin11);

        lin12 = '<div class="container">' +
            '<div class="row"><div class="col">' + resposta.Email
        '</div></div>'
        '</div>';
        // adiciona a coluna e exibe na tabela
        $('#lin12').append(lin12);

        lin13 = '<div class="container">' +
            '<div class="row"><div class="col">' + resposta.Senha
        '</div></div>'
        '</div>';
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