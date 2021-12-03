from werkzeug.wrappers import response
from config import *
from modelo import Doacao, Doador, Funcionario

@app.route("/")
def padrao():
    return "backend operante"

@app.route("/listar_infoDoador")
def listar_infoDoador():
    infoDoador = db.session.query(Doador).all()
    retorno = []
    for i in infoDoador:
        retorno.append(i.json())

    resposta = jsonify(retorno)
    resposta.headers.add("Access-Control-Allow-Origin", "*")
    return resposta

@app.route("/listar_infoFuncionario")
def listar_infoFuncionario():
    infoFunc = db.session.query(Funcionario).all()
    retorno2 = []
    for i in infoFunc:
        retorno2.append(i.json())

    resposta2 = jsonify(retorno2)
    resposta2.headers.add("Access-Control-Allow-Origin", "*")
    return resposta2

@app.route("/listar_doacoes")
def listar_doacoes():
    doac = db.session.query(Doacao).all()
    retorno3 = []
    for d in doac:
        retorno3.append(d.json())

    resposta3 = jsonify(retorno3)
    resposta3.headers.add("Access-Control-Allow-Origin", "*")
    return resposta3

@app.route("/incluir_doador", methods=['post'])
def incluir_doador():
    # receber as informações da nova pessoa 
    dados = request.get_json()
    try:
        novo_doador = Doador(**dados) 
        db.session.add(novo_doador)
        db.session.commit()
    # informar mensagem de erro
    except Exception as e:
        resposta =  jsonify({"resultado":"erro", "detalhes":str(e)}) 
    
    # adicionar cabeçalho de liberação de origem 
    resposta.headers.add("Access-Control-Allow-Origin", "*") 
    return {"resultado":'ok'}

app.run(debug=True)