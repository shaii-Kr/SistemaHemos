from werkzeug.wrappers import response
from config import *
from modelo import Doacao, Doador, Funcionario

@app.route("/")
def padrao():
    return "backend operante"

#listar informações do doador
@app.route("/listar_infoDoador")
def listar_infoDoador():
    infoDoador = db.session.query(Doador).all()
    retorno = []
    for i in infoDoador:
        retorno.append(i.json())

    resposta = jsonify(retorno)
    resposta.headers.add("Access-Control-Allow-Origin", "*")
    return resposta

#listar informações do funcionário
@app.route("/listar_infoFuncionario")
def listar_infoFuncionario():
    infoFunc = db.session.query(Funcionario).all()
    retorno2 = []
    for i in infoFunc:
        retorno2.append(i.json())

    resposta2 = jsonify(retorno2)
    resposta2.headers.add("Access-Control-Allow-Origin", "*")
    return resposta2

#listar informações das doações
@app.route("/listar_doacoes")
def listar_doacoes():
    doac = db.session.query(Doacao).all()
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
    try:
        novo_doador = Doador(**dados)
        db.session.add(novo_doador)
        db.session.commit()
    # informar mensagem de erro
    except Exception as e:
        resposta = jsonify({"resultado": "erro", "detalhes": str(e)})

    # adicionar cabeçalho de liberação de origem
    resposta.headers.add("Access-Control-Allow-Origin", "*")
    return {"resultado": 'ok'}

#cadastrar funcionário
@app.route("/incluir_funcionario", methods=['post'])
def incluir_funcionario():
    # preparar uma resposta otimista
    resposta = jsonify({"resultado": "ok", "detalhes": "ok"})
    # receber as informações do novo doador
    dadosFunc = request.get_json()
    try:
        novo_func = Funcionario(**dadosFunc)
        db.session.add(novo_func)
        db.session.commit()
    # informar mensagem de erro
    except Exception as e:
        resposta = jsonify({"resultado": "erro", "detalhes": str(e)})

    # adicionar cabeçalho de liberação de origem
    resposta.headers.add("Access-Control-Allow-Origin", "*")
    return {"resultado": 'ok'}

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
    return {"resultado": 'ok'}

app.run(debug=True)
