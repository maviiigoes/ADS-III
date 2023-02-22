import requests
from bs4 import BeautifulSoup

response = requests.get('https://g1.globo.com/pi/piaui/')

conteudo = response.text

site = BeautifulSoup(conteudo, 'html.parser')

tag = input("Qual tag vc deseja ver?")



for ocorrencias in site.find_all(tag):
    print(ocorrencias)
    
