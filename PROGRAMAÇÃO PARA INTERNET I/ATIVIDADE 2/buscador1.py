
import requests
from bs4 import BeautifulSoup
import requests_cache
    
requests_cache.install_cache('banco')
palavra = input("Qual palavra você  deseja encontrar? ")
profundidade = int(input("Qual a profundidade da busca? "))
link = input("Digite o link: ") 

def Buscando(texto_site):
    y = []
    for indice in range(len(texto_site)):
        if texto_site[indice:indice+len(palavra)] == palavra:
         frase = texto_site[indice-20:indice] + palavra + texto_site[indice+len(palavra):indice+len(palavra)+20]
         y.insert(0 ,frase)
    print("Menções da palavra:")
    print(y)
    print()

def search( palavra , link , profundidade : int):

    
    url = requests.get(link)
    conteudo = url.text
    site = BeautifulSoup(conteudo,'html.parser')
    texto_site = site.get_text()

#Está buscando as ocorrencias 
    Buscando(texto_site)
   
#extrair links 
    x = []
    for link in site.find_all("a"):
        href = link['href']
        if(href.startswith('http')): 
            x.insert(0,href)
    print(f" Qtd de links: {len(x)}")
    print( )
    print(x)
    print( )

 
    
    acessados = {}
    
    for link in x:
      if(profundidade>0 and link  not in  acessados ):
        url = requests.get(link)
        conteudo = url.content
        site = BeautifulSoup(conteudo, 'html.parser')
        texto_site = site.get_text()
        Buscando(texto_site)
        acessados.append(link)
    



i = 0
while (i  < profundidade): 
    print (i)
    print(search(palavra,link,profundidade))
    i = i + 1

       
       




#http://127.0.0.1:5500/teste.html

#https://www.letras.mus.br/charlie-brown-jr/6004/


#https://estudeconosco.cevcolegio.com.br/matricula
#2
