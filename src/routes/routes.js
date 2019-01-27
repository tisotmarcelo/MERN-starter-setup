const express = require('express');
const router = express.Router();

// Se require el modelo definido con mongoose
const Task = require('../models/task');

// Listar las tareas
router.get('/', async (req, res) => {
  const tasks = await Task.find();
  console.log(tasks);
  res.json(tasks);
});

// Mostrar una única tarea
router.get('/:id', async (req, res) => {
  const task = await Task.findById(req.params.id);
  res.json(task);
});

// Agregar una tarea
router.post('/', async (req, res) => {

  // Obtener los datos enviados por el cliente
  const { title, description } = req.body;

  // Guarda una nueva tarea en la base de datos
  const task = new Task({title, description});
  await task.save();

  // Envía una respuesta
  res.json({status: 'Task Saved'});
});

// Actualizar una tarea
router.put('/:id', async (req, res) => {
  const { title, description } = req.body;
  const newTask = { title, description };
  await Task.findByIdAndUpdate(req.params.id, newTask);
  res.json({status: 'Task Updated'});
});

// Eliminar una tarea
router.delete('/:id', async (req, res) => {
  await Task.findByIdAndRemove(req.params.id);
  res.json({status: 'Task Deleted'});
});

module.exports = router;