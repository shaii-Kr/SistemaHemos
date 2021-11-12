$( document ).ready(function(){
        $.ajax({
            url: 'http://localhost:5000/listar_pessoas',
            method: 'GET',
            dataType: 'json', // os dados são recebidos no formato json
            success: listar_pessoas, // chama a função listar_pessoas para processar o resultado
            error: function() {
                alert("erro ao ler dados, verifique o backend");
            }
        });
    
        function listar_pessoas(resposta){
            
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
                     
        }
});