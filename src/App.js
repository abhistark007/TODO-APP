
// import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Models/Navbar';
// import SearchBar from './Models/SearchBar';
// import TodoForm from './Models/TodoForm';
// import DisplayCard from './Models/DisplayCard';
// import { toast } from 'react-hot-toast';
import { Route, Router, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';

function App() {
  // const [titleSearch, setTitleSearch] = useState("");
  // const [titleController, setTitleController] = useState("");
  // const [taskController, setTaskController] = useState("");

  // const [todoList, setTodoList] = useState([]);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   try {
  //     fetch('https://jsonplaceholder.typicode.com/posts')
  //       .then((response) => response.json())
  //       .then((json) => {
  //         setTodoList(json);
  //       });
  //   } catch (e) {
  //     console.log("Error occured while initial fetching using useEffect");
  //     console.log(e.message);
  //   }
  // }, []);


  // const addTodo = async () => {
  //   setLoading(true);
  //   try {
  //     await fetch('https://jsonplaceholder.typicode.com/posts', {
  //       method: 'POST',
  //       body: JSON.stringify({
  //         title: titleController,
  //         body: taskController,
  //       }),
  //       headers: {
  //         'Content-type': 'application/json; charset=UTF-8',
  //       },
  //     }).then((response) => response.json())
  //       .then((json) => {
  //         console.log(json);
  //         let tempList = Array.from(todoList);
  //         // console.log(tempList);
  //         tempList.push(json);
  //         setTodoList(tempList);
  //         // console.log("TODO LIST => ",todoList);
  //         setTitleController("");
  //         setTaskController("");
  //       });
  //       toast.success("Todo Added Successfully")

  //   } catch (e) {
  //     console.log("Error occured while adding TODO");
  //     console.log(e.message);
  //     toast.error("Todo failed to be added")
  //   }
  //   setLoading(false);
  // }



  return (
      <div className='flex flex-col'>
        <Navbar/>
        <Routes>
          <Route path='/'  element={<HomePage/>}/>
          {/* <Route path='/search' /> */}

        </Routes>
      </div>
   );
}

export default App;
