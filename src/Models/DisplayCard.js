import React, { useState } from 'react'
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';

function DisplayCard({title,body,index,todoList,setTodoList,filterOn}) {

    const deleteTask=()=>{
        let tempList=Array.from(todoList);
        tempList.splice(index,1);
        setCompleted(false);
        setTodoList(tempList);
    }
    const [completed,setCompleted]=useState(false);


    if(filterOn===true && completed===true){
        return (
    
            <div className='flex flex-col gap-3 w-96 p-3 rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                <p className={`font-bold ${completed?"line-through":""}`}>{title}</p>
                <p className={` ${completed?"line-through":""}`}>{body}</p>
                <div className='flex justify-between items-center'>
                    <label className='flex gap-2'>
                        <input  checked={completed} type='checkbox' onClick={(e)=>{
                            setCompleted(!completed);
                            // console.log(completed);
                        }}  value={completed}/>
                        Completed?
                    </label>
        
                    <button className='px-3 py-2 bg-pink-300 rounded-xl' onClick={deleteTask}>
                        <DeleteSharpIcon/>
                    </button>
                </div>
            </div>
          )
    }
    if(filterOn===true && completed===false){
        return <div className='hidden absolute'></div>
    }
  return (
    
    <div className='flex flex-col gap-3 w-96 p-3 rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
        <p className={`font-bold ${completed?"line-through":""}`}>{title}</p>
        <p className={` ${completed?"line-through":""}`}>{body}</p>
        <div className='flex justify-between items-center'>
            <label className='flex gap-2'>
                <input checked={completed} type='checkbox' onClick={(e)=>{
                    setCompleted(!completed);
                    // console.log(completed);
                }} value={completed}/>
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