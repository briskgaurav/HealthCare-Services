import React from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

function Card({ handleDelete, handleEdit, elem, id }) {
  return (
    <div className="bg-zinc-700/35 z-10 px-5 py-2 flex h-fit max-h-[40vh] w-full flex-col lg:w-[25%] rounded-md">
      <div className="flex items-center relative h-fit w-full justify-between">
        <h1 className="w-full text-lg font-semibold">{elem.name}</h1>
        <div onClick={() => handleDelete(id)} className="p-2 text-lg hover:bg-red-500 bg-red-600 rounded-lg">
          <MdDelete />
        </div>
      </div>
      <p className="font-thin text-sm mt-5">
        {elem.description}
      </p>
      <h1 className="w-full mt-4 text-md font-semibold">Price: {elem.price}</h1>
      <div 
        onClick={() => handleEdit(id)} 
        className="px-5 py-2 mt-4 mb-1 flex justify-center hover:bg-blue-500 bg-blue-600 rounded-md cursor-pointer"
      >
        <FaEdit />
      </div>
    </div>
  );
}

export default Card;
