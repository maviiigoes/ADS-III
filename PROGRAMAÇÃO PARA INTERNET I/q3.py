import requests
from bs4 import BeautifulSoup


url = input('Digite uma url: ')
termo_busca = input("Digite o termo buscado: ")


resposta = requests.get(url)
conteudo = resposta.content

soup = BeautifulSoup(conteudo, 'html.parser')
texto = soup.get_text()


for indice in range(len(texto)):
    if texto[indice:indice+len(termo_busca)] == termo_busca:
        print()
        
        print(texto[indice-20:indice]+ termo_busca + texto[indice+len(termo_busca):indice+len(termo_busca)+20]  )


# Exemplo de saída:


""" 
Digite uma url: https://g1.globo.com/                     
Digite o termo buscado: guerra

saída:

 2 horas'Cenário de guerra': repórteres do g1

 """


