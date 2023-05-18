
import { useState } from 'react';
import './App.css';
import Navbar from './Models/Navbar';
import SearchBar from './Models/SearchBar';
import TodoForm from './Models/TodoForm';

function App() {
  const [title, setTitle] = useState("");
  const [titleController, setTitleController] = useState("");
  const [taskController, setTaskController] = useState("");

  return (
    <div className="App flex flex-col">
      {/* Navbar */}
      <Navbar />
      {/* Search Bar & Adding Post options */}
      <div className='flex flex-col mx-10 my-10 gap-5'>
        <SearchBar text={"Search by title"} textController={title} setTextController={setTitle} />

        <TodoForm
          titleController={titleController}
          setTitleController={setTitleController}
          bodyController={taskController}
          setBodyController={setTaskController}
        />

        <div className='flex group flex-col relative cursor-pointer' >
          <button className='bg-purple-600 px-4 py-2 rounded-xl text-white '>
            Add Todo
          </button>
          <div className='absolute bg-white duration-200 opacity-30 w-full  bottom-0 left-0 right-0 h-0 group-hover:h-full rounded-xl'></div>
        </div>
      </div>


    </div>
  );
}

export default App;
