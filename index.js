const express = require('express');
const mongoose = require('mongoose');

const app = express();
const Todo = require('./models/todo');

require('dotenv').config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Database connected');
});

app.post('/api/new', (req, res) => {
  const newTodo = new Todo(req.body);
  newTodo.save();
});

app.get('/api/find', async (req, res) => {
  const todo = await Todo.find();
  res.send(todo);

  // console.log(todo);
});

app.listen(5000, () => {
  console.log('Serving on port 5000');
});
