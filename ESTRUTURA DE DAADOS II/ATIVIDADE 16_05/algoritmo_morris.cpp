#include <iostream>
using namespace std;

struct ArvoreNo {
    int valor;
    ArvoreNo* esq;
    ArvoreNo* dir;

    ArvoreNo(int val) : valor(val), esq(nullptr), dir(nullptr) {}
};

void visit(ArvoreNo* node) {
    cout << node->valor << " ";
}

void MorrisInorder(ArvoreNo* root) {
    ArvoreNo* p = root;

    while (p != nullptr) {
        if (p->esq == nullptr) {
            visit(p);
            p = p->dir;
        } else {
            ArvoreNo* tmp = p->esq;
            while (tmp->dir != nullptr && tmp->dir != p) {
                tmp = tmp->dir;
            }
            if (tmp->dir == nullptr) {
                tmp->dir = p;
                p = p->esq;
            } else {
                visit(p);
                tmp->dir = nullptr;
                p = p->dir;
            }
        }
    }
}

void MorrisPreorder(ArvoreNo* root) {
    ArvoreNo* p = root;

    while (p != nullptr) {
        if (p->esq == nullptr) {
            visit(p);
            p = p->dir;
        } else {
            ArvoreNo* tmp = p->esq;
            while (tmp->dir != nullptr && tmp->dir != p)
                tmp = tmp->dir;
            if (tmp->dir == nullptr) {
                visit(p);
                tmp->dir = p;
                p = p->esq;
            } else {
                tmp->dir = nullptr;
                p = p->dir;
            }
        }
    }
}

ArvoreNo* addNode(ArvoreNo* node, int value) {
    ArvoreNo* newNode = new ArvoreNo(value);
    if (node != nullptr) {
        if (node->esq == nullptr) {
            node->esq = newNode;
        } else {
            node->dir = newNode;
        }
    }
    return newNode;
}

int main() {
    ArvoreNo* root = addNode(nullptr, 10);
    ArvoreNo* node2 = addNode(root, 20);
    ArvoreNo* node3 = addNode(root, 30);
    ArvoreNo* node4 = addNode(node2, 40);
    ArvoreNo* node5 = addNode(node2, 50);
    ArvoreNo* node6 = addNode(node3, 60);

    cout << "pré-ordem: ";
    MorrisPreorder(root);
    cout << endl;

    cout << "in-ordem: ";
    MorrisInorder(root);
    cout << endl;

    return 0;
}