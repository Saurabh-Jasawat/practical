const express = require('express');
const app = express();
app.use(express.json());
let students = [];
let nextId = 1;

app.post('/students', (req, res) => {
  const { name, marks } = req.body;
  if (!name || marks === undefined) {
    return res.status(400).json({ error: 'name and marks required' });
  }
  if (marks < 0) {
    return res.status(400).json({ error: 'marks shoukd be >= 0' });
  }
  const student = { id: nextId++, name, marks };
  students.push(student);
  res.status(201).json(student);
});

app.get('/students', (req, res) => {
  res.json(students);//data fetch
});

app.put('/students/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find(s => s.id === id);
  
  if (!student) {
    return res.status(404).json({ error: 'Student not found' });
  }
  
  const { name, marks } = req.body;
  
  if (name) student.name = name;
  if (marks !== undefined) {
    if (marks < 0) {
      return res.status(400).json({ error: 'marks should be >= 0' });
    }
    student.marks = marks;
  }
  
  res.json(student);
});

app.delete('/students/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = students.findIndex(s => s.id === id);
  
  if (index === -1) {
    return res.status(404).json({ error: 'Student not found' });
  }
  
  const deleted = students.splice(index, 1);
  res.json(deleted[0]);
});

app.listen(5000, () => console.log('Server started http://localhost:5000'));