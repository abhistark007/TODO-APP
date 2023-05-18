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


  const [filterStatus,setFilterStatus]=useState(false);


 


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

        {/* Filter BUtton */}
        <div className='flex gap-10 justify-center'>
            <button onClick={()=>setFilterStatus(true)}
            className={`bg-purple-600 px-4 py-2 text-white rounded-xl duration-200 ${filterStatus?"bg-pink-600":""}`}>
                Filter ON
            </button>
            <button onClick={()=>setFilterStatus(false)}
            className={`bg-purple-600 px-4 py-2 text-white rounded-xl duration-200 ${filterStatus?"":"bg-pink-600"}`}>
                Filter OFF
            </button>
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
                  filterOn={filterStatus}
                />)
              })
            }
          </div>)
      }



    </div>
  )
}

export default HomePage