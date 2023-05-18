

import './App.css';
import Navbar from './Models/Navbar';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import SearchPage from './Pages/SearchPage';
import { useEffect, useState } from 'react';

function App() {


  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    console.log("I AM HERE");
    async function getData(){
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
    }

    getData();
  },[]);


  return (
      <div className='flex flex-col'>
        <Navbar/>
        <Routes>
          <Route path='/'  element={<HomePage todoList={todoList} setTodoList={setTodoList}/>}/>
          <Route path='/search/:title' element={<SearchPage todoList={todoList} />}/>

        </Routes>
      </div>
   );
}

export default App;
