

export interface Post {
   id: number;
   text:string;
   likes: number

  }

  export class Microblog {
    posts: Post[]
    constructor() {
      this.posts = [];
    }
  
    create(post:Post):void {
      this.posts.push(post);
    }
  
    retrieve(id: number): Post| undefined {
      return this.posts.find(post => post.id === id);
    }
  
    update(post:Post) {
      const index = this.posts.findIndex(post => post.id === post.id);
      if (index !== -1) {
        this.posts[index] = post;
      }
    }
  
    delete(id:number) {
      const index = this.posts.findIndex(post => post.id === id);
      if (index !== -1) {
        this.posts.splice(index, 1);
      }
    }
  
    retrieveAll() {
      return this.posts;
    }
  }



export default class MicroblogPersistente{
  db: sqlite3.Database;
  constructor() {
    this.db = new sqlite3.Database('microblog.db', (error) => {
      if (error) {
        console.error('Erro ao abrir o banco de dados:', error.message);
      } else {
        console.log('Conexão com o banco de dados estabelecida com sucesso!');
        this.createTable();
      }
    });
  }

  createTable() {
    const query = `
      CREATE TABLE IF NOT EXISTS posts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        text TEXT,
        likes INTEGER
      )
    `;

    this.db.run(query, (error) => {
      if (error) {
        console.error('Erro ao criar tabela:', error.message);
      } else {
        console.log('Tabela criada com sucesso!');
      }
    });
  }

  create(post: Post): void {
    const query = 'INSERT INTO posts (text, likes) VALUES (?, ?)';
    this.db.run(query, [post.text, post.likes], (error) => {
      if (error) {
        console.error('Erro ao inserir post:', error.message);
      } else {
        console.log('Post inserido com sucesso!');
      }
    });
  }

  retrieve(id: number): Promise<Post | undefined> {
    const query = 'SELECT * FROM posts WHERE id = ?';

    return new Promise<Post | undefined>((resolve, reject) => {
      this.db.get(query, [id], (error, row) => {
        if (error) {
          console.error('Erro ao recuperar post:', error.message);
          reject(error);
        } else {
          resolve(row as Post);
        }
      });
    });
  }

  update(post: Post): void {
    const query = 'UPDATE posts SET text = ?, likes = ? WHERE id = ?';
    this.db.run(query, [post.text, post.likes, post.id], (error) => {
      if (error) {
        console.error('Erro ao atualizar post:', error.message);
      } else {
        console.log('Post atualizado com sucesso!');
      }
    });
  }

  delete(id: number): void {
    const query = 'DELETE FROM posts WHERE id = ?';
    this.db.run(query, [id], (error) => {
      if (error) {
        console.error('Erro ao excluir post:', error.message);
      } else {
        console.log('Post excluído com sucesso!');
      }
    });
  }

  retrieveAll(): Promise<Post[]> {
    const query = 'SELECT * FROM posts';

    return new Promise<Post[]>((resolve, reject) => {
      this.db.all(query, (error, rows) => {
        if (error) {
          console.error('Erro ao recuperar todos os posts:', error.message);
          reject(error);
        } else {
          resolve(rows as Post[]);
        }
      });
    });
  }
}
module.exports = MicroblogPersistente

 




 
