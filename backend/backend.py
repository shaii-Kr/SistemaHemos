from werkzeug.wrappers import response
from config import *
from modelo import Doacao, Doador, Funcionario, Pessoa

@app.route("/")
def padrao():
    return "backend operante"

#listar informações do doador
@app.route("/listar_infoDoador/<string:cpf>")
def listar_infoDoador(cpf):
    infoDoador = db.session.query(Doador).get(cpf)
    #retorno = []
    #for i in infoDoador:
    #  retorno.append(i.json())

    resposta = jsonify(infoDoador.json())
    resposta.headers.add("Access-Control-Allow-Origin", "*")
    return resposta

#listar informações do funcionário
@app.route("/listar_infoFuncionario/<string:cpf>")
def listar_infoFuncionario(cpf):
    infoFunc = db.session.query(Funcionario).get(cpf)
    #retorno2 = []
    #for i in infoFunc:
        #retorno2.append(i.json())

    resposta2 = jsonify(infoFunc.json())
    resposta2.headers.add("Access-Control-Allow-Origin", "*")
    return resposta2

#listar informações das doações
@app.route("/listar_doacoes/<string:cpf>")
def listar_doacoes(cpf):
    doac = db.session.query(Doacao).filter(Doacao.cpf_doador == cpf)
    #    doac = db.session.query(Doacao).all()
    retorno3 = []
    for d in doac:
        retorno3.append(d.json())

    resposta3 = jsonify(retorno3)
    resposta3.headers.add("Access-Control-Allow-Origin", "*")
    return resposta3

#cadastrar doador
@app.route("/incluir_doador", methods=['post'])
def incluir_doador():
    # preparar uma resposta otimista
    resposta = jsonify({"resultado": "ok", "detalhes": "ok"})
    # receber as informações do novo doador
    dados = request.get_json()
    semErro = True
    try:
        # Recuperando dados do banco para fazer validação do CPF
        todasPessoas = db.session.query(Pessoa).all()
        for i in todasPessoas:
            # Caso o CPF passado já exista no sistema, muda a variavel semErro para False
            if i.cpf == dados['cpf']:
                resposta = jsonify({"resultado": "CPF", "detalhes": "CPF duplicado"})
                semErro = False
                break
        # Caso a operação não tenha erros, faz o registro
        if semErro == True:
            novo_doador = Doador(**dados)
            db.session.add(novo_doador)
            db.session.commit()
    # informar mensagem de erro
    except Exception as e:
        resposta = jsonify({"resultado": "erro", "detalhes": str(e)})
    # adicionar cabeçalho de liberação de origem
    resposta.headers.add("Access-Control-Allow-Origin", "*")
    return resposta

#cadastrar funcionário
@app.route("/incluir_funcionario", methods=['post'])
def incluir_funcionario():
    # preparar uma resposta otimista
    resposta = jsonify({"resultado": "ok", "detalhes": "ok"})
    # receber as informações do novo doador
    dadosFunc = request.get_json()
    semErro = True
    try:
        # Recuperando dados do banco para fazer validação do CPF
        todasPessoas = db.session.query(Pessoa).all()
        for i in todasPessoas:
            # Caso o CPF passado já exista no sistema, muda a variavel semErro para False
            if i.cpf == dadosFunc['cpf']:
                resposta = jsonify({"resultado": "CPF", "detalhes": "CPF duplicado"})
                semErro = False
                break
        # Caso a operação não tenha erros, faz o registro
        if semErro == True:
            novo_func = Funcionario(**dadosFunc)
            db.session.add(novo_func)
            db.session.commit()
    # informar mensagem de erro
    except Exception as e:
        resposta = jsonify({"resultado": "erro", "detalhes": str(e)})

    # adicionar cabeçalho de liberação de origem
    resposta.headers.add("Access-Control-Allow-Origin", "*")
    return resposta

#cadastrar doação
@app.route("/incluir_doacao", methods=['post'])
def incluir_doacao():
    # preparar uma resposta otimista
    resposta = jsonify({"resultado": "ok", "detalhes": "ok"})
    # receber as informações da nova doacao
    dadosDoacao = request.get_json()
    try:
        nova_doacao = Doacao(**dadosDoacao)
        db.session.add(nova_doacao)
        db.session.commit()
    # informar mensagem de erro
    except Exception as e:
        resposta = jsonify({"resultado": "erro", "detalhes": str(e)})

    # adicionar cabeçalho de liberação de origem
    resposta.headers.add("Access-Control-Allow-Origin", "*")
    return resposta

#login
@app.route("/loginUser", methods=['post'])
def loginUser():
    dados = request.get_json() #(force=True) dispensa Content-Type na requisição
    todasPessoas = db.session.query(Pessoa).all()
    resposta = jsonify({"resultado": "erro", "detalhes": "Doador não encontrado"})
    for i in todasPessoas:
        if i.email == dados['Email'] and i.senha == dados['senha']:
            resposta = jsonify({"resultado": "ok", "detalhes": "Doador encontrado", "usuario": i.json()})
    resposta.headers.add("Access-Control-Allow-Origin", "*")
    return resposta

@app.route("/loginFunc", methods=['post'])
def loginFunc():
    dados = request.get_json() #(force=True) dispensa Content-Type na requisição
    todasPessoas = db.session.query(Pessoa).all()
    resposta = jsonify({"resultado": "erro", "detalhes": "Funcionário não encontrado"})
    for i in todasPessoas:
        if i.email == dados['Email'] and i.senha == dados['senha']:
            resposta = jsonify({"resultado": "ok", "detalhes": "Funcionário encontrado", "usuario": i.json()})
    resposta.headers.add("Access-Control-Allow-Origin", "*")
    return resposta

app.run()#debug=True)
