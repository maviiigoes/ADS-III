import requests
from bs4 import BeautifulSoup

response = requests.get('https://g1.globo.com/')

conteudo = response.content

site = BeautifulSoup(conteudo, 'html.parser')

buscar = site.findAll ('div', attrs={'class': 'feed-post-body'})

for noticia in buscar:
    titulo = noticia.find('a', attrs= {'class': 'feed-post-link gui-color-primary gui-color-hover'} )

    print (titulo.text)
    print(titulo['href'])
    print()
   
