import React, { useState } from 'react';
import Form from './Components/Form';
import Cards from './Components/Card/Cards';

function App() {
  const [task, setTask] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(null);

  const HandleForm = (data) => {
    if (isEditing) {
      setTask((prevTasks) =>
        prevTasks.map((t, index) => (index === currentTaskIndex ? data : t))
      );
      setIsEditing(false);
      setCurrentTaskIndex(null);
    } else {
      setTask([...task, data]);
    }
  };

  const handleDelete = (id) => {
    setTask(() => task.filter((elem, index) => index !== id));
  };

  const handleEdit = (index) => {
    setCurrentTaskIndex(index);
    setIsEditing(true);
  };

  return (
    <div className=' flex lg:flex-row flex-col bg-zinc-900 text-white'>
      <Form 
        HandleFormsSubmit={HandleForm} 
        isEditing={isEditing} 
        currentTask={isEditing ? task[currentTaskIndex] : {}} 
      />
      <Cards 
        handleDelete={handleDelete} 
        handleEdit={handleEdit} 
        task={task} 
      />
    </div>
  );
}

export default App;
