/*O algoritmo é implementado de forma correta.
Pois ele consegue retornar ao nó atual a partir do seu anterior, sem utilizar pilhas.
*/

/*
void MorrisPreorder(){
    ArvoreNo<T> *p=root, *tmp;
    while (p!=0){
        if (p->left==0){
            visit(p);
            p=p->right;
        }
        else{
            tmp = p->left;
            while (tmp->right!=0 && tmp->right!=p)
                tmp=tmp->right;
                if (tmp->right==0){
                    visit(p);                    
                    tmp->right=p;
                    p=p->left;
                }
                else{                    
                    tmp->right=0;
                    p=p->right;    
                }  }
        } }
*/