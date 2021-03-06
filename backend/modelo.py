from config import *

# Classe pai 
class Pessoa(db.Model):
    nomeCompleto = db.Column(db.String(200))
    dtNascimento = db.Column(db.String(100))
    genero = db.Column(db.String(100))
    cpf = db.Column(db.String(20), primary_key=True)
    idade = db.Column(db.Integer)
    cep = db.Column(db.Integer)
    telefoneCelular = db.Column(db.Integer)
    telefoneResidencial = db.Column(db.Integer)
    email = db.Column(db.String(100))
    senha = db.Column(db.String(100))
    confirmarSenha = db.Column(db.String(100))
    type = db.Column(db.String(50)) # Discriminador
    __mapper_args__ = {
        'polymorphic_identity':'pessoa', 
        'polymorphic_on':type 
    } # serve para diferenciar as classes filhas (funcionário e vendedor)

    # Método que retorna as informações da classe pessoa em uma string
    def __str__(self):
        return f' {self.nomeCompleto}, {self.cep}, {self.dtNascimento}, {self.idade}, {self.genero}, {self.cpf}, {self.email}, {self.senha}, {self.telefoneCelular}, {self.telefoneResidencial}, {self.confirmarSenha} '

# Classe filha que representa um funcionário do hemos
class Funcionario(Pessoa):
    func_cpf = db.Column(db.String(20), db.ForeignKey(Pessoa.cpf), primary_key = True)
    funcionario = db.relationship("Funcionario")
    cod_verificacao = db.Column(db.String(9)) # código para realizar o cadastro do funcionário 
    unidade_hemocentro = db.Column(db.String(254))
    especialidade = db.Column(db.String(254))
    __mapper_args__ = { 
        'polymorphic_identity':'Funcionário', 
    }# Serve para distinguir entre doador e funcionário

    # Método que retorna as informaçaões da classe funcionário em uma string
    def __str__(self):
        return f'{super().__str__()}, {self.cod_verificacao}, {self.unidade_hemocentro}, {self.especialidade}, {self.func_cpf}, {self.type}' 

    # Método que lista os dados no formato json
    def json(self):
        return {
            "Nome completo": self.nomeCompleto,
            "Data de nascimento": self.dtNascimento,
            "Genero Biologico": self.genero,
            "CPF": self.cpf,
            "Idade": self.idade,
            "CEP": self.cep,
            "Telefone celular": self.telefoneCelular,
            "Telefone residencial": self.telefoneResidencial,
            "Email": self.email,
            "Confirmar Senha": self.confirmarSenha,
            "Senha": self.senha, 
            "Codigo de verificacao": self.cod_verificacao,
            "Unidade Hemocentro": self.unidade_hemocentro,
            "Especialidade": self.especialidade
        }

# Classe filha que representa um doador do Hemos       
class Doador(Pessoa):
    doad_cpf = db.Column(db.String(20), db.ForeignKey(Pessoa.cpf), primary_key = True)
    tipo_sanguineo = db.Column(db.String(1))
    altura = db.Column(db.Float)
    peso = db.Column(db.Float)
    __mapper_args__ = { 
        'polymorphic_identity':'Doador', 
    } # Serve para distinguir entre doador e funcionário
    
    # Método que retorna as informaçaões da classe Doador em uma string
    def __str__(self):
        return f'{super().__str__()}, {self.tipo_sanguineo}, {self.altura}, {self.peso}, {self.doad_cpf}, {self.type}'
    
    # Método que lista os dados no formato json
    def json(self): 
        return {
            "Nome completo": self.nomeCompleto,
            "Data de nascimento": self.dtNascimento,
            "Genero Biologico": self.genero,
            "CPF": self.cpf,
            "Idade": self.idade,
            "CEP": self.cep,
            "Telefone celular": self.telefoneCelular,
            "Telefone residencial": self.telefoneResidencial,
            "Email": self.email,
            "Confirmar Senha": self.confirmarSenha,
            "Senha": self.senha, 
            "Tipo sanguineo": self.tipo_sanguineo,
            "Altura": self.altura,
            "Peso": self.peso
            }
class Doacao(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    data = db.Column(db.String(50))
    hora = db.Column(db.String(50))
    unidade_hemocentro = db.Column(db.String(254))
    cpf_doador = db.Column(db.Integer, db.ForeignKey(Doador.cpf), nullable = False)
    doador = db.relationship("Doador") # Associação com o doador
    
    # Método que retorna as informaçaões da classe Doacao em uma string
    def __str__(self):
        return f' {self.id}, {self.data}, {self.hora}, {self.cpf_doador}, {self.doador}, {self.unidade_hemocentro}  '

    def json(self): 
        return {
            "Id": self.id,
            "Data": self.data,
            "Hora": self.hora,
            "Unidade Hemos": self.unidade_hemocentro,
            "CPF do Doador": self.cpf_doador,
            "Doador": self.doador.json() # Reciclando a função json da classe Doador para reaproveitar as informações do doador
            }

# Bloqueia os códigos de teste quando o arquivo modelo.py é importado
if __name__ == "__main__":
    
    # Apaga arquivos já existentes para que não tenha repetição de dados
    if os.path.exists(arquivobd):
        os.remove(arquivobd)
    
    db.create_all() # Cria as tabelas do banco de dados

    # Inputs de teste
  
    doador1 = Doador(nomeCompleto = "Ana Carolina", dtNascimento = "13/10/2003", genero = "F", cpf = "11034508902", email = "ana.c.santos@gmail.com", senha = "aninha1234", altura = 1.65, peso = 50, idade = 17, cep = 8002258, telefoneCelular = 991285589, telefoneResidencial = 33333333, tipo_sanguineo = "O+", confirmarSenha = "aninha1234")

    doacao = Doacao(data = "18/08/2012", hora = "09h15", unidade_hemocentro = "Blumenau", doador = doador1)
    

    # Adiciona na lista de commit
    db.session.add(doador1)
    db.session.add(doacao)
    db.session.commit() # Grava os dados no banco de dados

    todos = db.session.query(Pessoa).all() # Traz os dados dos funcionários e dos doadores que estão no banco para uma lista 

    doacoes = db.session.query(Doacao).all() # Traz os dados das doações que estão no banco para uma lista 
    
    # Imprime as informações dos funcionários e dos doadores
    print("")
    for p in todos:
        print(p)
        print(p.json())
        print("")

    # Imprime as informações das doações
    print("")
    for d in doacoes:
        print(d)
        print(d.json())
        print("")

    