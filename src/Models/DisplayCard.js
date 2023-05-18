import React from 'react'
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';

function DisplayCard({title,body,index,todoList,setTodoList}) {
    const deleteTask=()=>{
        let tempList=Array.from(todoList);
        tempList.splice(index,1);
        setTodoList(tempList);
    }
  return (
    <div className='flex flex-col gap-3 w-96 p-3 rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
        <p>{title}</p>
        <p>{body}</p>
        <div className='flex justify-between items-center'>
            <label className='flex gap-2'>
                <input type='checkbox'/>
                Completed?
            </label>

            <button className='px-3 py-2 bg-pink-300 rounded-xl' onClick={deleteTask}>
                <DeleteSharpIcon/>
            </button>
        </div>
    </div>
  )
}

export default DisplayCard