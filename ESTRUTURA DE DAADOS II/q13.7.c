#include <stdio.h>
#include <stdlib.h>


typedef struct Node {
    int value;
    struct Node* left;
    struct Node* right;
} Node;


Node* criarNO(int value) {
    Node* newNode = (Node*) malloc(sizeof(Node));
    newNode->value = value;
    newNode->left = NULL;
    newNode->right = NULL;
    return newNode;
}


int EhIgual(Node* root1, Node* root2) {
    
    if (root1 == NULL && root2 == NULL) {
        return 1;
    }
    
    if (root1 == NULL || root2 == NULL) {
        return 0;
    }
    
    if (root1->value != root2->value) {
        return 0;
    }
    
    return isEqual(root1->left, root2->left) && isEqual(root1->right, root2->right);
}

int main() {
    
    Node* root1 = criarNO(1);
    root1->left = criarNO(2);
    root1->right = criarNO(3);
    root1->left->left = criarNO(4);
    root1->left->right = criarNO(5);

    Node* root2 = criarNO(1);
    root2->left = criarNO(2);
    root2->right = criarNO(3);
    root2->left->left = criarNO(4);
    root2->left->right = criarNO(5);

   
    if (isEqual(root1, root2)) {
        printf("As árvores são iguais.\n");
    } else {
        printf("As árvores são diferentes.\n");
    }

    return 0;
}
