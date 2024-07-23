'use client';

import React, { useState } from 'react';

// Define el tipo de datos de una tarea
interface Task {
  id: number;
  name: string;
  description: string;
  date: string;
  time: string;
}

// Datos de ejemplo para las tareas
const initialTasks: Task[] = [
  { id: 1, name: 'Tarea 1', description: 'Descripción de la tarea 1', date: '2024-07-23', time: '10:00' },
  { id: 2, name: 'Tarea 2', description: 'Descripción de la tarea 2', date: '2024-07-24', time: '12:00' },
  { id: 3, name: 'Tarea 3', description: 'Descripción de la tarea 3', date: '2024-07-25', time: '15:00' },
];

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [editTask, setEditTask] = useState<Task | null>(null);
  const [formData, setFormData] = useState<{ name: string; description: string; date: string; time: string }>({
    name: '',
    description: '',
    date: '',
    time: '',
  });

  const handleEdit = (task: Task) => {
    setEditTask(task);
    setFormData({
      name: task.name,
      description: task.description,
      date: task.date,
      time: task.time,
    });
  };

  const handleDelete = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    if (editTask) {
      setTasks(tasks.map(task =>
        task.id === editTask.id ? { ...task, ...formData } : task
      ));
      setEditTask(null);
      setFormData({
        name: '',
        description: '',
        date: '',
        time: '',
      });
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Lista de Tareas</h1>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="py-3 px-4 border-b">Nombre</th>
            <th className="py-3 px-4 border-b">Descripción</th>
            <th className="py-3 px-4 border-b">Fecha</th>
            <th className="py-3 px-4 border-b">Hora</th>
            <th className="py-3 px-4 border-b">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td className="py-3 px-4 border-b">{task.name}</td>
              <td className="py-3 px-4 border-b">{task.description}</td>
              <td className="py-3 px-4 border-b">{task.date}</td>
              <td className="py-3 px-4 border-b">{task.time}</td>
              <td className="py-3 px-4 border-b flex space-x-2">
                <button
                  onClick={() => handleEdit(task)}
                  className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDelete(task.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editTask && (
        <div className="mt-8 p-6 bg-white border border-gray-200 rounded shadow-md">
          <h2 className="text-2xl font-bold mb-4">Modificar Tarea</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Nombre de la Tarea
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Nombre de la tarea"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                Descripción
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Descripción de la tarea"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
                Fecha
              </label>
              <input
                id="date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="time">
                Hora
              </label>
              <input
                id="time"
                name="time"
                type="time"
                value={formData.time}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={handleUpdate}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Actualizar
              </button>
              <button
                type="button"
                onClick={() => setEditTask(null)}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default TaskList;
