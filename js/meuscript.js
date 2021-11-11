$( document ).ready(function(){
    $("#tabela").removeClass("invisible");
    $("#perfil").click(function(){
       
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
            // percorrer a lista de pessoas retornadas;

            for (var i in resposta) { //i vale a posição no vetor
                minitab = '<div class="container">' + 
                    '<div class="row"><div class="col">' + pessoas[i].nomeCompleto + 
                    '</div></div>' +
        
                    '<div class="row"><div class="col">' + pessoas[i].email + 
                    '</div></div>' +
         
                '</div>';
            }
           
            // adiciona a minitabela
            $('#secaoDeListagem').append(minitab);
            //exibir tabela
                     
        }
    });

});