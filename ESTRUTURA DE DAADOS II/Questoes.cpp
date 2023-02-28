#include <stdio.h>
#include <stdlib.h>
#include <iostream>

using namespace std;

#define fmt "%d";
typedef int Item;

typedef struct arv {
    Item item;
    struct arv *dir;
    struct arv *esq;
} Arv;

Arv* inserir(Arv *root, int num) {
    if(root == NULL) {
        Arv *n = (Arv *)malloc(sizeof(Arv));
        n->item = num;
        n->esq = NULL;
        n->dir = NULL;

        return n;
    }
    else {
        if(num < root->item)
            root->esq = inserir(root->esq, num);
        else
            root->dir = inserir(root->dir, num);
        return root;
    }
}

//--------Q 13.2--------
int QtdNos(Arv *root) {
    if(root == NULL) return 0;
    else 
        return 1 + QtdNos(root->esq) + QtdNos(root->dir);
    
}

//--------Q 13.3--------
int QtdFolhas(Arv *root) {
    if(root == NULL) return 0;
    else if(root->esq == NULL && root->dir == NULL) return 1;
    else 
        return QtdFolhas(root->esq) + QtdFolhas(root->dir);
}

//--------Q 13.4--------
int Altura(Arv *root) {
    if(root == NULL) return -1;
    else {
        int e = Altura(root->esq);
        int d = Altura(root->dir);
        if(e> d) return e + 1;
        else return d + 1;
    }
}

//--------Q 13.5--------
Arv* buscar(Arv *root, int valor) {
    while(root) {
        if(valor < root->item)
            root = root->esq;
        else if(valor > root->item)
            root = root->dir;
        else 
            return root;
    }
    return NULL;
}

void Imprimir(Arv *root) {
    if(root) {
        cout << "<";
        Imprimir(root->esq);
        cout << root->item;
        Imprimir(root->dir);
        cout << ">";
    }

}

int main() {
    Arv *busca, *root = NULL;

    root = inserir(root,7), inserir(root, 6), inserir(root, 4), inserir(root,31);

    Imprimir(root);

    busca = buscar(root, 4);
    if(busca)
        printf("\nValor: %d\n", busca->item);
    else
        printf("\nValor não encontrado\n!");

    cout << "Altura: " << Altura(root) << endl;
    cout << "Quantidade de nos: " << QtdNos(root) << endl;
    cout << "Quantidade de folhas: " << QtdFolhas(root) << endl;
}

/*
----------- Saída -----------
<<<4>6>7<31>>
Valor encontrado: 4
Altura: 2
Quantidade de nos: 4
Quantidade de folhas: 2
*/