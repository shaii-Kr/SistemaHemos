
from config import *
from modelo import Doacao, Doador

@app.route("/")
def padrao():
    return "backend operante"

@app.route("/listar_pessoas")
def listar_pessoas():
    pessoas = db.session.query(Doador).all()
    retorno = []
    for i in pessoas:
        retorno.append(i.json())

    resposta = jsonify(retorno)
    resposta.headers.add("Access-Control-Allow-Origin", "*")
    return resposta

@app.route("/listar_doacoes")
def listar_doacoes():
    doac = db.session.query(Doacao).all()
    retorno = []
    for d in doac:
        retorno.append(d.json())

    resposta = jsonify(retorno)
    return resposta

app.run(debug=True)