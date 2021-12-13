$(document).ready(function () {

    cpf_logado = sessionStorage.cpf;
    
    $.ajax({
        url: 'http://localhost:5000/listar_infoFuncionario/' + cpf_logado,
        method: 'GET',
        dataType: 'json', // os dados são recebidos no formato json
        success: listar_infoFuncionario, // chama a função listar_infoFuncionario para processar o resultado
        error: function () {
            alert("erro ao ler dados, verifique o backend");
        }
    });

    //lista os dados do funcionário retornado;
    function listar_infoFuncionario(resposta2) {

        //cria uma linha e uma coluna
        linha1 = '<div class="container">' +
            '<div class="row"><div class="col">' + resposta2["Nome completo"]
        '</div></div>'
        '</div>';
        // adiciona a coluna e exibe na tabela
        $('#linha1').append(linha1);

        linha2 = '<div class="container">' +
            '<div class="row"><div class="col">' + resposta2["Data de nascimento"]
        '</div></div>'
        '</div>';
        // adiciona a coluna e exibe na tabela
        $('#linha2').append(linha2);

        linha3 = '<div class="container">' +
            '<div class="row"><div class="col">' + resposta2.Idade
        '</div></div>'
        '</div>';
        // adiciona a coluna e exibe na tabela
        $('#linha3').append(linha3);

        linha4 = '<div class="container">' +
            '<div class="row"><div class="col">' + resposta2.CPF
        '</div></div>'
        '</div>';
        // adiciona a coluna e exibe na tabela
        $('#linha4').append(linha4);

        linha5 = '<div class="container">' +
            '<div class="row"><div class="col">' + resposta2["Genero Biologico"]
        '</div></div>'
        '</div>';
        // adiciona a coluna e exibe na tabela
        $('#linha5').append(linha5);

        linha6 = '<div class="container">' +
            '<div class="row"><div class="col">' + resposta2.CEP
        '</div></div>'
        '</div>';
        // adiciona a coluna e exibe na tabela
        $('#linha6').append(linha6);

        linha7 = '<div class="container">' +
            '<div class="row"><div class="col">' + resposta2["Telefone residencial"]
        '</div></div>'
        '</div>';
        // adiciona a coluna e exibe na tabela
        $('#linha7').append(linha7);

        linha8 = '<div class="container">' +
            '<div class="row"><div class="col">' + resposta2["Telefone celular"]
        '</div></div>'
        '</div>';
        // adiciona a coluna e exibe na tabela
        $('#linha8').append(linha8);

        linha9 = '<div class="container">' +
            '<div class="row"><div class="col">' + resposta2.Email
        '</div></div>'
        '</div>';
        // adiciona a coluna e exibe na tabela
        $('#linha9').append(linha9);

        linha10 = '<div class="container">' +
            '<div class="row"><div class="col">' + resposta2.Senha
        '</div></div>'
        '</div>';
        // adiciona a coluna e exibe na tabela
        $('#linha10').append(linha10);

        linha11 = '<div class="container">' +
            '<div class="row"><div class="col">' + resposta2["Unidade Hemocentro"]
        '</div></div>'
        '</div>';
        // adiciona a coluna e exibe na tabela
        $('#linha11').append(linha11);

        linha12 = '<div class="container">' +
            '<div class="row"><div class="col">' + resposta2.Especialidade
        '</div></div>'
        '</div>';
        // adiciona a coluna e exibe na tabela
        $('#linha12').append(linha12);
    }
});