import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';

import SearchBar from '../Models/SearchBar';
import TodoForm from '../Models/TodoForm';
import DisplayCard from '../Models/DisplayCard';
import '../App.css'

function HomePage({todoList,setTodoList}) {
  const [titleSearch, setTitleSearch] = useState("");
  const [titleController, setTitleController] = useState("");
  const [taskController, setTaskController] = useState("");

  
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("I AM HERE");
    try {
       fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => {
          setTodoList(json);
        });
    } catch (e) {
      console.log("Error occured while initial fetching using useEffect");
      console.log(e.message);
    }
  },[]);


  const addTodo = async () => {
    setLoading(true);
    try {
      await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: titleController,
          body: taskController,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then((response) => response.json())
        .then((json) => {
          console.log(json);
          let tempList = Array.from(todoList);
          // console.log(tempList);
          tempList.push(json);
          setTodoList(tempList);
          // console.log("TODO LIST => ",todoList);
          setTitleController("");
          setTaskController("");
        });
        toast.success("Todo Added Successfully")

    } catch (e) {
      console.log("Error occured while adding TODO");
      console.log(e.message);
      toast.error("Todo failed to be added")
    }
    setLoading(false);
  }
  return (
    <div className="App flex flex-col mb-20">
      
      {/* Search Bar & Adding Post options */}
      <div className='flex flex-col mx-10 my-10 gap-5'>
        <SearchBar text={"Search by title"} textController={titleSearch} setTextController={setTitleSearch} todoList={todoList} />

        <TodoForm
          titleController={titleController}
          setTitleController={setTitleController}
          bodyController={taskController}
          setBodyController={setTaskController}
        />

        <div className='flex group flex-col relative cursor-pointer' onClick={addTodo}>
          <button className='bg-purple-600 px-4 py-2 rounded-xl text-white '>
            Add Todo
          </button>
          <div className='absolute bg-white duration-200 opacity-30 w-full  bottom-0 left-0 right-0 h-0 group-hover:h-full rounded-xl'></div>
        </div>
      </div>
      {/* Display Output Section */}
      {
        loading ? (<div className='flex flex-col pt-10 items-center mx-10'>
          <div className="custom-loader"></div>
        </div>) :
          (<div className='flex flex-col mx-10 items-center gap-10'>
            {
              todoList.map((todo, index) => {
                return (<DisplayCard
                  key={index}
                  index={index}
                  title={todo.title}
                  body={todo.body}
                  todoList={todoList}
                  setTodoList={setTodoList}
                />)
              })
            }
          </div>)
      }



    </div>
  )
}

export default HomePage