

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



 
