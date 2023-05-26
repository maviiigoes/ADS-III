import express from "express"
import MicroblogPersistente, {Post } from "./Q1"

const Microblog_repository = new  MicroblogPersistente()
const app = express()
app.get('/',(request, response)=>{
    const posts = Microblog_repository.retrieveAll()
    response.json (posts)
})
app.post('/post',(request, response)=>{
    const post = request.body
     Microblog_repository.create(post)
    response.json({message: 'Post created successfully'} )
})
app.get('/post/:id',(request, response)=>{
    const id = parseInt(request.params.id)
    const post= Microblog_repository.retrieve(id)
    if(post){

        response.send(post).status(201)
    }else{
        response.status(404).json({message:'Post not found'})
    }
});


app.get('/posts', async(request, response)=>{
    const post = request.body
     Microblog_repository.create(post)
    response.json({message: 'Post created successfully'} )
})

app.get('/post/:id',(request, response)=>{
    const id = parseInt(request.params.id);
    const post = Microblog_repository.retrieve(id);
    if (post) {
      response.json(post);
    } else {
      response.status(404).json({ message: 'Could not find if post' });
    }
})

app.get('/posts', async(request, response)=>{
    const posts = Microblog_repository.retrieveAll()
    response.json(posts )
})

app.put('/posts/:id', (request, response) => {
    const id = parseInt(request.params.id);
    const post: Post = request.body;
    post.id = id;
    Microblog_repository.update(post);
    response.json({ message: 'Post atualizado!' });
  });

app.patch('/post/:id', async(request, response)=>   {
    const id= parseInt(request.params.id);
    const { text, likes } = request.body;
  
    const post = await Microblog_repository.retrieve(id);
    if (!post) {
      return response.status(404).json({ message: 'Post não encontrado!' });
    }
    
    const updatedPost: Post = {
        id: post.id,
        text: text || post.text,
        likes: likes !== undefined ? likes : post.likes
      };
    
      Microblog_repository.update(updatedPost);
      response.sendStatus(200);
    }
    );


app.patch('/posts/:id/like',async(request, response) => {
    const id = parseInt(request.params.id);

    const post =  await Microblog_repository.retrieve(id);
    if (!post) {
        return response.status(404).json({ message: 'Post não encontrado!' });
    }

    const updatedPost: Post = {
        id: post.id,
        text: post.text,
        likes: post.likes + 1
    };

    Microblog_repository.update(updatedPost);
    response.sendStatus(200);
});

const port = 4000

app.listen(port,()=>console.log(`server running in http://localhost:${port}`))




