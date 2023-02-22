from googlesearch import search

q = input("Faça sua q: ")

for resultados in search (q,lang = 'port', num = 10, start= 0, stop= 10, pause = 2):
    print(resultados)