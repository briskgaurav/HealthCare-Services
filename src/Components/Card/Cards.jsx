import React from 'react';
import Card from './Card';

function Cards({ task, handleDelete, handleEdit }) {
  return (
    <div className=' flex items-center lg:overflow-hidden justify-center gap-4 lg:gap-8 p-4 flex-wrap'>
      <div className='h-full pointer-events-none w-screen bg-transparent absolute left-0 flex items-center justify-center lg:justify-end lg:pr-52 text-zinc-800/50'>
        <h1 className='text-4xl lg:text-[8vw] mt-20 lg:m-0 font-bold'>Health-Care</h1>
      </div>
      {task.map((elem, index) => (
        <Card 
          key={index} 
          id={index} 
          elem={elem} 
          handleDelete={handleDelete} 
          handleEdit={handleEdit} 
        />
      ))}
    </div>
  );
}

export default Cards;
