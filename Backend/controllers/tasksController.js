const Tarea = require('../models/tasksModels');

// Obtener todos los Tareas
exports.getAllTareas = async (req, res) => {
  try {
    const tareas = await Tarea.findAll();
    res.json(tareas);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching tareas' });
  }
};

// Obtener un Tarea por ID
exports.getTareaById = async (req, res) => {
  try {
    const tarea = await Tarea.findByPk(req.params.id);
    if (tarea) {
      res.json(tarea);
    } else {
      res.status(404).json({ error: 'Tarea not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching tarea' });
  }
};

// Crear un nuevo tarea
exports.createTarea = async (req, res) => {
  try {
    const tarea = await Tarea.create(req.body);
    res.status(201).json(tarea);
  } catch (error) {
    res.status(400).json({ error: 'Error creating tarea' });
  }
};

// Actualizar un tarea existente
exports.updateTarea = async (req, res) => {
  try {
    const tarea = await Tarea.findByPk(req.params.id);
    if (tarea) {
      await tarea.update(req.body);
      res.json(tarea);
    } else {
      res.status(404).json({ error: 'Tarea not found' });
    }
  } catch (error) {
    res.status(400).json({ error: 'Error updating tarea' });
  }
};

// Eliminar un tarea
exports.deleteTarea = async (req, res) => {
  try {
    const tarea = await Tarea.findByPk(req.params.id);
    if (tarea) {
      await tarea.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Tarea not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error deleting tarea' });
  }
};