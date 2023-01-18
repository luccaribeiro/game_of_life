# Imports
import numpy as np
from time import sleep

# Variaveis
celulas_vivas = True
tamanho = int(input("Digite o número que será a altura e largura da sua matriz: "))
matriz = np.zeros((tamanho, tamanho), dtype=np.int64)
game = True
matriz2 = matriz.copy()
contador = 0

# Adicionando celulas_vivas de acordo com a vontade do usuario
while celulas_vivas:
    resp = input("Inserir celulas vivas? [Digite 'N' se não quiser]: ").upper()
    if resp == 'N':
        break
    linha = int(input("Linha: "))
    coluna = int(input("Coluna: "))
    matriz[linha][coluna] = 1

# Funções auxiliares
def contador_de_vizinhos(linha, coluna, matriz):
    vizinhos = []

    if linha == 0 and coluna == 0:
        vizinhos.append(matriz[linha][coluna+1])
        vizinhos.append(matriz[linha+1][coluna+1])
        vizinhos.append(matriz[linha+1][coluna])
    elif linha == tamanho-1 and coluna == 0:
        vizinhos.append(matriz[linha][coluna+1])
        vizinhos.append(matriz[linha-1][coluna])
        vizinhos.append(matriz[linha-1][coluna+1])
    elif linha == tamanho-1 and coluna == tamanho-1:
        vizinhos.append(matriz[linha-1][coluna])
        vizinhos.append(matriz[linha][coluna-1])
        vizinhos.append(matriz[linha-1][coluna-1])
    elif linha == 0 and coluna == tamanho-1:
        vizinhos.append(matriz[linha+1][coluna])
        vizinhos.append(matriz[linha][coluna-1])
        vizinhos.append(matriz[linha+1][coluna-1])

    elif linha == 0:
        vizinhos.append(matriz[linha+1][coluna]) # baixo
        vizinhos.append(matriz[linha+1][coluna-1]) # diagonal esquerda
        vizinhos.append(matriz[linha+1][coluna+1]) # diagonal direta
        vizinhos.append(matriz[linha][coluna-1]) # esquerda
        vizinhos.append(matriz[linha][coluna+1]) # direita
    elif linha == tamanho-1:
        vizinhos.append(matriz[linha-1][coluna]) #  cima
        vizinhos.append(matriz[linha][coluna-1]) # esquerda
        vizinhos.append(matriz[linha][coluna+1]) # direita
        vizinhos.append(matriz[linha-1][coluna-1]) # diagonal esquerda
        vizinhos.append(matriz[linha-1][coluna+1]) # diagonal direita
    elif coluna == 0:
        vizinhos.append(matriz[linha-1][coluna]) # cima
        vizinhos.append(matriz[linha+1][coluna]) # baixo
        vizinhos.append(matriz[linha][coluna+1]) # direita
        vizinhos.append(matriz[linha-1][coluna+1]) # diagonal cima
        vizinhos.append(matriz[linha+1][coluna+1]) # diagonal baixo
    elif coluna == tamanho-1:
        vizinhos.append(matriz[linha-1][coluna]) # cima
        vizinhos.append(matriz[linha+1][coluna]) # baixo
        vizinhos.append(matriz[linha][coluna-1]) # esquerda
        vizinhos.append(matriz[linha-1][coluna-1]) # diagonal cima
        vizinhos.append(matriz[linha+1][coluna-1]) # diagonal baixo

    else:
        vizinhos.append(matriz[linha][coluna+1]) # cima
        vizinhos.append(matriz[linha][coluna-1]) # baixo
        vizinhos.append(matriz[linha-1][coluna]) # esquerda
        vizinhos.append(matriz[linha+1][coluna]) # direita
        vizinhos.append(matriz[linha-1][coluna-1]) # diagonal-esquerda-cima
        vizinhos.append(matriz[linha+1][coluna-1]) # diagonal-esquerda-baixo
        vizinhos.append(matriz[linha-1][coluna+1]) #diagonal-direita-cima
        vizinhos.append(matriz[linha+1][coluna+1]) # diagonal-direita-baixo

    celula = matriz[linha][coluna]
    numeros_vizinhos = vizinhos.count(1)
    if celula == 0 and numeros_vizinhos == 3:
        matriz2[linha][coluna] = 1
    elif celula == 1 and numeros_vizinhos == 2 or celula == 1 and numeros_vizinhos == 3:
        matriz2[linha][coluna] = 1
    else:
        matriz2[linha][coluna] = 0


# Game
while game:
    contador += 1
    print(f"RODADA {contador}")
    print(matriz)
    sleep(4)
    for linha in range(tamanho):
        for coluna in range(tamanho):
            contador_de_vizinhos(linha, coluna, matriz)
    matriz = matriz2.copy()
