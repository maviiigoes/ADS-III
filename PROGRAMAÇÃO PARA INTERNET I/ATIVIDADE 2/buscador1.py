import requests
from bs4 import BeautifulSoup
import requests_cache
from urllib.parse import urljoin
import urllib3
urllib3.disable_warnings()

requests_cache.install_cache('banco')

class pag:
   def __init__(self,url) :
      self.url = url
      self.links = []
      self.resultados = []

visitadas = {}
contVisitas = {}



def baixarPagina(link):
    url = requests.get(link, verify=False)
    site = BeautifulSoup(url.content,'html.parser')
    return site

def Buscando(palavra,site):
    texto_site = site.text
    y = []
    for indice in range(len(texto_site)):
        if texto_site[indice:indice+len(palavra)] == palavra:
         frase = texto_site[indice-20:indice] + palavra + texto_site[indice+len(palavra):indice+len(palavra)+20]
         y.insert(0 ,frase)

    return y
    

def contaRepeticoes(url):
    if url not in contVisitas:
        contVisitas[url] = 1
    else :
        contVisitas[url] += 1

#extrair links 
def ExtrairLinks(site,link):
    x = []

    #contaRepeticoes(link)

    for l in site.find_all("a"):
        href = l['href']
        #contaRepeticoes(href)
        if(href.startswith('http')): 
            x.append(href)
        else:
            x.append(urljoin(link, href))

    #print(x)
        
    return x


def search( link, palavra ,profundidade):
    print('Acessando:', link)
    site = baixarPagina(link)
    links = ExtrairLinks(site,link)
    resultado = Buscando(palavra, site)

    pagina = pag(link)
    pagina.links = links
    pagina.resultados = resultado


    if link  not in visitadas:
        visitadas[link] = pagina
 
       
    if profundidade > 0:
        for l in pagina.links:
            contaRepeticoes(l)

            if l not in visitadas:
                search( l ,palavra , profundidade - 1)

    
def main():
    palavra = input("Qual palavra você  deseja encontrar? ")
    profundidade = int(input("Qual a profundidade da busca? "))
    link = input("Digite o link: ") 

    contaRepeticoes(link)
    
    
    search( link, palavra ,profundidade)
    #for ocorrencias in visitadas.items():
    #    if(len(pagina.resultados))

    for link, pagina in visitadas.items():
        print ("---------- Pág visitada ----------")
        print (pagina.url)
        print ("---------- -------- ----------")
        print (f"Qtd ocorrencias:{len(pagina.resultados)} ")
        
        print ("------Ocorrencias da palavra chave -------- ")
        if pagina.resultados :
            print (pagina.resultados)
        else:
            print("Termo não encontrado!")
        print()
        print()

    contVisitasOrdenado = {chave: valor for chave, valor in sorted(contVisitas.items(), key=lambda item: item[1], reverse=True)} 

    for chave, valor in contVisitasOrdenado.items():
        print(chave, ' ', valor)

if __name__ == '__main__':
    main()



#http://127.0.0.1:5500/teste.html

#https://www.letras.mus.br/charlie-brown-jr/6004/


#https://estudeconosco.cevcolegio.com.br/matricula
#2
