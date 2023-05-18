

import './App.css';
import Navbar from './Models/Navbar';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import SearchPage from './Pages/SearchPage';
import { useState } from 'react';

function App() {


  const [todoList, setTodoList] = useState([]);


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
