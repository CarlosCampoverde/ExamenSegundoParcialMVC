// pages/tasks.tsx
import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import styles from '../styles/Task.module.css';

Modal.setAppElement('#__next'); // Para accesibilidad, especifica el elemento raíz de tu aplicación

interface Task {
  id: number;
  descripcion: string;
  estado: string;
  fecha_creacion: Date;
  fecha_vencimiento: Date;
  usuario_id: number;
}

const TasksPage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<{
    descripcion: string;
    estado: string;
    fecha_creacion: Date;
    fecha_vencimiento: Date;
    usuario_id: number;
  }>({
    descripcion: '',
    estado: '',
    fecha_creacion: new Date(),
    fecha_vencimiento: new Date(),
    usuario_id: 0
  });
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [successModalIsOpen, setSuccessModalIsOpen] = useState(false);
  const [deleteSuccessModalIsOpen, setDeleteSuccessModalIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/tareas/ver');
      const data = await response.json();
      setTasks(data.map((task: any) => ({
        ...task,
        fecha_creacion: new Date(task.fecha_creacion), // Convertir cadena a Date
        fecha_vencimiento: new Date(task.fecha_vencimiento) // Convertir cadena a Date
      })));
    } catch (error) {
      console.error('Failed to fetch tasks:', error);
    }
  };

  const handleAddTask = async () => {
    try {
      await fetch('http://localhost:3000/api/tareas/crear', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          descripcion: newTask.descripcion,
          estado: newTask.estado,
          fecha_creacion: newTask.fecha_creacion.toISOString(), // Convertir Date a cadena ISO
          fecha_vencimiento: newTask.fecha_vencimiento.toISOString(), // Convertir Date a cadena ISO
          usuario_id: newTask.usuario_id
        }),
      });
      setNewTask({
        descripcion: '',
        estado: '',
        fecha_creacion: new Date(),
        fecha_vencimiento: new Date(),
        usuario_id: 0
      });
      fetchTasks();
      closeModal();
      setSuccessModalIsOpen(true); // Mostrar modal de éxito
    } catch (error) {
      console.error('Failed to add task:', error);
    }
  };

  const handleEditTask = async () => {
    if (editingTask) {
      try {
        await fetch(`http://localhost:3000/api/tareas/editar/${editingTask.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...editingTask,
            fecha_creacion: newTask.fecha_creacion.toISOString(), // Convertir Date a cadena ISO
            fecha_vencimiento: newTask.fecha_vencimiento.toISOString(), // Convertir Date a cadena ISO
            usuario_id: newTask.usuario_id
          }),
        });
        setEditingTask(null);
        fetchTasks();
        closeModal();
        setSuccessModalIsOpen(true); // Mostrar modal de éxito
      } catch (error) {
        console.error('Failed to update task:', error);
      }
    }
  };

  const handleDeleteTask = async (id: number) => {
    try {
      await fetch(`http://localhost:3000/api/tareas/eliminar/${id}`, {
        method: 'DELETE',
      });
      fetchTasks();
      setDeleteSuccessModalIsOpen(true); // Mostrar modal de éxito de eliminación
    } catch (error) {
      console.error('Failed to delete task:', error);
    }
  };

  const openModal = (task?: Task) => {
    setEditingTask(task || null);
    setIsEditing(!!task);
    setModalIsOpen(true);
    if (task) {
      setNewTask({
        descripcion: task.descripcion,
        estado: task.estado,
        fecha_creacion: new Date(task.fecha_creacion), // Convertir cadena a Date
        fecha_vencimiento: new Date(task.fecha_vencimiento), // Convertir cadena a Date
        usuario_id: task.usuario_id
      });
    } else {
      setNewTask({
        descripcion: '',
        estado: '',
        fecha_creacion: new Date(),
        fecha_vencimiento: new Date(),
        usuario_id: 0
      });
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setEditingTask(null);
    setNewTask({
      descripcion: '',
      estado: '',
      fecha_creacion: new Date(),
      fecha_vencimiento: new Date(),
      usuario_id: 0
    });
  };

  const closeSuccessModal = () => {
    setSuccessModalIsOpen(false);
  };

  const closeDeleteSuccessModal = () => {
    setDeleteSuccessModalIsOpen(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Gestor de Tareas</h1>
      </div>
  
      <div className={styles.section}>
        <button className={`${styles.button} ${styles.addButton}`} onClick={() => openModal()}>Crear nueva Tarea</button>
      </div>
  
      <div className={styles.section}>
        <h2>Lista de Tareas</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>#</th>
              <th>Descripcion</th>
              <th>Estado</th>
              <th>Fecha de Creación</th>
              <th>Fecha de Vencimiento</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.descripcion}</td>
                <td>{task.estado}</td>
                <td>{new Date(task.fecha_creacion).toLocaleDateString()}</td>
                <td>{new Date(task.fecha_vencimiento).toLocaleDateString()}</td>
                <td>
                  <button className={`${styles.button} ${styles.editButton}`} onClick={() => openModal(task)}>Editar</button>
                  <button className={`${styles.button} ${styles.deleteButton}`} onClick={() => handleDeleteTask(task.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <h2>{isEditing ? 'Editar Tarea' : 'Crear nueva Tarea'}</h2>
        <input
          type="text"
          className={styles.inputField}
          placeholder="Descripción"
          value={newTask.descripcion}
          onChange={(e) => setNewTask({ ...newTask, descripcion: e.target.value })}
        />
        <input
          type="text"
          className={styles.inputField}
          placeholder="Estado"
          value={newTask.estado}
          onChange={(e) => setNewTask({ ...newTask, estado: e.target.value })}
        />
        <input
          type="date"
          className={styles.inputField}
          value={newTask.fecha_creacion.toISOString().split('T')[0]} // Mostrar solo la parte de la fecha
          onChange={(e) => setNewTask({ ...newTask, fecha_creacion: new Date(e.target.value) })}
        />
        <input
          type="date"
          className={styles.inputField}
          value={newTask.fecha_vencimiento.toISOString().split('T')[0]} // Mostrar solo la parte de la fecha
          onChange={(e) => setNewTask({ ...newTask, fecha_vencimiento: new Date(e.target.value) })}
        />
        <input
          type="number"
          className={styles.inputField}
          placeholder="Usuario ID"
          value={newTask.usuario_id}
          onChange={(e) => setNewTask({ ...newTask, usuario_id: Number(e.target.value) })}
        />
        <button className={styles.button} onClick={isEditing ? handleEditTask : handleAddTask}>
          {isEditing ? 'Guardar cambios' : 'Crear Tarea'}
        </button>
        <button className={styles.button} onClick={closeModal}>Cancelar</button>
      </Modal>
  
      <Modal
        isOpen={successModalIsOpen}
        onRequestClose={closeSuccessModal}
        className={`${styles.modal} ${styles.successModal}`}
        overlayClassName={styles.overlay}
      >
        <h2>Éxito</h2>
        <p>{isEditing ? 'La tarea se editó con éxito.' : 'La tarea se creó con éxito.'}</p>
        <button className={styles.button} onClick={closeSuccessModal}>Aceptar</button>
      </Modal>
  
      <Modal
        isOpen={deleteSuccessModalIsOpen}
        onRequestClose={closeDeleteSuccessModal}
        className={`${styles.modal} ${styles.deleteSuccessModal}`}
        overlayClassName={styles.overlay}
      >
        <h2>Éxito</h2>
        <p>La tarea se eliminó con éxito.</p>
        <button className={styles.button} onClick={closeDeleteSuccessModal}>Aceptar</button>
      </Modal>
    </div>
  );
};

export default TasksPage;
