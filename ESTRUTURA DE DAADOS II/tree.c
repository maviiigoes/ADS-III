#include <stdio.h>
#include <stdlib.h>

struct item{
    int cod;

};

typedef struct item Item;

struct node{
    Item item;
    struct node *left;
    struct node *right;


};

typedef struct node Node;

Node *initialize(){
    return NULL;
};

Item itemCreate(int cod){
    Item item;
    item.cod = cod;
    return item;
};

Node *insert (Node *root, Item x){
    if(root == NULL){
        Node *aux = (Node *)malloc(sizeof(Node));
        aux -> item = x;
        aux-> left = NULL;
        aux-> right = NULL;
        return aux;
    }
    else{
        if(x.cod>root ->item.cod){
            root ->right = insert(root ->right, x);
        }else if(x.cod< root->item.cod ){
            root-> left = insert(root->left,x);
        }
    } 
    return root;
}


void treeprint(Node *root){
    if(root != NULL){
        printf("%d", root -> item.cod);
        treeprint(root->left);
        treeprint(root->right);

    }
}

void treeFree(Node *root){
    if(root != NULL){
        printf("%d", root -> item.cod);
        treeFree(root->left);
        treeFree(root->right);
        free(root);

    }
}

int main(){

    Node *root = NULL;
    root = insert(root, itemCreate( 7));
    root = insert(root, itemCreate( 6));
    root = insert(root, itemCreate( 20));
    root = insert(root, itemCreate( 2));
    root = insert(root, itemCreate( 3));

    treeprint(root);
    printf ("\n");
    treeFree(root);
    return 0;
}
