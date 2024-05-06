"use client"
import React, { useState } from "react";

const Page = () => {
  const [title, setTitle] = useState("");
  const [mainTask, setMainTask] = useState([]);
  const [desc, setDesc] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (title.trim() === "" || desc.trim() === "") {
      return; // Prevent adding empty tasks
    }
    const newTask = { title, desc };
    setMainTask((prevMainTask) => [...prevMainTask, newTask]);
    console.log("Task added:", newTask);
    setTitle("");
    setDesc("");
  };

  const deleteHandler = (index) => {
    const updatedTasks = [...mainTask];
    updatedTasks.splice(index, 1);
    setMainTask(updatedTasks);
  };

  let renderTasks = <h2>No Tasks Available</h2>;

  if (mainTask.length > 0) {
    renderTasks = mainTask.map((task, index) => (
      <li key={index} className="flex items-center justify-between mb-5">
        <div className="flex justify-between w-2/3">
          <h5 className="text-2xl font-semibold">{task.title}</h5>
          <h6 className="text-xl font-semibold">{task.desc}</h6>
        </div>
        <button
          onClick={() => deleteHandler(index)}
          className="bg-red-400 text-white font-bold rounded px-4 py-2"
        >
          Delete
        </button>
      </li>
    ));
  }

  return (
    <>
      <h1 className="bg-black text-white text-5xl p-5 font-bold text-center">
        Priyanshu's TODO List
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2"
          placeholder="Enter Title Here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2"
          placeholder="Enter Description Here"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button
          type="submit"
          className="bg-black px-4 py-3 m-5 text-white text-2xl font-bold rounded"
        >
          Add Task
        </button>
      </form>
      <hr />
      <div className="p-8 bg-slate-200">
        <ul>{renderTasks}</ul>
      </div>
    </>
  );
};

export default Page;
