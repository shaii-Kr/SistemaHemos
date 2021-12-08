$(document).ready(function () {

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