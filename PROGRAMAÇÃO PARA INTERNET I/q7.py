import requests

cep = input("Digite o cep: ")

link= f'https://viacep.com.br/ws/{cep}/json/'

endereco= requests.get(link)




print(endereco.json())


#EXEMPLO DE SAÍDA:

""" 
Digite o cep: 64000040   
{'cep': '64000-040', 'logradouro': 'Praça da Liberdade', 'complemento': '', 'bairro': 'Centro', 'localidade': 'Teresina', 'uf': 'PI', 'ibge': '2211001', 'gia': '', 'ddd': '86', 'siafi': '1219'}
 """