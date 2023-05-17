#include <iostream>
#include <vector>
using namespace std;

struct Node {
    int value;
    vector<Node*> children; // vetor de ponteiros para os filhos do nó
    
    Node(int val) : value(val) {} // constructor que inicializa um nó com um valor
};

void addChild(Node* parent, int value) {
    Node* newNode = new Node(value);
    parent->children.push_back(newNode);
}

void inorder(Node* node) {
    if (node == nullptr) return;

    for (Node* child : node->children) {
        inorder(child);
    }

    cout << node->value << " ";
}

void preorder(Node* node) {
    if (node == nullptr) return;

    cout << node->value << " "; // imprime o nó atual

    for (Node* child : node->children) {
        preorder(child);
    }
}

int main() {
    Node* root = new Node(10); // raiz
    addChild(root, 20); // filho esq
    addChild(root, 30); // filho dir
    addChild(root->children[0], 40); // adiciona 4 como filho do filho esquerdo
    addChild(root->children[0], 50);
    addChild(root->children[1], 60); // adiciona 6 como filho do filho direito

    cout << "Percurso in-order: ";
    inorder(root);
    cout << endl;

    cout << "Percurso pre-order: ";
    preorder(root);
    cout << endl;
}
