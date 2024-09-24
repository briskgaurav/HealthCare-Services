import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

function Form({ HandleFormsSubmit, isEditing, currentTask }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (isEditing) {
      reset(currentTask);
    } else {
      reset();
    }
  }, [isEditing, currentTask, reset]);

  const handleformSubmit = (data) => {
    HandleFormsSubmit(data);
  };

  return (
    <div className="lg:w-[20vw] w-screen f px-4 py-20 h-fit lg:h-screen bg-zinc-800/60 rounded-tr-lg rounded-br-lg">
      <h1 className="font-bold text-center mb-10 text-3xl  lg:text-2xl text-zinc-300">
        {isEditing ? "Edit Service 📄" : "Add Services 🩺"}
      </h1>
      <form
        className="flex flex-col items-center gap-5"
        action=""
        onSubmit={handleSubmit(handleformSubmit)}
      >
        <input
          {...register("name", {required:true})}
          className="px-10 py-2 rounded-md bg-zinc-700 font-medium"
          type="text"
          placeholder="Name"
        />
        <textarea
          {...register("description" ,{required:true})}
          className="px-5 py-2 rounded-md bg-zinc-700 font-medium"
          type="text"
          rows="5" cols="27"
          placeholder="Description"
        />
         <input
          {...register("price", {required:true})}
          className="px-10 py-2 rounded-md bg-zinc-700 font-medium"
          type="number"
          placeholder="Price"
        />
        <button className="px-16 mt-4 hover:bg-blue-500 bg-blue-600 font-medium rounded-md py-2">
          {isEditing ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
}

export default Form;
