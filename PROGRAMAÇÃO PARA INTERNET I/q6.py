import requests
from bs4 import BeautifulSoup

url = 'https://www.meutimao.com.br/tabela-de-classificacao/campeonato_brasileiro/'
response = requests.get(url)

soup = BeautifulSoup(response.content, 'html.parser')

tabela = soup.find('div', attrs= {'class':"conteudo_tabela"})

print(tabela)

