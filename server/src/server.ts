import express from 'express';

const app = express();

app.get('/user', (request, response)=>{
  response.json([
    'Rafael,',
    'Cecília',
    'Marina'    
  ])
  
});

app.listen(3333);