#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int value;
    struct Node* left;
    struct Node* right;
} Node;


Node* criarNo(int value) {
    Node* newNode = (Node*) malloc(sizeof(Node));
    newNode->value = value;
    newNode->left = NULL;
    newNode->right = NULL;
    return newNode;
}


int isStrictlyBinary(Node* root) {
    
    if (root == NULL || (root->left == NULL && root->right == NULL)) {
        return 1;
    }
    
    if (root->left == NULL || root->right == NULL) {
        return 0;
    }
    
    return isStrictlyBinary(root->left) && isStrictlyBinary(root->right);
}

int main() {
    
    Node* root = criarNo(1);
    root->left = criarNo(2);
    root->right = criarNo(3);
    root->left->left = criarNo(4);
    root->left->right = criarNo(5);
    root->right->left = criarNo(6);
    root->right->right = criarNo(7);

    // Verifica se a árvore é estritamente binária
    if (isStrictlyBinary(root)) {
        printf("A árvore é estritamente binária.\n");
    } else {
        printf("A árvore não é estritamente binária.\n");
    }

    return 0;
}
