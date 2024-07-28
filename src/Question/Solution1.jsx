import React, { useState } from 'react';
import './Solution1.css';

const Solution1 = () => {
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);
  const [id, setId] = useState(0);
  const [editScreen, setScreen] = useState(null);
  const [editInput, setEditInput] = useState('');
  const [priority, setPriority] = useState('mid');

  const addTaskHandler = () => {
    if (input === '') return;
    setList([...list, { id, name: input, priority }]);
    setId(id + 1);
    setInput('');
  };

  const deleteHandler = (taskId) => {
    const newList = list.filter((item) => item.id !== taskId);
    setList(newList);
  };

  const editHandler = (taskId) => {
    setScreen(taskId);
    const taskToEdit = list.find((item) => item.id === taskId);
    if (taskToEdit) {
      setEditInput(taskToEdit.name);
      setPriority(taskToEdit.priority);
    }
  };

  const saveEdit = (taskId) => {
    setList(list.map((data) => (data.id === taskId ? { ...data, name: editInput, priority } : data)));
    setScreen(null);
    setEditInput('');
  };

  const lowPrio = list.filter((data) => data.priority === 'low');
  const midPrio = list.filter((data) => data.priority === 'mid');
  const highPrio = list.filter((data) => data.priority === 'high');

  return (
    <div className="solution-container">
      <div className="input-container">
        <input
          type='text'
          placeholder='Add task'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="task-input"
        />
        <select
          onChange={(e) => setPriority(e.target.value)}
          className="priority-select"
          value={priority}
        >
          <option value='low'>Low</option>
          <option value='mid'>Mid</option>
          <option value='high'>High</option>
        </select>
        <button onClick={addTaskHandler} className="add-button">Add</button>
      </div>
      <div className="task-list">
        {highPrio.map((item) => (
          <div key={item.id} className={`task-item ${item.priority}`}>
            <div className="task-name">{item.name}</div>
            <div>
              <button onClick={() => editHandler(item.id)} className="edit-button">Edit</button>
            </div>
            <div>
              <button onClick={() => deleteHandler(item.id)} className="delete-button">Delete</button>
            </div>
          </div>
        ))}
        {midPrio.map((item) => (
          <div key={item.id} className={`task-item ${item.priority}`}>
            <div className="task-name">{item.name}</div>
            <div>
              <button onClick={() => editHandler(item.id)} className="edit-button">Edit</button>
            </div>
            <div>
              <button onClick={() => deleteHandler(item.id)} className="delete-button">Delete</button>
            </div>
          </div>
        ))}
        {lowPrio.map((item) => (
          <div key={item.id} className={`task-item ${item.priority}`}>
            <div className="task-name">{item.name}</div>
            <div>
              <button onClick={() => editHandler(item.id)} className="edit-button">Edit</button>
            </div>
            <div>
              <button onClick={() => deleteHandler(item.id)} className="delete-button">Delete</button>
            </div>
          </div>
        ))}
      </div>
      {editScreen !== null && (
        <div className="edit-container">
          <input
            type='text'
            placeholder='Edit task'
            value={editInput}
            onChange={(e) => setEditInput(e.target.value)}
            className="edit-input"
          />
          <select
            onChange={(e) => setPriority(e.target.value)}
            className="priority-select"
            value={priority}
          >
            <option value='low'>Low</option>
            <option value='mid'>Mid</option>
            <option value='high'>High</option>
          </select>
          <button onClick={() => setScreen(null)} className="cancel-button">X</button>
          <button onClick={() => saveEdit(editScreen)} className="save-button">Save</button>
        </div>
      )}
    </div>
  );
};

export default Solution1;
