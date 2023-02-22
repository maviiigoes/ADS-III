import urllib.request
from PIL import Image

# URL a ser baixada
img = input("Digite a url da imagem a ser baixada: ")

nome = input("Digite o nome você gostaria de salvar a imagem  : ")


urllib.request.urlretrieve(img, nome)


img = Image.open(nome)
img.show()


#EXEMPLO UTILIZADO:

""" 
Digite a url da imagem a ser baixada: https://th.bing.com/th/id/OIP.Mr0xsAusI3rjZbnwtytn6gAAAA?pid=ImgDet&rs=1
Digite o nome você gostaria de salvar a imagem : cavalo.jpg
"""