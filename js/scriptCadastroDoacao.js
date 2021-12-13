$(document).ready(function () {
    //cadastrar doações/agendamentos
    $(document).on("click", "#btcadastra", function () {
        // obter os dados da tela do formulário de cadastro de doador
        uni_hemos = $("#uniHemos").val();
        data = $("#data").val();
        hora = $("#hora").val();

        let checkbox = document.getElementById('check');

        if(checkbox.checked) {
            document.getElementById("check").checked = true;
            console.log("O cliente marcou o checkbox");
           // preparar os dados para envio (json)
            var dadosDoacao = JSON.stringify({ unidade_hemocentro: uni_hemos, data: data, hora: hora });
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
                    document.getElementById("check").checked = false;

                } else {
                    alert('erro na comunicação');
                }
            }
            function erroIncluirDoacao(resposta) {
                alert("Deu ruim na chamada ao back-end");
            }
        
        } else {
           console.log("O cliente não marcou o checkbox");
        }
  
    });

});