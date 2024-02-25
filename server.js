// server.js

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path'); 
// MongoDB 연결
mongoose.connect('mongodb+srv://test:123123123@cluster0.bdulsxi.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));


// Express 미들웨어 및 라우트 설정
app.use( '/', express.static( path.join(__dirname, 'dist') ));  

// Todo 모델 정의
const Todo = mongoose.model('Todo', { text: String });

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'dist/index.html'));  
})

// Todo 생성 API
app.post('/api/todos', async (req, res) => {
    const todo = new Todo({ text: req.body.text });
    await todo.save();
    res.json(todo);
});

// Todo 목록 조회 API
app.get('/api/todos', async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
});

// Todo 삭제 API
app.delete('/api/todos/:id', async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id);
    res.status(204).send();
});

// 서버 시작
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
